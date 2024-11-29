import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  scrollToEducation() {
    const educationSection = document.getElementById('education');
    if (educationSection) {
      educationSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}