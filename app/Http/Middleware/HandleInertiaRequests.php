<?php

namespace App\Http\Middleware;

use App\Models\ApplicationInfo;
use App\Models\ItemCategory;
use App\Models\Link;
use App\Models\Page;
use App\Models\Post;
use Illuminate\Foundation\Inspiring;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        [$message, $author] = str(Inspiring::quotes()->random())->explode('-');

        return [
            ...parent::share($request),
            'name' => config('app.name'),
            'app_url' => config('app.url'),
            'quote' => ['message' => trim($message), 'author' => trim($author)],
            'auth' => [
                'user' => $request->user(),
                'roles' => $request->user() ? $request->user()->getRoleNames() : [],
                'permissions' => $request->user() ? $request->user()->getAllPermissions()->pluck('name') : [],
            ],
            'ziggy' => fn(): array => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],

            'locale' => session('locale'),
            'can_switch_language' => config('app.can_switch_language'),
            'CKEDITOR_USE_FILE_FULL_PATH' => env('CKEDITOR_USE_FILE_FULL_PATH'),

            'application_info' => ApplicationInfo::first(),
            'links_follow_us' => Link::where('status', 'active')->where('type', 'follow_us')->orderBy('order_index')->get(),
            'links_chat_with_us' => Link::where('status', 'active')->where('type', 'chat_with_us')->orderBy('order_index')->get(),
            'item_categories' => ItemCategory::with('children')->withCount('items')->where('status', 'active')->where('parent_code', null)->orderBy('order_index')->orderBy('name')->get() ?? [],
            'post_counts' => Post::where('status', 'active')->count(),

            // Westec
            'pages_menus' => [
                'abouts' => Page::where('code', 'ABOUT-US')
                    ->with(['children' => function ($query) {
                        $query->select('id', 'code', 'parent_id', 'title', 'title_kh');
                    }])
                    ->where('status', 'active')
                    ->first(['id', 'code', 'title', 'title_kh']),
                'solutions' => Page::where('code', 'SOLUTION')
                    ->with(['children' => function ($query) {
                        $query->select('id', 'code', 'parent_id', 'title', 'title_kh');
                    }])
                    ->where('status', 'active')
                    ->first(['id', 'code', 'title', 'title_kh']),
                'case_studies' => Page::where('code', 'CASE-STUDIES')
                    ->with(['children' => function ($query) {
                        $query->select('id', 'code', 'parent_id', 'title', 'title_kh');
                    }])
                    ->where('status', 'active')
                    ->first(['id', 'code', 'title', 'title_kh']),

            ],
            // End Westec

            'flash' => [
                'success' => session('success'),
                'error' => session('error'),
                'warning' => session('warning'),
            ],
        ];
    }
}
