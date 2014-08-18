/**
 * Testing GeoGebra applets
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/GeoGebraApplet.js]] ([[File:User:Helder.wiki/Tools/GeoGebraApplet.js]])
 */
/*jslint browser: true, white: true*/
/*global jQuery, mediaWiki */
( function ( $, mw /* , undefined */ ) {
'use strict';

var appletCode = '<applet name="ggbApplet" code="geogebra.GeoGebraApplet" archive="geogebra.jar"'+
	'codebase="http://www.geogebra.org/webstart/3.2/unsigned/"'+
	'width="892" height="519"mayscript="true">'+
	'<param name="ggbBase64" value="UEsDBBQACAAIAKeQjz4AAAAAAAAAAAAAAAAMAAAAZ2VvZ2VicmEueG1s3VbBcts2ED03X4Hh3RIpWnY8IzmjuBfPJM1Bbg69geRaQgUCLADKlP+pX9Efy+6ClGi5TSdJT9UFwmK52H1v95GLd12txR6cV9Ysk2ySJgJMaStlNsukDY8Xb5N3t28WG7AbKJwUj9bVMiyTfDJLyN6q2zc/LfzWPgmp2eWzgqdlElwLifCNA1n5LUCI5kepPdpl2ymtpDt8Kn6HMvjTQYxxb5o2DEHKuvqg/LCd8n2NVuFntVcVOKFtuUyu5pg5/vsMLqhS6mVymUbLbJnMzg7RlNPp1jr1bE0g91PwR7QI4dUzICAzsi2mXOcC2lKrSklDxXAe6CTEk6rCFlPIrzAkqM0Wc51n1zFaaa2r1gcfoBbdb+AsppPNCedD3OVx5zEvvHCe8tF4x2Fgv4YQkBUvZAd+wGbjVHUEjzb3/r3VJ1NjlQl3sgmtY0bz3rQOB4qPVznKd2U2GnpbhohvodwVtltHDPIY+uHQ8COcT7G5s9o64QjdOTr0axFX9qFEj14p+6Ts0cegoMfz7GbGHrwWcWUvrUxMrS88G6rO0uEa5QUZCEVsxAEbLQtAYhPRGhU+DBtsgN2pUvL/pa0LHIBxCxxDZv9RyMX0rHcWO3AGdOwQg8S2tvViT50YqeM8KihVjdt40AMiiaxfMYForWDjYMg7jk+Ei0/TcReemRfTIQnKwWOuZUAZwHoC1fLw15+h1VZUIKCDutGWBjfg0CyTVRuQtvFJJQPVPyfjqnBK059ZmmUJ3f9k3Y5l4AG6IGRh9+i8ouKQbNCE8KqQqrOcF2ioAYcwcMdxwx6xXyVHwbEsHmfcnEjE47/tPu5TqZutRMswX1oeUErGkHG8j7Z6CaQ0mDOjhBPdUACivAGIzRL6GRENBuSJG7HJJHjR0VM4UwfS25u3iXiOwss+cTpJVvjWvG+eCMi/QPP+/wBNzvqH8k3rtyBT2rqWphJG1njPGjZkZ0QUvU2ETKl5hMwIqIhCG4YDGaP1MV7h7PtoA5IyealMYYsSYMB7GtJjpdMfpSP9fjJOgF7MJumMIZ1NrhnSi8vJdX4z/p0r7VfqgT9M9PFR8RSOvypVOEKqidx7E1D/gPXktaztABp6m3wyD04aT98U0Wckl//A60dVxaZ/Sax8xejd1xl9OTl33zU5V5fMFS1FXH6crWxyNe/JQlq+aQCmYxHnj5b+o+32C1BLBwizk0a0ggMAAOYJAABQSwECFAAUAAgACACnkI8+s5NGtIIDAADmCQAADAAAAAAAAAAAAAAAAAAAAAAAZ2VvZ2VicmEueG1sUEsFBgAAAAABAAEAOgAAALwDAAAAAA=="/>'+
	'<param name="image" value="http://www.geogebra.org/webstart/loading.gif"  />'+
	'<param name="boxborder" value="false"  />'+
	'<param name="centerimage" value="true"  />'+
	'<param name="java_arguments" value="-Xmx512m -Djnlp.packEnabled=true" />'+
	'<param name="cache_archive" value="geogebra.jar, geogebra_main.jar, geogebra_gui.jar, geogebra_cas.jar, geogebra_export.jar, geogebra_properties.jar" />'+
	'<param name="cache_version" value="3.2.46.0, 3.2.46.0, 3.2.46.0, 3.2.46.0, 3.2.46.0, 3.2.46.0" />'+
'</applet>';
if ('Blankpage' === mw.config.get('wgCanonicalSpecialPageName')){
	$(function(){
		$('#bodyContent').append(appletCode);
	});
}

}( jQuery, mediaWiki ) );