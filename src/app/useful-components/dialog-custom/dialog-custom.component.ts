import { Input, Component } from '@angular/core';
import { DataExchangeService } from 'src/app/services/data-exchange.service';

@Component({
  selector: 'app-dialog-custom',
  templateUrl: './dialog-custom.component.html',
  styleUrls: ['./dialog-custom.component.css']
})
export class DialogCustomComponent {

  @Input('title') title: string = '';


  constructor(public dataExchangeService: DataExchangeService){}

  hideDialog() {
    this.dataExchangeService.showDialog = false;
  }

  getItaResume() {
    console.log('scaricato il cv in italiano')
    this.hideDialog();
  }

  getEnResume() {
    console.log('scaricato il cv in inglese')
    this.hideDialog();
  }
}
