(function(app) {
	"use strict"

	class Hero {
		constructor(conf = {}) {
			this.id = conf.id || 0|0
			this.name = conf.name || ""
		}
	}

	app.Hero = Hero
})(window.app || (window.app = {}))
