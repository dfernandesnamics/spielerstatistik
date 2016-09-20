(function ($) {
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
					var player = mod.$ctx.data('player');
					mod.processJson(response);

				}
			});

		},
		processJson: function (data) {
			var mod = this;
			var player = $('.js-player-id', mod.$ctx).val();

			console.log(data[player]);
			mod.buildTemplatePicProfile({
				profilPic: data[player].infos.profilePicSrc,
				name: data[player].infos.firstLastName,
				playerName: data[player].infos.cssClass
			});
			mod.buildTemplateInfoTable({
				playerName: data[player]
			});
			mod.buildTemplateSeasonTable({
				playerName: data[player],
				playerId: data[player]
			})
			

		},
		
		buildTemplatePicProfile: function (dataObject) {
			var mod = this;
			var templateSrc = $('#tpl-profpic').html(),
				template = Handlebars.compile(templateSrc),
				html = template(dataObject),
				$outlet = $('.js-outlet-profilpic-module', mod.$ctx);
			
				$outlet.html(html);
			
		},
		buildTemplateInfoTable: function(dataObject) {
			var mod = this;
			var templateSrc = $('#tpl-inftbl').html(),
				template = Handlebars.compile(templateSrc),
				html = template(dataObject),
				$outlet = $('.js-outlet-info-season-table', mod.$ctx);
			
				$outlet.html(html);
		},
		buildTemplateSeasonTable: function(dataObject) {
			var mod = this;
			var templateSrc = $('#tpl-seasntbl').html(),
				template = Handlebars.compile(templateSrc),
				html = template(dataObject),
				$outlet = $('.js-outlet-info-season-table', mod.$ctx);
			
				$outlet.html(html);
		},
		
		
		after: function () {
			var mod = this,
				$ctx = mod.$ctx;


		}

	});
}(Tc.$));
