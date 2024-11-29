import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  message: SafeHtml | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  showMessage(contact: string): void {
    if (contact === 'gmail') {
      this.message = this.sanitizer.bypassSecurityTrustHtml('You can reach me at: <a href="mailto:xavierzuesosiasavelino@gmail.com">xavierzuesosiasavelino@gmail.com</a>');
    } else if (contact === 'callme') {
      this.message = this.sanitizer.bypassSecurityTrustHtml('Feel free to call me at: <a href="tel:+639933214383">+639933214383</a>');
    } else if (contact === 'facebook') {
      this.message = this.sanitizer.bypassSecurityTrustHtml('Visit my Facebook: <a href="https://www.facebook.com/ozias.zues/" target="_blank">https://www.facebook.com/ozias.zues/</a>');
    }
  }
}