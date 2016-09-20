(function ($) {
	"use strict";
	/**
	 * saisonview module implementation.
	 *
	 * @author Daniel Fernandes <daniel.fernandes@namics.com>
	 * @namespace Tc.Module
	 * @class Saisonview
	 * @extends Tc.Module
	 */
	Tc.Module.Saisonview = Tc.Module.extend({

		init: function ($ctx, sandbox, modId) {
			this._super($ctx, sandbox, modId);


		},

		on: function (callback) {
			var mod = this,
				$ctx = mod.$ctx;

			mod.getPlayerData();
			
			$ctx.on('startProcess', $.proxy(mod.getPlayerData, mod));

			callback();
		},


		getPlayerData: function (evt, data) {
			var mod = this;
			$.ajax({
				url: "/views/data",
				method: "post",
				success: function (response) {
					var player = mod.$ctx.data('player');
					var season = mod.$ctx.data('season');
					if (typeof (response[player].seasons[season]) === 'undefined') {
						alert('not defined');
					}
					mod.processData(response);

				},
				error: function (error) {
					alert(error);
				}
			})
		},

		processData: function (data) {
			var mod = this;
			var player = mod.$ctx.data('player');
			var season = mod.$ctx.data('season');
			$('body').addClass(player);
			$('body').addClass('saison');


			$(data[player].seasons[season].data).each(
				function (index, item) {
					var html = "<tr>";
					html += "<td>";
					html += item.competition;
					html += "</td>";
					html += "<td>";
					html += item.deployments;
					html += "</td>";
					html += "<td>";
					html += item.goals;
					html += "</td>";
					html += "<td>";
					html += item.assists;
					html += "</td>";
					html += "<td>";
					html += item.yellowCards;
					html += "</td>";
					html += "<td>";
					html += item.yellowRedCards;
					html += "</td>";
					html += "<td>";
					html += item.redCards;
					html += "</td>";
					html += "<td>";
					html += item.playMinutes;
					html += "</td>";
					html += "</tr>";


					$(".js-table-content").append(html);
				}
			);
			var clubName = $(data[player].specialAttributes);
			if (season == season) {
				$('.seasonTitle').append("<h3>" + season + "</h3>");
				$('.seasonteam').append("<h3>" + clubName[0].club + "</h3>");
			}
		},


		after: function () {
			var mod = this,
				$ctx = mod.$ctx;


		}

	});
}(Tc.$));
