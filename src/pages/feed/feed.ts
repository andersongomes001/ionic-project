import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario:string = "New User";
  public data_publicacao:string = "November 5, 1955";
  public image:string = "https://blog.emania.com.br/content/uploads/2015/12/paisagem-tropical-wallpaper-1.jpg";
  public likes:number = 10;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }
  public newLike():  void{
    this.likes = this.likes + 1;
    console.log(this.likes);
  }

}
