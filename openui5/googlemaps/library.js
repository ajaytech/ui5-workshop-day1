sap.ui.define(["jquery.sap.global","sap/ui/core/Core","sap/ui/core/library"],function(e){"use strict";return function(){var o=e.sap.getResourcePath("openui5/googlemaps/loadScripts");e.sap.registerResourcePath("google.maps",o),e.sap.require("openui5.googlemaps.ScriptsUtil"),e.sap.require("openui5.googlemaps.MapTypeId"),e.sap.require("openui5.googlemaps.Animation"),e.sap.require("openui5.googlemaps.TravelMode"),e.sap.require("openui5.googlemaps.UnitSystem"),sap.ui.getCore().initLibrary({name:"openui5.googlemaps",dependencies:["sap.ui.core"],types:["openui5.googlemaps.MapTypeId","openui5.googlemaps.Animation","openui5.googlemaps.TravelMode","openui5.googlemaps.UnitSystem"],interfaces:[],controls:["openui5.googlemaps.Map","openui5.googlemaps.Marker","openui5.googlemaps.Polyline","openui5.googlemaps.Polygon","openui5.googlemaps.Directions","openui5.googlemaps.Waypoint","openui5.googlemaps.MarkerCluster"],elements:[],version:"0.0.27"})}(),!0},!0);