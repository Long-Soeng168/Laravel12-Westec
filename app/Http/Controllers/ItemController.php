<?php

namespace App\Http\Controllers;

use App\Exports\ItemDailyViewExport;
use App\Helpers\ImageHelper;
use App\Helpers\TelegramHelper;
use App\Models\Item;
use App\Models\ItemBodyType;
use App\Models\ItemBrand;
use App\Models\Link;
use App\Models\ItemCategory;
use App\Models\ItemDailyView;
use App\Models\ItemImage;
use App\Models\ItemModel;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Routing\Controllers\HasMiddleware;
use Maatwebsite\Excel\Facades\Excel;

class ItemController extends Controller implements HasMiddleware
{
    public static function middleware(): array
    {
        return [
            new Middleware('permission:item view', only: ['index', 'show']),
            new Middleware('permission:item create', only: ['create', 'store']),
            new Middleware('permission:item update', only: ['edit', 'update', 'update_status']),
            new Middleware('permission:item delete', only: ['destroy', 'destroy_image']),
        ];
    }

    public function index(Request $request)
    {
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'id');
        $sortDirection = $request->input('sortDirection', 'desc');
        $status = $request->input('status');

        $query = Item::query();

        $query->with('created_by', 'updated_by', 'images', 'category');

        if ($status) {
            $query->where('status', $status);
        }
        $query->orderBy($sortBy, $sortDirection);

        if ($search) {
            $query->where(function ($sub_query) use ($search) {
                return $sub_query->where('name', 'LIKE', "%{$search}%")
                    ->orWhere('name_kh', 'LIKE', "%{$search}%")
                    ->orWhere('id', 'LIKE', "%{$search}%");
            });
        }

        $tableData = $query->paginate(perPage: 10)->onEachSide(1);

        return Inertia::render('admin/items/Index', [
            'tableData' => $tableData,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        return Inertia::render('admin/items/Create', [
            'itemCategories' => ItemCategory::where('status', 'active')->orderBy('id', 'desc')->get(),
            'itemBrands' => ItemBrand::where('status', 'active')->orderBy('id', 'desc')->get(),
            'itemModels' => ItemModel::where('status', 'active')->orderBy('id', 'desc')->get(),
            'itemBodyTypes' => ItemBodyType::where('status', 'active')->orderBy('id', 'desc')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'code' => 'nullable|string|max:255',
            'name' => 'required|string|max:255',
            'name_kh' => 'nullable|string|max:255',
            'short_description' => 'nullable|string|max:1000',
            'short_description_kh' => 'nullable|string|max:1000',
            'long_description' => 'nullable|string',
            'long_description_kh' => 'nullable|string',
            'link' => 'nullable|string|max:255',
            'category_code' => 'nullable|string|exists:item_categories,code',
            'brand_code' => 'nullable|string|exists:item_brands,code',
            'model_code' => 'nullable|string|exists:item_models,code',
            'body_type_code' => 'nullable|string|exists:item_body_types,code',
            'status' => 'nullable|string|in:active,inactive',
            'images' => 'required|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);


        $validated['created_by'] = $request->user()->id;
        $validated['updated_by'] = $request->user()->id;
        // $validated['post_date'] = Carbon::parse($validated['post_date'])->setTimezone('Asia/Bangkok')->startOfDay()->toDateString();


        $image_files = $request->file('images');
        unset($validated['images']);

        foreach ($validated as $key => $value) {
    if ($value === '') {
        $validated[$key] = null;
    }
}

        $created_item = Item::create($validated);

        if ($image_files) {
            try {
                foreach ($image_files as $image) {
                    $created_image_name = ImageHelper::uploadAndResizeImageWebp($image, 'assets/images/items', 600);
                    ItemImage::create([
                        'image' => $created_image_name,
                        'item_id' => $created_item->id,
                    ]);
                }
            } catch (\Exception $e) {
                return redirect()->back()->with('error', 'Failed to upload images: ' . $e->getMessage());
            }
        }
        $result = TelegramHelper::sendItemToTelegram($created_item->id);

        if (!$result['success']) {
            session()->flash('error', $result['message']);
            session()->flash('success', 'Item Created Successfully!.');
        } else {
            session()->flash('success', 'Item Created Successfully!.');
        }
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Item $item)
    {
        return Inertia::render('admin/items/Create', [
            'editData' => $item->load('images'),
            'readOnly' => true,
            'itemCategories' => ItemCategory::where('status', 'active')->orderBy('id', 'desc')->get(),
            'itemBrands' => ItemBrand::where('status', 'active')->orderBy('id', 'desc')->get(),
            'itemModels' => ItemModel::where('status', 'active')->orderBy('id', 'desc')->get(),
            'itemBodyTypes' => ItemBodyType::where('status', 'active')->orderBy('id', 'desc')->get(),

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */

    public function edit(Item $item)
    {
        return Inertia::render('admin/items/Create', [
            'editData' => $item->load('images'),
            'itemCategories' => ItemCategory::where('status', 'active')->orderBy('id', 'desc')->get(),
            'itemBrands' => ItemBrand::where('status', 'active')->orderBy('id', 'desc')->get(),
            'itemModels' => ItemModel::where('status', 'active')->orderBy('id', 'desc')->get(),
            'itemBodyTypes' => ItemBodyType::where('status', 'active')->orderBy('id', 'desc')->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Item $item)
    {
        // dd($request->all());
        $validated = $request->validate([
            'code' => 'nullable|string|max:255',
            'name' => 'required|string|max:255',
            'name_kh' => 'nullable|string|max:255',
            'short_description' => 'nullable|string|max:1000',
            'short_description_kh' => 'nullable|string|max:1000',
            'long_description' => 'nullable|string',
            'long_description_kh' => 'nullable|string',
            'link' => 'nullable|string|max:255',
            'category_code' => 'nullable|string|exists:item_categories,code',
            'brand_code' => 'nullable|string|exists:item_brands,code',
            'model_code' => 'nullable|string|exists:item_models,code',
            'body_type_code' => 'nullable|string|exists:item_body_types,code',
            'status' => 'nullable|string|in:active,inactive',
            'images' => 'nullable|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);

        $validated['updated_by'] = $request->user()->id;
        // $validated['post_date'] = Carbon::parse($validated['post_date'])->setTimezone('Asia/Bangkok')->startOfDay()->toDateString();

        $image_files = $request->file('images');
        unset($validated['images']);

        // foreach ($validated as $key => $value) {
        //     if ($value === null || $value === '') {
        //         unset($validated[$key]);
        //     }
        // }

        $item->update($validated);

        if ($image_files) {
            try {
                foreach ($image_files as $image) {
                    $created_image_name = ImageHelper::uploadAndResizeImageWebp($image, 'assets/images/items', 600);
                    ItemImage::create([
                        'image' => $created_image_name,
                        'item_id' => $item->id,
                    ]);
                }
            } catch (\Exception $e) {
                return redirect()->back()->with('error', 'Failed to upload images: ' . $e->getMessage());
            }
        }
        return redirect()->back()->with('success', 'Item Updated Successfully!.');
    }

    public function update_status(Request $request, Item $item)
    {
        $request->validate([
            'status' => 'required|string|in:active,inactive',
        ]);
        $item->update([
            'status' => $request->status,
        ]);

        return redirect()->back()->with('success', 'Status updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Item $item)
    {
        if (count($item->images) > 0) {
            foreach ($item->images as $image) {
                ImageHelper::deleteImage($image->image, 'assets/images/items');
            }
        }
        $item->delete();
        return redirect()->back()->with('success', 'Item deleted successfully.');
    }

    public function destroy_image(ItemImage $image)
    {
        // Debugging (Check if model is found)
        if (!$image) {
            return redirect()->back()->with('error', 'Image not found.');
        }

        // Call helper function to delete image
        ImageHelper::deleteImage($image->image, 'assets/images/items');

        // Delete from DB
        $image->delete();

        return redirect()->back()->with('success', 'Image deleted successfully.');
    }


    public function item_view_counts(Request $request)
    {
        $search = $request->input('search', '');
        $sortBy = $request->input('sortBy', 'view_date');
        $sortDirection = $request->input('sortDirection', 'desc');
        $status = $request->input('status');
        $from_date = $request->input('from_date', null);
        $to_date = $request->input('to_date', null);


        $from_date = $from_date
            ? Carbon::parse($from_date)->setTimezone('Asia/Bangkok')->startOfDay()->toDateString()
            : Carbon::now()->setTimezone('Asia/Bangkok')->startOfYear()->toDateString();
        $to_date = $to_date
            ? Carbon::parse($to_date)->setTimezone('Asia/Bangkok')->endOfDay()->toDateString()
            : now()->endOfDay()->toDateString();

        $query = ItemDailyView::query();


        if ($from_date) {
            // dd($from_date);
            $query->where('view_date', '>=', $from_date);
        }

        if ($to_date) {
            $query->where('view_date', '<=', $to_date);
        }

        if ($status) {
            $query->where('status', $status);
        }
        $query->orderBy($sortBy, $sortDirection);

        $query->with('item');

        if ($search) {
            $query->whereHas('item', function ($subQuery) use ($search) {
                $subQuery->where('name', 'LIKE', "%{$search}%")
                    ->orWhere('id', 'LIKE', "%{$search}%");
            });
        }
        // Clone the query for total views calculation
        $totalViews = (clone $query)->sum('view_counts');

        $tableData = $query->paginate(perPage: 10)->onEachSide(1);

        return Inertia::render('admin/items/ItemViewCount', [
            'tableData' => $tableData,
            'totalViews' => $totalViews,
            'from_date' => $from_date,
            'to_date' => $to_date,
        ]);
    }

    public function item_view_counts_export(Request $request)
    {
        // dd($request->all());
        $from_date = $request->input('from_date', null);
        $to_date = $request->input('to_date', null);

        $from_date = $from_date
            ? Carbon::parse($from_date)->setTimezone('Asia/Bangkok')->startOfDay()->toDateString()
            : Carbon::now()->setTimezone('Asia/Bangkok')->startOfYear()->toDateString();
        $to_date = $to_date
            ? Carbon::parse($to_date)->setTimezone('Asia/Bangkok')->endOfDay()->toDateString()
            : now()->endOfDay()->toDateString();
        // dd($from_date, $to_date);

        $filters = [
            'search' => $request->input('search', ''),
            'status' => $request->input('status'),
            'sortBy' => $request->input('sortBy', 'view_date'),
            'sortDirection' => $request->input('sortDirection', 'desc'),
            'from_date' => $from_date,
            'to_date' => $to_date,
        ];

        return Excel::download(new ItemDailyViewExport($filters), 'item_views.xlsx');
    }
}
