<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SupportRequestMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    // Just set subject, no replyTo
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Support Request Mail'
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.support-request'
        );
    }

    public function attachments(): array
    {
        return [];
    }
}

