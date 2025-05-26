@component('mail::message')
# 📩 New Support Request

You've received a new support request from your website.

---

**Name:** {{ $data['name'] }}  <br>
**Email:** {{ $data['email'] }}  <br>
**Phone:** {{ $data['phone'] }}  <br>
**Subject:** {{ $data['subject'] }} <br>

---

## Message:

{{ $data['message'] }}

@component('mail::button', ['url' => 'mailto:'.$data['email']])
Reply to {{ $data['name'] }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent