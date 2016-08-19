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

		this.getPlayerInfo = function () {
			var mod = this;
			$.ajax({
				url: "/views/data",
				method: "post",
				success: function (response) {
					mod.processInfos(response);
				}
			})
		};
		this.processInfos = function (data) {
			var mod = this;
			var player = mod.$ctx.data('player');
			var season = mod.$ctx.data('season');
			$('body').addClass(player);

			$(data[player].info).each(
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
					$(".js-table-content").append(html);
				}
			)
		}
			,

			this.after = function () {
				var mod = this,
					$ctx = mod.$ctx;


				parent.after();
			};

	};
}(Tc.$));
