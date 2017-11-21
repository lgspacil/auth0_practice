import { Component } from '@angular/core';
import {AuthService} from './services/auth.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App';

  constructor (private auth:AuthService){

  }
}
