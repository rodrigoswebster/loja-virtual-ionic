import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irParaHome(){
    this.navCtrl.push('HomePage');
  }

  irParaCompras(){
    this.navCtrl.push('ComprasPage');
  }

  irParaAtualizarPerfil(){
    this.navCtrl.push('AtualizarPerfilPage');
  }

  irParaSair(){
    this.navCtrl.setRoot('LogoffPage');
  }

}
