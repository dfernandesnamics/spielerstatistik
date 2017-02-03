(function ($) {
	"use strict";
	/**
	 * playerview module implementation.
	 *
	 * @author Daniel Fernandes <daniel.fernandes@namics.com>
	 * @namespace Tc.Module
	 * @class Playerview
	 * @extends Tc.Module
	 */
	Tc.Module.Playersview = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);


		},

		on: function (callback) {
			var mod = this,
				$ctx = mod.$ctx;

			this.jsonData();

			callback();
		},

		jsonData: function (evt, data) {
			var mod = this;
			$.ajax({
				url: "/views/data",
				method: "post",
				success: function (response) {
					mod.processJson(response);

				}
			});

		},
		processJson: function (data) {
			var mod = this;
			
			
			
			var playerListObject = {
				"players" : data
			};
			
			mod.buildHomeScreen({
				picSrc: playerListObject
			});
			console.log(playerListObject);
		},
		
		buildHomeScreen: function (dataObject) {
			var mod = this;
			var templateSrc = $('#content-holder').html(),
				template = Handlebars.compile(templateSrc),
				html = template(dataObject),
				$outlet = $('.js-outlet-playersview', mod.$ctx);
				
				
			$outlet.html(html);
		},

		after: function () {
			var mod = this,
				$ctx = mod.$ctx;


		}

	})
	;
}(Tc.$));
