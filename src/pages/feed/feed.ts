import { FilmeDetalhesPage } from './../filme-detalhes/filme-detalhes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers:[
    MovieProvider
  ]
})
export class FeedPage {
  public object_feed = {
    nome_usuario: "New User",
    data_publicacao: "November 5, 1955",
    image: "https://blog.emania.com.br/content/uploads/2015/12/paisagem-tropical-wallpaper-1.jpg",
    likes: 10,
  };  

  public lista_filmes = new Array<any>();
  public loader;
  public refresher;
  public isRefresher: boolean = false;
  public page = 1;
  public infiniteScroll;



  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider : MovieProvider,
    public loadingCtrl: LoadingController
  ) {
  
  }

  //so na primeira vez que carrega a pagina
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad FeedPage');
  }
  //sempre que entra na pagina
  ionViewDidEnter(){
    this.carregarFilmes();
  }
  public newLike():  void{
    
  }
  abrirCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    this.loader.present();
  }
  fecharCarregando(){
    this.loader.dismiss();
  }
  doRefresh(refresher) {
    this.isRefresher = true;
    this.refresher = refresher;
    this.carregarFilmes();
  }
  carregarFilmes(newpage:boolean = false){
    this.abrirCarregando();
    this.movieProvider.getMovieLatest(this.page).subscribe(
      data=>{
        const response = (data as any);
        const body = JSON.parse(response._body);
        if(newpage){
          this.lista_filmes = this.lista_filmes.concat(body.results);
          this.infiniteScroll.complete();
        }else{
          this.lista_filmes = body.results;
        }
        
        this.fecharCarregando();
        if(this.isRefresher){
          this.refresher.complete();
          this.isRefresher = false;
        }
        console.log(body);
      },
      error => {
        this.fecharCarregando();
        console.log(error);
      }
    );
  }
  public abrirDetalhes(filme){
    this.navCtrl.push(FilmeDetalhesPage,{ id: filme.id });
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);

    //infiniteScroll.complete();
  }

}
