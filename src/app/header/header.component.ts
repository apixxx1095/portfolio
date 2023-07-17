import { Component, EventEmitter, Output } from '@angular/core';
import { TEXT } from '../utils/texts';
import { LABELS } from '../utils/labels';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() dialogEvent = new EventEmitter<boolean>();

  //LABELS 
  readonly HOME = LABELS.HOME;
  readonly ABOUT = LABELS.ABOUT;
  readonly SKILLS = LABELS.SKILLS;
  readonly BLOG = LABELS.BLOG;
  readonly MORE = LABELS.MORE;
  readonly CONTACT = LABELS.CONTACT;
  readonly DOWNLOAD_CV = LABELS.DOWNLOAD_CV;

  readonly SHORT_DESCRIPTION: TEXT = TEXT.SHORT_DESCRIPTION;

  constructor(){}
  
  openDialog(){
    console.log('aperto HeaderComponent dialog!!')
    this.dialogEvent.emit(true);
  }

}
