(function($) {
	"use strict";
	/**
	 * playerprofile-wrapper module implementation.
	 *
	 * @author Daniel Fernandes <daniel.fernandes@namics.com>
	 * @namespace Tc.Module
	 * @class PlayerprofileWrapper
	 * @extends Tc.Module
	 */
	Tc.Module.PlayerprofileWrapper = Tc.Module.extend({

		init: function($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);



		},

		on: function(callback) {
			var mod = this,
				$ctx = mod.$ctx;



			callback();
		},

		after: function() {
			var mod = this,
				$ctx = mod.$ctx;


		}

	});
}(Tc.$));
