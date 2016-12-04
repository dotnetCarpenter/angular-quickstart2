(function(app) {
  "use strict"

  //const Hero = app.Hero // needed for TS @input
  // - in js we use 'inputs' and just add the name of our public API; 'hero',
  // while in TS we add a @input interface to our hero property

  app.HeroDetailComponent =
    ng.core.Component({
      selector: "my-hero-detail",
			template: `
				<div *ngIf="hero"><!-- only add this if 'hero' is not falsy -->
          <h2>{{hero.name}} details!</h2>
          <div><label>id: </label>{{hero.id}}</div>
          <div>
              <label>name: </label>
              <input [(ngModel)]="hero.name" placeholder="name" type="text">
          </div>
        </div>
			`,
			inputs: ["hero"]
    })
    .Class({
      constructor: function() {}
    })
})(window.app || (window.app = {}))
