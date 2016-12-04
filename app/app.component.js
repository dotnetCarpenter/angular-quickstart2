(function(app) {

  const Hero = app.Hero

  /**
   * @description The HEROES array is of type Hero, the class defined in part one, to create an array of heroes. We aspire to fetch this list of heroes from a web service, but let’s take small steps first and display mock heroes.
   */
  const HEROES = [
    new Hero({ id: 11, name: "Mr. Nice" }),
    new Hero({ id: 12, name: "Narco" }),
    new Hero({ id: 13, name: "Bombasto" }),
    new Hero({ id: 14, name: "Celeritas" }),
    new Hero({ id: 15, name: "Magneta" }),
    new Hero({ id: 16, name: "RubberMan" }),
    new Hero({ id: 17, name: "Dynama" }),
    new Hero({ id: 18, name: "Dr IQ" }),
    new Hero({ id: 19, name: "Magma" }),
    new Hero({ id: 20, name: "Tornado" })
  ]

  app.AppComponent =
    ng.core.Component({
      directives: [app.HeroDetailComponent],
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
      constructor: function() {
        this.title = "Tour of Heroes"
        this.heroes = HEROES
        this.selectedHero
      },
      onSelect(hero) {
        this.selectedHero = hero
      }
    })
})(window.app || (window.app = {}))
