(function($) {
	"use strict";
	/**
	 * renatosanches skin implementation for the profilepicture module.
	 *
	 * @author Daniel Fernandes <daniel.fernandes@namics.com>
	 * @namespace Tc.Module.Profilepicture
	 * @class Renatosanches
	 * @extends Tc.Module
	 */
	Tc.Module.Profilepicture.Renatosanches = function(parent) {

		this.on = function(callback) {
			var mod = this,
				$ctx = mod.$ctx;



			parent.on(callback);
		};

		this.after = function() {
			var mod = this,
				$ctx = mod.$ctx;



			parent.after();
		};

	};
}(Tc.$));
