import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  message: string = '';

  openCV() {
    window.open('./assets/resume-xavxav.pdf');
  }

  goToContact() {
    alert('Please contact this number: +639933214383');
  }

  handleSocialClick(platform: string) {
    this.showRandomMessage(platform);
    switch (platform) {
      case 'TikTok':
        location.href = 'https://www.tiktok.com/@xavv.25';
        break;
      case 'GitHub':
        location.href = 'https://github.com/Xavierbaliw';
        break;
      case 'Facebook':
        location.href = 'https://www.facebook.com/ozias.zues';
        break;
      default:
        break;
    }
  }

  private showRandomMessage(platform: string) {
    const messages = [
      '😂 Ang cute ko!',
    ];

    if (platform === 'TikTok') {
      messages.push('📹 Let’s dance!');
    } else if (platform === 'GitHub') {
      messages.push('🌟 Code is art!');
    } else if (platform === 'Facebook') {
      messages.push('📱 Connect with friends!');
    }

    this.message = messages[Math.floor(Math.random() * messages.length)];
    
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }
}