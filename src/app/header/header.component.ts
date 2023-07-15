import { Component } from '@angular/core';
import { DataExchangeService } from '../services/data-exchange.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  readonly title: string = 'Lingua cv';

  constructor(private dataExchangeService: DataExchangeService){}
  
  openDialog(){
    console.log('aperto dialog!!')
    this.dataExchangeService.showDialog = true;
  }

}
