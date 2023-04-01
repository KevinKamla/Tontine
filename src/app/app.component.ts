import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private navCtrl: NavController) { }



  ngOnInit() {
    if (1 != 1 ) { // Si l'utilisateur ne s'est pas encore loggé   
      this.navCtrl.navigateForward('firstpage');
    }
  }

}
