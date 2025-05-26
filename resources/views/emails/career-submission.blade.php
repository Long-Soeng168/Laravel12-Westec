@component('mail::message')
# 📄 New Career Submission

A new career submission was received from your website.

---

**Name:** {{ $data['name'] }} <br>
**Email:** {{ $data['email'] }} <br>
**Phone:** {{ $data['phone'] }} <br>
**Position Applied:** {{ $data['position']['name'] }} <br>

@component('mail::button', ['url' => 'mailto:'.$data['email']])
Reply to {{ $data['name'] }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent