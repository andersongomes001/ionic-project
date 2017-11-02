import { SobrePage } from '../sobre/sobre';
import { PerfilPage } from '../perfil/perfil';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';
import { IntroPage } from './../intro/intro';
import { Component } from '@angular/core';

//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = FeedPage;
  Tab5Root = ConfiguracoesPage; 
  Tab6Root = PerfilPage;
  Tab7Root = SobrePage;

  constructor() {

  }
}
