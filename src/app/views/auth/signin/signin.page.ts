import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  constructor(
    
    private navCtrl : NavController
  ) { }

  goHome(){
    this.navCtrl.navigateForward('home');
  }
  signup(){
    this.navCtrl.navigateForward('signup');
  }

  forgotPassword(){

  }


  ngOnInit() {
  }

}
