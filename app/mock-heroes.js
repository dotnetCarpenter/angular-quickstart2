(function(app) {
  "use strict"

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

	app.HEROES = HEROES

})(window.app || (window.app = {}))