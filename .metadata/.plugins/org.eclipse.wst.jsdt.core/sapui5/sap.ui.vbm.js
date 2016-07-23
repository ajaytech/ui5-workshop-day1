
// ---- sap.ui.vbm --------------------------------------------------------------------------


// ---- sap.ui.vbm.AnalyticMap --------------------------------------------------------------------------

/**
 * Constructor for a new AnalyticMap.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getRegions regions} : sap.ui.vbm.Region[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:regionClick regionClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:regionContextMenu regionContextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:regionSelect regionSelect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:regionDeselect regionDeselect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.GeoMap#constructor sap.ui.vbm.GeoMap}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The AnalyticMap control. This control renders a Map based on a GeoJSON source. The GeoJSON file is searched in the following places in
 *        the given sequence:
 *        <ul>
 *        <li> &lt;server&gt;:&lt;port&gt;/sap/bc/vbi/geojson/L0.json
 *        <li> ./media/analyticmap/L0.json
 *        </ul>
 *        Further it is possible to specify a different URL by setting static attribute sap.ui.vbm.AnalyticMap.GeoJSONURL.<br>
 *        The Features from the GeoJSON get rendered as neutral background in gray. They are not active, but may report a name via tooltip. Each
 *        feature is expected to have a property id or id2, where as id2 should be an ISO country according to ISO 3166-2.<br>
 *        By adding Region elements to the regions aggregation it is possible to make feature from the GeoJSON interactive. Region elements need
 *        to match by ISO code.
 * @extends sap.ui.vbm.GeoMap
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.AnalyticMap = function(sId,mSettings) {};
/**
 * The event is raised when there is a click or a tap on a region.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.code The regions code.
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.regionClick = function(oControlEvent) {  };

/**
 * The event is raised when there is a right click or a tap and hold action on a region.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.code The regions code.
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.regionContextMenu = function(oControlEvent) {  };

/**
 * Event is raised when regions get deselected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.regionDeselect = function(oControlEvent) {  };

/**
 * Raised when regions get selected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.regionSelect = function(oControlEvent) {  };

/**
 * Adds some region to the aggregation <code>regions</code>.
 * @param {sap.ui.vbm.Region}
 *            oRegion the region to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.addRegion = function(oRegion) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>regionClick</code> event of this <code>sap.ui.vbm.AnalyticMap</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.AnalyticMap</code> itself.
 * 
 * The event is raised when there is a click or a tap on a region.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.AnalyticMap</code> itself
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.attachRegionClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>regionContextMenu</code> event of this <code>sap.ui.vbm.AnalyticMap</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.AnalyticMap</code> itself.
 * 
 * The event is raised when there is a right click or a tap and hold action on a region.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.AnalyticMap</code> itself
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.attachRegionContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>regionDeselect</code> event of this <code>sap.ui.vbm.AnalyticMap</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.AnalyticMap</code> itself.
 * 
 * Event is raised when regions get deselected
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.AnalyticMap</code> itself
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.attachRegionDeselect = function(oData,fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>regionSelect</code> event of this <code>sap.ui.vbm.AnalyticMap</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.AnalyticMap</code> itself.
 * 
 * Raised when regions get selected
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.AnalyticMap</code> itself
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.attachRegionSelect = function(oData,fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Destroys all the regions in the aggregation <code>regions</code>.
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.destroyRegions = function() { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>regionClick</code> event of this <code>sap.ui.vbm.AnalyticMap</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.detachRegionClick = function(fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>regionContextMenu</code> event of this <code>sap.ui.vbm.AnalyticMap</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.detachRegionContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>regionDeselect</code> event of this <code>sap.ui.vbm.AnalyticMap</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.detachRegionDeselect = function(fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>regionSelect</code> event of this <code>sap.ui.vbm.AnalyticMap</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.detachRegionSelect = function(fnFunction,oListener) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Creates a new subclass of class sap.ui.vbm.AnalyticMap with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.GeoMap.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.AnalyticMap.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>regionClick</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>code</code> of type <code>string</code>The regions code.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.fireRegionClick = function(mArguments) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Fires event <code>regionContextMenu</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>code</code> of type <code>string</code>The regions code.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.fireRegionContextMenu = function(mArguments) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Fires event <code>regionDeselect</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.fireRegionDeselect = function(mArguments) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Fires event <code>regionSelect</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.fireRegionSelect = function(mArguments) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Returns a metadata object for class sap.ui.vbm.AnalyticMap.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.AnalyticMap.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>regions</code>.
 * 
 * Regions that are different from the defaults. It is possible to specify the tooltip and color for regions. The region code must
 * match the GeoJSON id2 identifier.
 * @returns {sap.ui.vbm.Region[]}
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.getRegions = function() { return new Array(); };

/**
 * Returns Infos for Regions like name, bounding box and midpoint
 * @param {string[]} aCodes Array of region codes. The region code must match the geo json tag.
 * @returns {array} Array of Region Information Objects. Each object in the array has the properties BBox: Bounding Box for Region in format
 *          "lonMin;latMin;lonMax;latMax", Midpoint: Centerpoint for Region in format "lon;lat", Name: Name of the region, and Properties: Array
 *          of name-value-pair associated with the region
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.getRegionsInfo = function(aCodes) { return null; };

/**
 * Checks for the provided <code>sap.ui.vbm.Region</code> in the aggregation <code>regions</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Region}
 *           oRegion The region whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.indexOfRegion = function(oRegion) { return 0; };

/**
 * Inserts a region into the aggregation <code>regions</code>.
 * @param {sap.ui.vbm.Region}
 *            oRegion the region to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the region should be inserted at; for
 *              a negative value of <code>iIndex</code>, the region is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the region is inserted at
 *              the last position
 * @returns {sap.ui.vbm.AnalyticMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.insertRegion = function(oRegion,iIndex) { return new sap.ui.vbm.AnalyticMap(); };

/**
 * Removes all the controls from the aggregation <code>regions</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.Region[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.removeAllRegions = function() { return new Array(); };

/**
 * Removes a region from the aggregation <code>regions</code>.
 * @param {int | string | sap.ui.vbm.Region} vRegion The regionto remove or its index or id
 * @returns {sap.ui.vbm.Region} The removed region or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.removeRegion = function(vRegion) { return new sap.ui.vbm.Region(); };

/**
 * Zoom to one ore more regions.
 * @param {string[]} aCodes Array of region codes. The region codes must match the geo json tags.
 * @param {object} oCorr Correction for the calculated zoom factor. You can either a factor, the calculated zoom is multplied with or a array with
 *        pixels to be added as border in the sequence [left, top,right, bottom].
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.AnalyticMap.prototype.zoomToRegions = function(aCodes,oCorr) { return null; };


// ---- sap.ui.vbm.Area --------------------------------------------------------------------------

/**
 * Constructor for a new Area.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosition position} : string</li>
 * <li>{@link #getColor color} : string</li>
 * <li>{@link #getColorBorder colorBorder} : string</li>
 * <li>{@link #getBorderDash borderDash} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:edgeClick edgeClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:edgeContextMenu edgeContextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Specific Visual Object element for an <i>Area</i>. An Area is a filled polygon, which border is given as a list of geo-coordinates.
 *        Areas can have multiple disjunct parts as well as each part can have an arbitrary number of exclusions/holes.<br>
 *        The inner part and the edges of areas are interactive and fire events on click.<br>
 *        Since the actual size of an area depends on the zoom level it might be only partly visible. Thus detail windows will open at the click
 *        position.
 * @extends sap.ui.vbm.VoBase
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Area = function(sId,mSettings) {};
/**
 * This event is raised when the edge of an Area is clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.edgeClick = function(oControlEvent) {  };

/**
 * This event is raised when the edge of an Area is right clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.edgeContextMenu = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>edgeClick</code> event of this <code>sap.ui.vbm.Area</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.Area</code> itself.
 * 
 * This event is raised when the edge of an Area is clicked.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Area</code> itself
 * @returns {sap.ui.vbm.Area} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.attachEdgeClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Area(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>edgeContextMenu</code> event of this <code>sap.ui.vbm.Area</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.Area</code> itself.
 * 
 * This event is raised when the edge of an Area is right clicked.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Area</code> itself
 * @returns {sap.ui.vbm.Area} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.attachEdgeContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Area(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>edgeClick</code> event of this <code>sap.ui.vbm.Area</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.Area} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.detachEdgeClick = function(fnFunction,oListener) { return new sap.ui.vbm.Area(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>edgeContextMenu</code> event of this <code>sap.ui.vbm.Area</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.Area} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.detachEdgeContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Area(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Area with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Area.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>edgeClick</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.Area} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Area.prototype.fireEdgeClick = function(mArguments) { return new sap.ui.vbm.Area(); };

/**
 * Fires event <code>edgeContextMenu</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.Area} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Area.prototype.fireEdgeContextMenu = function(mArguments) { return new sap.ui.vbm.Area(); };

/**
 * Gets current value of property <code>borderDash</code>.
 * 
 * Defines the dashing style of the area border using an array.
 * @returns {string} Value of property <code>borderDash</code>
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.getBorderDash = function() { return ""; };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The fill color of the Area.
 * @returns {string} Value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.getColor = function() { return ""; };

/**
 * Gets current value of property <code>colorBorder</code>.
 * 
 * The border color of the Area.
 * @returns {string} Value of property <code>colorBorder</code>
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.getColorBorder = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.vbm.Area.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Area.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>position</code>.
 * 
 * The position array for the Area. For single part areas the format is "lon0;lat0;0.0;...;lonN,latN,0.0". For multi part areas you
 * need to provide an array of arrays of the above position string: "[['lon0...'],['lon0...']]" (sequence of single and double quotes
 * is important). <b>Single and Multi part areas must not be mixed within one Areas aggregation.</b><br>
 * Finally each area part can have multiple exclusions/holes. In that case the position list of excluded areas has follow the list of
 * the base shape: "['lon0...', 'exLon0...']".
 * @returns {string} Value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.getPosition = function() { return ""; };

/**
 * Sets a new value for property <code>borderDash</code>.
 * 
 * Defines the dashing style of the area border using an array.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sBorderDash New value for property <code>borderDash</code>
 * @returns {sap.ui.vbm.Area} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.setBorderDash = function(sBorderDash) { return new sap.ui.vbm.Area(); };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The fill color of the Area.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sColor New value for property <code>color</code>
 * @returns {sap.ui.vbm.Area} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.setColor = function(sColor) { return new sap.ui.vbm.Area(); };

/**
 * Sets a new value for property <code>colorBorder</code>.
 * 
 * The border color of the Area.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sColorBorder New value for property <code>colorBorder</code>
 * @returns {sap.ui.vbm.Area} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.setColorBorder = function(sColorBorder) { return new sap.ui.vbm.Area(); };

/**
 * Sets a new value for property <code>position</code>.
 * 
 * The position array for the Area. For single part areas the format is "lon0;lat0;0.0;...;lonN,latN,0.0". For multi part areas you
 * need to provide an array of arrays of the above position string: "[['lon0...'],['lon0...']]" (sequence of single and double quotes
 * is important). <b>Single and Multi part areas must not be mixed within one Areas aggregation.</b><br>
 * Finally each area part can have multiple exclusions/holes. In that case the position list of excluded areas has follow the list of
 * the base shape: "['lon0...', 'exLon0...']".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sPosition New value for property <code>position</code>
 * @returns {sap.ui.vbm.Area} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Area.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Area(); };


// ---- sap.ui.vbm.Areas --------------------------------------------------------------------------

/**
 * Constructor for a new Areas.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosChangeable posChangeable} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.vbm.Area[] (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:edgeClick edgeClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:edgeContextMenu edgeContextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Type specific Visual Object aggregation for <i>Area</i> instances.
 * @extends sap.ui.vbm.VoAggregation
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Areas = function(sId,mSettings) {};
/**
 * This event is raised when the edge of an Area is clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.vbm.Area} oControlEvent.getParameters.instance Clicked instance
 * @param {int} oControlEvent.getParameters.edge The number of the edge where the click occured. Edges are numbered zero based: e.g. edge from point 1 to point 2 has number
 * 0
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.edgeClick = function(oControlEvent) {  };

/**
 * This event is raised when the edge of an Area is right clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.vbm.Area} oControlEvent.getParameters.instance Clicked instance
 * @param {int} oControlEvent.getParameters.edge The number of the edge where the click occured. Edges are numbered zero based: e.g. edge from point 1 to point 2 has number
 * 0
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.edgeContextMenu = function(oControlEvent) {  };

/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Area}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Areas} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.addItem = function(oItem) { return new sap.ui.vbm.Areas(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>edgeClick</code> event of this <code>sap.ui.vbm.Areas</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.Areas</code> itself.
 * 
 * This event is raised when the edge of an Area is clicked.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Areas</code> itself
 * @returns {sap.ui.vbm.Areas} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.attachEdgeClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Areas(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>edgeContextMenu</code> event of this <code>sap.ui.vbm.Areas</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.Areas</code> itself.
 * 
 * This event is raised when the edge of an Area is right clicked.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Areas</code> itself
 * @returns {sap.ui.vbm.Areas} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.attachEdgeContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Areas(); };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.ui.vbm.Areas} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.destroyItems = function() { return new sap.ui.vbm.Areas(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>edgeClick</code> event of this <code>sap.ui.vbm.Areas</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.Areas} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.detachEdgeClick = function(fnFunction,oListener) { return new sap.ui.vbm.Areas(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>edgeContextMenu</code> event of this <code>sap.ui.vbm.Areas</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.Areas} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.detachEdgeContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Areas(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Areas with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoAggregation.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Areas.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>edgeClick</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>instance</code> of type <code>sap.ui.vbm.Area</code>Clicked instance</li>
 * <li><code>edge</code> of type <code>int</code>The number of the edge where the click occured. Edges are numbered zero based: e.g. edge from point 1 to point 2 has number
 * 0</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.Areas} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Areas.prototype.fireEdgeClick = function(mArguments) { return new sap.ui.vbm.Areas(); };

/**
 * Fires event <code>edgeContextMenu</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>instance</code> of type <code>sap.ui.vbm.Area</code>Clicked instance</li>
 * <li><code>edge</code> of type <code>int</code>The number of the edge where the click occured. Edges are numbered zero based: e.g. edge from point 1 to point 2 has number
 * 0</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.Areas} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Areas.prototype.fireEdgeContextMenu = function(mArguments) { return new sap.ui.vbm.Areas(); };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * Area object aggregation
 * @returns {sap.ui.vbm.Area[]}
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.vbm.Areas.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Areas.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>posChangeable</code>.
 * 
 * Set to true if position may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>posChangeable</code>
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.getPosChangeable = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.vbm.Area</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Area}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Area}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Areas} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Areas(); };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.Area[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.ui.vbm.Area} vItem The itemto remove or its index or id
 * @returns {sap.ui.vbm.Area} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Area(); };

/**
 * Sets a new value for property <code>posChangeable</code>.
 * 
 * Set to true if position may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bPosChangeable New value for property <code>posChangeable</code>
 * @returns {sap.ui.vbm.Areas} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Areas.prototype.setPosChangeable = function(bPosChangeable) { return new sap.ui.vbm.Areas(); };


// ---- sap.ui.vbm.Box --------------------------------------------------------------------------

/**
 * Constructor for a new Box.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosition position} : string (default: 0;0;0)</li>
 * <li>{@link #getScale scale} : string (default: 1;1;1)</li>
 * <li>{@link #getColor color} : string (default: RGB(255;0;0))</li>
 * <li>{@link #getColorBorder colorBorder} : string (default: RGB(255;0;0))</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Specific Visual Object element for a <i>Box</i>. A Box is a rectangle, which is positioned with its centerpoint at the given <i>position</i>.
 *        The ratio between width and height can be controlled with property <i>scale</i>. Depending on the property <i>fxsize</i> a box has an
 *        absolute or relative size.<br>
 *        Since the actual size of a box may depend on the zoom level it might be only partly visible. Thus detail windows will open at the click
 *        position.
 * @extends sap.ui.vbm.VoBase
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Box = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.vbm.Box with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Box.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The color of the box.
 * 
 * Default value is <code>RGB(255;0;0)</code>.
 * @returns {string} Value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.getColor = function() { return ""; };

/**
 * Gets current value of property <code>colorBorder</code>.
 * 
 * The border color of the box.
 * 
 * Default value is <code>RGB(255;0;0)</code>.
 * @returns {string} Value of property <code>colorBorder</code>
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.getColorBorder = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.vbm.Box.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Box.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>position</code>.
 * 
 * The position of the Box. The format is "lon;lat;0".
 * 
 * Default value is <code>0;0;0</code>.
 * @returns {string} Value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.getPosition = function() { return ""; };

/**
 * Gets current value of property <code>scale</code>.
 * 
 * The scale of the box. The format is "x-Scale;y-Scale;z-Scale" whereas z-Scale is currently ignored.
 * 
 * Default value is <code>1;1;1</code>.
 * @returns {string} Value of property <code>scale</code>
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.getScale = function() { return ""; };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The color of the box.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>RGB(255;0;0)</code>.
 * @param {string} sColor New value for property <code>color</code>
 * @returns {sap.ui.vbm.Box} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.setColor = function(sColor) { return new sap.ui.vbm.Box(); };

/**
 * Sets a new value for property <code>colorBorder</code>.
 * 
 * The border color of the box.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>RGB(255;0;0)</code>.
 * @param {string} sColorBorder New value for property <code>colorBorder</code>
 * @returns {sap.ui.vbm.Box} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.setColorBorder = function(sColorBorder) { return new sap.ui.vbm.Box(); };

/**
 * Sets a new value for property <code>position</code>.
 * 
 * The position of the Box. The format is "lon;lat;0".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0;0;0</code>.
 * @param {string} sPosition New value for property <code>position</code>
 * @returns {sap.ui.vbm.Box} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Box(); };

/**
 * Sets a new value for property <code>scale</code>.
 * 
 * The scale of the box. The format is "x-Scale;y-Scale;z-Scale" whereas z-Scale is currently ignored.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1;1;1</code>.
 * @param {string} sScale New value for property <code>scale</code>
 * @returns {sap.ui.vbm.Box} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Box.prototype.setScale = function(sScale) { return new sap.ui.vbm.Box(); };


// ---- sap.ui.vbm.Boxes --------------------------------------------------------------------------

/**
 * Constructor for a new Boxes.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosChangeable posChangeable} : boolean (default: true)</li>
 * <li>{@link #getScaleChangeable scaleChangeable} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.vbm.Box[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Type specific Visual Object aggregation for <i>Box</i> instances.
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Boxes = function(sId,mSettings) {};
/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Box}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Boxes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.addItem = function(oItem) { return new sap.ui.vbm.Boxes(); };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.ui.vbm.Boxes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.destroyItems = function() { return new sap.ui.vbm.Boxes(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Boxes with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Boxes.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * Box object aggregation
 * @returns {sap.ui.vbm.Box[]}
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.vbm.Boxes.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Boxes.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>posChangeable</code>.
 * 
 * Set to true if position may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>posChangeable</code>
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.getPosChangeable = function() { return false; };

/**
 * Gets current value of property <code>scaleChangeable</code>.
 * 
 * Set to true if scale may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>scaleChangeable</code>
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.getScaleChangeable = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.vbm.Box</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Box}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Box}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Boxes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Boxes(); };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.Box[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.ui.vbm.Box} vItem The itemto remove or its index or id
 * @returns {sap.ui.vbm.Box} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Box(); };

/**
 * Sets a new value for property <code>posChangeable</code>.
 * 
 * Set to true if position may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bPosChangeable New value for property <code>posChangeable</code>
 * @returns {sap.ui.vbm.Boxes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.setPosChangeable = function(bPosChangeable) { return new sap.ui.vbm.Boxes(); };

/**
 * Sets a new value for property <code>scaleChangeable</code>.
 * 
 * Set to true if scale may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bScaleChangeable New value for property <code>scaleChangeable</code>
 * @returns {sap.ui.vbm.Boxes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Boxes.prototype.setScaleChangeable = function(bScaleChangeable) { return new sap.ui.vbm.Boxes(); };


// ---- sap.ui.vbm.Circle --------------------------------------------------------------------------

/**
 * Constructor for a new Circle.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosition position} : string (default: 0;0;0)</li>
 * <li>{@link #getRadius radius} : string (default: 20)</li>
 * <li>{@link #getColor color} : string (default: RGBA(0,0,128,128))</li>
 * <li>{@link #getColorBorder colorBorder} : string (default: RGB(0,0,0))</li>
 * <li>{@link #getSlices slices} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Specific Visual Object element for an <i>Circle</i>. A Circle is positioned with its centerpoint at the given <i>position</i>. The
 *        detail window will open at the center of the circle.
 * @extends sap.ui.vbm.VoBase
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Circle = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.vbm.Circle with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Circle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The color of the circle.
 * 
 * Default value is <code>RGBA(0,0,128,128)</code>.
 * @returns {string} Value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.getColor = function() { return ""; };

/**
 * Gets current value of property <code>colorBorder</code>.
 * 
 * The border color of the circle.
 * 
 * Default value is <code>RGB(0,0,0)</code>.
 * @returns {string} Value of property <code>colorBorder</code>
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.getColorBorder = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.vbm.Circle.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Circle.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>position</code>.
 * 
 * The position of the circle.
 * 
 * Default value is <code>0;0;0</code>.
 * @returns {string} Value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.getPosition = function() { return ""; };

/**
 * Gets current value of property <code>radius</code>.
 * 
 * The pixel radius of the circle.
 * 
 * Default value is <code>20</code>.
 * @returns {string} Value of property <code>radius</code>
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.getRadius = function() { return ""; };

/**
 * Gets current value of property <code>slices</code>.
 * 
 * Number of circle slices. The property is required only when the PlugIn is used.
 * @returns {string} Value of property <code>slices</code>
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.getSlices = function() { return ""; };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The color of the circle.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>RGBA(0,0,128,128)</code>.
 * @param {string} sColor New value for property <code>color</code>
 * @returns {sap.ui.vbm.Circle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.setColor = function(sColor) { return new sap.ui.vbm.Circle(); };

/**
 * Sets a new value for property <code>colorBorder</code>.
 * 
 * The border color of the circle.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>RGB(0,0,0)</code>.
 * @param {string} sColorBorder New value for property <code>colorBorder</code>
 * @returns {sap.ui.vbm.Circle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.setColorBorder = function(sColorBorder) { return new sap.ui.vbm.Circle(); };

/**
 * Sets a new value for property <code>position</code>.
 * 
 * The position of the circle.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0;0;0</code>.
 * @param {string} sPosition New value for property <code>position</code>
 * @returns {sap.ui.vbm.Circle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Circle(); };

/**
 * Sets a new value for property <code>radius</code>.
 * 
 * The pixel radius of the circle.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>20</code>.
 * @param {string} sRadius New value for property <code>radius</code>
 * @returns {sap.ui.vbm.Circle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.setRadius = function(sRadius) { return new sap.ui.vbm.Circle(); };

/**
 * Sets a new value for property <code>slices</code>.
 * 
 * Number of circle slices. The property is required only when the PlugIn is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sSlices New value for property <code>slices</code>
 * @returns {sap.ui.vbm.Circle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circle.prototype.setSlices = function(sSlices) { return new sap.ui.vbm.Circle(); };


// ---- sap.ui.vbm.Circles --------------------------------------------------------------------------

/**
 * Constructor for a new Circles.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosChangeable posChangeable} : boolean (default: true)</li>
 * <li>{@link #getRadiusChangeable radiusChangeable} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.vbm.Circle[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Type specific Visual Object aggregation for <i>Circle</i> elements.
 * @extends sap.ui.vbm.VoAggregation
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Circles = function(sId,mSettings) {};
/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Circle}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Circles} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.addItem = function(oItem) { return new sap.ui.vbm.Circles(); };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.ui.vbm.Circles} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.destroyItems = function() { return new sap.ui.vbm.Circles(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Circles with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoAggregation.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Circles.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * circle object aggregation
 * @returns {sap.ui.vbm.Circle[]}
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.vbm.Circles.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Circles.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>posChangeable</code>.
 * 
 * Set to true if position may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>posChangeable</code>
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.getPosChangeable = function() { return false; };

/**
 * Gets current value of property <code>radiusChangeable</code>.
 * 
 * Set to true if radius may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>radiusChangeable</code>
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.getRadiusChangeable = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.vbm.Circle</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Circle}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Circle}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Circles} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Circles(); };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.Circle[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.ui.vbm.Circle} vItem The itemto remove or its index or id
 * @returns {sap.ui.vbm.Circle} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Circle(); };

/**
 * Sets a new value for property <code>posChangeable</code>.
 * 
 * Set to true if position may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bPosChangeable New value for property <code>posChangeable</code>
 * @returns {sap.ui.vbm.Circles} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.setPosChangeable = function(bPosChangeable) { return new sap.ui.vbm.Circles(); };

/**
 * Sets a new value for property <code>radiusChangeable</code>.
 * 
 * Set to true if radius may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bRadiusChangeable New value for property <code>radiusChangeable</code>
 * @returns {sap.ui.vbm.Circles} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Circles.prototype.setRadiusChangeable = function(bRadiusChangeable) { return new sap.ui.vbm.Circles(); };


// ---- sap.ui.vbm.Cluster --------------------------------------------------------------------------

/**
 * Constructor for a new Cluster.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColor color} : sap.ui.core.CSSColor</li>
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getType type} : sap.ui.vbm.SemanticType (default: None)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Cluster control to visualize clustered objects on a map. The Cluster control does not cluster anything itself, instead it only shows a
 *        predefined image. The image can be configured with the properties <i>type</i>, <i>color</i>, <i>icon</i> and <i>text</i>. If a
 *        <i>text</i> is given it is shown in the upper right corner of the control with a rounded border around. With the <i>color</i> property
 *        any color can be chosen. The <i>type</i> property overwrites a property <i>color</i> with semantic color of the type and provides a
 *        particular semantic icon in the middle of the control. With the <i>icon</i> property an icon can be defined and may overrule the
 *        semantic icon; if no icon is defined ( and no type) then the semantic icon for type inactive is chosen.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Cluster = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.vbm.Cluster with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Cluster.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>color</code>.
 * 
 * Set the color of the control. If a type is set then the semantic color of the type is taken instead.
 * @returns {sap.ui.core.CSSColor} Value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.Cluster.prototype.getColor = function() { return new sap.ui.core.CSSColor(); };

/**
 * Gets current value of property <code>icon</code>.
 * 
 * Set the icon of the control. If a type is set then the semantic icon of the type can be overwritten with this property. If no icon
 * and no type is set then the icon for the semantic type 'inactive' is taken.
 * @returns {string} Value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.vbm.Cluster.prototype.getIcon = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.vbm.Cluster.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Cluster.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>text</code>.
 * 
 * Set the text of the control.
 * @returns {string} Value of property <code>text</code>
 * @public
 * 
 */
sap.ui.vbm.Cluster.prototype.getText = function() { return ""; };

/**
 * Gets current value of property <code>type</code>.
 * 
 * semantic type for cluster. The type specifies the icon and the color of the cluster control.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.ui.vbm.SemanticType} Value of property <code>type</code>
 * @public
 * 
 */
sap.ui.vbm.Cluster.prototype.getType = function() { return new sap.ui.vbm.SemanticType(); };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * Set the color of the control. If a type is set then the semantic color of the type is taken instead.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSColor} sColor New value for property <code>color</code>
 * @returns {sap.ui.vbm.Cluster} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Cluster.prototype.setColor = function(sColor) { return new sap.ui.vbm.Cluster(); };

/**
 * Sets a new value for property <code>icon</code>.
 * 
 * Set the icon of the control. If a type is set then the semantic icon of the type can be overwritten with this property. If no icon
 * and no type is set then the icon for the semantic type 'inactive' is taken.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sIcon New value for property <code>icon</code>
 * @returns {sap.ui.vbm.Cluster} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Cluster.prototype.setIcon = function(sIcon) { return new sap.ui.vbm.Cluster(); };

/**
 * Sets a new value for property <code>text</code>.
 * 
 * Set the text of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.ui.vbm.Cluster} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Cluster.prototype.setText = function(sText) { return new sap.ui.vbm.Cluster(); };

/**
 * Sets a new value for property <code>type</code>.
 * 
 * semantic type for cluster. The type specifies the icon and the color of the cluster control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.ui.vbm.SemanticType} sType New value for property <code>type</code>
 * @returns {sap.ui.vbm.Cluster} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Cluster.prototype.setType = function(sType) { return new sap.ui.vbm.Cluster(); };


// ---- sap.ui.vbm.ClusterBase --------------------------------------------------------------------------

/**
 * Constructor for a new ClusterBase.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getAreaAlwaysVisible areaAlwaysVisible} : boolean (default: false)</li>
 * <li>{@link #getAreaColor areaColor} : sap.ui.core.CSSColor (default: rgba(200,0,0,0.2))</li>
 * <li>{@link #getAreaColorBorder areaColorBorder} : sap.ui.core.CSSColor (default: rgba(220,220,220,0.5))</li>
 * <li>{@link #getTextProperty textProperty} : string (default: text)</li>
 * <li>{@link #getRule rule} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getVizTemplate vizTemplate} : sap.ui.core.Control (default)</li>
 * <li>{@link #getVizVO vizVO} : sap.ui.vbm.Spot</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Abtract base class for Clustering types. This element implements the common part for all specific Cluster elements. It must not be used
 *        directly, but is the base for further extension.<br>
 *        There are two optional aggregations: <code>vizTemplate</code> and <code>vizVO</code> determining how cluster objects should be
 *        visualized. Only the one or the other should be provided.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.ClusterBase = function(sId,mSettings) {};
/**
 * Destroys the vizTemplate in the aggregation <code>vizTemplate</code>.
 * @returns {sap.ui.vbm.ClusterBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.destroyVizTemplate = function() { return new sap.ui.vbm.ClusterBase(); };

/**
 * Destroys the vizVO in the aggregation <code>vizVO</code>.
 * @returns {sap.ui.vbm.ClusterBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.destroyVizVO = function() { return new sap.ui.vbm.ClusterBase(); };

/**
 * Creates a new subclass of class sap.ui.vbm.ClusterBase with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.ClusterBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>areaAlwaysVisible</code>.
 * 
 * Flag controlling the visibility of the area convered by a cluster object.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>areaAlwaysVisible</code>
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.getAreaAlwaysVisible = function() { return false; };

/**
 * Gets current value of property <code>areaColor</code>.
 * 
 * Fill color for the area covered by a cluster object
 * 
 * Default value is <code>rgba(200,0,0,0.2)</code>.
 * @returns {sap.ui.core.CSSColor} Value of property <code>areaColor</code>
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.getAreaColor = function() { return new sap.ui.core.CSSColor(); };

/**
 * Gets current value of property <code>areaColorBorder</code>.
 * 
 * Border color for the area covered by a cluster object
 * 
 * Default value is <code>rgba(220,220,220,0.5)</code>.
 * @returns {sap.ui.core.CSSColor} Value of property <code>areaColorBorder</code>
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.getAreaColorBorder = function() { return new sap.ui.core.CSSColor(); };

/**
 * Returns a metadata object for class sap.ui.vbm.ClusterBase.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.ClusterBase.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>rule</code>.
 * 
 * Clustering rule, describing which visual objects should be considered for clustering
 * @returns {string} Value of property <code>rule</code>
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.getRule = function() { return ""; };

/**
 * Gets current value of property <code>textProperty</code>.
 * 
 * Name of property of the visualization control receiving the number of clustered objects.
 * 
 * Default value is <code>text</code>.
 * @returns {string} Value of property <code>textProperty</code>
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.getTextProperty = function() { return ""; };

/**
 * Gets content of aggregation <code>vizTemplate</code>.
 * 
 * Optional: Instance of a control, which is used as template for visualizing cluster objects. This is the prefered choise.
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.getVizTemplate = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation <code>vizVO</code>.
 * 
 * Optional: Instance of a spot, which is used as template for visualizing cluster objects
 * @returns {sap.ui.vbm.Spot}
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.getVizVO = function() { return new sap.ui.vbm.Spot(); };

/**
 * Sets a new value for property <code>areaAlwaysVisible</code>.
 * 
 * Flag controlling the visibility of the area convered by a cluster object.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAreaAlwaysVisible New value for property <code>areaAlwaysVisible</code>
 * @returns {sap.ui.vbm.ClusterBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.setAreaAlwaysVisible = function(bAreaAlwaysVisible) { return new sap.ui.vbm.ClusterBase(); };

/**
 * Sets a new value for property <code>areaColor</code>.
 * 
 * Fill color for the area covered by a cluster object
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>rgba(200,0,0,0.2)</code>.
 * @param {sap.ui.core.CSSColor} sAreaColor New value for property <code>areaColor</code>
 * @returns {sap.ui.vbm.ClusterBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.setAreaColor = function(sAreaColor) { return new sap.ui.vbm.ClusterBase(); };

/**
 * Sets a new value for property <code>areaColorBorder</code>.
 * 
 * Border color for the area covered by a cluster object
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>rgba(220,220,220,0.5)</code>.
 * @param {sap.ui.core.CSSColor} sAreaColorBorder New value for property <code>areaColorBorder</code>
 * @returns {sap.ui.vbm.ClusterBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.setAreaColorBorder = function(sAreaColorBorder) { return new sap.ui.vbm.ClusterBase(); };

/**
 * Sets a new value for property <code>rule</code>.
 * 
 * Clustering rule, describing which visual objects should be considered for clustering
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sRule New value for property <code>rule</code>
 * @returns {sap.ui.vbm.ClusterBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.setRule = function(sRule) { return new sap.ui.vbm.ClusterBase(); };

/**
 * Sets a new value for property <code>textProperty</code>.
 * 
 * Name of property of the visualization control receiving the number of clustered objects.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>text</code>.
 * @param {string} sTextProperty New value for property <code>textProperty</code>
 * @returns {sap.ui.vbm.ClusterBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.setTextProperty = function(sTextProperty) { return new sap.ui.vbm.ClusterBase(); };

/**
 * Sets the aggregated <code>vizTemplate</code>.
 * @param {sap.ui.core.Control} oVizTemplate The vizTemplate to set
 * @returns {sap.ui.vbm.ClusterBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.setVizTemplate = function(oVizTemplate) { return new sap.ui.vbm.ClusterBase(); };

/**
 * Sets the aggregated <code>vizVO</code>.
 * @param {sap.ui.vbm.Spot} oVizVO The vizVO to set
 * @returns {sap.ui.vbm.ClusterBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterBase.prototype.setVizVO = function(oVizVO) { return new sap.ui.vbm.ClusterBase(); };


// ---- sap.ui.vbm.ClusterDistance --------------------------------------------------------------------------

/**
 * Constructor for a new ClusterDistance.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDistance distance} : int (default: 128)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.ClusterBase#constructor sap.ui.vbm.ClusterBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Cluster definition element for distance based clusters. Visual objects are clustered based on the visible distance between them. Objects
 *        get aggregated to a cluster object as long as they are inside the given distance range to the start object. The start object for a
 *        cluster is not specifically defined, just the next object not belonging to a cluster is taken. The visualization objects are placed in
 *        the center of gravity of the covered objects. Thus the actual distance between them may vary.<br>
 *        This clustering is fast, but the results may not be very convincing.
 * @extends sap.ui.vbm.ClusterBase
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.ClusterDistance = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.vbm.ClusterDistance with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.ClusterBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.ClusterDistance.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>distance</code>.
 * 
 * Distance in pixels between cluster objects. This distance is used as parameter during the clustering. The visualization objects are
 * placed in center of gravity of the covered objects. Thus the actual distance between them may vary.
 * 
 * Default value is <code>128</code>.
 * @returns {int} Value of property <code>distance</code>
 * @public
 * 
 */
sap.ui.vbm.ClusterDistance.prototype.getDistance = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.vbm.ClusterDistance.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.ClusterDistance.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property <code>distance</code>.
 * 
 * Distance in pixels between cluster objects. This distance is used as parameter during the clustering. The visualization objects are
 * placed in center of gravity of the covered objects. Thus the actual distance between them may vary.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>128</code>.
 * @param {int} iDistance New value for property <code>distance</code>
 * @returns {sap.ui.vbm.ClusterDistance} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterDistance.prototype.setDistance = function(iDistance) { return new sap.ui.vbm.ClusterDistance(); };


// ---- sap.ui.vbm.ClusterGrid --------------------------------------------------------------------------

/**
 * Constructor for a new ClusterGrid.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getGridSize gridSize} : string (default: 256;256)</li>
 * <li>{@link #getLimit limit} : int (default: 2)</li>
 * <li>{@link #getLimitTotal limitTotal} : int (default: 2)</li>
 * <li>{@link #getOrderIndex orderIndex} : int</li>
 * <li>{@link #getOffset offset} : string (default: 0;0)</li>
 * <li>{@link #getCellSpacing cellSpacing} : int (default: 4)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.ClusterBase#constructor sap.ui.vbm.ClusterBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Cluster definition element for grid based clusters. Visual objects are clustered based on a grid. It is possible to have multiple grid
 *        based clusters. The visualization object is placed in the center of the grid cell plus a given offset.
 * @extends sap.ui.vbm.ClusterBase
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.ClusterGrid = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.vbm.ClusterGrid with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.ClusterBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.ClusterGrid.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>cellSpacing</code>.
 * 
 * Space between grid cells if cell area is shown
 * 
 * Default value is <code>4</code>.
 * @returns {int} Value of property <code>cellSpacing</code>
 * @public
 * 
 */
sap.ui.vbm.ClusterGrid.prototype.getCellSpacing = function() { return 0; };

/**
 * Gets current value of property <code>gridSize</code>.
 * 
 * Size of grid cells in pixels. Format is "distanceX;distanceY"
 * 
 * Default value is <code>256;256</code>.
 * @returns {string} Value of property <code>gridSize</code>
 * @public
 * 
 */
sap.ui.vbm.ClusterGrid.prototype.getGridSize = function() { return ""; };

/**
 * Gets current value of property <code>limit</code>.
 * 
 * Minimal number of objects covered by grid cell fullfilling the cluster rule until clustering is applied.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>limit</code>
 * @public
 * 
 */
sap.ui.vbm.ClusterGrid.prototype.getLimit = function() { return 0; };

/**
 * Gets current value of property <code>limitTotal</code>.
 * 
 * Minimal total number of objects covered by grid cell until clustering is applied.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>limitTotal</code>
 * @public
 * 
 */
sap.ui.vbm.ClusterGrid.prototype.getLimitTotal = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.vbm.ClusterGrid.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.ClusterGrid.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>offset</code>.
 * 
 * Offset for the visualization object from the center of the grid cell. This can be used to show multiple visualization objects in on
 * grid cell without overlapping. Format is "offsetX;offsetY"
 * 
 * Default value is <code>0;0</code>.
 * @returns {string} Value of property <code>offset</code>
 * @public
 * 
 */
sap.ui.vbm.ClusterGrid.prototype.getOffset = function() { return ""; };

/**
 * Gets current value of property <code>orderIndex</code>.
 * 
 * Ordering index of given cluster in the sequence of all grid based clusters
 * @returns {int} Value of property <code>orderIndex</code>
 * @public
 * 
 */
sap.ui.vbm.ClusterGrid.prototype.getOrderIndex = function() { return 0; };

/**
 * Sets a new value for property <code>cellSpacing</code>.
 * 
 * Space between grid cells if cell area is shown
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>4</code>.
 * @param {int} iCellSpacing New value for property <code>cellSpacing</code>
 * @returns {sap.ui.vbm.ClusterGrid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterGrid.prototype.setCellSpacing = function(iCellSpacing) { return new sap.ui.vbm.ClusterGrid(); };

/**
 * Sets a new value for property <code>gridSize</code>.
 * 
 * Size of grid cells in pixels. Format is "distanceX;distanceY"
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>256;256</code>.
 * @param {string} sGridSize New value for property <code>gridSize</code>
 * @returns {sap.ui.vbm.ClusterGrid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterGrid.prototype.setGridSize = function(sGridSize) { return new sap.ui.vbm.ClusterGrid(); };

/**
 * Sets a new value for property <code>limit</code>.
 * 
 * Minimal number of objects covered by grid cell fullfilling the cluster rule until clustering is applied.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iLimit New value for property <code>limit</code>
 * @returns {sap.ui.vbm.ClusterGrid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterGrid.prototype.setLimit = function(iLimit) { return new sap.ui.vbm.ClusterGrid(); };

/**
 * Sets a new value for property <code>limitTotal</code>.
 * 
 * Minimal total number of objects covered by grid cell until clustering is applied.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iLimitTotal New value for property <code>limitTotal</code>
 * @returns {sap.ui.vbm.ClusterGrid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterGrid.prototype.setLimitTotal = function(iLimitTotal) { return new sap.ui.vbm.ClusterGrid(); };

/**
 * Sets a new value for property <code>offset</code>.
 * 
 * Offset for the visualization object from the center of the grid cell. This can be used to show multiple visualization objects in on
 * grid cell without overlapping. Format is "offsetX;offsetY"
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0;0</code>.
 * @param {string} sOffset New value for property <code>offset</code>
 * @returns {sap.ui.vbm.ClusterGrid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterGrid.prototype.setOffset = function(sOffset) { return new sap.ui.vbm.ClusterGrid(); };

/**
 * Sets a new value for property <code>orderIndex</code>.
 * 
 * Ordering index of given cluster in the sequence of all grid based clusters
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iOrderIndex New value for property <code>orderIndex</code>
 * @returns {sap.ui.vbm.ClusterGrid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterGrid.prototype.setOrderIndex = function(iOrderIndex) { return new sap.ui.vbm.ClusterGrid(); };


// ---- sap.ui.vbm.ClusterInfoType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.vbm.ClusterInfoType.toString = function() { return ""; };

// ---- sap.ui.vbm.ClusterTree --------------------------------------------------------------------------

/**
 * Constructor for a new ClusterTree.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getAnimateClusterSplit animateClusterSplit} : boolean (default: true)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.ClusterBase#constructor sap.ui.vbm.ClusterBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Cluster definition element for tree clusters. Complex clustering based on Voronoi diagrams. The actual clustering is based on the areas
 *        in the Voronoi diagram and cluster objects get aggregated to a hierarchy over several levels of detail.
 * @extends sap.ui.vbm.ClusterBase
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.ClusterTree = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.vbm.ClusterTree with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.ClusterBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.ClusterTree.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>animateClusterSplit</code>.
 * 
 * Indicates whether the split of a cluster object into sub clusterers or visual objects should be animated
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>animateClusterSplit</code>
 * @public
 * 
 */
sap.ui.vbm.ClusterTree.prototype.getAnimateClusterSplit = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.vbm.ClusterTree.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.ClusterTree.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property <code>animateClusterSplit</code>.
 * 
 * Indicates whether the split of a cluster object into sub clusterers or visual objects should be animated
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bAnimateClusterSplit New value for property <code>animateClusterSplit</code>
 * @returns {sap.ui.vbm.ClusterTree} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.ClusterTree.prototype.setAnimateClusterSplit = function(bAnimateClusterSplit) { return new sap.ui.vbm.ClusterTree(); };


// ---- sap.ui.vbm.Container --------------------------------------------------------------------------

/**
 * Constructor for a new Container.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosition position} : string</li>
 * <li>{@link #getAlignment alignment} : string (default: 0)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItem item} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Specific Visual Object element acting as a container for other controls. A Container is positioned at the given position on the map. It
 *        can aggregate other controls, which will then move with the map.<br>
 *        <b>Since a Container is not a real visual object most features borrowed from <i>VoBase</i> will not work. There is no label, no edit
 *        mode, and no drop support. Events like click will only be fired if the aggregated control is not handling them.</b>
 * @extends sap.ui.vbm.VoBase
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Container = function(sId,mSettings) {};
/**
 * Destroys the item in the aggregation <code>item</code>.
 * @returns {sap.ui.vbm.Container} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.destroyItem = function() { return new sap.ui.vbm.Container(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Container with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Container.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>alignment</code>.
 * 
 * Alignment of the container to its position:
 * <ul>
 * <li>0: center
 * <li>1: top center
 * <li>2: top right
 * <li>3: center right
 * <li>4: bottom right
 * <li>5: bottom center
 * <li>6: bottom left
 * <li>7: center left
 * <li>8: top left
 * </ul>
 * 
 * Default value is <code>0</code>.
 * @returns {string} Value of property <code>alignment</code>
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.getAlignment = function() { return ""; };

/**
 * Gets content of aggregation <code>item</code>.
 * 
 * The control that should be placed in the container.
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.getItem = function() { return new sap.ui.core.Control(); };

/**
 * Returns a metadata object for class sap.ui.vbm.Container.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Container.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>position</code>.
 * 
 * The position for the Container. The format is "lon;lat;0".
 * @returns {string} Value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.getPosition = function() { return ""; };

/**
 * Sets a new value for property <code>alignment</code>.
 * 
 * Alignment of the container to its position:
 * <ul>
 * <li>0: center
 * <li>1: top center
 * <li>2: top right
 * <li>3: center right
 * <li>4: bottom right
 * <li>5: bottom center
 * <li>6: bottom left
 * <li>7: center left
 * <li>8: top left
 * </ul>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {string} sAlignment New value for property <code>alignment</code>
 * @returns {sap.ui.vbm.Container} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.setAlignment = function(sAlignment) { return new sap.ui.vbm.Container(); };

/**
 * Sets the aggregated <code>item</code>.
 * @param {sap.ui.core.Control} oItem The item to set
 * @returns {sap.ui.vbm.Container} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.setItem = function(oItem) { return new sap.ui.vbm.Container(); };

/**
 * Sets a new value for property <code>position</code>.
 * 
 * The position for the Container. The format is "lon;lat;0".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sPosition New value for property <code>position</code>
 * @returns {sap.ui.vbm.Container} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Container.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Container(); };


// ---- sap.ui.vbm.Containers --------------------------------------------------------------------------

/**
 * Constructor for a new Containers.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.vbm.Container[] (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Type specific Visual Object aggregation for <i>Container</i> instances.
 * @extends sap.ui.vbm.VoAggregation
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Containers = function(sId,mSettings) {};
/**
 * The event is raised when there is a click action on a Container. This event is only fired if the container content is not handling
 * the event it self.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.click = function(oControlEvent) {  };

/**
 * The event is raised when there is a right click or a tap and hold action on a Container. This event is only fired if the container
 * content is not handling the event it self.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.contextMenu = function(oControlEvent) {  };

/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Container}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Containers} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.addItem = function(oItem) { return new sap.ui.vbm.Containers(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>click</code> event of this <code>sap.ui.vbm.Containers</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.Containers</code> itself.
 * 
 * The event is raised when there is a click action on a Container. This event is only fired if the container content is not handling
 * the event it self.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Containers</code> itself
 * @returns {sap.ui.vbm.Containers} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Containers(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>contextMenu</code> event of this <code>sap.ui.vbm.Containers</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.Containers</code> itself.
 * 
 * The event is raised when there is a right click or a tap and hold action on a Container. This event is only fired if the container
 * content is not handling the event it self.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Containers</code> itself
 * @returns {sap.ui.vbm.Containers} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Containers(); };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.ui.vbm.Containers} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.destroyItems = function() { return new sap.ui.vbm.Containers(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>click</code> event of this <code>sap.ui.vbm.Containers</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.Containers} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Containers(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>contextMenu</code> event of this <code>sap.ui.vbm.Containers</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.Containers} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Containers(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Containers with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoAggregation.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Containers.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>click</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.Containers} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Containers.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Containers(); };

/**
 * Fires event <code>contextMenu</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.Containers} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Containers.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Containers(); };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * Container object aggregation
 * @returns {sap.ui.vbm.Container[]}
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.vbm.Containers.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Containers.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.vbm.Container</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Container}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Container}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Containers} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Containers(); };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.Container[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.ui.vbm.Container} vItem The itemto remove or its index or id
 * @returns {sap.ui.vbm.Container} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Containers.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Container(); };


// ---- sap.ui.vbm.DragSource --------------------------------------------------------------------------

/**
 * Constructor for a new DragSource.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getType type} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class DragSource Aggregation element
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.DragSource = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.vbm.DragSource with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.DragSource.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.vbm.DragSource.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.DragSource.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>type</code>.
 * 
 * Drag type
 * @returns {string} Value of property <code>type</code>
 * @public
 * 
 */
sap.ui.vbm.DragSource.prototype.getType = function() { return ""; };

/**
 * Sets a new value for property <code>type</code>.
 * 
 * Drag type
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sType New value for property <code>type</code>
 * @returns {sap.ui.vbm.DragSource} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.DragSource.prototype.setType = function(sType) { return new sap.ui.vbm.DragSource(); };


// ---- sap.ui.vbm.DropTarget --------------------------------------------------------------------------

/**
 * Constructor for a new DropTarget.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getType type} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class DropTarget Aggregation element
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.DropTarget = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.vbm.DropTarget with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.DropTarget.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.vbm.DropTarget.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.DropTarget.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>type</code>.
 * 
 * Drop type
 * @returns {string} Value of property <code>type</code>
 * @public
 * 
 */
sap.ui.vbm.DropTarget.prototype.getType = function() { return ""; };

/**
 * Sets a new value for property <code>type</code>.
 * 
 * Drop type
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sType New value for property <code>type</code>
 * @returns {sap.ui.vbm.DropTarget} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.DropTarget.prototype.setType = function(sType) { return new sap.ui.vbm.DropTarget(); };


// ---- sap.ui.vbm.Feature --------------------------------------------------------------------------

/**
 * Constructor for a new Feature.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColor color} : sap.ui.core.CSSColor</li>
 * <li>{@link #getFeatureId featureId} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The Feature element can be added to the <i>items</i> aggregation of a <i>FeatureCollection</i>. By matching the id it allows to
 *        redefine the color of a GeoJSON feature and adds interactivity.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Feature = function(sId,mSettings) {};
/**
 * The event is raised when there is a click action on a Feature.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.vbm.Feature.prototype.click = function(oControlEvent) {  };

/**
 * The event is raised when there is a right click or a tap and hold action on a Feature.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.unified.Menu} oControlEvent.getParameters.menu Menu object to be used with openContextMenu().
 * @public
 * 
 */
sap.ui.vbm.Feature.prototype.contextMenu = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>click</code> event of this <code>sap.ui.vbm.Feature</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.Feature</code> itself.
 * 
 * The event is raised when there is a click action on a Feature.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Feature</code> itself
 * @returns {sap.ui.vbm.Feature} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Feature.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Feature(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>contextMenu</code> event of this <code>sap.ui.vbm.Feature</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.Feature</code> itself.
 * 
 * The event is raised when there is a right click or a tap and hold action on a Feature.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Feature</code> itself
 * @returns {sap.ui.vbm.Feature} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Feature.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Feature(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>click</code> event of this <code>sap.ui.vbm.Feature</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.Feature} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Feature.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Feature(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>contextMenu</code> event of this <code>sap.ui.vbm.Feature</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.Feature} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Feature.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Feature(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Feature with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Feature.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>click</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.Feature} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Feature.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Feature(); };

/**
 * Fires event <code>contextMenu</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>menu</code> of type <code>sap.ui.unified.Menu</code>Menu object to be used with openContextMenu().</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.Feature} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Feature.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Feature(); };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The color, this should be provided in the rgba(r,g,b,a) format.
 * @returns {sap.ui.core.CSSColor} Value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.Feature.prototype.getColor = function() { return new sap.ui.core.CSSColor(); };

/**
 * Gets current value of property <code>featureId</code>.
 * 
 * The Feature ID. Used to match with the feature in the GeoJSON given to the parent (FeatureCollection).
 * @returns {string} Value of property <code>featureId</code>
 * @public
 * 
 */
sap.ui.vbm.Feature.prototype.getFeatureId = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.vbm.Feature.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Feature.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Open the context menu
 * @param {object} oMenu the context menu to be opened
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Feature.prototype.openContextMenu = function(oMenu) { return null; };

/**
 * Open a Detail Window for the Feature at click position
 * @param {string} sCaption caption of detail window
 * @param {string} sOffsetX position offset in x-direction from the anchor point
 * @param {string} sOffsetY position offset in y-direction from the anchor point
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Feature.prototype.openDetailWindow = function(sCaption,sOffsetX,sOffsetY) { return null; };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The color, this should be provided in the rgba(r,g,b,a) format.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSColor} sColor New value for property <code>color</code>
 * @returns {sap.ui.vbm.Feature} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Feature.prototype.setColor = function(sColor) { return new sap.ui.vbm.Feature(); };

/**
 * Sets a new value for property <code>featureId</code>.
 * 
 * The Feature ID. Used to match with the feature in the GeoJSON given to the parent (FeatureCollection).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sFeatureId New value for property <code>featureId</code>
 * @returns {sap.ui.vbm.Feature} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Feature.prototype.setFeatureId = function(sFeatureId) { return new sap.ui.vbm.Feature(); };


// ---- sap.ui.vbm.FeatureCollection --------------------------------------------------------------------------

/**
 * Constructor for a new FeatureCollection.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.vbm.Feature[] (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.GeoJsonLayer#constructor sap.ui.vbm.GeoJsonLayer}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class FeatureCollection aggregation container. A FeatureCollection can render the content of an assigned GeoJSON. The naming is associated to
 *        the GeoJSON standard. All features found in the GeoJSON are rendered as separated objects. From the possible feature types only
 *        <ul>
 *        <li>Polygon and
 *        <li>Multipolygon
 *        </ul>
 *        are supported so far. The feature type support will be extended in the upcoming releases.<br>
 *        All features from the GeoJSON will be rendered with the given default colors and are inactive. They do not react on mouse over, except
 *        with tooltip, or raise any events on click or right click.<br>
 *        By adding <i>Feature elements</i> to the items aggregation you can make the match (by id) feature from the GeoJSON interactive and give
 *        it alternative colors.
 * @extends sap.ui.vbm.GeoJsonLayer
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.FeatureCollection = function(sId,mSettings) {};
/**
 * The event is raised when there is a click action on an aggregated Feature. Clicks on other Features from the GeoJSON are ignored.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.featureId Id of clicked Feature
 * @public
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.click = function(oControlEvent) {  };

/**
 * The event is raised when there is a right click or a tap and hold action on an aggregated Feature. Clicks on other Features from
 * the GeoJSON are ignored.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.featureId Id of clicked Feature
 * @public
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.contextMenu = function(oControlEvent) {  };

/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Feature}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.FeatureCollection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.addItem = function(oItem) { return new sap.ui.vbm.FeatureCollection(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>click</code> event of this <code>sap.ui.vbm.FeatureCollection</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.FeatureCollection</code> itself.
 * 
 * The event is raised when there is a click action on an aggregated Feature. Clicks on other Features from the GeoJSON are ignored.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.FeatureCollection</code> itself
 * @returns {sap.ui.vbm.FeatureCollection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.FeatureCollection(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>contextMenu</code> event of this <code>sap.ui.vbm.FeatureCollection</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.FeatureCollection</code> itself.
 * 
 * The event is raised when there is a right click or a tap and hold action on an aggregated Feature. Clicks on other Features from
 * the GeoJSON are ignored.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.FeatureCollection</code> itself
 * @returns {sap.ui.vbm.FeatureCollection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.FeatureCollection(); };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.ui.vbm.FeatureCollection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.destroyItems = function() { return new sap.ui.vbm.FeatureCollection(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>click</code> event of this <code>sap.ui.vbm.FeatureCollection</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.FeatureCollection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.FeatureCollection(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>contextMenu</code> event of this <code>sap.ui.vbm.FeatureCollection</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.FeatureCollection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.FeatureCollection(); };

/**
 * Creates a new subclass of class sap.ui.vbm.FeatureCollection with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.GeoJsonLayer.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.FeatureCollection.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>click</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>featureId</code> of type <code>string</code>Id of clicked Feature</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.FeatureCollection} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.FeatureCollection(); };

/**
 * Fires event <code>contextMenu</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>featureId</code> of type <code>string</code>Id of clicked Feature</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.FeatureCollection} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.FeatureCollection(); };

/**
 * Returns Properties for Features like name, bounding box, and midpoint
 * @param {string[]} aFeatureIds Array of Feature Ids. The Feature Id must match the GeoJSON tag.
 * @returns {array} Array of Feature Information Objects. Each object in the array has the properties BBox: Bounding Box for the Feature in format
 *          "lonMin;latMin;lonMax;latMax", Midpoint: Centerpoint for Feature in format "lon;lat", Name: Name of the Feature, and Properties: Array
 *          of name-value-pairs associated with the Feature
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.getFeaturesInfo = function(aFeatureIds) { return null; };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * Feature object aggregation
 * @returns {sap.ui.vbm.Feature[]}
 * @public
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.vbm.FeatureCollection.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.FeatureCollection.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.vbm.Feature</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Feature}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Feature}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.vbm.FeatureCollection} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.FeatureCollection(); };

/**
 * open the context menu
 * @param {sap.ui.vbm.Feature} oFeature VO instance for which the Detail Window should be opened
 * @param {object} oMenu the context menu to be opened
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.openContextMenu = function(oFeature,oMenu) { return null; };

/**
 * open a Detail Window
 * @param {sap.ui.vbm.Feature} oFeature VO instance for which the Detail Window should be opened
 * @param {object} oParams Parameter object
 * @param {string} oParams.caption Text for Detail Window caption
 * @param {string} oParams.offsetX position offset in x-direction from the anchor point
 * @param {string} oParams.offsetY position offset in y-direction from the anchor point
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.openDetailWindow = function(oFeature,oParams) { return null; };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.Feature[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.ui.vbm.Feature} vItem The itemto remove or its index or id
 * @returns {sap.ui.vbm.Feature} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.FeatureCollection.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Feature(); };


// ---- sap.ui.vbm.GeoCircle --------------------------------------------------------------------------

/**
 * Constructor for a new GeoCircle.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosition position} : string (default: 0;0;0)</li>
 * <li>{@link #getColorBorder colorBorder} : string (default: RGB(0,0,0))</li>
 * <li>{@link #getRadius radius} : string (default: 10000)</li>
 * <li>{@link #getColor color} : string (default: RGB(0,0,0))</li>
 * <li>{@link #getSlices slices} : string (default: 20)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Specific Visual Object element for a <i>GeoCircle</i>. A GeoCircle is positioned with its centerpoint at the given <i>position</i>.
 *        Since the actual size of a geocircle may depend on the zoom level it might be only partly visible. Thus detail windows will open at the
 *        click position.
 * @extends sap.ui.vbm.VoBase
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoCircle = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.vbm.GeoCircle with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.GeoCircle.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The color of the geocirle.
 * 
 * Default value is <code>RGB(0,0,0)</code>.
 * @returns {string} Value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.getColor = function() { return ""; };

/**
 * Gets current value of property <code>colorBorder</code>.
 * 
 * The border color of the geocirle.
 * 
 * Default value is <code>RGB(0,0,0)</code>.
 * @returns {string} Value of property <code>colorBorder</code>
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.getColorBorder = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.vbm.GeoCircle.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.GeoCircle.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>position</code>.
 * 
 * The position of the geocircle. The format is "lon;lat;0".
 * 
 * Default value is <code>0;0;0</code>.
 * @returns {string} Value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.getPosition = function() { return ""; };

/**
 * Gets current value of property <code>radius</code>.
 * 
 * The radius in meters of the geocirle.
 * 
 * Default value is <code>10000</code>.
 * @returns {string} Value of property <code>radius</code>
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.getRadius = function() { return ""; };

/**
 * Gets current value of property <code>slices</code>.
 * 
 * The number of slices of the geocircle.
 * 
 * Default value is <code>20</code>.
 * @returns {string} Value of property <code>slices</code>
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.getSlices = function() { return ""; };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The color of the geocirle.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>RGB(0,0,0)</code>.
 * @param {string} sColor New value for property <code>color</code>
 * @returns {sap.ui.vbm.GeoCircle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.setColor = function(sColor) { return new sap.ui.vbm.GeoCircle(); };

/**
 * Sets a new value for property <code>colorBorder</code>.
 * 
 * The border color of the geocirle.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>RGB(0,0,0)</code>.
 * @param {string} sColorBorder New value for property <code>colorBorder</code>
 * @returns {sap.ui.vbm.GeoCircle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.setColorBorder = function(sColorBorder) { return new sap.ui.vbm.GeoCircle(); };

/**
 * Sets a new value for property <code>position</code>.
 * 
 * The position of the geocircle. The format is "lon;lat;0".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0;0;0</code>.
 * @param {string} sPosition New value for property <code>position</code>
 * @returns {sap.ui.vbm.GeoCircle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.GeoCircle(); };

/**
 * Sets a new value for property <code>radius</code>.
 * 
 * The radius in meters of the geocirle.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>10000</code>.
 * @param {string} sRadius New value for property <code>radius</code>
 * @returns {sap.ui.vbm.GeoCircle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.setRadius = function(sRadius) { return new sap.ui.vbm.GeoCircle(); };

/**
 * Sets a new value for property <code>slices</code>.
 * 
 * The number of slices of the geocircle.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>20</code>.
 * @param {string} sSlices New value for property <code>slices</code>
 * @returns {sap.ui.vbm.GeoCircle} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircle.prototype.setSlices = function(sSlices) { return new sap.ui.vbm.GeoCircle(); };


// ---- sap.ui.vbm.GeoCircles --------------------------------------------------------------------------

/**
 * Constructor for a new GeoCircles.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosChangeable posChangeable} : boolean (default: true)</li>
 * <li>{@link #getRadiusChangeable radiusChangeable} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.vbm.GeoCircle[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Type specific Visual Object aggregation for <i>GeoCircle</i> elements.
 * @extends sap.ui.vbm.VoAggregation
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoCircles = function(sId,mSettings) {};
/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.ui.vbm.GeoCircle}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.GeoCircles} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.addItem = function(oItem) { return new sap.ui.vbm.GeoCircles(); };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.ui.vbm.GeoCircles} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.destroyItems = function() { return new sap.ui.vbm.GeoCircles(); };

/**
 * Creates a new subclass of class sap.ui.vbm.GeoCircles with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoAggregation.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.GeoCircles.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * GeoCircle element aggregation
 * @returns {sap.ui.vbm.GeoCircle[]}
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.vbm.GeoCircles.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.GeoCircles.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>posChangeable</code>.
 * 
 * Set to true if position may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>posChangeable</code>
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.getPosChangeable = function() { return false; };

/**
 * Gets current value of property <code>radiusChangeable</code>.
 * 
 * Set to true if radius may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>radiusChangeable</code>
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.getRadiusChangeable = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.vbm.GeoCircle</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.GeoCircle}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.ui.vbm.GeoCircle}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.vbm.GeoCircles} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.GeoCircles(); };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.GeoCircle[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.ui.vbm.GeoCircle} vItem The itemto remove or its index or id
 * @returns {sap.ui.vbm.GeoCircle} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.removeItem = function(vItem) { return new sap.ui.vbm.GeoCircle(); };

/**
 * Sets a new value for property <code>posChangeable</code>.
 * 
 * Set to true if position may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bPosChangeable New value for property <code>posChangeable</code>
 * @returns {sap.ui.vbm.GeoCircles} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.setPosChangeable = function(bPosChangeable) { return new sap.ui.vbm.GeoCircles(); };

/**
 * Sets a new value for property <code>radiusChangeable</code>.
 * 
 * Set to true if radius may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bRadiusChangeable New value for property <code>radiusChangeable</code>
 * @returns {sap.ui.vbm.GeoCircles} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoCircles.prototype.setRadiusChangeable = function(bRadiusChangeable) { return new sap.ui.vbm.GeoCircles(); };


// ---- sap.ui.vbm.GeoJsonLayer --------------------------------------------------------------------------

/**
 * Constructor for a new GeoJsonLayer.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSrcURL srcURL} : string</li>
 * <li>{@link #getData data} : object</li>
 * <li>{@link #getDefaultLineWidth defaultLineWidth} : int (default: 5)</li>
 * <li>{@link #getDefaultFillColor defaultFillColor} : sap.ui.core.CSSColor (default: rgba(186, 193, 196, 0.5))</li>
 * <li>{@link #getDefaultBorderColor defaultBorderColor} : sap.ui.core.CSSColor (default: rgba(255, 255, 255, 1.0))</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.vbm.Feature[] (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class GeoJsonLayer aggregation container. A GeoJsonLayer can render the content of an assigned GeoJSON. The naming is associated to the
 *        GeoJSON standard. All features found in the GeoJSON are rendered as separated objects. From the possible feature types only
 *        <ul>
 *        <li>Polygon and Multipolygon,
 *        <li>LineString, and
 *        <li>Point
 *        </ul>
 *        are supported so far. The feature type support will be extended in the upcoming releases.<br>
 *        All features from the GeoJSON will be rendered with the given default colors and are inactive. They do not react on mouse over, except
 *        with tooltip, or raise any events on click or right click.<br>
 *        By adding <i>Feature elements</i> to the items aggregation you can make the match (by id) feature from the GeoJSON interactive and give
 *        it alternative colors. <br>
 *        The GeoJSON can be given as a URL using property <i>srcURL</i>, directly as object using property <i>data</i>, or as a combination of
 *        both.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoJsonLayer = function(sId,mSettings) {};
/**
 * The event is raised when there is a click action on an aggregated Feature. Clicks on other Features from the GeoJSON are ignored.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.featureId Id of clicked Feature
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.click = function(oControlEvent) {  };

/**
 * The event is raised when there is a right click or a tap and hold action on an aggregated Feature. Clicks on other Features from
 * the GeoJSON are ignored.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.featureId Id of clicked Feature
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.contextMenu = function(oControlEvent) {  };

/**
 * Add GeoJSON object to the layer
 * @param {object} aData GeoJSON object or an array of those
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.addData = function(aData) { return null; };

/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Feature}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.GeoJsonLayer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.addItem = function(oItem) { return new sap.ui.vbm.GeoJsonLayer(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>click</code> event of this <code>sap.ui.vbm.GeoJsonLayer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.GeoJsonLayer</code> itself.
 * 
 * The event is raised when there is a click action on an aggregated Feature. Clicks on other Features from the GeoJSON are ignored.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoJsonLayer</code> itself
 * @returns {sap.ui.vbm.GeoJsonLayer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoJsonLayer(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>contextMenu</code> event of this <code>sap.ui.vbm.GeoJsonLayer</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.GeoJsonLayer</code> itself.
 * 
 * The event is raised when there is a right click or a tap and hold action on an aggregated Feature. Clicks on other Features from
 * the GeoJSON are ignored.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoJsonLayer</code> itself
 * @returns {sap.ui.vbm.GeoJsonLayer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoJsonLayer(); };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.ui.vbm.GeoJsonLayer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.destroyItems = function() { return new sap.ui.vbm.GeoJsonLayer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>click</code> event of this <code>sap.ui.vbm.GeoJsonLayer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.GeoJsonLayer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.GeoJsonLayer(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>contextMenu</code> event of this <code>sap.ui.vbm.GeoJsonLayer</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.GeoJsonLayer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.GeoJsonLayer(); };

/**
 * Creates a new subclass of class sap.ui.vbm.GeoJsonLayer with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.GeoJsonLayer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>click</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>featureId</code> of type <code>string</code>Id of clicked Feature</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.GeoJsonLayer} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.GeoJsonLayer(); };

/**
 * Fires event <code>contextMenu</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>featureId</code> of type <code>string</code>Id of clicked Feature</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.GeoJsonLayer} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.GeoJsonLayer(); };

/**
 * Gets current value of property <code>data</code>.
 * 
 * GeoJSON object according to the {@link http://geojson.org/geojson-spec.html#geojson-objects|specification} or array of such objects
 * @returns {object} Value of property <code>data</code>
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.getData = function() { return new Object(); };

/**
 * Gets current value of property <code>defaultBorderColor</code>.
 * 
 * Default border color for GeoJSON features, if applicable (Polygons and LineStrings)
 * 
 * Default value is <code>rgba(255, 255, 255, 1.0)</code>.
 * @returns {sap.ui.core.CSSColor} Value of property <code>defaultBorderColor</code>
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.getDefaultBorderColor = function() { return new sap.ui.core.CSSColor(); };

/**
 * Gets current value of property <code>defaultFillColor</code>.
 * 
 * Default Fill color for GeoJSON features (Polygons and LineStrings)
 * 
 * Default value is <code>rgba(186, 193, 196, 0.5)</code>.
 * @returns {sap.ui.core.CSSColor} Value of property <code>defaultFillColor</code>
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.getDefaultFillColor = function() { return new sap.ui.core.CSSColor(); };

/**
 * Gets current value of property <code>defaultLineWidth</code>.
 * 
 * Default line width for LineStrings
 * 
 * Default value is <code>5</code>.
 * @returns {int} Value of property <code>defaultLineWidth</code>
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.getDefaultLineWidth = function() { return 0; };

/**
 * Returns Properties for Features like name, bounding box, and midpoint
 * @param {string[]} aFeatureIds Array of Feature Ids. The Feature Id must match the GeoJSON tag.
 * @returns {array} Array of Feature Information Objects. Each object in the array has the properties BBox: Bounding Box for the Feature in format
 *          "lonMin;latMin;lonMax;latMax", Midpoint: Centerpoint for Feature in format "lon;lat", Name: Name of the Feature, and Properties: Array
 *          of name-value-pairs associated with the Feature
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.getFeaturesInfo = function(aFeatureIds) { return null; };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * Feature object aggregation
 * @returns {sap.ui.vbm.Feature[]}
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.vbm.GeoJsonLayer.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.GeoJsonLayer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>srcURL</code>.
 * 
 * Source URL for GeoJSON
 * @returns {string} Value of property <code>srcURL</code>
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.getSrcURL = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.vbm.Feature</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Feature}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Feature}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.vbm.GeoJsonLayer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.GeoJsonLayer(); };

/**
 * open the context menu
 * @param {sap.ui.vbm.Feature} oFeature VO instance for which the Detail Window should be opened
 * @param {object} oMenu the context menu to be opened
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.openContextMenu = function(oFeature,oMenu) { return null; };

/**
 * open a Detail Window
 * @param {sap.ui.vbm.Feature} oFeature VO instance for which the Detail Window should be opened
 * @param {object} oParams Parameter object
 * @param {string} oParams.caption Text for Detail Window caption
 * @param {string} oParams.offsetX position offset in x-direction from the anchor point
 * @param {string} oParams.offsetY position offset in y-direction from the anchor point
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.openDetailWindow = function(oFeature,oParams) { return null; };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.Feature[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.ui.vbm.Feature} vItem The itemto remove or its index or id
 * @returns {sap.ui.vbm.Feature} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Feature(); };

/**
 * Sets a new value for property <code>data</code>.
 * 
 * GeoJSON object according to the {@link http://geojson.org/geojson-spec.html#geojson-objects|specification} or array of such objects
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oData New value for property <code>data</code>
 * @returns {sap.ui.vbm.GeoJsonLayer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.setData = function(oData) { return new sap.ui.vbm.GeoJsonLayer(); };

/**
 * Sets a new value for property <code>defaultBorderColor</code>.
 * 
 * Default border color for GeoJSON features, if applicable (Polygons and LineStrings)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>rgba(255, 255, 255, 1.0)</code>.
 * @param {sap.ui.core.CSSColor} sDefaultBorderColor New value for property <code>defaultBorderColor</code>
 * @returns {sap.ui.vbm.GeoJsonLayer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.setDefaultBorderColor = function(sDefaultBorderColor) { return new sap.ui.vbm.GeoJsonLayer(); };

/**
 * Sets a new value for property <code>defaultFillColor</code>.
 * 
 * Default Fill color for GeoJSON features (Polygons and LineStrings)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>rgba(186, 193, 196, 0.5)</code>.
 * @param {sap.ui.core.CSSColor} sDefaultFillColor New value for property <code>defaultFillColor</code>
 * @returns {sap.ui.vbm.GeoJsonLayer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.setDefaultFillColor = function(sDefaultFillColor) { return new sap.ui.vbm.GeoJsonLayer(); };

/**
 * Sets a new value for property <code>defaultLineWidth</code>.
 * 
 * Default line width for LineStrings
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5</code>.
 * @param {int} iDefaultLineWidth New value for property <code>defaultLineWidth</code>
 * @returns {sap.ui.vbm.GeoJsonLayer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.setDefaultLineWidth = function(iDefaultLineWidth) { return new sap.ui.vbm.GeoJsonLayer(); };

/**
 * Sets a new value for property <code>srcURL</code>.
 * 
 * Source URL for GeoJSON
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sSrcURL New value for property <code>srcURL</code>
 * @returns {sap.ui.vbm.GeoJsonLayer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoJsonLayer.prototype.setSrcURL = function(sSrcURL) { return new sap.ui.vbm.GeoJsonLayer(); };


// ---- sap.ui.vbm.GeoMap --------------------------------------------------------------------------

/**
 * Constructor for a new GeoMap.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getMapConfiguration mapConfiguration} : object</li>
 * <li>{@link #getLegendVisible legendVisible} : boolean (default: true)</li>
 * <li>{@link #getScaleVisible scaleVisible} : boolean (default: true)</li>
 * <li>{@link #getNavcontrolVisible navcontrolVisible} : boolean (default: true)</li>
 * <li>{@link #getRectangularSelection rectangularSelection} : boolean (default: false)</li>
 * <li>{@link #getLassoSelection lassoSelection} : boolean (default: false)</li>
 * <li>{@link #getRectZoom rectZoom} : boolean (default: false)</li>
 * <li>{@link #getInitialPosition initialPosition} : string (default: 0;0;0)</li>
 * <li>{@link #getInitialZoom initialZoom} : string (default: 2)</li>
 * <li>{@link #getRefMapLayerStack refMapLayerStack} : string (default: Default)</li>
 * <li>{@link #getVisualFrame visualFrame} : object</li>
 * <li>{@link #getClustering clustering} : object</li>
 * <li>{@link #getDisableZoom disableZoom} : boolean (default: false)</li>
 * <li>{@link #getDisablePan disablePan} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getVos vos} : sap.ui.vbm.VoAbstract[] (default)</li>
 * <li>{@link #getGeoJsonLayers geoJsonLayers} : sap.ui.vbm.GeoJsonLayer[]</li>
 * <li>{@link #getFeatureCollections featureCollections} : sap.ui.vbm.FeatureCollection[]</li>
 * <li>{@link #getResources resources} : sap.ui.vbm.Resource[]</li>
 * <li>{@link #getLegend legend} : sap.ui.vbm.Legend</li>
 * <li>{@link #getClusters clusters} : sap.ui.vbm.ClusterBase[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:zoomChanged zoomChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:centerChanged centerChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VBI#constructor sap.ui.vbm.VBI}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Map control with the option to position multiple visual objects on top of a map. The GeoMap control shows an image based map loaded from
 *        one or more configurable external providers. Per default a map from <a href="http://www.mapquest.com">MapQuest</a> is used. Other map
 *        providers can be configured via property <i>mapConfiguration</i>. Multiple maps can be mashed up into one map layer stack. If multiple
 *        map layer stacks are provided via configuration it is possible to switch between them during runtime. The control supports the display
 *        of copyright information for the visible maps.<br>
 *        On top of the map the GeoMap control provides a navigation control, a scale, and a legend. Each of them can be switched off separately.<br>
 *        It is possible to set the initial position and zoom for the map display. Further the control allows to restrict the potentially visible
 *        map area and zoom range.<br>
 *        Different visual objects can be placed on the map. Visual objects are grouped in VO aggregations and an arbitrary number of VO
 *        aggregations can be assigned to the <i>vos</i> aggregation.<br>
 *        The second aggregation <i>featureCollections</i> allows the use of GeoJSON as source for visual objects.
 * @extends sap.ui.vbm.VBI
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoMap = function(sId,mSettings) {};
/**
 * this event is raised on map move.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.centerPoint Center point of the map. Format : Lon;Lat;0.0.
 * @param {object} oControlEvent.getParameters.viewportBB Viewport bounding box's upperLeft and lowerRight coordinates. Format : Lon;Lat;0.0.
 * @param {int} oControlEvent.getParameters.zoomLevel Level of detail.
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.centerChanged = function(oControlEvent) {  };

/**
 * Raised when the map is clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.pos Geo coordinates in format "&lt;longitude&gt;;&lt;latitude&gt;;0"
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.click = function(oControlEvent) {  };

/**
 * Raised when the map is right clicked/longPressed(tap and hold).
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.clientX Client coordinate X
 * @param {int} oControlEvent.getParameters.clientY Client coordinate Y
 * @param {string} oControlEvent.getParameters.pos Geo coordinates in format "&lt;longitude&gt;;&lt;latitude&gt;;0"
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.contextMenu = function(oControlEvent) {  };

/**
 * Raised when something is dropped on the map.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.pos Geo coordinates in format "&lt;longitude&gt;;&lt;latitude&gt;;0"
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.drop = function(oControlEvent) {  };

/**
 * This event is raised when a multi selection of visual objects has occurred
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.select = function(oControlEvent) {  };

/**
 * this event is raised on zoom in or zoom out.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.centerPoint Center point of the map. Format : Lon;Lat;0.0.
 * @param {object} oControlEvent.getParameters.viewportBB Viewport bounding box's upperLeft and lowerRight coordinates. Format : Lon;Lat;0.0.
 * @param {int} oControlEvent.getParameters.zoomLevel Level of detail.
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.zoomChanged = function(oControlEvent) {  };

/**
 * Adds some cluster to the aggregation <code>clusters</code>.
 * @param {sap.ui.vbm.ClusterBase}
 *            oCluster the cluster to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.addCluster = function(oCluster) { return new sap.ui.vbm.GeoMap(); };

/**
 * Adds some featureCollection to the aggregation <code>featureCollections</code>.
 * @param {sap.ui.vbm.FeatureCollection}
 *            oFeatureCollection the featureCollection to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @deprecated This aggregation should not longer be used. Its functionality has been replaced by the more generic<code>geoJsonLayers</code>
 *             aggregation.
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.addFeatureCollection = function(oFeatureCollection) { return new sap.ui.vbm.GeoMap(); };

/**
 * Adds some geoJsonLayer to the aggregation <code>geoJsonLayers</code>.
 * @param {sap.ui.vbm.GeoJsonLayer}
 *            oGeoJsonLayer the geoJsonLayer to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.addGeoJsonLayer = function(oGeoJsonLayer) { return new sap.ui.vbm.GeoMap(); };

/**
 * Adds some resource to the aggregation <code>resources</code>.
 * @param {sap.ui.vbm.Resource}
 *            oResource the resource to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.addResource = function(oResource) { return new sap.ui.vbm.GeoMap(); };

/**
 * Adds some vo to the aggregation <code>vos</code>.
 * @param {sap.ui.vbm.VoAbstract}
 *            oVo the vo to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.addVo = function(oVo) { return new sap.ui.vbm.GeoMap(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>centerChanged</code> event of this <code>sap.ui.vbm.GeoMap</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.GeoMap</code> itself.
 * 
 * this event is raised on map move.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoMap</code> itself
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.attachCenterChanged = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>click</code> event of this <code>sap.ui.vbm.GeoMap</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.GeoMap</code> itself.
 * 
 * Raised when the map is clicked.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoMap</code> itself
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>contextMenu</code> event of this <code>sap.ui.vbm.GeoMap</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.GeoMap</code> itself.
 * 
 * Raised when the map is right clicked/longPressed(tap and hold).
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoMap</code> itself
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>drop</code> event of this <code>sap.ui.vbm.GeoMap</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.GeoMap</code> itself.
 * 
 * Raised when something is dropped on the map.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoMap</code> itself
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this <code>sap.ui.vbm.GeoMap</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.GeoMap</code> itself.
 * 
 * This event is raised when a multi selection of visual objects has occurred
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoMap</code> itself
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>zoomChanged</code> event of this <code>sap.ui.vbm.GeoMap</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.GeoMap</code> itself.
 * 
 * this event is raised on zoom in or zoom out.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.GeoMap</code> itself
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.attachZoomChanged = function(oData,fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * Close any open Detail window
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoMap.prototype.closeAnyDetailWindow = function() { return null; };

/**
 * Destroys all the clusters in the aggregation <code>clusters</code>.
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.destroyClusters = function() { return new sap.ui.vbm.GeoMap(); };

/**
 * Destroys all the featureCollections in the aggregation <code>featureCollections</code>.
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @deprecated This aggregation should not longer be used. Its functionality has been replaced by the more generic<code>geoJsonLayers</code>
 *             aggregation.
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.destroyFeatureCollections = function() { return new sap.ui.vbm.GeoMap(); };

/**
 * Destroys all the geoJsonLayers in the aggregation <code>geoJsonLayers</code>.
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.destroyGeoJsonLayers = function() { return new sap.ui.vbm.GeoMap(); };

/**
 * Destroys the legend in the aggregation <code>legend</code>.
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.destroyLegend = function() { return new sap.ui.vbm.GeoMap(); };

/**
 * Destroys all the resources in the aggregation <code>resources</code>.
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.destroyResources = function() { return new sap.ui.vbm.GeoMap(); };

/**
 * Destroys all the vos in the aggregation <code>vos</code>.
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.destroyVos = function() { return new sap.ui.vbm.GeoMap(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>centerChanged</code> event of this <code>sap.ui.vbm.GeoMap</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.detachCenterChanged = function(fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>click</code> event of this <code>sap.ui.vbm.GeoMap</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>contextMenu</code> event of this <code>sap.ui.vbm.GeoMap</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>drop</code> event of this <code>sap.ui.vbm.GeoMap</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this <code>sap.ui.vbm.GeoMap</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>zoomChanged</code> event of this <code>sap.ui.vbm.GeoMap</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.detachZoomChanged = function(fnFunction,oListener) { return new sap.ui.vbm.GeoMap(); };

/**
 * Creates a new subclass of class sap.ui.vbm.GeoMap with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VBI.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.GeoMap.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>centerChanged</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>centerPoint</code> of type <code>string</code>Center point of the map. Format : Lon;Lat;0.0.</li>
 * <li><code>viewportBB</code> of type <code>object</code>Viewport bounding box's upperLeft and lowerRight coordinates. Format : Lon;Lat;0.0.</li>
 * <li><code>zoomLevel</code> of type <code>int</code>Level of detail.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoMap.prototype.fireCenterChanged = function(mArguments) { return new sap.ui.vbm.GeoMap(); };

/**
 * Fires event <code>click</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>pos</code> of type <code>string</code>Geo coordinates in format "&lt;longitude&gt;;&lt;latitude&gt;;0"</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoMap.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.GeoMap(); };

/**
 * Fires event <code>contextMenu</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>clientX</code> of type <code>int</code>Client coordinate X</li>
 * <li><code>clientY</code> of type <code>int</code>Client coordinate Y</li>
 * <li><code>pos</code> of type <code>string</code>Geo coordinates in format "&lt;longitude&gt;;&lt;latitude&gt;;0"</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoMap.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.GeoMap(); };

/**
 * Fires event <code>drop</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>pos</code> of type <code>string</code>Geo coordinates in format "&lt;longitude&gt;;&lt;latitude&gt;;0"</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoMap.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.GeoMap(); };

/**
 * Fires event <code>select</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoMap.prototype.fireSelect = function(mArguments) { return new sap.ui.vbm.GeoMap(); };

/**
 * Fires event <code>zoomChanged</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>centerPoint</code> of type <code>string</code>Center point of the map. Format : Lon;Lat;0.0.</li>
 * <li><code>viewportBB</code> of type <code>object</code>Viewport bounding box's upperLeft and lowerRight coordinates. Format : Lon;Lat;0.0.</li>
 * <li><code>zoomLevel</code> of type <code>int</code>Level of detail.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.GeoMap.prototype.fireZoomChanged = function(mArguments) { return new sap.ui.vbm.GeoMap(); };

/**
 * Gets current value of property <code>clustering</code>.
 * @returns {object} Value of property <code>clustering</code>
 * @deprecated This property should not longer be used. Its functionality has been replaced by the <code>clusters</code>
 *             aggregation.
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getClustering = function() { return new Object(); };

/**
 * Gets content of aggregation <code>clusters</code>.
 * 
 * Aggregation of clusters.
 * @returns {sap.ui.vbm.ClusterBase[]}
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getClusters = function() { return new Array(); };

/**
 * Gets current value of property <code>disablePan</code>.
 * 
 * Disable Map Paning. This setting works only upon initialization and cannot be changed later on.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>disablePan</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getDisablePan = function() { return false; };

/**
 * Gets current value of property <code>disableZoom</code>.
 * 
 * Disable Map Zooming. This setting works only upon initialization and cannot be changed later on.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>disableZoom</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getDisableZoom = function() { return false; };

/**
 * Gets content of aggregation <code>featureCollections</code>.
 * @returns {sap.ui.vbm.FeatureCollection[]}
 * @deprecated This aggregation should not longer be used. Its functionality has been replaced by the more generic<code>geoJsonLayers</code>
 *             aggregation.
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getFeatureCollections = function() { return new Array(); };

/**
 * Gets content of aggregation <code>geoJsonLayers</code>.
 * 
 * Aggregation of GeoJSON layers. Object from a GeoJSON layer will be behind all other Visual Objects from the <code>vos</code>
 * aggregation. In case of multiple GeoJSON layers the objects are orderer with the layers they belong to.
 * @returns {sap.ui.vbm.GeoJsonLayer[]}
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getGeoJsonLayers = function() { return new Array(); };

/**
 * Gets current value of property <code>initialPosition</code>.
 * 
 * Initial position of the Map. Only supported on initialization! Format is "&lt;longitude&gt;;&lt;latitude&gt;;0".
 * 
 * Default value is <code>0;0;0</code>.
 * @returns {string} Value of property <code>initialPosition</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getInitialPosition = function() { return ""; };

/**
 * Gets current value of property <code>initialZoom</code>.
 * 
 * Initial zoom. Value needs to be positive whole number. Only supported on initialization!
 * 
 * Default value is <code>2</code>.
 * @returns {string} Value of property <code>initialZoom</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getInitialZoom = function() { return ""; };

/**
 * Gets current value of property <code>lassoSelection</code>.
 * 
 * Defines whether the lasso selection mode is active or not
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>lassoSelection</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getLassoSelection = function() { return false; };

/**
 * Gets content of aggregation <code>legend</code>.
 * 
 * Legend for the Map
 * @returns {sap.ui.vbm.Legend}
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getLegend = function() { return new sap.ui.vbm.Legend(); };

/**
 * Gets current value of property <code>legendVisible</code>.
 * 
 * Toggles the visibility of the legend
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>legendVisible</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getLegendVisible = function() { return false; };

/**
 * Gets current value of property <code>mapConfiguration</code>.
 * 
 * This is the map configuration for the geo map. The map configuration defines the used maps, the layering of the maps and the
 * servers that can be used to request the map tiles.
 * @returns {object} Value of property <code>mapConfiguration</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getMapConfiguration = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.ui.vbm.GeoMap.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.GeoMap.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>navcontrolVisible</code>.
 * 
 * Defines the visibility of the navigation control. Only supported on initialization!
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>navcontrolVisible</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getNavcontrolVisible = function() { return false; };

/**
 * Trigger the interactive creation mode to get a position or position array.
 * @param {boolean} bPosArray Indicator if a single position or an array is requested
 * @param {function} callback Callback function func( sPosArray ) to be called when done. Position(array) sPosArray is provided in format
 *        "lon;lat;0;..."
 * @returns {boolean} Indicator whether the creation mode could be triggered successfully or not.
 * @public
 * @experimental Since 1.30.0 This method is experimental and might be modified or removerd in future versions.
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoMap.prototype.getPositionInteractive = function(bPosArray,callback) { return false; };

/**
 * Gets current value of property <code>rectangularSelection</code>.
 * 
 * Defines whether the rectangular selection mode is active or not
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>rectangularSelection</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getRectangularSelection = function() { return false; };

/**
 * Gets current value of property <code>rectZoom</code>.
 * 
 * Defines whether the rectangular zoom mode is active or not
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>rectZoom</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getRectZoom = function() { return false; };

/**
 * Gets current value of property <code>refMapLayerStack</code>.
 * 
 * Name of the map layer stack (provided in mapConfiguration) which is used for map rendering. If not set the layer stack with the
 * name 'Default' is chosen. Property can be changed at runtime to switch between map layer stack.
 * 
 * Default value is <code>Default</code>.
 * @returns {string} Value of property <code>refMapLayerStack</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getRefMapLayerStack = function() { return ""; };

/**
 * Gets content of aggregation <code>resources</code>.
 * 
 * Aggregation of resources. The images for e.g. Spots have to be provided as resources.
 * @returns {sap.ui.vbm.Resource[]}
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getResources = function() { return new Array(); };

/**
 * Gets current value of property <code>scaleVisible</code>.
 * 
 * Defines the visibility of the scale. Only supported on initialization!
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>scaleVisible</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getScaleVisible = function() { return false; };

/**
 * Gets current value of property <code>visualFrame</code>.
 * 
 * Visual Frame object. Defining a frame {minX, maxX, minY, maxY, maxLOD, minLOD} to which the scene display is restricted.
 * @returns {object} Value of property <code>visualFrame</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getVisualFrame = function() { return new Object(); };

/**
 * Gets content of aggregation <code>vos</code>.
 * 
 * Aggregation of visual object types. A VO aggregation can be considered to be a table of VOs of a common type.
 * @returns {sap.ui.vbm.VoAbstract[]}
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.getVos = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.vbm.ClusterBase</code> in the aggregation <code>clusters</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.ClusterBase}
 *           oCluster The cluster whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.indexOfCluster = function(oCluster) { return 0; };

/**
 * Checks for the provided <code>sap.ui.vbm.FeatureCollection</code> in the aggregation <code>featureCollections</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.FeatureCollection}
 *           oFeatureCollection The featureCollection whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @deprecated This aggregation should not longer be used. Its functionality has been replaced by the more generic<code>geoJsonLayers</code>
 *             aggregation.
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.indexOfFeatureCollection = function(oFeatureCollection) { return 0; };

/**
 * Checks for the provided <code>sap.ui.vbm.GeoJsonLayer</code> in the aggregation <code>geoJsonLayers</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.GeoJsonLayer}
 *           oGeoJsonLayer The geoJsonLayer whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.indexOfGeoJsonLayer = function(oGeoJsonLayer) { return 0; };

/**
 * Checks for the provided <code>sap.ui.vbm.Resource</code> in the aggregation <code>resources</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Resource}
 *           oResource The resource whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.indexOfResource = function(oResource) { return 0; };

/**
 * Checks for the provided <code>sap.ui.vbm.VoAbstract</code> in the aggregation <code>vos</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.VoAbstract}
 *           oVo The vo whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.indexOfVo = function(oVo) { return 0; };

/**
 * Inserts a cluster into the aggregation <code>clusters</code>.
 * @param {sap.ui.vbm.ClusterBase}
 *            oCluster the cluster to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the cluster should be inserted at; for
 *              a negative value of <code>iIndex</code>, the cluster is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the cluster is inserted at
 *              the last position
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.insertCluster = function(oCluster,iIndex) { return new sap.ui.vbm.GeoMap(); };

/**
 * Inserts a featureCollection into the aggregation <code>featureCollections</code>.
 * @param {sap.ui.vbm.FeatureCollection}
 *            oFeatureCollection the featureCollection to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the featureCollection should be inserted at; for
 *              a negative value of <code>iIndex</code>, the featureCollection is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the featureCollection is inserted at
 *              the last position
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @deprecated This aggregation should not longer be used. Its functionality has been replaced by the more generic<code>geoJsonLayers</code>
 *             aggregation.
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.insertFeatureCollection = function(oFeatureCollection,iIndex) { return new sap.ui.vbm.GeoMap(); };

/**
 * Inserts a geoJsonLayer into the aggregation <code>geoJsonLayers</code>.
 * @param {sap.ui.vbm.GeoJsonLayer}
 *            oGeoJsonLayer the geoJsonLayer to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the geoJsonLayer should be inserted at; for
 *              a negative value of <code>iIndex</code>, the geoJsonLayer is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the geoJsonLayer is inserted at
 *              the last position
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.insertGeoJsonLayer = function(oGeoJsonLayer,iIndex) { return new sap.ui.vbm.GeoMap(); };

/**
 * Inserts a resource into the aggregation <code>resources</code>.
 * @param {sap.ui.vbm.Resource}
 *            oResource the resource to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the resource should be inserted at; for
 *              a negative value of <code>iIndex</code>, the resource is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the resource is inserted at
 *              the last position
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.insertResource = function(oResource,iIndex) { return new sap.ui.vbm.GeoMap(); };

/**
 * Inserts a vo into the aggregation <code>vos</code>.
 * @param {sap.ui.vbm.VoAbstract}
 *            oVo the vo to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the vo should be inserted at; for
 *              a negative value of <code>iIndex</code>, the vo is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the vo is inserted at
 *              the last position
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.insertVo = function(oVo,iIndex) { return new sap.ui.vbm.GeoMap(); };

/**
 * Open Detail window
 * @param {string} sPosition Postion for the Detail Window in format "lon;lat;0"
 * @param {object} [oParams] Parameter Objects
 * @param {string} [oParams.caption] Caption of the Detail Window
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoMap.prototype.openDetailWindow = function(sPosition,oParams) { return null; };

/**
 * Removes all the controls from the aggregation <code>clusters</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.ClusterBase[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeAllClusters = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>featureCollections</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.FeatureCollection[]} An array of the removed elements (might be empty)
 * @deprecated This aggregation should not longer be used. Its functionality has been replaced by the more generic<code>geoJsonLayers</code>
 *             aggregation.
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeAllFeatureCollections = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>geoJsonLayers</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.GeoJsonLayer[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeAllGeoJsonLayers = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>resources</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.Resource[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeAllResources = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>vos</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.VoAbstract[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeAllVos = function() { return new Array(); };

/**
 * Removes a cluster from the aggregation <code>clusters</code>.
 * @param {int | string | sap.ui.vbm.ClusterBase} vCluster The clusterto remove or its index or id
 * @returns {sap.ui.vbm.ClusterBase} The removed cluster or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeCluster = function(vCluster) { return new sap.ui.vbm.ClusterBase(); };

/**
 * Removes a featureCollection from the aggregation <code>featureCollections</code>.
 * @param {int | string | sap.ui.vbm.FeatureCollection} vFeatureCollection The featureCollectionto remove or its index or id
 * @returns {sap.ui.vbm.FeatureCollection} The removed featureCollection or <code>null</code>
 * @deprecated This aggregation should not longer be used. Its functionality has been replaced by the more generic<code>geoJsonLayers</code>
 *             aggregation.
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeFeatureCollection = function(vFeatureCollection) { return new sap.ui.vbm.FeatureCollection(); };

/**
 * Removes a geoJsonLayer from the aggregation <code>geoJsonLayers</code>.
 * @param {int | string | sap.ui.vbm.GeoJsonLayer} vGeoJsonLayer The geoJsonLayerto remove or its index or id
 * @returns {sap.ui.vbm.GeoJsonLayer} The removed geoJsonLayer or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeGeoJsonLayer = function(vGeoJsonLayer) { return new sap.ui.vbm.GeoJsonLayer(); };

/**
 * Removes a resource from the aggregation <code>resources</code>.
 * @param {int | string | sap.ui.vbm.Resource} vResource The resourceto remove or its index or id
 * @returns {sap.ui.vbm.Resource} The removed resource or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeResource = function(vResource) { return new sap.ui.vbm.Resource(); };

/**
 * Removes a vo from the aggregation <code>vos</code>.
 * @param {int | string | sap.ui.vbm.VoAbstract} vVo The voto remove or its index or id
 * @returns {sap.ui.vbm.VoAbstract} The removed vo or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.removeVo = function(vVo) { return new sap.ui.vbm.VoAbstract(); };

/**
 * Set clustering definitions.
 * @param {object} oClustering Cluster Definition object
 * @returns {sap.ui.vbm.GeoMap} This allows method chaining
 * @public
 * @deprecated This property should not longer be used. Its functionality has been replaced by the <code>clusters</code> aggregation.
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoMap.prototype.setClustering = function(oClustering) { return new sap.ui.vbm.GeoMap(); };

/**
 * Sets a new value for property <code>disablePan</code>.
 * 
 * Disable Map Paning. This setting works only upon initialization and cannot be changed later on.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bDisablePan New value for property <code>disablePan</code>
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setDisablePan = function(bDisablePan) { return new sap.ui.vbm.GeoMap(); };

/**
 * Sets a new value for property <code>disableZoom</code>.
 * 
 * Disable Map Zooming. This setting works only upon initialization and cannot be changed later on.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bDisableZoom New value for property <code>disableZoom</code>
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setDisableZoom = function(bDisableZoom) { return new sap.ui.vbm.GeoMap(); };

/**
 * Sets a new value for property <code>initialPosition</code>.
 * 
 * Initial position of the Map. Only supported on initialization! Format is "&lt;longitude&gt;;&lt;latitude&gt;;0".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0;0;0</code>.
 * @param {string} sInitialPosition New value for property <code>initialPosition</code>
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setInitialPosition = function(sInitialPosition) { return new sap.ui.vbm.GeoMap(); };

/**
 * Sets a new value for property <code>initialZoom</code>.
 * 
 * Initial zoom. Value needs to be positive whole number. Only supported on initialization!
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {string} sInitialZoom New value for property <code>initialZoom</code>
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setInitialZoom = function(sInitialZoom) { return new sap.ui.vbm.GeoMap(); };

/**
 * Set Tracking Mode for Lasso Selection on/off.
 * @param {boolean} bSet to start or stop tracking mode
 * @returns {sap.ui.vbm.GeoMap} This allows method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoMap.prototype.setLassoSelection = function(bSet) { return new sap.ui.vbm.GeoMap(); };

/**
 * Sets the aggregated <code>legend</code>.
 * @param {sap.ui.vbm.Legend} oLegend The legend to set
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setLegend = function(oLegend) { return new sap.ui.vbm.GeoMap(); };

/**
 * Sets a new value for property <code>legendVisible</code>.
 * 
 * Toggles the visibility of the legend
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bLegendVisible New value for property <code>legendVisible</code>
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setLegendVisible = function(bLegendVisible) { return new sap.ui.vbm.GeoMap(); };

/**
 * Set Map configuration data. Map Configurations contain a set of Map Providers and Map Layer Stacks refering to those providers. The GeoMap
 * property refMapLayerStack defines, which Map Layer Stack becomes visible.
 * @param {object} oMapConfiguration Map Configuration object
 * @param {array} oMapConfiguration.MapProvider Array of Map Provider definitions.
 * @param {string} oMapConfiguration.MapProvider.name Name for the provider. Needed in Map Layer Stack as reference.
 * @param {string} oMapConfiguration.MapProvider.tileX X-pixel dimension of map tile. Typical 256.
 * @param {string} oMapConfiguration.MapProvider.tileY Y-pixel dimension of map tile. Typical 256.
 * @param {string} oMapConfiguration.MapProvider.minLOD Minimal supported Level Of Detail.
 * @param {string} oMapConfiguration.MapProvider.maxLOD Maximal supported Level Of Detail.
 * @param {string} oMapConfiguration.MapProvider.copyright Copyright Information to be shown with the map.
 * @param {array} oMapConfiguration.MapProvider.Source Array of source definitions. At least on Source has to be given. Multiple sources can be
 *        used for load distribution.
 * @param {string} oMapConfiguration.MapProvider.Source.id Source id.
 * @param {string} oMapConfiguration.MapProvider.Source.url Source URL for map tile service. URL includes place holders for variable informations
 *        set at runtime, e.g. {LOD}.
 * @param {array} oMapConfiguration.MapLayerStacks Array of Map Layer Stacks
 * @param {string} oMapConfiguration.MapLayerStacks.name Name of Map Layer Stack. Use with the GeoMap refMapLayerStack property.
 * @param {array} oMapConfiguration.MapLayerStacks.MapLayer Array of Map Layers. Each Layer refers to a Map Proveride. Map Layers get overlayed in
 *        the given sequence.
 * @param {string} oMapConfiguration.MapLayerStacks.MapLayer.name Name of Map Layer.
 * @param {string} oMapConfiguration.MapLayerStacks.MapLayer.refMapProvider Name of referenced Map Provider.
 * @param {string} oMapConfiguration.MapLayerStacks.MapLayer.opacity Opacity of Map Layer. Value range 0 to 1.
 * @param {sap.ui.core.CSSColor} oMapConfiguration.MapLayerStacks.MapLayer.colBkgnd Background color for Map Layer. Only meaningful if opacity is
 *        below 1.
 * @returns {sap.ui.vbm.GeoMap} This allows method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoMap.prototype.setMapConfiguration = function(oMapConfiguration) { return new sap.ui.vbm.GeoMap(); };

/**
 * Sets a new value for property <code>navcontrolVisible</code>.
 * 
 * Defines the visibility of the navigation control. Only supported on initialization!
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bNavcontrolVisible New value for property <code>navcontrolVisible</code>
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setNavcontrolVisible = function(bNavcontrolVisible) { return new sap.ui.vbm.GeoMap(); };

/**
 * Set Tracking Mode for Rectangular Selection on/off.
 * @param {boolean} bSet to start or stop tracking mode
 * @returns {sap.ui.vbm.GeoMap} This allows method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoMap.prototype.setRectangularSelection = function(bSet) { return new sap.ui.vbm.GeoMap(); };

/**
 * Set Tracking Mode for Rectangular Zoom on/off.
 * @param {boolean} bSet to start or stop tracking mode
 * @returns {sap.ui.vbm.GeoMap} This allows method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoMap.prototype.setRectZoom = function(bSet) { return new sap.ui.vbm.GeoMap(); };

/**
 * Sets a new value for property <code>refMapLayerStack</code>.
 * 
 * Name of the map layer stack (provided in mapConfiguration) which is used for map rendering. If not set the layer stack with the
 * name 'Default' is chosen. Property can be changed at runtime to switch between map layer stack.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Default</code>.
 * @param {string} sRefMapLayerStack New value for property <code>refMapLayerStack</code>
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setRefMapLayerStack = function(sRefMapLayerStack) { return new sap.ui.vbm.GeoMap(); };

/**
 * Sets a new value for property <code>scaleVisible</code>.
 * 
 * Defines the visibility of the scale. Only supported on initialization!
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bScaleVisible New value for property <code>scaleVisible</code>
 * @returns {sap.ui.vbm.GeoMap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.GeoMap.prototype.setScaleVisible = function(bScaleVisible) { return new sap.ui.vbm.GeoMap(); };

/**
 * Set Visual Frame definition.
 * @param {object} oVisFrame Visual Frame definition object
 * @param {float} oVisFrame.minLon Minimal longitude of visual frame
 * @param {float} oVisFrame.maxLon Maximal longitude of visual frame
 * @param {float} oVisFrame.minLat Minimal latitude of visual frame
 * @param {float} oVisFrame.maxLat Maximal latitude of visual frame
 * @param {float} oVisFrame.minLOD Minimal Level of Detail for visual frame
 * @param {float} oVisFrame.maxLOD Maximal Level of Detail for visual frame
 * @param {float} oVisFrame.maxFraction Maximal fraction [0..1] of minLOD which is acceptable, otherwise minLOD is rounded upwards
 * @returns {sap.ui.vbm.GeoMap} This allows method chaining
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.GeoMap.prototype.setVisualFrame = function(oVisFrame) { return new sap.ui.vbm.GeoMap(); };


// ---- sap.ui.vbm.Heatmap --------------------------------------------------------------------------

/**
 * Constructor for a new Heatmap.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getGradient gradient} : array</li>
 * <li>{@link #getOpacity opacity} : string (default: 0.5)</li>
 * <li>{@link #getBehavior behavior} : string (default: 2)</li>
 * <li>{@link #getValueScale valueScale} : string (default: 1.0)</li>
 * <li>{@link #getRadiusScale radiusScale} : string (default: 1.0)</li>
 * <li>{@link #getAlphaExponent alphaExponent} : string (default: 1.0)</li>
 * <li>{@link #getColorExponent colorExponent} : string (default: 1.0)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.vbm.HeatPoint[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Type specific Visual Object aggregation for <i>HeatPoint</i> instances.
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Heatmap = function(sId,mSettings) {};
/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.ui.vbm.HeatPoint}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Heatmap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.addItem = function(oItem) { return new sap.ui.vbm.Heatmap(); };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.ui.vbm.Heatmap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.destroyItems = function() { return new sap.ui.vbm.Heatmap(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Heatmap with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.Object.extend Object.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Heatmap.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>alphaExponent</code>.
 * 
 * Exponent for the alphaChannel<br>
 * aE = 1 : alpha Channel remains linear<br>
 * 0 < aE < 1 : (e.g. aE=0.5 "square root") sub linear alpha channeling (lower value colors remain longer visible; range appears wider)<br>
 * aE > 1 (e.g. aE=2: "squared") above linear alpha channeling ( lower value colors remain shortly visible; range appears chopped)<br>
 * 
 * Default value is <code>1.0</code>.
 * @returns {string} Value of property <code>alphaExponent</code>
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.getAlphaExponent = function() { return ""; };

/**
 * Gets current value of property <code>behavior</code>.
 * 
 * Behavior of the HeatPoint, 0 Density Map, 2: Heat Map, 1: Intermediate.
 * 
 * Default value is <code>2</code>.
 * @returns {string} Value of property <code>behavior</code>
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.getBehavior = function() { return ""; };

/**
 * Gets current value of property <code>colorExponent</code>.
 * 
 * Exponent for the color<br>
 * aE = 1 : Linear Gradient<br>
 * 0 < aE < 1 : Sublinear Gradient; i.E. with cE=0.5 point values are square rooted before usage [share of lower value cols will decrease]<br>
 * aE > 1 : Higher Level Gradient; i.E. with cE=2 point values are squared before usage [share of lower value cols will increase]
 * 
 * Default value is <code>1.0</code>.
 * @returns {string} Value of property <code>colorExponent</code>
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.getColorExponent = function() { return ""; };

/**
 * Gets current value of property <code>gradient</code>.
 * 
 * Gradient Definition. Can be either provided as Ressource - then it is type string.<br>
 * Or as Array [n0,c0,n1,c1,...,nk,ck] (ni > ni-1; ci respective colors) with an arbitrary number of color stops as in the following<br>
 * Example: [0,'rgba(0,255,0,1)',220,'rgba(255,255,0,1)',255,'rgba(255,0,0,1)']
 * @returns {array} Value of property <code>gradient</code>
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.getGradient = function() { return null; };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * HeatPoint object aggregation
 * @returns {sap.ui.vbm.HeatPoint[]}
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.vbm.Heatmap.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Heatmap.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>opacity</code>.
 * 
 * Opacity of the heatmap.
 * 
 * Default value is <code>0.5</code>.
 * @returns {string} Value of property <code>opacity</code>
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.getOpacity = function() { return ""; };

/**
 * Gets current value of property <code>radiusScale</code>.
 * 
 * Scaling factor for the sample radiuses.
 * 
 * Default value is <code>1.0</code>.
 * @returns {string} Value of property <code>radiusScale</code>
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.getRadiusScale = function() { return ""; };

/**
 * Gets current value of property <code>valueScale</code>.
 * 
 * Scaling factor for the sample values.
 * 
 * Default value is <code>1.0</code>.
 * @returns {string} Value of property <code>valueScale</code>
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.getValueScale = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.vbm.HeatPoint</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.HeatPoint}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.ui.vbm.HeatPoint}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Heatmap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Heatmap(); };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.HeatPoint[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.ui.vbm.HeatPoint} vItem The itemto remove or its index or id
 * @returns {sap.ui.vbm.HeatPoint} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.removeItem = function(vItem) { return new sap.ui.vbm.HeatPoint(); };

/**
 * Sets a new value for property <code>alphaExponent</code>.
 * 
 * Exponent for the alphaChannel<br>
 * aE = 1 : alpha Channel remains linear<br>
 * 0 < aE < 1 : (e.g. aE=0.5 "square root") sub linear alpha channeling (lower value colors remain longer visible; range appears wider)<br>
 * aE > 1 (e.g. aE=2: "squared") above linear alpha channeling ( lower value colors remain shortly visible; range appears chopped)<br>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1.0</code>.
 * @param {string} sAlphaExponent New value for property <code>alphaExponent</code>
 * @returns {sap.ui.vbm.Heatmap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.setAlphaExponent = function(sAlphaExponent) { return new sap.ui.vbm.Heatmap(); };

/**
 * Sets a new value for property <code>behavior</code>.
 * 
 * Behavior of the HeatPoint, 0 Density Map, 2: Heat Map, 1: Intermediate.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {string} sBehavior New value for property <code>behavior</code>
 * @returns {sap.ui.vbm.Heatmap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.setBehavior = function(sBehavior) { return new sap.ui.vbm.Heatmap(); };

/**
 * Sets a new value for property <code>colorExponent</code>.
 * 
 * Exponent for the color<br>
 * aE = 1 : Linear Gradient<br>
 * 0 < aE < 1 : Sublinear Gradient; i.E. with cE=0.5 point values are square rooted before usage [share of lower value cols will decrease]<br>
 * aE > 1 : Higher Level Gradient; i.E. with cE=2 point values are squared before usage [share of lower value cols will increase]
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1.0</code>.
 * @param {string} sColorExponent New value for property <code>colorExponent</code>
 * @returns {sap.ui.vbm.Heatmap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.setColorExponent = function(sColorExponent) { return new sap.ui.vbm.Heatmap(); };

/**
 * Sets a new value for property <code>gradient</code>.
 * 
 * Gradient Definition. Can be either provided as Ressource - then it is type string.<br>
 * Or as Array [n0,c0,n1,c1,...,nk,ck] (ni > ni-1; ci respective colors) with an arbitrary number of color stops as in the following<br>
 * Example: [0,'rgba(0,255,0,1)',220,'rgba(255,255,0,1)',255,'rgba(255,0,0,1)']
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {array} sGradient New value for property <code>gradient</code>
 * @returns {sap.ui.vbm.Heatmap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.setGradient = function(sGradient) { return new sap.ui.vbm.Heatmap(); };

/**
 * Sets a new value for property <code>opacity</code>.
 * 
 * Opacity of the heatmap.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0.5</code>.
 * @param {string} sOpacity New value for property <code>opacity</code>
 * @returns {sap.ui.vbm.Heatmap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.setOpacity = function(sOpacity) { return new sap.ui.vbm.Heatmap(); };

/**
 * Sets a new value for property <code>radiusScale</code>.
 * 
 * Scaling factor for the sample radiuses.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1.0</code>.
 * @param {string} sRadiusScale New value for property <code>radiusScale</code>
 * @returns {sap.ui.vbm.Heatmap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.setRadiusScale = function(sRadiusScale) { return new sap.ui.vbm.Heatmap(); };

/**
 * Sets a new value for property <code>valueScale</code>.
 * 
 * Scaling factor for the sample values.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1.0</code>.
 * @param {string} sValueScale New value for property <code>valueScale</code>
 * @returns {sap.ui.vbm.Heatmap} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Heatmap.prototype.setValueScale = function(sValueScale) { return new sap.ui.vbm.Heatmap(); };


// ---- sap.ui.vbm.HeatPoint --------------------------------------------------------------------------

/**
 * Constructor for a new HeatPoint.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosition position} : string</li>
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getRadius radius} : string (default: 5)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Specific Visual Object element for a <i>HeatPoint</i>.
 * @extends sap.ui.vbm.VoBase
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.HeatPoint = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.vbm.HeatPoint with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.HeatPoint.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.vbm.HeatPoint.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.HeatPoint.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>position</code>.
 * 
 * The position of a sample element of the heatmap. Should be bound. The format is "lon;lat;0"
 * @returns {string} Value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.HeatPoint.prototype.getPosition = function() { return ""; };

/**
 * Gets current value of property <code>radius</code>.
 * 
 * Radius of the sample values. May be bound
 * 
 * Default value is <code>5</code>.
 * @returns {string} Value of property <code>radius</code>
 * @public
 * 
 */
sap.ui.vbm.HeatPoint.prototype.getRadius = function() { return ""; };

/**
 * Gets current value of property <code>value</code>.
 * 
 * Heat Value of the sample element of the heatmap. May be bound.
 * @returns {string} Value of property <code>value</code>
 * @public
 * 
 */
sap.ui.vbm.HeatPoint.prototype.getValue = function() { return ""; };

/**
 * Sets a new value for property <code>position</code>.
 * 
 * The position of a sample element of the heatmap. Should be bound. The format is "lon;lat;0"
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sPosition New value for property <code>position</code>
 * @returns {sap.ui.vbm.HeatPoint} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.HeatPoint.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.HeatPoint(); };

/**
 * Sets a new value for property <code>radius</code>.
 * 
 * Radius of the sample values. May be bound
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5</code>.
 * @param {string} sRadius New value for property <code>radius</code>
 * @returns {sap.ui.vbm.HeatPoint} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.HeatPoint.prototype.setRadius = function(sRadius) { return new sap.ui.vbm.HeatPoint(); };

/**
 * Sets a new value for property <code>value</code>.
 * 
 * Heat Value of the sample element of the heatmap. May be bound.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sValue New value for property <code>value</code>
 * @returns {sap.ui.vbm.HeatPoint} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.HeatPoint.prototype.setValue = function(sValue) { return new sap.ui.vbm.HeatPoint(); };


// ---- sap.ui.vbm.Legend --------------------------------------------------------------------------

/**
 * Constructor for a new Legend.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getCaption caption} : string (default: Legend)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.vbm.LegendItem[] (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The Legend is a window in the GeoMap or AnalyticMap control wich can be used to display color/icon-text pairs on a map.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Legend = function(sId,mSettings) {};
/**
 * The event is raised when there is a click action on a legend.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.data Event data object
 * @param {int} oControlEvent.getParameters.row The row number where the click occurred
 * @param {boolean} oControlEvent.getParameters.ctrlKey key modifier Ctrl pressed
 * @param {boolean} oControlEvent.getParameters.shiftKey key modifier Shift pressed
 * @param {boolean} oControlEvent.getParameters.metaKey key modifier Meta pressed
 * @param {boolean} oControlEvent.getParameters.altKey key modifier Alt pressed
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.click = function(oControlEvent) {  };

/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.ui.vbm.LegendItem}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Legend} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.addItem = function(oItem) { return new sap.ui.vbm.Legend(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>click</code> event of this <code>sap.ui.vbm.Legend</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.Legend</code> itself.
 * 
 * The event is raised when there is a click action on a legend.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Legend</code> itself
 * @returns {sap.ui.vbm.Legend} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Legend(); };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.ui.vbm.Legend} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.destroyItems = function() { return new sap.ui.vbm.Legend(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>click</code> event of this <code>sap.ui.vbm.Legend</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.Legend} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Legend(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Legend with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Legend.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>click</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>data</code> of type <code>object</code>Event data object</li>
 * <li><code>row</code> of type <code>int</code>The row number where the click occurred</li>
 * <li><code>ctrlKey</code> of type <code>boolean</code>key modifier Ctrl pressed</li>
 * <li><code>shiftKey</code> of type <code>boolean</code>key modifier Shift pressed</li>
 * <li><code>metaKey</code> of type <code>boolean</code>key modifier Meta pressed</li>
 * <li><code>altKey</code> of type <code>boolean</code>key modifier Alt pressed</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.Legend} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Legend.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Legend(); };

/**
 * Gets current value of property <code>caption</code>.
 * 
 * The caption of the legend.
 * 
 * Default value is <code>Legend</code>.
 * @returns {string} Value of property <code>caption</code>
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.getCaption = function() { return ""; };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * LegendItem object aggregation
 * @returns {sap.ui.vbm.LegendItem[]}
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.vbm.Legend.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Legend.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.vbm.LegendItem</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.LegendItem}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.ui.vbm.LegendItem}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Legend} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Legend(); };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.LegendItem[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.ui.vbm.LegendItem} vItem The itemto remove or its index or id
 * @returns {sap.ui.vbm.LegendItem} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.removeItem = function(vItem) { return new sap.ui.vbm.LegendItem(); };

/**
 * Sets a new value for property <code>caption</code>.
 * 
 * The caption of the legend.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Legend</code>.
 * @param {string} sCaption New value for property <code>caption</code>
 * @returns {sap.ui.vbm.Legend} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Legend.prototype.setCaption = function(sCaption) { return new sap.ui.vbm.Legend(); };


// ---- sap.ui.vbm.LegendItem --------------------------------------------------------------------------

/**
 * Constructor for a new LegendItem.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColor color} : string (default: )</li>
 * <li>{@link #getImage image} : string</li>
 * <li>{@link #getSemanticSpotType semanticSpotType} : sap.ui.vbm.SemanticType</li>
 * <li>{@link #getText text} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Aggregation element for the Legend. A LegendItem consists of marker and an associated text. The marker is either a rectangle in the
 *        given color or the given image or a semantic spot type. If no marker but only a text is provided then it is shown in italic letters and can be regarded as a
 *        header.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.LegendItem = function(sId,mSettings) {};
/**
 * The event is raised when there is a click action on a legend item.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.data Event data object
 * @param {boolean} oControlEvent.getParameters.ctrlKey key modifier Ctrl pressed
 * @param {boolean} oControlEvent.getParameters.shiftKey key modifier Shift pressed
 * @param {boolean} oControlEvent.getParameters.metaKey key modifier Meta pressed
 * @param {boolean} oControlEvent.getParameters.altKey key modifier Alt pressed
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.click = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>click</code> event of this <code>sap.ui.vbm.LegendItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.LegendItem</code> itself.
 * 
 * The event is raised when there is a click action on a legend item.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.LegendItem</code> itself
 * @returns {sap.ui.vbm.LegendItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.LegendItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>click</code> event of this <code>sap.ui.vbm.LegendItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.LegendItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.LegendItem(); };

/**
 * Creates a new subclass of class sap.ui.vbm.LegendItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.LegendItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>click</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>data</code> of type <code>object</code>Event data object</li>
 * <li><code>ctrlKey</code> of type <code>boolean</code>key modifier Ctrl pressed</li>
 * <li><code>shiftKey</code> of type <code>boolean</code>key modifier Shift pressed</li>
 * <li><code>metaKey</code> of type <code>boolean</code>key modifier Meta pressed</li>
 * <li><code>altKey</code> of type <code>boolean</code>key modifier Alt pressed</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.LegendItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.LegendItem.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.LegendItem(); };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The color of the legend marker.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.getColor = function() { return ""; };

/**
 * Gets current value of property <code>image</code>.
 * 
 * The image for the legend marker.
 * @returns {string} Value of property <code>image</code>
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.getImage = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.vbm.LegendItem.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.LegendItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>semanticSpotType</code>.
 * 
 * The semantic spot type for the legend marker.
 * @returns {sap.ui.vbm.SemanticType} Value of property <code>semanticSpotType</code>
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.getSemanticSpotType = function() { return new sap.ui.vbm.SemanticType(); };

/**
 * Gets current value of property <code>text</code>.
 * 
 * The text of the legend item.
 * @returns {string} Value of property <code>text</code>
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.getText = function() { return ""; };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The color of the legend marker.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sColor New value for property <code>color</code>
 * @returns {sap.ui.vbm.LegendItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.setColor = function(sColor) { return new sap.ui.vbm.LegendItem(); };

/**
 * Sets a new value for property <code>image</code>.
 * 
 * The image for the legend marker.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sImage New value for property <code>image</code>
 * @returns {sap.ui.vbm.LegendItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.setImage = function(sImage) { return new sap.ui.vbm.LegendItem(); };

/**
 * Sets a new value for property <code>semanticSpotType</code>.
 * 
 * The semantic spot type for the legend marker.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.vbm.SemanticType} sSemanticSpotType New value for property <code>semanticSpotType</code>
 * @returns {sap.ui.vbm.LegendItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.setSemanticSpotType = function(sSemanticSpotType) { return new sap.ui.vbm.LegendItem(); };

/**
 * Sets a new value for property <code>text</code>.
 * 
 * The text of the legend item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.ui.vbm.LegendItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.LegendItem.prototype.setText = function(sText) { return new sap.ui.vbm.LegendItem(); };


// ---- sap.ui.vbm.Pie --------------------------------------------------------------------------

/**
 * Constructor for a new Pie.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosition position} : string</li>
 * <li>{@link #getScale scale} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.vbm.PieItem[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Specific Visual Object element for a <i>Pie Chart</i>. A Pie is a round chart, which is positioned with its centerpoint at the given
 *        <i>position</i>. The size of the pie can be controlled with property <i>scale</i>. The slices of the pie chart are defined by the
 *        aggregated <i>PieItem</i> elements. The detail window will open at the center of the pie.<br>
 *        The property <i>hotDeltaColor</i> borrowed from VoBase is applied only to the hot PieItem and not the whole pie.</b>
 * @extends sap.ui.vbm.VoBase
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Pie = function(sId,mSettings) {};
/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.ui.vbm.PieItem}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Pie} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.addItem = function(oItem) { return new sap.ui.vbm.Pie(); };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.ui.vbm.Pie} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.destroyItems = function() { return new sap.ui.vbm.Pie(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Pie with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Pie.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * PieItem object aggregation. A PieItem holds the data for one slice in a Pie.
 * @returns {sap.ui.vbm.PieItem[]}
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.vbm.Pie.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Pie.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>position</code>.
 * 
 * The position of the Pie.
 * @returns {string} Value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.getPosition = function() { return ""; };

/**
 * Gets current value of property <code>scale</code>.
 * 
 * The scaling of the Pie. The scale must be a vector "x-Scale;y-Scale;z-Scale", but currently only the x scaling is applied to the
 * Pie.
 * @returns {string} Value of property <code>scale</code>
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.getScale = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.vbm.PieItem</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.PieItem}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.ui.vbm.PieItem}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Pie} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Pie(); };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.PieItem[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.ui.vbm.PieItem} vItem The itemto remove or its index or id
 * @returns {sap.ui.vbm.PieItem} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.removeItem = function(vItem) { return new sap.ui.vbm.PieItem(); };

/**
 * Sets a new value for property <code>position</code>.
 * 
 * The position of the Pie.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sPosition New value for property <code>position</code>
 * @returns {sap.ui.vbm.Pie} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Pie(); };

/**
 * Sets a new value for property <code>scale</code>.
 * 
 * The scaling of the Pie. The scale must be a vector "x-Scale;y-Scale;z-Scale", but currently only the x scaling is applied to the
 * Pie.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sScale New value for property <code>scale</code>
 * @returns {sap.ui.vbm.Pie} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pie.prototype.setScale = function(sScale) { return new sap.ui.vbm.Pie(); };


// ---- sap.ui.vbm.PieItem --------------------------------------------------------------------------

/**
 * Constructor for a new PieItem.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getName name} : string (default: )</li>
 * <li>{@link #getValue value} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Slice element for a Pie Chart.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.PieItem = function(sId,mSettings) {};
/**
 * The event is raised when there is a click action on a pie item.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.vbm.PieItem.prototype.click = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>click</code> event of this <code>sap.ui.vbm.PieItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.PieItem</code> itself.
 * 
 * The event is raised when there is a click action on a pie item.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.PieItem</code> itself
 * @returns {sap.ui.vbm.PieItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.PieItem.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.PieItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>click</code> event of this <code>sap.ui.vbm.PieItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.PieItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.PieItem.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.PieItem(); };

/**
 * Creates a new subclass of class sap.ui.vbm.PieItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.PieItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>click</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.PieItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.PieItem.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.PieItem(); };

/**
 * Returns a metadata object for class sap.ui.vbm.PieItem.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.PieItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>name</code>.
 * 
 * The name of the Pie item.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>name</code>
 * @public
 * 
 */
sap.ui.vbm.PieItem.prototype.getName = function() { return ""; };

/**
 * Gets current value of property <code>value</code>.
 * 
 * The value of the Pie item.
 * @returns {string} Value of property <code>value</code>
 * @public
 * 
 */
sap.ui.vbm.PieItem.prototype.getValue = function() { return ""; };

/**
 * Sets a new value for property <code>name</code>.
 * 
 * The name of the Pie item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sName New value for property <code>name</code>
 * @returns {sap.ui.vbm.PieItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.PieItem.prototype.setName = function(sName) { return new sap.ui.vbm.PieItem(); };

/**
 * Sets a new value for property <code>value</code>.
 * 
 * The value of the Pie item.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sValue New value for property <code>value</code>
 * @returns {sap.ui.vbm.PieItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.PieItem.prototype.setValue = function(sValue) { return new sap.ui.vbm.PieItem(); };


// ---- sap.ui.vbm.Pies --------------------------------------------------------------------------

/**
 * Constructor for a new Pies.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosChangeable posChangeable} : boolean (default: true)</li>
 * <li>{@link #getScaleChangeable scaleChangeable} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.vbm.Pie[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Type specific Visual Object aggregation for <i>Pie</i> instances.
 * @extends sap.ui.vbm.VoAggregation
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Pies = function(sId,mSettings) {};
/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Pie}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Pies} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.addItem = function(oItem) { return new sap.ui.vbm.Pies(); };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.ui.vbm.Pies} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.destroyItems = function() { return new sap.ui.vbm.Pies(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Pies with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoAggregation.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Pies.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * Pie object aggregation
 * @returns {sap.ui.vbm.Pie[]}
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.vbm.Pies.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Pies.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>posChangeable</code>.
 * 
 * Set to true if position may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>posChangeable</code>
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.getPosChangeable = function() { return false; };

/**
 * Gets current value of property <code>scaleChangeable</code>.
 * 
 * Set to true if scale may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>scaleChangeable</code>
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.getScaleChangeable = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.vbm.Pie</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Pie}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Pie}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Pies} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Pies(); };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.Pie[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.ui.vbm.Pie} vItem The itemto remove or its index or id
 * @returns {sap.ui.vbm.Pie} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Pie(); };

/**
 * Sets a new value for property <code>posChangeable</code>.
 * 
 * Set to true if position may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bPosChangeable New value for property <code>posChangeable</code>
 * @returns {sap.ui.vbm.Pies} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.setPosChangeable = function(bPosChangeable) { return new sap.ui.vbm.Pies(); };

/**
 * Sets a new value for property <code>scaleChangeable</code>.
 * 
 * Set to true if scale may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bScaleChangeable New value for property <code>scaleChangeable</code>
 * @returns {sap.ui.vbm.Pies} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Pies.prototype.setScaleChangeable = function(bScaleChangeable) { return new sap.ui.vbm.Pies(); };


// ---- sap.ui.vbm.Region --------------------------------------------------------------------------

/**
 * Constructor for a new Region.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColor color} : sap.ui.core.CSSColor</li>
 * <li>{@link #getCode code} : string</li>
 * <li>{@link #getSelect select} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Region properties.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Region = function(sId,mSettings) {};
/**
 * The event is raised when there is a click action on a region.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.code The region code.
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.click = function(oControlEvent) {  };

/**
 * The event is raised when there is a right click or a tap and hold action on a region.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.code The region code.
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.contextMenu = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>click</code> event of this <code>sap.ui.vbm.Region</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.Region</code> itself.
 * 
 * The event is raised when there is a click action on a region.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Region</code> itself
 * @returns {sap.ui.vbm.Region} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Region(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>contextMenu</code> event of this <code>sap.ui.vbm.Region</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.Region</code> itself.
 * 
 * The event is raised when there is a right click or a tap and hold action on a region.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Region</code> itself
 * @returns {sap.ui.vbm.Region} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Region(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>click</code> event of this <code>sap.ui.vbm.Region</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.Region} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Region(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>contextMenu</code> event of this <code>sap.ui.vbm.Region</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.Region} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Region(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Region with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Region.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>click</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>code</code> of type <code>string</code>The region code.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.Region} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Region.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Region(); };

/**
 * Fires event <code>contextMenu</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>code</code> of type <code>string</code>The region code.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.Region} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Region.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Region(); };

/**
 * Gets current value of property <code>code</code>.
 * 
 * The region code.
 * @returns {string} Value of property <code>code</code>
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.getCode = function() { return ""; };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The color, this must be provided in the rgba(r,g,b,a) format.
 * @returns {sap.ui.core.CSSColor} Value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.getColor = function() { return new sap.ui.core.CSSColor(); };

/**
 * Returns Infos for the Region like name, bounding box and midpoint
 * @returns {object} Region Information Object. Object has the properties BBox: Bounding Box for Region in format "lonMin;latMin;lonMax;latMax",
 *          Midpoint: Centerpoint for Region in format "lon;lat", Name: Name of the region, and Properties: Array of name-value-pair associated
 *          with the region
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Region.prototype.getInfo = function() { return new Object(); };

/**
 * Returns a metadata object for class sap.ui.vbm.Region.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Region.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>select</code>.
 * 
 * set to true if the element is selected
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>select</code>
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.getSelect = function() { return false; };

/**
 * Sets a new value for property <code>code</code>.
 * 
 * The region code.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sCode New value for property <code>code</code>
 * @returns {sap.ui.vbm.Region} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.setCode = function(sCode) { return new sap.ui.vbm.Region(); };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The color, this must be provided in the rgba(r,g,b,a) format.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSColor} sColor New value for property <code>color</code>
 * @returns {sap.ui.vbm.Region} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.setColor = function(sColor) { return new sap.ui.vbm.Region(); };

/**
 * Sets a new value for property <code>select</code>.
 * 
 * set to true if the element is selected
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSelect New value for property <code>select</code>
 * @returns {sap.ui.vbm.Region} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Region.prototype.setSelect = function(bSelect) { return new sap.ui.vbm.Region(); };


// ---- sap.ui.vbm.Resource --------------------------------------------------------------------------

/**
 * Constructor for a new Resource.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : string</li>
 * <li>{@link #getSrc src} : string (default: )</li>
 * <li>{@link #getName name} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class A resource is a Base64 encoded representation of an image binary that can be referenced by name in e.g. a <i>Spot</i> element. When
 *        images are specified as a string resource it is guaranteed that the control can access the bits in the image. If just a URL to the
 *        resource is given it is loaded and converted to a Base64 encoded binary. This happens asynchronously and it may require several
 *        re-renderings of the control until all resource show up correctly.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Resource = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.vbm.Resource with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Resource.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.vbm.Resource.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Resource.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>name</code>.
 * 
 * Name of the resource. The name should be always used when a resource is referenced.
 * @returns {string} Value of property <code>name</code>
 * @public
 * 
 */
sap.ui.vbm.Resource.prototype.getName = function() { return ""; };

/**
 * Gets current value of property <code>src</code>.
 * 
 * URL to an image. It is important that the image data is readable fom the visual business control. Therefore e.g. images coming from
 * a local drive or cross domains are not allowed. The preferred way is to use the Base64 encoded data provided using the value
 * property.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>src</code>
 * @public
 * 
 */
sap.ui.vbm.Resource.prototype.getSrc = function() { return ""; };

/**
 * Gets current value of property <code>value</code>.
 * 
 * Value of the resource. Base64 endode binary.
 * @returns {string} Value of property <code>value</code>
 * @public
 * 
 */
sap.ui.vbm.Resource.prototype.getValue = function() { return ""; };

/**
 * Sets a new value for property <code>name</code>.
 * 
 * Name of the resource. The name should be always used when a resource is referenced.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sName New value for property <code>name</code>
 * @returns {sap.ui.vbm.Resource} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Resource.prototype.setName = function(sName) { return new sap.ui.vbm.Resource(); };

/**
 * Sets a new value for property <code>src</code>.
 * 
 * URL to an image. It is important that the image data is readable fom the visual business control. Therefore e.g. images coming from
 * a local drive or cross domains are not allowed. The preferred way is to use the Base64 encoded data provided using the value
 * property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sSrc New value for property <code>src</code>
 * @returns {sap.ui.vbm.Resource} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Resource.prototype.setSrc = function(sSrc) { return new sap.ui.vbm.Resource(); };

/**
 * Sets a new value for property <code>value</code>.
 * 
 * Value of the resource. Base64 endode binary.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sValue New value for property <code>value</code>
 * @returns {sap.ui.vbm.Resource} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Resource.prototype.setValue = function(sValue) { return new sap.ui.vbm.Resource(); };


// ---- sap.ui.vbm.Route --------------------------------------------------------------------------

/**
 * Constructor for a new Route.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosition position} : string</li>
 * <li>{@link #getColor color} : string (default: RGB(0;0;0))</li>
 * <li>{@link #getStart start} : string (default: 0)</li>
 * <li>{@link #getEnd end} : string (default: 0)</li>
 * <li>{@link #getLinewidth linewidth} : string (default: 3)</li>
 * <li>{@link #getDotcolor dotcolor} : string (default: RGB(0;0;0))</li>
 * <li>{@link #getDotbordercolor dotbordercolor} : string (default: RGB(0;0;0))</li>
 * <li>{@link #getColorBorder colorBorder} : string</li>
 * <li>{@link #getLineDash lineDash} : string</li>
 * <li>{@link #getDotwidth dotwidth} : string (default: 0)</li>
 * <li>{@link #getRoutetype routetype} : sap.ui.vbm.RouteType (default: Straight)</li>
 * <li>{@link #getDirectionIndicator directionIndicator} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDragSource dragSource} : sap.ui.vbm.DragSource[]</li>
 * <li>{@link #getDropTarget dropTarget} : sap.ui.vbm.DropTarget[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Specific Visual Object element for a <i>Route</i>. A Route is a polyline, which is given as a list of geo-coordinates. In order to
 *        indicate direction an arrow head can be added at start and end. Further it is possible to have a dot at each point of the coordinate
 *        list.<br>
 *        Since the actual length of a route depends on the zoom level it might be only partly visible. Thus detail windows will be dynamically
 *        positioned in the middle of the visible route part.<br>
 *        A Route supports GeoMap internal drag'n drop with fine grained control on matching drag sources and drop targets. A drag'n drop
 *        operation is possible if any type in the drag source aggregation of the dragged visual object matches a type in the drop target
 *        aggregation of the target vo. Drag source and drop target types defined on element level apply only for a single element instance,
 *        except the element is used as template.
 * @extends sap.ui.vbm.VoBase
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Route = function(sId,mSettings) {};
/**
 * Adds some dragSource to the aggregation <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.addDragSource = function(oDragSource) { return new sap.ui.vbm.Route(); };

/**
 * Adds some dropTarget to the aggregation <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.addDropTarget = function(oDropTarget) { return new sap.ui.vbm.Route(); };

/**
 * Destroys all the dragSource in the aggregation <code>dragSource</code>.
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.destroyDragSource = function() { return new sap.ui.vbm.Route(); };

/**
 * Destroys all the dropTarget in the aggregation <code>dropTarget</code>.
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.destroyDropTarget = function() { return new sap.ui.vbm.Route(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Route with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Route.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The color of the route.
 * 
 * Default value is <code>RGB(0;0;0)</code>.
 * @returns {string} Value of property <code>color</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getColor = function() { return ""; };

/**
 * Gets current value of property <code>colorBorder</code>.
 * 
 * The border color of the route.
 * @returns {string} Value of property <code>colorBorder</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getColorBorder = function() { return ""; };

/**
 * Gets current value of property <code>directionIndicator</code>.
 * 
 * set to true if intermediate triangles along the route should show the direction only applicable if arrow head is defined ( start
 * and/or end ) it is not recommended to use line dots in addition because the the direction indicators generate additional line
 * points at their head and base positions
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>directionIndicator</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getDirectionIndicator = function() { return false; };

/**
 * Gets current value of property <code>dotbordercolor</code>.
 * 
 * The border color of the line dots of a route.
 * 
 * Default value is <code>RGB(0;0;0)</code>.
 * @returns {string} Value of property <code>dotbordercolor</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getDotbordercolor = function() { return ""; };

/**
 * Gets current value of property <code>dotcolor</code>.
 * 
 * The color for the line dots of a route.
 * 
 * Default value is <code>RGB(0;0;0)</code>.
 * @returns {string} Value of property <code>dotcolor</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getDotcolor = function() { return ""; };

/**
 * Gets current value of property <code>dotwidth</code>.
 * 
 * The diameter of a dot in a route.
 * 
 * Default value is <code>0</code>.
 * @returns {string} Value of property <code>dotwidth</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getDotwidth = function() { return ""; };

/**
 * Gets content of aggregation <code>dragSource</code>.
 * 
 * DragSource aggregation
 * @returns {sap.ui.vbm.DragSource[]}
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getDragSource = function() { return new Array(); };

/**
 * Gets content of aggregation <code>dropTarget</code>.
 * 
 * DropTarget aggregation
 * @returns {sap.ui.vbm.DropTarget[]}
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getDropTarget = function() { return new Array(); };

/**
 * Gets current value of property <code>end</code>.
 * 
 * The end point type of the route.
 * <ul>
 * <li>0: no endpoint
 * <li>1: arrow as endpoint
 * </ul>
 * 
 * Default value is <code>0</code>.
 * @returns {string} Value of property <code>end</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getEnd = function() { return ""; };

/**
 * Gets current value of property <code>lineDash</code>.
 * 
 * Defines the dashing style of the route using an array. The first value gives the length of the stroke and the second the length of
 * the gap. Thus "1;1", would result in a doted line. However, strokes are painted with rounded endings. Thus the actual stroke length
 * depends also on the line width. As a sample a stroke of 1 pixel length and a line width of 6 will result in at least 6 pixels total
 * length. In that case the line dashing should be set to "1;6" for an equal length of stroke and gap!<br>
 * The line dashing array can be extended to achive more complex pattern, e.g. "1;1;5;2" and so on.
 * @returns {string} Value of property <code>lineDash</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getLineDash = function() { return ""; };

/**
 * Gets current value of property <code>linewidth</code>.
 * 
 * The width of the route line. With width 0 no line is drawn.
 * 
 * Default value is <code>3</code>.
 * @returns {string} Value of property <code>linewidth</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getLinewidth = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.vbm.Route.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Route.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>position</code>.
 * 
 * The position array of the route. The format is "lon0;lat0;0;...lonN;latN;0".
 * @returns {string} Value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getPosition = function() { return ""; };

/**
 * Gets current value of property <code>routetype</code>.
 * 
 * Defines the type of the route, default is 'Straight'. Other types are 'Geodesic' which show the shortest path between two points,
 * e.g. flightroutes
 * 
 * Default value is <code>Straight</code>.
 * @returns {sap.ui.vbm.RouteType} Value of property <code>routetype</code>
 * @experimental Since 1.32.0 this method is experimental and might be modified or removed in future versions.
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getRoutetype = function() { return new sap.ui.vbm.RouteType(); };

/**
 * Gets current value of property <code>start</code>.
 * 
 * The start point type of the route.
 * <ul>
 * <li>0: no startpoint
 * <li>1: arrow head as startpoint
 * </ul>
 * 
 * Default value is <code>0</code>.
 * @returns {string} Value of property <code>start</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.getStart = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.vbm.DragSource</code> in the aggregation <code>dragSource</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DragSource}
 *           oDragSource The dragSource whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.indexOfDragSource = function(oDragSource) { return 0; };

/**
 * Checks for the provided <code>sap.ui.vbm.DropTarget</code> in the aggregation <code>dropTarget</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DropTarget}
 *           oDropTarget The dropTarget whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.indexOfDropTarget = function(oDropTarget) { return 0; };

/**
 * Inserts a dragSource into the aggregation <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the dragSource should be inserted at; for
 *              a negative value of <code>iIndex</code>, the dragSource is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the dragSource is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.insertDragSource = function(oDragSource,iIndex) { return new sap.ui.vbm.Route(); };

/**
 * Inserts a dropTarget into the aggregation <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the dropTarget should be inserted at; for
 *              a negative value of <code>iIndex</code>, the dropTarget is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the dropTarget is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.insertDropTarget = function(oDropTarget,iIndex) { return new sap.ui.vbm.Route(); };

/**
 * Removes all the controls from the aggregation <code>dragSource</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.DragSource[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.removeAllDragSource = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>dropTarget</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.DropTarget[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.removeAllDropTarget = function() { return new Array(); };

/**
 * Removes a dragSource from the aggregation <code>dragSource</code>.
 * @param {int | string | sap.ui.vbm.DragSource} vDragSource The dragSourceto remove or its index or id
 * @returns {sap.ui.vbm.DragSource} The removed dragSource or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.removeDragSource = function(vDragSource) { return new sap.ui.vbm.DragSource(); };

/**
 * Removes a dropTarget from the aggregation <code>dropTarget</code>.
 * @param {int | string | sap.ui.vbm.DropTarget} vDropTarget The dropTargetto remove or its index or id
 * @returns {sap.ui.vbm.DropTarget} The removed dropTarget or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.removeDropTarget = function(vDropTarget) { return new sap.ui.vbm.DropTarget(); };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The color of the route.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>RGB(0;0;0)</code>.
 * @param {string} sColor New value for property <code>color</code>
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setColor = function(sColor) { return new sap.ui.vbm.Route(); };

/**
 * Sets a new value for property <code>colorBorder</code>.
 * 
 * The border color of the route.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sColorBorder New value for property <code>colorBorder</code>
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setColorBorder = function(sColorBorder) { return new sap.ui.vbm.Route(); };

/**
 * Sets a new value for property <code>directionIndicator</code>.
 * 
 * set to true if intermediate triangles along the route should show the direction only applicable if arrow head is defined ( start
 * and/or end ) it is not recommended to use line dots in addition because the the direction indicators generate additional line
 * points at their head and base positions
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bDirectionIndicator New value for property <code>directionIndicator</code>
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setDirectionIndicator = function(bDirectionIndicator) { return new sap.ui.vbm.Route(); };

/**
 * Sets a new value for property <code>dotbordercolor</code>.
 * 
 * The border color of the line dots of a route.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>RGB(0;0;0)</code>.
 * @param {string} sDotbordercolor New value for property <code>dotbordercolor</code>
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setDotbordercolor = function(sDotbordercolor) { return new sap.ui.vbm.Route(); };

/**
 * Sets a new value for property <code>dotcolor</code>.
 * 
 * The color for the line dots of a route.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>RGB(0;0;0)</code>.
 * @param {string} sDotcolor New value for property <code>dotcolor</code>
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setDotcolor = function(sDotcolor) { return new sap.ui.vbm.Route(); };

/**
 * Sets a new value for property <code>dotwidth</code>.
 * 
 * The diameter of a dot in a route.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {string} sDotwidth New value for property <code>dotwidth</code>
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setDotwidth = function(sDotwidth) { return new sap.ui.vbm.Route(); };

/**
 * Sets a new value for property <code>end</code>.
 * 
 * The end point type of the route.
 * <ul>
 * <li>0: no endpoint
 * <li>1: arrow as endpoint
 * </ul>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {string} sEnd New value for property <code>end</code>
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setEnd = function(sEnd) { return new sap.ui.vbm.Route(); };

/**
 * Sets a new value for property <code>lineDash</code>.
 * 
 * Defines the dashing style of the route using an array. The first value gives the length of the stroke and the second the length of
 * the gap. Thus "1;1", would result in a doted line. However, strokes are painted with rounded endings. Thus the actual stroke length
 * depends also on the line width. As a sample a stroke of 1 pixel length and a line width of 6 will result in at least 6 pixels total
 * length. In that case the line dashing should be set to "1;6" for an equal length of stroke and gap!<br>
 * The line dashing array can be extended to achive more complex pattern, e.g. "1;1;5;2" and so on.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sLineDash New value for property <code>lineDash</code>
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setLineDash = function(sLineDash) { return new sap.ui.vbm.Route(); };

/**
 * Sets a new value for property <code>linewidth</code>.
 * 
 * The width of the route line. With width 0 no line is drawn.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>3</code>.
 * @param {string} sLinewidth New value for property <code>linewidth</code>
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setLinewidth = function(sLinewidth) { return new sap.ui.vbm.Route(); };

/**
 * Sets a new value for property <code>position</code>.
 * 
 * The position array of the route. The format is "lon0;lat0;0;...lonN;latN;0".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sPosition New value for property <code>position</code>
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Route(); };

/**
 * Sets a new value for property <code>routetype</code>.
 * 
 * Defines the type of the route, default is 'Straight'. Other types are 'Geodesic' which show the shortest path between two points,
 * e.g. flightroutes
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Straight</code>.
 * @param {sap.ui.vbm.RouteType} sRoutetype New value for property <code>routetype</code>
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @experimental Since 1.32.0 this method is experimental and might be modified or removed in future versions.
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setRoutetype = function(sRoutetype) { return new sap.ui.vbm.Route(); };

/**
 * Sets a new value for property <code>start</code>.
 * 
 * The start point type of the route.
 * <ul>
 * <li>0: no startpoint
 * <li>1: arrow head as startpoint
 * </ul>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {string} sStart New value for property <code>start</code>
 * @returns {sap.ui.vbm.Route} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Route.prototype.setStart = function(sStart) { return new sap.ui.vbm.Route(); };


// ---- sap.ui.vbm.Routes --------------------------------------------------------------------------

/**
 * Constructor for a new Routes.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosChangeable posChangeable} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.vbm.Route[] (default)</li>
 * <li>{@link #getDragSource dragSource} : sap.ui.vbm.DragSource[]</li>
 * <li>{@link #getDropTarget dropTarget} : sap.ui.vbm.DropTarget[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Type specific Visual Object aggregation for <i>Route</i> elements.<br>
 *        Routes support GeoMap internal drag'n drop with fine grained control on matching drag sources and drop targets. A drag'n drop operation
 *        is possible if any type in the drag source aggregation of the dragged visual object matches a type in the drop target aggregation of the
 *        target vo. If drag source and drop target types are defined on aggregation level they apply for all aggregated elements.
 * @extends sap.ui.vbm.VoAggregation
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Routes = function(sId,mSettings) {};
/**
 * The event is raised when there is a click action on a Route.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.click = function(oControlEvent) {  };

/**
 * The event is raised when there is a right click or a tap and hold action on a Route.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.contextMenu = function(oControlEvent) {  };

/**
 * The event is raised when something is dropped on a Route.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.drop = function(oControlEvent) {  };

/**
 * Adds some dragSource to the aggregation <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.addDragSource = function(oDragSource) { return new sap.ui.vbm.Routes(); };

/**
 * Adds some dropTarget to the aggregation <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.addDropTarget = function(oDropTarget) { return new sap.ui.vbm.Routes(); };

/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Route}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.addItem = function(oItem) { return new sap.ui.vbm.Routes(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>click</code> event of this <code>sap.ui.vbm.Routes</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.Routes</code> itself.
 * 
 * The event is raised when there is a click action on a Route.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Routes</code> itself
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Routes(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>contextMenu</code> event of this <code>sap.ui.vbm.Routes</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.Routes</code> itself.
 * 
 * The event is raised when there is a right click or a tap and hold action on a Route.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Routes</code> itself
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Routes(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>drop</code> event of this <code>sap.ui.vbm.Routes</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.Routes</code> itself.
 * 
 * The event is raised when something is dropped on a Route.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.Routes</code> itself
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.Routes(); };

/**
 * Destroys all the dragSource in the aggregation <code>dragSource</code>.
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.destroyDragSource = function() { return new sap.ui.vbm.Routes(); };

/**
 * Destroys all the dropTarget in the aggregation <code>dropTarget</code>.
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.destroyDropTarget = function() { return new sap.ui.vbm.Routes(); };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.destroyItems = function() { return new sap.ui.vbm.Routes(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>click</code> event of this <code>sap.ui.vbm.Routes</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.Routes(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>contextMenu</code> event of this <code>sap.ui.vbm.Routes</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.Routes(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>drop</code> event of this <code>sap.ui.vbm.Routes</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.Routes(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Routes with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoAggregation.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Routes.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>click</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Routes.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.Routes(); };

/**
 * Fires event <code>contextMenu</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Routes.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.Routes(); };

/**
 * Fires event <code>drop</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.Routes.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.Routes(); };

/**
 * Gets content of aggregation <code>dragSource</code>.
 * 
 * DragSource aggregation
 * @returns {sap.ui.vbm.DragSource[]}
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.getDragSource = function() { return new Array(); };

/**
 * Gets content of aggregation <code>dropTarget</code>.
 * 
 * DropTarget aggregation
 * @returns {sap.ui.vbm.DropTarget[]}
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.getDropTarget = function() { return new Array(); };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * Route object aggregation
 * @returns {sap.ui.vbm.Route[]}
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.vbm.Routes.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Routes.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>posChangeable</code>.
 * 
 * Set to true if position may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>posChangeable</code>
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.getPosChangeable = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.vbm.DragSource</code> in the aggregation <code>dragSource</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DragSource}
 *           oDragSource The dragSource whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.indexOfDragSource = function(oDragSource) { return 0; };

/**
 * Checks for the provided <code>sap.ui.vbm.DropTarget</code> in the aggregation <code>dropTarget</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DropTarget}
 *           oDropTarget The dropTarget whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.indexOfDropTarget = function(oDropTarget) { return 0; };

/**
 * Checks for the provided <code>sap.ui.vbm.Route</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Route}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a dragSource into the aggregation <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the dragSource should be inserted at; for
 *              a negative value of <code>iIndex</code>, the dragSource is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the dragSource is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.insertDragSource = function(oDragSource,iIndex) { return new sap.ui.vbm.Routes(); };

/**
 * Inserts a dropTarget into the aggregation <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the dropTarget should be inserted at; for
 *              a negative value of <code>iIndex</code>, the dropTarget is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the dropTarget is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.insertDropTarget = function(oDropTarget,iIndex) { return new sap.ui.vbm.Routes(); };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Route}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Routes(); };

/**
 * Removes all the controls from the aggregation <code>dragSource</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.DragSource[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.removeAllDragSource = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>dropTarget</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.DropTarget[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.removeAllDropTarget = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.Route[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a dragSource from the aggregation <code>dragSource</code>.
 * @param {int | string | sap.ui.vbm.DragSource} vDragSource The dragSourceto remove or its index or id
 * @returns {sap.ui.vbm.DragSource} The removed dragSource or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.removeDragSource = function(vDragSource) { return new sap.ui.vbm.DragSource(); };

/**
 * Removes a dropTarget from the aggregation <code>dropTarget</code>.
 * @param {int | string | sap.ui.vbm.DropTarget} vDropTarget The dropTargetto remove or its index or id
 * @returns {sap.ui.vbm.DropTarget} The removed dropTarget or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.removeDropTarget = function(vDropTarget) { return new sap.ui.vbm.DropTarget(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.ui.vbm.Route} vItem The itemto remove or its index or id
 * @returns {sap.ui.vbm.Route} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Route(); };

/**
 * Sets a new value for property <code>posChangeable</code>.
 * 
 * Set to true if position may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bPosChangeable New value for property <code>posChangeable</code>
 * @returns {sap.ui.vbm.Routes} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Routes.prototype.setPosChangeable = function(bPosChangeable) { return new sap.ui.vbm.Routes(); };


// ---- sap.ui.vbm.RouteType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.vbm.RouteType.toString = function() { return ""; };

// ---- sap.ui.vbm.SemanticType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.vbm.SemanticType.toString = function() { return ""; };

// ---- sap.ui.vbm.Spot --------------------------------------------------------------------------

/**
 * Constructor for a new Spot.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosition position} : string (default: 0;0;0)</li>
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getImage image} : string</li>
 * <li>{@link #getAlignment alignment} : string (default: 5)</li>
 * <li>{@link #getScale scale} : string (default: 1;1;1)</li>
 * <li>{@link #getImageSelected imageSelected} : string</li>
 * <li>{@link #getIcon icon} : string</li>
 * <li>{@link #getContentColor contentColor} : string</li>
 * <li>{@link #getContentOffset contentOffset} : string (default: 0;0)</li>
 * <li>{@link #getContentFont contentFont} : string (default: arial)</li>
 * <li>{@link #getContentSize contentSize} : string</li>
 * <li>{@link #getType type} : sap.ui.vbm.SemanticType</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDragSource dragSource} : sap.ui.vbm.DragSource[]</li>
 * <li>{@link #getDropTarget dropTarget} : sap.ui.vbm.DropTarget[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoBase#constructor sap.ui.vbm.VoBase}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Specific Visual Object element for a <i>Spot</i>. A Spot is actually an image drawn at the given <i>position</i>. There are two modes
 *        for using spots:
 *        <ul>
 *        <li>A controlled mode by providing a spot type. In this mode many properties for the spot are automatically set by programmed defaults
 *        according to the Fiori guidelines.</li>
 *        <li>A freestyle mode, providing the full control on colors and layout.</li>
 *        </ul>
 *        Beside the visualization with an image a spot can have an <i>icon</i> or <i>text</i>, which can be controlled and positioned using the
 *        content properties. <br>
 *        A Spot supports GeoMap internal drag'n drop with fine grained control on matching drag sources and drop targets. A drag'n drop operation
 *        is possible if any type in the drag source aggregation of the dragged visual object matches a type in the drop target aggregation of the
 *        target vo. Drag source and drop target types defined on element level apply only for a single element instance, except the element is
 *        used as template.
 * @extends sap.ui.vbm.VoBase
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Spot = function(sId,mSettings) {};
/**
 * Adds some dragSource to the aggregation <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.addDragSource = function(oDragSource) { return new sap.ui.vbm.Spot(); };

/**
 * Adds some dropTarget to the aggregation <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.addDropTarget = function(oDropTarget) { return new sap.ui.vbm.Spot(); };

/**
 * Destroys all the dragSource in the aggregation <code>dragSource</code>.
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.destroyDragSource = function() { return new sap.ui.vbm.Spot(); };

/**
 * Destroys all the dropTarget in the aggregation <code>dropTarget</code>.
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.destroyDropTarget = function() { return new sap.ui.vbm.Spot(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Spot with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoBase.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Spot.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>alignment</code>.
 * 
 * Alignment of the spot to its position:
 * <ul>
 * <li>0: center
 * <li>1: top center
 * <li>2: top right
 * <li>3: center right
 * <li>4: bottom right
 * <li>5: bottom center
 * <li>6: bottom left
 * <li>7: center left
 * <li>8: top left
 * </ul>
 * 
 * Default value is <code>5</code>.
 * @returns {string} Value of property <code>alignment</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getAlignment = function() { return ""; };

/**
 * Gets current value of property <code>contentColor</code>.
 * 
 * The color of the content ( icon or text ).
 * @returns {string} Value of property <code>contentColor</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getContentColor = function() { return ""; };

/**
 * Gets current value of property <code>contentFont</code>.
 * 
 * The font of the spot's text. If icon is used then the font is automatically set to"SAP-icons".
 * 
 * Default value is <code>arial</code>.
 * @returns {string} Value of property <code>contentFont</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getContentFont = function() { return ""; };

/**
 * Gets current value of property <code>contentOffset</code>.
 * 
 * The offset from the center of the image where to place the content ( text or icon ) in x;y- direction
 * 
 * Default value is <code>0;0</code>.
 * @returns {string} Value of property <code>contentOffset</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getContentOffset = function() { return ""; };

/**
 * Gets current value of property <code>contentSize</code>.
 * 
 * The font size to be used for text or icon
 * @returns {string} Value of property <code>contentSize</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getContentSize = function() { return ""; };

/**
 * Gets content of aggregation <code>dragSource</code>.
 * 
 * DragSource aggregation
 * @returns {sap.ui.vbm.DragSource[]}
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getDragSource = function() { return new Array(); };

/**
 * Gets content of aggregation <code>dropTarget</code>.
 * 
 * DropTarget aggregation
 * @returns {sap.ui.vbm.DropTarget[]}
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getDropTarget = function() { return new Array(); };

/**
 * Gets current value of property <code>icon</code>.
 * 
 * The icon to be rendered on the spot. Note that either text or icon may be displayed ( not both together ). Use the CharCode-Id of
 * SAPUI5-Icons (e.g.: "\ue146")
 * @returns {string} Value of property <code>icon</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getIcon = function() { return ""; };

/**
 * Gets current value of property <code>image</code>.
 * 
 * The image for the spot. This must be a reference to a resource.
 * @returns {string} Value of property <code>image</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getImage = function() { return ""; };

/**
 * Gets current value of property <code>imageSelected</code>.
 * 
 * The image for the spot when selected. This must be a reference to a resource.
 * @returns {string} Value of property <code>imageSelected</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getImageSelected = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.vbm.Spot.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Spot.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>position</code>.
 * 
 * The position of the spot. The format is "lon;lat;0"
 * 
 * Default value is <code>0;0;0</code>.
 * @returns {string} Value of property <code>position</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getPosition = function() { return ""; };

/**
 * Gets current value of property <code>scale</code>.
 * 
 * The scale of the spot. The format is "x-Scale;y-Scale;z-Scale". The z-Scale is curretly ignored.
 * 
 * Default value is <code>1;1;1</code>.
 * @returns {string} Value of property <code>scale</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getScale = function() { return ""; };

/**
 * Gets current value of property <code>text</code>.
 * 
 * The text that is displayed on the spot. The text should not exceed a few characters. Note that either text or icon may be displayed (
 * not both together ).
 * @returns {string} Value of property <code>text</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getText = function() { return ""; };

/**
 * Gets current value of property <code>type</code>.
 * 
 * Spot type for semantic spots. A given semantic type will overrule settings for image, scale, and content.
 * @returns {sap.ui.vbm.SemanticType} Value of property <code>type</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.getType = function() { return new sap.ui.vbm.SemanticType(); };

/**
 * Checks for the provided <code>sap.ui.vbm.DragSource</code> in the aggregation <code>dragSource</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DragSource}
 *           oDragSource The dragSource whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.indexOfDragSource = function(oDragSource) { return 0; };

/**
 * Checks for the provided <code>sap.ui.vbm.DropTarget</code> in the aggregation <code>dropTarget</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DropTarget}
 *           oDropTarget The dropTarget whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.indexOfDropTarget = function(oDropTarget) { return 0; };

/**
 * Inserts a dragSource into the aggregation <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the dragSource should be inserted at; for
 *              a negative value of <code>iIndex</code>, the dragSource is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the dragSource is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.insertDragSource = function(oDragSource,iIndex) { return new sap.ui.vbm.Spot(); };

/**
 * Inserts a dropTarget into the aggregation <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the dropTarget should be inserted at; for
 *              a negative value of <code>iIndex</code>, the dropTarget is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the dropTarget is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.insertDropTarget = function(oDropTarget,iIndex) { return new sap.ui.vbm.Spot(); };

/**
 * Removes all the controls from the aggregation <code>dragSource</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.DragSource[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.removeAllDragSource = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>dropTarget</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.DropTarget[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.removeAllDropTarget = function() { return new Array(); };

/**
 * Removes a dragSource from the aggregation <code>dragSource</code>.
 * @param {int | string | sap.ui.vbm.DragSource} vDragSource The dragSourceto remove or its index or id
 * @returns {sap.ui.vbm.DragSource} The removed dragSource or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.removeDragSource = function(vDragSource) { return new sap.ui.vbm.DragSource(); };

/**
 * Removes a dropTarget from the aggregation <code>dropTarget</code>.
 * @param {int | string | sap.ui.vbm.DropTarget} vDropTarget The dropTargetto remove or its index or id
 * @returns {sap.ui.vbm.DropTarget} The removed dropTarget or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.removeDropTarget = function(vDropTarget) { return new sap.ui.vbm.DropTarget(); };

/**
 * Sets a new value for property <code>alignment</code>.
 * 
 * Alignment of the spot to its position:
 * <ul>
 * <li>0: center
 * <li>1: top center
 * <li>2: top right
 * <li>3: center right
 * <li>4: bottom right
 * <li>5: bottom center
 * <li>6: bottom left
 * <li>7: center left
 * <li>8: top left
 * </ul>
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>5</code>.
 * @param {string} sAlignment New value for property <code>alignment</code>
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setAlignment = function(sAlignment) { return new sap.ui.vbm.Spot(); };

/**
 * Sets a new value for property <code>contentColor</code>.
 * 
 * The color of the content ( icon or text ).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sContentColor New value for property <code>contentColor</code>
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setContentColor = function(sContentColor) { return new sap.ui.vbm.Spot(); };

/**
 * Sets a new value for property <code>contentFont</code>.
 * 
 * The font of the spot's text. If icon is used then the font is automatically set to"SAP-icons".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>arial</code>.
 * @param {string} sContentFont New value for property <code>contentFont</code>
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setContentFont = function(sContentFont) { return new sap.ui.vbm.Spot(); };

/**
 * Sets a new value for property <code>contentOffset</code>.
 * 
 * The offset from the center of the image where to place the content ( text or icon ) in x;y- direction
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0;0</code>.
 * @param {string} sContentOffset New value for property <code>contentOffset</code>
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setContentOffset = function(sContentOffset) { return new sap.ui.vbm.Spot(); };

/**
 * Sets a new value for property <code>contentSize</code>.
 * 
 * The font size to be used for text or icon
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sContentSize New value for property <code>contentSize</code>
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setContentSize = function(sContentSize) { return new sap.ui.vbm.Spot(); };

/**
 * Sets a new value for property <code>icon</code>.
 * 
 * The icon to be rendered on the spot. Note that either text or icon may be displayed ( not both together ). Use the CharCode-Id of
 * SAPUI5-Icons (e.g.: "\ue146")
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sIcon New value for property <code>icon</code>
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setIcon = function(sIcon) { return new sap.ui.vbm.Spot(); };

/**
 * Sets a new value for property <code>image</code>.
 * 
 * The image for the spot. This must be a reference to a resource.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sImage New value for property <code>image</code>
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setImage = function(sImage) { return new sap.ui.vbm.Spot(); };

/**
 * Sets a new value for property <code>imageSelected</code>.
 * 
 * The image for the spot when selected. This must be a reference to a resource.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sImageSelected New value for property <code>imageSelected</code>
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setImageSelected = function(sImageSelected) { return new sap.ui.vbm.Spot(); };

/**
 * Sets a new value for property <code>position</code>.
 * 
 * The position of the spot. The format is "lon;lat;0"
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0;0;0</code>.
 * @param {string} sPosition New value for property <code>position</code>
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setPosition = function(sPosition) { return new sap.ui.vbm.Spot(); };

/**
 * Sets a new value for property <code>scale</code>.
 * 
 * The scale of the spot. The format is "x-Scale;y-Scale;z-Scale". The z-Scale is curretly ignored.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1;1;1</code>.
 * @param {string} sScale New value for property <code>scale</code>
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setScale = function(sScale) { return new sap.ui.vbm.Spot(); };

/**
 * Sets a new value for property <code>text</code>.
 * 
 * The text that is displayed on the spot. The text should not exceed a few characters. Note that either text or icon may be displayed (
 * not both together ).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setText = function(sText) { return new sap.ui.vbm.Spot(); };

/**
 * Sets a new value for property <code>type</code>.
 * 
 * Spot type for semantic spots. A given semantic type will overrule settings for image, scale, and content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.vbm.SemanticType} sType New value for property <code>type</code>
 * @returns {sap.ui.vbm.Spot} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spot.prototype.setType = function(sType) { return new sap.ui.vbm.Spot(); };


// ---- sap.ui.vbm.Spots --------------------------------------------------------------------------

/**
 * Constructor for a new Spots.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPosChangeable posChangeable} : boolean (default: true)</li>
 * <li>{@link #getScaleChangeable scaleChangeable} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.vbm.Spot[] (default)</li>
 * <li>{@link #getDragSource dragSource} : sap.ui.vbm.DragSource[]</li>
 * <li>{@link #getDropTarget dropTarget} : sap.ui.vbm.DropTarget[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.vbm.VoAggregation#constructor sap.ui.vbm.VoAggregation}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Type specific Visual Object aggregation for <i>Spot</i> elements.<br>
 *        Spots support GeoMap internal drag'n drop with fine grained control on matching drag sources and drop targets. A drag'n drop operation
 *        is possible if any type in the drag source aggregation of the dragged visual object matches a type in the drop target aggregation of the
 *        target vo. If drag source and drop target types are defined on aggregation level they apply for all aggregated elements.
 * @extends sap.ui.vbm.VoAggregation
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.Spots = function(sId,mSettings) {};
/**
 * Adds some dragSource to the aggregation <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Spots} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.addDragSource = function(oDragSource) { return new sap.ui.vbm.Spots(); };

/**
 * Adds some dropTarget to the aggregation <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Spots} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.addDropTarget = function(oDropTarget) { return new sap.ui.vbm.Spots(); };

/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Spot}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.vbm.Spots} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.addItem = function(oItem) { return new sap.ui.vbm.Spots(); };

/**
 * Destroys all the dragSource in the aggregation <code>dragSource</code>.
 * @returns {sap.ui.vbm.Spots} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.destroyDragSource = function() { return new sap.ui.vbm.Spots(); };

/**
 * Destroys all the dropTarget in the aggregation <code>dropTarget</code>.
 * @returns {sap.ui.vbm.Spots} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.destroyDropTarget = function() { return new sap.ui.vbm.Spots(); };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.ui.vbm.Spots} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.destroyItems = function() { return new sap.ui.vbm.Spots(); };

/**
 * Creates a new subclass of class sap.ui.vbm.Spots with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.vbm.VoAggregation.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.Spots.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>dragSource</code>.
 * 
 * DragSource aggregation
 * @returns {sap.ui.vbm.DragSource[]}
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.getDragSource = function() { return new Array(); };

/**
 * Gets content of aggregation <code>dropTarget</code>.
 * 
 * DropTarget aggregation
 * @returns {sap.ui.vbm.DropTarget[]}
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.getDropTarget = function() { return new Array(); };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * spot object aggregation
 * @returns {sap.ui.vbm.Spot[]}
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.vbm.Spots.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.Spots.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>posChangeable</code>.
 * 
 * Set to true if position may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>posChangeable</code>
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.getPosChangeable = function() { return false; };

/**
 * Gets current value of property <code>scaleChangeable</code>.
 * 
 * Set to true if scale may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>scaleChangeable</code>
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.getScaleChangeable = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.vbm.DragSource</code> in the aggregation <code>dragSource</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DragSource}
 *           oDragSource The dragSource whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.indexOfDragSource = function(oDragSource) { return 0; };

/**
 * Checks for the provided <code>sap.ui.vbm.DropTarget</code> in the aggregation <code>dropTarget</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.DropTarget}
 *           oDropTarget The dropTarget whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.indexOfDropTarget = function(oDropTarget) { return 0; };

/**
 * Checks for the provided <code>sap.ui.vbm.Spot</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.vbm.Spot}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a dragSource into the aggregation <code>dragSource</code>.
 * @param {sap.ui.vbm.DragSource}
 *            oDragSource the dragSource to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the dragSource should be inserted at; for
 *              a negative value of <code>iIndex</code>, the dragSource is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the dragSource is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Spots} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.insertDragSource = function(oDragSource,iIndex) { return new sap.ui.vbm.Spots(); };

/**
 * Inserts a dropTarget into the aggregation <code>dropTarget</code>.
 * @param {sap.ui.vbm.DropTarget}
 *            oDropTarget the dropTarget to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the dropTarget should be inserted at; for
 *              a negative value of <code>iIndex</code>, the dropTarget is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the dropTarget is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Spots} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.insertDropTarget = function(oDropTarget,iIndex) { return new sap.ui.vbm.Spots(); };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.ui.vbm.Spot}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.vbm.Spots} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.vbm.Spots(); };

/**
 * Removes all the controls from the aggregation <code>dragSource</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.DragSource[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.removeAllDragSource = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>dropTarget</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.DropTarget[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.removeAllDropTarget = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.vbm.Spot[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a dragSource from the aggregation <code>dragSource</code>.
 * @param {int | string | sap.ui.vbm.DragSource} vDragSource The dragSourceto remove or its index or id
 * @returns {sap.ui.vbm.DragSource} The removed dragSource or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.removeDragSource = function(vDragSource) { return new sap.ui.vbm.DragSource(); };

/**
 * Removes a dropTarget from the aggregation <code>dropTarget</code>.
 * @param {int | string | sap.ui.vbm.DropTarget} vDropTarget The dropTargetto remove or its index or id
 * @returns {sap.ui.vbm.DropTarget} The removed dropTarget or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.removeDropTarget = function(vDropTarget) { return new sap.ui.vbm.DropTarget(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.ui.vbm.Spot} vItem The itemto remove or its index or id
 * @returns {sap.ui.vbm.Spot} The removed item or <code>null</code>
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.removeItem = function(vItem) { return new sap.ui.vbm.Spot(); };

/**
 * Sets a new value for property <code>posChangeable</code>.
 * 
 * Set to true if position may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bPosChangeable New value for property <code>posChangeable</code>
 * @returns {sap.ui.vbm.Spots} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.setPosChangeable = function(bPosChangeable) { return new sap.ui.vbm.Spots(); };

/**
 * Sets a new value for property <code>scaleChangeable</code>.
 * 
 * Set to true if scale may be changed at runtime. The actual changeability is control on each aggregated element with property
 * <i>changeable</i>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bScaleChangeable New value for property <code>scaleChangeable</code>
 * @returns {sap.ui.vbm.Spots} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.Spots.prototype.setScaleChangeable = function(bScaleChangeable) { return new sap.ui.vbm.Spots(); };


// ---- sap.ui.vbm.VBI --------------------------------------------------------------------------

/**
 * Constructor for a new VBI.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 800px)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 600px)</li>
 * <li>{@link #getConfig config} : object</li>
 * <li>{@link #getPlugin plugin} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:submit submit} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:thumbnailClick thumbnailClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:render render} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:changeTrackingMode changeTrackingMode} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:zoom zoom} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:move move} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:openWindow openWindow} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:closeWindow closeWindow} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The VBI control. This is the Visual Business base control, which is mainly intended to communicate directly with the Visual Business
 *        Backend API in a proprietary JSON format. This control should not be used directly in a client side application. For this the control
 *        extension <a href="sap.ui.vbm.GeoMap.html">sap.ui.vbm.GeoMap</a> is recommended.<br>
 *        The main or high level API of the VBI control is made of
 *        <ul>
 *        <li>method <i>load</i> for sending JSON to the control for processing, and</li>
 *        <li>event <i>submit</i> returning a result JSON as parameter data containing actual event information and changed data.</li>
 *        </ul>
 *        Further the high level API provides the thumbnail support.<br>
 *        Additionally the control offers a low level API made of several events, like render, zoom, move and so on, which allow to render
 *        application specific content directly on the controls canvas.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VBI = function(sId,mSettings) {};
/**
 * Low level API. Tracking mode is set or reset. This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.mode tracking mode to set or reset
 * @param {boolean} oControlEvent.getParameters.bSet set or reset the mode
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.changeTrackingMode = function(oControlEvent) {  };

/**
 * The event is raised raised before a Visual Business window is closed. This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.contentarea Div placeholder for content.
 * @param {string} oControlEvent.getParameters.id ID of the window that is closed.
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.closeWindow = function(oControlEvent) {  };

/**
 * Low level API. The canvas was moved. This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas Canvas object to render into.
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.move = function(oControlEvent) {  };

/**
 * The event is raised raised before a Visual Business window is opened. It is intended to be used to place arbitrary content in e.g.
 * a Detail Window. This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.contentarea Div placeholder to render into.
 * @param {string} oControlEvent.getParameters.id ID of the window that is opened.
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.openWindow = function(oControlEvent) {  };

/**
 * Low level API. Rendering of the canvas content is reqested. This event can be used to do custom rendering into the Visual Business
 * overlay canvas. This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas Canvas object to render into.
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.render = function(oControlEvent) {  };

/**
 * High level API. Submit event is raised.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.data JSON (or possibly XML and case the plugin is used) string describing the delta state of Visual Business and the information
 * about the event.
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.submit = function(oControlEvent) {  };

/**
 * High level API. ThumbnailClick event is raised.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.pos Geo coordinates in format "lon;lat;0"
 * @param {int} oControlEvent.getParameters.zoomLevel Level of detail.
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.thumbnailClick = function(oControlEvent) {  };

/**
 * Low level API. The canvas is zoomed. This function is not supported in plugin mode.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.canvas Canvas object to render into
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.zoom = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>changeTrackingMode</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VBI</code> itself.
 * 
 * Low level API. Tracking mode is set or reset. This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code> itself
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachChangeTrackingMode = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>closeWindow</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VBI</code> itself.
 * 
 * The event is raised raised before a Visual Business window is closed. This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code> itself
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachCloseWindow = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>move</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VBI</code> itself.
 * 
 * Low level API. The canvas was moved. This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code> itself
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachMove = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>openWindow</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VBI</code> itself.
 * 
 * The event is raised raised before a Visual Business window is opened. It is intended to be used to place arbitrary content in e.g.
 * a Detail Window. This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code> itself
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachOpenWindow = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>render</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VBI</code> itself.
 * 
 * Low level API. Rendering of the canvas content is reqested. This event can be used to do custom rendering into the Visual Business
 * overlay canvas. This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code> itself
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachRender = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>submit</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VBI</code> itself.
 * 
 * High level API. Submit event is raised.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code> itself
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachSubmit = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>thumbnailClick</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VBI</code> itself.
 * 
 * High level API. ThumbnailClick event is raised.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code> itself
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachThumbnailClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>zoom</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VBI</code> itself.
 * 
 * Low level API. The canvas is zoomed. This function is not supported in plugin mode.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VBI</code> itself
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.attachZoom = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>changeTrackingMode</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachChangeTrackingMode = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>closeWindow</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachCloseWindow = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>move</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachMove = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>openWindow</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachOpenWindow = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>render</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachRender = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>submit</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachSubmit = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>thumbnailClick</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachThumbnailClick = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>zoom</code> event of this <code>sap.ui.vbm.VBI</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.detachZoom = function(fnFunction,oListener) { return new sap.ui.vbm.VBI(); };

/**
 * Creates a new subclass of class sap.ui.vbm.VBI with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.VBI.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>changeTrackingMode</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>mode</code> of type <code>int</code>tracking mode to set or reset</li>
 * <li><code>bSet</code> of type <code>boolean</code>set or reset the mode</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireChangeTrackingMode = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * Fires event <code>closeWindow</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>contentarea</code> of type <code>object</code>Div placeholder for content.</li>
 * <li><code>id</code> of type <code>string</code>ID of the window that is closed.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireCloseWindow = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * Fires event <code>move</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>canvas</code> of type <code>object</code>Canvas object to render into.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireMove = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * Fires event <code>openWindow</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>contentarea</code> of type <code>object</code>Div placeholder to render into.</li>
 * <li><code>id</code> of type <code>string</code>ID of the window that is opened.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireOpenWindow = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * Fires event <code>render</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>canvas</code> of type <code>object</code>Canvas object to render into.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireRender = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * Fires event <code>submit</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>data</code> of type <code>string</code>JSON (or possibly XML and case the plugin is used) string describing the delta state of Visual Business and the information
 * about the event.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireSubmit = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * Fires event <code>thumbnailClick</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>pos</code> of type <code>string</code>Geo coordinates in format "lon;lat;0"</li>
 * <li><code>zoomLevel</code> of type <code>int</code>Level of detail.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireThumbnailClick = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * Fires event <code>zoom</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>canvas</code> of type <code>object</code>Canvas object to render into</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VBI.prototype.fireZoom = function(mArguments) { return new sap.ui.vbm.VBI(); };

/**
 * Gets current value of property <code>config</code>.
 * 
 * This is the model configuration. Usually the Visual Business application is provided by this property. Nevertheless the property
 * can be used for data binding to the inner Visual Business data model.
 * @returns {object} Value of property <code>config</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getConfig = function() { return new Object(); };

/**
 * Gets current value of property <code>height</code>.
 * 
 * Set the height of the control.
 * 
 * Default value is <code>600px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Retrieve information on a specific cluster object . Type : 0 : contained VOs 1 : child clusters (tree clustering only) 2 : parent Node (tree
 * clustering only) 10 : Information on Node 11 : Edges of the Voronoi Area (tree clustering only, not merged with rectangle)
 * @param {string} sIdent Cluster Id
 * @param {sap.ui.vbm.ClusterInfoType} iType Type of information which should be returned
 * @returns {oClusterInfo} Cluster Info Object with requested info according to given Cluster Info Type
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VBI.prototype.getInfoForCluster = function(sIdent,iType) { return null; };

/**
 * Returns a metadata object for class sap.ui.vbm.VBI.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.VBI.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns a Screenshot of the Overlay. Please note that the map cannot be included due to browser restrictions. Function returns the visible part
 * of the Canvas excluding map, copyright info, navigation control, scaler, legend, detail windows, container elements. Analytic Maps are returned
 * as they are not treated as "maps" internally. Modes 2 & 3 are experimental, trying to load the map (this may work on inhouse servers with
 * adapted settings, standard configurations should fail)
 * @param {int} [iMode] 0: Overlay only; 1 (default) and 3: include Labels; 2 and 3: try to include maps (will return "" if not possible)
 * @returns {string} Base64 encoded picture (PNG format) on success, "" otherwise
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VBI.prototype.getPicOfOverlay = function(iMode) { return ""; };

/**
 * Gets current value of property <code>plugin</code>.
 * 
 * When true, the ActiveX plugin version of Visual Business will be used for rendering. For that the plugin needs to be installed on
 * the client. Default (false) the control renders on canvas.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>plugin</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getPlugin = function() { return false; };

/**
 * Gets current value of property <code>width</code>.
 * 
 * Set the width of the control.
 * 
 * Default value is <code>800px</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * High level load function. The function accepts a json string or an already parsed json object. This can be a Visual Business application, any
 * delta operations on the application or other hierachical data that can be mapped by the Visual Business data provider to the inner Visual
 * Business data context.
 * @param {string} dat Application JSON to process
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VBI.prototype.load = function(dat) { return null; };

/**
 * Maximize from Thumbnail.
 * @param {int} [iFullWidth] Width of the underlying VBI control. If ommitted current width is taken
 * @param {int} [iFullHeight] Height of the underlying control. If ommitted current width is taken
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VBI.prototype.maximize = function(iFullWidth,iFullHeight) { return null; };

/**
 * Minimize to Thumbnail.
 * @param {int} iNewWidth Width of the thumbnail
 * @param {int} iNewHeight Height of the thumbnail
 * @param {int} [iFullWidth] Width of the underlying VBI control. If ommitted or zero, current width is taken
 * @param {int} [iFullHeight] Height of the underlying control. If ommitted or zero, current width is taken
 * @param {string} [font] Font to be used for text added to the thumbnail
 * @param {string} [fontCol] Color for the thumbnailtext
 * @param {int} [fontPos] Position (0 - 8) of the text within the thumbnail
 * @param {string} [text] text to be shown
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VBI.prototype.minimize = function(iNewWidth,iNewHeight,iFullWidth,iFullHeight,font,fontCol,fontPos,text) { return null; };

/**
 * Sets a new value for property <code>config</code>.
 * 
 * This is the model configuration. Usually the Visual Business application is provided by this property. Nevertheless the property
 * can be used for data binding to the inner Visual Business data model.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oConfig New value for property <code>config</code>
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setConfig = function(oConfig) { return new sap.ui.vbm.VBI(); };

/**
 * Sets a new value for property <code>height</code>.
 * 
 * Set the height of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>600px</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setHeight = function(sHeight) { return new sap.ui.vbm.VBI(); };

/**
 * Sets a new value for property <code>plugin</code>.
 * 
 * When true, the ActiveX plugin version of Visual Business will be used for rendering. For that the plugin needs to be installed on
 * the client. Default (false) the control renders on canvas.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPlugin New value for property <code>plugin</code>
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setPlugin = function(bPlugin) { return new sap.ui.vbm.VBI(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * Set the width of the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>800px</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.vbm.VBI} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VBI.prototype.setWidth = function(sWidth) { return new sap.ui.vbm.VBI(); };

/**
 * Zoom to one or multiple Areas. This function works only for the main geo scene in the Visual Business control.
 * @param {array} aAreaList List of Area Ids to zoom to.
 * @param {float} corr . This correction factor deals with the space which is reserved to the div borders.
 * The Correction factor can be expressed either in a fracture (e.g. 0.9, this means 10% space to the borders)
 * or array of pixel values (order left, top, right, bottom) for the added margin of the calculated zoom area, e.g. [450,150,0,0]
 * which keeps a left border of 450 pixels and a top border of 150 pixels.
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VBI.prototype.zoomToAreas = function(aAreaList,corr) { return null; };

/**
 * Zoom to one or multiple geo positions. This function works only for the main geo scene in the Visual Business control.
 * @param {float} fLon Longitude in degrees. This can also be an array of longitude values.
 * @param {float} fLat Latitude in degrees. This can also be an array of latitude values.
 * @param {int} iLod Level of detail, usually between 0 and 20. This will be limited by the map provider capabilities.
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VBI.prototype.zoomToGeoPosition = function(fLon,fLat,iLod) { return null; };


// ---- sap.ui.vbm.VoAbstract --------------------------------------------------------------------------

/**
 * Constructor for a new VoAbstract.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Abstract VO aggregation container. This element implements the common part for all specific VO aggregations. It must not be used
 *        directly, but is the base for further extension.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VoAbstract = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.vbm.VoAbstract with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.VoAbstract.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.vbm.VoAbstract.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.VoAbstract.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Open a context menu
 * @param {string} sType Type of VO
 * @param {sap.ui.vbm.VoBase} oVoInst VO instance for which the Detail Window should be opened
 * @param {sap.ui.unified.Menu} oMenu the context menu to be opened
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VoAbstract.prototype.openContextMenu = function(sType,oVoInst,oMenu) { return null; };


// ---- sap.ui.vbm.VoAggregation --------------------------------------------------------------------------

/**
 * Constructor for a new VoAggregation.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getMinSel minSel} : string (default: 0)</li>
 * <li>{@link #getMaxSel maxSel} : string (default: n)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:handleMoved handleMoved} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:handleContextMenu handleContextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:handleClick handleClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:deselect deselect} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Abstract VO aggregation container. This element implements the common part for all specific VO aggregations. It must not be used
 *        directly, but is the base for further extension.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VoAggregation = function(sId,mSettings) {};
/**
 * The event is raised when there is a click action on a Spot.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.vbm.VoBase} oControlEvent.getParameters.instance Clicked instance
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.click = function(oControlEvent) {  };

/**
 * The event is raised when there is a right click or a tap and hold action on a Spot.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.vbm.VoBase} oControlEvent.getParameters.instance Clicked instance
 * @param {sap.ui.unified.Menu} oControlEvent.getParameters.menu Menu to open
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.contextMenu = function(oControlEvent) {  };

/**
 * This event is raised when aggregated elements get deselected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {array} oControlEvent.getParameters.deselected Array of deselected VOs
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.deselect = function(oControlEvent) {  };

/**
 * The event is raised when something is dropped on a Spot.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.vbm.Spot} oControlEvent.getParameters.instance Drop target instance
 * @param {sap.ui.vbm.VoBase} oControlEvent.getParameters.dragSource Dragged instance
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.drop = function(oControlEvent) {  };

/**
 * This event is raised when a Design handle is clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.vbm.VoBase} oControlEvent.getParameters.instance Clicked instance
 * @param {int} oControlEvent.getParameters.handle The number of the handle where the click occured. Handles are numbered zero based.
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.handleClick = function(oControlEvent) {  };

/**
 * This event is raised when a Design handle is right clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.vbm.VoBase} oControlEvent.getParameters.instance Clicked instance
 * @param {sap.ui.unified.Menu} oControlEvent.getParameters.menu Menu to open
 * @param {int} oControlEvent.getParameters.handle The number of the handle where the click occured. Handles are numbered zero based.
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.handleContextMenu = function(oControlEvent) {  };

/**
 * This event is raised when a Design handle is moved.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.vbm.VoBase} oControlEvent.getParameters.instance Clicked instance
 * @param {int} oControlEvent.getParameters.handle The number of the handle where the click occured. Handles are numbered zero based.
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.handleMoved = function(oControlEvent) {  };

/**
 * This event is raised when aggregated elements get selected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {array} oControlEvent.getParameters.selected Array of selected VOs
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.select = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>click</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VoAggregation</code> itself.
 * 
 * The event is raised when there is a click action on a Spot.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoAggregation</code> itself
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>contextMenu</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VoAggregation</code> itself.
 * 
 * The event is raised when there is a right click or a tap and hold action on a Spot.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoAggregation</code> itself
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>deselect</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VoAggregation</code> itself.
 * 
 * This event is raised when aggregated elements get deselected
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoAggregation</code> itself
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.attachDeselect = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>drop</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VoAggregation</code> itself.
 * 
 * The event is raised when something is dropped on a Spot.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoAggregation</code> itself
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>handleClick</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VoAggregation</code> itself.
 * 
 * This event is raised when a Design handle is clicked.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoAggregation</code> itself
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.attachHandleClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>handleContextMenu</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VoAggregation</code> itself.
 * 
 * This event is raised when a Design handle is right clicked.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoAggregation</code> itself
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.attachHandleContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>handleMoved</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VoAggregation</code> itself.
 * 
 * This event is raised when a Design handle is moved.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoAggregation</code> itself
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.attachHandleMoved = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VoAggregation</code> itself.
 * 
 * This event is raised when aggregated elements get selected
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoAggregation</code> itself
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>click</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>contextMenu</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>deselect</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.detachDeselect = function(fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>drop</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>handleClick</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.detachHandleClick = function(fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>handleContextMenu</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.detachHandleContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>handleMoved</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.detachHandleMoved = function(fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this <code>sap.ui.vbm.VoAggregation</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Creates a new subclass of class sap.ui.vbm.VoAggregation with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.VoAggregation.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>click</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>instance</code> of type <code>sap.ui.vbm.VoBase</code>Clicked instance</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoAggregation.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Fires event <code>contextMenu</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>instance</code> of type <code>sap.ui.vbm.VoBase</code>Clicked instance</li>
 * <li><code>menu</code> of type <code>sap.ui.unified.Menu</code>Menu to open</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoAggregation.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Fires event <code>deselect</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>deselected</code> of type <code>array</code>Array of deselected VOs</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoAggregation.prototype.fireDeselect = function(mArguments) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Fires event <code>drop</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>instance</code> of type <code>sap.ui.vbm.Spot</code>Drop target instance</li>
 * <li><code>dragSource</code> of type <code>sap.ui.vbm.VoBase</code>Dragged instance</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoAggregation.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Fires event <code>handleClick</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>instance</code> of type <code>sap.ui.vbm.VoBase</code>Clicked instance</li>
 * <li><code>handle</code> of type <code>int</code>The number of the handle where the click occured. Handles are numbered zero based.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoAggregation.prototype.fireHandleClick = function(mArguments) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Fires event <code>handleContextMenu</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>instance</code> of type <code>sap.ui.vbm.VoBase</code>Clicked instance</li>
 * <li><code>menu</code> of type <code>sap.ui.unified.Menu</code>Menu to open</li>
 * <li><code>handle</code> of type <code>int</code>The number of the handle where the click occured. Handles are numbered zero based.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoAggregation.prototype.fireHandleContextMenu = function(mArguments) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Fires event <code>handleMoved</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>instance</code> of type <code>sap.ui.vbm.VoBase</code>Clicked instance</li>
 * <li><code>handle</code> of type <code>int</code>The number of the handle where the click occured. Handles are numbered zero based.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoAggregation.prototype.fireHandleMoved = function(mArguments) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Fires event <code>select</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>selected</code> of type <code>array</code>Array of selected VOs</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoAggregation.prototype.fireSelect = function(mArguments) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Gets current value of property <code>maxSel</code>.
 * 
 * Selection cardinality: maximum selectable elements ( valid values are "0", "1", and "n" )
 * 
 * Default value is <code>n</code>.
 * @returns {string} Value of property <code>maxSel</code>
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.getMaxSel = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.vbm.VoAggregation.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.VoAggregation.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>minSel</code>.
 * 
 * Selection cardinality: minimum selected elements ("0" or "1" )
 * 
 * Default value is <code>0</code>.
 * @returns {string} Value of property <code>minSel</code>
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.getMinSel = function() { return ""; };

/**
 * Open a Detail Window
 * @param {sap.ui.vbm.VoBase} oVoInst VO instance for which the Detail Window should be opened
 * @param {object} oParams Parameter object
 * @param {string} oParams.caption Text for Detail Window caption
 * @param {string} oParams.offsetX position offset in x-direction from the anchor point
 * @param {string} oParams.offsetY position offset in y-direction from the anchor point
 * @param {boolean} bUseClickPos Indicates whether the Detail Window should be located at the click position or object position
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VoAggregation.prototype.openDetailWindow = function(oVoInst,oParams,bUseClickPos) { return null; };

/**
 * Sets a new value for property <code>maxSel</code>.
 * 
 * Selection cardinality: maximum selectable elements ( valid values are "0", "1", and "n" )
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>n</code>.
 * @param {string} sMaxSel New value for property <code>maxSel</code>
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.setMaxSel = function(sMaxSel) { return new sap.ui.vbm.VoAggregation(); };

/**
 * Sets a new value for property <code>minSel</code>.
 * 
 * Selection cardinality: minimum selected elements ("0" or "1" )
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {string} sMinSel New value for property <code>minSel</code>
 * @returns {sap.ui.vbm.VoAggregation} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoAggregation.prototype.setMinSel = function(sMinSel) { return new sap.ui.vbm.VoAggregation(); };


// ---- sap.ui.vbm.VoBase --------------------------------------------------------------------------

/**
 * Constructor for a new VoBase.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getHotScale hotScale} : string (default: 1.0;1.0;1.0)</li>
 * <li>{@link #getHotDeltaColor hotDeltaColor} : string (default: RHLSA(0;1.3;1.0;1.0))</li>
 * <li>{@link #getSelectColor selectColor} : string (default: RHLSA(0.0;1.0;1.0;1.0))</li>
 * <li>{@link #getFxsize fxsize} : string (default: true)</li>
 * <li>{@link #getFxdir fxdir} : string (default: true)</li>
 * <li>{@link #getEntity entity} : string</li>
 * <li>{@link #getLabelText labelText} : string</li>
 * <li>{@link #getLabelType labelType} : sap.ui.vbm.SemanticType (default: None)</li>
 * <li>{@link #getLabelBgColor labelBgColor} : string (default: RGB(255;255;255))</li>
 * <li>{@link #getLabelBorderColor labelBorderColor} : string</li>
 * <li>{@link #getLabelArrow labelArrow} : boolean (default: false)</li>
 * <li>{@link #getLabelPos labelPos} : string</li>
 * <li>{@link #getChangeable changeable} : boolean (default: false)</li>
 * <li>{@link #getDragData dragData} : string</li>
 * <li>{@link #getSelect select} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:click click} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:contextMenu contextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:handleMoved handleMoved} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:handleContextMenu handleContextMenu} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:handleClick handleClick} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:drop drop} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Abstract aggregation element for VO aggregations. This element implements the common part for all specific VO elements. It must not be
 *        used directly, but is the base for further extension.<br>
 *        As a common feature it provides the Label, which may be attached to any visual object. There are two modes for using labels:
 *        <ul>
 *        <li>A controlled mode by providing a label type. In this mode most parameters for the label are automatically set by programmed
 *        defaults according to the Fiori guidelines.</li>
 *        <li>A freestyle mode, providing the full control on colors and layout.</li>
 *        </ul>
 *        Further all visual objects have common edit capabilities and it is possible to drop content on visual objects.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VoBase = function(sId,mSettings) {};
/**
 * The event is raised when there is a click action on a visual object.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.click = function(oControlEvent) {  };

/**
 * The event is raised when there is a right click or a tap and hold action on a visual object.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.unified.Menu} oControlEvent.getParameters.menu Menu to open
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.contextMenu = function(oControlEvent) {  };

/**
 * The event is raised when something is dropped on the object.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.vbm.VoBase} oControlEvent.getParameters.dragSource Dragged instance
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.drop = function(oControlEvent) {  };

/**
 * This event is raised when the design handle is clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.handle The number of the handle where the click occured. Handles are numbered zero based.
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.handleClick = function(oControlEvent) {  };

/**
 * This event is raised when the design handle is right clicked.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.handle The number of the handle where the click occured. Handles are numbered zero based.
 * @param {sap.ui.unified.Menu} oControlEvent.getParameters.menu Menu to open
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.handleContextMenu = function(oControlEvent) {  };

/**
 * This event is raised when the design handle is moved.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {int} oControlEvent.getParameters.handle The number of the handle where the click occured. Handles are numbered zero based.
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.handleMoved = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>click</code> event of this <code>sap.ui.vbm.VoBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VoBase</code> itself.
 * 
 * The event is raised when there is a click action on a visual object.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoBase</code> itself
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.attachClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>contextMenu</code> event of this <code>sap.ui.vbm.VoBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VoBase</code> itself.
 * 
 * The event is raised when there is a right click or a tap and hold action on a visual object.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoBase</code> itself
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.attachContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>drop</code> event of this <code>sap.ui.vbm.VoBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VoBase</code> itself.
 * 
 * The event is raised when something is dropped on the object.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoBase</code> itself
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.attachDrop = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>handleClick</code> event of this <code>sap.ui.vbm.VoBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VoBase</code> itself.
 * 
 * This event is raised when the design handle is clicked.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoBase</code> itself
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.attachHandleClick = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>handleContextMenu</code> event of this <code>sap.ui.vbm.VoBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VoBase</code> itself.
 * 
 * This event is raised when the design handle is right clicked.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoBase</code> itself
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.attachHandleContextMenu = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>handleMoved</code> event of this <code>sap.ui.vbm.VoBase</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.vbm.VoBase</code> itself.
 * 
 * This event is raised when the design handle is moved.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.vbm.VoBase</code> itself
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.attachHandleMoved = function(oData,fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>click</code> event of this <code>sap.ui.vbm.VoBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.detachClick = function(fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>contextMenu</code> event of this <code>sap.ui.vbm.VoBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.detachContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>drop</code> event of this <code>sap.ui.vbm.VoBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.detachDrop = function(fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>handleClick</code> event of this <code>sap.ui.vbm.VoBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.detachHandleClick = function(fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>handleContextMenu</code> event of this <code>sap.ui.vbm.VoBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.detachHandleContextMenu = function(fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>handleMoved</code> event of this <code>sap.ui.vbm.VoBase</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.detachHandleMoved = function(fnFunction,oListener) { return new sap.ui.vbm.VoBase(); };

/**
 * Creates a new subclass of class sap.ui.vbm.VoBase with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.vbm.VoBase.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>click</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoBase.prototype.fireClick = function(mArguments) { return new sap.ui.vbm.VoBase(); };

/**
 * Fires event <code>contextMenu</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>menu</code> of type <code>sap.ui.unified.Menu</code>Menu to open</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoBase.prototype.fireContextMenu = function(mArguments) { return new sap.ui.vbm.VoBase(); };

/**
 * Fires event <code>drop</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>dragSource</code> of type <code>sap.ui.vbm.VoBase</code>Dragged instance</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoBase.prototype.fireDrop = function(mArguments) { return new sap.ui.vbm.VoBase(); };

/**
 * Fires event <code>handleClick</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>handle</code> of type <code>int</code>The number of the handle where the click occured. Handles are numbered zero based.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoBase.prototype.fireHandleClick = function(mArguments) { return new sap.ui.vbm.VoBase(); };

/**
 * Fires event <code>handleContextMenu</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>handle</code> of type <code>int</code>The number of the handle where the click occured. Handles are numbered zero based.</li>
 * <li><code>menu</code> of type <code>sap.ui.unified.Menu</code>Menu to open</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoBase.prototype.fireHandleContextMenu = function(mArguments) { return new sap.ui.vbm.VoBase(); };

/**
 * Fires event <code>handleMoved</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>handle</code> of type <code>int</code>The number of the handle where the click occured. Handles are numbered zero based.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.vbm.VoBase.prototype.fireHandleMoved = function(mArguments) { return new sap.ui.vbm.VoBase(); };

/**
 * Gets current value of property <code>changeable</code>.
 * 
 * Set to true if VO is changeable. Which properties are actually changeable can be controlled on the related VO aggregation.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>changeable</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getChangeable = function() { return false; };

/**
 * Gets current value of property <code>dragData</code>.
 * 
 * Data to be dragged. This property allows you to provide an arbitrary data string, which is transfered to the target in a drag'n
 * drop operation
 * @returns {string} Value of property <code>dragData</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getDragData = function() { return ""; };

/**
 * Gets current value of property <code>entity</code>.
 * 
 * The visual object builds an entity/group with other VO elements when it is hovered. The property is not supported when the PlugIn
 * is used.
 * @returns {string} Value of property <code>entity</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getEntity = function() { return ""; };

/**
 * Gets current value of property <code>fxdir</code>.
 * 
 * The visual object is not rotated when the map is rotated. The property is only required when the PlugIn is used and only meaningful
 * for some VOs.
 * 
 * Default value is <code>true</code>.
 * @returns {string} Value of property <code>fxdir</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getFxdir = function() { return ""; };

/**
 * Gets current value of property <code>fxsize</code>.
 * 
 * The visual object should keep its size when the map is zoomed. Default value is 'true'. Only meaningful for some VOs.
 * 
 * Default value is <code>true</code>.
 * @returns {string} Value of property <code>fxsize</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getFxsize = function() { return ""; };

/**
 * Gets current value of property <code>hotDeltaColor</code>.
 * 
 * Color change applied when visual object is hovered. The format is
 * RHLSA(&lt;hue&gt;;&lt;lightness&gt;;&lt;saturation&gt;;&lt;opacity&gt;). The hue shift is given in degree (0 to 360). The other
 * parameters are given as multipliers, where 1 means the component remains unchanged.<br>
 * Beside the delta color approach it is also possible to specify an absolute color in the usual CSS color formats (except named
 * colors).
 * 
 * Default value is <code>RHLSA(0;1.3;1.0;1.0)</code>.
 * @returns {string} Value of property <code>hotDeltaColor</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getHotDeltaColor = function() { return ""; };

/**
 * Gets current value of property <code>hotScale</code>.
 * 
 * Scaling factor applied when visual object is hovered. This is only supported on selected VOs, which do not present a defined geo
 * area.
 * 
 * Default value is <code>1.0;1.0;1.0</code>.
 * @returns {string} Value of property <code>hotScale</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getHotScale = function() { return ""; };

/**
 * Gets current value of property <code>key</code>.
 * 
 * Unique identifier for the object. This is optional. If not provided the default identifier sId is used. However, sId is generated
 * if template binding is used and thus it is not stable. Provide the key if the object really needs to have a unique and stable
 * identifier.
 * @returns {string} Value of property <code>key</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getKey = function() { return ""; };

/**
 * Gets current value of property <code>labelArrow</code>.
 * 
 * The visual objects label arrow. For left/right/top/bottom aligned labels an additional arrow points to the label's object.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>labelArrow</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getLabelArrow = function() { return false; };

/**
 * Gets current value of property <code>labelBgColor</code>.
 * 
 * The visual objects label background color. The default value is white.
 * 
 * Default value is <code>RGB(255;255;255)</code>.
 * @returns {string} Value of property <code>labelBgColor</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getLabelBgColor = function() { return ""; };

/**
 * Gets current value of property <code>labelBorderColor</code>.
 * 
 * The visual objects label border color. The default is no border.
 * @returns {string} Value of property <code>labelBorderColor</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getLabelBorderColor = function() { return ""; };

/**
 * Gets current value of property <code>labelPos</code>.
 * 
 * The visual objects label position. This property determines the positioning of the label relative to the VO it belongs to. The
 * property is only respected for single position based VOs. Possible values are:
 * <ul>
 * <li>0: centered</li>
 * <li>1: top</li>
 * <li>2: top right</li>
 * <li>3: right</li>
 * <li>4: bottom right</li>
 * <li>5: bottom</li>
 * <li>6: bottom left</li>
 * <li>7: left</li>
 * <li>8: top left</li>
 * </ul>
 * The default alignment is VO specific. <br>
 * For multiple position based VOs, like Route, or Area the label is dynamically positioned. If the current display of a VO consists
 * of multiple disconnected parts, each part gets an own label.
 * @returns {string} Value of property <code>labelPos</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getLabelPos = function() { return ""; };

/**
 * Gets current value of property <code>labelText</code>.
 * 
 * The visual objects label text. Providing a label text required, but also sufficient the get a label displayed.
 * @returns {string} Value of property <code>labelText</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getLabelText = function() { return ""; };

/**
 * Gets current value of property <code>labelType</code>.
 * 
 * Type for semantic labels. A given semantic type will overrule color settings and add an icon.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.ui.vbm.SemanticType} Value of property <code>labelType</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getLabelType = function() { return new sap.ui.vbm.SemanticType(); };

/**
 * Returns a metadata object for class sap.ui.vbm.VoBase.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.vbm.VoBase.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>select</code>.
 * 
 * Set to true if the element is selected
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>select</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getSelect = function() { return false; };

/**
 * Gets current value of property <code>selectColor</code>.
 * 
 * Color change applied when visual object is selected. This can be explicit or a relative one. See above.
 * 
 * Default value is <code>RHLSA(0.0;1.0;1.0;1.0)</code>.
 * @returns {string} Value of property <code>selectColor</code>
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.getSelectColor = function() { return ""; };

/**
 * Open the context menu. The method relies on the state saved before firing event <i>contextMenu</i>. Further the object oMenu is expected to be
 * the one given as parameter <i>menu</i> of event <i>contextMenu</i>.
 * @param {object} oMenu The context menu to be opened. The object is expected the have an attribute
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VoBase.prototype.openContextMenu = function(oMenu) { return null; };

/**
 * Open a Detail Window for the visual object at click position. The method relies on the state saved before firing event <i>click</i>.
 * @param {string} sCaption Caption of detail window
 * @param {string} sOffsetX Position offset in x-direction from the anchor point
 * @param {string} sOffsetY Position offset in y-direction from the anchor point
 * @returns {void}
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.vbm.VoBase.prototype.openDetailWindow = function(sCaption,sOffsetX,sOffsetY) { return null; };

/**
 * Sets a new value for property <code>changeable</code>.
 * 
 * Set to true if VO is changeable. Which properties are actually changeable can be controlled on the related VO aggregation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bChangeable New value for property <code>changeable</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setChangeable = function(bChangeable) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>dragData</code>.
 * 
 * Data to be dragged. This property allows you to provide an arbitrary data string, which is transfered to the target in a drag'n
 * drop operation
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sDragData New value for property <code>dragData</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setDragData = function(sDragData) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>entity</code>.
 * 
 * The visual object builds an entity/group with other VO elements when it is hovered. The property is not supported when the PlugIn
 * is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sEntity New value for property <code>entity</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setEntity = function(sEntity) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>fxdir</code>.
 * 
 * The visual object is not rotated when the map is rotated. The property is only required when the PlugIn is used and only meaningful
 * for some VOs.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {string} sFxdir New value for property <code>fxdir</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setFxdir = function(sFxdir) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>fxsize</code>.
 * 
 * The visual object should keep its size when the map is zoomed. Default value is 'true'. Only meaningful for some VOs.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {string} sFxsize New value for property <code>fxsize</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setFxsize = function(sFxsize) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>hotDeltaColor</code>.
 * 
 * Color change applied when visual object is hovered. The format is
 * RHLSA(&lt;hue&gt;;&lt;lightness&gt;;&lt;saturation&gt;;&lt;opacity&gt;). The hue shift is given in degree (0 to 360). The other
 * parameters are given as multipliers, where 1 means the component remains unchanged.<br>
 * Beside the delta color approach it is also possible to specify an absolute color in the usual CSS color formats (except named
 * colors).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>RHLSA(0;1.3;1.0;1.0)</code>.
 * @param {string} sHotDeltaColor New value for property <code>hotDeltaColor</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setHotDeltaColor = function(sHotDeltaColor) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>hotScale</code>.
 * 
 * Scaling factor applied when visual object is hovered. This is only supported on selected VOs, which do not present a defined geo
 * area.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1.0;1.0;1.0</code>.
 * @param {string} sHotScale New value for property <code>hotScale</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setHotScale = function(sHotScale) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>key</code>.
 * 
 * Unique identifier for the object. This is optional. If not provided the default identifier sId is used. However, sId is generated
 * if template binding is used and thus it is not stable. Provide the key if the object really needs to have a unique and stable
 * identifier.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setKey = function(sKey) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>labelArrow</code>.
 * 
 * The visual objects label arrow. For left/right/top/bottom aligned labels an additional arrow points to the label's object.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLabelArrow New value for property <code>labelArrow</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setLabelArrow = function(bLabelArrow) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>labelBgColor</code>.
 * 
 * The visual objects label background color. The default value is white.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>RGB(255;255;255)</code>.
 * @param {string} sLabelBgColor New value for property <code>labelBgColor</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setLabelBgColor = function(sLabelBgColor) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>labelBorderColor</code>.
 * 
 * The visual objects label border color. The default is no border.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sLabelBorderColor New value for property <code>labelBorderColor</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setLabelBorderColor = function(sLabelBorderColor) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>labelPos</code>.
 * 
 * The visual objects label position. This property determines the positioning of the label relative to the VO it belongs to. The
 * property is only respected for single position based VOs. Possible values are:
 * <ul>
 * <li>0: centered</li>
 * <li>1: top</li>
 * <li>2: top right</li>
 * <li>3: right</li>
 * <li>4: bottom right</li>
 * <li>5: bottom</li>
 * <li>6: bottom left</li>
 * <li>7: left</li>
 * <li>8: top left</li>
 * </ul>
 * The default alignment is VO specific. <br>
 * For multiple position based VOs, like Route, or Area the label is dynamically positioned. If the current display of a VO consists
 * of multiple disconnected parts, each part gets an own label.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sLabelPos New value for property <code>labelPos</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setLabelPos = function(sLabelPos) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>labelText</code>.
 * 
 * The visual objects label text. Providing a label text required, but also sufficient the get a label displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sLabelText New value for property <code>labelText</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setLabelText = function(sLabelText) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>labelType</code>.
 * 
 * Type for semantic labels. A given semantic type will overrule color settings and add an icon.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.ui.vbm.SemanticType} sLabelType New value for property <code>labelType</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setLabelType = function(sLabelType) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>select</code>.
 * 
 * Set to true if the element is selected
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSelect New value for property <code>select</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setSelect = function(bSelect) { return new sap.ui.vbm.VoBase(); };

/**
 * Sets a new value for property <code>selectColor</code>.
 * 
 * Color change applied when visual object is selected. This can be explicit or a relative one. See above.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>RHLSA(0.0;1.0;1.0;1.0)</code>.
 * @param {string} sSelectColor New value for property <code>selectColor</code>
 * @returns {sap.ui.vbm.VoBase} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.vbm.VoBase.prototype.setSelectColor = function(sSelectColor) { return new sap.ui.vbm.VoBase(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.vbm.ClusterInfoType --------------------------------------------------------------------------

/**
 * Type indicating that Cluster Info should return info on child cluster nodes (next LOD). This is only supported for tree clustering.
 * @public
 * 
 */
sap.ui.vbm.ClusterInfoType.ChildCluster = 0;

/**
 * Type indicating that Cluster Info should return only VOs covered by the Cluster object
 * @public
 * 
 */
sap.ui.vbm.ClusterInfoType.ContainedVOs = 0;

/**
 * Type indicating that Cluster Info should return info on Edges of the Voronoi Area for the cluster. This is only supported for tree
 * clustering. Edges not merged with rectangles.
 * @public
 * 
 */
sap.ui.vbm.ClusterInfoType.Edges = 0;

/**
 * Type indicating that Cluster Info should return info on cluster node itself.
 * @public
 * 
 */
sap.ui.vbm.ClusterInfoType.NodeInfo = 0;

/**
 * Type indicating that Cluster Info should return info on parent cluster node (previous LOD). This is only supported for tree clustering.
 * @public
 * 
 */
sap.ui.vbm.ClusterInfoType.ParentNode = 0;


// ---- sap.ui.vbm.RouteType --------------------------------------------------------------------------

/**
 * Type indicating a geodesic connection
 * @public
 * 
 */
sap.ui.vbm.RouteType.Geodesic = "";

/**
 * Type indicating a straight connection
 * @public
 * 
 */
sap.ui.vbm.RouteType.Straight = "";


// ---- sap.ui.vbm.SemanticType --------------------------------------------------------------------------

/**
 * Type indicating the Default state
 * @public
 * 
 */
sap.ui.vbm.SemanticType.Default = "";

/**
 * Type indicating an Error state
 * @public
 * 
 */
sap.ui.vbm.SemanticType.Error = "";

/**
 * Type indicating a Hidden state
 * @public
 * 
 */
sap.ui.vbm.SemanticType.Hidden = "";

/**
 * Type indicating an Inactive state
 * @public
 * 
 */
sap.ui.vbm.SemanticType.Inactive = "";

/**
 * Type indicating no state
 * @public
 * 
 */
sap.ui.vbm.SemanticType.None = "";

/**
 * Type indicating a Success/Positive state
 * @public
 * 
 */
sap.ui.vbm.SemanticType.Success = "";

/**
 * Type indicating a Warning state
 * @public
 * 
 */
sap.ui.vbm.SemanticType.Warning = "";

