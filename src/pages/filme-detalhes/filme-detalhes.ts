import { MovieProvider } from '../../providers/movie/movie';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
})
export class FilmeDetalhesPage {
  public filme = null;
  private filmeid;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider : MovieProvider,
  ) {
  }

  ionViewDidEnter() { 
    this.filmeid = this.navParams.get("id");
    console.log('ionViewDidLoad FilmeDetalhesPage');
    this.carregarDetalhes();
  }

  carregarDetalhes(){
    this.movieProvider.getMovieLatests(this.filmeid).subscribe(
      data=>{
        const response = (data as any);
        const body = JSON.parse(response._body);
        this.filme = body;
        
        console.log(body);
      },
      error => {
        console.log(error);
      }
    );
  }

}
