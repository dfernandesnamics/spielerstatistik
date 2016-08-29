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

		},

		on: function (callback) {
			var mod = this,
				$ctx = mod.$ctx;

			this.getPlayerInfo();

			callback();
		},

		getPlayerInfo: function () {
		var mod = this;
		$.ajax({
			url: "/views/data",
			method: "post",
			success: function (response) {
				mod.processInfos(response);
			}
		})
	},
	processInfos: function (data) {
		var mod = this;
		var player = mod.$ctx.data('player');
		var season = mod.$ctx.data('season');
		$('body').addClass(player);

		$(data[player].info
		).each(
			function (index, item) {
				var html = "<tr>";
				html += "<td>";
				html += "Name:";
				html += "</td>";
				html += "<td>";
				html += item.firstLastName;
				html += "</td>";
				html += "<td>";
				html += "Geburtsdatum:";
				html += "</td>";
				html += "<td>";
				html += item.gebDatum;
				html += "</td>";
				html += "</tr>";
				html += "<tr>";
				html += "<td>";
				html += "Nationalität:";
				html += "</td>";
				html += "<td>";
				html += item.nationalitaet;
				html += "</td>";
				html += "<td>";
				html += "Geburtsort:";
				html += "</td>";
				html += "<td>";
				html += item.geburtsort;
				html += "</td>";
				html += "</tr>";
				html += "<tr>";
				html += "<td>";
				html += "Position:";
				html += "</td>";
				html += "<td>";
				html += item.positionFeld;
				html += "</td>";
				html += "<td>";
				html += "Grösse:";
				html += "</td>";
				html += "<td>";
				html += item.groesse;
				html += "</td>";
				html += "</tr>";
				html += "<tr>";
				html += "<td>";
				html += "Berater:";
				html += "</td>";
				html += "<td>";
				html += item.berater;
				html += "</td>";
				html += "<td>";
				html += "Länderspiele/Tore:";
				html += "</td>";
				html += "<td>";
				html += item.landSpieleSlashTore;
				html += "</td>";
				html += "</tr>";

				console.log(html);
				$(".js-flat-table").append(html);
			}
		)
	},

	after: function () {
		var mod = this,
			$ctx = mod.$ctx;


	}

})
	;
}(Tc.$));
