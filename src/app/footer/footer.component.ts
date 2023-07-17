import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../utils/socials-links';
import { LABELS } from '../utils/labels';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  readonly FACEBOOK: SOCIAL_LINKS = SOCIAL_LINKS.FACEBOOK;
  readonly INSTAGRAM: SOCIAL_LINKS = SOCIAL_LINKS.INSTAGRAM;
  readonly LINKEDIN: SOCIAL_LINKS = SOCIAL_LINKS.LINKEDIN;
  readonly GITHUB: SOCIAL_LINKS = SOCIAL_LINKS.GITHUB;

  // LABELS
  readonly MORE = LABELS.MORE;
  readonly ABOUT_ME = LABELS.ABOUT_ME;
  readonly MY_SKILLS = LABELS.MY_SKILLS;
  readonly PRIVACY_POLICY = LABELS.PRIVACY_POLICY; 
  readonly CONTACT_ME = LABELS.CONTACT_ME;
  readonly PHONE = LABELS.PHONE;
  readonly EMAIL = LABELS.EMAIL;
  readonly FOLLOW_ME = LABELS.FOLLOW_ME;

}
