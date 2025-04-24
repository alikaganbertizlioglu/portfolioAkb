import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { EducationComponent } from '../../components/education/education.component';
import { CertificatesComponent } from '../../components/certificates/certificates.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    CertificatesComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-skills></app-skills>
    <app-experience></app-experience>
    <app-education></app-education>
    <app-certificates></app-certificates>
    <app-projects></app-projects>
    <app-contact></app-contact>
  `
})
export class HomeComponent {} 