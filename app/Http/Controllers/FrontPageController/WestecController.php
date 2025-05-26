<?php

namespace App\Http\Controllers\FrontPageController;

use App\Helpers\FileHelper;
use App\Http\Controllers\Controller;
use App\Mail\CareerSubmissionMail;
use App\Mail\ProjectInquiryMail;
use App\Mail\SupportRequestMail;
use App\Models\Banner;
use App\Models\Career;
use App\Models\CareerSubmit;
use App\Models\Heading;
use App\Models\Link;
use App\Models\Message;
use App\Models\MessageInquiry;
use App\Models\MessageInquirySolution;
use App\Models\Page;
use App\Models\PagePosition;
use App\Models\Position;
use App\Models\Post;
use App\Models\Team;
use App\Models\TeamCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class WestecController extends Controller
{
    public function index()
    {
        $security_detail = Page::where('code', 'SECURITY-&-SAFETY-SOLUTIONS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $smart_home_detail = Page::where('code', 'SMART-HOME-&-OFFICE-SOLUTIONS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $commercial_detail = Page::where('code', 'COMMERCIAL-&-RESIDENTIAL-EQUIPMENTS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $it_solution_detail = Page::where('code', 'IT-SOLUTIONS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $partners_detail = Link::where('type', 'partner')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->get();
        $clients_detail = Link::where('type', 'client')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->get();
        $news_detail = Post::where('category_code', 'NEWS-AND-UPDATES')
            ->where('status', 'active')
            ->with('images')
            ->orderBy('id', 'desc')
            ->get();
        $events_detail = Post::where('category_code', 'EVENTS-AND-PROMOTIONS')
            ->where('status', 'active')
            ->with('images')
            ->orderBy('id', 'desc')
            ->get();

        $solution_boosters = Page::where('position_code', 'SOLUTION-BOOSTERS')
            ->where('parent_id', null)
            ->where('status', 'active')
            ->with('images', 'children.images')
            ->orderBy('id', 'desc')
            ->get();

        $banners = Banner::where('position_code', 'TOP_HOMEPAGE')->where('status', 'active')->get();

        $contact_heading_1 = Heading::where('status', 'active')->where('code', 'SOLUTION-HEADING-CONTACT-1')->first();
        $contact_heading_2 = Heading::where('status', 'active')->where('code', 'SOLUTION-HEADING-CONTACT-2')->first();

        return Inertia::render('westec/Index', [
            'security_detail' => $security_detail,
            'smart_home_detail' => $smart_home_detail,
            'commercial_detail' => $commercial_detail,
            'it_solution_detail' => $it_solution_detail,
            'partners_detail' => $partners_detail,
            'clients_detail' => $clients_detail,
            'news_detail' => $news_detail,
            'events_detail' => $events_detail,
            'banners' => $banners,
            'solution_boosters' => $solution_boosters,
            'contact_heading_1' => $contact_heading_1,
            'contact_heading_2' => $contact_heading_2,
        ]);
    }

    public function about()
    {
        $abouts_detail = Page::where('code', 'ABOUT-US')
            ->with('images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $why_choose_westec_detail = Page::where('code', 'WHY-CHOOSE-WESTEC?')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $vision_detail = Page::where('code', 'VISION')
            ->with('images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $our_commitment_detail = Page::where('code', 'OUR-COMMITMENT')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $our_journey_detail = Page::where('code', 'OUR-JOURNEY')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();

        $contact_heading_1 = Heading::where('status', 'active')->where('code', 'ABOUT-HEADING-CONTACT-1')->first();

        // return $our_commitment_detail;
        return Inertia::render('westec/About', [
            'abouts_detail' => $abouts_detail,
            'why_choose_westec_detail' => $why_choose_westec_detail,
            'vision_detail' => $vision_detail,
            'our_commitment_detail' => $our_commitment_detail,
            'our_journey_detail' => $our_journey_detail,
            'contact_heading_1' => $contact_heading_1,
        ]);
    }
    public function solutions()
    {
        $security_detail = Page::where('code', 'SECURITY-&-SAFETY-SOLUTIONS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $smart_home_detail = Page::where('code', 'SMART-HOME-&-OFFICE-SOLUTIONS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $commercial_detail = Page::where('code', 'COMMERCIAL-&-RESIDENTIAL-EQUIPMENTS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $it_solution_detail = Page::where('code', 'IT-SOLUTIONS')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $banners = Banner::where('position_code', 'TOP_HOMEPAGE')->where('status', 'active')->get();

        $contact_heading_1 = Heading::where('status', 'active')->where('code', 'SOLUTION-HEADING-CONTACT-1')->first();
        $contact_heading_2 = Heading::where('status', 'active')->where('code', 'SOLUTION-HEADING-CONTACT-2')->first();
        // return $our_commitment_detail;
        return Inertia::render('westec/Solutions', [
            'security_detail' => $security_detail,
            'smart_home_detail' => $smart_home_detail,
            'commercial_detail' => $commercial_detail,
            'it_solution_detail' => $it_solution_detail,
            'banners' => $banners,
            'contact_heading_1' => $contact_heading_1,
            'contact_heading_2' => $contact_heading_2,
        ]);
    }
    public function case_studies()
    {
        $banking_detail = Page::where('code', 'BANKING')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $embassy_detail = Page::where('code', 'EMBASSY')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $microfinance_detail = Page::where('code', 'MICROFINANCE')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $manufacturing_detail = Page::where('code', 'MANUFACTURING')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $construction_detail = Page::where('code', 'CONSTRUCTION')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();
        $entertainment_detail = Page::where('code', 'ENTERTAINMENT')
            ->with('images', 'children.images')
            ->where('status', 'active')
            ->orderBy('order_index')
            ->first();

        $contact_heading_1 = Heading::where('status', 'active')->where('code', 'CASE-STUDY-HEADING-CONTACT-1')->first();
        $contact_heading_2 = Heading::where('status', 'active')->where('code', 'CASE-STUDY-HEADING-CONTACT-2')->first();

        return Inertia::render('westec/CaseStudies', [
            'banking_detail' => $banking_detail,
            'embassy_detail' => $embassy_detail,
            'microfinance_detail' => $microfinance_detail,
            'manufacturing_detail' => $manufacturing_detail,
            'construction_detail' => $construction_detail,
            'entertainment_detail' => $entertainment_detail,
            'contact_heading_1' => $contact_heading_1,
            'contact_heading_2' => $contact_heading_2,
        ]);
    }

    public function career()
    {
        $team_categories = TeamCategory::with(['teams' => function ($query) {
            $query->where('status', 'active')->orderBy('order_index');
        }])->where('status', 'active')->get();
        $careers = Career::with('position')->where('status', 'active')->get();

        $contact_heading_1 = Heading::where('status', 'active')->where('code', 'CAREER-HEADING-CONTACT-1')->first();

        // return $team_categories;
        return Inertia::render('westec/Career', [
            'team_categories' => $team_categories,
            'careers' => $careers,
            'contact_heading_1' => $contact_heading_1,
        ]);
    }

    public function contact()
    {
        $solutions = Page::with(['images', 'children' => function ($query) {
            $query->with('children', 'images')->where('status', 'active')->orderBy('order_index');
        }])->where('code', 'SOLUTION')->where('status', 'active')->first();
        $contact_heading_1 = Heading::where('status', 'active')->where('code', 'CONTACT-HEADING-1')->first();

        $banners = Banner::where('position_code', 'CONTACT_PAGE')->where('status', 'active')->orderBy('order_index')->first();

        // return $solutions;
        return Inertia::render('westec/Contact', [
            'solutions' => $solutions,
            'contact_heading_1' => $contact_heading_1,
            'banners' => $banners,
        ]);
    }

    public function submit_career(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'position_code' => 'required|string|max:255',
            'career_id' => 'required|integer|exists:careers,id',
            'cv' => 'required|file|mimes:pdf,doc,docx|max:20480',
        ]);

        // dd($data);

        try {
            DB::transaction(function () use ($data, $request) {
                // Create DB record first

                // Handle file upload if exists
                if ($request->hasFile('cv')) {
                    $created_file_name = FileHelper::uploadFile(
                        $request->file('cv'),
                        'assets/files/careers',
                        true,
                    );
                    $data['cv_file'] = $created_file_name;
                    unset($data['cv']);
                    $file_path = public_path('/assets/files/careers/' . $created_file_name);
                } else {
                    $file_path = null;
                }


                $created_message = CareerSubmit::create($data);

                $data['position'] = Position::where('code', $data['position_code'])->first();
                // Send mail
                $to = env('MAIL_HR_TEAM');
                Mail::to($to)->send(new CareerSubmissionMail($data, $file_path));
            });

            return redirect()->back()->with('success', 'Submit Successfully!');
        } catch (\Exception $e) {
            dd($e);

            // Log::error('Career submission failed: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Failed to submit. Please contact support directly.');
        }
    }


    public function submit_support_request(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|max:500',
        ]);

        try {
            $to = env('MAIL_SALES_TEAM');
            Mail::to(env($to))->send(new SupportRequestMail($data));

            // If no exception was thrown, consider it sent
            Message::create($data);

            return redirect()->back()->with('success', 'Submit Successfully!');
        } catch (\Exception $e) {
            // Log the error for debugging
            // \Log::error('Support request failed: ' . $e->getMessage());

            return redirect()->back()->with('error', 'Failed to submit. Please contact support directly.');
        }
    }
    public function submit_product_inquiry(Request $request)
    {
        // dd($request->all());
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:50',
            'subject' => 'nullable|string',
            'other' => 'nullable|string|max:500',
            'solution_ids' => 'nullable|array',
            'solution_ids.*' => 'integer|exists:pages,id',
        ]);

        $solution_ids = $data['solution_ids'] ?? [];
        unset($data['solution_ids']);

        // dd($data);

        try {
            DB::transaction(function () use ($data, $solution_ids) {
                $created_message = MessageInquiry::create($data);
                $solution_names = [];
                foreach ($solution_ids as $id) {
                    $solution = Page::find($id);
                    if ($solution) {
                        MessageInquirySolution::create([
                            'solution_name' => $solution->title,
                            'message_id' => $created_message->id,
                            'solution_id' => $solution->id,
                        ]);

                        $solution_names[] = $solution->title;
                    }
                }
                $data['solutions'] = $solution_names;

                // dd($data);

                $to = env('MAIL_SALES_TEAM');
                Mail::to($to)->send(new ProjectInquiryMail($data));
            });

            return redirect()->back()->with('success', 'Submit Successfully!');
        } catch (\Exception $e) {
            // Log::error('Product inquiry failed: ' . $e->getMessage());

            return redirect()->back()->with('error', 'Failed to submit. Please contact support directly.');
        }
    }
}
