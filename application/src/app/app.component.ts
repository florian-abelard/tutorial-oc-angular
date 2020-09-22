import { Component } from '@angular/core';
import { Post } from './model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Array<Post> = [];

  constructor() {

    this.posts.push(
      new Post(
        '8 habitudes de développeur(euse)s qui font progresser',
        'Avec le temps, j\'ai fini par comprendre que ce qui comptait le plus dans ce métier, c\'était les habitudes. Toutes ces petites décisions et façons de faire.'
      )
    );
    this.posts.push(
      new Post(
        'Faut-il être passionné(e) pour être développeur(euse) ?',
        'La passion chez les développeurs est un concept qui met une pression folle à beaucoup de gens. Tu en entends parler en permanence.'
      )
    );
    this.posts.push(
      new Post(
        'L\'incroyable ego des développeur(euse)s',
        'L\'ego des développeurs est incroyable. J\'entends beaucoup parler du syndrome de l\'imposteur mais le syndrome de l\'énorme boulard est tout aussi présent.'
      )
    );
  }
}
