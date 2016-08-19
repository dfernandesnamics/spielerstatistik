(function ($) {
	"use strict";
	/**
	 * detailview module implementation.
	 *
	 * @author Daniel Fernandes <daniel.fernandes@namics.com>
	 * @namespace Tc.Module
	 * @class Detailview
	 * @extends Tc.Module
	 */
	Tc.Module.Detailview = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);
			// var mod = this;
			// var player = mod.$ctx.data('player');
			// $('body').addClass(player);

		},

		on: function (callback) {
			var mod = this,
				$ctx = mod.$ctx;


			callback();
		},

		after: function () {
			var mod = this,
				$ctx = mod.$ctx;


		}

	});
}(Tc.$));
