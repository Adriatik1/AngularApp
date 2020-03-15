import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/Auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

 register(){
   this.authService.register(this.model).subscribe(() => {
     console.log('good');
   }, error => { console.log('failed'); });
  }

 cancel() {
   this.cancelRegister.emit(false);
   console.log('canceled');
 }

}
