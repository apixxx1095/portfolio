import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../utils/socials-links';

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

}
