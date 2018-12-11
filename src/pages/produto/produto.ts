import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irParaCarrinho(){
    this.navCtrl.setRoot('CarrinhoPage');
  }

}
