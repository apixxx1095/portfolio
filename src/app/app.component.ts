import { Component } from '@angular/core';
import { DataExchangeService } from './services/data-exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  readonly titleDialog: string = 'Resume language choice';

  constructor(private dataExchangeService: DataExchangeService){}

  onOpenDialog(){
    console.log('aperto AppComponent dialog!!')
    this.dataExchangeService.showDialog = true;
  }
}
