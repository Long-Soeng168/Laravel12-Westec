<?php

use App\Http\Controllers\FrontPageController\WestecController;
use App\Mail\CareerSubmissionMail;
use App\Mail\ProjectInquiryMail;
use App\Mail\SupportRequestMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [WestecController::class, 'index'])->name('home');
Route::get('/about', [WestecController::class, 'about'])->name('about');
Route::get('/solutions', [WestecController::class, 'solutions'])->name('solutions');
Route::get('/case_studies', [WestecController::class, 'case_studies'])->name('case_studies');
Route::get('/career', [WestecController::class, 'career'])->name('career');
Route::get('/contact', [WestecController::class, 'contact'])->name('contact');
Route::post('/submit_support_request', [WestecController::class, 'submit_support_request'])->name('submit_support_request');
Route::post('/submit_product_inquiry', [WestecController::class, 'submit_product_inquiry'])->name('submit_product_inquiry');
Route::post('/submit_career', [WestecController::class, 'submit_career'])->name('submit_career');


Route::get('/detail/{id}', function ($id) {
    return Inertia::render('westec/Detail', [
        'id' => $id,
    ]);
})->name('detail');

// Route::get('/test_mail', function () {
//     $data = [
//         'name'    => 'Long Soeng',
//         'email'   => 'longsoeng@example.com',
//         'phone'   => '0987382371',
//         'subject' => 'Testing Support Request',
//         'message' => 'This is a test message for your support team from website.',
//     ];

//     $to = env('MAIL_SALES_TEAM');

//     Mail::to($to)
//         ->send(new SupportRequestMail($data));


//     return 'Mail sent successfully!';
// });

// Route::get('/test_career_mail', function () {
//     $data = [
//         'name' => 'Alice Doe',
//         'position' => 'Frontend Developer',
//         'email' => 'alice@example.com',
//         'phone' => '+855 88 123 4567'
//     ];

//     $to = env('MAIL_HR_TEAM');
//     $file_path = public_path('/assets/files/careers/samplepdf.pdf');

//     Mail::to($to)->send(new CareerSubmissionMail($data, $file_path));

//     return 'Career mail sent successfully!';
// });

// Route::get('/test_inquiry_mail', function () {

//     $data = [
//         'name' => 'Alice Smith',
//         'email' => 'alice@example.com',
//         'phone' => '0987654321',
//         'solutions' => ['CCTV', 'Audio System', 'Network Monitoring'],
//         'other' => 'We`d also like integration with existing systems.',
//     ];

//     $to = env('MAIL_SALES_TEAM');

//     Mail::to($to)->send(new ProjectInquiryMail($data));

//     return 'Inquiry mail sent successfully!';
// });
