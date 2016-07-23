
// ---- sap.ui.comp --------------------------------------------------------------------------


// ---- sap.ui.comp.filterbar.FilterBar --------------------------------------------------------------------------

/**
 * Constructor for a new FilterBar.
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
 * <li>{@link #getPersistencyKey persistencyKey} : string</li>
 * <li>{@link #getAdvancedMode advancedMode} : boolean (default: false)</li>
 * <li>{@link #getExpandAdvancedArea expandAdvancedArea} : boolean (default: false)</li>
 * <li>{@link #getSearchEnabled searchEnabled} : boolean (default: true)</li>
 * <li>{@link #getFilterBarExpanded filterBarExpanded} : boolean (default: true)</li>
 * <li>{@link #getConsiderGroupTitle considerGroupTitle} : boolean (default: false)</li>
 * <li>{@link #getShowClearButton showClearButton} : boolean (default: false)</li>
 * <li>{@link #getShowRestoreButton showRestoreButton} : boolean (default: true)</li>
 * <li>{@link #getShowGoOnFB showGoOnFB} : boolean (default: true)</li>
 * <li>{@link #getShowRestoreOnFB showRestoreOnFB} : boolean (default: false)</li>
 * <li>{@link #getShowClearOnFB showClearOnFB} : boolean (default: false)</li>
 * <li>{@link #getShowGoButton showGoButton} : boolean</li>
 * <li>{@link #getDeltaVariantMode deltaVariantMode} : boolean (default: true)</li>
 * <li>{@link #getFilterContainerWidth filterContainerWidth} : string (default: 12rem)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFilterItems filterItems} : sap.ui.comp.filterbar.FilterItem[]</li>
 * <li>{@link #getFilterGroupItems filterGroupItems} : sap.ui.comp.filterbar.FilterGroupItem[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:reset reset} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:search search} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beforeVariantSave beforeVariantSave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beforeVariantFetch beforeVariantFetch} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantLoad afterVariantLoad} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:filterChange filterChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:clear clear} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantSave afterVariantSave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:filtersDialogClosed filtersDialogClosed} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.layout.Grid#constructor sap.ui.layout.Grid}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The control displays filters in a user-friendly manner to populate values for a query. The FilterBar consists of a row containing the
 *        {@link sap.ui.comp.variants.VariantManagement VariantManagement} control, the related buttons, and an area underneath displaying the
 *        filters. The filters are arranged in a logical row that is divided depending on the space available and the width of the filters. The
 *        area containing the filters can be hidden or shown using the Hide Filter Bar / Show Filter Bar button. The Go button triggers the search
 *        event, and the Filters button shows the filter dialog.<br>
 *        In this dialog, the consumer has full control over the filter bar. The filters in this dialog are displayed in one column and organized
 *        in groups. The filter items of the <code>filterItems</code> aggregation are grouped in the Basic group . Each filter can be marked as
 *        visible in the filter bar by selecting Add to Filter Bar. In addition, the items in the <code>filterGroupItems</code> aggregation can
 *        be marked as part of the current variant. The FilterBar also supports a different UI layout when used inside a value help dialog. In
 *        this case the FilterBar consists of two logical areas, one containing the general search button and in the Advanced Search area. The
 *        Advanced Search is a collapsible area displaying the advanced filters in two columns.
 * @extends sap.ui.layout.Grid
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) design-time meta model
 * 
 */
sap.ui.comp.filterbar.FilterBar = function(sId,mSettings) {};
/**
 * This event is fired after a variant has been loaded and applied to the FilterBar. The event can be used to adapt custom filters
 * with data from the variant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.context Context of the event. Can also be <code>null</code> or <code>undefined</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.afterVariantLoad = function(oControlEvent) {  };

/**
 * This event is fired after a variant has been saved. ID of the saved variant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.afterVariantSave = function(oControlEvent) {  };

/**
 * This event is fired before a variant is fetched.
 * @event
 * @since 1.28.13
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.beforeVariantFetch = function(oControlEvent) {  };

/**
 * This event is fired before a variant is saved. The event can be used to adapt the data of the custom filters, which will be saved
 * as variant later.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.context Context of the event. Can also be <code>null</code> or <code>undefined</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.beforeVariantSave = function(oControlEvent) {  };

/**
 * This event is fired when the Cancel button on the Filters dialog is pressed and the variant is marked as dirty.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.cancel = function(oControlEvent) {  };

/**
 * This event is fired when the Clear button is pressed. The consumer has to clear all filters.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control[]} oControlEvent.getParameters.selectionSet Visible controls
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.clear = function(oControlEvent) {  };

/**
 * This event is fired when a filter has changed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.filterChange = function(oControlEvent) {  };

/**
 * This event is fired after the filters dialog is closed.
 * @event
 * @since 1.34.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.filtersDialogClosed = function(oControlEvent) {  };

/**
 * This event is fired when the filter bar is initialized.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.initialise = function(oControlEvent) {  };

/**
 * This event is fired when the Restore button is pressed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control[]} oControlEvent.getParameters.selectionSet Visible controls
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.reset = function(oControlEvent) {  };

/**
 * This event is fired when the Go button is pressed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.core.Control[]} oControlEvent.getParameters.selectionSet Visible controls
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.search = function(oControlEvent) {  };

/**
 * Provides filter information for lazy instantiation
 * @protected
 * @returns {array} of filter information
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype._getFilterInformation = function() { return null; };

/**
 * Adds a <code>FilterGroupItem</code> element to the aggregation <code>filterGroupItems</code>.
 * @public
 * @param {sap.ui.comp.filterbar.FilterGroupItem} oFilterGroupItem Belongs to any group other than basic
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.addFilterGroupItem = function(oFilterGroupItem) {  };

/**
 * Adds a <code>FilterItem</code> element to the aggregation <code>filterItems</code>.
 * @public
 * @param {sap.ui.comp.filterbar.FilterItem} oFilterItem Belongs to the basic group
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.addFilterItem = function(oFilterItem) {  };

/**
 * Applies the variant. This method is executed from the {@link sap.ui.comp.smartvariants.SmartVariantManagement SmartVariantManagement} control.
 * @param {object} oVariant JSON object
 * @param {string} sContext Describes in which context the variant is applied. The context is passed on to the application via the
 *        afterVariantLoad event
 * @param {boolean} bInitial indicates if the apply was executed during the initialization phase.
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.applyVariant = function(oVariant,sContext,bInitial) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterVariantLoad</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.filterbar.FilterBar</code> itself.
 * 
 * This event is fired after a variant has been loaded and applied to the FilterBar. The event can be used to adapt custom filters
 * with data from the variant.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code> itself
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachAfterVariantLoad = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterVariantSave</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.filterbar.FilterBar</code> itself.
 * 
 * This event is fired after a variant has been saved. ID of the saved variant.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code> itself
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachAfterVariantSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>beforeVariantFetch</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.filterbar.FilterBar</code> itself.
 * 
 * This event is fired before a variant is fetched.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code> itself
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.13
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachBeforeVariantFetch = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>beforeVariantSave</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.filterbar.FilterBar</code> itself.
 * 
 * This event is fired before a variant is saved. The event can be used to adapt the data of the custom filters, which will be saved
 * as variant later.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code> itself
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachBeforeVariantSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>cancel</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.filterbar.FilterBar</code> itself.
 * 
 * This event is fired when the Cancel button on the Filters dialog is pressed and the variant is marked as dirty.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code> itself
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>clear</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.filterbar.FilterBar</code> itself.
 * 
 * This event is fired when the Clear button is pressed. The consumer has to clear all filters.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code> itself
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachClear = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>filterChange</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.filterbar.FilterBar</code> itself.
 * 
 * This event is fired when a filter has changed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code> itself
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachFilterChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>filtersDialogClosed</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.filterbar.FilterBar</code> itself.
 * 
 * This event is fired after the filters dialog is closed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code> itself
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.34.0
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachFiltersDialogClosed = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>initialise</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.filterbar.FilterBar</code> itself.
 * 
 * This event is fired when the filter bar is initialized.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code> itself
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>reset</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.filterbar.FilterBar</code> itself.
 * 
 * This event is fired when the Restore button is pressed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code> itself
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachReset = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>search</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.filterbar.FilterBar</code> itself.
 * 
 * This event is fired when the Go button is pressed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterBar</code> itself
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.attachSearch = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Resets the current selection in the variant management control to standard.
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.clearVariantSelection = function() {  };

/**
 * Destroys the control.
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.destroy = function() {  };

/**
 * Destroys all the filterGroupItems in the aggregation <code>filterGroupItems</code>.
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.destroyFilterGroupItems = function() { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Destroys all the filterItems in the aggregation <code>filterItems</code>.
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.destroyFilterItems = function() { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterVariantLoad</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachAfterVariantLoad = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterVariantSave</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachAfterVariantSave = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>beforeVariantFetch</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.13
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachBeforeVariantFetch = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>beforeVariantSave</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachBeforeVariantSave = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>cancel</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachCancel = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>clear</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachClear = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>filterChange</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachFilterChange = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>filtersDialogClosed</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachFiltersDialogClosed = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>initialise</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>reset</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachReset = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>search</code> event of this <code>sap.ui.comp.filterbar.FilterBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.detachSearch = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Retrieves the control associated to the filter.
 * @public
 * @param {sap.ui.comp.filterbar.FilterItem} oFilterItem From the aggregations
 * @returns {sap.ui.core.Control} The corresponding control. If no match is found <code>null</code> is returned.
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.determineControlByFilterItem = function(oFilterItem) { return new sap.ui.core.Control(); };

/**
 * Retrieves the control based on the name and group name.
 * @public
 * @param {string} sName Name of the filter.
 * @param {string} sGroupName Group name of the filter; <code>null</code> for filter that belongs to basic group.
 * @returns {sap.ui.core.Control} The corresponding control, if no match is found, <code>null</code> is returned.
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.determineControlByName = function(sName,sGroupName) { return new sap.ui.core.Control(); };

/**
 * Retrieves the mandatory filters.
 * @public
 * @returns {array} Of visible mandatory filters
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.determineMandatoryFilterItems = function() { return null; };

/**
 * Creates a new subclass of class sap.ui.comp.filterbar.FilterBar with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.Grid.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.filterbar.FilterBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Creates and returns the variant representation. This method is executed from the SmartVariantManagement control.
 * @param {boolean} bConsiderInvisibleFilters Indicates if invisible filters should be considered
 * @returns {object} JSON object
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fetchVariant = function(bConsiderInvisibleFilters) { return new Object(); };

/**
 * Fires event <code>afterVariantSave</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireAfterVariantSave = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Fires event <code>beforeVariantFetch</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.13
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireBeforeVariantFetch = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Fires event <code>cancel</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireCancel = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Fires event <code>clear</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>selectionSet</code> of type <code>sap.ui.core.Control[]</code>Visible controls</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireClear = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Fires event <code>filtersDialogClosed</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.34.0
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireFiltersDialogClosed = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * This method has to be called by the consumer to indicate that the data model is available.
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireInitialise = function() {  };

/**
 * Fires event <code>reset</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>selectionSet</code> of type <code>sap.ui.core.Control[]</code>Visible controls</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireReset = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Fires event <code>search</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>selectionSet</code> of type <code>sap.ui.core.Control[]</code>Visible controls</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.fireSearch = function(mArguments) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Gets current value of property <code>advancedMode</code>.
 * 
 * The advanced mode overwrites the standard behavior and is used in the value help scenario.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>advancedMode</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getAdvancedMode = function() { return false; };

/**
 * Retrieves filters belonging to the current variant.
 * @public
 * @param {boolean} bConsiderOnlyVisibleFields Indicates that only visible filters are retrieved
 * @returns {array} filters Of the current variant
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getAllFilterItems = function(bConsiderOnlyVisibleFields) { return null; };

/**
 * ID of the element which is the current target of the association <code>basicSearch</code>, or <code>null</code>.
 * @returns {sap.m.SearchField}
 * @since 1.30.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getBasicSearch = function() { return new sap.m.SearchField(); };

/**
 * Gets current value of property <code>considerGroupTitle</code>.
 * 
 * If this property is set, then the label for filters will be prefixed with the group title.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>considerGroupTitle</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getConsiderGroupTitle = function() { return false; };

/**
 * Retrieves the current variant ID.
 * @public
 * @since 1.28.0
 * @returns {string} ID of the current variant
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getCurrentVariantId = function() { return ""; };

/**
 * Retrieves the current variant as selection variant for UI navigation
 * @public
 * @since 1.28.0 Also include empty/invisible fields filter data
 * @param {boolean} bConsiderAllFilters also include empty/invisible fields filter data
 * @returns {string} JSON string representing the selection variant for UI navigation; <code>null</code> otherwise
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getDataSuiteFormat = function(bConsiderAllFilters) { return ""; };

/**
 * Gets current value of property <code>deltaVariantMode</code>.
 * 
 * Stores the delta as compared to the standard variant.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>deltaVariantMode</code>
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getDeltaVariantMode = function() { return false; };

/**
 * Gets current value of property <code>filterBarExpanded</code>.
 * 
 * Shows/hides the filter row.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>filterBarExpanded</code>
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getFilterBarExpanded = function() { return false; };

/**
 * Gets current value of property <code>filterContainerWidth</code>.
 * 
 * Sets the width of the filters container.
 * 
 * Default value is <code>12rem</code>.
 * @returns {string} Value of property <code>filterContainerWidth</code>
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getFilterContainerWidth = function() { return ""; };

/**
 * Gets content of aggregation <code>filterGroupItems</code>.
 * 
 * Filters belonging to groups other than the basic group.
 * @returns {sap.ui.comp.filterbar.FilterGroupItem[]}
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getFilterGroupItems = function() { return new Array(); };

/**
 * Gets content of aggregation <code>filterItems</code>.
 * 
 * Filters belonging to the basic group.
 * @returns {sap.ui.comp.filterbar.FilterItem[]}
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getFilterItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.comp.filterbar.FilterBar.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.filterbar.FilterBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>persistencyKey</code>.
 * 
 * Key used to access personalization data.
 * @returns {string} Value of property <code>persistencyKey</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getPersistencyKey = function() { return ""; };

/**
 * Gets current value of property <code>searchEnabled</code>.
 * 
 * Enables/disables the Search button.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>searchEnabled</code>
 * @deprecated Since version 1.32.0.
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getSearchEnabled = function() { return false; };

/**
 * Gets current value of property <code>showClearButton</code>.
 * 
 * Handles visibility of the Clear button on the Filters dialog.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showClearButton</code>
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getShowClearButton = function() { return false; };

/**
 * Gets current value of property <code>showClearOnFB</code>.
 * 
 * Handles visibility of the Clear button on the filter bar.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showClearOnFB</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getShowClearOnFB = function() { return false; };

/**
 * Gets current value of property <code>showGoOnFB</code>.
 * 
 * Handles visibility of the Go button on the filter bar.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showGoOnFB</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getShowGoOnFB = function() { return false; };

/**
 * Gets current value of property <code>showRestoreButton</code>.
 * 
 * Handles visibility of the Restore button on the Filters dialog.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showRestoreButton</code>
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getShowRestoreButton = function() { return false; };

/**
 * Gets current value of property <code>showRestoreOnFB</code>.
 * 
 * Handles visibility of the Restore button on the filter bar.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showRestoreOnFB</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.getShowRestoreOnFB = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.comp.filterbar.FilterGroupItem</code> in the aggregation <code>filterGroupItems</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.filterbar.FilterGroupItem}
 *           oFilterGroupItem The filterGroupItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.indexOfFilterGroupItem = function(oFilterGroupItem) { return 0; };

/**
 * Checks for the provided <code>sap.ui.comp.filterbar.FilterItem</code> in the aggregation <code>filterItems</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.filterbar.FilterItem}
 *           oFilterItem The filterItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.indexOfFilterItem = function(oFilterItem) { return 0; };

/**
 * Inserts a filterGroupItem into the aggregation <code>filterGroupItems</code>.
 * @param {sap.ui.comp.filterbar.FilterGroupItem}
 *            oFilterGroupItem the filterGroupItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the filterGroupItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the filterGroupItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the filterGroupItem is inserted at
 *              the last position
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.insertFilterGroupItem = function(oFilterGroupItem,iIndex) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Inserts a filterItem into the aggregation <code>filterItems</code>.
 * @param {sap.ui.comp.filterbar.FilterItem}
 *            oFilterItem the filterItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the filterItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the filterItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the filterItem is inserted at
 *              the last position
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.insertFilterItem = function(oFilterItem,iIndex) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Registration of a callback function. The provided callback function is executed when a variant must be applied. The callback function will
 * receive the corresponding data set containing all relevant data in JSON, as initially provided by the callback for fetchData.
 * @public
 * @param {function} fCallBack Called when a variant must be applied
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.registerApplyData = function(fCallBack) {  };

/**
 * Registration of a callback function. The provided callback function is executed when saving a variant is triggered and must provide all
 * relevant fields and values in JSON.
 * @public
 * @param {function} fCallBack Called when a variant must be fetched
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.registerFetchData = function(fCallBack) {  };

/**
 * Registration of a callback function. The provided callback function is executed to obtain the filters with values.
 * @public
 * @since 1.26.1
 * @param {function} fCallBack Called when a variant must be applied
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.registerGetFiltersWithValues = function(fCallBack) {  };

/**
 * Removes all entries in the aggregation filterGroupItems.
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.removeAllFilterGroupItems = function() {  };

/**
 * Removes all entries in the aggregation filterItems.
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.removeAllFilterItems = function() {  };

/**
 * Removes all entries in the aggregations filterItems, filterGroupItems, basicSearch
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.removeAllFilters = function() {  };

/**
 * Removes the association basicSearch.
 * @public
 * @since 1.30.0
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.removeBasicSearch = function() {  };

/**
 * Removes a filterGroupItem from the aggregation <code>filterGroupItems</code>.
 * @param {int | string | sap.ui.comp.filterbar.FilterGroupItem} vFilterGroupItem The filterGroupItemto remove or its index or id
 * @returns {sap.ui.comp.filterbar.FilterGroupItem} The removed filterGroupItem or <code>null</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.removeFilterGroupItem = function(vFilterGroupItem) { return new sap.ui.comp.filterbar.FilterGroupItem(); };

/**
 * Removes a filterItem from the aggregation <code>filterItems</code>.
 * @param {int | string | sap.ui.comp.filterbar.FilterItem} vFilterItem The filterItemto remove or its index or id
 * @returns {sap.ui.comp.filterbar.FilterItem} The removed filterItem or <code>null</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.removeFilterItem = function(vFilterItem) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * The advanced mode is only relevant for the value help scenario. UI representation is different from the standard filter bar.
 * @public
 * @param {boolean} bFlag Sets the advanced mode
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setAdvancedMode = function(bFlag) {  };

/**
 * Adds a basic search field to the toolbar.
 * @public
 * @param {sap.m.SearchField} oBasicSearchField Control
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setBasicSearch = function(oBasicSearchField) {  };

/**
 * Sets a new value for property <code>considerGroupTitle</code>.
 * 
 * If this property is set, then the label for filters will be prefixed with the group title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bConsiderGroupTitle New value for property <code>considerGroupTitle</code>
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setConsiderGroupTitle = function(bConsiderGroupTitle) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Sets the current variant ID.
 * @public
 * @since 1.28.0
 * @param {string} sVariantId ID of the variant
 * @param {boolean} bDoNotApplyVariant If set to <code>true</code>, the <code>applyVariant</code> method is not executed yet. Relevant during
 *        navigation, when called before the initialise event has been executed.
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setCurrentVariantId = function(sVariantId,bDoNotApplyVariant) {  };

/**
 * Sets the selection variant for UI navigation to FilterBar.
 * @public
 * @since 1.28.0
 * @param {string} sSuiteData Represents the selection variants for UI navigation
 * @param {boolean} bReplace Replaces existing filter data
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setDataSuiteFormat = function(sSuiteData,bReplace) {  };

/**
 * Sets a new value for property <code>deltaVariantMode</code>.
 * 
 * Stores the delta as compared to the standard variant.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bDeltaVariantMode New value for property <code>deltaVariantMode</code>
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setDeltaVariantMode = function(bDeltaVariantMode) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Sets filterbar in collapsed/expanded mode.
 * @public
 * @since 1.26.1
 * @param {boolean} bShowExpanded Mode
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setFilterBarExpanded = function(bShowExpanded) {  };

/**
 * Sets a new value for property <code>filterContainerWidth</code>.
 * 
 * Sets the width of the filters container.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12rem</code>.
 * @param {string} sFilterContainerWidth New value for property <code>filterContainerWidth</code>
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setFilterContainerWidth = function(sFilterContainerWidth) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Sets the persistency key.
 * @public
 * @param {string} sPersistenceKey ID for persistency
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setPersistencyKey = function(sPersistenceKey) {  };

/**
 * Sets a new value for property <code>showClearButton</code>.
 * 
 * Handles visibility of the Clear button on the Filters dialog.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowClearButton New value for property <code>showClearButton</code>
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setShowClearButton = function(bShowClearButton) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Handles the visibility for the Clear button in the filter bar. On phone devices, the value is always treated as false.
 * @public
 * @since 1.28.0
 * @param {boolean} bFlag State of visibility
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setShowClearOnFB = function(bFlag) {  };

/**
 * Handles the visibility of the Go button on filter bar.
 * @public
 * @since 1.28.0
 * @param {boolean} bFlag State of visibility
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setShowGoOnFB = function(bFlag) {  };

/**
 * Sets a new value for property <code>showRestoreButton</code>.
 * 
 * Handles visibility of the Restore button on the Filters dialog.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowRestoreButton New value for property <code>showRestoreButton</code>
 * @returns {sap.ui.comp.filterbar.FilterBar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setShowRestoreButton = function(bShowRestoreButton) { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Handles the visibility of the Restore button in the filter bar. On phone devices, the value is always treated as false.
 * @public
 * @since 1.28.0
 * @param {boolean} bFlag State of visibility
 * 
 */
sap.ui.comp.filterbar.FilterBar.prototype.setShowRestoreOnFB = function(bFlag) {  };


// ---- sap.ui.comp.filterbar.FilterGroupItem --------------------------------------------------------------------------

/**
 * Constructor for a new filterbar/FilterGroupItem.
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
 * <li>{@link #getGroupTitle groupTitle} : string</li>
 * <li>{@link #getGroupName groupName} : string</li>
 * <li>{@link #getVisibleInAdvancedArea visibleInAdvancedArea} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.comp.filterbar.FilterItem#constructor sap.ui.comp.filterbar.FilterItem}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given 
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * Represents a filter belonging to a group other than basic. 
 * @extends sap.ui.comp.filterbar.FilterItem
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem = function(sId,mSettings) {};
/**
 * Destroys this element.
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.destroy = function() {  };

/**
 * Creates a new subclass of class sap.ui.comp.filterbar.FilterGroupItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.comp.filterbar.FilterItem.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>groupName</code>.
 * 
 * Name of the group.
 * @returns {string} Value of property <code>groupName</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.getGroupName = function() { return ""; };

/**
 * Gets current value of property <code>groupTitle</code>.
 * 
 * Title of the group.
 * @returns {string} Value of property <code>groupTitle</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.getGroupTitle = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.filterbar.FilterGroupItem.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property <code>groupName</code>.
 * 
 * Name of the group.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sGroupName New value for property <code>groupName</code>
 * @returns {sap.ui.comp.filterbar.FilterGroupItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.setGroupName = function(sGroupName) { return new sap.ui.comp.filterbar.FilterGroupItem(); };

/**
 * Setter for group title.
 * @public
 * @param {string} sValue Group title 
 * 
 */
sap.ui.comp.filterbar.FilterGroupItem.prototype.setGroupTitle = function(sValue) {  };


// ---- sap.ui.comp.filterbar.FilterItem --------------------------------------------------------------------------

/**
 * Constructor for a new filterbar/FilterItem.
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
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getMandatory mandatory} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getLabelTooltip labelTooltip} : string</li>
 * <li>{@link #getPartOfCurrentVariant partOfCurrentVariant} : boolean (default: false)</li>
 * <li>{@link #getVisibleInFilterBar visibleInFilterBar} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getControl control} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class Represents a filter belonging to the basic group.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.filterbar.FilterItem = function(sId,mSettings) {};
/**
 * This event is fired when one of the properties is changed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.propertyName Name of the changed property
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.change = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>change</code> event of this <code>sap.ui.comp.filterbar.FilterItem</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.filterbar.FilterItem</code> itself.
 * 
 * This event is fired when one of the properties is changed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.filterbar.FilterItem</code> itself
 * @returns {sap.ui.comp.filterbar.FilterItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * Destroys this element.
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.destroy = function() {  };

/**
 * Destroys the control in the aggregation <code>control</code>.
 * @returns {sap.ui.comp.filterbar.FilterItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.destroyControl = function() { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>change</code> event of this <code>sap.ui.comp.filterbar.FilterItem</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.filterbar.FilterItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * Creates a new subclass of class sap.ui.comp.filterbar.FilterItem with name <code>sClassName</code>
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
sap.ui.comp.filterbar.FilterItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>change</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>propertyName</code> of type <code>string</code>Name of the changed property</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.filterbar.FilterItem} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.fireChange = function(mArguments) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * Gets content of aggregation <code>control</code>.
 * 
 * The control of the filter.
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getControl = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property <code>label</code>.
 * 
 * Label of the filter.
 * @returns {string} Value of property <code>label</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getLabel = function() { return ""; };

/**
 * Gets current value of property <code>labelTooltip</code>.
 * 
 * Tooltip for the filter.
 * @returns {string} Value of property <code>labelTooltip</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getLabelTooltip = function() { return ""; };

/**
 * Gets current value of property <code>mandatory</code>.
 * 
 * Mandatory flag.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>mandatory</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getMandatory = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.comp.filterbar.FilterItem.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.filterbar.FilterItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>name</code>.
 * 
 * Name of the filter. This is an identifier for the filter and has to be unique.
 * @returns {string} Value of property <code>name</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getName = function() { return ""; };

/**
 * Gets current value of property <code>partOfCurrentVariant</code>.
 * 
 * Determines if a filter is part of the currently selected variant. This property is ONLY used internally and must not be used by the
 * filter bar consumers.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>partOfCurrentVariant</code>
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getPartOfCurrentVariant = function() { return false; };

/**
 * Gets current value of property <code>visible</code>.
 * 
 * Visibility state of the filter.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getVisible = function() { return false; };

/**
 * Gets current value of property <code>visibleInFilterBar</code>.
 * 
 * Controls the visibility of a filter item in the filter bar.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleInFilterBar</code>
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.getVisibleInFilterBar = function() { return false; };

/**
 * Initializes the filter item.
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.init = function() {  };

/**
 * Sets the aggregated <code>control</code>.
 * @param {sap.ui.core.Control} oControl The control to set
 * @returns {sap.ui.comp.filterbar.FilterItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setControl = function(oControl) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * Setter for label.
 * @public
 * @param {string} sValue Label text
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setLabel = function(sValue) {  };

/**
 * Setter for tooltip.
 * @public
 * @param {string} sText Tooltip text
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setLabelTooltip = function(sText) {  };

/**
 * Setter for mandatory flag.
 * @public
 * @param {string} bValue Mandatory state
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setMandatory = function(bValue) {  };

/**
 * Sets a new value for property <code>name</code>.
 * 
 * Name of the filter. This is an identifier for the filter and has to be unique.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sName New value for property <code>name</code>
 * @returns {sap.ui.comp.filterbar.FilterItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setName = function(sName) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * Sets a new value for property <code>partOfCurrentVariant</code>.
 * 
 * Determines if a filter is part of the currently selected variant. This property is ONLY used internally and must not be used by the
 * filter bar consumers.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPartOfCurrentVariant New value for property <code>partOfCurrentVariant</code>
 * @returns {sap.ui.comp.filterbar.FilterItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.1
 * @public
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setPartOfCurrentVariant = function(bPartOfCurrentVariant) { return new sap.ui.comp.filterbar.FilterItem(); };

/**
 * Setter for visible property.
 * @public
 * @param {boolean} bVisible State of visibility
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setVisible = function(bVisible) {  };

/**
 * Setter for visible in filter bar.
 * @public
 * @since 1.26.1
 * @param {boolean} bVisible State of visibility in filter bar
 * 
 */
sap.ui.comp.filterbar.FilterItem.prototype.setVisibleInFilterBar = function(bVisible) {  };


// ---- sap.ui.comp.navpopover.LinkData --------------------------------------------------------------------------

/**
 * Constructor for a new navpopover/LinkData.
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
 * <li>{@link #getText text} : string</li>
 * <li>{@link #getHref href} : string</li>
 * <li>{@link #getTarget target} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class Stores display text together with a navigation target hyperlink.<br>
 *        The LinkData class is used by {@link sap.ui.comp.navpopover.SmartLink SmartLink} and
 *        {@link sap.ui.comp.navpopover.SemanticObjectController SemanticObjectController} to define the visible links on
 *        {@link sap.ui.comp.navpopover.NavigationPopover NavigationPopover}.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.navpopover.LinkData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.navpopover.LinkData with name <code>sClassName</code>
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
sap.ui.comp.navpopover.LinkData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>href</code>.
 * 
 * Destination link for a navigation operation in internal format. <b>Note</b>: The link will be encoded before it is shown in external
 * format using the <code>hrefForExternal</code> method of the CrossApplicationNavigation service.
 * @returns {string} Value of property <code>href</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.LinkData.prototype.getHref = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.navpopover.LinkData.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.LinkData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>target</code>.
 * 
 * The standard values for the <code>target</code> property are: _self, _top, _blank, _parent, _search. Alternatively, a frame name
 * can be entered. This property is only used if the <code>href</code> property is set.
 * @returns {string} Value of property <code>target</code>
 * @public
 * 
 */
sap.ui.comp.navpopover.LinkData.prototype.getTarget = function() { return ""; };

/**
 * Gets current value of property <code>text</code>.
 * 
 * Text which can be displayed on the UI
 * @returns {string} Value of property <code>text</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.LinkData.prototype.getText = function() { return ""; };

/**
 * Sets a new value for property <code>href</code>.
 * 
 * Destination link for a navigation operation in internal format. <b>Note</b>: The link will be encoded before it is shown in external
 * format using the <code>hrefForExternal</code> method of the CrossApplicationNavigation service.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sHref New value for property <code>href</code>
 * @returns {sap.ui.comp.navpopover.LinkData} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.LinkData.prototype.setHref = function(sHref) { return new sap.ui.comp.navpopover.LinkData(); };

/**
 * Sets a new value for property <code>target</code>.
 * 
 * The standard values for the <code>target</code> property are: _self, _top, _blank, _parent, _search. Alternatively, a frame name
 * can be entered. This property is only used if the <code>href</code> property is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTarget New value for property <code>target</code>
 * @returns {sap.ui.comp.navpopover.LinkData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.navpopover.LinkData.prototype.setTarget = function(sTarget) { return new sap.ui.comp.navpopover.LinkData(); };

/**
 * Sets a new value for property <code>text</code>.
 * 
 * Text which can be displayed on the UI
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sText New value for property <code>text</code>
 * @returns {sap.ui.comp.navpopover.LinkData} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.LinkData.prototype.setText = function(sText) { return new sap.ui.comp.navpopover.LinkData(); };


// ---- sap.ui.comp.navpopover.NavigationPopover --------------------------------------------------------------------------

/**
 * Constructor for a new navpopover/NavigationPopover.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getSemanticObjectName semanticObjectName} : string</li>
 * <li>{@link #getSemanticAttributes semanticAttributes} : object</li>
 * <li>{@link #getAppStateKey appStateKey} : string</li>
 * <li>{@link #getMainNavigationId mainNavigationId} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getAvailableActions availableActions} : sap.ui.comp.navpopover.LinkData[]</li>
 * <li>{@link #getMainNavigation mainNavigation} : sap.ui.comp.navpopover.LinkData</li>
 * <li>{@link #getOwnNavigation ownNavigation} : sap.ui.comp.navpopover.LinkData</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:targetsObtained targetsObtained} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:navigate navigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Popover#constructor sap.m.Popover}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class The NavigationPopover allows navigating to different destinations by providing links on a popover.<br>
 *        The links are fetched using the {@link sap.ushell.services.CrossApplicationNavigation CrossApplicationNavigation} service of the unified
 *        shell.<br>
 *        This class gets instantiated by {@link sap.ui.comp.navpopover.SmartLink SmartLink}. It is recommended to use
 *        {@link sap.ui.comp.navpopover.SmartLink SmartLink} instead of creating NavigationPopover manually.
 * @extends sap.m.Popover
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.navpopover.NavigationPopover = function(sId,mSettings) {};
/**
 * Event is triggered when a link is pressed.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.navigate = function(oControlEvent) {  };

/**
 * The navigation targets that are shown.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.targetsObtained = function(oControlEvent) {  };

/**
 * Adds some availableAction to the aggregation <code>availableActions</code>.
 * @param {sap.ui.comp.navpopover.LinkData}
 *            oAvailableAction the availableAction to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.addAvailableAction = function(oAvailableAction) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>navigate</code> event of this <code>sap.ui.comp.navpopover.NavigationPopover</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.navpopover.NavigationPopover</code> itself.
 * 
 * Event is triggered when a link is pressed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.NavigationPopover</code> itself
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.attachNavigate = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>targetsObtained</code> event of this <code>sap.ui.comp.navpopover.NavigationPopover</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.navpopover.NavigationPopover</code> itself.
 * 
 * The navigation targets that are shown.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.NavigationPopover</code> itself
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.attachTargetsObtained = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Destroys all the availableActions in the aggregation <code>availableActions</code>.
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.destroyAvailableActions = function() { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Destroys the mainNavigation in the aggregation <code>mainNavigation</code>.
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.destroyMainNavigation = function() { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Destroys the ownNavigation in the aggregation <code>ownNavigation</code>.
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.destroyOwnNavigation = function() { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>navigate</code> event of this <code>sap.ui.comp.navpopover.NavigationPopover</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.detachNavigate = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>targetsObtained</code> event of this <code>sap.ui.comp.navpopover.NavigationPopover</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.detachTargetsObtained = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Creates a new subclass of class sap.ui.comp.navpopover.NavigationPopover with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Popover.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>navigate</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.fireNavigate = function(mArguments) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Fires event <code>targetsObtained</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.fireTargetsObtained = function(mArguments) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Gets current value of property <code>appStateKey</code>.
 * 
 * The application state key passed to retrieve the navigation targets.
 * @returns {string} Value of property <code>appStateKey</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getAppStateKey = function() { return ""; };

/**
 * Gets content of aggregation <code>availableActions</code>.
 * 
 * A list of available actions shown to the user.
 * @returns {sap.ui.comp.navpopover.LinkData[]}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getAvailableActions = function() { return new Array(); };

/**
 * ID of the element which is the current target of the association <code>component</code>, or <code>null</code>.
 * @returns {sap.ui.core.Element}
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getComponent = function() { return new sap.ui.core.Element(); };

/**
 * ID of the element which is the current target of the association <code>extraContent</code>, or <code>null</code>.
 * @returns {sap.ui.core.Control}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getExtraContent = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation <code>mainNavigation</code>.
 * 
 * The main navigation displayed first on the popover.
 * @returns {sap.ui.comp.navpopover.LinkData}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getMainNavigation = function() { return new sap.ui.comp.navpopover.LinkData(); };

/**
 * Gets current value of property <code>mainNavigationId</code>.
 * 
 * Sets the visible text for the main navigation. If empty, the navigationPopover will try to get the Id from the given sourceObject.
 * @returns {string} Value of property <code>mainNavigationId</code>
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getMainNavigationId = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.navpopover.NavigationPopover.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>ownNavigation</code>.
 * 
 * The navigation taking the user back to the source application.
 * @returns {sap.ui.comp.navpopover.LinkData}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getOwnNavigation = function() { return new sap.ui.comp.navpopover.LinkData(); };

/**
 * Gets current value of property <code>semanticAttributes</code>.
 * 
 * describes the semantic attributes. The attribute has to be a map
 * @returns {object} Value of property <code>semanticAttributes</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getSemanticAttributes = function() { return new Object(); };

/**
 * Gets current value of property <code>semanticObjectName</code>.
 * 
 * the name of the semantic object
 * @returns {string} Value of property <code>semanticObjectName</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getSemanticObjectName = function() { return ""; };

/**
 * ID of the element which is the current target of the association <code>source</code>, or <code>null</code>.
 * @returns {sap.ui.core.Control}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getSource = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property <code>title</code>.
 * 
 * popover title
 * @returns {string} Value of property <code>title</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.getTitle = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.comp.navpopover.LinkData</code> in the aggregation <code>availableActions</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.navpopover.LinkData}
 *           oAvailableAction The availableAction whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.indexOfAvailableAction = function(oAvailableAction) { return 0; };

/**
 * Inserts a availableAction into the aggregation <code>availableActions</code>.
 * @param {sap.ui.comp.navpopover.LinkData}
 *            oAvailableAction the availableAction to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the availableAction should be inserted at; for
 *              a negative value of <code>iIndex</code>, the availableAction is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the availableAction is inserted at
 *              the last position
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.insertAvailableAction = function(oAvailableAction,iIndex) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Removes all the controls from the aggregation <code>availableActions</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.comp.navpopover.LinkData[]} An array of the removed elements (might be empty)
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.removeAllAvailableActions = function() { return new Array(); };

/**
 * Removes a availableAction from the aggregation <code>availableActions</code>.
 * @param {int | string | sap.ui.comp.navpopover.LinkData} vAvailableAction The availableActionto remove or its index or id
 * @returns {sap.ui.comp.navpopover.LinkData} The removed availableAction or <code>null</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.removeAvailableAction = function(vAvailableAction) { return new sap.ui.comp.navpopover.LinkData(); };

/**
 * determines the potential navigation targets for the semantical object and visualize the popover
 * @public
 * @param {string} sSemanticalObject name of the semantical object
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.retrieveNavTargets = function(sSemanticalObject) {  };

/**
 * Sets a new value for property <code>appStateKey</code>.
 * 
 * The application state key passed to retrieve the navigation targets.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sAppStateKey New value for property <code>appStateKey</code>
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setAppStateKey = function(sAppStateKey) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Sets the associated <code>component</code>.
 * @param {sap.ui.core.Element} oComponent Id of an element which becomes the new target of this component association; alternatively, an element instance may be given
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setComponent = function(oComponent) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Sets the associated <code>extraContent</code>.
 * @param {sap.ui.core.Control} oExtraContent Id of an element which becomes the new target of this extraContent association; alternatively, an element instance may be given
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setExtraContent = function(oExtraContent) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Sets the aggregated <code>mainNavigation</code>.
 * @param {sap.ui.comp.navpopover.LinkData} oMainNavigation The mainNavigation to set
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setMainNavigation = function(oMainNavigation) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Sets a new value for property <code>mainNavigationId</code>.
 * 
 * Sets the visible text for the main navigation. If empty, the navigationPopover will try to get the Id from the given sourceObject.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sMainNavigationId New value for property <code>mainNavigationId</code>
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setMainNavigationId = function(sMainNavigationId) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Sets the aggregated <code>ownNavigation</code>.
 * @param {sap.ui.comp.navpopover.LinkData} oOwnNavigation The ownNavigation to set
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setOwnNavigation = function(oOwnNavigation) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Sets a new value for property <code>semanticAttributes</code>.
 * 
 * describes the semantic attributes. The attribute has to be a map
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oSemanticAttributes New value for property <code>semanticAttributes</code>
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setSemanticAttributes = function(oSemanticAttributes) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Sets a new value for property <code>semanticObjectName</code>.
 * 
 * the name of the semantic object
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sSemanticObjectName New value for property <code>semanticObjectName</code>
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setSemanticObjectName = function(sSemanticObjectName) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Sets the associated <code>source</code>.
 * @param {sap.ui.core.Control} oSource Id of an element which becomes the new target of this source association; alternatively, an element instance may be given
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setSource = function(oSource) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * Sets a new value for property <code>title</code>.
 * 
 * popover title
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.ui.comp.navpopover.NavigationPopover} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.setTitle = function(sTitle) { return new sap.ui.comp.navpopover.NavigationPopover(); };

/**
 * displays the popover. This method should be called, once all navigation targets are adapted by the application
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopover.prototype.show = function() {  };


// ---- sap.ui.comp.navpopover.NavigationPopoverHandler --------------------------------------------------------------------------

/**
 * Constructor for a new navpopover/NavigationPopoverHandler.
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
 * <li>{@link #getSemanticObject semanticObject} : string</li>
 * <li>{@link #getSemanticObjectController semanticObjectController} : any</li>
 * <li>{@link #getFieldName fieldName} : string</li>
 * <li>{@link #getSemanticObjectLabel semanticObjectLabel} : string</li>
 * <li>{@link #getMapFieldToSemanticObject mapFieldToSemanticObject} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:beforePopoverOpens beforePopoverOpens} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:navigationTargetsObtained navigationTargetsObtained} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:innerNavigate innerNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor sap.ui.base.ManagedObject}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class The NavigationPopoverHandler control uses a semantic object to display
 *        {@link sap.ui.comp.navpopover.NavigationPopover NavigationPopover} for further navigation steps.
 * @extends sap.ui.base.ManagedObject
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler = function(sId,mSettings) {};
/**
 * Event is fired before the semantic object navigation popup opens and before navigation targets are getting retrieved. Event can be
 * used to set the required business attributes.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object for which the navigation targets must be retrieved.
 * @param {object} oControlEvent.getParameters.semanticAttributes Map containing the semantic attributes calculated based on the binding that will be used to retrieve the navigation
 * targets.
 * @param {string} oControlEvent.getParameters.originalId The ID of the NavigationPopoverHandler.
 * @param {function} oControlEvent.getParameters.setSemanticAttributes This callback function enables you to define a changed semantic attributes map. Signatures:
 * <code>setSemanticAttributes(oSemanticAttributesMap)</code> Parameter:
 * <ul>
 * <li>{object} oSemanticAttributesMap - The new map containing the semantic attributes to be used.</li>
 * </ul>
 * @param {function} oControlEvent.getParameters.setAppStateKey This callback function sets an application state key that is used over the cross-application navigation. Signatures:
 * <code>setAppStateKey(sAppStateKey)</code> Parameter:
 * <ul>
 * <li>{string} sAppStateKey - The application state key.</li>
 * </ul>
 * @param {function} oControlEvent.getParameters.open This callback function triggers the retrieval of navigation targets and results in the opening of the navigation popover.
 * Signatures: <code>open()</code> If the beforePopoverOpens event has been registered, the 'open' function has to be called
 * in order to open the navigation popover.
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.beforePopoverOpens = function(oControlEvent) {  };

/**
 * This event is fired after a navigation link on the navigation popover has been clicked. This event is only fired, if the user
 * left-clicks the link. Right-clicking the link and selecting 'Open in New Window' etc. in the context menu does not fire the event.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text The UI text shown in the clicked link.
 * @param {string} oControlEvent.getParameters.href The navigation target of the clicked link.
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object used to retrieve this target.
 * @param {object} oControlEvent.getParameters.semanticAttributes Map containing the semantic attributes used to retrieve this target.
 * @param {string} oControlEvent.getParameters.originalId The ID of the NavigationPopoverHandler.
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.innerNavigate = function(oControlEvent) {  };

/**
 * Event is fired after navigation targets for a semantic object have been retrieved. The event can be used to change the navigation
 * targets.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.comp.navpopover.LinkData[]} oControlEvent.getParameters.actions Array of available navigation targets. Each entry in this array contains a 'text' and 'href' property.
 * @param {sap.ui.comp.navpopover.LinkData} oControlEvent.getParameters.mainNavigation The main navigation, containing a 'text' and 'href' property.
 * @param {sap.ui.comp.navpopover.LinkData} oControlEvent.getParameters.ownNavigation The navigation object for the current application, containing a 'text' and 'href' property. This navigation option is by
 * default not visible on the popover.
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object for which the navigation targets have been retrieved.
 * @param {string} oControlEvent.getParameters.originalId The ID of the NavigationPopoverHandler.
 * @param {function} oControlEvent.getParameters.show This callback function shows the actual navigation popover. Signatures: <code>show()</code>
 *  <code>show(oMainNavigation, aAvailableActions, oExtraContent)</code>
 *  <code>show(sMainNavigationId, oMainNavigation, aAvailableActions, oExtraContent)</code>
 * Parameters:
 * <ul>
 * <li>{string} sMainNavigationId - The visible text for the main navigation. If empty, the navigationPopover will try to get
 * the ID from the given sourceObject.</li>
 * <li>{sap.ui.comp.navpopover.LinkData} oMainNavigation - The main navigation link data containing a 'text" and 'href'
 * property.</li>
 * <li>{sap.ui.comp.navpopover.LinkData[]} aAvailableActions - Array containing the cross application navigation links.</li>
 * <li>{sap.ui.core.Control} oExtraContent - Custom control that will be placed on the popover.</li>
 * </ul>
 * If the navigationTargetsObtained event has been registered, the 'show' function has to be called in order to open the
 * navigation popover.
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.navigationTargetsObtained = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>beforePopoverOpens</code> event of this <code>sap.ui.comp.navpopover.NavigationPopoverHandler</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.navpopover.NavigationPopoverHandler</code> itself.
 * 
 * Event is fired before the semantic object navigation popup opens and before navigation targets are getting retrieved. Event can be
 * used to set the required business attributes.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.NavigationPopoverHandler</code> itself
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.attachBeforePopoverOpens = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>innerNavigate</code> event of this <code>sap.ui.comp.navpopover.NavigationPopoverHandler</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.navpopover.NavigationPopoverHandler</code> itself.
 * 
 * This event is fired after a navigation link on the navigation popover has been clicked. This event is only fired, if the user
 * left-clicks the link. Right-clicking the link and selecting 'Open in New Window' etc. in the context menu does not fire the event.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.NavigationPopoverHandler</code> itself
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.attachInnerNavigate = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>navigationTargetsObtained</code> event of this <code>sap.ui.comp.navpopover.NavigationPopoverHandler</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.navpopover.NavigationPopoverHandler</code> itself.
 * 
 * Event is fired after navigation targets for a semantic object have been retrieved. The event can be used to change the navigation
 * targets.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.NavigationPopoverHandler</code> itself
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.attachNavigationTargetsObtained = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>beforePopoverOpens</code> event of this <code>sap.ui.comp.navpopover.NavigationPopoverHandler</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.detachBeforePopoverOpens = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>innerNavigate</code> event of this <code>sap.ui.comp.navpopover.NavigationPopoverHandler</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.detachInnerNavigate = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>navigationTargetsObtained</code> event of this <code>sap.ui.comp.navpopover.NavigationPopoverHandler</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.detachNavigationTargetsObtained = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };

/**
 * Creates a new subclass of class sap.ui.comp.navpopover.NavigationPopoverHandler with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>beforePopoverOpens</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>semanticObject</code> of type <code>string</code>The semantic object for which the navigation targets must be retrieved.</li>
 * <li><code>semanticAttributes</code> of type <code>object</code>Map containing the semantic attributes calculated based on the binding that will be used to retrieve the navigation
 * targets.</li>
 * <li><code>originalId</code> of type <code>string</code>The ID of the NavigationPopoverHandler.</li>
 * <li><code>setSemanticAttributes</code> of type <code>function</code>This callback function enables you to define a changed semantic attributes map. Signatures:
 * <code>setSemanticAttributes(oSemanticAttributesMap)</code> Parameter:
 * <ul>
 * <li>{object} oSemanticAttributesMap - The new map containing the semantic attributes to be used.</li>
 * </ul></li>
 * <li><code>setAppStateKey</code> of type <code>function</code>This callback function sets an application state key that is used over the cross-application navigation. Signatures:
 * <code>setAppStateKey(sAppStateKey)</code> Parameter:
 * <ul>
 * <li>{string} sAppStateKey - The application state key.</li>
 * </ul></li>
 * <li><code>open</code> of type <code>function</code>This callback function triggers the retrieval of navigation targets and results in the opening of the navigation popover.
 * Signatures: <code>open()</code> If the beforePopoverOpens event has been registered, the 'open' function has to be called
 * in order to open the navigation popover.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.fireBeforePopoverOpens = function(mArguments) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };

/**
 * Fires event <code>innerNavigate</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>text</code> of type <code>string</code>The UI text shown in the clicked link.</li>
 * <li><code>href</code> of type <code>string</code>The navigation target of the clicked link.</li>
 * <li><code>semanticObject</code> of type <code>string</code>The semantic object used to retrieve this target.</li>
 * <li><code>semanticAttributes</code> of type <code>object</code>Map containing the semantic attributes used to retrieve this target.</li>
 * <li><code>originalId</code> of type <code>string</code>The ID of the NavigationPopoverHandler.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.fireInnerNavigate = function(mArguments) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };

/**
 * Fires event <code>navigationTargetsObtained</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>actions</code> of type <code>sap.ui.comp.navpopover.LinkData[]</code>Array of available navigation targets. Each entry in this array contains a 'text' and 'href' property.</li>
 * <li><code>mainNavigation</code> of type <code>sap.ui.comp.navpopover.LinkData</code>The main navigation, containing a 'text' and 'href' property.</li>
 * <li><code>ownNavigation</code> of type <code>sap.ui.comp.navpopover.LinkData</code>The navigation object for the current application, containing a 'text' and 'href' property. This navigation option is by
 * default not visible on the popover.</li>
 * <li><code>semanticObject</code> of type <code>string</code>The semantic object for which the navigation targets have been retrieved.</li>
 * <li><code>originalId</code> of type <code>string</code>The ID of the NavigationPopoverHandler.</li>
 * <li><code>show</code> of type <code>function</code>This callback function shows the actual navigation popover. Signatures: <code>show()</code>
 *  <code>show(oMainNavigation, aAvailableActions, oExtraContent)</code>
 *  <code>show(sMainNavigationId, oMainNavigation, aAvailableActions, oExtraContent)</code>
 * Parameters:
 * <ul>
 * <li>{string} sMainNavigationId - The visible text for the main navigation. If empty, the navigationPopover will try to get
 * the ID from the given sourceObject.</li>
 * <li>{sap.ui.comp.navpopover.LinkData} oMainNavigation - The main navigation link data containing a 'text" and 'href'
 * property.</li>
 * <li>{sap.ui.comp.navpopover.LinkData[]} aAvailableActions - Array containing the cross application navigation links.</li>
 * <li>{sap.ui.core.Control} oExtraContent - Custom control that will be placed on the popover.</li>
 * </ul>
 * If the navigationTargetsObtained event has been registered, the 'show' function has to be called in order to open the
 * navigation popover.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.fireNavigationTargetsObtained = function(mArguments) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };

/**
 * ID of the element which is the current target of the association <code>control</code>, or <code>null</code>.
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.getControl = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property <code>fieldName</code>.
 * 
 * The metadata fieldname for this NavigationPopoverHandler.
 * @returns {string} Value of property <code>fieldName</code>
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.getFieldName = function() { return ""; };

/**
 * Gets current value of property <code>mapFieldToSemanticObject</code>.
 * 
 * If set to 'false', the NavigationPopoverHandler will not replace its field name with the according semantic object name during the
 * calculation of the semantic attributes. This enables the usage of several NavigationPopoverHandlers on the same semantic object.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>mapFieldToSemanticObject</code>
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.getMapFieldToSemanticObject = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.comp.navpopover.NavigationPopoverHandler.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the semantic object calculated at the last Link press event
 * @returns {object} Map containing the copy of the available binding context.
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.getSemanticAttributes = function() { return new Object(); };

/**
 * Gets current value of property <code>semanticObject</code>.
 * 
 * The semantic object which is used to fill the navigation popover.
 * @returns {string} Value of property <code>semanticObject</code>
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.getSemanticObject = function() { return ""; };

/**
 * Gets current value of property <code>semanticObjectController</code>.
 * 
 * The semantic object controller controls events for several NavigationPopoverHandler controls. If the controller is not manually
 * set, the NavigationPopoverHandler tries to find a SemanticObjectController in the parent hierarchy.0
 * @returns {any} Value of property <code>semanticObjectController</code>
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.getSemanticObjectController = function() { return null; };

/**
 * Gets current value of property <code>semanticObjectLabel</code>.
 * 
 * The semantic objects's display name.
 * @returns {string} Value of property <code>semanticObjectLabel</code>
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.getSemanticObjectLabel = function() { return ""; };

/**
 * Gets the current value assigned to the field with the NavigationPopoverHandler's semantic object name.
 * @returns {object} The semantic object's value.
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.getSemanticObjectValue = function() { return new Object(); };

/**
 * Sets the associated <code>control</code>.
 * @param {sap.ui.core.Control} oControl Id of an element which becomes the new target of this control association; alternatively, an element instance may be given
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.setControl = function(oControl) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };

/**
 * Sets a new value for property <code>fieldName</code>.
 * 
 * The metadata fieldname for this NavigationPopoverHandler.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sFieldName New value for property <code>fieldName</code>
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.setFieldName = function(sFieldName) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };

/**
 * Sets a new value for property <code>mapFieldToSemanticObject</code>.
 * 
 * If set to 'false', the NavigationPopoverHandler will not replace its field name with the according semantic object name during the
 * calculation of the semantic attributes. This enables the usage of several NavigationPopoverHandlers on the same semantic object.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bMapFieldToSemanticObject New value for property <code>mapFieldToSemanticObject</code>
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.setMapFieldToSemanticObject = function(bMapFieldToSemanticObject) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };

/**
 * Sets a new value for property <code>semanticObject</code>.
 * 
 * The semantic object which is used to fill the navigation popover.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sSemanticObject New value for property <code>semanticObject</code>
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.setSemanticObject = function(sSemanticObject) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };

/**
 * Sets a new value for property <code>semanticObjectController</code>.
 * 
 * The semantic object controller controls events for several NavigationPopoverHandler controls. If the controller is not manually
 * set, the NavigationPopoverHandler tries to find a SemanticObjectController in the parent hierarchy.0
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {any} oSemanticObjectController New value for property <code>semanticObjectController</code>
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.setSemanticObjectController = function(oSemanticObjectController) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };

/**
 * Sets a new value for property <code>semanticObjectLabel</code>.
 * 
 * The semantic objects's display name.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sSemanticObjectLabel New value for property <code>semanticObjectLabel</code>
 * @returns {sap.ui.comp.navpopover.NavigationPopoverHandler} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.navpopover.NavigationPopoverHandler.prototype.setSemanticObjectLabel = function(sSemanticObjectLabel) { return new sap.ui.comp.navpopover.NavigationPopoverHandler(); };


// ---- sap.ui.comp.navpopover.SemanticObjectController --------------------------------------------------------------------------

/**
 * Constructor for a new navpopover/SemanticObjectController.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getIgnoredFields ignoredFields} : string</li>
 * <li>{@link #getPrefetchNavigationTargets prefetchNavigationTargets} : boolean (default: false)</li>
 * <li>{@link #getFieldSemanticObjectMap fieldSemanticObjectMap} : object</li>
 * <li>{@link #getEntitySet entitySet} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:navigationTargetsObtained navigationTargetsObtained} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beforePopoverOpens beforePopoverOpens} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:navigate navigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:prefetchDone prefetchDone} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The SemanticObjectController allows the user to register against semantic object navigation events as well as define semantic objects
 *        which should be ignored.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController = function(sId,mSettings) {};
/**
 * Event is fired before the navigation popover opens and before navigation target links are retrieved. Event can be used to change
 * the parameters used to retrieve the navigation targets. In case of SmartLink, <code>beforePopoverOpens</code> is fired after the
 * link has been clicked.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object for which the navigation targets will be retrieved.
 * @param {object} oControlEvent.getParameters.semanticAttributes Map containing the semantic attributes calculated from the binding that will be used to retrieve the navigation targets.
 * @param {function} oControlEvent.getParameters.setSemanticAttributes This callback function enables you to define a changed semantic attributes map. Signatures:
 * <code>setSemanticAttributes(oSemanticAttributesMap)</code> Parameter:
 * <ul>
 * <li>{object} oSemanticAttributesMap New map containing the semantic attributes to be used.</li>
 * </ul>
 * @param {function} oControlEvent.getParameters.setAppStateKey This callback function sets an application state key that is used over the cross-application navigation. Signatures:
 * <code>setAppStateKey(sAppStateKey)</code> Parameter:
 * <ul>
 * <li>{string} sAppStateKey</li>
 * </ul>
 * @param {string} oControlEvent.getParameters.originalId The ID of the control that fires this event. If <code>beforePopoverOpens</code> is registered on the SmartLink,
 * <code>originalId</code> is the same as the event's source ID which is also the SmartLink's ID. If the
 * <code>beforePopoverOpens</code> is registered on the SemanticObjectController, <code>originalId</code> helps to
 * identify the original SmartLink control which triggered the event.
 * @param {function} oControlEvent.getParameters.open This callback function triggers the retrieval of navigation targets and leads to the opening of the navigation popover.
 * Signatures: <code>open()</code> If <code>beforePopoverOpens</code> has been registered, <code>open</code> function
 * has to be called manually in order to open the navigation popover.
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.beforePopoverOpens = function(oControlEvent) {  };

/**
 * This event is fired after a navigation link on the navigation popover has been clicked. This event is only fired, if the user
 * left-clicks the link. Right-clicking the link and selecting 'Open in New Window' etc. in the context menu does not fire the event.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text The UI text shown in the clicked link.
 * @param {string} oControlEvent.getParameters.href The navigation target of the clicked link.
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object used to retrieve this target.
 * @param {object} oControlEvent.getParameters.semanticAttributes Map containing the semantic attributes used to retrieve this target.
 * @param {string} oControlEvent.getParameters.originalId The ID of the control that fires this event. If <code>navigate</code> is registered on the SmartLink,
 * <code>originalId</code> is the same as the event's source ID which is the SmartLink's ID. If <code>navigate</code> is
 * registered on the SemanticObjectController, <code>originalId</code> helps to identify the original SmartLink control
 * which triggered the event.
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.navigate = function(oControlEvent) {  };

/**
 * After the navigation targets have been retrieved, <code>navigationTargetsObtained</code> is fired and makes it possible you to
 * change the targets.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.comp.navpopover.LinkData} oControlEvent.getParameters.mainNavigation The main navigation object.
 * @param {sap.ui.comp.navpopover.LinkData[]} oControlEvent.getParameters.actions Array of available navigation target objects.
 * @param {sap.ui.comp.navpopover.LinkData} oControlEvent.getParameters.ownNavigation The navigation object for the own application. This navigation option is by default not visible on the popover.
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object for which the navigation targets have been retrieved.
 * @param {string} oControlEvent.getParameters.originalId The ID of the control that fires this event. If <code>navigationTargetsObtained</code> is registered on the SmartLink,
 * <code>originalId</code> is the same as the event's source ID which is also the SmartLink's ID. If
 * <code>navigationTargetsObtained</code> is registered on the SemanticObjectController, <code>originalId</code> helps to
 * identify the original SmartLink control which triggered the event.
 * @param {function} oControlEvent.getParameters.show This callback function shows the actual navigation popover. If the <code>navigationTargetsObtained</code> has been
 * registered, the <code>show</code> function has to be called manually in order to open the navigation popover. Signatures:
 * <code>show()</code>
 *  <code>show(oMainNavigation, aAvailableActions, oExtraContent)</code>
 *  <code>show(sMainNavigationId, oMainNavigation, aAvailableActions, oExtraContent)</code>
 * Parameters:
 * <ul>
 * <li>{string} sMainNavigationId The visible text for the main navigation section. If empty, the main navigation ID is
 * calculated using binding context of given source object (such as SmartLink).</li>
 * <li>{sap.ui.comp.navpopover.LinkData} oMainNavigation The main navigation object. If empty, property
 * <code>mainNavigation</code> will be used.</li>
 * <li>{sap.ui.comp.navpopover.LinkData[]} aAvailableActions Array containing the cross-application navigation links. If
 * empty, property <code>actions</code> will be used.</li>
 * <li>{sap.ui.core.Control} oExtraContent Control that will be displayed in extra content section on the popover.</li>
 * </ul>
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.navigationTargetsObtained = function(oControlEvent) {  };

/**
 * If the property <code>prefechtNavigationTargets</code> is set to <code>true</code>, event <code>prefetchDone</code>
 * is fired after all navigation targets have been retrieved.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.semanticObjects A map containing all semantic objects as keys for which at least one navigation target has been found. The value for each
 * semantic object key is an array containing the available actions found for this semantic object.
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.prefetchDone = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>beforePopoverOpens</code> event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.navpopover.SemanticObjectController</code> itself.
 * 
 * Event is fired before the navigation popover opens and before navigation target links are retrieved. Event can be used to change
 * the parameters used to retrieve the navigation targets. In case of SmartLink, <code>beforePopoverOpens</code> is fired after the
 * link has been clicked.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.SemanticObjectController</code> itself
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.attachBeforePopoverOpens = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>navigate</code> event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.navpopover.SemanticObjectController</code> itself.
 * 
 * This event is fired after a navigation link on the navigation popover has been clicked. This event is only fired, if the user
 * left-clicks the link. Right-clicking the link and selecting 'Open in New Window' etc. in the context menu does not fire the event.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.SemanticObjectController</code> itself
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.attachNavigate = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>navigationTargetsObtained</code> event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.navpopover.SemanticObjectController</code> itself.
 * 
 * After the navigation targets have been retrieved, <code>navigationTargetsObtained</code> is fired and makes it possible you to
 * change the targets.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.SemanticObjectController</code> itself
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.attachNavigationTargetsObtained = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>prefetchDone</code> event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.navpopover.SemanticObjectController</code> itself.
 * 
 * If the property <code>prefechtNavigationTargets</code> is set to <code>true</code>, event <code>prefetchDone</code>
 * is fired after all navigation targets have been retrieved.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.SemanticObjectController</code> itself
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.attachPrefetchDone = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>beforePopoverOpens</code> event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.detachBeforePopoverOpens = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>navigate</code> event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.detachNavigate = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>navigationTargetsObtained</code> event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.detachNavigationTargetsObtained = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>prefetchDone</code> event of this <code>sap.ui.comp.navpopover.SemanticObjectController</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.detachPrefetchDone = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Creates a new subclass of class sap.ui.comp.navpopover.SemanticObjectController with name <code>sClassName</code>
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
sap.ui.comp.navpopover.SemanticObjectController.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>beforePopoverOpens</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>semanticObject</code> of type <code>string</code>The semantic object for which the navigation targets will be retrieved.</li>
 * <li><code>semanticAttributes</code> of type <code>object</code>Map containing the semantic attributes calculated from the binding that will be used to retrieve the navigation targets.</li>
 * <li><code>setSemanticAttributes</code> of type <code>function</code>This callback function enables you to define a changed semantic attributes map. Signatures:
 * <code>setSemanticAttributes(oSemanticAttributesMap)</code> Parameter:
 * <ul>
 * <li>{object} oSemanticAttributesMap New map containing the semantic attributes to be used.</li>
 * </ul></li>
 * <li><code>setAppStateKey</code> of type <code>function</code>This callback function sets an application state key that is used over the cross-application navigation. Signatures:
 * <code>setAppStateKey(sAppStateKey)</code> Parameter:
 * <ul>
 * <li>{string} sAppStateKey</li>
 * </ul></li>
 * <li><code>originalId</code> of type <code>string</code>The ID of the control that fires this event. If <code>beforePopoverOpens</code> is registered on the SmartLink,
 * <code>originalId</code> is the same as the event's source ID which is also the SmartLink's ID. If the
 * <code>beforePopoverOpens</code> is registered on the SemanticObjectController, <code>originalId</code> helps to
 * identify the original SmartLink control which triggered the event.</li>
 * <li><code>open</code> of type <code>function</code>This callback function triggers the retrieval of navigation targets and leads to the opening of the navigation popover.
 * Signatures: <code>open()</code> If <code>beforePopoverOpens</code> has been registered, <code>open</code> function
 * has to be called manually in order to open the navigation popover.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.fireBeforePopoverOpens = function(mArguments) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Fires event <code>navigate</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>text</code> of type <code>string</code>The UI text shown in the clicked link.</li>
 * <li><code>href</code> of type <code>string</code>The navigation target of the clicked link.</li>
 * <li><code>semanticObject</code> of type <code>string</code>The semantic object used to retrieve this target.</li>
 * <li><code>semanticAttributes</code> of type <code>object</code>Map containing the semantic attributes used to retrieve this target.</li>
 * <li><code>originalId</code> of type <code>string</code>The ID of the control that fires this event. If <code>navigate</code> is registered on the SmartLink,
 * <code>originalId</code> is the same as the event's source ID which is the SmartLink's ID. If <code>navigate</code> is
 * registered on the SemanticObjectController, <code>originalId</code> helps to identify the original SmartLink control
 * which triggered the event.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.fireNavigate = function(mArguments) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Fires event <code>navigationTargetsObtained</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>mainNavigation</code> of type <code>sap.ui.comp.navpopover.LinkData</code>The main navigation object.</li>
 * <li><code>actions</code> of type <code>sap.ui.comp.navpopover.LinkData[]</code>Array of available navigation target objects.</li>
 * <li><code>ownNavigation</code> of type <code>sap.ui.comp.navpopover.LinkData</code>The navigation object for the own application. This navigation option is by default not visible on the popover.</li>
 * <li><code>semanticObject</code> of type <code>string</code>The semantic object for which the navigation targets have been retrieved.</li>
 * <li><code>originalId</code> of type <code>string</code>The ID of the control that fires this event. If <code>navigationTargetsObtained</code> is registered on the SmartLink,
 * <code>originalId</code> is the same as the event's source ID which is also the SmartLink's ID. If
 * <code>navigationTargetsObtained</code> is registered on the SemanticObjectController, <code>originalId</code> helps to
 * identify the original SmartLink control which triggered the event.</li>
 * <li><code>show</code> of type <code>function</code>This callback function shows the actual navigation popover. If the <code>navigationTargetsObtained</code> has been
 * registered, the <code>show</code> function has to be called manually in order to open the navigation popover. Signatures:
 * <code>show()</code>
 *  <code>show(oMainNavigation, aAvailableActions, oExtraContent)</code>
 *  <code>show(sMainNavigationId, oMainNavigation, aAvailableActions, oExtraContent)</code>
 * Parameters:
 * <ul>
 * <li>{string} sMainNavigationId The visible text for the main navigation section. If empty, the main navigation ID is
 * calculated using binding context of given source object (such as SmartLink).</li>
 * <li>{sap.ui.comp.navpopover.LinkData} oMainNavigation The main navigation object. If empty, property
 * <code>mainNavigation</code> will be used.</li>
 * <li>{sap.ui.comp.navpopover.LinkData[]} aAvailableActions Array containing the cross-application navigation links. If
 * empty, property <code>actions</code> will be used.</li>
 * <li>{sap.ui.core.Control} oExtraContent Control that will be displayed in extra content section on the popover.</li>
 * </ul></li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.fireNavigationTargetsObtained = function(mArguments) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Fires event <code>prefetchDone</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>semanticObjects</code> of type <code>object</code>A map containing all semantic objects as keys for which at least one navigation target has been found. The value for each
 * semantic object key is an array containing the available actions found for this semantic object.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.firePrefetchDone = function(mArguments) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Gets current value of property <code>entitySet</code>.
 * 
 * The name of the entity set used. If <code>entitySet</code> has not been defined, the SemanticObjectController tries to retrieve
 * the name from its parents. <b>Note:</b> This is not a dynamic UI5 property.
 * @returns {string} Value of property <code>entitySet</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.getEntitySet = function() { return ""; };

/**
 * Gets current value of property <code>fieldSemanticObjectMap</code>.
 * 
 * Maps the field names to the related semantic objects. When accessing this property for the first time, the mapping will be
 * calculated from the metadata within the provided model.
 * @returns {object} Value of property <code>fieldSemanticObjectMap</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.getFieldSemanticObjectMap = function() { return new Object(); };

/**
 * Gets current value of property <code>ignoredFields</code>.
 * 
 * Comma-separated list of field names that must not be displayed as links.
 * @returns {string} Value of property <code>ignoredFields</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.getIgnoredFields = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.navpopover.SemanticObjectController.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>prefetchNavigationTargets</code>.
 * 
 * If set to <code>true</code>, the SemanticObjectController will retrieve all navigation targets once and will disable links for
 * which no targets were found. Setting this value to <code>true</code> will trigger an additional roundtrip.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>prefetchNavigationTargets</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.getPrefetchNavigationTargets = function() { return false; };

/**
 * Adds the given control from the SemanticObjectControler and registers all relevant events
 * @param {sap.ui.comp.navpopover.SmartLink} oSemanticSmartControl the SmartLink which should be added.
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.registerControl = function(oSemanticSmartControl) {  };

/**
 * Sets a new value for property <code>entitySet</code>.
 * 
 * The name of the entity set used. If <code>entitySet</code> has not been defined, the SemanticObjectController tries to retrieve
 * the name from its parents. <b>Note:</b> This is not a dynamic UI5 property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sEntitySet New value for property <code>entitySet</code>
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.setEntitySet = function(sEntitySet) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Sets a new value for property <code>fieldSemanticObjectMap</code>.
 * 
 * Maps the field names to the related semantic objects. When accessing this property for the first time, the mapping will be
 * calculated from the metadata within the provided model.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oFieldSemanticObjectMap New value for property <code>fieldSemanticObjectMap</code>
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.setFieldSemanticObjectMap = function(oFieldSemanticObjectMap) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Sets a new value for property <code>ignoredFields</code>.
 * 
 * Comma-separated list of field names that must not be displayed as links.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sIgnoredFields New value for property <code>ignoredFields</code>
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.setIgnoredFields = function(sIgnoredFields) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Checks if the given SmartLink should be enabled or disabled and sets the state
 * @param {sap.ui.comp.navpopover.SmartLink} oSmartLink the SmartLink which should be enabled or disabled.
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.setIgnoredState = function(oSmartLink) {  };

/**
 * Sets a new value for property <code>prefetchNavigationTargets</code>.
 * 
 * If set to <code>true</code>, the SemanticObjectController will retrieve all navigation targets once and will disable links for
 * which no targets were found. Setting this value to <code>true</code> will trigger an additional roundtrip.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bPrefetchNavigationTargets New value for property <code>prefetchNavigationTargets</code>
 * @returns {sap.ui.comp.navpopover.SemanticObjectController} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.setPrefetchNavigationTargets = function(bPrefetchNavigationTargets) { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Removes the given control from the SemanticObjectControler and unregisters all relevant events
 * @param {sap.ui.comp.navpopover.SmartLink} oSemanticSmartControl the SmartLink which should be removed.
 * @public
 * 
 */
sap.ui.comp.navpopover.SemanticObjectController.prototype.unregisterControl = function(oSemanticSmartControl) {  };


// ---- sap.ui.comp.navpopover.SmartLink --------------------------------------------------------------------------

/**
 * Constructor for a new navpopover/SmartLink.
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
 * <li>{@link #getSemanticObject semanticObject} : string</li>
 * <li>{@link #getSemanticObjectController semanticObjectController} : any</li>
 * <li>{@link #getFieldName fieldName} : string</li>
 * <li>{@link #getSemanticObjectLabel semanticObjectLabel} : string</li>
 * <li>{@link #getCreateControlCallback createControlCallback} : object</li>
 * <li>{@link #getMapFieldToSemanticObject mapFieldToSemanticObject} : boolean (default: true)</li>
 * <li>{@link #getIgnoreLinkRendering ignoreLinkRendering} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getInnerControl innerControl} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:beforePopoverOpens beforePopoverOpens} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:navigationTargetsObtained navigationTargetsObtained} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:innerNavigate innerNavigate} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Link#constructor sap.m.Link}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class The SmartLink control uses a semantic object to display {@link sap.ui.comp.navpopover.NavigationPopover NavigationPopover} for further
 *        navigation steps.
 * @extends sap.m.Link
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.navpopover.SmartLink = function(sId,mSettings) {};
/**
 * Event is fired before the navigation popover opens and before navigation target links are getting retrieved. Event can be used to
 * change the parameters used to retrieve the navigation targets. In case of SmartLink, the <code>beforePopoverOpens</code> is fired
 * after the link has been clicked.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object for which the navigation targets will be retrieved.
 * @param {object} oControlEvent.getParameters.semanticAttributes Map containing the semantic attributes calculated from the binding that will be used to retrieve the navigation targets.
 * targets.
 * @param {function} oControlEvent.getParameters.setSemanticAttributes This callback function enables you to define a changed semantic attributes map. Signatures:
 * <code>setSemanticAttributes(oSemanticAttributesMap)</code> Parameter:
 * <ul>
 * <li>{object} oSemanticAttributesMap New map containing the semantic attributes to be used.</li>
 * </ul>
 * @param {function} oControlEvent.getParameters.setAppStateKey This callback function sets an application state key that is used over the cross-application navigation. Signatures:
 * <code>setAppStateKey(sAppStateKey)</code> Parameter:
 * <ul>
 * <li>{string} sAppStateKey</li>
 * </ul>
 * @param {string} oControlEvent.getParameters.originalId The ID of the SmartLink.
 * @param {function} oControlEvent.getParameters.open This callback function triggers the retrieval of navigation targets and leads to the opening of the navigation popover.
 * Signatures: <code>open()</code> If the <code>beforePopoverOpens</code> has been registered, the <code>open</code>
 * function has to be called manually in order to open the navigation popover.
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.beforePopoverOpens = function(oControlEvent) {  };

/**
 * This event is fired after a navigation link on the navigation popover has been clicked. This event is only fired, if the user
 * left-clicks the link. Right-clicking the link and selecting 'Open in New Window' etc. in the context menu does not fire the event.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.text The UI text shown in the clicked link.
 * @param {string} oControlEvent.getParameters.href The navigation target of the clicked link.
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object used to retrieve this target.
 * @param {object} oControlEvent.getParameters.semanticAttributes Map containing the semantic attributes used to retrieve this target.
 * @param {string} oControlEvent.getParameters.originalId The ID of the SmartLink.
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.innerNavigate = function(oControlEvent) {  };

/**
 * After the navigation targets are retrieved, <code>navigationTargetsObtained</code> is fired and provides the possibility to
 * change the targets.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.comp.navpopover.LinkData} oControlEvent.getParameters.mainNavigation The main navigation object.
 * @param {sap.ui.comp.navpopover.LinkData[]} oControlEvent.getParameters.actions Array of available navigation target objects.
 * @param {sap.ui.comp.navpopover.LinkData} oControlEvent.getParameters.ownNavigation The navigation object for the own application. This navigation option is by default not visible on the popover.
 * @param {string} oControlEvent.getParameters.semanticObject The semantic object for which the navigation targets have been retrieved.
 * @param {string} oControlEvent.getParameters.originalId The ID of the SmartLink.
 * @param {function} oControlEvent.getParameters.show This callback function shows the actual navigation popover. If the <code>navigationTargetsObtained</code> has been
 * registered, the <code>show</code> function has to be called manually in order to open the navigation popover. Signatures:
 * <code>show()</code>
 *  <code>show(oMainNavigation, aAvailableActions, oExtraContent)</code>
 *  <code>show(sMainNavigationId, oMainNavigation, aAvailableActions, oExtraContent)</code>
 * Parameters:
 * <ul>
 * <li>{string} sMainNavigationId The visible text for the main navigation section. If empty, the main navigation ID is
 * calculated using binding context of given source object (for example SmartLink).</li>
 * <li>{sap.ui.comp.navpopover.LinkData} oMainNavigation The main navigation object. If empty, property
 * <code>mainNavigation</code> will be used.</li>
 * <li>{sap.ui.comp.navpopover.LinkData[]} aAvailableActions Array containing the cross application navigation links. If
 * empty, property <code>actions</code> will be used.</li>
 * <li>{sap.ui.core.Control} oExtraContent Control that will be displayed in extra content section on the popover.</li>
 * </ul>
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.navigationTargetsObtained = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>beforePopoverOpens</code> event of this <code>sap.ui.comp.navpopover.SmartLink</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.navpopover.SmartLink</code> itself.
 * 
 * Event is fired before the navigation popover opens and before navigation target links are getting retrieved. Event can be used to
 * change the parameters used to retrieve the navigation targets. In case of SmartLink, the <code>beforePopoverOpens</code> is fired
 * after the link has been clicked.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.SmartLink</code> itself
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.attachBeforePopoverOpens = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>innerNavigate</code> event of this <code>sap.ui.comp.navpopover.SmartLink</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.navpopover.SmartLink</code> itself.
 * 
 * This event is fired after a navigation link on the navigation popover has been clicked. This event is only fired, if the user
 * left-clicks the link. Right-clicking the link and selecting 'Open in New Window' etc. in the context menu does not fire the event.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.SmartLink</code> itself
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.attachInnerNavigate = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>navigationTargetsObtained</code> event of this <code>sap.ui.comp.navpopover.SmartLink</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.navpopover.SmartLink</code> itself.
 * 
 * After the navigation targets are retrieved, <code>navigationTargetsObtained</code> is fired and provides the possibility to
 * change the targets.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.navpopover.SmartLink</code> itself
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.attachNavigationTargetsObtained = function(oData,fnFunction,oListener) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Destroys the innerControl in the aggregation <code>innerControl</code>.
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.destroyInnerControl = function() { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>beforePopoverOpens</code> event of this <code>sap.ui.comp.navpopover.SmartLink</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.detachBeforePopoverOpens = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>innerNavigate</code> event of this <code>sap.ui.comp.navpopover.SmartLink</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.detachInnerNavigate = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>navigationTargetsObtained</code> event of this <code>sap.ui.comp.navpopover.SmartLink</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.detachNavigationTargetsObtained = function(fnFunction,oListener) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Creates a new subclass of class sap.ui.comp.navpopover.SmartLink with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Link.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.SmartLink.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>beforePopoverOpens</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>semanticObject</code> of type <code>string</code>The semantic object for which the navigation targets will be retrieved.</li>
 * <li><code>semanticAttributes</code> of type <code>object</code>Map containing the semantic attributes calculated from the binding that will be used to retrieve the navigation targets.
 * targets.</li>
 * <li><code>setSemanticAttributes</code> of type <code>function</code>This callback function enables you to define a changed semantic attributes map. Signatures:
 * <code>setSemanticAttributes(oSemanticAttributesMap)</code> Parameter:
 * <ul>
 * <li>{object} oSemanticAttributesMap New map containing the semantic attributes to be used.</li>
 * </ul></li>
 * <li><code>setAppStateKey</code> of type <code>function</code>This callback function sets an application state key that is used over the cross-application navigation. Signatures:
 * <code>setAppStateKey(sAppStateKey)</code> Parameter:
 * <ul>
 * <li>{string} sAppStateKey</li>
 * </ul></li>
 * <li><code>originalId</code> of type <code>string</code>The ID of the SmartLink.</li>
 * <li><code>open</code> of type <code>function</code>This callback function triggers the retrieval of navigation targets and leads to the opening of the navigation popover.
 * Signatures: <code>open()</code> If the <code>beforePopoverOpens</code> has been registered, the <code>open</code>
 * function has to be called manually in order to open the navigation popover.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.fireBeforePopoverOpens = function(mArguments) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Fires event <code>innerNavigate</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>text</code> of type <code>string</code>The UI text shown in the clicked link.</li>
 * <li><code>href</code> of type <code>string</code>The navigation target of the clicked link.</li>
 * <li><code>semanticObject</code> of type <code>string</code>The semantic object used to retrieve this target.</li>
 * <li><code>semanticAttributes</code> of type <code>object</code>Map containing the semantic attributes used to retrieve this target.</li>
 * <li><code>originalId</code> of type <code>string</code>The ID of the SmartLink.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.fireInnerNavigate = function(mArguments) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Fires event <code>navigationTargetsObtained</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>mainNavigation</code> of type <code>sap.ui.comp.navpopover.LinkData</code>The main navigation object.</li>
 * <li><code>actions</code> of type <code>sap.ui.comp.navpopover.LinkData[]</code>Array of available navigation target objects.</li>
 * <li><code>ownNavigation</code> of type <code>sap.ui.comp.navpopover.LinkData</code>The navigation object for the own application. This navigation option is by default not visible on the popover.</li>
 * <li><code>semanticObject</code> of type <code>string</code>The semantic object for which the navigation targets have been retrieved.</li>
 * <li><code>originalId</code> of type <code>string</code>The ID of the SmartLink.</li>
 * <li><code>show</code> of type <code>function</code>This callback function shows the actual navigation popover. If the <code>navigationTargetsObtained</code> has been
 * registered, the <code>show</code> function has to be called manually in order to open the navigation popover. Signatures:
 * <code>show()</code>
 *  <code>show(oMainNavigation, aAvailableActions, oExtraContent)</code>
 *  <code>show(sMainNavigationId, oMainNavigation, aAvailableActions, oExtraContent)</code>
 * Parameters:
 * <ul>
 * <li>{string} sMainNavigationId The visible text for the main navigation section. If empty, the main navigation ID is
 * calculated using binding context of given source object (for example SmartLink).</li>
 * <li>{sap.ui.comp.navpopover.LinkData} oMainNavigation The main navigation object. If empty, property
 * <code>mainNavigation</code> will be used.</li>
 * <li>{sap.ui.comp.navpopover.LinkData[]} aAvailableActions Array containing the cross application navigation links. If
 * empty, property <code>actions</code> will be used.</li>
 * <li>{sap.ui.core.Control} oExtraContent Control that will be displayed in extra content section on the popover.</li>
 * </ul></li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.fireNavigationTargetsObtained = function(mArguments) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Gets current value of property <code>createControlCallback</code>.
 * 
 * Function that enables the SmartLink control to create an alternative control, which is displayed if no navigation targets are
 * available. The function has no parameters and has to return an instance of sap.ui.core.Control.
 * @returns {object} Value of property <code>createControlCallback</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getCreateControlCallback = function() { return new Object(); };

/**
 * Gets current value of property <code>fieldName</code>.
 * 
 * The metadata field name for this SmartLink control.
 * @returns {string} Value of property <code>fieldName</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getFieldName = function() { return ""; };

/**
 * Gets current value of property <code>ignoreLinkRendering</code>.
 * 
 * If set to <code>true</code>, the SmartLink control will render the <code>innerControl</code> or the control provided by
 * <code>createControlCallback</code> instead of the actual link. This is used for example by the SemanticObjectController if this
 * SmartLink is listed in its <code>ignoredFields</code> or no navigation targets were found during prefetch.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>ignoreLinkRendering</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getIgnoreLinkRendering = function() { return false; };

/**
 * Gets content of aggregation <code>innerControl</code>.
 * 
 * Control that is displayed instead of SmartLink, if the SmartLink is disabled (for example, if no navigation targets are available).
 * If <code>innerControl</code> is not provided, the SmartLink control tries to create one with property
 * <code>createControlCallback</code>.
 * @returns {sap.ui.core.Control}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getInnerControl = function() { return new sap.ui.core.Control(); };

/**
 * Gets the inner control's value, if no inner control is available, the SmartLink's text will be returned
 * @returns {object} the value
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getInnerControlValue = function() { return new Object(); };

/**
 * Gets current value of property <code>mapFieldToSemanticObject</code>.
 * 
 * If set to <code>false</code>, the SmartLink control will not replace its field name with the according
 * <code>semanticObject</code> property during the calculation of the semantic attributes. This enables the usage of several
 * SmartLinks on the same semantic object.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>mapFieldToSemanticObject</code>
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getMapFieldToSemanticObject = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.comp.navpopover.SmartLink.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.navpopover.SmartLink.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the semantic object calculated at the last Link press event
 * @returns {object} Map containing the copy of the available binding context.
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getSemanticAttributes = function() { return new Object(); };

/**
 * Gets current value of property <code>semanticObject</code>.
 * 
 * Name of semantic object which is used to fill the navigation popover.
 * @returns {string} Value of property <code>semanticObject</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getSemanticObject = function() { return ""; };

/**
 * Gets current value of property <code>semanticObjectController</code>.
 * 
 * The semantic object controller controls events for several SmartLink controls. If the controller is not set manually, it tries to
 * find a SemanticObjectController in its parent hierarchy.
 * @returns {any} Value of property <code>semanticObjectController</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getSemanticObjectController = function() { return null; };

/**
 * Gets current value of property <code>semanticObjectLabel</code>.
 * 
 * Shown label of semantic object.
 * @returns {string} Value of property <code>semanticObjectLabel</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getSemanticObjectLabel = function() { return ""; };

/**
 * Gets the current value assigned to the field with the SmartLink's semantic object name.
 * @returns {object} The semantic object's value.
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.getSemanticObjectValue = function() { return new Object(); };

/**
 * Sets a new value for property <code>createControlCallback</code>.
 * 
 * Function that enables the SmartLink control to create an alternative control, which is displayed if no navigation targets are
 * available. The function has no parameters and has to return an instance of sap.ui.core.Control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {object} oCreateControlCallback New value for property <code>createControlCallback</code>
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setCreateControlCallback = function(oCreateControlCallback) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Sets a new value for property <code>fieldName</code>.
 * 
 * The metadata field name for this SmartLink control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sFieldName New value for property <code>fieldName</code>
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setFieldName = function(sFieldName) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Sets a new value for property <code>ignoreLinkRendering</code>.
 * 
 * If set to <code>true</code>, the SmartLink control will render the <code>innerControl</code> or the control provided by
 * <code>createControlCallback</code> instead of the actual link. This is used for example by the SemanticObjectController if this
 * SmartLink is listed in its <code>ignoredFields</code> or no navigation targets were found during prefetch.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIgnoreLinkRendering New value for property <code>ignoreLinkRendering</code>
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setIgnoreLinkRendering = function(bIgnoreLinkRendering) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Sets the aggregated <code>innerControl</code>.
 * @param {sap.ui.core.Control} oInnerControl The innerControl to set
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setInnerControl = function(oInnerControl) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Sets a new value for property <code>mapFieldToSemanticObject</code>.
 * 
 * If set to <code>false</code>, the SmartLink control will not replace its field name with the according
 * <code>semanticObject</code> property during the calculation of the semantic attributes. This enables the usage of several
 * SmartLinks on the same semantic object.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bMapFieldToSemanticObject New value for property <code>mapFieldToSemanticObject</code>
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setMapFieldToSemanticObject = function(bMapFieldToSemanticObject) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Sets a new value for property <code>semanticObject</code>.
 * 
 * Name of semantic object which is used to fill the navigation popover.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sSemanticObject New value for property <code>semanticObject</code>
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setSemanticObject = function(sSemanticObject) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Sets a new value for property <code>semanticObjectController</code>.
 * 
 * The semantic object controller controls events for several SmartLink controls. If the controller is not set manually, it tries to
 * find a SemanticObjectController in its parent hierarchy.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {any} oSemanticObjectController New value for property <code>semanticObjectController</code>
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setSemanticObjectController = function(oSemanticObjectController) { return new sap.ui.comp.navpopover.SmartLink(); };

/**
 * Sets a new value for property <code>semanticObjectLabel</code>.
 * 
 * Shown label of semantic object.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sSemanticObjectLabel New value for property <code>semanticObjectLabel</code>
 * @returns {sap.ui.comp.navpopover.SmartLink} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.navpopover.SmartLink.prototype.setSemanticObjectLabel = function(sSemanticObjectLabel) { return new sap.ui.comp.navpopover.SmartLink(); };


// ---- sap.ui.comp.odata.FieldSelector --------------------------------------------------------------------------

/**
 * Constructor for a new odata/FieldSelector.
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
 * <li>{@link #getShowSearchBar showSearchBar} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:fieldSelectionChanged fieldSelectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Reuse control which displays the properties of OData entity sets.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.odata.FieldSelector = function(sId,mSettings) {};
/**
 * User selected a different field.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.fieldSelectionChanged = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>fieldSelectionChanged</code> event of this <code>sap.ui.comp.odata.FieldSelector</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.odata.FieldSelector</code> itself.
 * 
 * User selected a different field.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.odata.FieldSelector</code> itself
 * @returns {sap.ui.comp.odata.FieldSelector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.attachFieldSelectionChanged = function(oData,fnFunction,oListener) { return new sap.ui.comp.odata.FieldSelector(); };

/**
 * Destroys the inner references
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.destroy = function() {  };

/**
 * Destroys the content in the aggregation <code>content</code>.
 * @returns {sap.ui.comp.odata.FieldSelector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.destroyContent = function() { return new sap.ui.comp.odata.FieldSelector(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>fieldSelectionChanged</code> event of this <code>sap.ui.comp.odata.FieldSelector</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.odata.FieldSelector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.detachFieldSelectionChanged = function(fnFunction,oListener) { return new sap.ui.comp.odata.FieldSelector(); };

/**
 * Cleans up the control
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.exit = function() {  };

/**
 * Creates a new subclass of class sap.ui.comp.odata.FieldSelector with name <code>sClassName</code>
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
sap.ui.comp.odata.FieldSelector.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>fieldSelectionChanged</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.odata.FieldSelector} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.fireFieldSelectionChanged = function(mArguments) { return new sap.ui.comp.odata.FieldSelector(); };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * Content of the control itself
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Returns a metadata object for class sap.ui.comp.odata.FieldSelector.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.odata.FieldSelector.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns a map with the name of the entity set and the key of the selected field.
 * @public
 * @returns {object} map of the name of the entity set having the selected field as kex
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.getSelectedField = function() { return new Object(); };

/**
 * Gets current value of property <code>showSearchBar</code>.
 * 
 * Indicates to show a search bar for property names inside a selected entity set.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showSearchBar</code>
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.getShowSearchBar = function() { return false; };

/**
 * Sets the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.ui.comp.odata.FieldSelector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.setContent = function(oContent) { return new sap.ui.comp.odata.FieldSelector(); };

/**
 * Set the model for the entity and fields of an odata service
 * @param {sap.ui.model.odata.ODataModel} oModel - odata model
 * @param {string} sEntityTypes - entity type name(s) separated by comma character or array
 * @param {boolean} bShowExtFieldButton - indicates if the create new field button will be displayed or not
 * @param {Array} aIgnoredFields - List of fields which should be ignored
 * @param {Object.<bindingPath:string, fieldListElement:Object>} mBindingPathToFieldListElement - Map absolute odata binding paths to the field list elements
 * @param {Object.<id:string, fieldListElement:Object>} mIdToFieldListElement - Map field list element ids to the field list elements
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.setModel = function(oModel,sEntityTypes,bShowExtFieldButton,aIgnoredFields,mBindingPathToFieldListElement,mIdToFieldListElement) {  };

/**
 * Sets a new value for property <code>showSearchBar</code>.
 * 
 * Indicates to show a search bar for property names inside a selected entity set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSearchBar New value for property <code>showSearchBar</code>
 * @returns {sap.ui.comp.odata.FieldSelector} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.setShowSearchBar = function(bShowSearchBar) { return new sap.ui.comp.odata.FieldSelector(); };

/**
 * Based on the renamed label contained in the field list,
 * the label contained in the field selector will be updated.
 * @param {Object} oFieldListElement - Field list element containing all relevant properties needed for the update
 * @public
 * 
 */
sap.ui.comp.odata.FieldSelector.prototype.updateFieldLabel = function(oFieldListElement) {  };


// ---- sap.ui.comp.personalization.AggregationRole --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.personalization.AggregationRole.toString = function() { return ""; };

// ---- sap.ui.comp.personalization.ChangeType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.personalization.ChangeType.toString = function() { return ""; };

// ---- sap.ui.comp.personalization.ResetType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.personalization.ResetType.toString = function() { return ""; };

// ---- sap.ui.comp.smartchart.SmartChart --------------------------------------------------------------------------

/**
 * Constructor for a new smartchart/SmartChart.
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
 * <li>{@link #getEntitySet entitySet} : string</li>
 * <li>{@link #getSmartFilterId smartFilterId} : string</li>
 * <li>{@link #getIgnoredFields ignoredFields} : string</li>
 * <li>{@link #getRequestAtLeastFields requestAtLeastFields} : string</li>
 * <li>{@link #getIgnoreFromPersonalisation ignoreFromPersonalisation} : string</li>
 * <li>{@link #getChartType chartType} : string</li>
 * <li>{@link #getIgnoredChartTypes ignoredChartTypes} : string</li>
 * <li>{@link #getUseVariantManagement useVariantManagement} : boolean (default: true)</li>
 * <li>{@link #getUseChartPersonalisation useChartPersonalisation} : boolean (default: true)</li>
 * <li>{@link #getHeader header} : string</li>
 * <li>{@link #getPersistencyKey persistencyKey} : string</li>
 * <li>{@link #getCurrentVariantId currentVariantId} : string</li>
 * <li>{@link #getEnableAutoBinding enableAutoBinding} : boolean (default: false)</li>
 * <li>{@link #getChartBindingPath chartBindingPath} : string</li>
 * <li>{@link #getShowDrillButtons showDrillButtons} : boolean (default: true)</li>
 * <li>{@link #getShowZoomButtons showZoomButtons} : boolean (default: true)</li>
 * <li>{@link #getShowSemanticNavigationButton showSemanticNavigationButton} : boolean (default: true)</li>
 * <li>{@link #getShowLegendButton showLegendButton} : boolean (default: true)</li>
 * <li>{@link #getLegendVisible legendVisible} : boolean (default: true)</li>
 * <li>{@link #getSelectionMode selectionMode} : sap.chart.SelectionMode (default: Single)</li>
 * <li>{@link #getShowFullScreenButton showFullScreenButton} : boolean (default: true)</li>
 * <li>{@link #getUseTooltip useTooltip} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getToolbar toolbar} : sap.m.Toolbar</li>
 * <li>{@link #getSemanticObjectController semanticObjectController} : sap.ui.comp.navpopover.SemanticObjectController</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beforeRebindChart beforeRebindChart} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:dataReceived dataReceived} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantInitialise afterVariantInitialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantSave afterVariantSave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantApply afterVariantApply} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:showOverlay showOverlay} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.VBox#constructor sap.m.VBox}
 * can be used as well.
 * @param {string} [sId] ID for the new control that is generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class The SmartChart control creates a chart based on OData metadata and the configuration specified. The entitySet property must be specified
 *        to use the control. This property is used to fetch fields from OData metadata, from which the chart UI will be generated. It can also be
 *        used to fetch the actual chart data.<br>
 *        Based on the chartType property, this control will render the corresponding chart.<br>
 *        <b>Note:</b> Most of the attributes are not dynamic and cannot be changed once the control has been initialized.
 * @extends sap.m.VBox
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartchart.SmartChart = function(sId,mSettings) {};
/**
 * This event is fired after a variant has been applied.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.afterVariantApply = function(oControlEvent) {  };

/**
 * This event is fired after the variant management in the SmartChart control has been initialized.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.afterVariantInitialise = function(oControlEvent) {  };

/**
 * This event is fired after a variant has been saved. This event can be used to retrieve the ID of the saved variant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.afterVariantSave = function(oControlEvent) {  };

/**
 * This event is fired right before the binding is done.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.beforeRebindChart = function(oControlEvent) {  };

/**
 * This event is fired when data is received after binding. This event is fired if the binding for the chart is done by the SmartChart
 * control itself.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.dataReceived = function(oControlEvent) {  };

/**
 * This event is fired once the control has been initialized.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.initialise = function(oControlEvent) {  };

/**
 * This event is fired right before the overlay is shown.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.showOverlay = function(oControlEvent) {  };

/**
 * Interface function for SmartVariantManagement control that applies the current variant.
 * @param {Object} oVariantJSON The variant JSON
 * @param {string} sContext Describes the context in which the variant has been applied
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.applyVariant = function(oVariantJSON,sContext) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterVariantApply</code> event of this <code>sap.ui.comp.smartchart.SmartChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartchart.SmartChart</code> itself.
 * 
 * This event is fired after a variant has been applied.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartchart.SmartChart</code> itself
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.attachAfterVariantApply = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterVariantInitialise</code> event of this <code>sap.ui.comp.smartchart.SmartChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartchart.SmartChart</code> itself.
 * 
 * This event is fired after the variant management in the SmartChart control has been initialized.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartchart.SmartChart</code> itself
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.attachAfterVariantInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterVariantSave</code> event of this <code>sap.ui.comp.smartchart.SmartChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartchart.SmartChart</code> itself.
 * 
 * This event is fired after a variant has been saved. This event can be used to retrieve the ID of the saved variant.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartchart.SmartChart</code> itself
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.attachAfterVariantSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>beforeRebindChart</code> event of this <code>sap.ui.comp.smartchart.SmartChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartchart.SmartChart</code> itself.
 * 
 * This event is fired right before the binding is done.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartchart.SmartChart</code> itself
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.attachBeforeRebindChart = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>dataReceived</code> event of this <code>sap.ui.comp.smartchart.SmartChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartchart.SmartChart</code> itself.
 * 
 * This event is fired when data is received after binding. This event is fired if the binding for the chart is done by the SmartChart
 * control itself.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartchart.SmartChart</code> itself
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.attachDataReceived = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>initialise</code> event of this <code>sap.ui.comp.smartchart.SmartChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartchart.SmartChart</code> itself.
 * 
 * This event is fired once the control has been initialized.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartchart.SmartChart</code> itself
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>showOverlay</code> event of this <code>sap.ui.comp.smartchart.SmartChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartchart.SmartChart</code> itself.
 * 
 * This event is fired right before the overlay is shown.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartchart.SmartChart</code> itself
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.attachShowOverlay = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Destroys the semanticObjectController in the aggregation <code>semanticObjectController</code>.
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.destroySemanticObjectController = function() { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Destroys the toolbar in the aggregation <code>toolbar</code>.
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.destroyToolbar = function() { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterVariantApply</code> event of this <code>sap.ui.comp.smartchart.SmartChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.detachAfterVariantApply = function(fnFunction,oListener) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterVariantInitialise</code> event of this <code>sap.ui.comp.smartchart.SmartChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.detachAfterVariantInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterVariantSave</code> event of this <code>sap.ui.comp.smartchart.SmartChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.detachAfterVariantSave = function(fnFunction,oListener) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>beforeRebindChart</code> event of this <code>sap.ui.comp.smartchart.SmartChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.detachBeforeRebindChart = function(fnFunction,oListener) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>dataReceived</code> event of this <code>sap.ui.comp.smartchart.SmartChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.detachDataReceived = function(fnFunction,oListener) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>initialise</code> event of this <code>sap.ui.comp.smartchart.SmartChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>showOverlay</code> event of this <code>sap.ui.comp.smartchart.SmartChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.detachShowOverlay = function(fnFunction,oListener) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Cleans up the control.
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.exit = function() {  };

/**
 * Creates a new subclass of class sap.ui.comp.smartchart.SmartChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.VBox.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartchart.SmartChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Interface function for the SmartVariantManagement control that returns the currently used variant data.
 * @public
 * @returns {json} The currently used variant
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.fetchVariant = function() { return null; };

/**
 * Fires event <code>afterVariantApply</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.fireAfterVariantApply = function(mArguments) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Fires event <code>afterVariantInitialise</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.fireAfterVariantInitialise = function(mArguments) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Fires event <code>afterVariantSave</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.fireAfterVariantSave = function(mArguments) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Fires event <code>beforeRebindChart</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.fireBeforeRebindChart = function(mArguments) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Fires event <code>dataReceived</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.fireDataReceived = function(mArguments) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Fires event <code>initialise</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.fireInitialise = function(mArguments) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Fires event <code>showOverlay</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.fireShowOverlay = function(mArguments) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Returns the chart object used internally.
 * @public
 * @returns {object} The chart
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getChart = function() { return new Object(); };

/**
 * Gets current value of property <code>chartBindingPath</code>.
 * 
 * Specifies the path that is used during the binding of the chart. If not specified, the entitySet property is used instead. (used
 * only if binding is established internally/automatically - See enableAutoBinding)
 * @returns {string} Value of property <code>chartBindingPath</code>
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getChartBindingPath = function() { return ""; };

/**
 * Gets current value of property <code>chartType</code>.
 * 
 * Specifies the type of chart to be created by the SmartChart control.
 * @returns {string} Value of property <code>chartType</code>
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getChartType = function() { return ""; };

/**
 * Returns the ID of the currently selected variant.
 * @public
 * @returns {string} ID of the currently selected variant
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getCurrentVariantId = function() { return ""; };

/**
 * Gets current value of property <code>enableAutoBinding</code>.
 * 
 * If set to <code>true</code>, this enables automatic binding of the chart using the chartBindingPath (if it exists) or entitySet
 * property. This happens right after the <code>initialise</code> event has been fired.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableAutoBinding</code>
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getEnableAutoBinding = function() { return false; };

/**
 * Gets current value of property <code>entitySet</code>.
 * 
 * The entity set name from which to fetch data and generate the columns.<br>
 * <b>Note</b> This is not a dynamic property.
 * @returns {string} Value of property <code>entitySet</code>
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getEntitySet = function() { return ""; };

/**
 * Gets current value of property <code>header</code>.
 * 
 * Specifies header text that is shown in the chart.
 * @returns {string} Value of property <code>header</code>
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getHeader = function() { return ""; };

/**
 * Gets current value of property <code>ignoredChartTypes</code>.
 * 
 * CSV of fields that is not shown in the list of available chart types.<br>
 * <b>Note:</b> No validation is done. Please ensure that you do not add spaces or special characters.
 * @returns {string} Value of property <code>ignoredChartTypes</code>
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getIgnoredChartTypes = function() { return ""; };

/**
 * Gets current value of property <code>ignoredFields</code>.
 * 
 * CSV of fields that must be ignored in the OData metadata by the SmartChart control.<br>
 * <b>Note:</b> No validation is done. Please ensure that you do not add spaces or special characters.
 * @returns {string} Value of property <code>ignoredFields</code>
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getIgnoredFields = function() { return ""; };

/**
 * Gets current value of property <code>ignoreFromPersonalisation</code>.
 * 
 * CSV of fields that is not shown in the personalization dialog.<br>
 * <b>Note:</b> No validation is done. Please ensure that you do not add spaces or special characters.
 * @returns {string} Value of property <code>ignoreFromPersonalisation</code>
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getIgnoreFromPersonalisation = function() { return ""; };

/**
 * Gets current value of property <code>legendVisible</code>.
 * 
 * Set chart's legend properties.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>legendVisible</code>
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getLegendVisible = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.comp.smartchart.SmartChart.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartchart.SmartChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>persistencyKey</code>.
 * 
 * Key used to access personalization data.
 * @returns {string} Value of property <code>persistencyKey</code>
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getPersistencyKey = function() { return ""; };

/**
 * Gets current value of property <code>requestAtLeastFields</code>.
 * 
 * CSV of fields that must be always requested by the backend system.<br>
 * This property is mainly meant to be used if there is no PresentationVariant annotation.<br>
 * If both this property and the PresentationVariant annotation exist, the select request sent to the backend would be a combination
 * of both.<br>
 * <b>Note:</b> No validation is done. Please ensure that you do not add spaces or special characters.
 * @returns {string} Value of property <code>requestAtLeastFields</code>
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getRequestAtLeastFields = function() { return ""; };

/**
 * Gets current value of property <code>selectionMode</code>.
 * 
 * Chart selection mode. Supported values are {@link sap.chart.SelectionMode.Single} or {@link sap.chart.SelectionMode.Multi}, case
 * insensitive, always return in upper case. Unsupported values will be ignored.
 * 
 * Default value is <code>Single</code>.
 * @returns {sap.chart.SelectionMode} Value of property <code>selectionMode</code>
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getSelectionMode = function() { return new sap.chart.SelectionMode(); };

/**
 * Gets content of aggregation <code>semanticObjectController</code>.
 * 
 * The Semantic Object Controller allows the user to specify and overwrite functionality for semantic object navigation.
 * @returns {sap.ui.comp.navpopover.SemanticObjectController}
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getSemanticObjectController = function() { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Gets current value of property <code>showDrillButtons</code>.
 * 
 * Controls the visibility of the Drill Up and Drill Down buttons.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showDrillButtons</code>
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getShowDrillButtons = function() { return false; };

/**
 * Gets current value of property <code>showFullScreenButton</code>.
 * 
 * Controls the visibility of the FullScreen button.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showFullScreenButton</code>
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getShowFullScreenButton = function() { return false; };

/**
 * Gets current value of property <code>showLegendButton</code>.
 * 
 * Controls the visibility of the Navigation button
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showLegendButton</code>
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getShowLegendButton = function() { return false; };

/**
 * Gets current value of property <code>showSemanticNavigationButton</code>.
 * 
 * Controls the visibility of the Navigation button
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showSemanticNavigationButton</code>
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getShowSemanticNavigationButton = function() { return false; };

/**
 * Gets current value of property <code>showZoomButtons</code>.
 * 
 * Controls the visibility of the Zoom In and Zoom Out buttons.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showZoomButtons</code>
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getShowZoomButtons = function() { return false; };

/**
 * Gets current value of property <code>smartFilterId</code>.
 * 
 * ID of the corresponding SmartFilter control. If specified, the SmartChart control searches for the SmartFilter control (also in the
 * closest parent view) and attaches to the relevant events of the SmartFilter control to fetch data, show overlay etc.
 * @returns {string} Value of property <code>smartFilterId</code>
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getSmartFilterId = function() { return ""; };

/**
 * Gets content of aggregation <code>toolbar</code>.
 * 
 * A toolbar that can be added by the user to define their own custom buttons, icons, etc. If this is specified, the SmartChart
 * control does not create an additional toolbar, but uses this one.
 * @returns {sap.m.Toolbar}
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getToolbar = function() { return new sap.m.Toolbar(); };

/**
 * Gets current value of property <code>useChartPersonalisation</code>.
 * 
 * If set to <code>true</code>, personalized chart settings are defined. If you want to persist the chart personalization, you need
 * to specify the persistencyKey property.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>useChartPersonalisation</code>
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getUseChartPersonalisation = function() { return false; };

/**
 * Gets current value of property <code>useTooltip</code>.
 * 
 * Controls the usage either of the tooltip or the popover. If set to <code>true</code>, a tooltip will be displayed.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>useTooltip</code>
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getUseTooltip = function() { return false; };

/**
 * Gets current value of property <code>useVariantManagement</code>.
 * 
 * If set to <code>true</code>, variants are used. As a prerequisite, you need to specify the persistencyKey property.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>useVariantManagement</code>
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.getUseVariantManagement = function() { return false; };

/**
 * This can be used to trigger binding on the chart used in the SmartChart
 * @protected
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.rebindChart = function() {  };

/**
 * Sets a new value for property <code>chartBindingPath</code>.
 * 
 * Specifies the path that is used during the binding of the chart. If not specified, the entitySet property is used instead. (used
 * only if binding is established internally/automatically - See enableAutoBinding)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sChartBindingPath New value for property <code>chartBindingPath</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setChartBindingPath = function(sChartBindingPath) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>chartType</code>.
 * 
 * Specifies the type of chart to be created by the SmartChart control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sChartType New value for property <code>chartType</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setChartType = function(sChartType) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Applies the current variant based on the sVariantId parameter. If an empty string or null or undefined have been passed, the standard variant
 * will be used. The standard variant will also be used if the passed sVariantId cannot be found. If the flexibility variant, the content for the
 * standard variant, or the personalizable control cannot be obtained, no changes will be made.
 * @public
 * @param {string} sVariantId ID of the currently selected variant
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setCurrentVariantId = function(sVariantId) {  };

/**
 * Sets a new value for property <code>enableAutoBinding</code>.
 * 
 * If set to <code>true</code>, this enables automatic binding of the chart using the chartBindingPath (if it exists) or entitySet
 * property. This happens right after the <code>initialise</code> event has been fired.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableAutoBinding New value for property <code>enableAutoBinding</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setEnableAutoBinding = function(bEnableAutoBinding) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * The entity set name in the OData metadata against which the chart must be bound.
 * @param {string} sEntitySetName The entity set
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setEntitySet = function(sEntitySetName) {  };

/**
 * Sets a new value for property <code>header</code>.
 * 
 * Specifies header text that is shown in the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sHeader New value for property <code>header</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setHeader = function(sHeader) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>ignoredChartTypes</code>.
 * 
 * CSV of fields that is not shown in the list of available chart types.<br>
 * <b>Note:</b> No validation is done. Please ensure that you do not add spaces or special characters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sIgnoredChartTypes New value for property <code>ignoredChartTypes</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setIgnoredChartTypes = function(sIgnoredChartTypes) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>ignoredFields</code>.
 * 
 * CSV of fields that must be ignored in the OData metadata by the SmartChart control.<br>
 * <b>Note:</b> No validation is done. Please ensure that you do not add spaces or special characters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sIgnoredFields New value for property <code>ignoredFields</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setIgnoredFields = function(sIgnoredFields) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>ignoreFromPersonalisation</code>.
 * 
 * CSV of fields that is not shown in the personalization dialog.<br>
 * <b>Note:</b> No validation is done. Please ensure that you do not add spaces or special characters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sIgnoreFromPersonalisation New value for property <code>ignoreFromPersonalisation</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setIgnoreFromPersonalisation = function(sIgnoreFromPersonalisation) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>legendVisible</code>.
 * 
 * Set chart's legend properties.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bLegendVisible New value for property <code>legendVisible</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setLegendVisible = function(bLegendVisible) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>persistencyKey</code>.
 * 
 * Key used to access personalization data.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sPersistencyKey New value for property <code>persistencyKey</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setPersistencyKey = function(sPersistencyKey) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>requestAtLeastFields</code>.
 * 
 * CSV of fields that must be always requested by the backend system.<br>
 * This property is mainly meant to be used if there is no PresentationVariant annotation.<br>
 * If both this property and the PresentationVariant annotation exist, the select request sent to the backend would be a combination
 * of both.<br>
 * <b>Note:</b> No validation is done. Please ensure that you do not add spaces or special characters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sRequestAtLeastFields New value for property <code>requestAtLeastFields</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setRequestAtLeastFields = function(sRequestAtLeastFields) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>selectionMode</code>.
 * 
 * Chart selection mode. Supported values are {@link sap.chart.SelectionMode.Single} or {@link sap.chart.SelectionMode.Multi}, case
 * insensitive, always return in upper case. Unsupported values will be ignored.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Single</code>.
 * @param {sap.chart.SelectionMode} sSelectionMode New value for property <code>selectionMode</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setSelectionMode = function(sSelectionMode) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets the aggregated <code>semanticObjectController</code>.
 * @param {sap.ui.comp.navpopover.SemanticObjectController} oSemanticObjectController The semanticObjectController to set
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setSemanticObjectController = function(oSemanticObjectController) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>showDrillButtons</code>.
 * 
 * Controls the visibility of the Drill Up and Drill Down buttons.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowDrillButtons New value for property <code>showDrillButtons</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setShowDrillButtons = function(bShowDrillButtons) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>showFullScreenButton</code>.
 * 
 * Controls the visibility of the FullScreen button.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowFullScreenButton New value for property <code>showFullScreenButton</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setShowFullScreenButton = function(bShowFullScreenButton) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>showLegendButton</code>.
 * 
 * Controls the visibility of the Navigation button
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowLegendButton New value for property <code>showLegendButton</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setShowLegendButton = function(bShowLegendButton) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>showSemanticNavigationButton</code>.
 * 
 * Controls the visibility of the Navigation button
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSemanticNavigationButton New value for property <code>showSemanticNavigationButton</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setShowSemanticNavigationButton = function(bShowSemanticNavigationButton) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>showZoomButtons</code>.
 * 
 * Controls the visibility of the Zoom In and Zoom Out buttons.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowZoomButtons New value for property <code>showZoomButtons</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setShowZoomButtons = function(bShowZoomButtons) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>smartFilterId</code>.
 * 
 * ID of the corresponding SmartFilter control. If specified, the SmartChart control searches for the SmartFilter control (also in the
 * closest parent view) and attaches to the relevant events of the SmartFilter control to fetch data, show overlay etc.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sSmartFilterId New value for property <code>smartFilterId</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setSmartFilterId = function(sSmartFilterId) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets the aggregated <code>toolbar</code>.
 * @param {sap.m.Toolbar} oToolbar The toolbar to set
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setToolbar = function(oToolbar) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>useChartPersonalisation</code>.
 * 
 * If set to <code>true</code>, personalized chart settings are defined. If you want to persist the chart personalization, you need
 * to specify the persistencyKey property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseChartPersonalisation New value for property <code>useChartPersonalisation</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setUseChartPersonalisation = function(bUseChartPersonalisation) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>useTooltip</code>.
 * 
 * Controls the usage either of the tooltip or the popover. If set to <code>true</code>, a tooltip will be displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseTooltip New value for property <code>useTooltip</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setUseTooltip = function(bUseTooltip) { return new sap.ui.comp.smartchart.SmartChart(); };

/**
 * Sets a new value for property <code>useVariantManagement</code>.
 * 
 * If set to <code>true</code>, variants are used. As a prerequisite, you need to specify the persistencyKey property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseVariantManagement New value for property <code>useVariantManagement</code>
 * @returns {sap.ui.comp.smartchart.SmartChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartchart.SmartChart.prototype.setUseVariantManagement = function(bUseVariantManagement) { return new sap.ui.comp.smartchart.SmartChart(); };


// ---- sap.ui.comp.smartfield.Configuration --------------------------------------------------------------------------

/**
 * Constructor for a new smartfield/Configuration.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getControlType controlType} : sap.ui.comp.smartfield.ControlType</li>
 * <li>{@link #getDisplayBehaviour displayBehaviour} : sap.ui.comp.smartfield.DisplayBehaviour</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The configuration allows to further define the behavior of a SmartField.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfield.Configuration = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.smartfield.Configuration with name <code>sClassName</code>
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
sap.ui.comp.smartfield.Configuration.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>controlType</code>.
 * 
 * By default the SmartField chooses the controls it hosts by interpreting OData meta data. This property allows to overwrite the default behavior to some
 * extent; for example this property allows to define that an OData property of type Edm.Boolean is displayed as combo box.
 * @returns {sap.ui.comp.smartfield.ControlType} Value of property <code>controlType</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.Configuration.prototype.getControlType = function() { return new sap.ui.comp.smartfield.ControlType(); };

/**
 * Gets current value of property <code>displayBehaviour</code>.
 * 
 * The property specifies how value helps available for input fields are presented; for example whether for the result of a value help request
 * descriptions of the values that can possibly be chosen from the value help are displayed.
 * @returns {sap.ui.comp.smartfield.DisplayBehaviour} Value of property <code>displayBehaviour</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.Configuration.prototype.getDisplayBehaviour = function() { return new sap.ui.comp.smartfield.DisplayBehaviour(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartfield.Configuration.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfield.Configuration.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property <code>controlType</code>.
 * 
 * By default the SmartField chooses the controls it hosts by interpreting OData meta data. This property allows to overwrite the default behavior to some
 * extent; for example this property allows to define that an OData property of type Edm.Boolean is displayed as combo box.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.comp.smartfield.ControlType} sControlType New value for property <code>controlType</code>
 * @returns {sap.ui.comp.smartfield.Configuration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.Configuration.prototype.setControlType = function(sControlType) { return new sap.ui.comp.smartfield.Configuration(); };

/**
 * Sets a new value for property <code>displayBehaviour</code>.
 * 
 * The property specifies how value helps available for input fields are presented; for example whether for the result of a value help request
 * descriptions of the values that can possibly be chosen from the value help are displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.comp.smartfield.DisplayBehaviour} sDisplayBehaviour New value for property <code>displayBehaviour</code>
 * @returns {sap.ui.comp.smartfield.Configuration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.Configuration.prototype.setDisplayBehaviour = function(sDisplayBehaviour) { return new sap.ui.comp.smartfield.Configuration(); };


// ---- sap.ui.comp.smartfield.ControlContextType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.smartfield.ControlContextType.toString = function() { return ""; };

// ---- sap.ui.comp.smartfield.ControlProposal --------------------------------------------------------------------------

/**
 * Constructor for a new smartfield/ControlProposal.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getControlType controlType} : sap.ui.comp.smartfield.ControlProposalType (default: None)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getObjectStatus objectStatus} : sap.ui.comp.smartfield.ObjectStatus</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Proposes a control to be rendered. The smart field may ignore the proposal.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfield.ControlProposal = function(sId,mSettings) {};
/**
 * Destroys the objectStatus in the aggregation <code>objectStatus</code>.
 * @returns {sap.ui.comp.smartfield.ControlProposal} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlProposal.prototype.destroyObjectStatus = function() { return new sap.ui.comp.smartfield.ControlProposal(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartfield.ControlProposal with name <code>sClassName</code>
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
sap.ui.comp.smartfield.ControlProposal.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>controlType</code>.
 * 
 * By default the SmartField chooses the controls it hosts by interpreting OData meta data. This property allows to overwrite the default behavior to some
 * extent; for example this property allows to define that an OData property of type Edm.Boolean is displayed as combo box.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.ui.comp.smartfield.ControlProposalType} Value of property <code>controlType</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlProposal.prototype.getControlType = function() { return new sap.ui.comp.smartfield.ControlProposalType(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartfield.ControlProposal.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfield.ControlProposal.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>objectStatus</code>.
 * 
 * Optional definition to further qualify how an object status control should be rendered.
 * @returns {sap.ui.comp.smartfield.ObjectStatus}
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlProposal.prototype.getObjectStatus = function() { return new sap.ui.comp.smartfield.ObjectStatus(); };

/**
 * Sets a new value for property <code>controlType</code>.
 * 
 * By default the SmartField chooses the controls it hosts by interpreting OData meta data. This property allows to overwrite the default behavior to some
 * extent; for example this property allows to define that an OData property of type Edm.Boolean is displayed as combo box.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.ui.comp.smartfield.ControlProposalType} sControlType New value for property <code>controlType</code>
 * @returns {sap.ui.comp.smartfield.ControlProposal} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlProposal.prototype.setControlType = function(sControlType) { return new sap.ui.comp.smartfield.ControlProposal(); };

/**
 * Sets the aggregated <code>objectStatus</code>.
 * @param {sap.ui.comp.smartfield.ObjectStatus} oObjectStatus The objectStatus to set
 * @returns {sap.ui.comp.smartfield.ControlProposal} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlProposal.prototype.setObjectStatus = function(oObjectStatus) { return new sap.ui.comp.smartfield.ControlProposal(); };


// ---- sap.ui.comp.smartfield.ControlProposalType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.smartfield.ControlProposalType.toString = function() { return ""; };

// ---- sap.ui.comp.smartfield.ControlType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.smartfield.ControlType.toString = function() { return ""; };

// ---- sap.ui.comp.smartfield.DisplayBehaviour --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.smartfield.DisplayBehaviour.toString = function() { return ""; };

// ---- sap.ui.comp.smartfield.JSONType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.smartfield.JSONType.toString = function() { return ""; };

// ---- sap.ui.comp.smartfield.ObjectStatus --------------------------------------------------------------------------

/**
 * Constructor for a new smartfield/ObjectStatus.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getCriticality criticality} : any</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Defines a possible object status control to be rendered. The smart field may ignore the proposal.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfield.ObjectStatus = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.smartfield.ObjectStatus with name <code>sClassName</code>
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
sap.ui.comp.smartfield.ObjectStatus.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>criticality</code>.
 * 
 * Optional attribute, which can be set, if the control type has the value ObjectStatus.
 * @returns {any} Value of property <code>criticality</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.ObjectStatus.prototype.getCriticality = function() { return null; };

/**
 * Returns a metadata object for class sap.ui.comp.smartfield.ObjectStatus.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfield.ObjectStatus.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property <code>criticality</code>.
 * 
 * Optional attribute, which can be set, if the control type has the value ObjectStatus.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {any} oCriticality New value for property <code>criticality</code>
 * @returns {sap.ui.comp.smartfield.ObjectStatus} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.ObjectStatus.prototype.setCriticality = function(oCriticality) { return new sap.ui.comp.smartfield.ObjectStatus(); };


// ---- sap.ui.comp.smartfield.SmartField --------------------------------------------------------------------------

/**
 * Constructor for a new smartfield/SmartField.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : any</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getEntitySet entitySet} : string</li>
 * <li>{@link #getEditable editable} : boolean (default: true)</li>
 * <li>{@link #getContextEditable contextEditable} : boolean (default: true)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getTextAlign textAlign} : sap.ui.core.TextAlign (default: Initial)</li>
 * <li>{@link #getPlaceholder placeholder} : string</li>
 * <li>{@link #getName name} : string</li>
 * <li>{@link #getValueState valueState} : sap.ui.core.ValueState (default: None)</li>
 * <li>{@link #getValueStateText valueStateText} : string</li>
 * <li>{@link #getShowValueStateMessage showValueStateMessage} : boolean (default: true)</li>
 * <li>{@link #getJsontype jsontype} : sap.ui.comp.smartfield.JSONType</li>
 * <li>{@link #getMandatory mandatory} : boolean (default: false)</li>
 * <li>{@link #getMaxLength maxLength} : int (default: 0)</li>
 * <li>{@link #getShowSuggestion showSuggestion} : boolean (default: true)</li>
 * <li>{@link #getShowValueHelp showValueHelp} : boolean (default: true)</li>
 * <li>{@link #getShowLabel showLabel} : boolean (default: true)</li>
 * <li>{@link #getTextLabel textLabel} : string</li>
 * <li>{@link #getTooltipLabel tooltipLabel} : string</li>
 * <li>{@link #getUomVisible uomVisible} : boolean (default: true)</li>
 * <li>{@link #getUomEditable uomEditable} : boolean (default: true)</li>
 * <li>{@link #getUomEnabled uomEnabled} : boolean (default: true)</li>
 * <li>{@link #getUrl url} : string</li>
 * <li>{@link #getUomEditState uomEditState} : int (default: -1)</li>
 * <li>{@link #getControlContext controlContext} : sap.ui.comp.smartfield.ControlContextType (default: None)</li>
 * <li>{@link #getProposedControl proposedControl} : sap.ui.comp.smartfield.ControlProposalType (default: None)</li>
 * <li>{@link #getWrapping wrapping} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getConfiguration configuration} : sap.ui.comp.smartfield.Configuration</li>
 * <li>{@link #getControlProposal controlProposal} : sap.ui.comp.smartfield.ControlProposal</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:entitySetFound entitySetFound} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:visibleChanged visibleChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:editableChanged editableChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:contextEditableChanged contextEditableChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:innerControlsCreated innerControlsCreated} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:valueListChanged valueListChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no id is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class The SmartField control is a wrapper for other controls. It interprets OData metadata to determine the control that has to be
 *        instantiated. The OData entity is derived from the control's binding context. The OData entity's property that is changed or displayed
 *        with the control is derived from the control's value property.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfield.SmartField = function(sId,mSettings) {};
/**
 * The event is fired after the text in the field has changed and the focus leaves the TextField or Enter is pressed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.change = function(oControlEvent) {  };

/**
 * The event is fired after the context editable property of the control has changed.
 * @event
 * @since 1.31.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.contextEditableChanged = function(oControlEvent) {  };

/**
 * The event is fired after the value of editable property of the control has changed.
 * @event
 * @since 1.30.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.editableChanged = function(oControlEvent) {  };

/**
 * The OData entity set is either derived from the control's binding context or from control's entity set property, if a value for it
 * is specified. In both cases this event is fired.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.entitySetFound = function(oControlEvent) {  };

/**
 * The event is fired after the smart field has calculated its metadata.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.initialise = function(oControlEvent) {  };

/**
 * The event is fired after the inner controls have been created.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.innerControlsCreated = function(oControlEvent) {  };

/**
 * Fires when the user triggers the link control or taps/clicks on an active title of the object identifier control.
 * @event
 * @since 1.36.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.press = function(oControlEvent) {  };

/**
 * The event is fired when after selection of values with value help or auto-suggest, the model is updated with the selected data.
 * @event
 * @since 1.31.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.valueListChanged = function(oControlEvent) {  };

/**
 * The event is fired after the visibility of the control has changed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.visibleChanged = function(oControlEvent) {  };

/**
 * Resolves the controls hosted currently by this SmartField.
 * @returns {array} The controls hosted currently by this SmartField
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype._getEmbeddedSmartField = function() { return null; };

/**
 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.2
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Adds some object with the ID <code>sId</code> to the association identified by <code>sAssociationName</code> and marks this ManagedObject
 * as changed. This method does not avoid duplicates. <b>Note:</b> This method is a low-level API as described in <a href="#lowlevelapi">the
 * class documentation</a>. Applications or frameworks must not use this method to generically add an object to an association. Use the concrete
 * method add<i>XYZ</i> for association 'XYZ' or the generic {@link #applySettings} instead.
 * @param {string} sAssociationName the string identifying the association the object should be added to.
 * @param {string | sap.ui.base.ManagedObject} sId the ID of the ManagedObject object to add; if empty, nothing is added; if a
 *        <code>sap.ui.base.ManagedObject</code> is given, its ID is added
 * @param {boolean} [bSuppressInvalidate] if true, this managed object as well as the newly associated object are not marked as changed
 * @return {sap.ui.base.ManagedObject} Returns <code>this</code> to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.addAssociation = function(sAssociationName,sId,bSuppressInvalidate) { return new sap.ui.base.ManagedObject(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>change</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartfield.SmartField</code> itself.
 * 
 * The event is fired after the text in the field has changed and the focus leaves the TextField or Enter is pressed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfield.SmartField</code> itself
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>contextEditableChanged</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartfield.SmartField</code> itself.
 * 
 * The event is fired after the context editable property of the control has changed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfield.SmartField</code> itself
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.31.0
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.attachContextEditableChanged = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>editableChanged</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartfield.SmartField</code> itself.
 * 
 * The event is fired after the value of editable property of the control has changed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfield.SmartField</code> itself
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.30.0
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.attachEditableChanged = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>entitySetFound</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartfield.SmartField</code> itself.
 * 
 * The OData entity set is either derived from the control's binding context or from control's entity set property, if a value for it
 * is specified. In both cases this event is fired.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfield.SmartField</code> itself
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.attachEntitySetFound = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>initialise</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartfield.SmartField</code> itself.
 * 
 * The event is fired after the smart field has calculated its metadata.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfield.SmartField</code> itself
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>innerControlsCreated</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartfield.SmartField</code> itself.
 * 
 * The event is fired after the inner controls have been created.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfield.SmartField</code> itself
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.attachInnerControlsCreated = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartfield.SmartField</code> itself.
 * 
 * Fires when the user triggers the link control or taps/clicks on an active title of the object identifier control.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfield.SmartField</code> itself
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.36.0
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>valueListChanged</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartfield.SmartField</code> itself.
 * 
 * The event is fired when after selection of values with value help or auto-suggest, the model is updated with the selected data.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfield.SmartField</code> itself
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.31.0
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.attachValueListChanged = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>visibleChanged</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartfield.SmartField</code> itself.
 * 
 * The event is fired after the visibility of the control has changed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfield.SmartField</code> itself
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.attachVisibleChanged = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Returns whether a client error has been detected. Additionally the error message is shown, if this is not the case already.
 * @returns {boolean} <code>true</code>, if a client error has been detected, <code>false</code> otherwise
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.checkClientError = function() { return false; };

/**
 * Destroys the configuration in the aggregation <code>configuration</code>.
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.destroyConfiguration = function() { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Destroys the controlProposal in the aggregation <code>controlProposal</code>.
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @deprecated Since 1.34.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.destroyControlProposal = function() { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>change</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>contextEditableChanged</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @since 1.31.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.detachContextEditableChanged = function(fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>editableChanged</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @since 1.30.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.detachEditableChanged = function(fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>entitySetFound</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.detachEntitySetFound = function(fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>initialise</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>innerControlsCreated</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.detachInnerControlsCreated = function(fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.detachPress = function(fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>valueListChanged</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @since 1.31.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.detachValueListChanged = function(fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>visibleChanged</code> event of this <code>sap.ui.comp.smartfield.SmartField</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.detachVisibleChanged = function(fnFunction,oListener) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartfield.SmartField with name <code>sClassName</code>
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
sap.ui.comp.smartfield.SmartField.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>change</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.fireChange = function(mArguments) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Fires event <code>contextEditableChanged</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.31.0
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.fireContextEditableChanged = function(mArguments) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Fires event <code>editableChanged</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.30.0
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.fireEditableChanged = function(mArguments) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Fires event <code>entitySetFound</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.fireEntitySetFound = function(mArguments) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Fires event <code>initialise</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.fireInitialise = function(mArguments) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Fires event <code>innerControlsCreated</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.fireInnerControlsCreated = function(mArguments) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Fires event <code>press</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.36.0
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.firePress = function(mArguments) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Fires event <code>valueListChanged</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.31.0
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.fireValueListChanged = function(mArguments) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Fires event <code>visibleChanged</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.fireVisibleChanged = function(mArguments) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]}
 * @since 1.34.2
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets content of aggregation <code>configuration</code>.
 * 
 * Optional configuration for SmartField.
 * @returns {sap.ui.comp.smartfield.Configuration}
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getConfiguration = function() { return new sap.ui.comp.smartfield.Configuration(); };

/**
 * Gets current value of property <code>contextEditable</code>.
 * 
 * Notifies the control whether controls using the SmartField are editable or not.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>contextEditable</code>
 * @since 1.31.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getContextEditable = function() { return false; };

/**
 * Gets current value of property <code>controlContext</code>.
 * 
 * Defines in which context the layout of the smart field has to be interpreted.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.ui.comp.smartfield.ControlContextType} Value of property <code>controlContext</code>
 * @since 1.31.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getControlContext = function() { return new sap.ui.comp.smartfield.ControlContextType(); };

/**
 * Gets content of aggregation <code>controlProposal</code>.
 * 
 * Proposes a control to be rendered. The smart field may ignore the proposal.
 * @returns {sap.ui.comp.smartfield.ControlProposal}
 * @since 1.32.0
 * @deprecated Since 1.34.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getControlProposal = function() { return new sap.ui.comp.smartfield.ControlProposal(); };

/**
 * Returns the OData property to which the <code>value</code> property of the control is bound.
 * @returns {object} The OData property.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getDataProperty = function() { return new Object(); };

/**
 * Returns the EDM data type of the OData property to which the value property of the control is bound to. If no model or no OData property is
 * available <code>null</code> is returned.
 * @returns {string} The data type to which the value property is bound.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getDataType = function() { return ""; };

/**
 * Gets current value of property <code>editable</code>.
 * 
 * Sets the control into an editable mode or a display mode.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getEditable = function() { return false; };

/**
 * Gets current value of property <code>enabled</code>.
 * 
 * Enables the control.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getEnabled = function() { return false; };

/**
 * Gets current value of property <code>entitySet</code>.
 * 
 * The name of an entity set for which the control manages values. This is an optional property.
 * @returns {string} Value of property <code>entitySet</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getEntitySet = function() { return ""; };

/**
 * Returns the DOM element that gets the focus.
 * @returns {sap.ui.core.Element} The DOM element that should get the focus, can be <code>null</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getFocusDomRef = function() { return new sap.ui.core.Element(); };

/**
 * Resolves the controls hosted currently by this SmartField.
 * @returns {array} The controls hosted currently by this SmartField
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getInnerControls = function() { return null; };

/**
 * Gets current value of property <code>jsontype</code>.
 * 
 * Data types to be used, if the SmartField control is interacting with a JSON model. If the value property of the control is bound to
 * a property of an OData entity set, this property is not considered.
 * @returns {sap.ui.comp.smartfield.JSONType} Value of property <code>jsontype</code>
 * @deprecated Since 1.31.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getJsontype = function() { return new sap.ui.comp.smartfield.JSONType(); };

/**
 * Gets current value of property <code>mandatory</code>.
 * 
 * Mandatory property.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>mandatory</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getMandatory = function() { return false; };

/**
 * Gets current value of property <code>maxLength</code>.
 * 
 * Maximum number of characters. Value <code>0</code> means the feature is switched off.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>maxLength</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getMaxLength = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.comp.smartfield.SmartField.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfield.SmartField.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>name</code>.
 * 
 * To be used in the HTML code (for example, for HTML forms that send data to the server via 'submit').
 * @returns {string} Value of property <code>name</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getName = function() { return ""; };

/**
 * Gets current value of property <code>placeholder</code>.
 * 
 * Text shown when no value available.
 * @returns {string} Value of property <code>placeholder</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getPlaceholder = function() { return ""; };

/**
 * Gets current value of property <code>proposedControl</code>.
 * 
 * Proposes a control to be rendered. The smart field may ignore the proposal.
 * 
 * Default value is <code>None</code>.
 * @returns {sap.ui.comp.smartfield.ControlProposalType} Value of property <code>proposedControl</code>
 * @since 1.31.0
 * @deprecated Since 1.32.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getProposedControl = function() { return new sap.ui.comp.smartfield.ControlProposalType(); };

/**
 * Gets current value of property <code>showLabel</code>.
 * 
 * If set to false the label is not displayed.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showLabel</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getShowLabel = function() { return false; };

/**
 * Gets current value of property <code>showSuggestion</code>.
 * 
 * If set to <code>true</code>, the suggestion feature for a hosted control is enabled, if the hosted control supports it.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showSuggestion</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getShowSuggestion = function() { return false; };

/**
 * Gets current value of property <code>showValueHelp</code>.
 * 
 * If set to true, a value help indicator will be displayed inside the hosted control, if the hosted control supports this.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showValueHelp</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getShowValueHelp = function() { return false; };

/**
 * Gets current value of property <code>showValueStateMessage</code>.
 * 
 * The text which is shown in the value state message popup.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showValueStateMessage</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getShowValueStateMessage = function() { return false; };

/**
 * Calculates the paths to the annotations used by the SmartField.
 * @param {sap.ui.model.odata.ODataMetaModel} oMetaModel The given OData meta model
 * @param {object} oEntitySet The given entity set
 * @param {string} sValueBinding The path identifying the OData property the value property of the SmartField is bound to
 * @param {bolean} bNavigationPathsOnly If set to <code>true</code>, no properties are returned
 * @returns {array} The resulting paths are returned
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.getSupportedAnnotationPaths = function(oMetaModel,oEntitySet,sValueBinding,bNavigationPathsOnly) { return null; };

/**
 * Gets current value of property <code>textAlign</code>.
 * 
 * Horizontal alignment of the text.
 * 
 * Default value is <code>Initial</code>.
 * @returns {sap.ui.core.TextAlign} Value of property <code>textAlign</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getTextAlign = function() { return new sap.ui.core.TextAlign(); };

/**
 * Gets current value of property <code>textLabel</code>.
 * 
 * This property contains the text of an associated smart label.
 * @returns {string} Value of property <code>textLabel</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getTextLabel = function() { return ""; };

/**
 * Gets current value of property <code>tooltipLabel</code>.
 * 
 * This property contains the tool tip of the associated smart label.
 * @returns {string} Value of property <code>tooltipLabel</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getTooltipLabel = function() { return ""; };

/**
 * If the OData property to which the control's value property is bound semantically represents a unit of measure, the value of the current unit
 * of measure is returned. Otherwise <code>null</code> is returned.
 * @returns {any} The current unit of measure is returned, which can be <code>null</code
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getUnitOfMeasure = function() { return null; };

/**
 * Gets current value of property <code>uomEditable</code>.
 * 
 * Editable state of the unit, if the SmartField control addresses unit of measure use cases, for example, an amount and its
 * associated currency.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>uomEditable</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getUomEditable = function() { return false; };

/**
 * Gets current value of property <code>uomEditState</code>.
 * 
 * This property is for internal use only.
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>uomEditState</code>
 * @since 1.31.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getUomEditState = function() { return 0; };

/**
 * Gets current value of property <code>uomEnabled</code>.
 * 
 * Enabled state of the unit, if the SmartField control addresses unit of measure use cases, for example, an amount and its associated
 * currency.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>uomEnabled</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getUomEnabled = function() { return false; };

/**
 * Gets current value of property <code>uomVisible</code>.
 * 
 * Visible state of the unit, if the SmartField control addresses unit of measure use cases, for example, an amount and its associated
 * currency.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>uomVisible</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getUomVisible = function() { return false; };

/**
 * Gets current value of property <code>url</code>.
 * 
 * Contains a URL which is used to render a link. The link is rendered, if the OData property which the value property of the control
 * is bound to is of type <code>Edm.String</code> and the Smart Field is in display mode.
 * @returns {string} Value of property <code>url</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getUrl = function() { return ""; };

/**
 * Returns the value of the <code>value</code> property.
 * @return {any} The value of the property
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getValue = function() { return null; };

/**
 * Getter for property <code>valueState</code>. Default value is <code>None</code>.
 * @return {sap.ui.core.ValueState} The property value
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getValueState = function() { return new sap.ui.core.ValueState(); };

/**
 * Getter for property <code>valueStateText</code>. Default value is empty/<code>undefined</code>.
 * @return {string} The property value
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getValueStateText = function() { return ""; };

/**
 * Gets current value of property <code>width</code>.
 * 
 * The width can be set to an absolute value.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property <code>wrapping</code>.
 * 
 * Allow the wrapping to be set for table based control context.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>wrapping</code>
 * @since 1.36.6
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.getWrapping = function() { return false; };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @since 1.34.2
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledByto be removed or its index or ID
 * @returns {sap.ui.core.Control} the removed ariaLabelledBy or <code>null</code>
 * @since 1.34.2
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Sets the aggregated <code>configuration</code>.
 * @param {sap.ui.comp.smartfield.Configuration} oConfiguration The configuration to set
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setConfiguration = function(oConfiguration) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>contextEditable</code>. Default value is <code>false</code>.
 * @param {boolean} bValue New value for property <code>editable</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * @since 1.31.0
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setContextEditable = function(bValue) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>controlContext</code>.
 * 
 * Defines in which context the layout of the smart field has to be interpreted.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.ui.comp.smartfield.ControlContextType} sControlContext New value for property <code>controlContext</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @since 1.31.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setControlContext = function(sControlContext) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets the aggregated <code>controlProposal</code>.
 * @param {sap.ui.comp.smartfield.ControlProposal} oControlProposal The controlProposal to set
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @deprecated Since 1.34.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setControlProposal = function(oControlProposal) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>editable</code>. Default value is <code>false</code>.
 * @param {boolean} bValue New value for property <code>editable</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setEditable = function(bValue) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>enabled</code>. Default value is <code>true</code>.
 * @param {boolean} bValue The new value for property <code>enabled</code>.
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setEnabled = function(bValue) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>entitySet</code>. Default value is <code>undefined</code>.
 * @param {string} sValue The new value for property <code>entitySet</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setEntitySet = function(sValue) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>jsontype</code>.
 * 
 * Data types to be used, if the SmartField control is interacting with a JSON model. If the value property of the control is bound to
 * a property of an OData entity set, this property is not considered.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.comp.smartfield.JSONType} sJsontype New value for property <code>jsontype</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since 1.31.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setJsontype = function(sJsontype) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>mandatory</code>.
 * 
 * Mandatory property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bMandatory New value for property <code>mandatory</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setMandatory = function(bMandatory) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>maxLength</code>.
 * 
 * Maximum number of characters. Value <code>0</code> means the feature is switched off.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMaxLength New value for property <code>maxLength</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setMaxLength = function(iMaxLength) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>name</code>.
 * 
 * To be used in the HTML code (for example, for HTML forms that send data to the server via 'submit').
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sName New value for property <code>name</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setName = function(sName) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>placeholder</code>.
 * 
 * Text shown when no value available.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sPlaceholder New value for property <code>placeholder</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setPlaceholder = function(sPlaceholder) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>proposedControl</code>.
 * 
 * Proposes a control to be rendered. The smart field may ignore the proposal.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>None</code>.
 * @param {sap.ui.comp.smartfield.ControlProposalType} sProposedControl New value for property <code>proposedControl</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @since 1.31.0
 * @deprecated Since 1.32.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setProposedControl = function(sProposedControl) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>showLabel</code>.
 * 
 * If set to false the label is not displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowLabel New value for property <code>showLabel</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setShowLabel = function(bShowLabel) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>showSuggestion</code>.
 * 
 * If set to <code>true</code>, the suggestion feature for a hosted control is enabled, if the hosted control supports it.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowSuggestion New value for property <code>showSuggestion</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setShowSuggestion = function(bShowSuggestion) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>showValueHelp</code>.
 * 
 * If set to true, a value help indicator will be displayed inside the hosted control, if the hosted control supports this.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowValueHelp New value for property <code>showValueHelp</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setShowValueHelp = function(bShowValueHelp) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>showValueStateMessage</code>.
 * 
 * The text which is shown in the value state message popup.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowValueStateMessage New value for property <code>showValueStateMessage</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setShowValueStateMessage = function(bShowValueStateMessage) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>textAlign</code>.
 * 
 * Horizontal alignment of the text.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Initial</code>.
 * @param {sap.ui.core.TextAlign} sTextAlign New value for property <code>textAlign</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setTextAlign = function(sTextAlign) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>textLabel</code>.
 * 
 * This property contains the text of an associated smart label.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTextLabel New value for property <code>textLabel</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setTextLabel = function(sTextLabel) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>tooltipLabel</code>.
 * 
 * This property contains the tool tip of the associated smart label.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTooltipLabel New value for property <code>tooltipLabel</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setTooltipLabel = function(sTooltipLabel) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * If the OData property the control's value property is bound to semantically represents a unit of measure, the value of the current unit of
 * measure can be changed.
 * @param {string} sUnit The new unit of measure to be set.
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setUnitOfMeasure = function(sUnit) {  };

/**
 * Sets a new value for property <code>uomEditable</code>.
 * 
 * Editable state of the unit, if the SmartField control addresses unit of measure use cases, for example, an amount and its
 * associated currency.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUomEditable New value for property <code>uomEditable</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setUomEditable = function(bUomEditable) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>uomEditState</code>.
 * 
 * This property is for internal use only.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iUomEditState New value for property <code>uomEditState</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @since 1.31.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setUomEditState = function(iUomEditState) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>uomEnabled</code>.
 * 
 * Enabled state of the unit, if the SmartField control addresses unit of measure use cases, for example, an amount and its associated
 * currency.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUomEnabled New value for property <code>uomEnabled</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setUomEnabled = function(bUomEnabled) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Sets a new value for property <code>uomVisible</code>.
 * 
 * Visible state of the unit, if the SmartField control addresses unit of measure use cases, for example, an amount and its associated
 * currency.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUomVisible New value for property <code>uomVisible</code>
 * @returns {sap.ui.comp.smartfield.SmartField} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setUomVisible = function(bUomVisible) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>url</code>. Default value is <code>null</code>.
 * @param {string} sValue The new value for property <code>url</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @since 1.29
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setUrl = function(sValue) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>value</code>. Default value is <code>true</code>.
 * @param {object} oValue The new value for property <code>value</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setValue = function(oValue) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>valueState</code>. Default value is <code>None</code>.
 * @param {sap.ui.core.ValueState} sValueState The new value for property <code>valueState</code>
 * @return {sap.ui.comp.SmartField} <code>this</code> to allow method chaining
 * @since 1.30.0
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setValueState = function(sValueState) { return new sap.ui.comp.SmartField(); };

/**
 * Setter for property <code>valueStateText</code>. Default value is empty/<code>undefined</code>.
 * @param {string} sText The new value for property <code>valueStateText</code>
 * @return {sap.ui.comp.SmartField} <code>this</code> to allow method chaining
 * @since 1.29
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setValueStateText = function(sText) { return new sap.ui.comp.SmartField(); };

/**
 * Setter for property <code>visible</code>. Default value is <code>true</code>.
 * @param {boolean} bValue New value for property <code>editable</code>
 * @param {boolean} bSuppressInvalidate If <code>true</code>, the managed object is not marked as changed
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setVisible = function(bValue,bSuppressInvalidate) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>width</code>.
 * @param {string} sWidth The new value for property <code>width</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setWidth = function(sWidth) { return new sap.ui.comp.smartfield.SmartField(); };

/**
 * Setter for property <code>wrapping</code>. The wrapping is only relevant for the table control context.
 * @param {boolean} bWrapping The new value for property <code>wrapping</code>
 * @return {sap.ui.comp.smartfield.SmartField} <code>this</code> to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartField.prototype.setWrapping = function(bWrapping) { return new sap.ui.comp.smartfield.SmartField(); };


// ---- sap.ui.comp.smartfield.SmartLabel --------------------------------------------------------------------------

/**
 * Constructor for a new smartfield/SmartLabel.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class The SmartLabel control extends {@link sap.m.Label sap.m.Label} and displays the label for
 *        {@link sap.ui.comp.smartfield.SmartField SmartField}. It uses the annotations <code>sap:label</code> or
 *        <code>com.sap.vocabularies.Common.v1.Label</code> for the label text and <code>sap:quickinfo</code> or
 *        <code>com.sap.vocabularies.Common.v1.QuickInfo</code> for the tooltip. The mandatory indicator is obtained from the SmartField
 *        control. The association with a SmartField control is built using the setLabelFor method.
 * @extends sap.m.Label
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfield.SmartLabel = function(sId,mSettings) {};
/**
 * Cleans up the resources associated with this element and all its children. After an element has been destroyed, it can no longer be used on the
 * UI. Applications should call this method if they don't need the element any longer.
 * @param {boolean} bSuppressInvalidate If set to <code>true</code>, UI element is not marked for redraw
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartLabel.prototype.destroy = function(bSuppressInvalidate) {  };

/**
 * Creates a new subclass of class sap.ui.comp.smartfield.SmartLabel with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Label.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfield.SmartLabel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.comp.smartfield.SmartLabel.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfield.SmartLabel.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Assigns SmartField.
 * @param {sap.ui.comp.SmartField} oSmartField The associated SmartField control
 * @public
 * 
 */
sap.ui.comp.smartfield.SmartLabel.prototype.setLabelFor = function(oSmartField) {  };


// ---- sap.ui.comp.smartfilterbar.ControlConfiguration --------------------------------------------------------------------------

/**
 * Constructor for a new smartfilterbar/ControlConfiguration.
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
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getGroupId groupId} : string</li>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * <li>{@link #getHasValueHelpDialog hasValueHelpDialog} : boolean (default: true)</li>
 * <li>{@link #getControlType controlType} : string (default: auto)</li>
 * <li>{@link #getFilterType filterType} : string (default: auto)</li>
 * <li>{@link #getIndex index} : any (default: undefined)</li>
 * <li>{@link #getHasTypeAhead hasTypeAhead} : boolean (default: true)</li>
 * <li>{@link #getMandatory mandatory} : string (default: auto)</li>
 * <li>{@link #getWidth width} : string</li>
 * <li>{@link #getVisibleInAdvancedArea visibleInAdvancedArea} : boolean (default: false)</li>
 * <li>{@link #getPreventInitialDataFetchInValueHelpDialog preventInitialDataFetchInValueHelpDialog} : boolean (default: true)</li>
 * <li>{@link #getDisplayBehaviour displayBehaviour} : string (default: auto)</li>
 * <li>{@link #getConditionType conditionType} : any</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getDefaultFilterValues defaultFilterValues} : sap.ui.comp.smartfilterbar.SelectOption[]</li>
 * <li>{@link #getCustomControl customControl} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class ControlConfiguration can be used to add additional configuration for filter fields in the SmartFilterBar control, in order to overwrite
 *        the default settings from the OData metadata. For instance, it is possible to change the label, index or control type of a filter field.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration = function(sId,mSettings) {};
/**
 * Fired when the value of a property, for example isVisible, has changed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.propertyName Name of the changed property
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.change = function(oControlEvent) {  };

/**
 * Adds some defaultFilterValue to the aggregation <code>defaultFilterValues</code>.
 * @param {sap.ui.comp.smartfilterbar.SelectOption}
 *            oDefaultFilterValue the defaultFilterValue to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.addDefaultFilterValue = function(oDefaultFilterValue) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>change</code> event of this <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code> itself.
 * 
 * Fired when the value of a property, for example isVisible, has changed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code> itself
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Destroys the customControl in the aggregation <code>customControl</code>.
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.destroyCustomControl = function() { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Destroys all the defaultFilterValues in the aggregation <code>defaultFilterValues</code>.
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.destroyDefaultFilterValues = function() { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>change</code> event of this <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartfilterbar.ControlConfiguration with name <code>sClassName</code>
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
sap.ui.comp.smartfilterbar.ControlConfiguration.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>change</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>propertyName</code> of type <code>string</code>Name of the changed property</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.fireChange = function(mArguments) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Gets current value of property <code>conditionType</code>.
 * 
 * The condition Type class name to use for this filter item
 * Implemantation should derive from sap.ui.comp.config.condition.Type
 * @returns {any} Value of property <code>conditionType</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getConditionType = function() { return null; };

/**
 * Gets current value of property <code>controlType</code>.
 * 
 * The SmartFilterBar calculates which kind of control will be used for a filter fields based on multiple OData Attributes and
 * annotations. Using this property it is possible to overwrite the OData metadata. Possible values can be found here:
 * sap.ui.comp.smartfilterbar.ControlConfiguration.CONTROLTYPE
 * 
 * Default value is <code>auto</code>.
 * @returns {string} Value of property <code>controlType</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getControlType = function() { return ""; };

/**
 * Gets content of aggregation <code>customControl</code>.
 * 
 * If a custom control is specified, the Smart Filter Bar will not create a control but use the custom control. Additional services
 * like TypeAhead have to implemented manually.
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getCustomControl = function() { return new sap.ui.core.Control(); };

/**
 * Gets content of aggregation <code>defaultFilterValues</code>.
 * 
 * Default value for a filter field.
 * @returns {sap.ui.comp.smartfilterbar.SelectOption[]}
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getDefaultFilterValues = function() { return new Array(); };

/**
 * Gets current value of property <code>displayBehaviour</code>.
 * 
 * The displayBehaviour specifies how the content should be displayed on certain controls. Ex: DescriptionOnly for Combobox (DropDown
 * text) , Description and ID for MultiInput (token text) Possible values can be found here:
 * sap.ui.comp.smartfilterbar.ControlConfiguration.DISPLAYBEHAVIOUR
 * 
 * Default value is <code>auto</code>.
 * @returns {string} Value of property <code>displayBehaviour</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getDisplayBehaviour = function() { return ""; };

/**
 * Gets current value of property <code>filterType</code>.
 * 
 * The filter type specifies whether the filter fields is e.g. type single value, multi-value,or interval. The filter type is being
 * calculated by the martFilterBar based on the OData metadata. Using this property the filter type can be configured manually.
 * Possible value scan be found here: sap.ui.comp.smartfilterbar.ControlConfiguration.FILTERTYPE
 * 
 * Default value is <code>auto</code>.
 * @returns {string} Value of property <code>filterType</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getFilterType = function() { return ""; };

/**
 * Gets current value of property <code>groupId</code>.
 * 
 * The groupId can be used to move a field from one group to another. The groupId corresponds to the EntityName from the OData
 * metadata. It is also possible to move a field from the advanced area to the basic area by specifying the groupId _BASIC.
 * @returns {string} Value of property <code>groupId</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getGroupId = function() { return ""; };

/**
 * Gets current value of property <code>hasTypeAhead</code>.
 * 
 * Property can be used to enable the TypeAhead service. TypeAhead does not work with all controls, e.g it does not work for
 * DrodDownListbox
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>hasTypeAhead</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getHasTypeAhead = function() { return false; };

/**
 * Gets current value of property <code>hasValueHelpDialog</code>.
 * 
 * Specifies whether a value help dialog is available or not.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>hasValueHelpDialog</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getHasValueHelpDialog = function() { return false; };

/**
 * Gets current value of property <code>index</code>.
 * 
 * The zero based index can be used to specify the order of fields.
 * 
 * Default value is <code>undefined</code>.
 * @returns {any} Value of property <code>index</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getIndex = function() { return null; };

/**
 * Gets current value of property <code>key</code>.
 * 
 * The key property corresponds to the field name from the OData service $metadata document.
 * @returns {string} Value of property <code>key</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getKey = function() { return ""; };

/**
 * Gets current value of property <code>label</code>.
 * 
 * Using this property it is possible to overwrite the label of a filter field in the SmartFilterBar.
 * @returns {string} Value of property <code>label</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getLabel = function() { return ""; };

/**
 * Gets current value of property <code>mandatory</code>.
 * 
 * Property can be used to overwrite the mandatory state of a filter field. Possible values:
 * sap.ui.comp.smartfilterbar.ControlConfiguration.MANDATORY Property can only be set during initialisation. Changes at runtime will
 * be ignored.
 * 
 * Default value is <code>auto</code>.
 * @returns {string} Value of property <code>mandatory</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getMandatory = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smartfilterbar.ControlConfiguration.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>preventInitialDataFetchInValueHelpDialog</code>.
 * 
 * In case there are value help annotations for this filter field, it is possible to specify whether the table in the value help
 * dialog for this field will be filled initially. The default value is flase, which menas the table will be filled as the data fetch
 * is not being prevented.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>preventInitialDataFetchInValueHelpDialog</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getPreventInitialDataFetchInValueHelpDialog = function() { return false; };

/**
 * Gets current value of property <code>visible</code>.
 * 
 * Using this flag it is possible to hide fields from the OData metadata.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getVisible = function() { return false; };

/**
 * Gets current value of property <code>visibleInAdvancedArea</code>.
 * 
 * If set to true this field will be added to the advanced area (aka. Dynamic Selection) by default.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>visibleInAdvancedArea</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getVisibleInAdvancedArea = function() { return false; };

/**
 * Gets current value of property <code>width</code>.
 * 
 * The width of the filter field in a CSS compatible format. The width can be set only once during initialisation. Changes at runtime
 * will not be reflected. The width will not be applied to custom controls.
 * @returns {string} Value of property <code>width</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.getWidth = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.comp.smartfilterbar.SelectOption</code> in the aggregation <code>defaultFilterValues</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartfilterbar.SelectOption}
 *           oDefaultFilterValue The defaultFilterValue whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.indexOfDefaultFilterValue = function(oDefaultFilterValue) { return 0; };

/**
 * Inserts a defaultFilterValue into the aggregation <code>defaultFilterValues</code>.
 * @param {sap.ui.comp.smartfilterbar.SelectOption}
 *            oDefaultFilterValue the defaultFilterValue to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the defaultFilterValue should be inserted at; for
 *              a negative value of <code>iIndex</code>, the defaultFilterValue is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the defaultFilterValue is inserted at
 *              the last position
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.insertDefaultFilterValue = function(oDefaultFilterValue,iIndex) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Removes all the controls from the aggregation <code>defaultFilterValues</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.comp.smartfilterbar.SelectOption[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.removeAllDefaultFilterValues = function() { return new Array(); };

/**
 * Removes a defaultFilterValue from the aggregation <code>defaultFilterValues</code>.
 * @param {int | string | sap.ui.comp.smartfilterbar.SelectOption} vDefaultFilterValue The defaultFilterValueto remove or its index or id
 * @returns {sap.ui.comp.smartfilterbar.SelectOption} The removed defaultFilterValue or <code>null</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.removeDefaultFilterValue = function(vDefaultFilterValue) { return new sap.ui.comp.smartfilterbar.SelectOption(); };

/**
 * Sets a new value for property <code>conditionType</code>.
 * 
 * The condition Type class name to use for this filter item
 * Implemantation should derive from sap.ui.comp.config.condition.Type
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {any} oConditionType New value for property <code>conditionType</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setConditionType = function(oConditionType) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets a new value for property <code>controlType</code>.
 * 
 * The SmartFilterBar calculates which kind of control will be used for a filter fields based on multiple OData Attributes and
 * annotations. Using this property it is possible to overwrite the OData metadata. Possible values can be found here:
 * sap.ui.comp.smartfilterbar.ControlConfiguration.CONTROLTYPE
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {string} sControlType New value for property <code>controlType</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setControlType = function(sControlType) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets the aggregated <code>customControl</code>.
 * @param {sap.ui.core.Control} oCustomControl The customControl to set
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setCustomControl = function(oCustomControl) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets a new value for property <code>displayBehaviour</code>.
 * 
 * The displayBehaviour specifies how the content should be displayed on certain controls. Ex: DescriptionOnly for Combobox (DropDown
 * text) , Description and ID for MultiInput (token text) Possible values can be found here:
 * sap.ui.comp.smartfilterbar.ControlConfiguration.DISPLAYBEHAVIOUR
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {string} sDisplayBehaviour New value for property <code>displayBehaviour</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setDisplayBehaviour = function(sDisplayBehaviour) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets a new value for property <code>filterType</code>.
 * 
 * The filter type specifies whether the filter fields is e.g. type single value, multi-value,or interval. The filter type is being
 * calculated by the martFilterBar based on the OData metadata. Using this property the filter type can be configured manually.
 * Possible value scan be found here: sap.ui.comp.smartfilterbar.ControlConfiguration.FILTERTYPE
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {string} sFilterType New value for property <code>filterType</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setFilterType = function(sFilterType) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets a new value for property <code>groupId</code>.
 * 
 * The groupId can be used to move a field from one group to another. The groupId corresponds to the EntityName from the OData
 * metadata. It is also possible to move a field from the advanced area to the basic area by specifying the groupId _BASIC.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sGroupId New value for property <code>groupId</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setGroupId = function(sGroupId) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets a new value for property <code>hasTypeAhead</code>.
 * 
 * Property can be used to enable the TypeAhead service. TypeAhead does not work with all controls, e.g it does not work for
 * DrodDownListbox
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHasTypeAhead New value for property <code>hasTypeAhead</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setHasTypeAhead = function(bHasTypeAhead) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets a new value for property <code>hasValueHelpDialog</code>.
 * 
 * Specifies whether a value help dialog is available or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bHasValueHelpDialog New value for property <code>hasValueHelpDialog</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setHasValueHelpDialog = function(bHasValueHelpDialog) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets a new value for property <code>index</code>.
 * 
 * The zero based index can be used to specify the order of fields.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>undefined</code>.
 * @param {any} oIndex New value for property <code>index</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setIndex = function(oIndex) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets a new value for property <code>key</code>.
 * 
 * The key property corresponds to the field name from the OData service $metadata document.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setKey = function(sKey) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets a new value for property <code>label</code>.
 * 
 * Using this property it is possible to overwrite the label of a filter field in the SmartFilterBar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sLabel New value for property <code>label</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setLabel = function(sLabel) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets a new value for property <code>mandatory</code>.
 * 
 * Property can be used to overwrite the mandatory state of a filter field. Possible values:
 * sap.ui.comp.smartfilterbar.ControlConfiguration.MANDATORY Property can only be set during initialisation. Changes at runtime will
 * be ignored.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {string} sMandatory New value for property <code>mandatory</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setMandatory = function(sMandatory) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets a new value for property <code>preventInitialDataFetchInValueHelpDialog</code>.
 * 
 * In case there are value help annotations for this filter field, it is possible to specify whether the table in the value help
 * dialog for this field will be filled initially. The default value is flase, which menas the table will be filled as the data fetch
 * is not being prevented.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bPreventInitialDataFetchInValueHelpDialog New value for property <code>preventInitialDataFetchInValueHelpDialog</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setPreventInitialDataFetchInValueHelpDialog = function(bPreventInitialDataFetchInValueHelpDialog) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets a new value for property <code>visible</code>.
 * 
 * Using this flag it is possible to hide fields from the OData metadata.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setVisible = function(bVisible) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets a new value for property <code>visibleInAdvancedArea</code>.
 * 
 * If set to true this field will be added to the advanced area (aka. Dynamic Selection) by default.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bVisibleInAdvancedArea New value for property <code>visibleInAdvancedArea</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setVisibleInAdvancedArea = function(bVisibleInAdvancedArea) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * The width of the filter field in a CSS compatible format. The width can be set only once during initialisation. Changes at runtime
 * will not be reflected. The width will not be applied to custom controls.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sWidth New value for property <code>width</code>
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.ControlConfiguration.prototype.setWidth = function(sWidth) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };


// ---- sap.ui.comp.smartfilterbar.GroupConfiguration --------------------------------------------------------------------------

/**
 * Constructor for a new smartfilterbar/GroupConfiguration.
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
 * <li>{@link #getIndex index} : any (default: undefined)</li>
 * <li>{@link #getLabel label} : any (default: undefined)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:change change} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A GroupConfiguration can be used to add additional configurations for groups in the SmartFilterBar. A group in the SmartFilterBar is a group of filter fields in the advanced search.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration = function(sId,mSettings) {};
/**
 * Fired when the value of a property, for example label, has changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.propertyName Name of the changed property
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.change = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>change</code> event of this <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code> itself.
 * 
 * Fired when the value of a property, for example label, has changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code> itself
 * @returns {sap.ui.comp.smartfilterbar.GroupConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.attachChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>change</code> event of this <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartfilterbar.GroupConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.detachChange = function(fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartfilterbar.GroupConfiguration with name <code>sClassName</code>
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
sap.ui.comp.smartfilterbar.GroupConfiguration.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>change</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>propertyName</code> of type <code>string</code>Name of the changed property</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartfilterbar.GroupConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.fireChange = function(mArguments) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * Gets current value of property <code>index</code>.
 * 
 * Zero based integer index.
 * The index can be used to specify the order of groups. If no index is specified, the order like in the OData metadata will be used.
 * 
 * Default value is <code>undefined</code>.
 * @returns {any} Value of property <code>index</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.getIndex = function() { return null; };

/**
 * Gets current value of property <code>key</code>.
 * 
 * The key property shall correspond to the name EntityTypeName from the OData service $metadata document.
 * @returns {string} Value of property <code>key</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.getKey = function() { return ""; };

/**
 * Gets current value of property <code>label</code>.
 * 
 * Using this property it is possible to overwrite the label of a group in the advanced area of the SmartFilterBar.
 * 
 * Default value is <code>undefined</code>.
 * @returns {any} Value of property <code>label</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.getLabel = function() { return null; };

/**
 * Returns a metadata object for class sap.ui.comp.smartfilterbar.GroupConfiguration.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property <code>index</code>.
 * 
 * Zero based integer index.
 * The index can be used to specify the order of groups. If no index is specified, the order like in the OData metadata will be used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>undefined</code>.
 * @param {any} oIndex New value for property <code>index</code>
 * @returns {sap.ui.comp.smartfilterbar.GroupConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.setIndex = function(oIndex) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * Sets a new value for property <code>key</code>.
 * 
 * The key property shall correspond to the name EntityTypeName from the OData service $metadata document.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.ui.comp.smartfilterbar.GroupConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.setKey = function(sKey) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * Sets a new value for property <code>label</code>.
 * 
 * Using this property it is possible to overwrite the label of a group in the advanced area of the SmartFilterBar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>undefined</code>.
 * @param {any} oLabel New value for property <code>label</code>
 * @returns {sap.ui.comp.smartfilterbar.GroupConfiguration} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.GroupConfiguration.prototype.setLabel = function(oLabel) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };


// ---- sap.ui.comp.smartfilterbar.SelectOption --------------------------------------------------------------------------

/**
 * Constructor for a new smartfilterbar/SelectOption.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSign sign} : string (default: I)</li>
 * <li>{@link #getOperator operator} : string (default: EQ)</li>
 * <li>{@link #getLow low} : string</li>
 * <li>{@link #getHigh high} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A Select Option can be used to specify default filter values for a control configuration of the SmartFilterBar.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.smartfilterbar.SelectOption with name <code>sClassName</code>
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
sap.ui.comp.smartfilterbar.SelectOption.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>high</code>.
 * 
 * The high value for a select option. The high value is only required for a few operators, e.g. BT (between).
 * @returns {string} Value of property <code>high</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.getHigh = function() { return ""; };

/**
 * Gets current value of property <code>low</code>.
 * 
 * The low value for a select option.
 * @returns {string} Value of property <code>low</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.getLow = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smartfilterbar.SelectOption.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>operator</code>.
 * 
 * The operator for a select option. The default value is EQ "for equals". Possible values can be found here: sap.ui.comp.smartfilterbar.SelectOption.OPERATOR.
 * 
 * Default value is <code>EQ</code>.
 * @returns {string} Value of property <code>operator</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.getOperator = function() { return ""; };

/**
 * Gets current value of property <code>sign</code>.
 * 
 * The sign for a Select Option. Possible values are I for include or E for exclude. Constants can be found here: sap.ui.comp.smartfilterbar.SelectOption.SIGN
 * 
 * Default value is <code>I</code>.
 * @returns {string} Value of property <code>sign</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.getSign = function() { return ""; };

/**
 * Sets a new value for property <code>high</code>.
 * 
 * The high value for a select option. The high value is only required for a few operators, e.g. BT (between).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sHigh New value for property <code>high</code>
 * @returns {sap.ui.comp.smartfilterbar.SelectOption} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.setHigh = function(sHigh) { return new sap.ui.comp.smartfilterbar.SelectOption(); };

/**
 * Sets a new value for property <code>low</code>.
 * 
 * The low value for a select option.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sLow New value for property <code>low</code>
 * @returns {sap.ui.comp.smartfilterbar.SelectOption} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.setLow = function(sLow) { return new sap.ui.comp.smartfilterbar.SelectOption(); };

/**
 * Sets a new value for property <code>operator</code>.
 * 
 * The operator for a select option. The default value is EQ "for equals". Possible values can be found here: sap.ui.comp.smartfilterbar.SelectOption.OPERATOR.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>EQ</code>.
 * @param {string} sOperator New value for property <code>operator</code>
 * @returns {sap.ui.comp.smartfilterbar.SelectOption} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.setOperator = function(sOperator) { return new sap.ui.comp.smartfilterbar.SelectOption(); };

/**
 * Sets a new value for property <code>sign</code>.
 * 
 * The sign for a Select Option. Possible values are I for include or E for exclude. Constants can be found here: sap.ui.comp.smartfilterbar.SelectOption.SIGN
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>I</code>.
 * @param {string} sSign New value for property <code>sign</code>
 * @returns {sap.ui.comp.smartfilterbar.SelectOption} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SelectOption.prototype.setSign = function(sSign) { return new sap.ui.comp.smartfilterbar.SelectOption(); };


// ---- sap.ui.comp.smartfilterbar.SmartFilterBar --------------------------------------------------------------------------

/**
 * Constructor for a new smartfilterbar/SmartFilterBar.
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
 * <li>{@link #getEntityType entityType} : string</li>
 * <li>{@link #getResourceUri resourceUri} : string</li>
 * <li>{@link #getBasicSearchFieldName basicSearchFieldName} : string</li>
 * <li>{@link #getEnableBasicSearch enableBasicSearch} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getControlConfiguration controlConfiguration} : sap.ui.comp.smartfilterbar.ControlConfiguration[]</li>
 * <li>{@link #getGroupConfiguration groupConfiguration} : sap.ui.comp.smartfilterbar.GroupConfiguration[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:pendingChange pendingChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.comp.filterbar.FilterBar#constructor sap.ui.comp.filterbar.FilterBar}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The SmartFilterBar control uses the OData metadata of an entity in order to create a filter bar.<br>
 *        Whether a field is visible on the filter bar, supports type-ahead and value help, for example, is automatically determined. When you use
 *        control configurations and group configurations it is possible to configure the filter bar and adapt it according to your needs.<br>
 *        <b><i>Note:</i></b><br>
 *        Most of the attributes/properties are not dynamic and cannot be changed once the control has been initialized.
 * @extends sap.ui.comp.filterbar.FilterBar
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar = function(sId,mSettings) {};
/**
 * This event is fired after the pending state of the FilterBar control changes.
 * @event
 * @since 1.36
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.pendingChange = function(oControlEvent) {  };

/**
 * Adds some controlConfiguration to the aggregation <code>controlConfiguration</code>.
 * @param {sap.ui.comp.smartfilterbar.ControlConfiguration}
 *            oControlConfiguration the controlConfiguration to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.comp.smartfilterbar.SmartFilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.addControlConfiguration = function(oControlConfiguration) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Searches for the filter field having the specified OData key and adds this filter field to the advanced area. If there is no corresponding
 * field in the OData metadata, this method has no effect.
 * @param {string} sKey The key like specified in the OData metadata
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.addFieldToAdvancedArea = function(sKey) {  };

/**
 * Adds some groupConfiguration to the aggregation <code>groupConfiguration</code>.
 * @param {sap.ui.comp.smartfilterbar.GroupConfiguration}
 *            oGroupConfiguration the groupConfiguration to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.comp.smartfilterbar.SmartFilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.addGroupConfiguration = function(oGroupConfiguration) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Applies the current variant as opposed to fetchVariant. The variant is retrieved via the flex layer.
 * @param {object} oVariant The variant that must be applied. oVariant must contain a valid JSON object.
 * @type void
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.applyVariant = function(oVariant) { return null; };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>pendingChange</code> event of this <code>sap.ui.comp.smartfilterbar.SmartFilterBar</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartfilterbar.SmartFilterBar</code> itself.
 * 
 * This event is fired after the pending state of the FilterBar control changes.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartfilterbar.SmartFilterBar</code> itself
 * @returns {sap.ui.comp.smartfilterbar.SmartFilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.36
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.attachPendingChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Destroys the control.
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.destroy = function() {  };

/**
 * Destroys all the controlConfiguration in the aggregation <code>controlConfiguration</code>.
 * @returns {sap.ui.comp.smartfilterbar.SmartFilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.destroyControlConfiguration = function() { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Destroys all the groupConfiguration in the aggregation <code>groupConfiguration</code>.
 * @returns {sap.ui.comp.smartfilterbar.SmartFilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.destroyGroupConfiguration = function() { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>pendingChange</code> event of this <code>sap.ui.comp.smartfilterbar.SmartFilterBar</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartfilterbar.SmartFilterBar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.detachPendingChange = function(fnFunction,oListener) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartfilterbar.SmartFilterBar with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.comp.filterbar.FilterBar.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Retrieves the currently visible filters and the values for storing them as variants. The result will be passed on as a JSON object to the
 * callee smart variant control.
 * @type object
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.fetchVariant = function() { return new Object(); };

/**
 * Fires event <code>pendingChange</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartfilterbar.SmartFilterBar} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.36
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.firePendingChange = function(mArguments) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Returns an instance of the control for the basic search.
 * @returns {object} Basic search control
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getBasicSearchControl = function() { return new Object(); };

/**
 * Gets current value of property <code>basicSearchFieldName</code>.
 * 
 * Name of the field that has to be the focus of basic search. This is only relevant for SmartFilterBar in combination with
 * ValueHelpDialog.
 * @returns {string} Value of property <code>basicSearchFieldName</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getBasicSearchFieldName = function() { return ""; };

/**
 * Returns the control (if any) with the specified key (Property name in OData entity). Use just the property name as the key when getting a
 * control from the basic area. Example: "CompanyCode" & Use "EntityName/GroupName.FieldName" format to get controls from groups.
 * Example:"Account.CompanyCode"
 * @param {string} sKey The key as present in the OData property name/control configuration
 * @returns {object|sap.ui.Control} The control in the filter bar, if any
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getControlByKey = function(sKey) { return new Object(); };

/**
 * Gets content of aggregation <code>controlConfiguration</code>.
 * 
 * Using control configurations you can add additional configuration to filter fields, for example set custom labels, change the order
 * of fields, or change the filter field control type. Note: Changing the values here after the SmartFilter is initialized (initialise
 * event was fired) has no effect.
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration[]}
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getControlConfiguration = function() { return new Array(); };

/**
 * Gets current value of property <code>enableBasicSearch</code>.
 * 
 * Enables basic search field in the SmartFilterBar control. This must only be enabled for entities that support such search behavior.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableBasicSearch</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getEnableBasicSearch = function() { return false; };

/**
 * Gets current value of property <code>entityType</code>.
 * 
 * The OData entity type whose metadata is used to create the SmartFilterBar. Note: Changing this value after the SmartFilterBar is
 * initialized (initialise event was fired) has no effect.
 * @returns {string} Value of property <code>entityType</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getEntityType = function() { return ""; };

/**
 * Returns the data currently set in the filter data model.
 * @param {boolean} bAllFilterData Also include empty/invisible fields filter data
 * @returns {object} The JSON data in the filter bar
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getFilterData = function(bAllFilterData) { return new Object(); };

/**
 * Returns the data currently set in the filter data model as string.
 * @param {boolean} bAllFilterData Also include empty/invisible fields filter data
 * @returns {string} The JSON data string
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getFilterDataAsString = function(bAllFilterData) { return ""; };

/**
 * Returns an array of filters (sap.ui.model.Filter instances), for visible fields, that can be used to restrict the query result from OData.<br>
 * The result of this method can directly be used during aggregation binding or OData read.
 * @param {string[]} [aFieldNames] optional array of field names that filters should be returned, if not given all visible filters are returned
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getFilters = function(aFieldNames) {  };

/**
 * Gets content of aggregation <code>groupConfiguration</code>.
 * 
 * Provides the possibility to add additional configuration to groups. Groups are used to show fields in the advanced area of the
 * SmartFilterBar. With additional configuration, you can for example set custom labels or change the order of groups. Note: Changing
 * the values here after the SmartFilter is initialized (initialise event was fired) has no effect.
 * @returns {sap.ui.comp.smartfilterbar.GroupConfiguration[]}
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getGroupConfiguration = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartfilterbar.SmartFilterBar.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Returns a parameter object that can be used to restrict the query result from OData in case of basic search.
 * @returns {object} A parameter object containing OData query parameters
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getParameters = function() { return new Object(); };

/**
 * Gets current value of property <code>resourceUri</code>.
 * 
 * Optional. The OData service URL. If it is not specified, the service URL from the OData model (this.getModel()) will be used. Note:
 * Changing this value after the SmartFilterBar is initialized (initialise event was fired) has no effect.
 * @returns {string} Value of property <code>resourceUri</code>
 * @deprecated Since 1.29. Set an ODataModel as the main model on your control/view instead
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.getResourceUri = function() { return ""; };

/**
 * Checks for the provided <code>sap.ui.comp.smartfilterbar.ControlConfiguration</code> in the aggregation <code>controlConfiguration</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartfilterbar.ControlConfiguration}
 *           oControlConfiguration The controlConfiguration whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.indexOfControlConfiguration = function(oControlConfiguration) { return 0; };

/**
 * Checks for the provided <code>sap.ui.comp.smartfilterbar.GroupConfiguration</code> in the aggregation <code>groupConfiguration</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartfilterbar.GroupConfiguration}
 *           oGroupConfiguration The groupConfiguration whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.indexOfGroupConfiguration = function(oGroupConfiguration) { return 0; };

/**
 * Inserts a controlConfiguration into the aggregation <code>controlConfiguration</code>.
 * @param {sap.ui.comp.smartfilterbar.ControlConfiguration}
 *            oControlConfiguration the controlConfiguration to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the controlConfiguration should be inserted at; for
 *              a negative value of <code>iIndex</code>, the controlConfiguration is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the controlConfiguration is inserted at
 *              the last position
 * @returns {sap.ui.comp.smartfilterbar.SmartFilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.insertControlConfiguration = function(oControlConfiguration,iIndex) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Inserts a groupConfiguration into the aggregation <code>groupConfiguration</code>.
 * @param {sap.ui.comp.smartfilterbar.GroupConfiguration}
 *            oGroupConfiguration the groupConfiguration to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the groupConfiguration should be inserted at; for
 *              a negative value of <code>iIndex</code>, the groupConfiguration is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the groupConfiguration is inserted at
 *              the last position
 * @returns {sap.ui.comp.smartfilterbar.SmartFilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.insertGroupConfiguration = function(oGroupConfiguration,iIndex) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Checks the pending state of the FilterBar control
 * @public
 * @returns {boolean} true if at least one FilterItem element of the FilterBar control is pending
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.isPending = function() { return false; };

/**
 * Removes all the controls from the aggregation <code>controlConfiguration</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.removeAllControlConfiguration = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>groupConfiguration</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.comp.smartfilterbar.GroupConfiguration[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.removeAllGroupConfiguration = function() { return new Array(); };

/**
 * Removes a controlConfiguration from the aggregation <code>controlConfiguration</code>.
 * @param {int | string | sap.ui.comp.smartfilterbar.ControlConfiguration} vControlConfiguration The controlConfigurationto remove or its index or id
 * @returns {sap.ui.comp.smartfilterbar.ControlConfiguration} The removed controlConfiguration or <code>null</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.removeControlConfiguration = function(vControlConfiguration) { return new sap.ui.comp.smartfilterbar.ControlConfiguration(); };

/**
 * Removes a groupConfiguration from the aggregation <code>groupConfiguration</code>.
 * @param {int | string | sap.ui.comp.smartfilterbar.GroupConfiguration} vGroupConfiguration The groupConfigurationto remove or its index or id
 * @returns {sap.ui.comp.smartfilterbar.GroupConfiguration} The removed groupConfiguration or <code>null</code>
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.removeGroupConfiguration = function(vGroupConfiguration) { return new sap.ui.comp.smartfilterbar.GroupConfiguration(); };

/**
 * Sets a new value for property <code>basicSearchFieldName</code>.
 * 
 * Name of the field that has to be the focus of basic search. This is only relevant for SmartFilterBar in combination with
 * ValueHelpDialog.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sBasicSearchFieldName New value for property <code>basicSearchFieldName</code>
 * @returns {sap.ui.comp.smartfilterbar.SmartFilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setBasicSearchFieldName = function(sBasicSearchFieldName) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * Sets a new value for property <code>enableBasicSearch</code>.
 * 
 * Enables basic search field in the SmartFilterBar control. This must only be enabled for entities that support such search behavior.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableBasicSearch New value for property <code>enableBasicSearch</code>
 * @returns {sap.ui.comp.smartfilterbar.SmartFilterBar} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setEnableBasicSearch = function(bEnableBasicSearch) { return new sap.ui.comp.smartfilterbar.SmartFilterBar(); };

/**
 * The entity type name from OData metadata, for which the filter bar is created.
 * @param {string} sEntityTypeName type name
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setEntityType = function(sEntityTypeName) {  };

/**
 * Sets the data in the filter data model. The follow-on filterChange event is only triggered when none _CUSTOM data is set.
 * @param {object} oJson The JSON data in the filter bar
 * @param {boolean} bReplace Replace existing filter data
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setFilterData = function(oJson,bReplace) {  };

/**
 * Sets the data in the filter data model as string.
 * @param {string} sJson The JSON data in the filter bar
 * @param {boolean} bReplace Replace existing filter data
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setFilterDataAsString = function(sJson,bReplace) {  };

/**
 * Uses the provided resource URI to fetch the OData metadata instead of using the default ODataModel (getModel()). You should only set this if
 * you intend to get the metadata for the filter bar from elsewhere!
 * @param {string} sResourceUri - The URI of the oData service from which the metadata would be read
 * @deprecated Since 1.29. Set an ODataModel as the main model on your control/view instead
 * @public
 * 
 */
sap.ui.comp.smartfilterbar.SmartFilterBar.prototype.setResourceUri = function(sResourceUri) {  };


// ---- sap.ui.comp.smartform.flexibility.DialogContent --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/flexibility/DialogContent.
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
 * <li>{@link #getContent content} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The content of the personalization dialog of the SmartForm
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent = function(sId,mSettings) {};
/**
 * Destroys the content in the aggregation <code>content</code>.
 * @returns {sap.ui.comp.smartform.flexibility.DialogContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.prototype.destroyContent = function() { return new sap.ui.comp.smartform.flexibility.DialogContent(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartform.flexibility.DialogContent with name <code>sClassName</code>
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
sap.ui.comp.smartform.flexibility.DialogContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * Content of the control itself
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.prototype.getContent = function() { return new sap.ui.core.Control(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.flexibility.DialogContent.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Initialisation
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.prototype.init = function() {  };

/**
 * Returns Ids of the assigned changes of the component (correctly sorted)
 * @param {sap.ui.model.odata.ODataModel} oODataModel The list of fields will be extracetd from the models metadata
 * @param {string} sEntityType The entity type whose fields could be selected
 * @param {string} sComponentName The name of the SAPUI5 component
 * @param {array} aIgnoredFields List of fields which should be ignored
 * @param {Object.<bindingPath:string, fieldListElement:Object>} mBindingPathToFieldListElement Map absolute odata binding paths to the field list elements
 * @param {Object.<id:string, fieldListElement:Object>} mIdToFieldListElement Map field list element ids to the field list elements
 * @param {map} mPropertyBag - (optional) contains additional data that are needed for reading of changes
 * - appDescriptor that belongs to actual component
 * - siteId that belongs to actual component   
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.prototype.initialiseODataFieldSelector = function(oODataModel,sEntityType,sComponentName,aIgnoredFields,mBindingPathToFieldListElement,mIdToFieldListElement,mPropertyBag) {  };

/**
 * Sets the aggregated <code>content</code>.
 * @param {sap.ui.core.Control} oContent The content to set
 * @returns {sap.ui.comp.smartform.flexibility.DialogContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.prototype.setContent = function(oContent) { return new sap.ui.comp.smartform.flexibility.DialogContent(); };

/**
 * Sets the first part of new control ids for the view context
 * @param {string} sId	Control Id
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.DialogContent.prototype.setViewId = function(sId) {  };


// ---- sap.ui.comp.smartform.flexibility.FieldList --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/flexibility/FieldList.
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
 * <li>{@link #getNodes nodes} : sap.ui.comp.smartform.flexibility.FieldListNode[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:selectionChanged selectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:labelChanged labelChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:nodeHidden nodeHidden} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Contains list of forms, groups and fields which can could be modified by the SAPUI5 flexibility services
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList = function(sId,mSettings) {};
/**
 * Event is fired when the label of the node has changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.labelChanged = function(oControlEvent) {  };

/**
 * Event is fired when a node was hidden
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.nodeHidden = function(oControlEvent) {  };

/**
 * Event is fired when the selected node has changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.selectionChanged = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>labelChanged</code> event of this <code>sap.ui.comp.smartform.flexibility.FieldList</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartform.flexibility.FieldList</code> itself.
 * 
 * Event is fired when the label of the node has changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.flexibility.FieldList</code> itself
 * @returns {sap.ui.comp.smartform.flexibility.FieldList} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.attachLabelChanged = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldList(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>nodeHidden</code> event of this <code>sap.ui.comp.smartform.flexibility.FieldList</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartform.flexibility.FieldList</code> itself.
 * 
 * Event is fired when a node was hidden
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.flexibility.FieldList</code> itself
 * @returns {sap.ui.comp.smartform.flexibility.FieldList} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.attachNodeHidden = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldList(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>selectionChanged</code> event of this <code>sap.ui.comp.smartform.flexibility.FieldList</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartform.flexibility.FieldList</code> itself.
 * 
 * Event is fired when the selected node has changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.flexibility.FieldList</code> itself
 * @returns {sap.ui.comp.smartform.flexibility.FieldList} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.attachSelectionChanged = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldList(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>labelChanged</code> event of this <code>sap.ui.comp.smartform.flexibility.FieldList</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartform.flexibility.FieldList} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.detachLabelChanged = function(fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldList(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>nodeHidden</code> event of this <code>sap.ui.comp.smartform.flexibility.FieldList</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartform.flexibility.FieldList} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.detachNodeHidden = function(fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldList(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>selectionChanged</code> event of this <code>sap.ui.comp.smartform.flexibility.FieldList</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartform.flexibility.FieldList} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.detachSelectionChanged = function(fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldList(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartform.flexibility.FieldList with name <code>sClassName</code>
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
sap.ui.comp.smartform.flexibility.FieldList.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>labelChanged</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartform.flexibility.FieldList} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.fireLabelChanged = function(mArguments) { return new sap.ui.comp.smartform.flexibility.FieldList(); };

/**
 * Fires event <code>nodeHidden</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartform.flexibility.FieldList} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.fireNodeHidden = function(mArguments) { return new sap.ui.comp.smartform.flexibility.FieldList(); };

/**
 * Fires event <code>selectionChanged</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartform.flexibility.FieldList} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.fireSelectionChanged = function(mArguments) { return new sap.ui.comp.smartform.flexibility.FieldList(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.flexibility.FieldList.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>nodes</code>.
 * 
 * Nodes representing either a Form, a Group or a field
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode[]}
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.getNodes = function() { return new Array(); };

/**
 * Returns the currently selected field list node
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} field list node
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.getSelectedNode = function() { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Checks for the provided <code>sap.ui.comp.smartform.flexibility.FieldListNode</code> in the aggregation <code>nodes</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartform.flexibility.FieldListNode}
 *           oNode The node whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.indexOfNode = function(oNode) { return 0; };

/**
 * init
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.init = function() {  };

/**
 * Inserts a node into the aggregation <code>nodes</code>.
 * @param {sap.ui.comp.smartform.flexibility.FieldListNode}
 *            oNode the node to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the node should be inserted at; for
 *              a negative value of <code>iIndex</code>, the node is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the node is inserted at
 *              the last position
 * @returns {sap.ui.comp.smartform.flexibility.FieldList} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.insertNode = function(oNode,iIndex) { return new sap.ui.comp.smartform.flexibility.FieldList(); };

/**
 * Removes all the controls from the aggregation <code>nodes</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldList.prototype.removeAllNodes = function() { return new Array(); };


// ---- sap.ui.comp.smartform.flexibility.FieldListNode --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/flexibility/FieldListNode.
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
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getIsVisible isVisible} : boolean</li>
 * <li>{@link #getIsSelected isSelected} : boolean</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getNodes nodes} : sap.ui.comp.smartform.flexibility.FieldListNode[]</li>
 * <li>{@link #getLayout layout} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:selected selected} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:labelChanged labelChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:nodeHidden nodeHidden} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A node within the field list control
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode = function(sId,mSettings) {};
/**
 * label of node was changed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.comp.smartform.flexibility.FieldListNode} oControlEvent.getParameters.target The inner node which was clicked
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.labelChanged = function(oControlEvent) {  };

/**
 * node was hidden
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.comp.smartform.flexibility.FieldListNode} oControlEvent.getParameters.target The inner node which was hidden
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.nodeHidden = function(oControlEvent) {  };

/**
 * node was selected
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.ui.comp.smartform.flexibility.FieldListNode} oControlEvent.getParameters.target The inner node which was clicked
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.selected = function(oControlEvent) {  };

/**
 * Event handler - called when the user changes the label
 * @param {object} oEvent Event
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype._onLabelChanged = function(oEvent) {  };

/**
 * Event handler - called when the user has selected the label using the keyboard
 * @param {object} oEvent Event
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype._onLabelSelectedByKeyboard = function(oEvent) {  };

/**
 * Adds some node to the aggregation <code>nodes</code>.
 * @param {sap.ui.comp.smartform.flexibility.FieldListNode}
 *            oNode the node to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.addNode = function(oNode) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>labelChanged</code> event of this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code> itself.
 * 
 * label of node was changed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code> itself
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.attachLabelChanged = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>nodeHidden</code> event of this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code> itself.
 * 
 * node was hidden
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code> itself
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.attachNodeHidden = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>selected</code> event of this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code> itself.
 * 
 * node was selected
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code> itself
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.attachSelected = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Destroys the layout in the aggregation <code>layout</code>.
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.destroyLayout = function() { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Destroys all the nodes in the aggregation <code>nodes</code>.
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.destroyNodes = function() { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>labelChanged</code> event of this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.detachLabelChanged = function(fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>nodeHidden</code> event of this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.detachNodeHidden = function(fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>selected</code> event of this <code>sap.ui.comp.smartform.flexibility.FieldListNode</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.detachSelected = function(fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartform.flexibility.FieldListNode with name <code>sClassName</code>
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
sap.ui.comp.smartform.flexibility.FieldListNode.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>labelChanged</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>target</code> of type <code>sap.ui.comp.smartform.flexibility.FieldListNode</code>The inner node which was clicked</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.fireLabelChanged = function(mArguments) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Fires event <code>nodeHidden</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>target</code> of type <code>sap.ui.comp.smartform.flexibility.FieldListNode</code>The inner node which was hidden</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.fireNodeHidden = function(mArguments) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Fires event <code>selected</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>target</code> of type <code>sap.ui.comp.smartform.flexibility.FieldListNode</code>The inner node which was clicked</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.fireSelected = function(mArguments) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Gets current value of property <code>isSelected</code>.
 * 
 * is node selected
 * @returns {boolean} Value of property <code>isSelected</code>
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.getIsSelected = function() { return false; };

/**
 * Gets current value of property <code>isVisible</code>.
 * 
 * is visible flag
 * @returns {boolean} Value of property <code>isVisible</code>
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.getIsVisible = function() { return false; };

/**
 * Gets current value of property <code>label</code>.
 * 
 * The label
 * @returns {string} Value of property <code>label</code>
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.getLabel = function() { return ""; };

/**
 * Gets content of aggregation <code>layout</code>.
 * 
 * private aggregation
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.getLayout = function() { return new sap.ui.core.Control(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.flexibility.FieldListNode.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>nodes</code>.
 * 
 * Nodes representing either a Form, a Group or a field
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode[]}
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.getNodes = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.comp.smartform.flexibility.FieldListNode</code> in the aggregation <code>nodes</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartform.flexibility.FieldListNode}
 *           oNode The node whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.indexOfNode = function(oNode) { return 0; };

/**
 * Inserts a node into the aggregation <code>nodes</code>.
 * @param {sap.ui.comp.smartform.flexibility.FieldListNode}
 *            oNode the node to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the node should be inserted at; for
 *              a negative value of <code>iIndex</code>, the node is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the node is inserted at
 *              the last position
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.insertNode = function(oNode,iIndex) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Removes all the controls from the aggregation <code>nodes</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.removeAllNodes = function() { return new Array(); };

/**
 * Removes a node from the aggregation <code>nodes</code>.
 * @param {int | string | sap.ui.comp.smartform.flexibility.FieldListNode} vNode The nodeto remove or its index or id
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} The removed node or <code>null</code>
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.removeNode = function(vNode) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };

/**
 * Overwritten - Sets the isSelected property
 * @param {boolean} bIsSelected field list node selected
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.setIsSelected = function(bIsSelected) {  };

/**
 * Overwritten - Sets the isVisible property
 * @param {boolean} bIsVisible isVisible
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.setIsVisible = function(bIsVisible) {  };

/**
 * Overwritten - Sets the label property
 * @param {string} sLabel Label
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.setLabel = function(sLabel) {  };

/**
 * Sets the aggregated <code>layout</code>.
 * @param {sap.ui.core.Control} oLayout The layout to set
 * @returns {sap.ui.comp.smartform.flexibility.FieldListNode} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.FieldListNode.prototype.setLayout = function(oLayout) { return new sap.ui.comp.smartform.flexibility.FieldListNode(); };


// ---- sap.ui.comp.smartform.flexibility.Input --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/flexibility/Input.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Events
 * <ul>
 * <li>{@link #event:selectedByKeyboard selectedByKeyboard} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Input#constructor sap.m.Input}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Input field with special focus handling
 * @extends sap.m.Input
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.flexibility.Input = function(sId,mSettings) {};
/**
 * Fired when the field is readonly, focused and user pressed Space
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.Input.prototype.selectedByKeyboard = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>selectedByKeyboard</code> event of this <code>sap.ui.comp.smartform.flexibility.Input</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartform.flexibility.Input</code> itself.
 * 
 * Fired when the field is readonly, focused and user pressed Space
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.flexibility.Input</code> itself
 * @returns {sap.ui.comp.smartform.flexibility.Input} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.Input.prototype.attachSelectedByKeyboard = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.Input(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>selectedByKeyboard</code> event of this <code>sap.ui.comp.smartform.flexibility.Input</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartform.flexibility.Input} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.flexibility.Input.prototype.detachSelectedByKeyboard = function(fnFunction,oListener) { return new sap.ui.comp.smartform.flexibility.Input(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartform.flexibility.Input with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Input.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.flexibility.Input.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>selectedByKeyboard</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartform.flexibility.Input} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.flexibility.Input.prototype.fireSelectedByKeyboard = function(mArguments) { return new sap.ui.comp.smartform.flexibility.Input(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.flexibility.Input.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.flexibility.Input.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.comp.smartform.Group --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/Group.
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
 * <li>{@link #getUseHorizontalLayout useHorizontalLayout} : boolean</li>
 * <li>{@link #getHorizontalLayoutGroupElementMinWidth horizontalLayoutGroupElementMinWidth} : int</li>
 * <li>{@link #getLabel label} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getGroupElements groupElements} : sap.ui.comp.smartform.GroupElement[] (default)</li>
 * <li>{@link #getLayout layout} : sap.ui.layout.GridData</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Groups are used to group group elements.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.Group = function(sId,mSettings) {};
/**
 * Adds some entity to the given aggregation.
 * @param {string} sAggregationName the strung identifying the aggregation that oObject should be added to.
 * @param {sap.ui.base.ManagedObject} oObject the object to add.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.addAggregation = function(sAggregationName,oObject) { return new sap.ui.comp.smartform.Group(); };

/**
 * Adds some CustomeData into the aggregation <code>customData</code>. Additionally the customData is also added to the SmartFields in the
 * children hierarchy
 * @param {sap.ui.core.CustomData} oCustomData the customData to add.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.addCustomData = function(oCustomData) { return new sap.ui.comp.smartform.Group(); };

/**
 * Adds some GroupElement into the aggregation <code>groupElements</code>
 * @param {sap.ui.comp.smartform.GroupElement} oGroupElement group element to add to aggregation named groupElements.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.addGroupElement = function(oGroupElement) { return new sap.ui.comp.smartform.Group(); };

/**
 * Destroys all the group elements in the aggregation <code>groupElements</code>
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.destroyGroupElements = function() { return new sap.ui.comp.smartform.Group(); };

/**
 * Destroys the layout in the aggregation <code>layout</code>.
 * @returns {sap.ui.comp.smartform.Group} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.destroyLayout = function() { return new sap.ui.comp.smartform.Group(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartform.Group with name <code>sClassName</code>
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
sap.ui.comp.smartform.Group.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>groupElements</code>.
 * 
 * A GroupElement is a combination of one label and different controls associated to this label.
 * @returns {sap.ui.comp.smartform.GroupElement[]}
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.getGroupElements = function() { return new Array(); };

/**
 * Gets current value of property <code>horizontalLayoutGroupElementMinWidth</code>.
 * 
 * Specifies the minimal size in pixels of all group elements of the form if horizontal Layout is used.
 * @returns {int} Value of property <code>horizontalLayoutGroupElementMinWidth</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.getHorizontalLayoutGroupElementMinWidth = function() { return 0; };

/**
 * Gets current value of property <code>label</code>.
 * 
 * Label for the group.
 * @returns {string} Value of property <code>label</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.getLabel = function() { return ""; };

/**
 * Gets content of aggregation <code>layout</code>.
 * 
 * Layout to specify how the group shall be rendered (e.g. span and line-break)
 * @returns {sap.ui.layout.GridData}
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.getLayout = function() { return new sap.ui.layout.GridData(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.Group.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.Group.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>useHorizontalLayout</code>.
 * 
 * Specifies whether the groups shall be rendered in a ResponsiveLayout with label on top of the group element. Each group will be
 * rendered in a new line.
 * @returns {boolean} Value of property <code>useHorizontalLayout</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.getUseHorizontalLayout = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.comp.smartform.GroupElement</code> in the aggregation <code>groupElements</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartform.GroupElement}
 *           oGroupElement The groupElement whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.indexOfGroupElement = function(oGroupElement) { return 0; };

/**
 * Inserts a GroupElement into the aggregation <code>groupElements</code>
 * @param {sap.ui.comp.smartform.GroupElement} oGroupElement group element to insert into aggregation named groupElements.
 * @param {int} iIndex the 0-based index the GroupElement should be inserted at.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.insertGroupElement = function(oGroupElement,iIndex) { return new sap.ui.comp.smartform.Group(); };

/**
 * Removes all group elements from the aggregation <code>groupElements</code>
 * @param {int|string|sap.ui.comp.smartform.GroupElement} the GroupElement to remove or its index or id.
 * @return {sap.ui.comp.smartform.GroupElement[]} an array of the removed elements.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.removeAllGroupElements = function(the) { return new Array(); };

/**
 * Removes a GroupElement from the aggregation <code>groupElements</code>
 * @param {int|string|sap.ui.comp.smartform.GroupElement} vGroupElement the GroupElement to remove or its index or id.
 * @return {sap.ui.comp.smartform.GroupElement} the removed GroupElement or null.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.removeGroupElement = function(vGroupElement) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Sets a new object in the named 0..1 aggregation.
 * @param {string} sAggregationName name of an 0..1 aggregation.
 * @param {sap.ui.base.ManagedObject} oObject the managed object that is set as aggregated object.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setAggregation = function(sAggregationName,oObject) { return new sap.ui.comp.smartform.Group(); };

/**
 * Setter for property editable of all smart fields in children hierarchy.
 * @param {boolean} bEditMode new value for editable property of smart fields.
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setEditMode = function(bEditMode) { return new sap.ui.comp.smartform.Group(); };

/**
 * Sets a new value for property <code>horizontalLayoutGroupElementMinWidth</code>.
 * 
 * Specifies the minimal size in pixels of all group elements of the form if horizontal Layout is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iHorizontalLayoutGroupElementMinWidth New value for property <code>horizontalLayoutGroupElementMinWidth</code>
 * @returns {sap.ui.comp.smartform.Group} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setHorizontalLayoutGroupElementMinWidth = function(iHorizontalLayoutGroupElementMinWidth) { return new sap.ui.comp.smartform.Group(); };

/**
 * Sets a new value for property <code>label</code>.
 * 
 * Label for the group.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sLabel New value for property <code>label</code>
 * @returns {sap.ui.comp.smartform.Group} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setLabel = function(sLabel) { return new sap.ui.comp.smartform.Group(); };

/**
 * Sets the aggregated <code>layout</code>.
 * @param {sap.ui.layout.GridData} oLayout The layout to set
 * @returns {sap.ui.comp.smartform.Group} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setLayout = function(oLayout) { return new sap.ui.comp.smartform.Group(); };

/**
 * Sets the given value for the given property
 * @param {string} sPropertyName name of the property to set
 * @param {any} oValue value to set the property to
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setProperty = function(sPropertyName,oValue) {  };

/**
 * Sets a new value for property <code>useHorizontalLayout</code>.
 * 
 * Specifies whether the groups shall be rendered in a ResponsiveLayout with label on top of the group element. Each group will be
 * rendered in a new line.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {boolean} bUseHorizontalLayout New value for property <code>useHorizontalLayout</code>
 * @returns {sap.ui.comp.smartform.Group} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setUseHorizontalLayout = function(bUseHorizontalLayout) { return new sap.ui.comp.smartform.Group(); };

/**
 * Sets a new value for property visible. Whether the control should be visible on the screen. If set to false, a placeholder is rendered instead
 * of the real control When called with a value of null or undefined, the default value of the property will be restored. Default value is true.
 * @param {boolean} bVisible New value for property visible
 * @return {sap.ui.comp.smartform.Group} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.Group.prototype.setVisible = function(bVisible) { return new sap.ui.comp.smartform.Group(); };


// ---- sap.ui.comp.smartform.GroupElement --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/GroupElement.
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
 * <li>{@link #getUseHorizontalLayout useHorizontalLayout} : boolean</li>
 * <li>{@link #getHorizontalLayoutGroupElementMinWidth horizontalLayoutGroupElementMinWidth} : int</li>
 * <li>{@link #getElementForLabel elementForLabel} : int (default: 0)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getElements elements} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:visibleChanged visibleChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] initial settings for the new control
 * @class A GroupElement is a combination of one label and different controls associated to this label.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.GroupElement = function(sId,mSettings) {};
/**
 * The event is fired after the visibility of the control has changed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.visibleChanged = function(oControlEvent) {  };

/**
 * Adds some customData into the aggregation <code>customData</code>. Additionally, customData is also added to the SmartField controls in the
 * children hierarchy.
 * @param {sap.ui.core.CustomData} oCustomData the customData to add.
 * @return {sap.ui.comp.smartform.GroupElement} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.addCustomData = function(oCustomData) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Adds some control into the aggregation <code>elements</code>
 * @param {sap.ui.core.Control} oElement the control to add.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.addElement = function(oElement) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>visibleChanged</code> event of this <code>sap.ui.comp.smartform.GroupElement</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartform.GroupElement</code> itself.
 * 
 * The event is fired after the visibility of the control has changed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.GroupElement</code> itself
 * @returns {sap.ui.comp.smartform.GroupElement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.attachVisibleChanged = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Destroys all the elements in the aggregation <code>elements</code>.
 * @returns {sap.ui.comp.smartform.GroupElement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.destroyElements = function() { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>visibleChanged</code> event of this <code>sap.ui.comp.smartform.GroupElement</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartform.GroupElement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.detachVisibleChanged = function(fnFunction,oListener) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartform.GroupElement with name <code>sClassName</code>
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
sap.ui.comp.smartform.GroupElement.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>visibleChanged</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartform.GroupElement} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.fireVisibleChanged = function(mArguments) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Gets current value of property <code>elementForLabel</code>.
 * 
 * Index of element to be used for label determination
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>elementForLabel</code>
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.getElementForLabel = function() { return 0; };

/**
 * Getter for aggregation <code>elements</code>
 * @return {sap.ui.core.Controls[]} an array of the removed controls.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.getElements = function() { return new Array(); };

/**
 * Returns the from element.
 * @return {sap.ui.layout.form.FormElement} the form element.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.getFormElement = function() { return new sap.ui.layout.form.FormElement(); };

/**
 * Gets current value of property <code>horizontalLayoutGroupElementMinWidth</code>.
 * 
 * Specifies the minimal size in pixels of all group elements of the form if horizontal Layout is used.
 * @returns {int} Value of property <code>horizontalLayoutGroupElementMinWidth</code>
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.getHorizontalLayoutGroupElementMinWidth = function() { return 0; };

/**
 * Returns the text of the label.
 * @return {string} text of the label.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.getLabelText = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.GroupElement.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.GroupElement.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>useHorizontalLayout</code>.
 * 
 * Specifies whether the groups shall be rendered in a ResponsiveLayout with label on top of the group element. Each group will be
 * rendered in a new line.
 * @returns {boolean} Value of property <code>useHorizontalLayout</code>
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.getUseHorizontalLayout = function() { return false; };

/**
 * Determines the visibility of a group element based on elements
 * @returns {boolean} Returns true, in case one element of the group element is visible
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.getVisibleBasedOnElements = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>elements</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oElement The element whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.indexOfElement = function(oElement) { return 0; };

/**
 * Inserts a control into the aggregation <code>elements</code>
 * @param {sap.ui.core.Control} oElement the control to insert into aggregation named elements.
 * @param {int} iIndex the 0-based index the control should be inserted at.
 * @return {sap.ui.comp.smartform.GroupElement} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.insertElement = function(oElement,iIndex) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Removes all the controls in the aggregation named elements.
 * @return {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.removeAllElements = function() { return new Array(); };

/**
 * Removes an element from the aggregation named elements.
 * @param {int|string|sap.ui.core.Control} The element to remove or its index or ID
 * @return {sap.ui.core.Control} The removed element or null
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.removeElement = function(The) { return new sap.ui.core.Control(); };

/**
 * Setter for property editable of all smart fields in children hierarchy.
 * @param {boolean} bEditMode new value for editable property of smart fields.
 * @return {sap.ui.comp.smartform.GroupElement} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.setEditMode = function(bEditMode) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Sets a new value for property <code>elementForLabel</code>.
 * 
 * Index of element to be used for label determination
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iElementForLabel New value for property <code>elementForLabel</code>
 * @returns {sap.ui.comp.smartform.GroupElement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.setElementForLabel = function(iElementForLabel) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Sets a new value for property <code>horizontalLayoutGroupElementMinWidth</code>.
 * 
 * Specifies the minimal size in pixels of all group elements of the form if horizontal Layout is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iHorizontalLayoutGroupElementMinWidth New value for property <code>horizontalLayoutGroupElementMinWidth</code>
 * @returns {sap.ui.comp.smartform.GroupElement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.setHorizontalLayoutGroupElementMinWidth = function(iHorizontalLayoutGroupElementMinWidth) { return new sap.ui.comp.smartform.GroupElement(); };

/**
 * Sets the given value for the given property
 * @param {string} sPropertyName name of the property to set
 * @param {any} oValue value to set the property to
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.setProperty = function(sPropertyName,oValue) {  };

/**
 * Sets a new value for property <code>useHorizontalLayout</code>.
 * 
 * Specifies whether the groups shall be rendered in a ResponsiveLayout with label on top of the group element. Each group will be
 * rendered in a new line.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {boolean} bUseHorizontalLayout New value for property <code>useHorizontalLayout</code>
 * @returns {sap.ui.comp.smartform.GroupElement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.GroupElement.prototype.setUseHorizontalLayout = function(bUseHorizontalLayout) { return new sap.ui.comp.smartform.GroupElement(); };


// ---- sap.ui.comp.smartform.Layout --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/Layout.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabelSpanL labelSpanL} : int</li>
 * <li>{@link #getLabelSpanM labelSpanM} : int</li>
 * <li>{@link #getLabelSpanS labelSpanS} : int</li>
 * <li>{@link #getEmptySpanL emptySpanL} : int</li>
 * <li>{@link #getEmptySpanM emptySpanM} : int</li>
 * <li>{@link #getEmptySpanS emptySpanS} : int</li>
 * <li>{@link #getColumnsL columnsL} : int</li>
 * <li>{@link #getColumnsM columnsM} : int</li>
 * <li>{@link #getSingleGroupFullSize singleGroupFullSize} : boolean (default: true)</li>
 * <li>{@link #getBreakpointL breakpointL} : int</li>
 * <li>{@link #getBreakpointM breakpointM} : int</li>
 * <li>{@link #getGridDataSpan gridDataSpan} : sap.ui.layout.GridSpan (default: )</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class Layout settings to adjust ResponsiveGridLayout.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.Layout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.smartform.Layout with name <code>sClassName</code>
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
sap.ui.comp.smartform.Layout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>breakpointL</code>.
 * 
 * Breakpoint (in pixel) between Medium size and Large size.
 * @returns {int} Value of property <code>breakpointL</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getBreakpointL = function() { return 0; };

/**
 * Gets current value of property <code>breakpointM</code>.
 * 
 * reakpoint (in pixel) between Small size and Medium size.
 * @returns {int} Value of property <code>breakpointM</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getBreakpointM = function() { return 0; };

/**
 * Gets current value of property <code>columnsL</code>.
 * 
 * Number of columns for large size.<br>
 * The number of columns for large size must not be smaller than the number of columns for medium size.
 * @returns {int} Value of property <code>columnsL</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getColumnsL = function() { return 0; };

/**
 * Gets current value of property <code>columnsM</code>.
 * 
 * Number of columns for medium size.
 * @returns {int} Value of property <code>columnsM</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getColumnsM = function() { return 0; };

/**
 * Gets current value of property <code>emptySpanL</code>.
 * 
 * Number of grid cells that are empty at the end of each line on large size.
 * @returns {int} Value of property <code>emptySpanL</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getEmptySpanL = function() { return 0; };

/**
 * Gets current value of property <code>emptySpanM</code>.
 * 
 * Number of grid cells that are empty at the end of each line on medium size.
 * @returns {int} Value of property <code>emptySpanM</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getEmptySpanM = function() { return 0; };

/**
 * Gets current value of property <code>emptySpanS</code>.
 * 
 * Number of grid cells that are empty at the end of each line on small size.
 * @returns {int} Value of property <code>emptySpanS</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getEmptySpanS = function() { return 0; };

/**
 * Gets current value of property <code>gridDataSpan</code>.
 * 
 * A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters
 * L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4
 * m4". Note that the parameters has to be provided in the order large medium small.<br>
 * The value set here will be set to all group elements when used with horizontal layout (smart form property useHorizontalLayout)
 * 
 * Default value is <code></code>.
 * @returns {sap.ui.layout.GridSpan} Value of property <code>gridDataSpan</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getGridDataSpan = function() { return new sap.ui.layout.GridSpan(); };

/**
 * Gets current value of property <code>labelSpanL</code>.
 * 
 * Default span for labels in large size. This span is only used if more than 1 container is in one line, if only 1 container is in
 * the line the labelSpanM value is used.
 * @returns {int} Value of property <code>labelSpanL</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getLabelSpanL = function() { return 0; };

/**
 * Gets current value of property <code>labelSpanM</code>.
 * 
 * Default span for labels in medium size. This property is used for full size containers. If more than one Container is in one line,
 * labelSpanL is used.
 * @returns {int} Value of property <code>labelSpanM</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getLabelSpanM = function() { return 0; };

/**
 * Gets current value of property <code>labelSpanS</code>.
 * 
 * Default span for labels in small size.
 * @returns {int} Value of property <code>labelSpanS</code>
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getLabelSpanS = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.Layout.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.Layout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>singleGroupFullSize</code>.
 * 
 * If the SmartForm contains only one single Group and this property is set, the Group is displayed using the full size of the
 * SmartForm. In this case the properties columnsL and columnsM are ignored.<br>
 * In all other cases the Group is displayed in the size of one column.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>singleGroupFullSize</code>
 * @since 1.34.1
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.getSingleGroupFullSize = function() { return false; };

/**
 * Sets a new value for property <code>breakpointL</code>.
 * 
 * Breakpoint (in pixel) between Medium size and Large size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iBreakpointL New value for property <code>breakpointL</code>
 * @returns {sap.ui.comp.smartform.Layout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setBreakpointL = function(iBreakpointL) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Sets a new value for property <code>breakpointM</code>.
 * 
 * reakpoint (in pixel) between Small size and Medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iBreakpointM New value for property <code>breakpointM</code>
 * @returns {sap.ui.comp.smartform.Layout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setBreakpointM = function(iBreakpointM) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Sets a new value for property <code>columnsL</code>.
 * 
 * Number of columns for large size.<br>
 * The number of columns for large size must not be smaller than the number of columns for medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iColumnsL New value for property <code>columnsL</code>
 * @returns {sap.ui.comp.smartform.Layout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setColumnsL = function(iColumnsL) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Sets a new value for property <code>columnsM</code>.
 * 
 * Number of columns for medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iColumnsM New value for property <code>columnsM</code>
 * @returns {sap.ui.comp.smartform.Layout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setColumnsM = function(iColumnsM) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Sets a new value for property <code>emptySpanL</code>.
 * 
 * Number of grid cells that are empty at the end of each line on large size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iEmptySpanL New value for property <code>emptySpanL</code>
 * @returns {sap.ui.comp.smartform.Layout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setEmptySpanL = function(iEmptySpanL) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Sets a new value for property <code>emptySpanM</code>.
 * 
 * Number of grid cells that are empty at the end of each line on medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iEmptySpanM New value for property <code>emptySpanM</code>
 * @returns {sap.ui.comp.smartform.Layout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setEmptySpanM = function(iEmptySpanM) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Sets a new value for property <code>emptySpanS</code>.
 * 
 * Number of grid cells that are empty at the end of each line on small size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iEmptySpanS New value for property <code>emptySpanS</code>
 * @returns {sap.ui.comp.smartform.Layout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setEmptySpanS = function(iEmptySpanS) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Sets a new value for property <code>gridDataSpan</code>.
 * 
 * A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters
 * L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4
 * m4". Note that the parameters has to be provided in the order large medium small.<br>
 * The value set here will be set to all group elements when used with horizontal layout (smart form property useHorizontalLayout)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {sap.ui.layout.GridSpan} sGridDataSpan New value for property <code>gridDataSpan</code>
 * @returns {sap.ui.comp.smartform.Layout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setGridDataSpan = function(sGridDataSpan) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Sets a new value for property <code>labelSpanL</code>.
 * 
 * Default span for labels in large size. This span is only used if more than 1 container is in one line, if only 1 container is in
 * the line the labelSpanM value is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iLabelSpanL New value for property <code>labelSpanL</code>
 * @returns {sap.ui.comp.smartform.Layout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setLabelSpanL = function(iLabelSpanL) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Sets a new value for property <code>labelSpanM</code>.
 * 
 * Default span for labels in medium size. This property is used for full size containers. If more than one Container is in one line,
 * labelSpanL is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iLabelSpanM New value for property <code>labelSpanM</code>
 * @returns {sap.ui.comp.smartform.Layout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setLabelSpanM = function(iLabelSpanM) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Sets a new value for property <code>labelSpanS</code>.
 * 
 * Default span for labels in small size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iLabelSpanS New value for property <code>labelSpanS</code>
 * @returns {sap.ui.comp.smartform.Layout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setLabelSpanS = function(iLabelSpanS) { return new sap.ui.comp.smartform.Layout(); };

/**
 * Sets a new value for property <code>singleGroupFullSize</code>.
 * 
 * If the SmartForm contains only one single Group and this property is set, the Group is displayed using the full size of the
 * SmartForm. In this case the properties columnsL and columnsM are ignored.<br>
 * In all other cases the Group is displayed in the size of one column.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSingleGroupFullSize New value for property <code>singleGroupFullSize</code>
 * @returns {sap.ui.comp.smartform.Layout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.1
 * @public
 * 
 */
sap.ui.comp.smartform.Layout.prototype.setSingleGroupFullSize = function(bSingleGroupFullSize) { return new sap.ui.comp.smartform.Layout(); };


// ---- sap.ui.comp.smartform.SmartForm --------------------------------------------------------------------------

/**
 * Constructor for a new smartform/SmartForm.
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
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getUseHorizontalLayout useHorizontalLayout} : boolean</li>
 * <li>{@link #getHorizontalLayoutGroupElementMinWidth horizontalLayoutGroupElementMinWidth} : int</li>
 * <li>{@link #getCheckButton checkButton} : boolean (default: false)</li>
 * <li>{@link #getEntityType entityType} : string</li>
 * <li>{@link #getExpandable expandable} : boolean (default: false)</li>
 * <li>{@link #getExpanded expanded} : boolean</li>
 * <li>{@link #getEditTogglable editTogglable} : boolean (default: false)</li>
 * <li>{@link #getEditable editable} : boolean (default: false)</li>
 * <li>{@link #getIgnoredFields ignoredFields} : string</li>
 * <li>{@link #getFlexEnabled flexEnabled} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getGroups groups} : sap.ui.comp.smartform.Group[] (default)</li>
 * <li>{@link #getLayout layout} : sap.ui.comp.smartform.Layout</li>
 * <li>{@link #getSemanticObjectController semanticObjectController} : sap.ui.comp.navpopover.SemanticObjectController</li>
 * <li>{@link #getCustomToolbar customToolbar} : sap.m.Toolbar</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:editToggled editToggled} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:checked checked} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The SmartForm control renders a form (sap.ui.layout.form.Form) and supports key user personalization, such as adding/hiding fields and
 *        groups, changing the order of fields and groups, and changing labels. When used with the SmartField control the label is taken from the
 *        metadata annotation <code>sap:label</code> if not specified in the XML view.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartform.SmartForm = function(sId,mSettings) {};
/**
 * This event is fired after check was performed.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.checked = function(oControlEvent) {  };

/**
 * This event is fired when the editable property is toggled.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.editToggled = function(oControlEvent) {  };

/**
 * Updates controls in the hierarchy of a cloned smart form.
 * @param {sap.ui.comp.smartform.SmartForm} The cloned smart form
 * @protected
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype._updateClonedElements = function(The) {  };

/**
 * Adds some entity oObject to the aggregation identified by sAggregationName.
 * @public
 * @param {string} Name of the aggregation
 * @param {object} The object representing a group
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.addAggregation = function(Name,The) {  };

/**
 * Adds a group to the aggregation named groups.
 * @public
 * @param {object} Group to be added
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.addGroup = function(Group) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>checked</code> event of this <code>sap.ui.comp.smartform.SmartForm</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartform.SmartForm</code> itself.
 * 
 * This event is fired after check was performed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.SmartForm</code> itself
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.attachChecked = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>editToggled</code> event of this <code>sap.ui.comp.smartform.SmartForm</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartform.SmartForm</code> itself.
 * 
 * This event is fired when the editable property is toggled.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartform.SmartForm</code> itself
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.attachEditToggled = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Checks smart fields for client errors.
 * @param {boolean} Determines is only visible fields in visible groups should be considered. default: <code>true</code>
 * @returns {string[]} An array of fields with errors
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.check = function(Determines) { return new Array(); };

/**
 * Clones the SmartForm control.
 * @param {string} [sIdSuffix] A suffix to be appended to the cloned element id
 * @param {string[]} [aLocalIds] An array of local IDs within the cloned hierarchy (internally used)
 * @return {sap.ui.base.ManagedObject} A reference to the newly created clone
 * @protected
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.clone = function(sIdSuffix,aLocalIds) { return new sap.ui.base.ManagedObject(); };

/**
 * Destroys the customToolbar in the aggregation <code>customToolbar</code>.
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.destroyCustomToolbar = function() { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Destroys a <code>group</code> from the aggregation named groups.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.destroyGroups = function() { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Destroys the layout in the aggregation <code>layout</code>.
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.destroyLayout = function() { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Destroys the semanticObjectController in the aggregation <code>semanticObjectController</code>.
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.destroySemanticObjectController = function() { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>checked</code> event of this <code>sap.ui.comp.smartform.SmartForm</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.detachChecked = function(fnFunction,oListener) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>editToggled</code> event of this <code>sap.ui.comp.smartform.SmartForm</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.detachEditToggled = function(fnFunction,oListener) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Cleans up the resources associated with this element and all its children.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.exit = function() {  };

/**
 * Creates a new subclass of class sap.ui.comp.smartform.SmartForm with name <code>sClassName</code>
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
sap.ui.comp.smartform.SmartForm.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>checked</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.fireChecked = function(mArguments) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Fires event <code>editToggled</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.fireEditToggled = function(mArguments) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Returns the aggregated object(s) for the named aggregation.
 * @public
 * @param {string} Name of the aggregation
 * @returns {array} Content of an aggregation
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getAggregation = function(Name) { return null; };

/**
 * Gets current value of property <code>checkButton</code>.
 * 
 * Specifies whether a check button is added to the toolbar.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>checkButton</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getCheckButton = function() { return false; };

/**
 * Getter for aggregation <code>customToolbar</code>.
 * @return {sap.m.Toolbar} The custom toolbar
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getCustomToolbar = function() { return new sap.m.Toolbar(); };

/**
 * Gets current value of property <code>editable</code>.
 * 
 * Specifies whether the form is editable.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getEditable = function() { return false; };

/**
 * Gets current value of property <code>editTogglable</code>.
 * 
 * Specifies whether the editable property is togglable via button.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>editTogglable</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getEditTogglable = function() { return false; };

/**
 * Gets current value of property <code>entityType</code>.
 * 
 * CSV of entity types for which the flexibility features are available.<br>
 * For more information about SAPUI5 flexibility, refer to the Developer Guide.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * @returns {string} Value of property <code>entityType</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getEntityType = function() { return ""; };

/**
 * Gets current value of property <code>expandable</code>.
 * 
 * Specifies whether the control is expandable. Per default the control is not rendered as expanded.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>expandable</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getExpandable = function() { return false; };

/**
 * Gets current value of property <code>expanded</code>.
 * 
 * If expandable, this property indicates whether the state is expanded or not. If expanded, then the toolbar (if available) and the
 * content is rendered; if expanded is false, then only the headerText/headerToolbar is rendered.
 * @returns {boolean} Value of property <code>expanded</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getExpanded = function() { return false; };

/**
 * Gets current value of property <code>flexEnabled</code>.
 * 
 * Specifies whether the form enables flexibility features, such as adding new fields.<br>
 * For more information about SAPUI5 flexibility, refer to the Developer Guide.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>flexEnabled</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getFlexEnabled = function() { return false; };

/**
 * Returns the content of aggregation groups.
 * @public
 * @returns {array} of groups
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getGroups = function() { return null; };

/**
 * Gets current value of property <code>horizontalLayoutGroupElementMinWidth</code>.
 * 
 * Specifies the minimal size in pixels of all group elements of the form if the horizontal layout is used.
 * @returns {int} Value of property <code>horizontalLayoutGroupElementMinWidth</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getHorizontalLayoutGroupElementMinWidth = function() { return 0; };

/**
 * Gets current value of property <code>ignoredFields</code>.
 * 
 * CSV of fields that must be ignored in the OData metadata by the SmartForm control.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * @returns {string} Value of property <code>ignoredFields</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getIgnoredFields = function() { return ""; };

/**
 * Gets content of aggregation <code>layout</code>.
 * 
 * Layout settings to adjust ResponsiveGridLayout
 * @returns {sap.ui.comp.smartform.Layout}
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getLayout = function() { return new sap.ui.comp.smartform.Layout(); };

/**
 * Returns a metadata object for class sap.ui.comp.smartform.SmartForm.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartform.SmartForm.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>semanticObjectController</code>.
 * 
 * The Semantic Object Controller allows the user to specify and overwrite functionality for semantic object navigation.
 * @returns {sap.ui.comp.navpopover.SemanticObjectController}
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getSemanticObjectController = function() { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Retrieves all the smart fields of the form.
 * @param {boolean} Determines if only visible groups are considered; default is true
 * @return {sap.ui.comp.smartfield.SmartField[]} An array of smart fields (might be empty).
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getSmartFields = function(Determines) { return new Array(); };

/**
 * Gets current value of property <code>title</code>.
 * 
 * Title of the form.
 * @returns {string} Value of property <code>title</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property <code>useHorizontalLayout</code>.
 * 
 * Specifies whether the groups are rendered in a {@link sap.ui.layout.form.ResponsiveLayout ResponsiveLayout} with the label above
 * the field. Each group is rendered in a new line.
 * @returns {boolean} Value of property <code>useHorizontalLayout</code>
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getUseHorizontalLayout = function() { return false; };

/**
 * Returns the array of properties currently visible on the UI.
 * @return {string[]} The properties currently visible
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.getVisibleProperties = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.comp.smartform.Group</code> in the aggregation <code>groups</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartform.Group}
 *           oGroup The group whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.indexOfGroup = function(oGroup) { return 0; };

/**
 * Inserts a <code>group</code> into the aggregation named groups.
 * @param {sap.ui.comp.smartform.Group} The group to insert
 * @param {int} The 0-based index the group should be inserted at
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.insertGroup = function(The,The) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Sets default span for GridData layout of group elements when used with horizontal layout.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.propagateGridDataSpan = function() { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Removes all the groups in the aggregation named groups.
 * @return {sap.ui.comp.smartform.Group[]} an array of the removed groups (might be empty).
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.removeAllGroups = function() { return new Array(); };

/**
 * Removes a <code>group</code> from the aggregation named groups.
 * @param {sap.ui.comp.smartform.Group} The group to be removed
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.removeGroup = function(The) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Sets a new value for property <code>checkButton</code>.
 * 
 * Specifies whether a check button is added to the toolbar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bCheckButton New value for property <code>checkButton</code>
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setCheckButton = function(bCheckButton) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for aggregation <code>customToolbar</code>. Default value is <code>undefined</code>.
 * @param {sap.m.Toolbar} New value for aggregation <code>customToolbar</code>.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setCustomToolbar = function(New) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for property <code>editable</code>.
 * @param {boolean} New value for property <code>editable</code>.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setEditable = function(New) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for property <code>editTogglable</code>. Default value is <code>undefined</code>.
 * @param {boolean} New value for property <code>editTogglable</code>.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setEditTogglable = function(New) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Sets a new value for property <code>entityType</code>.
 * 
 * CSV of entity types for which the flexibility features are available.<br>
 * For more information about SAPUI5 flexibility, refer to the Developer Guide.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sEntityType New value for property <code>entityType</code>
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setEntityType = function(sEntityType) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Sets a new value for property <code>expandable</code>.
 * 
 * Specifies whether the control is expandable. Per default the control is not rendered as expanded.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bExpandable New value for property <code>expandable</code>
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setExpandable = function(bExpandable) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Sets a new value for property <code>expanded</code>.
 * 
 * If expandable, this property indicates whether the state is expanded or not. If expanded, then the toolbar (if available) and the
 * content is rendered; if expanded is false, then only the headerText/headerToolbar is rendered.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {boolean} bExpanded New value for property <code>expanded</code>
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setExpanded = function(bExpanded) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Sets a new value for property <code>flexEnabled</code>.
 * 
 * Specifies whether the form enables flexibility features, such as adding new fields.<br>
 * For more information about SAPUI5 flexibility, refer to the Developer Guide.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bFlexEnabled New value for property <code>flexEnabled</code>
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setFlexEnabled = function(bFlexEnabled) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Sets the focus on the first editable control.
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setFocusOnEditableControl = function() {  };

/**
 * Sets a new value for property <code>horizontalLayoutGroupElementMinWidth</code>.
 * 
 * Specifies the minimal size in pixels of all group elements of the form if the horizontal layout is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iHorizontalLayoutGroupElementMinWidth New value for property <code>horizontalLayoutGroupElementMinWidth</code>
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setHorizontalLayoutGroupElementMinWidth = function(iHorizontalLayoutGroupElementMinWidth) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Sets a new value for property <code>ignoredFields</code>.
 * 
 * CSV of fields that must be ignored in the OData metadata by the SmartForm control.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sIgnoredFields New value for property <code>ignoredFields</code>
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setIgnoredFields = function(sIgnoredFields) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Sets the aggregated <code>layout</code>.
 * @param {sap.ui.comp.smartform.Layout} oLayout The layout to set
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setLayout = function(oLayout) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Sets the aggregated <code>semanticObjectController</code>.
 * @param {sap.ui.comp.navpopover.SemanticObjectController} oSemanticObjectController The semanticObjectController to set
 * @returns {sap.ui.comp.smartform.SmartForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setSemanticObjectController = function(oSemanticObjectController) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for property <code>title</code>. Default value is <code>undefined</code>.
 * @param {string} sTitle new value for property <code>title</code>.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setTitle = function(sTitle) { return new sap.ui.comp.smartform.SmartForm(); };

/**
 * Setter for property <code>useHorizontalLayout</code>.
 * @param {boolean} New value for property <code>useHorizontalLayout</code>.
 * @return {sap.ui.comp.smartform.SmartForm} <code>this</code> to allow method chaining.
 * @public
 * 
 */
sap.ui.comp.smartform.SmartForm.prototype.setUseHorizontalLayout = function(New) { return new sap.ui.comp.smartform.SmartForm(); };


// ---- sap.ui.comp.smartmicrochart.SmartAreaMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.comp.smartmicrochart/SmartAreaMicroChart.
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
 * <li>{@link #getEntitySet entitySet} : string</li>
 * <li>{@link #getSmartFilterId smartFilterId} : string</li>
 * <li>{@link #getIgnoredFields ignoredFields} : string</li>
 * <li>{@link #getIgnoreFromPersonalisation ignoreFromPersonalisation} : string</li>
 * <li>{@link #getChartType chartType} : string</li>
 * <li>{@link #getUseVariantManagement useVariantManagement} : boolean (default: true)</li>
 * <li>{@link #getUseChartPersonalisation useChartPersonalisation} : boolean (default: true)</li>
 * <li>{@link #getPersistencyKey persistencyKey} : string</li>
 * <li>{@link #getCurrentVariantId currentVariantId} : string</li>
 * <li>{@link #getEnableAutoBinding enableAutoBinding} : boolean (default: false)</li>
 * <li>{@link #getChartBindingPath chartBindingPath} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beforeRebindChart beforeRebindChart} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantInitialise afterVariantInitialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantSave afterVariantSave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantApply afterVariantApply} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:showOverlay showOverlay} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.suite.ui.microchart.AreaMicroChart#constructor sap.suite.ui.microchart.AreaMicroChart}
 * can be used as well.
 * @param {string}
 *          [sId] id for the new control, generated automatically if no id is given
 * @param {object}
 *          [mSettings] initial settings for the new control
 * @class The SmartAreaMicroChart control creates a AreaMicroChart based on OData metadata and the configuration
 *        specified. The entitySet attribute must be specified to use the control. This attribute is used to fetch
 *        fields from OData metadata, from which Micro Area Chart UI will be generated; it can also be used to fetch
 *        the actual chart data.<br>
 *        <b><i>Note:</i></b><br>
 *        Most of the attributes/properties are not dynamic and cannot be changed once the control has been
 *        initialised.
 * @extends sap.suite.ui.microchart.AreaMicroChart
 * @version 1.36.12
 * @experimental Since 1.34.0 This is currently under development. The API could be changed at any point in time.
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart = function(sId,mSettings) {};
/**
 * Event fired after a variant has been applied.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.afterVariantApply = function(oControlEvent) {  };

/**
 * Event fired after variant management in the SmartAreaMicroChart has been initialised.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.afterVariantInitialise = function(oControlEvent) {  };

/**
 * Event fired after a variant has been saved. This event can be used to retrieve the ID of the saved variant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.afterVariantSave = function(oControlEvent) {  };

/**
 * Event fired just before the binding is being done.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.beforeRebindChart = function(oControlEvent) {  };

/**
 * Event fired once the control has been initialised.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.initialise = function(oControlEvent) {  };

/**
 * Event fired just before the overlay is being shown.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.showOverlay = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterVariantApply</code> event of this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code> itself.
 * 
 * Event fired after a variant has been applied.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code> itself
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.attachAfterVariantApply = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterVariantInitialise</code> event of this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code> itself.
 * 
 * Event fired after variant management in the SmartAreaMicroChart has been initialised.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code> itself
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.attachAfterVariantInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterVariantSave</code> event of this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code> itself.
 * 
 * Event fired after a variant has been saved. This event can be used to retrieve the ID of the saved variant.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code> itself
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.attachAfterVariantSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>beforeRebindChart</code> event of this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code> itself.
 * 
 * Event fired just before the binding is being done.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code> itself
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.attachBeforeRebindChart = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>initialise</code> event of this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code> itself.
 * 
 * Event fired once the control has been initialised.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code> itself
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>showOverlay</code> event of this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code> itself.
 * 
 * Event fired just before the overlay is being shown.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code> itself
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.attachShowOverlay = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterVariantApply</code> event of this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.detachAfterVariantApply = function(fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterVariantInitialise</code> event of this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.detachAfterVariantInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterVariantSave</code> event of this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.detachAfterVariantSave = function(fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>beforeRebindChart</code> event of this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.detachBeforeRebindChart = function(fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>initialise</code> event of this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>showOverlay</code> event of this <code>sap.ui.comp.smartmicrochart.SmartAreaMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.detachShowOverlay = function(fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartmicrochart.SmartAreaMicroChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.AreaMicroChart.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>afterVariantApply</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.fireAfterVariantApply = function(mArguments) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Fires event <code>afterVariantInitialise</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.fireAfterVariantInitialise = function(mArguments) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Fires event <code>afterVariantSave</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.fireAfterVariantSave = function(mArguments) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Fires event <code>beforeRebindChart</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.fireBeforeRebindChart = function(mArguments) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Fires event <code>initialise</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.fireInitialise = function(mArguments) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Fires event <code>showOverlay</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.fireShowOverlay = function(mArguments) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Gets current value of property <code>chartBindingPath</code>.
 * 
 * This attribute can be used to specify the path that is used during the binding of the chart. If not
 * specified, the entitySet attribute is used instead. (used only if binding is established
 * internally/automatically - See enableAutoBinding)
 * @returns {string} Value of property <code>chartBindingPath</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.getChartBindingPath = function() { return ""; };

/**
 * Gets current value of property <code>chartType</code>.
 * 
 * Specifies the type of Chart to be created in the SmartAreaMicroChart control.
 * @returns {string} Value of property <code>chartType</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.getChartType = function() { return ""; };

/**
 * Gets current value of property <code>currentVariantId</code>.
 * 
 * Retrieves or sets the current variant.
 * @returns {string} Value of property <code>currentVariantId</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.getCurrentVariantId = function() { return ""; };

/**
 * Gets current value of property <code>enableAutoBinding</code>.
 * 
 * When set to true, this enables automatic binding of the chart using the chartBindingPath (if it exists) or
 * entitySet property. This happens just after the <code>initialise</code> event has been fired.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableAutoBinding</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.getEnableAutoBinding = function() { return false; };

/**
 * Gets current value of property <code>entitySet</code>.
 * 
 * The entity set name from which to fetch data and generate the columns. Note that this is not a dynamic UI5
 * property
 * @returns {string} Value of property <code>entitySet</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.getEntitySet = function() { return ""; };

/**
 * Gets current value of property <code>ignoredFields</code>.
 * 
 * CSV of fields that must be ignored in the OData metadata by the SmartAreaMicroChart control.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * @returns {string} Value of property <code>ignoredFields</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.getIgnoredFields = function() { return ""; };

/**
 * Gets current value of property <code>ignoreFromPersonalisation</code>.
 * 
 * CSV of fields that is not shown in the personalization dialog.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * @returns {string} Value of property <code>ignoreFromPersonalisation</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.getIgnoreFromPersonalisation = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smartmicrochart.SmartAreaMicroChart.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>persistencyKey</code>.
 * 
 * Key used to access personalization data.
 * @returns {string} Value of property <code>persistencyKey</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.getPersistencyKey = function() { return ""; };

/**
 * Gets current value of property <code>smartFilterId</code>.
 * 
 * ID of the corresponding SmartFilter control; When specified, the SmartAreaMicroChart searches for the
 * SmartFilter (also in the closest parent View) and attaches to the relevant events of the SmartFilter; to
 * fetch data, show overlay etc.
 * @returns {string} Value of property <code>smartFilterId</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.getSmartFilterId = function() { return ""; };

/**
 * Gets current value of property <code>useChartPersonalisation</code>.
 * 
 * The useChartPersonalisation attribute can be set to true or false depending on whether you want to define
 * personalized chart settings. If you want to persist the chart personalization, you need to specify the
 * persistencyKey property.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>useChartPersonalisation</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.getUseChartPersonalisation = function() { return false; };

/**
 * Gets current value of property <code>useVariantManagement</code>.
 * 
 * The useVariantManagement attribute can be set to true or false depending on whether you want to use variants.
 * As a prerequisite you need to specify the persistencyKey property.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>useVariantManagement</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.getUseVariantManagement = function() { return false; };

/**
 * Sets a new value for property <code>chartBindingPath</code>.
 * 
 * This attribute can be used to specify the path that is used during the binding of the chart. If not
 * specified, the entitySet attribute is used instead. (used only if binding is established
 * internally/automatically - See enableAutoBinding)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sChartBindingPath New value for property <code>chartBindingPath</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.setChartBindingPath = function(sChartBindingPath) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Sets a new value for property <code>chartType</code>.
 * 
 * Specifies the type of Chart to be created in the SmartAreaMicroChart control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sChartType New value for property <code>chartType</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.setChartType = function(sChartType) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Sets a new value for property <code>currentVariantId</code>.
 * 
 * Retrieves or sets the current variant.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sCurrentVariantId New value for property <code>currentVariantId</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.setCurrentVariantId = function(sCurrentVariantId) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Sets a new value for property <code>enableAutoBinding</code>.
 * 
 * When set to true, this enables automatic binding of the chart using the chartBindingPath (if it exists) or
 * entitySet property. This happens just after the <code>initialise</code> event has been fired.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableAutoBinding New value for property <code>enableAutoBinding</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.setEnableAutoBinding = function(bEnableAutoBinding) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * The entity set name from OData metadata, with which the chart should be bound to
 * @param {string}
 *          sEntitySetName The entity set
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.setEntitySet = function(sEntitySetName) {  };

/**
 * Sets a new value for property <code>ignoredFields</code>.
 * 
 * CSV of fields that must be ignored in the OData metadata by the SmartAreaMicroChart control.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sIgnoredFields New value for property <code>ignoredFields</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.setIgnoredFields = function(sIgnoredFields) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Sets a new value for property <code>ignoreFromPersonalisation</code>.
 * 
 * CSV of fields that is not shown in the personalization dialog.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sIgnoreFromPersonalisation New value for property <code>ignoreFromPersonalisation</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.setIgnoreFromPersonalisation = function(sIgnoreFromPersonalisation) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Sets a new value for property <code>persistencyKey</code>.
 * 
 * Key used to access personalization data.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sPersistencyKey New value for property <code>persistencyKey</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.setPersistencyKey = function(sPersistencyKey) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Sets a new value for property <code>smartFilterId</code>.
 * 
 * ID of the corresponding SmartFilter control; When specified, the SmartAreaMicroChart searches for the
 * SmartFilter (also in the closest parent View) and attaches to the relevant events of the SmartFilter; to
 * fetch data, show overlay etc.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sSmartFilterId New value for property <code>smartFilterId</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.setSmartFilterId = function(sSmartFilterId) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Sets a new value for property <code>useChartPersonalisation</code>.
 * 
 * The useChartPersonalisation attribute can be set to true or false depending on whether you want to define
 * personalized chart settings. If you want to persist the chart personalization, you need to specify the
 * persistencyKey property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseChartPersonalisation New value for property <code>useChartPersonalisation</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.setUseChartPersonalisation = function(bUseChartPersonalisation) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };

/**
 * Sets a new value for property <code>useVariantManagement</code>.
 * 
 * The useVariantManagement attribute can be set to true or false depending on whether you want to use variants.
 * As a prerequisite you need to specify the persistencyKey property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseVariantManagement New value for property <code>useVariantManagement</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartAreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartAreaMicroChart.prototype.setUseVariantManagement = function(bUseVariantManagement) { return new sap.ui.comp.smartmicrochart.SmartAreaMicroChart(); };


// ---- sap.ui.comp.smartmicrochart.SmartBulletMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.comp.smartmicrochart/SmartBulletMicroChart.
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
 * <li>{@link #getEntitySet entitySet} : string</li>
 * <li>{@link #getSmartFilterId smartFilterId} : string</li>
 * <li>{@link #getIgnoredFields ignoredFields} : string</li>
 * <li>{@link #getIgnoreFromPersonalisation ignoreFromPersonalisation} : string</li>
 * <li>{@link #getChartType chartType} : string</li>
 * <li>{@link #getUseVariantManagement useVariantManagement} : boolean (default: true)</li>
 * <li>{@link #getUseChartPersonalisation useChartPersonalisation} : boolean (default: true)</li>
 * <li>{@link #getPersistencyKey persistencyKey} : string</li>
 * <li>{@link #getCurrentVariantId currentVariantId} : string</li>
 * <li>{@link #getEnableAutoBinding enableAutoBinding} : boolean (default: false)</li>
 * <li>{@link #getChartBindingPath chartBindingPath} : string</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beforeRebindChart beforeRebindChart} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantInitialise afterVariantInitialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantSave afterVariantSave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantApply afterVariantApply} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:showOverlay showOverlay} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.suite.ui.microchart.BulletMicroChart#constructor sap.suite.ui.microchart.BulletMicroChart}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The SmartBulletMicroChart control creates a BulletMicroChart based on OData metadata
 * 				and the configuration specified. The entitySet attribute must be specified to use the control.
 * 				This attribute is used to fetch fields from OData metadata, from which Micro Bullet Chart UI
 * 				will be generated; it can also be used to fetch the actual chart data.<br>
 * 				<b><i>Note:</i></b><br>
 * 				Most of the attributes/properties are not dynamic and cannot be changed once the control has been
 * 				initialized.
 * @extends sap.suite.ui.microchart.BulletMicroChart
 * @version 1.36.12
 * @experimental Since 1.34.0 This is currently under development. The API could be changed at any point in time.
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart = function(sId,mSettings) {};
/**
 * Event fired after a variant has been applied.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.afterVariantApply = function(oControlEvent) {  };

/**
 * Event fired after variant management in the SmartBulletMicroChart has been initialised.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.afterVariantInitialise = function(oControlEvent) {  };

/**
 * Event fired after a variant has been saved. This event can be used to retrieve the ID of the saved variant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.afterVariantSave = function(oControlEvent) {  };

/**
 * Event fired just before the binding is being done.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.beforeRebindChart = function(oControlEvent) {  };

/**
 * Event fired once the control has been initialised.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.initialise = function(oControlEvent) {  };

/**
 * Event fired just before the overlay is being shown.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.showOverlay = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterVariantApply</code> event of this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code> itself.
 * 
 * Event fired after a variant has been applied.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code> itself
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.attachAfterVariantApply = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterVariantInitialise</code> event of this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code> itself.
 * 
 * Event fired after variant management in the SmartBulletMicroChart has been initialised.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code> itself
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.attachAfterVariantInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterVariantSave</code> event of this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code> itself.
 * 
 * Event fired after a variant has been saved. This event can be used to retrieve the ID of the saved variant.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code> itself
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.attachAfterVariantSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>beforeRebindChart</code> event of this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code> itself.
 * 
 * Event fired just before the binding is being done.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code> itself
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.attachBeforeRebindChart = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>initialise</code> event of this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code> itself.
 * 
 * Event fired once the control has been initialised.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code> itself
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>showOverlay</code> event of this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code> itself.
 * 
 * Event fired just before the overlay is being shown.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code> itself
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.attachShowOverlay = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterVariantApply</code> event of this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.detachAfterVariantApply = function(fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterVariantInitialise</code> event of this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.detachAfterVariantInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterVariantSave</code> event of this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.detachAfterVariantSave = function(fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>beforeRebindChart</code> event of this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.detachBeforeRebindChart = function(fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>initialise</code> event of this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>showOverlay</code> event of this <code>sap.ui.comp.smartmicrochart.SmartBulletMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.detachShowOverlay = function(fnFunction,oListener) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Creates a new subclass of class sap.ui.comp.smartmicrochart.SmartBulletMicroChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.BulletMicroChart.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>afterVariantApply</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.fireAfterVariantApply = function(mArguments) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Fires event <code>afterVariantInitialise</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.fireAfterVariantInitialise = function(mArguments) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Fires event <code>afterVariantSave</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.fireAfterVariantSave = function(mArguments) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Fires event <code>beforeRebindChart</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.fireBeforeRebindChart = function(mArguments) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Fires event <code>initialise</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.fireInitialise = function(mArguments) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Fires event <code>showOverlay</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.fireShowOverlay = function(mArguments) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Gets current value of property <code>chartBindingPath</code>.
 * 
 * This attribute can be used to specify the path that is used during the binding of the chart. If not specified, the entitySet
 * attribute is used instead. (used only if binding is established internally/automatically - See enableAutoBinding)
 * @returns {string} Value of property <code>chartBindingPath</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.getChartBindingPath = function() { return ""; };

/**
 * Gets current value of property <code>chartType</code>.
 * 
 * Specifies the type of Chart to be created in the SmartBulletMicroChart control.
 * @returns {string} Value of property <code>chartType</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.getChartType = function() { return ""; };

/**
 * Gets current value of property <code>currentVariantId</code>.
 * 
 * Retrieves or sets the current variant.
 * @returns {string} Value of property <code>currentVariantId</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.getCurrentVariantId = function() { return ""; };

/**
 * Gets current value of property <code>enableAutoBinding</code>.
 * 
 * When set to true, this enables automatic binding of the chart using the chartBindingPath (if it exists) or entitySet property. This
 * happens just after the <code>initialise</code> event has been fired.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableAutoBinding</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.getEnableAutoBinding = function() { return false; };

/**
 * Gets current value of property <code>entitySet</code>.
 * 
 * The entity set name from which to fetch data and generate the columns. Note that this is not a dynamic UI5 property
 * @returns {string} Value of property <code>entitySet</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.getEntitySet = function() { return ""; };

/**
 * Gets current value of property <code>ignoredFields</code>.
 * 
 * CSV of fields that must be ignored in the OData metadata by the SmartBulletMicroChart control.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * @returns {string} Value of property <code>ignoredFields</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.getIgnoredFields = function() { return ""; };

/**
 * Gets current value of property <code>ignoreFromPersonalisation</code>.
 * 
 * CSV of fields that is not shown in the personalization dialog.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * @returns {string} Value of property <code>ignoreFromPersonalisation</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.getIgnoreFromPersonalisation = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smartmicrochart.SmartBulletMicroChart.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>persistencyKey</code>.
 * 
 * Key used to access personalization data.
 * @returns {string} Value of property <code>persistencyKey</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.getPersistencyKey = function() { return ""; };

/**
 * Gets current value of property <code>smartFilterId</code>.
 * 
 * ID of the corresponding SmartFilter control; When specified, the SmartBulletMicroChart searches for the SmartFilter (also in the closest
 * parent View) and attaches to the relevant events of the SmartFilter; to fetch data, show overlay etc.
 * @returns {string} Value of property <code>smartFilterId</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.getSmartFilterId = function() { return ""; };

/**
 * Gets current value of property <code>useChartPersonalisation</code>.
 * 
 * The useChartPersonalisation attribute can be set to true or false depending on whether you want to define personalized chart
 * settings. If you want to persist the chart personalization, you need to specify the persistencyKey property.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>useChartPersonalisation</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.getUseChartPersonalisation = function() { return false; };

/**
 * Gets current value of property <code>useVariantManagement</code>.
 * 
 * The useVariantManagement attribute can be set to true or false depending on whether you want to use variants. As a prerequisite you
 * need to specify the persistencyKey property.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>useVariantManagement</code>
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.getUseVariantManagement = function() { return false; };

/**
 * Sets a new value for property <code>chartBindingPath</code>.
 * 
 * This attribute can be used to specify the path that is used during the binding of the chart. If not specified, the entitySet
 * attribute is used instead. (used only if binding is established internally/automatically - See enableAutoBinding)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sChartBindingPath New value for property <code>chartBindingPath</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.setChartBindingPath = function(sChartBindingPath) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Sets a new value for property <code>chartType</code>.
 * 
 * Specifies the type of Chart to be created in the SmartBulletMicroChart control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sChartType New value for property <code>chartType</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.setChartType = function(sChartType) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Sets a new value for property <code>currentVariantId</code>.
 * 
 * Retrieves or sets the current variant.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sCurrentVariantId New value for property <code>currentVariantId</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.setCurrentVariantId = function(sCurrentVariantId) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Sets a new value for property <code>enableAutoBinding</code>.
 * 
 * When set to true, this enables automatic binding of the chart using the chartBindingPath (if it exists) or entitySet property. This
 * happens just after the <code>initialise</code> event has been fired.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableAutoBinding New value for property <code>enableAutoBinding</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.setEnableAutoBinding = function(bEnableAutoBinding) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * The entity set name from OData metadata, with which the chart should be bound to
 * @param {string} sEntitySetName The entity set
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.setEntitySet = function(sEntitySetName) {  };

/**
 * Sets a new value for property <code>ignoredFields</code>.
 * 
 * CSV of fields that must be ignored in the OData metadata by the SmartBulletMicroChart control.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sIgnoredFields New value for property <code>ignoredFields</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.setIgnoredFields = function(sIgnoredFields) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Sets a new value for property <code>ignoreFromPersonalisation</code>.
 * 
 * CSV of fields that is not shown in the personalization dialog.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sIgnoreFromPersonalisation New value for property <code>ignoreFromPersonalisation</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.setIgnoreFromPersonalisation = function(sIgnoreFromPersonalisation) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Sets a new value for property <code>persistencyKey</code>.
 * 
 * Key used to access personalization data.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sPersistencyKey New value for property <code>persistencyKey</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.setPersistencyKey = function(sPersistencyKey) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Sets a new value for property <code>smartFilterId</code>.
 * 
 * ID of the corresponding SmartFilter control; When specified, the SmartBulletMicroChart searches for the SmartFilter (also in the closest
 * parent View) and attaches to the relevant events of the SmartFilter; to fetch data, show overlay etc.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sSmartFilterId New value for property <code>smartFilterId</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.setSmartFilterId = function(sSmartFilterId) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Sets a new value for property <code>useChartPersonalisation</code>.
 * 
 * The useChartPersonalisation attribute can be set to true or false depending on whether you want to define personalized chart
 * settings. If you want to persist the chart personalization, you need to specify the persistencyKey property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseChartPersonalisation New value for property <code>useChartPersonalisation</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.setUseChartPersonalisation = function(bUseChartPersonalisation) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };

/**
 * Sets a new value for property <code>useVariantManagement</code>.
 * 
 * The useVariantManagement attribute can be set to true or false depending on whether you want to use variants. As a prerequisite you
 * need to specify the persistencyKey property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseVariantManagement New value for property <code>useVariantManagement</code>
 * @returns {sap.ui.comp.smartmicrochart.SmartBulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartmicrochart.SmartBulletMicroChart.prototype.setUseVariantManagement = function(bUseVariantManagement) { return new sap.ui.comp.smartmicrochart.SmartBulletMicroChart(); };


// ---- sap.ui.comp.smarttable.SmartTable --------------------------------------------------------------------------

/**
 * Constructor for a new smarttable/SmartTable.
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
 * <li>{@link #getEntitySet entitySet} : string</li>
 * <li>{@link #getSmartFilterId smartFilterId} : string</li>
 * <li>{@link #getIgnoredFields ignoredFields} : string</li>
 * <li>{@link #getInitiallyVisibleFields initiallyVisibleFields} : string</li>
 * <li>{@link #getRequestAtLeastFields requestAtLeastFields} : string</li>
 * <li>{@link #getIgnoreFromPersonalisation ignoreFromPersonalisation} : string</li>
 * <li>{@link #getTableType tableType} : sap.ui.comp.smarttable.TableType</li>
 * <li>{@link #getUseVariantManagement useVariantManagement} : boolean (default: true)</li>
 * <li>{@link #getUseExportToExcel useExportToExcel} : boolean (default: true)</li>
 * <li>{@link #getUseTablePersonalisation useTablePersonalisation} : boolean (default: true)</li>
 * <li>{@link #getShowRowCount showRowCount} : boolean (default: true)</li>
 * <li>{@link #getHeader header} : string</li>
 * <li>{@link #getToolbarStyleClass toolbarStyleClass} : string</li>
 * <li>{@link #getEnableCustomFilter enableCustomFilter} : boolean (default: true)</li>
 * <li>{@link #getPersistencyKey persistencyKey} : string</li>
 * <li>{@link #getUseOnlyOneSolidToolbar useOnlyOneSolidToolbar} : boolean (default: false)</li>
 * <li>{@link #getCurrentVariantId currentVariantId} : string</li>
 * <li>{@link #getEditable editable} : boolean (default: false)</li>
 * <li>{@link #getEnableAutoBinding enableAutoBinding} : boolean (default: false)</li>
 * <li>{@link #getTableBindingPath tableBindingPath} : string</li>
 * <li>{@link #getEditTogglable editTogglable} : boolean (default: false)</li>
 * <li>{@link #getDemandPopin demandPopin} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getCustomToolbar customToolbar} : sap.m.Toolbar</li>
 * <li>{@link #getSemanticObjectController semanticObjectController} : sap.ui.comp.navpopover.SemanticObjectController</li>
 * <li>{@link #getNoData noData} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:beforeRebindTable beforeRebindTable} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:editToggled editToggled} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:dataReceived dataReceived} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantInitialise afterVariantInitialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantSave afterVariantSave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterVariantApply afterVariantApply} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:showOverlay showOverlay} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:fieldChange fieldChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.VBox#constructor sap.m.VBox}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The SmartTable control creates a table based on OData metadata and the configuration specified. The entitySet attribute must be
 *        specified to use the control. This attribute is used to fetch fields from OData metadata, from which columns will be generated; it can
 *        also be used to fetch the actual table data.<br>
 *        Based on the tableType property, this control will render a standard, analytical, or responsive table.<br>
 *        <b><i>Note:</i></b><br>
 *        Most of the attributes/properties are not dynamic and cannot be changed once the control has been initialized.
 * @extends sap.m.VBox
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smarttable.SmartTable = function(sId,mSettings) {};
/**
 * Event fired after a variant has been applied.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.afterVariantApply = function(oControlEvent) {  };

/**
 * Event fired after variant management in the SmartTable has been initialized.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.afterVariantInitialise = function(oControlEvent) {  };

/**
 * Event fired after a variant has been saved. This event can be used to retrieve the ID of the saved variant.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.afterVariantSave = function(oControlEvent) {  };

/**
 * Event fired just before the binding is being done.
 * @event
 * @since 1.26.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.beforeRebindTable = function(oControlEvent) {  };

/**
 * Event fired when data is received after binding. The event is fired if the binding for the table is done by the SmartTable itself.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.dataReceived = function(oControlEvent) {  };

/**
 * Event fired when display/edit button is clicked.
 * @event
 * @since 1.28.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.editToggled = function(oControlEvent) {  };

/**
 * Event fired when an editable field, created internally by the SmartTable control, is changed.
 * @event
 * @since 1.34.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fieldChange = function(oControlEvent) {  };

/**
 * Event fired once the control has been initialized.
 * @event
 * @since 1.26.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.initialise = function(oControlEvent) {  };

/**
 * Event fired just before the overlay is being shown.
 * @event
 * @since 1.32.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.showOverlay = function(oControlEvent) {  };

/**
 * Interface function for SmartVariantManagment control, sets the current variant
 * @param {Object} oVariantJSON - the variants json
 * @param {string} sContext - describes the context in which the apply was executed
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.applyVariant = function(oVariantJSON,sContext) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterVariantApply</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smarttable.SmartTable</code> itself.
 * 
 * Event fired after a variant has been applied.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code> itself
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachAfterVariantApply = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterVariantInitialise</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smarttable.SmartTable</code> itself.
 * 
 * Event fired after variant management in the SmartTable has been initialized.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code> itself
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachAfterVariantInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterVariantSave</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smarttable.SmartTable</code> itself.
 * 
 * Event fired after a variant has been saved. This event can be used to retrieve the ID of the saved variant.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code> itself
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachAfterVariantSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>beforeRebindTable</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smarttable.SmartTable</code> itself.
 * 
 * Event fired just before the binding is being done.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code> itself
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.26.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachBeforeRebindTable = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>dataReceived</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smarttable.SmartTable</code> itself.
 * 
 * Event fired when data is received after binding. The event is fired if the binding for the table is done by the SmartTable itself.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code> itself
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachDataReceived = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>editToggled</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smarttable.SmartTable</code> itself.
 * 
 * Event fired when display/edit button is clicked.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code> itself
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachEditToggled = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>fieldChange</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smarttable.SmartTable</code> itself.
 * 
 * Event fired when an editable field, created internally by the SmartTable control, is changed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code> itself
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.34.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachFieldChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>initialise</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smarttable.SmartTable</code> itself.
 * 
 * Event fired once the control has been initialized.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code> itself
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.26.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>showOverlay</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smarttable.SmartTable</code> itself.
 * 
 * Event fired just before the overlay is being shown.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smarttable.SmartTable</code> itself
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.32.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.attachShowOverlay = function(oData,fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Destroys the customToolbar in the aggregation <code>customToolbar</code>.
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.destroyCustomToolbar = function() { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Destroys the noData in the aggregation <code>noData</code>.
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.destroyNoData = function() { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Destroys the semanticObjectController in the aggregation <code>semanticObjectController</code>.
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.destroySemanticObjectController = function() { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterVariantApply</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachAfterVariantApply = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterVariantInitialise</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachAfterVariantInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterVariantSave</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachAfterVariantSave = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>beforeRebindTable</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachBeforeRebindTable = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>dataReceived</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachDataReceived = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>editToggled</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachEditToggled = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>fieldChange</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachFieldChange = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>initialise</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>showOverlay</code> event of this <code>sap.ui.comp.smarttable.SmartTable</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.detachShowOverlay = function(fnFunction,oListener) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Cleans up the control
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.exit = function() {  };

/**
 * Creates a new subclass of class sap.ui.comp.smarttable.SmartTable with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.VBox.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smarttable.SmartTable.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Interface function for SmartVariantManagment control, returns the current used variant data
 * @public
 * @returns {json} The currently set variant
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fetchVariant = function() { return null; };

/**
 * Fires event <code>afterVariantApply</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireAfterVariantApply = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Fires event <code>afterVariantInitialise</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireAfterVariantInitialise = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Fires event <code>afterVariantSave</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireAfterVariantSave = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Fires event <code>beforeRebindTable</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.26.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireBeforeRebindTable = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Fires event <code>dataReceived</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireDataReceived = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Fires event <code>editToggled</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.28.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireEditToggled = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Fires event <code>fieldChange</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.34.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireFieldChange = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Fires event <code>initialise</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.26.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireInitialise = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Fires event <code>showOverlay</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.32.0
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.fireShowOverlay = function(mArguments) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * returns the id of the currently selected variant.
 * @public
 * @returns {string} id of the currently selected variant
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getCurrentVariantId = function() { return ""; };

/**
 * Gets content of aggregation <code>customToolbar</code>.
 * 
 * A toolbar that can be added by the user to define their own custom buttons, icons, etc. If this is specified, the SmartTable
 * control does not create an additional toolbar, but makes use of this one.
 * @returns {sap.m.Toolbar}
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getCustomToolbar = function() { return new sap.m.Toolbar(); };

/**
 * Gets current value of property <code>demandPopin</code>.
 * 
 * The demandPopin attribute can be set to true or false depending on whether you want to display columns as popins on the responsive
 * table
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>demandPopin</code>
 * @since 1.30.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getDemandPopin = function() { return false; };

/**
 * Gets current value of property <code>editable</code>.
 * 
 * This attribute can be used to specify if the controls created by the SmartTable control are editable.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>editable</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getEditable = function() { return false; };

/**
 * Gets current value of property <code>editTogglable</code>.
 * 
 * Specifies whether the editable property can be toggled via a button on the toolbar. (The automatic toggle of controls works only
 * for the SmartField scenario)
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>editTogglable</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getEditTogglable = function() { return false; };

/**
 * Gets current value of property <code>enableAutoBinding</code>.
 * 
 * When set to true, this enables automatic binding of the table using the tableBindingPath (if it exists) or entitySet property. This
 * happens just after the <code>initialise</code> event has been fired.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>enableAutoBinding</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getEnableAutoBinding = function() { return false; };

/**
 * Gets current value of property <code>enableCustomFilter</code>.
 * 
 * Can be used to override the filter behavior. If set to true (default), instead of the filter input box a button is rendered. When
 * pressing this button, the SmartTable control opens the filter panel directly in the table personalization dialog.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enableCustomFilter</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getEnableCustomFilter = function() { return false; };

/**
 * Gets current value of property <code>entitySet</code>.
 * 
 * The entity set name from which to fetch data and generate the columns. Note that this is not a dynamic UI5 property
 * @returns {string} Value of property <code>entitySet</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getEntitySet = function() { return ""; };

/**
 * Gets current value of property <code>header</code>.
 * 
 * Specifies header text that is shown in table
 * @returns {string} Value of property <code>header</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getHeader = function() { return ""; };

/**
 * Gets current value of property <code>ignoredFields</code>.
 * 
 * CSV of fields that must be ignored in the OData metadata by the SmartTable control.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * @returns {string} Value of property <code>ignoredFields</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getIgnoredFields = function() { return ""; };

/**
 * Gets current value of property <code>ignoreFromPersonalisation</code>.
 * 
 * CSV of fields that is not shown in the personalization dialog.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * @returns {string} Value of property <code>ignoreFromPersonalisation</code>
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getIgnoreFromPersonalisation = function() { return ""; };

/**
 * Gets current value of property <code>initiallyVisibleFields</code>.
 * 
 * CSV of fields that must be shown initially in the SmartTable as visible columns and in the order specified.<br>
 * This property is mainly meant to be used when no LineItem annotation exists.<br>
 * If you have fields in the XMLView they are always shown first; then, the columns are added based on the LineItem annotation and
 * finally based on this property.<br>
 * <i>Note:</i><br>
 * If both this property and the LineItem annotation exist, the order of fields cannot be guaranteed to be as mentioned here.<br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * @returns {string} Value of property <code>initiallyVisibleFields</code>
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getInitiallyVisibleFields = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smarttable.SmartTable.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smarttable.SmartTable.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>noData</code>.
 * 
 * The value for the noData aggregation can be either a string value or a control instance.<br>
 * The control is shown, in case there is no data for the Table available. In case of a string value this will simply replace the no
 * data text.<br>
 * Currently the Responsive Table only supports string values.
 * @returns {sap.ui.core.Control}
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getNoData = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property <code>persistencyKey</code>.
 * 
 * Key used to access personalization data.
 * @returns {string} Value of property <code>persistencyKey</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getPersistencyKey = function() { return ""; };

/**
 * Gets current value of property <code>requestAtLeastFields</code>.
 * 
 * CSV of fields that must be always requested from the backend<br>
 * This property is mainly meant to be used when there is no PresentationVariant annotation.<br>
 * If both this property and the PresentationVariant annotation exist, the select request sent to the backend would be a combination
 * of both.<br>
 * <i>Note:</i><br>
 * This property has no effect when AnalyticalTable is used.<br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * @returns {string} Value of property <code>requestAtLeastFields</code>
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getRequestAtLeastFields = function() { return ""; };

/**
 * Gets content of aggregation <code>semanticObjectController</code>.
 * 
 * The Semantic Object Controller allows the user to specify and overwrite functionality for semantic object navigation.
 * @returns {sap.ui.comp.navpopover.SemanticObjectController}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getSemanticObjectController = function() { return new sap.ui.comp.navpopover.SemanticObjectController(); };

/**
 * Gets current value of property <code>showRowCount</code>.
 * 
 * If the showRowCount attribute is set to true number of rows is shown along with the header text.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showRowCount</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getShowRowCount = function() { return false; };

/**
 * Gets current value of property <code>smartFilterId</code>.
 * 
 * ID of the corresponding SmartFilter control; When specified, the SmartTable searches for the SmartFilter (also in the closest
 * parent View) and attaches to the relevant events of the SmartFilter; to fetch data, show overlay etc.
 * @returns {string} Value of property <code>smartFilterId</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getSmartFilterId = function() { return ""; };

/**
 * returns the internally used table object
 * @public
 * @returns {object} the table
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getTable = function() { return new Object(); };

/**
 * Gets current value of property <code>tableBindingPath</code>.
 * 
 * This attribute can be used to specify the path that is used during the binding of the table. If not specified, the entitySet
 * attribute is used instead. (used only if binding is established internally/automatically - See enableAutoBinding)
 * @returns {string} Value of property <code>tableBindingPath</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getTableBindingPath = function() { return ""; };

/**
 * Gets current value of property <code>tableType</code>.
 * 
 * Specifies the type of table to be created in the SmartTable control.<br>
 * <i>Note:</i><br>
 * If you add a table to the content of the SmartTable in the view, this property has no effect.
 * @returns {sap.ui.comp.smarttable.TableType} Value of property <code>tableType</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getTableType = function() { return new sap.ui.comp.smarttable.TableType(); };

/**
 * Gets current value of property <code>toolbarStyleClass</code>.
 * 
 * A style class which is defined for the toolbar of the table.
 * @returns {string} Value of property <code>toolbarStyleClass</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getToolbarStyleClass = function() { return ""; };

/**
 * Gets current value of property <code>useExportToExcel</code>.
 * 
 * Can be set to true or false depending on whether you want to export data to MS Excel®.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>useExportToExcel</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getUseExportToExcel = function() { return false; };

/**
 * Gets current value of property <code>useOnlyOneSolidToolbar</code>.
 * 
 * If set to true, the standard toolbar and custom toolbar will be merged into one toolbar. The combined toolbar will have a solid
 * style.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>useOnlyOneSolidToolbar</code>
 * @since 1.26.0
 * @deprecated Since 1.29. This property has no effect
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getUseOnlyOneSolidToolbar = function() { return false; };

/**
 * Gets current value of property <code>useTablePersonalisation</code>.
 * 
 * The useTablePersonalisation attribute can be set to true or false depending on whether you want to define personalized table
 * settings. If you want to persist the table personalization, you need to specify the persistencyKey property.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>useTablePersonalisation</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getUseTablePersonalisation = function() { return false; };

/**
 * Gets current value of property <code>useVariantManagement</code>.
 * 
 * The useVariantManagement attribute can be set to true or false depending on whether you want to use variants. As a prerequisite you
 * need to specify the persistencyKey property.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>useVariantManagement</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.getUseVariantManagement = function() { return false; };

/**
 * This can be used to trigger binding on the table used in the SmartTable
 * @param {boolean} bForceRebind - force bind call to be triggered on the inner table
 * @protected
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.rebindTable = function(bForceRebind) {  };

/**
 * Set the current variant according to the sVariantId. In case an empty string or null or undefined was passed the STANDARD will be set. STANDARD
 * will also be set, in case the passed sVariantId could not be found. In case neither a flexibility variant, nor the content for the standard
 * variant could not be obtained, nor the personalisable control obtained nothing will be executed/changed
 * @public
 * @param {string} sVariantId id of the currently selected variant
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setCurrentVariantId = function(sVariantId) {  };

/**
 * Sets the aggregated <code>customToolbar</code>.
 * @param {sap.m.Toolbar} oCustomToolbar The customToolbar to set
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setCustomToolbar = function(oCustomToolbar) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>demandPopin</code>.
 * 
 * The demandPopin attribute can be set to true or false depending on whether you want to display columns as popins on the responsive
 * table
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bDemandPopin New value for property <code>demandPopin</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.30.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setDemandPopin = function(bDemandPopin) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>editable</code>.
 * 
 * This attribute can be used to specify if the controls created by the SmartTable control are editable.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEditable New value for property <code>editable</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setEditable = function(bEditable) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>editTogglable</code>.
 * 
 * Specifies whether the editable property can be toggled via a button on the toolbar. (The automatic toggle of controls works only
 * for the SmartField scenario)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEditTogglable New value for property <code>editTogglable</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setEditTogglable = function(bEditTogglable) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>enableAutoBinding</code>.
 * 
 * When set to true, this enables automatic binding of the table using the tableBindingPath (if it exists) or entitySet property. This
 * happens just after the <code>initialise</code> event has been fired.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEnableAutoBinding New value for property <code>enableAutoBinding</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setEnableAutoBinding = function(bEnableAutoBinding) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>enableCustomFilter</code>.
 * 
 * Can be used to override the filter behavior. If set to true (default), instead of the filter input box a button is rendered. When
 * pressing this button, the SmartTable control opens the filter panel directly in the table personalization dialog.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnableCustomFilter New value for property <code>enableCustomFilter</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setEnableCustomFilter = function(bEnableCustomFilter) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * The entity set name from OData metadata, with which the table should be bound to
 * @param {string} sEntitySetName The entity set
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setEntitySet = function(sEntitySetName) {  };

/**
 * Sets a new value for property <code>header</code>.
 * 
 * Specifies header text that is shown in table
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sHeader New value for property <code>header</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setHeader = function(sHeader) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>ignoredFields</code>.
 * 
 * CSV of fields that must be ignored in the OData metadata by the SmartTable control.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sIgnoredFields New value for property <code>ignoredFields</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setIgnoredFields = function(sIgnoredFields) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>ignoreFromPersonalisation</code>.
 * 
 * CSV of fields that is not shown in the personalization dialog.<br>
 * <i>Note:</i><br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sIgnoreFromPersonalisation New value for property <code>ignoreFromPersonalisation</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setIgnoreFromPersonalisation = function(sIgnoreFromPersonalisation) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>initiallyVisibleFields</code>.
 * 
 * CSV of fields that must be shown initially in the SmartTable as visible columns and in the order specified.<br>
 * This property is mainly meant to be used when no LineItem annotation exists.<br>
 * If you have fields in the XMLView they are always shown first; then, the columns are added based on the LineItem annotation and
 * finally based on this property.<br>
 * <i>Note:</i><br>
 * If both this property and the LineItem annotation exist, the order of fields cannot be guaranteed to be as mentioned here.<br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sInitiallyVisibleFields New value for property <code>initiallyVisibleFields</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setInitiallyVisibleFields = function(sInitiallyVisibleFields) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets the aggregated <code>noData</code>.
 * @param {sap.ui.core.Control} oNoData The noData to set
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setNoData = function(oNoData) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>persistencyKey</code>.
 * 
 * Key used to access personalization data.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sPersistencyKey New value for property <code>persistencyKey</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setPersistencyKey = function(sPersistencyKey) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>requestAtLeastFields</code>.
 * 
 * CSV of fields that must be always requested from the backend<br>
 * This property is mainly meant to be used when there is no PresentationVariant annotation.<br>
 * If both this property and the PresentationVariant annotation exist, the select request sent to the backend would be a combination
 * of both.<br>
 * <i>Note:</i><br>
 * This property has no effect when AnalyticalTable is used.<br>
 * No validation is done. Please ensure that you do not add spaces or special characters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sRequestAtLeastFields New value for property <code>requestAtLeastFields</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setRequestAtLeastFields = function(sRequestAtLeastFields) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets the aggregated <code>semanticObjectController</code>.
 * @param {sap.ui.comp.navpopover.SemanticObjectController} oSemanticObjectController The semanticObjectController to set
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setSemanticObjectController = function(oSemanticObjectController) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>showRowCount</code>.
 * 
 * If the showRowCount attribute is set to true number of rows is shown along with the header text.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowRowCount New value for property <code>showRowCount</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setShowRowCount = function(bShowRowCount) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>smartFilterId</code>.
 * 
 * ID of the corresponding SmartFilter control; When specified, the SmartTable searches for the SmartFilter (also in the closest
 * parent View) and attaches to the relevant events of the SmartFilter; to fetch data, show overlay etc.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sSmartFilterId New value for property <code>smartFilterId</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setSmartFilterId = function(sSmartFilterId) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>tableBindingPath</code>.
 * 
 * This attribute can be used to specify the path that is used during the binding of the table. If not specified, the entitySet
 * attribute is used instead. (used only if binding is established internally/automatically - See enableAutoBinding)
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTableBindingPath New value for property <code>tableBindingPath</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setTableBindingPath = function(sTableBindingPath) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>tableType</code>.
 * 
 * Specifies the type of table to be created in the SmartTable control.<br>
 * <i>Note:</i><br>
 * If you add a table to the content of the SmartTable in the view, this property has no effect.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.comp.smarttable.TableType} sTableType New value for property <code>tableType</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setTableType = function(sTableType) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>toolbarStyleClass</code>.
 * 
 * A style class which is defined for the toolbar of the table.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sToolbarStyleClass New value for property <code>toolbarStyleClass</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setToolbarStyleClass = function(sToolbarStyleClass) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>useExportToExcel</code>.
 * 
 * Can be set to true or false depending on whether you want to export data to MS Excel®.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseExportToExcel New value for property <code>useExportToExcel</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setUseExportToExcel = function(bUseExportToExcel) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>useOnlyOneSolidToolbar</code>.
 * 
 * If set to true, the standard toolbar and custom toolbar will be merged into one toolbar. The combined toolbar will have a solid
 * style.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bUseOnlyOneSolidToolbar New value for property <code>useOnlyOneSolidToolbar</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @deprecated Since 1.29. This property has no effect
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setUseOnlyOneSolidToolbar = function(bUseOnlyOneSolidToolbar) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>useTablePersonalisation</code>.
 * 
 * The useTablePersonalisation attribute can be set to true or false depending on whether you want to define personalized table
 * settings. If you want to persist the table personalization, you need to specify the persistencyKey property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseTablePersonalisation New value for property <code>useTablePersonalisation</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setUseTablePersonalisation = function(bUseTablePersonalisation) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * Sets a new value for property <code>useVariantManagement</code>.
 * 
 * The useVariantManagement attribute can be set to true or false depending on whether you want to use variants. As a prerequisite you
 * need to specify the persistencyKey property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bUseVariantManagement New value for property <code>useVariantManagement</code>
 * @returns {sap.ui.comp.smarttable.SmartTable} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.setUseVariantManagement = function(bUseVariantManagement) { return new sap.ui.comp.smarttable.SmartTable(); };

/**
 * This can be called once data is received to update table header (count) and toolbar buttons(e.g. Excel Export) enabled state
 * @public
 * 
 */
sap.ui.comp.smarttable.SmartTable.prototype.updateTableHeaderState = function() {  };


// ---- sap.ui.comp.smarttable.TableType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.smarttable.TableType.toString = function() { return ""; };

// ---- sap.ui.comp.smartvariants.PersonalizableInfo --------------------------------------------------------------------------

/**
 * Constructor for a new smartvariants/PersonalizableInfo.
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
 * <li>{@link #getType type} : string</li>
 * <li>{@link #getDataSource dataSource} : string</li>
 * <li>{@link #getKeyName keyName} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The PersonalizableInfo class describes the personalizable control associated with the SmartVariantManagement control.
 * @extends sap.ui.core.Element
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.smartvariants.PersonalizableInfo with name <code>sClassName</code>
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
sap.ui.comp.smartvariants.PersonalizableInfo.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * ID of the element which is the current target of the association <code>control</code>, or <code>null</code>.
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.getControl = function() { return new sap.ui.core.Control(); };

/**
 * Gets current value of property <code>dataSource</code>.
 * 
 * Name of the data service
 * @returns {string} Value of property <code>dataSource</code>
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.getDataSource = function() { return ""; };

/**
 * Gets current value of property <code>keyName</code>.
 * 
 * Defines the property name of the personalization key.
 * @returns {string} Value of property <code>keyName</code>
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.getKeyName = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smartvariants.PersonalizableInfo.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>type</code>.
 * 
 * Describes the type of variant management.
 * @returns {string} Value of property <code>type</code>
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.getType = function() { return ""; };

/**
 * Sets the associated <code>control</code>.
 * @param {sap.ui.core.Control} oControl Id of an element which becomes the new target of this control association; alternatively, an element instance may be given
 * @returns {sap.ui.comp.smartvariants.PersonalizableInfo} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.setControl = function(oControl) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };

/**
 * Sets a new value for property <code>dataSource</code>.
 * 
 * Name of the data service
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sDataSource New value for property <code>dataSource</code>
 * @returns {sap.ui.comp.smartvariants.PersonalizableInfo} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.setDataSource = function(sDataSource) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };

/**
 * Sets a new value for property <code>keyName</code>.
 * 
 * Defines the property name of the personalization key.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sKeyName New value for property <code>keyName</code>
 * @returns {sap.ui.comp.smartvariants.PersonalizableInfo} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.setKeyName = function(sKeyName) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };

/**
 * Sets a new value for property <code>type</code>.
 * 
 * Describes the type of variant management.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sType New value for property <code>type</code>
 * @returns {sap.ui.comp.smartvariants.PersonalizableInfo} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.PersonalizableInfo.prototype.setType = function(sType) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };


// ---- sap.ui.comp.smartvariants.SmartVariantManagement --------------------------------------------------------------------------

/**
 * Constructor for a new SmartVariantManagement.
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
 * <li>{@link #getPersonalizableControls personalizableControls} : sap.ui.comp.smartvariants.PersonalizableInfo[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterSave afterSave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.comp.variants.VariantManagement#constructor sap.ui.comp.variants.VariantManagement}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] initial settings for the new control
 * @class The SmartVariantManagement control is a specialization of the {@link sap.ui.comp.variants.VariantManagement VariantManagement} control
 *        and communicates with the layer that offers SAPUI5 flexibility services to manage the variants.<br>
 *        For more information about SAPUI5 flexibility, refer to the Developer Guide.
 * @extends sap.ui.comp.variants.VariantManagement
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement = function(sId,mSettings) {};
/**
 * This event is fired after a variant has been saved. This event can be used to retrieve the ID of the saved variant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.afterSave = function(oControlEvent) {  };

/**
 * This event is fired when the SmartVariantManagement control is initialized.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.initialise = function(oControlEvent) {  };

/**
 * Registers all controls interested and relying on variant handling.
 * @public
 * @param {sap.ui.comp.smartvariants.PersonalizableInfo} oCurrentControlInfo Provides information about the personalizable control.
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.addPersonalizableControl = function(oCurrentControlInfo) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterSave</code> event of this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code> itself.
 * 
 * This event is fired after a variant has been saved. This event can be used to retrieve the ID of the saved variant.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code> itself
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.attachAfterSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>initialise</code> event of this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code> itself.
 * 
 * This event is fired when the SmartVariantManagement control is initialized.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code> itself
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Destroys all the personalizableControls in the aggregation <code>personalizableControls</code>.
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.destroyPersonalizableControls = function() { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterSave</code> event of this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.detachAfterSave = function(fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>initialise</code> event of this <code>sap.ui.comp.smartvariants.SmartVariantManagement</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Destroys the control.
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.exit = function() {  };

/**
 * Creates a new subclass of class sap.ui.comp.smartvariants.SmartVariantManagement with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.comp.variants.VariantManagement.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>afterSave</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.fireAfterSave = function(mArguments) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Fires event <code>initialise</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.fireInitialise = function(mArguments) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Eventhandler for the manage event of the VariantManagement control.
 * @public
 * @param {object} oVariantInfo Describes the variants that will be deleted/renamed
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.fireManage = function(oVariantInfo) {  };

/**
 * Eventhandler for the save event of the VariantManagement control.
 * @public
 * @param {object} oVariantInfo Describes the variant to be saved
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.fireSave = function(oVariantInfo) {  };

/**
 * Eventhandler for the select event of the VariantManagement control.
 * @public
 * @param {object} oVariantInfo Describes the selected variant
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.fireSelect = function(oVariantInfo) {  };

/**
 * Retrieves the current variant ID. For a standard variant, an empty string is returned.
 * @public
 * @since 1.28.1
 * @returns {string} Current variant ID
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.getCurrentVariantId = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smartvariants.SmartVariantManagement.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>personalizableControls</code>.
 * 
 * All controls that rely on variant handling have to be added to this aggregation.
 * @returns {sap.ui.comp.smartvariants.PersonalizableInfo[]}
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.getPersonalizableControls = function() { return new Array(); };

/**
 * Returns the standard variant.
 * @public
 * @returns {Object} The standard variant.
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.getStandardVariant = function() { return null; };

/**
 * Retrieves the variant content.
 * @public
 * @param {sap.ui.core.Control} oControl Current personalizable control
 * @param {string} sKey The variant key
 * @returns {object} JSON Representing the content of the variant
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.getVariantContent = function(oControl,sKey) { return new Object(); };

/**
 * Checks for the provided <code>sap.ui.comp.smartvariants.PersonalizableInfo</code> in the aggregation <code>personalizableControls</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.smartvariants.PersonalizableInfo}
 *           oPersonalizableControl The personalizableControl whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.indexOfPersonalizableControl = function(oPersonalizableControl) { return 0; };

/**
 * control initialization
 * @public
 * @since 1.26.1
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.init = function() {  };

/**
 * Initializes the SAPUI5 layer with the flexibility services by retrieving the list of variants. Once the initialization has been completed, the
 * control for personalization is informed via the initialise event.
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.initialise = function() {  };

/**
 * Inserts a personalizableControl into the aggregation <code>personalizableControls</code>.
 * @param {sap.ui.comp.smartvariants.PersonalizableInfo}
 *            oPersonalizableControl the personalizableControl to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the personalizableControl should be inserted at; for
 *              a negative value of <code>iIndex</code>, the personalizableControl is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the personalizableControl is inserted at
 *              the last position
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.insertPersonalizableControl = function(oPersonalizableControl,iIndex) { return new sap.ui.comp.smartvariants.SmartVariantManagement(); };

/**
 * Removes all the controls from the aggregation <code>personalizableControls</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.comp.smartvariants.PersonalizableInfo[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.removeAllPersonalizableControls = function() { return new Array(); };

/**
 * Removes a personalizableControl from the aggregation <code>personalizableControls</code>.
 * @param {int | string | sap.ui.comp.smartvariants.PersonalizableInfo} vPersonalizableControl The personalizableControlto remove or its index or id
 * @returns {sap.ui.comp.smartvariants.PersonalizableInfo} The removed personalizableControl or <code>null</code>
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.removePersonalizableControl = function(vPersonalizableControl) { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };

/**
 * Sets the current variant ID.
 * @param {string} sVariantKey The variant key
 * @param {boolean} bDoNotApplyVariant If set to <code>true</code>, the <code>applyVariant</code> method is not executed yet. Relevant during
 *        navigation, when called before the initialise event has been executed.
 * @type void
 * @public
 * @since 1.28.1
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagement.prototype.setCurrentVariantId = function(sVariantKey,bDoNotApplyVariant) { return null; };


// ---- sap.ui.comp.smartvariants.SmartVariantManagementUi2 --------------------------------------------------------------------------

/**
 * Constructor for a new SmartVariantManagementUi2.
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
 * <li>{@link #getPersonalizableControl personalizableControl} : sap.ui.comp.smartvariants.PersonalizableInfo</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:initialise initialise} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:afterSave afterSave} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.comp.variants.VariantManagement#constructor sap.ui.comp.variants.VariantManagement}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given 
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * The SmartVariantManagementUi2 control is a specialization of the {@link "sap.ui.comp.variants.VariantManagement VariantManagement} control and communicates with the Ui2 personalization layer to manage the variants.
 * @extends sap.ui.comp.variants.VariantManagement
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2 = function(sId,mSettings) {};
/**
 * Fired after a variant is saved. This event can be used to retrieve the id of the saved variant.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.afterSave = function(oControlEvent) {  };

/**
 * Once the SmartVariantManagement control has been initialized, and especially after retrieving the variants via the UI2 personalization service, the registered consumer will be notified that this phase has completed
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.initialise = function(oControlEvent) {  };

/**
 * Registers all controls interested and relying on variant handling.
 * @public
 * @param {sap.ui.comp/smartvariants/PersonalizableInfo} oCurrentControlInfo control providing the required aggregation for flex-layer
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.addPersonalizableControl = function(oCurrentControlInfo) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>afterSave</code> event of this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code> itself.
 * 
 * Fired after a variant is saved. This event can be used to retrieve the id of the saved variant.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code> itself
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagementUi2} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.attachAfterSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>initialise</code> event of this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code> itself.
 * 
 * Once the SmartVariantManagement control has been initialized, and especially after retrieving the variants via the UI2 personalization service, the registered consumer will be notified that this phase has completed
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code> itself
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagementUi2} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.attachInitialise = function(oData,fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };

/**
 * Destroys the personalizableControl in the aggregation <code>personalizableControl</code>.
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagementUi2} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.destroyPersonalizableControl = function() { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>afterSave</code> event of this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagementUi2} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.detachAfterSave = function(fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>initialise</code> event of this <code>sap.ui.comp.smartvariants.SmartVariantManagementUi2</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagementUi2} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.detachInitialise = function(fnFunction,oListener) { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };

/**
 * Destroys the control.
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.exit = function() {  };

/**
 * Creates a new subclass of class sap.ui.comp.smartvariants.SmartVariantManagementUi2 with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.comp.variants.VariantManagement.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>afterSave</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagementUi2} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.fireAfterSave = function(mArguments) { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };

/**
 * Fires event <code>initialise</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagementUi2} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.fireInitialise = function(mArguments) { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };

/**
 *  Retrieves the current variant ID. For a standard variant, an empty string is returned.
 * @public
 * @returns {string} Current variant ID
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.getCurrentVariantId = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.smartvariants.SmartVariantManagementUi2.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>personalizableControl</code>.
 * 
 * All controls that rely on variant handling have to be added to this aggregation. The only consumer currently known is the FilterBar control.
 * @returns {sap.ui.comp.smartvariants.PersonalizableInfo}
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.getPersonalizableControl = function() { return new sap.ui.comp.smartvariants.PersonalizableInfo(); };

/**
 * Retrieves the variant content.
 * @public
 * @param {sap.ui.core.Control} oControl current control
 * @param {string} sKey the variant key
 * @returns {object} json object representing the content of the variant
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.getVariantContent = function(oControl,sKey) { return new Object(); };

/**
 * Control initialization.
 * @public
 * @since 1.28.0
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.init = function() {  };

/**
 * Initializes the UI2 personalization layer by retrieving the list of variants. Once the initialization has been completed, the control for personalization is informed via the initialise event.
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.initialise = function() {  };

/**
 * Sets the current variant ID.
 * @public
 * @param {string} sVariantId ID of the variant
 * @param {boolean} bDoNotApplyVariant If set to <code>true</code>, the <code>applyVariant</code> method is not executed yet. Relevant during navigation, when called before the initialise event has been executed
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.setCurrentVariantId = function(sVariantId,bDoNotApplyVariant) {  };

/**
 * Sets the aggregated <code>personalizableControl</code>.
 * @param {sap.ui.comp.smartvariants.PersonalizableInfo} oPersonalizableControl The personalizableControl to set
 * @returns {sap.ui.comp.smartvariants.SmartVariantManagementUi2} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.smartvariants.SmartVariantManagementUi2.prototype.setPersonalizableControl = function(oPersonalizableControl) { return new sap.ui.comp.smartvariants.SmartVariantManagementUi2(); };


// ---- sap.ui.comp.transport.TransportDialog --------------------------------------------------------------------------

/**
 * Constructor for a new transport/TransportDialog.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getPkg pkg} : string</li>
 * <li>{@link #getTransports transports} : any</li>
 * <li>{@link #getLrepObject lrepObject} : any</li>
 * <li>{@link #getHidePackage hidePackage} : boolean</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:ok ok} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Dialog#constructor sap.m.Dialog}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Transport Dialog Control can be used to implement a value help for selecting an ABAP package and transport request. It is not a generic utility, but part of the Variantmanament and therefore cannot be used in any other application.
 * @extends sap.m.Dialog
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.transport.TransportDialog = function(sId,mSettings) {};
/**
 * This event will be fired when the user clicks the Cancel button on the dialog.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.cancel = function(oControlEvent) {  };

/**
 * This event will be fired when the user clicks the OK button on the dialog.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.ok = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>cancel</code> event of this <code>sap.ui.comp.transport.TransportDialog</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.transport.TransportDialog</code> itself.
 * 
 * This event will be fired when the user clicks the Cancel button on the dialog.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.transport.TransportDialog</code> itself
 * @returns {sap.ui.comp.transport.TransportDialog} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>ok</code> event of this <code>sap.ui.comp.transport.TransportDialog</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.transport.TransportDialog</code> itself.
 * 
 * This event will be fired when the user clicks the OK button on the dialog.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.transport.TransportDialog</code> itself
 * @returns {sap.ui.comp.transport.TransportDialog} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.attachOk = function(oData,fnFunction,oListener) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>cancel</code> event of this <code>sap.ui.comp.transport.TransportDialog</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.transport.TransportDialog} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.detachCancel = function(fnFunction,oListener) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>ok</code> event of this <code>sap.ui.comp.transport.TransportDialog</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.transport.TransportDialog} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.detachOk = function(fnFunction,oListener) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * Creates a new subclass of class sap.ui.comp.transport.TransportDialog with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Dialog.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.transport.TransportDialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>cancel</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.transport.TransportDialog} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.fireCancel = function(mArguments) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * Fires event <code>ok</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.transport.TransportDialog} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.fireOk = function(mArguments) { return new sap.ui.comp.transport.TransportDialog(); };

/**
 * Gets current value of property <code>hidePackage</code>.
 * 
 * Flag indicating whether the selection of an ABAP package is to be hidden or not.
 * @returns {boolean} Value of property <code>hidePackage</code>
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.getHidePackage = function() { return false; };

/**
 * Gets current value of property <code>lrepObject</code>.
 * 
 * The LREP object for which as transport request has to be selected
 * @returns {any} Value of property <code>lrepObject</code>
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.getLrepObject = function() { return null; };

/**
 * Returns a metadata object for class sap.ui.comp.transport.TransportDialog.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.transport.TransportDialog.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>pkg</code>.
 * 
 * An ABAP package that can be used as default for the ABAP package selection.
 * @returns {string} Value of property <code>pkg</code>
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.getPkg = function() { return ""; };

/**
 * Gets current value of property <code>transports</code>.
 * 
 * The set of ABAP transport requests that can be selected by a user.
 * @returns {any} Value of property <code>transports</code>
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.getTransports = function() { return null; };

/**
 * Flag indicating whether the selection of an ABAP package is to be hidden or not.
 * @param {boolean}
 *            bHide if set to <code>true</code>, the package selection is hidden.
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.setHidePackage = function(bHide) {  };

/**
 * The LREP object for which as transport request has to be selected. 
 * The property can only be set once and afterwards it cannot be changed.
 * @param {object}
 *            oObject an LREP object for which as transport request has to be selected. The object has the attributes name, namespace and type.
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.setLrepObject = function(oObject) {  };

/**
 * An ABAP package that can be used as default for the ABAP package selection.
 * The property can only be set once and afterwards it cannot be changed.
 * @param {string}
 *            sPackage an ABAP package that can be used as default for the ABAP package selection.
 * @public
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.setPkg = function(sPackage) {  };

/**
 * The set of ABAP transport requests that can be selected by a user.
 * @param {array}
 *            aSelection the set of ABAP transport requests that can be selected by a user.
 * @public          
 * 
 */
sap.ui.comp.transport.TransportDialog.prototype.setTransports = function(aSelection) {  };


// ---- sap.ui.comp.valuehelpdialog.ValueHelpDialog --------------------------------------------------------------------------

/**
 * Constructor for a new valuehelpdialog/ValueHelpDialog.
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
 * <li>{@link #getBasicSearchText basicSearchText} : string</li>
 * <li>{@link #getSupportMultiselect supportMultiselect} : boolean (default: true)</li>
 * <li>{@link #getSupportRanges supportRanges} : boolean (default: false)</li>
 * <li>{@link #getSupportRangesOnly supportRangesOnly} : boolean (default: false)</li>
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getKeys keys} : string[]</li>
 * <li>{@link #getDescriptionKey descriptionKey} : string</li>
 * <li>{@link #getMaxIncludeRanges maxIncludeRanges} : string (default: -1)</li>
 * <li>{@link #getMaxExcludeRanges maxExcludeRanges} : string (default: -1)</li>
 * <li>{@link #getDisplayFormat displayFormat} : string</li>
 * <li>{@link #getTokenDisplayBehaviour tokenDisplayBehaviour} : string</li>
 * <li>{@link #getFilterMode filterMode} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFilterBar filterBar} : sap.ui.comp.filterbar.FilterBar</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:ok ok} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:cancel cancel} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:selectionChange selectionChange} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:tokenRemove tokenRemove} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:updateSelection updateSelection} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.Dialog#constructor sap.m.Dialog}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * The ValueHelpDialog control can be used to implement a value help for an input field.
 * @extends sap.m.Dialog
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog = function(sId,mSettings) {};
/**
 * This event is fired when the Cancel button is pressed.
 * @event
 * @since 1.24
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.cancel = function(oControlEvent) {  };

/**
 * This event is fired when the OK button is pressed.
 * @event
 * @since 1.24
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.m.Token[]} oControlEvent.getParameters.tokens The array of tokens created or modified on the ValueHelpDialog.
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.ok = function(oControlEvent) {  };

/**
 * This event is fired when the user selects an item in the items table.
 * The event will only be raised when the dialog gets a table instance from outside via setTable.
 * @event
 * @since 1.32
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {object} oControlEvent.getParameters.tableSelectionParams The RowSelectionChange event parameter from the hosted table that contains the selected items.
 * @param {object[]} oControlEvent.getParameters.updateTokens Returns an array of objects which represents all selected row tokens.
 *  The object contains the token key, the row object data from the model, and the information if the token is selected.
 *  <code>
 *  [{sKey, oRow, bSelect}, ...]
 *  </code>
 * @param {boolean} oControlEvent.getParameters.useDefault Can be set to true to execute the default behaviour of the ValueHelpDialog.
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.selectionChange = function(oControlEvent) {  };

/**
 * This event is fired when the user removes one or multiple existing token(s) from the dialog.
 * The event will only be raised when the dialog gets a table instance from outside via setTable.
 * @event
 * @since 1.32
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string[]} oControlEvent.getParameters.tokenKeys The array of token keys that has been removed.
 * @param {boolean} oControlEvent.getParameters.useDefault Can be set to true to execute the default behaviour of ValueHelpDialog.
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.tokenRemove = function(oControlEvent) {  };

/**
 * This event is fired when the table gets an update and all existing tokens must be selected in the table.
 * The event will only be raised when the dialog gets a table instance from outside via setTable.
 * @event
 * @since 1.32
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string[]} oControlEvent.getParameters.tokenKeys The array of existing token keys for which the selection in the table has to be updated.
 * @param {boolean} oControlEvent.getParameters.useDefault Can be set to true to execute the default behavior of ValueHelpDialog.
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.updateSelection = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>cancel</code> event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code> itself.
 * 
 * This event is fired when the Cancel button is pressed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code> itself
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.24
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.attachCancel = function(oData,fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>ok</code> event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code> itself.
 * 
 * This event is fired when the OK button is pressed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code> itself
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.24
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.attachOk = function(oData,fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>selectionChange</code> event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code> itself.
 * 
 * This event is fired when the user selects an item in the items table.
 * The event will only be raised when the dialog gets a table instance from outside via setTable.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code> itself
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.32
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.attachSelectionChange = function(oData,fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>tokenRemove</code> event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code> itself.
 * 
 * This event is fired when the user removes one or multiple existing token(s) from the dialog.
 * The event will only be raised when the dialog gets a table instance from outside via setTable.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code> itself
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.32
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.attachTokenRemove = function(oData,fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>updateSelection</code> event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code> itself.
 * 
 * This event is fired when the table gets an update and all existing tokens must be selected in the table.
 * The event will only be raised when the dialog gets a table instance from outside via setTable.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code> itself
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.32
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.attachUpdateSelection = function(oData,fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Destroys the filterBar in the aggregation <code>filterBar</code>.
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.destroyFilterBar = function() { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>cancel</code> event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.detachCancel = function(fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>ok</code> event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.detachOk = function(fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>selectionChange</code> event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.detachSelectionChange = function(fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>tokenRemove</code> event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.detachTokenRemove = function(fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>updateSelection</code> event of this <code>sap.ui.comp.valuehelpdialog.ValueHelpDialog</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.detachUpdateSelection = function(fnFunction,oListener) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Creates a new subclass of class sap.ui.comp.valuehelpdialog.ValueHelpDialog with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Dialog.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>cancel</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.24
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.fireCancel = function(mArguments) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Fires event <code>ok</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>tokens</code> of type <code>sap.m.Token[]</code>The array of tokens created or modified on the ValueHelpDialog.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.24
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.fireOk = function(mArguments) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Fires event <code>selectionChange</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>tableSelectionParams</code> of type <code>object</code>The RowSelectionChange event parameter from the hosted table that contains the selected items.</li>
 * <li><code>updateTokens</code> of type <code>object[]</code>Returns an array of objects which represents all selected row tokens.
 *  The object contains the token key, the row object data from the model, and the information if the token is selected.
 *  <code>
 *  [{sKey, oRow, bSelect}, ...]
 *  </code></li>
 * <li><code>useDefault</code> of type <code>boolean</code>Can be set to true to execute the default behaviour of the ValueHelpDialog.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.32
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.fireSelectionChange = function(mArguments) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Fires event <code>tokenRemove</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>tokenKeys</code> of type <code>string[]</code>The array of token keys that has been removed.</li>
 * <li><code>useDefault</code> of type <code>boolean</code>Can be set to true to execute the default behaviour of ValueHelpDialog.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.32
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.fireTokenRemove = function(mArguments) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Fires event <code>updateSelection</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>tokenKeys</code> of type <code>string[]</code>The array of existing token keys for which the selection in the table has to be updated.</li>
 * <li><code>useDefault</code> of type <code>boolean</code>Can be set to true to execute the default behavior of ValueHelpDialog.</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.32
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.fireUpdateSelection = function(mArguments) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Gets current value of property <code>basicSearchText</code>.
 * 
 * Defines the value for the basic search field.
 * The value is set into the basic search field of the filter bar used.
 * @returns {string} Value of property <code>basicSearchText</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getBasicSearchText = function() { return ""; };

/**
 * Gets current value of property <code>descriptionKey</code>.
 * 
 * Defines the key of the column used for the token text.
 * @returns {string} Value of property <code>descriptionKey</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getDescriptionKey = function() { return ""; };

/**
 * Gets current value of property <code>displayFormat</code>.
 * 
 * Represents the display format of the range values. With the <code>displayFormat</code> value UpperCase, the entered value of the range (condition) is converted to uppercase letters.
 * @returns {string} Value of property <code>displayFormat</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getDisplayFormat = function() { return ""; };

/**
 * Gets content of aggregation <code>filterBar</code>.
 * 
 * Allows you to add a {@link sap.ui.comp.filterbar.FilterBar FilterBar} or {@link sap.ui.comp.smartfilterbar.SmartFilterBar SmartFilterBar} control to the value help dialog.
 * @returns {sap.ui.comp.filterbar.FilterBar}
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getFilterBar = function() { return new sap.ui.comp.filterbar.FilterBar(); };

/**
 * Gets current value of property <code>filterMode</code>.
 * 
 * Sets the dialog into a filter mode, which only shows ranges (conditions) and hides the tokens.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>filterMode</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getFilterMode = function() { return false; };

/**
 * Gets current value of property <code>key</code>.
 * 
 * Defines the key of the column used for the internal key handling. The value of the column is used for the token key and also to identify the row in the table.
 * @returns {string} Value of property <code>key</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getKey = function() { return ""; };

/**
 * Gets current value of property <code>keys</code>.
 * 
 * Defines the list of additional keys of the column used for the internal key handling.
 * @returns {string[]} Value of property <code>keys</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getKeys = function() { return new Array(); };

/**
 * Gets current value of property <code>maxExcludeRanges</code>.
 * 
 * Defines the maximum number of exclude ranges.
 * 
 * Default value is <code>-1</code>.
 * @returns {string} Value of property <code>maxExcludeRanges</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getMaxExcludeRanges = function() { return ""; };

/**
 * Gets current value of property <code>maxIncludeRanges</code>.
 * 
 * Defines the maximum number of include ranges.
 * 
 * Default value is <code>-1</code>.
 * @returns {string} Value of property <code>maxIncludeRanges</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getMaxIncludeRanges = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.valuehelpdialog.ValueHelpDialog.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>supportMultiselect</code>.
 * 
 * Enables multi-selection in the table used.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>supportMultiselect</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getSupportMultiselect = function() { return false; };

/**
 * Gets current value of property <code>supportRanges</code>.
 * 
 * Enables the ranges (conditions) feature in the dialog.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>supportRanges</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getSupportRanges = function() { return false; };

/**
 * Gets current value of property <code>supportRangesOnly</code>.
 * 
 * If this property is set to true, the value help dialog only supports the ranges (conditions) feature.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>supportRangesOnly</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getSupportRangesOnly = function() { return false; };

/**
 * Gives access to the internal table instance.
 * @public
 * @returns {object} the used table instance
 * @since 1.28
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getTable = function() { return new Object(); };

/**
 * Gets current value of property <code>tokenDisplayBehaviour</code>.
 * 
 * Represents how the item token text should be displayed in ValueHelpDialog.
 * Use one of the valid sap.ui.comp.smartfilterbar.ControlConfiguration.DISPLAYBEHAVIOUR values.
 * @returns {string} Value of property <code>tokenDisplayBehaviour</code>
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.getTokenDisplayBehaviour = function() { return ""; };

/**
 * Sets a new value for property <code>basicSearchText</code>.
 * 
 * Defines the value for the basic search field.
 * The value is set into the basic search field of the filter bar used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sBasicSearchText New value for property <code>basicSearchText</code>
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setBasicSearchText = function(sBasicSearchText) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Sets a new value for property <code>descriptionKey</code>.
 * 
 * Defines the key of the column used for the token text.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sDescriptionKey New value for property <code>descriptionKey</code>
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setDescriptionKey = function(sDescriptionKey) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Sets a new value for property <code>displayFormat</code>.
 * 
 * Represents the display format of the range values. With the <code>displayFormat</code> value UpperCase, the entered value of the range (condition) is converted to uppercase letters.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sDisplayFormat New value for property <code>displayFormat</code>
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setDisplayFormat = function(sDisplayFormat) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Sets the array for the supported exclude range operations.
 * @public
 * @since 1.24
 * @param {sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation[]} aOperation
 * 		An array of range operations
 * @param {string} sType the type for which the operations are defined
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setExcludeRangeOperations = function(aOperation,sType) {  };

/**
 * Sets the aggregated <code>filterBar</code>.
 * @param {sap.ui.comp.filterbar.FilterBar} oFilterBar The filterBar to set
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setFilterBar = function(oFilterBar) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Sets a new value for property <code>filterMode</code>.
 * 
 * Sets the dialog into a filter mode, which only shows ranges (conditions) and hides the tokens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFilterMode New value for property <code>filterMode</code>
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setFilterMode = function(bFilterMode) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Sets the array for the supported include range operations.
 * @public
 * @since 1.24
 * @param {sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation[]} aOperation
 * 		An array of range operations
 * @param {string} sType the type for which the operations are defined
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setIncludeRangeOperations = function(aOperation,sType) {  };

/**
 * Sets a new value for property <code>key</code>.
 * 
 * Defines the key of the column used for the internal key handling. The value of the column is used for the token key and also to identify the row in the table.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setKey = function(sKey) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Sets a new value for property <code>keys</code>.
 * 
 * Defines the list of additional keys of the column used for the internal key handling.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string[]} sKeys New value for property <code>keys</code>
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setKeys = function(sKeys) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Sets a new value for property <code>maxExcludeRanges</code>.
 * 
 * Defines the maximum number of exclude ranges.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {string} sMaxExcludeRanges New value for property <code>maxExcludeRanges</code>
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setMaxExcludeRanges = function(sMaxExcludeRanges) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Sets a new value for property <code>maxIncludeRanges</code>.
 * 
 * Defines the maximum number of include ranges.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {string} sMaxIncludeRanges New value for property <code>maxIncludeRanges</code>
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setMaxIncludeRanges = function(sMaxIncludeRanges) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Sets a RangeKeyFields array.
 * This method allows you to specify the KeyFields for the ranges. You can set an array of objects with Key and Label properties to define the key fields.
 * @public
 * @since 1.24
 * @param {object[]} aRangeKeyFields
 * 					An array of range KeyFields <code>[{key: "CompanyCode", label: "ID"}, {key:"CompanyName", label : "Name"}]</code>
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setRangeKeyFields = function(aRangeKeyFields) {  };

/**
 * Sets a new value for property <code>supportMultiselect</code>.
 * 
 * Enables multi-selection in the table used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSupportMultiselect New value for property <code>supportMultiselect</code>
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setSupportMultiselect = function(bSupportMultiselect) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Sets a new value for property <code>supportRanges</code>.
 * 
 * Enables the ranges (conditions) feature in the dialog.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSupportRanges New value for property <code>supportRanges</code>
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setSupportRanges = function(bSupportRanges) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Sets a new value for property <code>supportRangesOnly</code>.
 * 
 * If this property is set to true, the value help dialog only supports the ranges (conditions) feature.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSupportRangesOnly New value for property <code>supportRangesOnly</code>
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setSupportRangesOnly = function(bSupportRangesOnly) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Sets the table used in the value help dialog. If not used, the dialog creates a sap.ui.table.Table or sap.m.Table instance internally.
 * @public
 * @since 1.32
 * @param {object} aTable The used table control instance
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setTable = function(aTable) {  };

/**
 * Sets a new value for property <code>tokenDisplayBehaviour</code>.
 * 
 * Represents how the item token text should be displayed in ValueHelpDialog.
 * Use one of the valid sap.ui.comp.smartfilterbar.ControlConfiguration.DISPLAYBEHAVIOUR values.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTokenDisplayBehaviour New value for property <code>tokenDisplayBehaviour</code>
 * @returns {sap.ui.comp.valuehelpdialog.ValueHelpDialog} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setTokenDisplayBehaviour = function(sTokenDisplayBehaviour) { return new sap.ui.comp.valuehelpdialog.ValueHelpDialog(); };

/**
 * Sets the array of tokens. The sap.m.Tokens are added to the dialog tokenizer Selected Items or Excluded Items.
 * Normal tokens are added to the Selected Items tokenizer only and are selected in the table.
 * 
 * <code>
 * new sap.m.Token({key: "0001", text:"SAP A.G. (0001)"});
 * </code>
 * 
 * Tokens with the extra data with value 'range' are handled as range tokens or exclude range tokens.
 * 
 * <code>
 * new sap.m.Token({key: "i1", text: "ID: a..z"}).data("range", { "exclude": false, "operation": sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.BT, "keyField": "CompanyCode", "value1": "a", "value2": "z"});
 * </code>
 * 
 * The selected items or range tokens are returned in the event parameters of the Ok event.
 * @public
 * @since 1.24
 * @param {sap.m.Token[]} aTokens
 * 							An array of token controls
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.setTokens = function(aTokens) {  };

/**
 * Updates the selection of rows in the table. This function must be called after a first binding or binding update of the table.
 * It will set a table row as selected if a token for this row exists.
 * @public
 * @since 1.24
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpDialog.prototype.update = function() {  };


// ---- sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.toString = function() { return ""; };

// ---- sap.ui.comp.variants.EditableVariantItem --------------------------------------------------------------------------

/**
 * Constructor for a new variants/EditableVariantItem.
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
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getGlobal global} : boolean</li>
 * <li>{@link #getLifecyclePackage lifecyclePackage} : string</li>
 * <li>{@link #getLifecycleTransportId lifecycleTransportId} : string</li>
 * <li>{@link #getNamespace namespace} : string</li>
 * <li>{@link #getReadOnly readOnly} : boolean (default: false)</li>
 * <li>{@link #getAccessOptions accessOptions} : string</li>
 * <li>{@link #getLabelReadOnly labelReadOnly} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.m.ColumnListItem#constructor sap.m.ColumnListItem}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * The EditableVariantItem class describes an editable variant list item for the Manage Variants popup.
 * @extends sap.m.ColumnListItem
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.variants.EditableVariantItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.variants.EditableVariantItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.ColumnListItem.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.variants.EditableVariantItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>accessOptions</code>.
 * 
 * Flags for a variant to indicate why it might be read-only
 * @returns {string} Value of property <code>accessOptions</code>
 * @since 1.26.0
 * @deprecated Since version 1.28.0. Replaced by property <code>labelReadOnly</code>
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getAccessOptions = function() { return ""; };

/**
 * Gets current value of property <code>global</code>.
 * 
 * Indicator if a variant is visible for all users.
 * @returns {boolean} Value of property <code>global</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getGlobal = function() { return false; };

/**
 * Gets current value of property <code>key</code>.
 * 
 * Key of the List Item
 * @returns {string} Value of property <code>key</code>
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getKey = function() { return ""; };

/**
 * Gets current value of property <code>labelReadOnly</code>.
 * 
 * Indicates if the variant label can be changed
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>labelReadOnly</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getLabelReadOnly = function() { return false; };

/**
 * Gets current value of property <code>lifecyclePackage</code>.
 * 
 * ABAP Package the variant is assigned. Used for transport functionality
 * @returns {string} Value of property <code>lifecyclePackage</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getLifecyclePackage = function() { return ""; };

/**
 * Gets current value of property <code>lifecycleTransportId</code>.
 * 
 * Identifier of the transport object the variant is assigned to.
 * @returns {string} Value of property <code>lifecycleTransportId</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getLifecycleTransportId = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.variants.EditableVariantItem.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.variants.EditableVariantItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>namespace</code>.
 * 
 * Variant namespace
 * @returns {string} Value of property <code>namespace</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getNamespace = function() { return ""; };

/**
 * Gets current value of property <code>readOnly</code>.
 * 
 * Indication if variant can be changed
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>readOnly</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.getReadOnly = function() { return false; };

/**
 * Sets a new value for property <code>accessOptions</code>.
 * 
 * Flags for a variant to indicate why it might be read-only
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sAccessOptions New value for property <code>accessOptions</code>
 * @returns {sap.ui.comp.variants.EditableVariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @deprecated Since version 1.28.0. Replaced by property <code>labelReadOnly</code>
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setAccessOptions = function(sAccessOptions) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * Sets a new value for property <code>global</code>.
 * 
 * Indicator if a variant is visible for all users.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {boolean} bGlobal New value for property <code>global</code>
 * @returns {sap.ui.comp.variants.EditableVariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setGlobal = function(bGlobal) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * Sets a new value for property <code>key</code>.
 * 
 * Key of the List Item
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sKey New value for property <code>key</code>
 * @returns {sap.ui.comp.variants.EditableVariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setKey = function(sKey) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * Sets a new value for property <code>labelReadOnly</code>.
 * 
 * Indicates if the variant label can be changed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLabelReadOnly New value for property <code>labelReadOnly</code>
 * @returns {sap.ui.comp.variants.EditableVariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setLabelReadOnly = function(bLabelReadOnly) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * Sets a new value for property <code>lifecyclePackage</code>.
 * 
 * ABAP Package the variant is assigned. Used for transport functionality
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sLifecyclePackage New value for property <code>lifecyclePackage</code>
 * @returns {sap.ui.comp.variants.EditableVariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setLifecyclePackage = function(sLifecyclePackage) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * Sets a new value for property <code>lifecycleTransportId</code>.
 * 
 * Identifier of the transport object the variant is assigned to.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sLifecycleTransportId New value for property <code>lifecycleTransportId</code>
 * @returns {sap.ui.comp.variants.EditableVariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setLifecycleTransportId = function(sLifecycleTransportId) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * Sets a new value for property <code>namespace</code>.
 * 
 * Variant namespace
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sNamespace New value for property <code>namespace</code>
 * @returns {sap.ui.comp.variants.EditableVariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setNamespace = function(sNamespace) { return new sap.ui.comp.variants.EditableVariantItem(); };

/**
 * Sets a new value for property <code>readOnly</code>.
 * 
 * Indication if variant can be changed
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bReadOnly New value for property <code>readOnly</code>
 * @returns {sap.ui.comp.variants.EditableVariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.EditableVariantItem.prototype.setReadOnly = function(bReadOnly) { return new sap.ui.comp.variants.EditableVariantItem(); };


// ---- sap.ui.comp.variants.VariantItem --------------------------------------------------------------------------

/**
 * Constructor for a new variants/VariantItem.
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
 * <li>{@link #getExecuteOnSelection executeOnSelection} : boolean (default: false)</li>
 * <li>{@link #getReadOnly readOnly} : boolean (default: false)</li>
 * <li>{@link #getLifecycleTransportId lifecycleTransportId} : string</li>
 * <li>{@link #getGlobal global} : boolean</li>
 * <li>{@link #getLifecyclePackage lifecyclePackage} : string</li>
 * <li>{@link #getNamespace namespace} : string</li>
 * <li>{@link #getAccessOptions accessOptions} : string</li>
 * <li>{@link #getLabelReadOnly labelReadOnly} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Item#constructor sap.ui.core.Item}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given 
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * The VariantItem class describes a variant item.
 * @extends sap.ui.core.Item
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.variants.VariantItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.comp.variants.VariantItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.comp.variants.VariantItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>accessOptions</code>.
 * 
 * Flags for a variant to indicate why it might be read-only.
 * @returns {string} Value of property <code>accessOptions</code>
 * @since 1.26.0
 * @deprecated Since version 1.28.0. Replaced by property <code>labelReadOnly</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getAccessOptions = function() { return ""; };

/**
 * Gets current value of property <code>executeOnSelection</code>.
 * 
 * Attribute for usage in Smart Filter Bar
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>executeOnSelection</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getExecuteOnSelection = function() { return false; };

/**
 * Gets current value of property <code>global</code>.
 * 
 * Indicator if a variant is visible for all users.
 * @returns {boolean} Value of property <code>global</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getGlobal = function() { return false; };

/**
 * Gets current value of property <code>labelReadOnly</code>.
 * 
 * Indicates if the variant title can be changed.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>labelReadOnly</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getLabelReadOnly = function() { return false; };

/**
 * Gets current value of property <code>lifecyclePackage</code>.
 * 
 * ABAP package the variant is assigned to. Used for transport functionality.
 * @returns {string} Value of property <code>lifecyclePackage</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getLifecyclePackage = function() { return ""; };

/**
 * Gets current value of property <code>lifecycleTransportId</code>.
 * 
 * Identifier of the transport object the variant is assigned to.
 * @returns {string} Value of property <code>lifecycleTransportId</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getLifecycleTransportId = function() { return ""; };

/**
 * Returns a metadata object for class sap.ui.comp.variants.VariantItem.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.variants.VariantItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>namespace</code>.
 * 
 * Variant namespace
 * @returns {string} Value of property <code>namespace</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getNamespace = function() { return ""; };

/**
 * Gets current value of property <code>readOnly</code>.
 * 
 * Is the user allowed to change the item's data
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>readOnly</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.getReadOnly = function() { return false; };

/**
 * Sets a new value for property <code>accessOptions</code>.
 * 
 * Flags for a variant to indicate why it might be read-only.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sAccessOptions New value for property <code>accessOptions</code>
 * @returns {sap.ui.comp.variants.VariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @deprecated Since version 1.28.0. Replaced by property <code>labelReadOnly</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setAccessOptions = function(sAccessOptions) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Sets a new value for property <code>executeOnSelection</code>.
 * 
 * Attribute for usage in Smart Filter Bar
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bExecuteOnSelection New value for property <code>executeOnSelection</code>
 * @returns {sap.ui.comp.variants.VariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setExecuteOnSelection = function(bExecuteOnSelection) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Sets a new value for property <code>global</code>.
 * 
 * Indicator if a variant is visible for all users.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {boolean} bGlobal New value for property <code>global</code>
 * @returns {sap.ui.comp.variants.VariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setGlobal = function(bGlobal) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Sets a new value for property <code>labelReadOnly</code>.
 * 
 * Indicates if the variant title can be changed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLabelReadOnly New value for property <code>labelReadOnly</code>
 * @returns {sap.ui.comp.variants.VariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setLabelReadOnly = function(bLabelReadOnly) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Sets a new value for property <code>lifecyclePackage</code>.
 * 
 * ABAP package the variant is assigned to. Used for transport functionality.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sLifecyclePackage New value for property <code>lifecyclePackage</code>
 * @returns {sap.ui.comp.variants.VariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setLifecyclePackage = function(sLifecyclePackage) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Sets a new value for property <code>lifecycleTransportId</code>.
 * 
 * Identifier of the transport object the variant is assigned to.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sLifecycleTransportId New value for property <code>lifecycleTransportId</code>
 * @returns {sap.ui.comp.variants.VariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setLifecycleTransportId = function(sLifecycleTransportId) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Sets a new value for property <code>namespace</code>.
 * 
 * Variant namespace
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sNamespace New value for property <code>namespace</code>
 * @returns {sap.ui.comp.variants.VariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setNamespace = function(sNamespace) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Sets a new value for property <code>readOnly</code>.
 * 
 * Is the user allowed to change the item's data
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bReadOnly New value for property <code>readOnly</code>
 * @returns {sap.ui.comp.variants.VariantItem} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantItem.prototype.setReadOnly = function(bReadOnly) { return new sap.ui.comp.variants.VariantItem(); };


// ---- sap.ui.comp.variants.VariantManagement --------------------------------------------------------------------------

/**
 * Constructor for a new VariantManagement.
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
 * <li>{@link #getInitialSelectionKey initialSelectionKey} : string</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * <li>{@link #getDefaultVariantKey defaultVariantKey} : string</li>
 * <li>{@link #getSelectionKey selectionKey} : string</li>
 * <li>{@link #getShowCreateTile showCreateTile} : boolean (default: false)</li>
 * <li>{@link #getShowExecuteOnSelection showExecuteOnSelection} : boolean (default: false)</li>
 * <li>{@link #getShowShare showShare} : boolean (default: false)</li>
 * <li>{@link #getLifecycleSupport lifecycleSupport} : boolean (default: false)</li>
 * <li>{@link #getStandardItemText standardItemText} : string</li>
 * <li>{@link #getIndustrySolutionMode industrySolutionMode} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.ui.core.Item[] (default)</li>
 * <li>{@link #getVariantItems variantItems} : sap.ui.comp.variants.VariantItem[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:save save} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:manage manage} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:select select} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class The VariantManagement control can be used to manage variants, such as filter bar variants or table variants.
 * @extends sap.ui.core.Control
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.variants.VariantManagement = function(sId,mSettings) {};
/**
 * This event is fired when users apply changes to variants in the Manage Variants dialog.
 * @event
 * @since 1.22.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string[]} oControlEvent.getParameters.renamed List of changed variant keys
 * @param {string[]} oControlEvent.getParameters.deleted List of deleted variant keys
 * @param {object[]} oControlEvent.getParameters.exe List of variant keys and the associated Execute on Selection indicator
 * @param {boolean} oControlEvent.getParameters.def The default variant key
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.manage = function(oControlEvent) {  };

/**
 * This event is fired when the Save Variant dialog is closed with OK for a variant.
 * @event
 * @since 1.22.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.name The variant title
 * @param {boolean} oControlEvent.getParameters.overwrite Indicates if an existing variant is overwritten or if a new variant is created
 * @param {string} oControlEvent.getParameters.key The variant key
 * @param {boolean} oControlEvent.getParameters.exe The Execute on Selection indicator
 * @param {boolean} oControlEvent.getParameters.def The default variant indicator
 * @param {boolean} oControlEvent.getParameters.global The shared variant indicator
 * @param {string} oControlEvent.getParameters.lifecyclePackage The package name
 * @param {string} oControlEvent.getParameters.lifecycleTransportId The transport ID
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.save = function(oControlEvent) {  };

/**
 * This event is fired when a new variant is selected.
 * @event
 * @since 1.22.0
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.key The variant key
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.select = function(oControlEvent) {  };

/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.ui.core.Item}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.22.0
 * @deprecated Since version 1.26.0. Replaced by association <code>variantItems</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.addItem = function(oItem) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Adds some variantItem to the aggregation <code>variantItems</code>.
 * @param {sap.ui.comp.variants.VariantItem}
 *            oVariantItem the variantItem to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.addVariantItem = function(oVariantItem) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>manage</code> event of this <code>sap.ui.comp.variants.VariantManagement</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.variants.VariantManagement</code> itself.
 * 
 * This event is fired when users apply changes to variants in the Manage Variants dialog.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.variants.VariantManagement</code> itself
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.22.0
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.attachManage = function(oData,fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>save</code> event of this <code>sap.ui.comp.variants.VariantManagement</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.variants.VariantManagement</code> itself.
 * 
 * This event is fired when the Save Variant dialog is closed with OK for a variant.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.variants.VariantManagement</code> itself
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.22.0
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.attachSave = function(oData,fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>select</code> event of this <code>sap.ui.comp.variants.VariantManagement</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.comp.variants.VariantManagement</code> itself.
 * 
 * This event is fired when a new variant is selected.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.comp.variants.VariantManagement</code> itself
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.22.0
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.attachSelect = function(oData,fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Removes the current variant selection and resets to default value.
 * @public
 * @since 1.22.0
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.clearVariantSelection = function() {  };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.22.0
 * @deprecated Since version 1.26.0. Replaced by association <code>variantItems</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.destroyItems = function() { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Destroys all the variantItems in the aggregation <code>variantItems</code>.
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.destroyVariantItems = function() { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>manage</code> event of this <code>sap.ui.comp.variants.VariantManagement</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.detachManage = function(fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>save</code> event of this <code>sap.ui.comp.variants.VariantManagement</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.detachSave = function(fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>select</code> event of this <code>sap.ui.comp.variants.VariantManagement</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.detachSelect = function(fnFunction,oListener) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Creates a new subclass of class sap.ui.comp.variants.VariantManagement with name <code>sClassName</code>
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
sap.ui.comp.variants.VariantManagement.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>manage</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>renamed</code> of type <code>string[]</code>List of changed variant keys</li>
 * <li><code>deleted</code> of type <code>string[]</code>List of deleted variant keys</li>
 * <li><code>exe</code> of type <code>object[]</code>List of variant keys and the associated Execute on Selection indicator</li>
 * <li><code>def</code> of type <code>boolean</code>The default variant key</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.22.0
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.fireManage = function(mArguments) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Fires event <code>save</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>name</code> of type <code>string</code>The variant title</li>
 * <li><code>overwrite</code> of type <code>boolean</code>Indicates if an existing variant is overwritten or if a new variant is created</li>
 * <li><code>key</code> of type <code>string</code>The variant key</li>
 * <li><code>exe</code> of type <code>boolean</code>The Execute on Selection indicator</li>
 * <li><code>def</code> of type <code>boolean</code>The default variant indicator</li>
 * <li><code>global</code> of type <code>boolean</code>The shared variant indicator</li>
 * <li><code>lifecyclePackage</code> of type <code>string</code>The package name</li>
 * <li><code>lifecycleTransportId</code> of type <code>string</code>The transport ID</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.22.0
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.fireSave = function(mArguments) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Fires event <code>select</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>key</code> of type <code>string</code>The variant key</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.22.0
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.fireSelect = function(mArguments) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Gets current value of property <code>defaultVariantKey</code>.
 * 
 * Provides a string value to set the default variant. Used for the save dialog. Has no effect on the selected variant.
 * @returns {string} Value of property <code>defaultVariantKey</code>
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getDefaultVariantKey = function() { return ""; };

/**
 * Gets current value of property <code>enabled</code>.
 * 
 * Can be set to true or false depending on whether you want to enable or disable the control.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabled</code>
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getEnabled = function() { return false; };

/**
 * Gets current value of property <code>industrySolutionMode</code>.
 * 
 * If set to true, the scenario is an industry-specific solution. This flag is only used internally in the app variant scenarios.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>industrySolutionMode</code>
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getIndustrySolutionMode = function() { return false; };

/**
 * Gets current value of property <code>initialSelectionKey</code>.
 * 
 * Enables the setting of the initially selected variant.
 * @returns {string} Value of property <code>initialSelectionKey</code>
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getInitialSelectionKey = function() { return ""; };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * Items displayed by the VariantManagement control.
 * @returns {sap.ui.core.Item[]}
 * @since 1.22.0
 * @deprecated Since version 1.26.0. Replaced by association <code>variantItems</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getItems = function() { return new Array(); };

/**
 * Gets current value of property <code>lifecycleSupport</code>.
 * 
 * Enables the lifecycle support. If set to true, the VariantManagement control handles the transport information for shared variants.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>lifecycleSupport</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getLifecycleSupport = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.comp.variants.VariantManagement.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.comp.variants.VariantManagement.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>selectionKey</code>.
 * 
 * The key of the currently selected item. Returns null if the default item list is selected.
 * @returns {string} Value of property <code>selectionKey</code>
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getSelectionKey = function() { return ""; };

/**
 * Gets current value of property <code>showCreateTile</code>.
 * 
 * Indicates that a Create Tile is visible in the Create dialog.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showCreateTile</code>
 * @since 1.26.0
 * @deprecated Since version 1.32.0.
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getShowCreateTile = function() { return false; };

/**
 * Gets current value of property <code>showExecuteOnSelection</code>.
 * 
 * Indicates that Execute on Selection is visible in the Save Variant and the Manage Variants dialogs.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showExecuteOnSelection</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getShowExecuteOnSelection = function() { return false; };

/**
 * Gets current value of property <code>showShare</code>.
 * 
 * Indicates that Share is visible in the Save Variant and the Manage Variants dialogs. Share allows you to share variants with other
 * users.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showShare</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getShowShare = function() { return false; };

/**
 * Gets current value of property <code>standardItemText</code>.
 * 
 * Overwrites the default Standard variant title.
 * @returns {string} Value of property <code>standardItemText</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getStandardItemText = function() { return ""; };

/**
 * Gets content of aggregation <code>variantItems</code>.
 * 
 * Variant items displayed by the VariantManagement control.
 * @returns {sap.ui.comp.variants.VariantItem[]}
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.getVariantItems = function() { return new Array(); };

/**
 * Checks for the provided <code>sap.ui.core.Item</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Item}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.22.0
 * @deprecated Since version 1.26.0. Replaced by association <code>variantItems</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Checks for the provided <code>sap.ui.comp.variants.VariantItem</code> in the aggregation <code>variantItems</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.comp.variants.VariantItem}
 *           oVariantItem The variantItem whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.indexOfVariantItem = function(oVariantItem) { return 0; };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.ui.core.Item}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.22.0
 * @deprecated Since version 1.26.0. Replaced by association <code>variantItems</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.insertItem = function(oItem,iIndex) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Inserts a variantItem into the aggregation <code>variantItems</code>.
 * @param {sap.ui.comp.variants.VariantItem}
 *            oVariantItem the variantItem to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the variantItem should be inserted at; for
 *              a negative value of <code>iIndex</code>, the variantItem is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the variantItem is inserted at
 *              the last position
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.insertVariantItem = function(oVariantItem,iIndex) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Item[]} An array of the removed elements (might be empty)
 * @since 1.22.0
 * @deprecated Since version 1.26.0. Replaced by association <code>variantItems</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>variantItems</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.comp.variants.VariantItem[]} An array of the removed elements (might be empty)
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.removeAllVariantItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.ui.core.Item} vItem The itemto remove or its index or id
 * @returns {sap.ui.core.Item} The removed item or <code>null</code>
 * @since 1.22.0
 * @deprecated Since version 1.26.0. Replaced by association <code>variantItems</code>
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.removeItem = function(vItem) { return new sap.ui.core.Item(); };

/**
 * Removes a variantItem from the aggregation <code>variantItems</code>.
 * @param {int | string | sap.ui.comp.variants.VariantItem} vVariantItem The variantItemto remove or its index or id
 * @returns {sap.ui.comp.variants.VariantItem} The removed variantItem or <code>null</code>
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.removeVariantItem = function(vVariantItem) { return new sap.ui.comp.variants.VariantItem(); };

/**
 * Sets a new value for property <code>defaultVariantKey</code>.
 * 
 * Provides a string value to set the default variant. Used for the save dialog. Has no effect on the selected variant.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sDefaultVariantKey New value for property <code>defaultVariantKey</code>
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setDefaultVariantKey = function(sDefaultVariantKey) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Sets a new value for property <code>enabled</code>.
 * 
 * Can be set to true or false depending on whether you want to enable or disable the control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled New value for property <code>enabled</code>
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setEnabled = function(bEnabled) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Sets a new value for property <code>industrySolutionMode</code>.
 * 
 * If set to true, the scenario is an industry-specific solution. This flag is only used internally in the app variant scenarios.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIndustrySolutionMode New value for property <code>industrySolutionMode</code>
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setIndustrySolutionMode = function(bIndustrySolutionMode) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Sets a new value for property <code>initialSelectionKey</code>.
 * 
 * Enables the setting of the initially selected variant.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sInitialSelectionKey New value for property <code>initialSelectionKey</code>
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.22.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setInitialSelectionKey = function(sInitialSelectionKey) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Sets a new value for property <code>lifecycleSupport</code>.
 * 
 * Enables the lifecycle support. If set to true, the VariantManagement control handles the transport information for shared variants.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLifecycleSupport New value for property <code>lifecycleSupport</code>
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setLifecycleSupport = function(bLifecycleSupport) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Sets a new value for property <code>selectionKey</code>.
 * 
 * The key of the currently selected item. Returns null if the default item list is selected.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sSelectionKey New value for property <code>selectionKey</code>
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.24.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setSelectionKey = function(sSelectionKey) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Sets a new value for property <code>showCreateTile</code>.
 * 
 * Indicates that a Create Tile is visible in the Create dialog.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowCreateTile New value for property <code>showCreateTile</code>
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @deprecated Since version 1.32.0.
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setShowCreateTile = function(bShowCreateTile) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Sets a new value for property <code>showExecuteOnSelection</code>.
 * 
 * Indicates that Execute on Selection is visible in the Save Variant and the Manage Variants dialogs.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowExecuteOnSelection New value for property <code>showExecuteOnSelection</code>
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setShowExecuteOnSelection = function(bShowExecuteOnSelection) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Sets a new value for property <code>showShare</code>.
 * 
 * Indicates that Share is visible in the Save Variant and the Manage Variants dialogs. Share allows you to share variants with other
 * users.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowShare New value for property <code>showShare</code>
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.26.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setShowShare = function(bShowShare) { return new sap.ui.comp.variants.VariantManagement(); };

/**
 * Sets a new value for property <code>standardItemText</code>.
 * 
 * Overwrites the default Standard variant title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sStandardItemText New value for property <code>standardItemText</code>
 * @returns {sap.ui.comp.variants.VariantManagement} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.comp.variants.VariantManagement.prototype.setStandardItemText = function(sStandardItemText) { return new sap.ui.comp.variants.VariantManagement(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.comp.personalization.AggregationRole --------------------------------------------------------------------------

/**
 * Dimension role.
 * @public
 * 
 */
sap.ui.comp.personalization.AggregationRole.Dimension = "";

/**
 * Measure role.
 * @public
 * 
 */
sap.ui.comp.personalization.AggregationRole.Measure = "";

/**
 * Role which is neither dimension nor measure.
 * @public
 * 
 */
sap.ui.comp.personalization.AggregationRole.NotDimeasure = "";


// ---- sap.ui.comp.personalization.ChangeType --------------------------------------------------------------------------

/**
 * Change is applied to model but not applied to table
 * @public
 * 
 */
sap.ui.comp.personalization.ChangeType.ModelChanged = "";

/**
 * Change is applied to model and to table
 * @public
 * 
 */
sap.ui.comp.personalization.ChangeType.TableChanged = "";

/**
 * Not changed
 * @public
 * 
 */
sap.ui.comp.personalization.ChangeType.Unchanged = "";


// ---- sap.ui.comp.personalization.ResetType --------------------------------------------------------------------------

/**
 * Reset back to Restore (i.e. the version of the table with which the controller was instantiated or via setter
 * updated) was triggered (either via API or via reset button)
 * @public
 * 
 */
sap.ui.comp.personalization.ResetType.ResetFull = "";

/**
 * Reset back to the CurrentVariant was triggered
 * @public
 * 
 */
sap.ui.comp.personalization.ResetType.ResetPartial = "";


// ---- sap.ui.comp.smartfield.ControlContextType --------------------------------------------------------------------------

/**
 * Behaves currently exactly like <code>sap.ui.comp.smartfield.ControlContextType.None</code>.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlContextType.Form = "";

/**
 * No special context is selected. The Smart Field applies its internal defaults.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlContextType.None = "";

/**
 * Also the UoM layout is influenced.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlContextType.ResponsiveTable = "";

/**
 * If this is selected the UoM layout is influenced.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlContextType.SmartFormGrid = "";

/**
 * If this is selected the UoM layout is influenced.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlContextType.Table = "";


// ---- sap.ui.comp.smartfield.ControlProposalType --------------------------------------------------------------------------

/**
 * No special context is selected. The Smart Field applies its internal defaults.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlProposalType.None = "";

/**
 * If this is selected, the sap.m.ObjectIdentifier control is used to display IDs, if they are not editable.
 * The current OData property is assumed to have a text annotation. Otherwise the configuration is ignored.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlProposalType.ObjectIdentifier = "";

/**
 * If this is selected, the sap.m.ObjectNumber control is used to display units of measure.
 * If the value property of the Smart Field is not bound to a unit of measure, the property is ignored.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlProposalType.ObjectNumber = "";


// ---- sap.ui.comp.smartfield.ControlType --------------------------------------------------------------------------

/**
 * The SmartField chooses the control.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlType.auto = "";

/**
 * The SmartField displays a check box.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlType.checkBox = "";

/**
 * The SmartField displays a date picker.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlType.datePicker = "";

/**
 * The SmartField uses a drop down list box.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlType.dropDownList = "";

/**
 * The SmartField displays an input field.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlType.input = "";

/**
 * The SmartField displays a <code>sap.m.Selection</code>.
 * @public
 * 
 */
sap.ui.comp.smartfield.ControlType.selection = "";


// ---- sap.ui.comp.smartfield.DisplayBehaviour --------------------------------------------------------------------------

/**
 * The SmartField chooses the display behavior.
 * @public
 * 
 */
sap.ui.comp.smartfield.DisplayBehaviour.auto = "";

/**
 * Description and ID are displayed for available values.
 * @public
 * 
 */
sap.ui.comp.smartfield.DisplayBehaviour.descriptionAndId = "";

/**
 * Only the description of the available values is displayed.
 * @public
 * 
 */
sap.ui.comp.smartfield.DisplayBehaviour.descriptionOnly = "";

/**
 * ID and description are displayed for available values.
 * @public
 * 
 */
sap.ui.comp.smartfield.DisplayBehaviour.idAndDescription = "";

/**
 * Shows the ID only.
 * @public
 * 
 */
sap.ui.comp.smartfield.DisplayBehaviour.idOnly = "";

/**
 * Shows Boolean value as On/Off
 * @public
 * 
 */
sap.ui.comp.smartfield.DisplayBehaviour.OnOff = "";

/**
 * Shows Boolean value as True/False
 * @public
 * 
 */
sap.ui.comp.smartfield.DisplayBehaviour.TrueFalse = "";

/**
 * Shows Boolean value as Yes/No
 * @public
 * 
 */
sap.ui.comp.smartfield.DisplayBehaviour.YesNo = "";


// ---- sap.ui.comp.smartfield.JSONType --------------------------------------------------------------------------

/**
 * Boolean Type
 * @public
 * 
 */
sap.ui.comp.smartfield.JSONType.Boolean = "";

/**
 * The JavaScript Date Object
 * @public
 * 
 */
sap.ui.comp.smartfield.JSONType.Date = "";

/**
 * Date Time Type
 * @public
 * 
 */
sap.ui.comp.smartfield.JSONType.DateTime = "";

/**
 * Float type
 * @public
 * 
 */
sap.ui.comp.smartfield.JSONType.Float = "";

/**
 * Integer type
 * @public
 * 
 */
sap.ui.comp.smartfield.JSONType.Integer = "";

/**
 * The JavaScript primary type String
 * @public
 * 
 */
sap.ui.comp.smartfield.JSONType.String = "";


// ---- sap.ui.comp.smarttable.TableType --------------------------------------------------------------------------

/**
 * An analytical table (sap.ui.table.AnalyticalTable) control shall be created as the content of the SmartTable, if no table already exists
 * @public
 * 
 */
sap.ui.comp.smarttable.TableType.AnalyticalTable = "";

/**
 * A responsive table (sap.m.Table) control that can be used on mobile devices shall be created as the content of the SmartTable, if no table already exists
 * @public
 * 
 */
sap.ui.comp.smarttable.TableType.ResponsiveTable = "";

/**
 * A table (sap.ui.table.Table) control shall be created as the content of the SmartTable, if no table already exists (default)
 * @public
 * 
 */
sap.ui.comp.smarttable.TableType.Table = "";

/**
 * A tree table (sap.ui.table.TreeTable) control shall be created as the content of the SmartTable, if no table already exists (TODO)
 * @public
 * 
 */
sap.ui.comp.smarttable.TableType.TreeTable = "";


// ---- sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation --------------------------------------------------------------------------

/**
 * The Between operation for the ranges.
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.BT = "";

/**
 * The Contains operation for the ranges.
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.Contains = "";

/**
 * The EndsWith operation for the ranges.
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.EndsWith = "";

/**
 * The Equals operation for the ranges.
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.EQ = "";

/**
 * The Between or equals operation for the ranges.
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.GE = "";

/**
 * The Greater operation for the ranges.
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.GT = "";

/**
 * The Less or equals operation for the ranges.
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.LE = "";

/**
 * The Less operation for the ranges.
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.LT = "";

/**
 * The StartsWith operation for the ranges.
 * @public
 * 
 */
sap.ui.comp.valuehelpdialog.ValueHelpRangeOperation.StartsWith = "";

