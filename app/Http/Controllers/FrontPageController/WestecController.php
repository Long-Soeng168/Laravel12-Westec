<?php

namespace App\Http\Controllers\FrontPageController;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use App\Models\Career;
use App\Models\Link;
use App\Models\Page;
use App\Models\PagePosition;
use App\Models\Post;
use App\Models\Team;
use App\Models\TeamCategory;
use Illuminate\Http\Request;
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
        // return $our_commitment_detail;
        return Inertia::render('westec/About', [
            'abouts_detail' => $abouts_detail,
            'why_choose_westec_detail' => $why_choose_westec_detail,
            'vision_detail' => $vision_detail,
            'our_commitment_detail' => $our_commitment_detail,
            'our_journey_detail' => $our_journey_detail,
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

        // return $our_commitment_detail;
        return Inertia::render('westec/Solutions', [
            'security_detail' => $security_detail,
            'smart_home_detail' => $smart_home_detail,
            'commercial_detail' => $commercial_detail,
            'it_solution_detail' => $it_solution_detail,
            'banners' => $banners,
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
        return Inertia::render('westec/CaseStudies', [
            'banking_detail' => $banking_detail,
            'embassy_detail' => $embassy_detail,
            'microfinance_detail' => $microfinance_detail,
            'manufacturing_detail' => $manufacturing_detail,
            'construction_detail' => $construction_detail,
            'entertainment_detail' => $entertainment_detail,
        ]);
    }

    public function career()
    {
        $team_categories = TeamCategory::with(['teams' => function ($query) {
            $query->where('status', 'active')->orderBy('order_index');
        }])->where('status', 'active')->get();
        $careers = Career::with('position')->where('status', 'active')->get();
        // return $team_categories;
        return Inertia::render('westec/Career', [
            'team_categories' => $team_categories,
            'careers' => $careers,
        ]);
    }

    public function contact()
    {
        $solutions = Page::with(['images', 'children' => function ($query) {
            $query->with('children', 'images')->where('status', 'active')->orderBy('order_index');
        }])->where('code', 'SOLUTION')->where('status', 'active')->first();
        // return $solutions;
        return Inertia::render('westec/Contact', [
            'solutions' => $solutions,
        ]);
    }
}
