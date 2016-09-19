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

		jsonData();

			callback();
		},
		jsonData: function (evt, data) {
					var mod = this;
					$.ajax({
						url: "/views/data",
						method: "post ",
						success: function (response) {
							var player = mod.$ctx.data('player');
							var season = mod.$ctx.data('season');
							if (typeof (response[player].seasons[season]) === 'undefined') {
								alert('not defined');
							}
							mod.processData(response);
							console.log(data);
		
						},
						error: function (error) {
							alert(error);
						}
					})
				},

		after: function() {
			var mod = this,
				$ctx = mod.$ctx;


		}

	});
}(Tc.$));
