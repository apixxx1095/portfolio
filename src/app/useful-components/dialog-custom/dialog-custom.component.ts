import { Input, Component } from '@angular/core';
import { DataExchangeService } from 'src/app/services/data-exchange.service';

@Component({
  selector: 'app-dialog-custom',
  templateUrl: './dialog-custom.component.html',
  styleUrls: ['./dialog-custom.component.css']
})
export class DialogCustomComponent {

  @Input('title') title: string = '';
  private readonly it: string = 'IT';
  private readonly en: string = 'EN';
  private readonly RESUME_PATH = 'assets/resources/';
  private readonly PREFIX_NAME = 'resume_';

  constructor(public dataExchangeService: DataExchangeService) { }

  hideDialog() {
    this.dataExchangeService.showDialog = false;
  }

  getItaResume() {
    console.log('scaricato il cv in italiano')
    this.downloadResume(this.it);
    this.hideDialog();
  }

  getEnResume() {
    console.log('scaricato il cv in inglese')
    this.downloadResume(this.en);
    this.hideDialog();
  }

  downloadResume(language: string) {
    const link = document.createElement('a');
    link.href = `${this.RESUME_PATH + this.PREFIX_NAME + language}.pdf`;
    link.download = `${this.PREFIX_NAME + language}.pdf`;
    link.target = '_blank';
    link.click();
  }
}
