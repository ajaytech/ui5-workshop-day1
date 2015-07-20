sap.ui.define("openui5/googlemaps/Animation",["jquery.sap.global"],function(e){"use strict";var i={BOUNCE:1,DROP:2,k:3,j:4};return i},!0);
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","google.maps","./TravelMode","./UnitSystem"],function(t,e,i,s,o){"use strict";var n=e.extend("openui5.googlemaps.Directions",{metadata:{properties:{startAddress:{type:"string",bindable:"bindable"},endAddress:{type:"string",bindable:"bindable"},travelMode:{type:"string",defaultValue:s.driving},optimizeWaypoints:{type:"boolean"},unitSystem:{type:"string",defaultValue:o.metric}},defaultAggregation:"waypoints",aggregations:{waypoints:{type:"openui5.googlemaps.Waypoint",multiple:!0,bindable:"bindable"}},events:{response:{}},renderer:{}}});return n.prototype.setStartAddress=function(t){this.setProperty("startAddress",t,!0),this.route()},n.prototype.setEndAddress=function(t){this.setProperty("endAddress",t,!0),this.route()},n.prototype.setTravelMode=function(t){this.setProperty("travelMode",t,!0),this.route()},n.prototype.setOptimizeWaypoints=function(t){this.setProperty("optimizeWaypoints",t,!0),this.route()},n.prototype.setWaypoints=function(t){this.setAggregation("waypoints",t,!0),this.route()},n.prototype.getWaypointLocations=function(){var t=[];return this.getWaypoints().forEach(function(e){t.push({location:e.getLocation(),stopover:e.getStopover()})}),t},n.prototype.onMapRendered=function(t){this.map=t,this.mapChanged()},n.prototype.responseChanged=function(){this.directions&&this.response&&this.directions.setDirections(this.response)},n.prototype.mapChanged=function(){this.directions||(this.directions=new i.DirectionsRenderer),this.directions.setMap(this.map),this.route()},n.prototype.getRequest=function(){var t={};return t.origin=this.getStartAddress(),t.destination=this.getEndAddress(),t.travelMode=this.getTravelMode(),t.unitSystem=this.getUnitSystem(),t.optimizeWaypoints=this.getOptimizeWaypoints(),t.waypoints=this.getWaypointLocations(),t},n.prototype.route=function(){this.map&&this.getStartAddress()&&this.getEndAddress()&&(this.directionsService||(this.directionsService=new i.DirectionsService),t.sap.clearDelayedCall(this.delayedCallId),this.delayedCallId=t.sap.delayedCall(0,this,function(){this.directionsService.route(this.getRequest(),t.proxy(this.routeResponse,this))}))},n.prototype.routeResponse=function(t,e){e===i.DirectionsStatus.OK&&(this.response=t,this.responseChanged(),this.fireResponse({response:t}))},n.prototype.reset=function(){this.directions&&(this.directions.setMap(null),this.directions=null)},n.prototype.onReset=function(){this.reset()},n.prototype.exit=function(){this.reset()},n},!0);
sap.ui.define(["jquery.sap.global","sap/ui/core/Core","sap/ui/core/library"],function(e){"use strict";return function(){var o=e.sap.getResourcePath("openui5/googlemaps/loadScripts");e.sap.registerResourcePath("google.maps",o),e.sap.require("openui5.googlemaps.ScriptsUtil"),e.sap.require("openui5.googlemaps.MapTypeId"),e.sap.require("openui5.googlemaps.Animation"),e.sap.require("openui5.googlemaps.TravelMode"),e.sap.require("openui5.googlemaps.UnitSystem"),sap.ui.getCore().initLibrary({name:"openui5.googlemaps",dependencies:["sap.ui.core"],types:["openui5.googlemaps.MapTypeId","openui5.googlemaps.Animation","openui5.googlemaps.TravelMode","openui5.googlemaps.UnitSystem"],interfaces:[],controls:["openui5.googlemaps.Map","openui5.googlemaps.Marker","openui5.googlemaps.Polyline","openui5.googlemaps.Polygon","openui5.googlemaps.Directions","openui5.googlemaps.Waypoint","openui5.googlemaps.MarkerCluster"],elements:[],version:"0.0.15"})}(),!0},!0);
sap.ui.define(["jquery.sap.global","openui5/googlemaps/ScriptsUtil"],function(a,l){"use strict";var e=function(){var l={};return l.defaultUrl="http://maps.google.com/maps/api/js?",l.notifyEvent="google.maps.loaded",l.callbackName="google.maps.callBack",l.callBack=function(){this.loaded=!0,sap.ui.getCore().getEventBus().publish(this.notifyEvent)},l.load=function(l){var e={},s=l.getParams(),t=s.url?s.url:this.defaultUrl;a.sap.endsWith(t,"?")||(t+="?"),s.v&&(e.v=s.v),e.sensor=s.sensor||!0,s.libraries&&(e.libraries=s.libraries),s.language&&(e.language=s.language),s.key&&(e.key=s.key),e.callback=this.callbackName;var i=t.concat(a.param(e));a.sap.includeScript(i,"google.maps",null,null)},l}();return e.load(l),e},!0);
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","sap/ui/core/ResizeHandler","google.maps","./MapUtils","./MapTypeId"],function(t,e,i,o,s,a){"use strict";var n=e.extend("openui5.googlemaps.Map",{metadata:{properties:{lat:{type:"float",bindable:"bindable",defaultValue:1},lng:{type:"float",bindable:"bindable",defaultValue:1},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"auto"},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"20em"},zoom:{type:"int",defaultValue:8},disableDefaultUI:{type:"boolean",defaultValue:!0},mapTypeId:{type:"string",defaultValue:a.ROADMAP},panControl:{type:"boolean",defaultValue:!1},zoomControl:{type:"boolean",defaultValue:!1},mapTypeControl:{type:"boolean",defaultValue:!1},streetViewControl:{type:"boolean",defaultValue:!1}},defaultAggregation:"markers",aggregations:{markers:{type:"openui5.googlemaps.Marker",multiple:!0,bindable:"bindable"},polylines:{type:"openui5.googlemaps.Polyline",multiple:!0,bindable:"bindable"},polygons:{type:"openui5.googlemaps.Polygon",multiple:!0,bindable:"bindable"},directions:{type:"openui5.googlemaps.Directions",multiple:!1,bindable:"bindable"},markerCluster:{type:"openui5.googlemaps.MarkerCluster",multiple:!1,bindable:"bindable"}},events:{ready:{}}},renderer:function(t,e){t.write("<div "),t.writeControlData(e),t.addStyle("width","auto"),t.addStyle("height","auto"),t.writeClasses(),t.writeStyles(),t.write(">"),t.renderControl(e._html),t.write("</div>")}});return n.prototype.init=function(){this._dragging=!1,this.aListeners=[],this.mapId=this.getId()+"-map",this._html=new sap.ui.core.HTML({content:"<div style='height: "+this.getHeight()+";width: "+this.getWidth()+";' id='"+this.mapId+"'></div>"})},n.prototype.setHeight=function(t){this.setProperty("height",t,!0),this.setSize()},n.prototype.setWidth=function(t){this.setProperty("width",t,!0),this.setSize()},n.prototype.setSize=function(){if(t.sap.domById(this.mapId))t.sap.byId(this.mapId).css("height",this.getHeight()).css("width",this.getWidth());else{var e=t(this._html.getContent());e.css("height",this.getHeight()).css("width",this.getWidth()),this._html.setContent(e.outerHTML())}},n.prototype.setZoom=function(t){this.setProperty("zoom",t,!0),this.map&&t!==this.map.getZoom()&&this.map.setZoom(t)},n.prototype.setLat=function(t){var e=parseFloat(t);s.floatEqual(e,this.getLat())||(this.setProperty("lat",e,!0),this._updateCenter())},n.prototype.setLng=function(t){var e=parseFloat(t);s.floatEqual(e,this.getLng())||(this.setProperty("lng",e,!0),this._updateCenter())},n.prototype._updateCenter=function(){this.map&&null!=this.getLat()&&null!=this.getLng()&&(t.sap.clearDelayedCall(this.delayedCallId),this.delayedCallId=t.sap.delayedCall(0,this,function(){this.map.setCenter(new o.LatLng(this.getLat(),this.getLng())),this.notifyAggregations("MapRendered")}))},n.prototype.setMapTypeId=function(t){this.setProperty("mapTypeId",t,!0),this.map&&t!==this.map.getMapTypeId()&&this.map.setMapTypeId(t)},n.prototype.setZoomControl=function(t){this.setProperty("zoomControl",t,!0),this.map&&t!==this.map.getZoomControl()&&this.map.setZoomControl(t)},n.prototype.setDisableDefaultUi=function(t){this.setProperty("disableDefaultUi",t,!0),this.map&&this.map.setOptions({disableDefaultUI:this.disableDefaultUI})},n.prototype.zoomChanged=function(){this.map.getZoom()!==this.getZoom()&&this.setZoom(this.map.getZoom())},n.prototype.mapTypeIdChanged=function(){this.map.getMapTypeId()!==this.getMapTypeId()&&this.setMapTypeId(this.map.getMapTypeId())},n.prototype.onResize=function(){var t=this.map.getCenter();this.trigger("resize"),this.map.setCenter(t)},n.prototype._getMapOptions=function(){var t={};return t.zoom=this.getZoom(),t.center=new o.LatLng(this.getLat(),this.getLng()),t.disableDefaultUi=this.getDisableDefaultUI(),t.mapTypeId=this.getMapTypeId(),t.panControl=this.getPanControl(),t.zoomControl=this.getZoomControl(),t.mapTypeControl=this.getMapTypeControl(),t.streetViewControl=this.getStreetViewControl(),t},n.prototype.notifyAggregations=function(t){this._notifyMarkers(t,this.map),this._notifyPolylines(t,this.map),this._notifyPolygons(t,this.map),this._notifyDirections(t,this.map),this._notifyMarkerCluster(t,this.map)},n.prototype.onAfterRendering=function(){return void 0===o.loaded?(void 0===this.subscribed&&(sap.ui.getCore().getEventBus().subscribe(o.notifyEvent,this.createMap,this),this.subscribed=!0),!1):void(this.initialized?this._updateCenter():this.createMap())},n.prototype.createMap=function(){this.getLat()&&this.getLng()&&(this.map=new o.Map(t.sap.domById(this.mapId),this._getMapOptions()),this.notifyAggregations("MapRendered"),this.addListener("drag",t.proxy(this.isDragging,this)),this.addListener("dragstart",t.proxy(this.isDragging,this)),this.addListener("zoom_changed",t.proxy(this.zoomChanged,this)),this.addListener("center_changed",t.proxy(this.updateValues,this)),this.addListener("idle",t.proxy(this.mapChanged,this)),this.addListener("maptypeid_changed",t.proxy(this.mapTypeIdChanged,this)),this.resizeID=i.register(t.sap.domById(this.mapId),t.proxy(this.onResize,this)),this.initialized=!0)},n.prototype.addListener=function(t,e){this.aListeners.push(o.event.addListener(this.map,t,e))},n.prototype.removeListeners=function(){this.aListeners.forEach(function(t){t.remove()}),this.aListeners=[]},n.prototype.trigger=function(t){o.event.trigger(this.map,t)},n.prototype.isDragging=function(){this._dragging=!0},n.prototype.isNotDragging=function(){this._dragging=!1},n.prototype.mapChanged=function(){this._dragging&&this.isNotDragging(),this.updateValues(),this.fireReady({map:this.map,context:this.getBindingContext(),lat:this.getLat(),lng:this.getLng()})},n.prototype.updateValues=function(t){var e=s.latLngToObj(this.map.getCenter());s.floatEqual(e.lat,this.getLat())||this.setProperty("lat",e.lat,!0),s.floatEqual(e.lng,this.getLng())||this.setProperty("lng",e.lng,!0)},n.prototype._notifyMarkers=function(t,e){this.getMarkers().forEach(function(i){i["on"+t](e)})},n.prototype._notifyPolylines=function(t,e){this.getPolylines().forEach(function(i){i["on"+t](e)})},n.prototype._notifyPolygons=function(t,e){this.getPolygons().forEach(function(i){i["on"+t](e)})},n.prototype._notifyDirections=function(t,e){this.getDirections()&&this.getDirections()["on"+t](e)},n.prototype._notifyMarkerCluster=function(t,e){this.getMarkerCluster()&&this.getMarkerCluster()["on"+t](e)},n.prototype.resetMap=function(){this.removeListeners(),this.map&&this.map.set(null)},n.prototype.exit=function(){this.resetMap(),i.deregister(this.resizeID)},n},!0);
sap.ui.define("openui5/googlemaps/MapTypeId",["jquery.sap.global"],function(e){"use strict";var a={ROADMAP:"roadmap",SATELLITE:"satellite",HYBRID:"hybrid",TERRAIN:"terrain"};return a},!0);
sap.ui.define(["jquery.sap.global","google.maps"],function(e,o){"use strict";var t={};return t.objToLatLng=function(e){return new o.LatLng(e.lat,e.lng)},t.latLngToObj=function(e){return{lat:e.lat(),lng:e.lng()}},t.floatEqual=function(e,o){return Math.abs(e-o)<1e-6},t.latLngEqual=function(e,o){return this.floatEqual(e.lat,o.lat)&&this.floatEqual(e.lng,o.lng)},t.search=function(t){var n=e.Deferred();return(new o.Geocoder).geocode(t,n.resolve),n.promise()},t.currentPosition=function(){var o=e.Deferred(),t={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},n=function(e){var t={};t.lat=e.coords.latitude,t.lng=e.coords.longitude,o.resolve(t)},r=function(t){e.sap.log.info("ERROR("+t.code+"): "+t.message),o.reject(t)};return navigator.geolocation&&navigator.geolocation.getCurrentPosition(n,r,t),o.promise()},t.geocodePosition=function(t){var n=e.Deferred(),r=function(e){e&&e.length>0?n.resolve(e[0].formatted_address):n.reject("Cannot determine address at this location.")};return(new o.Geocoder).geocode({latLng:t},r),n.promise()},t},!0);
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","google.maps","./Animation"],function(t,i,e,n){"use strict";var o=i.extend("openui5.googlemaps.Marker",{metadata:{properties:{lat:{type:"float",bindable:"bindable"},lng:{type:"float",bindable:"bindable"},draggable:{type:"boolean",bindable:"bindable",defaultValue:!1},info:{type:"string",bindable:"bindable"},icon:{type:"any",bindable:"bindable"},visible:{type:"boolean",bindable:"bindable",defaultValue:!0},animation:{type:"int",bindable:"bindable",defaultValue:n.DROP}},events:{click:{},dragEnd:{},infoWindowClose:{}},renderer:{}}});return o.prototype.init=function(){this._dragging=!1,this.aListeners=[],this.iwMaxWidth=360},o.prototype.updatePosition=function(){this.marker&&null!==this.getLat()&&null!==this.getLng()&&(t.sap.clearDelayedCall(this.delayedCallId),this.delayedCallId=t.sap.delayedCall(0,this,function(){this.marker.setPosition(new e.LatLng(this.getLat(),this.getLng()))}))},o.prototype.setLat=function(t){this.setProperty("lat",parseFloat(t),!0),this.updatePosition()},o.prototype.setLng=function(t){this.setProperty("lng",parseFloat(t),!0),this.updatePosition()},o.prototype.setVisible=function(t){this.setProperty("visible",t,!0),this.marker&&this.marker.setVisible(this.getVisible())},o.prototype.setIcon=function(t){this.setProperty("icon",t,!0),this.marker&&this.marker.setIcon(this.getIcon())},o.prototype.getMap=function(){return this.map},o.prototype.setMap=function(t){this.map=t},o.prototype.setMarker=function(){this.marker?(this.marker.setMap(this.map),this.marker.setOptions(this.getOptions())):(this.marker=new e.Marker(this.getOptions()),this.marker.setMap(this.map),this.addListener("click",t.proxy(this.onClick,this)),this.getDraggable()&&this.addListener("dragend",t.proxy(this.onDragEnd,this))),this.getInfo()&&!this.infoWindow?(this.infoWindow=new e.InfoWindow({content:this.getInfo(),maxWidth:this.iwMaxWidth}),this.aListeners.push(e.event.addListener(this.infoWindow,"closeclick",t.proxy(this.onInfoWindowClose,this)))):this.infoWindow&&this.infoWindow.setContent(this.getInfo())},o.prototype.getOptions=function(){var t={};return t.position=new e.LatLng(this.getLat(),this.getLng()),t.draggable=this.getDraggable(),t.animation=this.getAnimation(),t.visible=this.getVisible(),t.icon=this.getIcon(),t},o.prototype.onMapRendered=function(t){this.setMap(t),this.setMarker()},o.prototype.addListener=function(t,i,n){this.aListeners.push(e.event.addListener(this.marker,t,i))},o.prototype.removeListeners=function(){this.aListeners.forEach(function(t){t.remove()}),this.aListeners=[]},o.prototype.infoWindowOpen=function(i){this.infoWindow.open(this.map,this.marker),i&&t.sap.delayedCall(2e3,this,function(){this.infoWindowclose()})},o.prototype.infoWindowClose=function(){this.infoWindow.close()},o.prototype.onClick=function(){this.infoWindow&&this.infoWindowOpen(),this.fireClick({map:this.map,marker:this.marker,context:this.getBindingContext(),location:{lat:this.getLat(),lng:this.getLng()}})},o.prototype.onDragEnd=function(){var t=this.marker.getPosition();this.setLat(t.lat()),this.setLng(t.lng()),this.fireDragEnd({position:t})},o.prototype.onInfoWindowClose=function(){this.fireInfoWindowClose({})},o.prototype.reset=function(){this.marker&&(this.removeListeners(),this.marker.setMap(null))},o.prototype.onReset=function(){this.reset()},o.prototype.exit=function(){this.reset()},o},!0);
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","google.maps","./markerclusterer"],function(e,t,r,s){"use strict";s=window.MarkerClusterer;var o=t.extend("openui5.googlemaps.MarkerCluster",{metadata:{properties:{averageCenter:{type:"boolean",bindable:"bindable",defaultValue:!0}},defaultAggregation:"markers",aggregations:{markers:{type:"openui5.googlemaps.Marker",multiple:!0,bindable:"bindable"}},events:{click:{},mouseover:{},mouseout:{}},renderer:{}}});return o.prototype.init=function(){this.aListeners=[]},o.prototype.onMapRendered=function(e){this.map=e,this.setClusterer()},o.prototype.onClusterClick=function(e){this.fireClick({cluster:e})},o.prototype.onClusterMouseover=function(e){this.fireMouseover({cluster:e})},o.prototype.onClusterMouseout=function(e){this.fireMouseout({cluster:e})},o.prototype._getMarkers=function(){var e=this,t=[];return this.getMarkers().forEach(function(r){r.setMarker(),r.setMap(e.map),t.push(r.marker)}),t},o.prototype.getOptions=function(){var e={};return e.averageCenter=this.getAverageCenter(),e},o.prototype.setClusterer=function(){this.markerClusterer=new s(this.map,this._getMarkers(),this.getOptions()),this.addListener("click",e.proxy(this.onClusterClick,this)),this.addListener("mouseover",e.proxy(this.onClusterMouseover,this)),this.addListener("mouseout",e.proxy(this.onClusterMouseout,this))},o.prototype.addListener=function(e,t,s){this.aListeners.push(r.event.addListener(this.markerClusterer,e,t))},o.prototype.removeListeners=function(){this.aListeners.forEach(function(e){e.remove()}),this.aListeners=[]},o.prototype.reset=function(){this.markerClusterer&&(this.removeListeners(),this.markerClusterer=void 0)},o.prototype.onReset=function(){this.reset()},o.prototype.exit=function(){this.reset()},o},!0);
function ClusterIcon(t,e){t.getMarkerClusterer().extend(ClusterIcon,google.maps.OverlayView),this.cluster_=t,this.className_=t.getMarkerClusterer().getClusterClass(),this.styles_=e,this.center_=null,this.div_=null,this.sums_=null,this.visible_=!1,this.setMap(t.getMap())}function Cluster(t){this.markerClusterer_=t,this.map_=t.getMap(),this.gridSize_=t.getGridSize(),this.minClusterSize_=t.getMinimumClusterSize(),this.averageCenter_=t.getAverageCenter(),this.markers_=[],this.center_=null,this.bounds_=null,this.clusterIcon_=new ClusterIcon(this,t.getStyles())}function MarkerClusterer(t,e,r){this.extend(MarkerClusterer,google.maps.OverlayView),e=e||[],r=r||{},this.markers_=[],this.clusters_=[],this.listeners_=[],this.activeMap_=null,this.ready_=!1,this.gridSize_=r.gridSize||60,this.minClusterSize_=r.minimumClusterSize||2,this.maxZoom_=r.maxZoom||null,this.styles_=r.styles||[],this.title_=r.title||"",this.zoomOnClick_=!0,void 0!==r.zoomOnClick&&(this.zoomOnClick_=r.zoomOnClick),this.averageCenter_=!1,void 0!==r.averageCenter&&(this.averageCenter_=r.averageCenter),this.ignoreHidden_=!1,void 0!==r.ignoreHidden&&(this.ignoreHidden_=r.ignoreHidden),this.enableRetinaIcons_=!1,void 0!==r.enableRetinaIcons&&(this.enableRetinaIcons_=r.enableRetinaIcons),this.imagePath_=r.imagePath||MarkerClusterer.IMAGE_PATH,this.imageExtension_=r.imageExtension||MarkerClusterer.IMAGE_EXTENSION,this.imageSizes_=r.imageSizes||MarkerClusterer.IMAGE_SIZES,this.calculator_=r.calculator||MarkerClusterer.CALCULATOR,this.batchSize_=r.batchSize||MarkerClusterer.BATCH_SIZE,this.batchSizeIE_=r.batchSizeIE||MarkerClusterer.BATCH_SIZE_IE,this.clusterClass_=r.clusterClass||"cluster",-1!==navigator.userAgent.toLowerCase().indexOf("msie")&&(this.batchSize_=this.batchSizeIE_),this.setupStyles_(),this.addMarkers(e,!0),this.setMap(t)}ClusterIcon.prototype.onAdd=function(){var t,e,r=this;this.div_=document.createElement("div"),this.div_.className=this.className_,this.visible_&&this.show(),this.getPanes().overlayMouseTarget.appendChild(this.div_),this.boundsChangedListener_=google.maps.event.addListener(this.getMap(),"bounds_changed",function(){e=t}),google.maps.event.addDomListener(this.div_,"mousedown",function(){t=!0,e=!1}),google.maps.event.addDomListener(this.div_,"click",function(s){if(t=!1,!e){var i,o,n=r.cluster_.getMarkerClusterer();google.maps.event.trigger(n,"click",r.cluster_),google.maps.event.trigger(n,"clusterclick",r.cluster_),n.getZoomOnClick()&&(o=n.getMaxZoom(),i=r.cluster_.getBounds(),n.getMap().fitBounds(i),setTimeout(function(){n.getMap().fitBounds(i),null!==o&&n.getMap().getZoom()>o&&n.getMap().setZoom(o+1)},100)),s.cancelBubble=!0,s.stopPropagation&&s.stopPropagation()}}),google.maps.event.addDomListener(this.div_,"mouseover",function(){var t=r.cluster_.getMarkerClusterer();google.maps.event.trigger(t,"mouseover",r.cluster_)}),google.maps.event.addDomListener(this.div_,"mouseout",function(){var t=r.cluster_.getMarkerClusterer();google.maps.event.trigger(t,"mouseout",r.cluster_)})},ClusterIcon.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),google.maps.event.removeListener(this.boundsChangedListener_),google.maps.event.clearInstanceListeners(this.div_),this.div_.parentNode.removeChild(this.div_),this.div_=null)},ClusterIcon.prototype.draw=function(){if(this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.top=t.y+"px",this.div_.style.left=t.x+"px"}},ClusterIcon.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},ClusterIcon.prototype.show=function(){if(this.div_){var t="",e=this.backgroundPosition_.split(" "),r=parseInt(e[0].replace(/^\s+|\s+$/g,""),10),s=parseInt(e[1].replace(/^\s+|\s+$/g,""),10),i=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(i),t="<img src='"+this.url_+"' style='position: absolute; top: "+s+"px; left: "+r+"px; ",this.cluster_.getMarkerClusterer().enableRetinaIcons_||(t+="clip: rect("+-1*s+"px, "+(-1*r+this.width_)+"px, "+(-1*s+this.height_)+"px, "+-1*r+"px);"),t+="'>",this.div_.innerHTML=t+"<div style='position: absolute;top: "+this.anchorText_[0]+"px;left: "+this.anchorText_[1]+"px;color: "+this.textColor_+";font-size: "+this.textSize_+"px;font-family: "+this.fontFamily_+";font-weight: "+this.fontWeight_+";font-style: "+this.fontStyle_+";text-decoration: "+this.textDecoration_+";text-align: center;width: "+this.width_+"px;line-height:"+this.height_+"px;'>"+this.sums_.text+"</div>",this.div_.title="undefined"==typeof this.sums_.title||""===this.sums_.title?this.cluster_.getMarkerClusterer().getTitle():this.sums_.title,this.div_.style.display=""}this.visible_=!0},ClusterIcon.prototype.useStyle=function(t){this.sums_=t;var e=Math.max(0,t.index-1);e=Math.min(this.styles_.length-1,e);var r=this.styles_[e];this.url_=r.url,this.height_=r.height,this.width_=r.width,this.anchorText_=r.anchorText||[0,0],this.anchorIcon_=r.anchorIcon||[parseInt(this.height_/2,10),parseInt(this.width_/2,10)],this.textColor_=r.textColor||"black",this.textSize_=r.textSize||11,this.textDecoration_=r.textDecoration||"none",this.fontWeight_=r.fontWeight||"bold",this.fontStyle_=r.fontStyle||"normal",this.fontFamily_=r.fontFamily||"Arial,sans-serif",this.backgroundPosition_=r.backgroundPosition||"0 0"},ClusterIcon.prototype.setCenter=function(t){this.center_=t},ClusterIcon.prototype.createCss=function(t){var e=[];return e.push("cursor: pointer;"),e.push("position: absolute; top: "+t.y+"px; left: "+t.x+"px;"),e.push("width: "+this.width_+"px; height: "+this.height_+"px;"),e.join("")},ClusterIcon.prototype.getPosFromLatLng_=function(t){var e=this.getProjection().fromLatLngToDivPixel(t);return e.x-=this.anchorIcon_[1],e.y-=this.anchorIcon_[0],e.x=parseInt(e.x,10),e.y=parseInt(e.y,10),e},Cluster.prototype.getSize=function(){return this.markers_.length},Cluster.prototype.getMarkers=function(){return this.markers_},Cluster.prototype.getCenter=function(){return this.center_},Cluster.prototype.getMap=function(){return this.map_},Cluster.prototype.getMarkerClusterer=function(){return this.markerClusterer_},Cluster.prototype.getBounds=function(){var t,e=new google.maps.LatLngBounds(this.center_,this.center_),r=this.getMarkers();for(t=0;t<r.length;t++)e.extend(r[t].getPosition());return e},Cluster.prototype.remove=function(){this.clusterIcon_.setMap(null),this.markers_=[],delete this.markers_},Cluster.prototype.addMarker=function(t){var e,r,s;if(this.isMarkerAlreadyAdded_(t))return!1;if(this.center_){if(this.averageCenter_){var i=this.markers_.length+1,o=(this.center_.lat()*(i-1)+t.getPosition().lat())/i,n=(this.center_.lng()*(i-1)+t.getPosition().lng())/i;this.center_=new google.maps.LatLng(o,n),this.calculateBounds_()}}else this.center_=t.getPosition(),this.calculateBounds_();if(t.isAdded=!0,this.markers_.push(t),r=this.markers_.length,s=this.markerClusterer_.getMaxZoom(),null!==s&&this.map_.getZoom()>s)t.getMap()!==this.map_&&t.setMap(this.map_);else if(r<this.minClusterSize_)t.getMap()!==this.map_&&t.setMap(this.map_);else if(r===this.minClusterSize_)for(e=0;r>e;e++)this.markers_[e].setMap(null);else t.setMap(null);return this.updateIcon_(),!0},Cluster.prototype.isMarkerInClusterBounds=function(t){return this.bounds_.contains(t.getPosition())},Cluster.prototype.calculateBounds_=function(){var t=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(t)},Cluster.prototype.updateIcon_=function(){var t=this.markers_.length,e=this.markerClusterer_.getMaxZoom();if(null!==e&&this.map_.getZoom()>e)return void this.clusterIcon_.hide();if(t<this.minClusterSize_)return void this.clusterIcon_.hide();var r=this.markerClusterer_.getStyles().length,s=this.markerClusterer_.getCalculator()(this.markers_,r);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.useStyle(s),this.clusterIcon_.show()},Cluster.prototype.isMarkerAlreadyAdded_=function(t){var e;if(this.markers_.indexOf)return-1!==this.markers_.indexOf(t);for(e=0;e<this.markers_.length;e++)if(t===this.markers_[e])return!0;return!1},MarkerClusterer.prototype.onAdd=function(){var t=this;this.activeMap_=this.getMap(),this.ready_=!0,this.repaint(),this.listeners_=[google.maps.event.addListener(this.getMap(),"zoom_changed",function(){t.resetViewport_(!1),(this.getZoom()===(this.get("minZoom")||0)||this.getZoom()===this.get("maxZoom"))&&google.maps.event.trigger(this,"idle")}),google.maps.event.addListener(this.getMap(),"idle",function(){t.redraw_()})]},MarkerClusterer.prototype.onRemove=function(){var t;for(t=0;t<this.markers_.length;t++)this.markers_[t].getMap()!==this.activeMap_&&this.markers_[t].setMap(this.activeMap_);for(t=0;t<this.clusters_.length;t++)this.clusters_[t].remove();for(this.clusters_=[],t=0;t<this.listeners_.length;t++)google.maps.event.removeListener(this.listeners_[t]);this.listeners_=[],this.activeMap_=null,this.ready_=!1},MarkerClusterer.prototype.draw=function(){},MarkerClusterer.prototype.setupStyles_=function(){var t,e;if(!(this.styles_.length>0))for(t=0;t<this.imageSizes_.length;t++)e=this.imageSizes_[t],this.styles_.push({url:this.imagePath_+(t+1)+"."+this.imageExtension_,height:e,width:e})},MarkerClusterer.prototype.fitMapToMarkers=function(){var t,e=this.getMarkers(),r=new google.maps.LatLngBounds;for(t=0;t<e.length;t++)r.extend(e[t].getPosition());this.getMap().fitBounds(r)},MarkerClusterer.prototype.getGridSize=function(){return this.gridSize_},MarkerClusterer.prototype.setGridSize=function(t){this.gridSize_=t},MarkerClusterer.prototype.getMinimumClusterSize=function(){return this.minClusterSize_},MarkerClusterer.prototype.setMinimumClusterSize=function(t){this.minClusterSize_=t},MarkerClusterer.prototype.getMaxZoom=function(){return this.maxZoom_},MarkerClusterer.prototype.setMaxZoom=function(t){this.maxZoom_=t},MarkerClusterer.prototype.getStyles=function(){return this.styles_},MarkerClusterer.prototype.setStyles=function(t){this.styles_=t},MarkerClusterer.prototype.getTitle=function(){return this.title_},MarkerClusterer.prototype.setTitle=function(t){this.title_=t},MarkerClusterer.prototype.getZoomOnClick=function(){return this.zoomOnClick_},MarkerClusterer.prototype.setZoomOnClick=function(t){this.zoomOnClick_=t},MarkerClusterer.prototype.getAverageCenter=function(){return this.averageCenter_},MarkerClusterer.prototype.setAverageCenter=function(t){this.averageCenter_=t},MarkerClusterer.prototype.getIgnoreHidden=function(){return this.ignoreHidden_},MarkerClusterer.prototype.setIgnoreHidden=function(t){this.ignoreHidden_=t},MarkerClusterer.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons_},MarkerClusterer.prototype.setEnableRetinaIcons=function(t){this.enableRetinaIcons_=t},MarkerClusterer.prototype.getImageExtension=function(){return this.imageExtension_},MarkerClusterer.prototype.setImageExtension=function(t){this.imageExtension_=t},MarkerClusterer.prototype.getImagePath=function(){return this.imagePath_},MarkerClusterer.prototype.setImagePath=function(t){this.imagePath_=t},MarkerClusterer.prototype.getImageSizes=function(){return this.imageSizes_},MarkerClusterer.prototype.setImageSizes=function(t){this.imageSizes_=t},MarkerClusterer.prototype.getCalculator=function(){return this.calculator_},MarkerClusterer.prototype.setCalculator=function(t){this.calculator_=t},MarkerClusterer.prototype.getBatchSizeIE=function(){return this.batchSizeIE_},MarkerClusterer.prototype.setBatchSizeIE=function(t){this.batchSizeIE_=t},MarkerClusterer.prototype.getClusterClass=function(){return this.clusterClass_},MarkerClusterer.prototype.setClusterClass=function(t){this.clusterClass_=t},MarkerClusterer.prototype.getMarkers=function(){return this.markers_},MarkerClusterer.prototype.getTotalMarkers=function(){return this.markers_.length},MarkerClusterer.prototype.getClusters=function(){return this.clusters_},MarkerClusterer.prototype.getTotalClusters=function(){return this.clusters_.length},MarkerClusterer.prototype.addMarker=function(t,e){this.pushMarkerTo_(t),e||this.redraw_()},MarkerClusterer.prototype.addMarkers=function(t,e){var r;for(r in t)t.hasOwnProperty(r)&&this.pushMarkerTo_(t[r]);e||this.redraw_()},MarkerClusterer.prototype.pushMarkerTo_=function(t){if(t.getDraggable()){var e=this;google.maps.event.addListener(t,"dragend",function(){e.ready_&&(this.isAdded=!1,e.repaint())})}t.isAdded=!1,this.markers_.push(t)},MarkerClusterer.prototype.removeMarker=function(t,e){var r=this.removeMarker_(t);return!e&&r&&this.repaint(),r},MarkerClusterer.prototype.removeMarkers=function(t,e){var r,s,i=!1;for(r=0;r<t.length;r++)s=this.removeMarker_(t[r]),i=i||s;return!e&&i&&this.repaint(),i},MarkerClusterer.prototype.removeMarker_=function(t){var e,r=-1;if(this.markers_.indexOf)r=this.markers_.indexOf(t);else for(e=0;e<this.markers_.length;e++)if(t===this.markers_[e]){r=e;break}return-1===r?!1:(t.setMap(null),this.markers_.splice(r,1),!0)},MarkerClusterer.prototype.clearMarkers=function(){this.resetViewport_(!0),this.markers_=[]},MarkerClusterer.prototype.repaint=function(){var t=this.clusters_.slice();this.clusters_=[],this.resetViewport_(!1),this.redraw_(),setTimeout(function(){var e;for(e=0;e<t.length;e++)t[e].remove()},0)},MarkerClusterer.prototype.getExtendedBounds=function(t){var e=this.getProjection(),r=new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()),s=new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()),i=e.fromLatLngToDivPixel(r);i.x+=this.gridSize_,i.y-=this.gridSize_;var o=e.fromLatLngToDivPixel(s);o.x-=this.gridSize_,o.y+=this.gridSize_;var n=e.fromDivPixelToLatLng(i),a=e.fromDivPixelToLatLng(o);return t.extend(n),t.extend(a),t},MarkerClusterer.prototype.redraw_=function(){this.createClusters_(0)},MarkerClusterer.prototype.resetViewport_=function(t){var e,r;for(e=0;e<this.clusters_.length;e++)this.clusters_[e].remove();for(this.clusters_=[],e=0;e<this.markers_.length;e++)r=this.markers_[e],r.isAdded=!1,t&&r.setMap(null)},MarkerClusterer.prototype.distanceBetweenPoints_=function(t,e){var r=6371,s=(e.lat()-t.lat())*Math.PI/180,i=(e.lng()-t.lng())*Math.PI/180,o=Math.sin(s/2)*Math.sin(s/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(e.lat()*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),n=2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)),a=r*n;return a},MarkerClusterer.prototype.isMarkerInBounds_=function(t,e){return e.contains(t.getPosition())},MarkerClusterer.prototype.addToClosestCluster_=function(t){var e,r,s,i,o=4e4,n=null;for(e=0;e<this.clusters_.length;e++)s=this.clusters_[e],i=s.getCenter(),i&&(r=this.distanceBetweenPoints_(i,t.getPosition()),o>r&&(o=r,n=s));n&&n.isMarkerInClusterBounds(t)?n.addMarker(t):(s=new Cluster(this),s.addMarker(t),this.clusters_.push(s))},MarkerClusterer.prototype.createClusters_=function(t){var e,r,s,i=this;if(this.ready_){0===t&&(google.maps.event.trigger(this,"clusteringbegin",this),"undefined"!=typeof this.timerRefStatic&&(clearTimeout(this.timerRefStatic),delete this.timerRefStatic)),s=this.getMap().getZoom()>3?new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),this.getMap().getBounds().getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625));var o=this.getExtendedBounds(s),n=Math.min(t+this.batchSize_,this.markers_.length);for(e=t;n>e;e++)r=this.markers_[e],!r.isAdded&&this.isMarkerInBounds_(r,o)&&(!this.ignoreHidden_||this.ignoreHidden_&&r.getVisible())&&this.addToClosestCluster_(r);n<this.markers_.length?this.timerRefStatic=setTimeout(function(){i.createClusters_(n)},0):(delete this.timerRefStatic,google.maps.event.trigger(this,"clusteringend",this))}},MarkerClusterer.prototype.extend=function(t,e){return function(t){var e;for(e in t.prototype)this.prototype[e]=t.prototype[e];return this}.apply(t,[e])},MarkerClusterer.CALCULATOR=function(t,e){for(var r=0,s="",i=t.length.toString(),o=i;0!==o;)o=parseInt(o/10,10),r++;return r=Math.min(r,e),{text:i,index:r,title:s}},MarkerClusterer.BATCH_SIZE=2e3,MarkerClusterer.BATCH_SIZE_IE=500,MarkerClusterer.IMAGE_PATH="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/images/m",MarkerClusterer.IMAGE_EXTENSION="png",MarkerClusterer.IMAGE_SIZES=[53,56,66,78,90];
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","google.maps","./MapUtils"],function(t,e,o,i){"use strict";var s=e.extend("openui5.googlemaps.Polygon",{metadata:{properties:{strokeColor:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:null},strokeOpacity:{type:"float",bindable:"bindable"},strokeWeight:{type:"float",bindable:"bindable"},fillColor:{type:"string",bindable:"bindable"},fillOpacity:{type:"float",bindable:"bindable"},paths:{type:"object"},visible:{type:"boolean",bindable:"bindable",defaultValue:!0},draggable:{type:"boolean"}},renderer:{}}});return s.prototype.setVisible=function(t){this.setProperty("visible",t,!0),this.polygon&&this.polygon.setVisible(this.getVisible())},s.prototype.parsePaths=function(){var t=[];return this.getPaths().forEach(function(e){t.push(i.objToLatLng(e))}),t},s.prototype.createPolygon=function(){this.polygon?(this.polygon.setMap(this.map),this.polygon.setOptions(this.getOptions())):(this.polygon=new o.Polygon(this.getOptions()),this.polygon.setMap(this.map))},s.prototype.getOptions=function(){var t={};return t.paths=this.parsePaths(),t.strokeColor=this.getStrokeColor(),t.strokeOpacity=this.getStrokeOpacity(),t.strokeWeight=this.getStrokeWeight(),t.fillOpacity=this.getFillOpacity(),t.fillColor=this.getFillColor(),t.visible=this.getVisible(),t.draggable=this.getDraggable(),t},s.prototype.onMapRendered=function(t){this.map=t,this.createPolygon()},s.prototype.onReset=function(){this.reset()},s.prototype.reset=function(){this.polygon&&this.polygon.setMap(null)},s.prototype.exit=function(){this.reset()},s},!0);
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","google.maps","./MapUtils"],function(t,e,o,i){"use strict";var s=e.extend("openui5.googlemaps.Polyline",{metadata:{properties:{strokeColor:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:null},strokeOpacity:{type:"float"},strokeWeight:{type:"float"},icons:{type:"object"},path:{type:"object"},visible:{type:"boolean",bindable:"bindable",defaultValue:!0},draggable:{type:"boolean"}},renderer:{}}});return s.prototype.setVisible=function(t){this.setProperty("visible",t,!0),this.polyline&&this.polyline.setVisible(this.getVisible())},s.prototype.parsePath=function(){var t=[];return this.getPath().forEach(function(e){t.push(i.objToLatLng(e))}),t},s.prototype.createPolyline=function(){this.polyline?(this.polyline.setMap(this.map),this.polyline.setOptions(this.getOptions())):(this.polyline=new o.Polyline(this.getOptions()),this.polyline.setMap(this.map))},s.prototype.getOptions=function(){var t={};return t.path=this.parsePath(),t.strokeColor=this.getStrokeColor(),t.strokeOpacity=this.getStrokeOpacity(),t.strokeWeight=this.getStrokeWeight(),t.visible=this.getVisible(),t.draggable=this.getDraggable(),t.icons=this.getIcons(),t},s.prototype.onMapRendered=function(t){this.map=t,this.createPolyline()},s.prototype.onReset=function(){this.reset()},s.prototype.reset=function(){this.polyline&&this.polyline.setMap(null)},s.prototype.exit=function(){this.reset()},s},!0);
sap.ui.define(["jquery.sap.global"],function(a){"use strict";var s={};return s.params={},s.setApiKey=function(a){this.params.key=a},s.setUrl=function(a){this.params.url=a},s.setParams=function(s){a.extend(this.params,s)},s.getParams=function(){return this.params},s},!0);
sap.ui.define("openui5/googlemaps/TravelMode",["jquery.sap.global"],function(i){"use strict";var e={driving:"DRIVING",walking:"WALKING",bicycling:"BICYCLING",transit:"TRANSIT"};return e},!0);
sap.ui.define("openui5/googlemaps/UnitSystem",["jquery.sap.global"],function(e){"use strict";var i={IMPERIAL:1,METRIC:0};return i},!0);
sap.ui.define(["jquery.sap.global","sap/ui/core/Control","google.maps","./MapUtils"],function(t,o,e,i){"use strict";var n=o.extend("openui5.googlemaps.Waypoint",{metadata:{properties:{location:{type:"string"},stopover:{type:"boolean"}},renderer:{}}});return n.prototype.createWaypoint=function(){this.waypoint||(this.waypoint=new e.DirectionsWaypoint),this.waypoint.location=this.getLocation(),this.waypoint.stopover=this.getStopover()},n.prototype.getOptions=function(){var t={};t.location=this.getLocation(),t.stopover=this.getStopover()},n},!0);