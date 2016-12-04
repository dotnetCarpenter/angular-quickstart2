(function(app) {
  "use strict"

  app.AppComponent =
    ng.core.Component({
      directives: [app.HeroDetailComponent],
      // for providers see: http://stackoverflow.com/questions/34532138/how-to-inject-custom-service-to-angular-component-in-plain-es5-javascript#34533955
      providers: [app.HeroService],
      selector: "my-app",
      template: `
        <h1>{{title}}</h1>
        <h2>My Heroes</h2>
        <ul class="heroes">
          <li
            *ngFor="let hero of heroes"
            (click)="onSelect(hero)"
            class="heroes__hero"
            [class.heroes__hero-selected]="hero === selectedHero"
          >
            <span class="heroes__badge">{{hero.id}}</span>
            <span class="heroes__text">{{hero.name}}</span>
          </li>
        </ul>
        <my-hero-detail [hero]="selectedHero"></my-hero-detail>
      `,
      styles: [`
        .heroes {
          margin: 0 0 2em 0;
          list-style-type: none;
          padding: 0;
          width: 15em;
        }
        .heroes__hero {
          cursor: pointer;
          position: relative;
          left: 0;
          background-color: #EEE;
          margin: .5em;
          padding: .3em 0;
          height: 1.6em;
          border-radius: 4px;
        }
        .heroes__hero:hover {
          color: #607D8B;
          background-color: #DDD;
          left: .1em;
        }
        .heroes__hero-selected {
          background-color: #CFD8DC;
          color: white;
        }
        .heroes__hero-selected:hover {
          background-color: #BBD8DC;
          color: white;
        }
        .heroes__text {
          position: relative;
          top: -3px;
        }
        .heroes__badge {
          display: inline-block;
          font-size: small;
          color: white;
          padding: 0.8em 0.7em 0 0.7em;
          background-color: #607D8B;
          line-height: 1em;
          position: relative;
          left: -1px;
          top: -4px;
          height: 1.8em;
          margin-right: .8em;
          border-radius: 4px 0 0 4px;
        }
      `]
    })
    .Class({
      constructor: [app.HeroService, function(heroService) {
        this.title = "Tour of Heroes"
        this.heroService = heroService
        this.heroes = []
        this.selectedHero
      }],
      ngOnInit() {
        this.getHeroes()
      },
      onSelect(hero) {
        this.selectedHero = hero
      },
      getHeroes() {
        this.heroService.getHeroes().then(heroes => { this.heroes = heroes })
        // Mock out 2 seconds latency to load heroes
        //this.heroService.getHeroesSlowly().then(heroes => { this.heroes = heroes })
      }
    })
})(window.app || (window.app = {}))
