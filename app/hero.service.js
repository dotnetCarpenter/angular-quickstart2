(function(app) {
	"use strict"

	const HEROES = app.HEROES

  //const Hero = app.Hero // needed for TS @input
  // - in js we use 'inputs' and just add the name of our public API; 'hero',
  // while in TS we add a @input interface to our hero property

  app.HeroService = ng.core.Class({
      constructor: function() {},

			getHeroes() {
				return Promise.resolve(HEROES)
			},

			getHeroesSlowly() {
				return new Promise(resolve =>
					setTimeout(resolve, 2000)) // delay 2 seconds
					.then(() => this.getHeroes())
			}
    })

})(window.app || (window.app = {}))
