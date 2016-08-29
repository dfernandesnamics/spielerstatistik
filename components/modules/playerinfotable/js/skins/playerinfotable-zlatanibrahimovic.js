(function ($) {
	"use strict";
	/**
	 * zlatanibrahimovic skin implementation for the playerinfotable module.
	 *
	 * @author Daniel Fernandes <daniel.fernandes@namics.com>
	 * @namespace Tc.Module.Playerinfotable
	 * @class Zlatanibrahimovic
	 * @extends Tc.Module
	 */
	Tc.Module.Playerinfotable.Zlatanibrahimovic = function (parent) {

		this.on = function (callback) {
			var mod = this,
				$ctx = mod.$ctx;
			mod.getPlayerInfo();

			parent.on(callback);
		};

		
			

			this.after = function () {
				var mod = this,
					$ctx = mod.$ctx;


				parent.after();
			};

	};
}(Tc.$));
