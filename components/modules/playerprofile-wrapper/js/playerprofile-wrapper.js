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

			mod.buildTemplatePicProfile({
				profilPic: data[player].specialAttributes.profilePicSrc,
				name: data[player].specialAttributes.naming,
				playerName: data[player].specialAttributes.cssClass
			});

			mod.buildTemplateSeasonTable({
				playerId: data[player].specialAttributes.cssClass,
				seasons: data[player].seasons
			});

			mod.buildTemplateInfoTable({
				playerData: data[player].infos
			});
		},

		buildTemplatePicProfile: function (dataObject) {
			var mod = this;
			var templateSrc = $('#tpl-profpic').html(),
				template = Handlebars.compile(templateSrc),
				html = template(dataObject),
				$outlet = $('.js-outlet-profilpic-module', mod.$ctx);

			$outlet.html(html);

		},

		buildTemplateSeasonTable: function (dataObject) {
			var mod = this;
			console.log(dataObject);
			var tempArray = [];

			for (var key in dataObject.seasons) {
				if (dataObject.seasons.hasOwnProperty(key)) {
					tempArray.push(key);
				}
			}

			dataObject.seasonKeys = tempArray;

			var templateSrc = $('#tpl-seasntbl').html(),
				template = Handlebars.compile(templateSrc),
				html = template(dataObject),
				$outlet = $('.js-outlet-season-table', mod.$ctx);

			$outlet.html(html);
		},

		buildTemplateInfoTable: function (dataObject) {
			var mod = this;
			
			var templateSrc = $('#tpl-inftbl').html(),
				template = Handlebars.compile(templateSrc),
				html = template(dataObject),
				$outlet = $('.js-outlet-info-table', mod.$ctx);

			$outlet.append(html);
		},
		after: function () {
			var mod = this,
				$ctx = mod.$ctx;


		}

	});
}(Tc.$));
