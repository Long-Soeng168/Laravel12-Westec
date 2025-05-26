@component('mail::message')
# 📝 New Project Inquiry

You have a new project inquiry from your website.

---

**Name:** {{ $data['name'] }} <br>
**Email:** {{ $data['email'] }} <br>
**Phone:** {{ $data['phone'] }} <br>

---

## 📦 Inquiry Solutions:
@if(!empty($data['solutions']) && is_array($data['solutions']))
@foreach($data['solutions'] as $solution)
- {{ $solution }}
@endforeach
@else
_No solutions selected._
@endif

---

**Other:**
{{ $data['other'] ?? '---' }}

@component('mail::button', ['url' => 'mailto:'.$data['email']])
Reply to {{ $data['name'] }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent