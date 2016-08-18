(function($) {
	"use strict";
	/**
	 * zlatanibrahimovic skin implementation for the playerseasontable module.
	 *
	 * @author Daniel Fernandes <daniel.fernandes@namics.com>
	 * @namespace Tc.Module.Playerseasontable
	 * @class Zlatanibrahimovic
	 * @extends Tc.Module
	 */
	Tc.Module.Playerseasontable.Zlatanibrahimovic = function(parent) {

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
