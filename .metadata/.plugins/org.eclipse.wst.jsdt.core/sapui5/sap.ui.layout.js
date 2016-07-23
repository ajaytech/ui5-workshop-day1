
// ---- sap.ui.layout --------------------------------------------------------------------------


// ---- sap.ui.layout.BackgroundDesign --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.BackgroundDesign.toString = function() { return ""; };

// ---- sap.ui.layout.BlockBackgroundType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.BlockBackgroundType.toString = function() { return ""; };

// ---- sap.ui.layout.BlockLayout --------------------------------------------------------------------------

/**
 * Constructor for a new BlockLayout.
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
 * <li>{@link #getBackground background} : sap.ui.layout.BlockBackgroundType (default: Default)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.layout.BlockLayoutRow[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * The BlockLayout is used to display several objects in a section-based manner. It features horizontal and vertical subdivisions, and full-width banners seen frequently in contemporary web design. Background colors are attached directly to these “blocks” of the layout. Special full-width sections of the BlockLayout allow horizontal scrolling through a set of blocks.
 * Example use cases are SAP HANA Cloud Integration and the SAPUI5 Demo Kit. In SAP HANA Cloud Integration the BlockLayout serves as a banner-like presentation of illustrative icons with associated text. By placing pictorial and textual elements side by side in different blocks, a relation of content is established. In the SAPUI5 Demo Kit the BlockLayout serves as a flexible container for diverging content, such as headings, explanatory texts, code snippets, remarks, and examples.
 * The BlockLayout comes in three types: Layout only (default), Bright, and Mixed background colors.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.34
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.BlockLayout = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation <code>content</code>.
 * @param {sap.ui.layout.BlockLayoutRow}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.BlockLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.addContent = function(oContent) { return new sap.ui.layout.BlockLayout(); };

/**
 * Destroys all the content in the aggregation <code>content</code>.
 * @returns {sap.ui.layout.BlockLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.destroyContent = function() { return new sap.ui.layout.BlockLayout(); };

/**
 * Creates a new subclass of class sap.ui.layout.BlockLayout with name <code>sClassName</code>
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
sap.ui.layout.BlockLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>background</code>.
 * 
 * Determines the background used for the Layout
 * 
 * Default value is <code>Default</code>.
 * @returns {sap.ui.layout.BlockBackgroundType} Value of property <code>background</code>
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.getBackground = function() { return new sap.ui.layout.BlockBackgroundType(); };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * The Rows to be included in the content of the control
 * @returns {sap.ui.layout.BlockLayoutRow[]}
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.layout.BlockLayout.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.BlockLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.layout.BlockLayoutRow</code> in the aggregation <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.layout.BlockLayoutRow}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation <code>content</code>.
 * @param {sap.ui.layout.BlockLayoutRow}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.layout.BlockLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.BlockLayout(); };

/**
 * Removes all the controls from the aggregation <code>content</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.layout.BlockLayoutRow[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation <code>content</code>.
 * @param {int | string | sap.ui.layout.BlockLayoutRow} vContent The contentto remove or its index or id
 * @returns {sap.ui.layout.BlockLayoutRow} The removed content or <code>null</code>
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.removeContent = function(vContent) { return new sap.ui.layout.BlockLayoutRow(); };

/**
 * Sets a new value for property <code>background</code>.
 * 
 * Determines the background used for the Layout
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Default</code>.
 * @param {sap.ui.layout.BlockBackgroundType} sBackground New value for property <code>background</code>
 * @returns {sap.ui.layout.BlockLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.BlockLayout.prototype.setBackground = function(sBackground) { return new sap.ui.layout.BlockLayout(); };


// ---- sap.ui.layout.BlockLayoutCell --------------------------------------------------------------------------

/**
 * Constructor for a new BlockLayoutCell.
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
 * <li>{@link #getTitleAlignment titleAlignment} : sap.ui.core.HorizontalAlign (default: Begin)</li>
 * <li>{@link #getTitleLevel titleLevel} : sap.ui.core.TitleLevel (default: Auto)</li>
 * <li>{@link #getWidth width} : int (default: 0)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * The BlockLayoutCell is used as an aggregation of the BlockLayoutRow. It contains Controls.
 * The BlockLayoutCell should be used only as aggregation of the BlockLayoutRow.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.34
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.BlockLayoutCell = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.addContent = function(oContent) { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Destroys all the content in the aggregation <code>content</code>.
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.destroyContent = function() { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Creates a new subclass of class sap.ui.layout.BlockLayoutCell with name <code>sClassName</code>
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
sap.ui.layout.BlockLayoutCell.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * The content to be included inside the cell
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.layout.BlockLayoutCell.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.BlockLayoutCell.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>title</code>.
 * 
 * Defines the title of the cell
 * @returns {string} Value of property <code>title</code>
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property <code>titleAlignment</code>.
 * 
 * Defines the alignment of the cell title
 * 
 * Default value is <code>Begin</code>.
 * @returns {sap.ui.core.HorizontalAlign} Value of property <code>titleAlignment</code>
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.getTitleAlignment = function() { return new sap.ui.core.HorizontalAlign(); };

/**
 * Gets current value of property <code>titleLevel</code>.
 * 
 * Defines the aria level of the title
 * This information is e.g. used by assistive technologies like screenreaders to create a hierarchical site map for faster navigation.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.ui.core.TitleLevel} Value of property <code>titleLevel</code>
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.getTitleLevel = function() { return new sap.ui.core.TitleLevel(); };

/**
 * Gets current value of property <code>width</code>.
 * 
 * Defines the width of the cell. Depending on the context of the cell - whether it's in scrollable,
 * or non scrollable row, this property is interpreted in two different ways.
 * If the cell is placed inside a scrollable row - this property defines the width of the cell in
 * percentages. If no value is provided - the default is 40%.
 * If the cell is placed inside a non scrollable row - this property defines the grow factor of the cell
 * compared to the whole row.
 * <b>For example:</b> If you have 2 cells, each with width of 1, this means that they should be of equal size,
 * and they need to fill the whole row. This results in 50% width for each cell. If you have 2 cells,
 * one with width of 1, the other with width of 3, this means that the whole row width is 4, so the first
 * cell will have a width of 25%, the second - 75%.
 * According to the visual guidelines, it is suggested that you only use 25%, 50%, 75% or 100% cells in
 * you applications. For example, 12,5% width is not desirable (1 cell with width 1, and another with width 7)
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>width</code>
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.getWidth = function() { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Removes all the controls from the aggregation <code>content</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent The contentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>title</code>.
 * 
 * Defines the title of the cell
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.setTitle = function(sTitle) { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Sets a new value for property <code>titleAlignment</code>.
 * 
 * Defines the alignment of the cell title
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Begin</code>.
 * @param {sap.ui.core.HorizontalAlign} sTitleAlignment New value for property <code>titleAlignment</code>
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.setTitleAlignment = function(sTitleAlignment) { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Sets a new value for property <code>titleLevel</code>.
 * 
 * Defines the aria level of the title
 * This information is e.g. used by assistive technologies like screenreaders to create a hierarchical site map for faster navigation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.ui.core.TitleLevel} sTitleLevel New value for property <code>titleLevel</code>
 * @returns {sap.ui.layout.BlockLayoutCell} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.BlockLayoutCell.prototype.setTitleLevel = function(sTitleLevel) { return new sap.ui.layout.BlockLayoutCell(); };


// ---- sap.ui.layout.BlockLayoutRow --------------------------------------------------------------------------

/**
 * Constructor for a new BlockLayoutRow.
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
 * <li>{@link #getScrollable scrollable} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.layout.BlockLayoutCell[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * The BlockLayoutRow is used as an aggregation to the BlockLayout. It aggregates Block Layout  cells.
 * The BlockLayoutRow has 2 rendering modes - scrollable and non scrollable.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.34
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.BlockLayoutRow = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation <code>content</code>.
 * @param {sap.ui.layout.BlockLayoutCell}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.BlockLayoutRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.addContent = function(oContent) { return new sap.ui.layout.BlockLayoutRow(); };

/**
 * Destroys all the content in the aggregation <code>content</code>.
 * @returns {sap.ui.layout.BlockLayoutRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.destroyContent = function() { return new sap.ui.layout.BlockLayoutRow(); };

/**
 * Creates a new subclass of class sap.ui.layout.BlockLayoutRow with name <code>sClassName</code>
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
sap.ui.layout.BlockLayoutRow.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * The content cells to be included in the row.
 * @returns {sap.ui.layout.BlockLayoutCell[]}
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.layout.BlockLayoutRow.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.BlockLayoutRow.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>scrollable</code>.
 * 
 * Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get
 * aligned side by side, with horizontal scroll bar for the row.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>scrollable</code>
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.getScrollable = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.layout.BlockLayoutCell</code> in the aggregation <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.layout.BlockLayoutCell}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation <code>content</code>.
 * @param {sap.ui.layout.BlockLayoutCell}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.layout.BlockLayoutRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.BlockLayoutRow(); };

/**
 * Removes all the controls from the aggregation <code>content</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.layout.BlockLayoutCell[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation <code>content</code>.
 * @param {int | string | sap.ui.layout.BlockLayoutCell} vContent The contentto remove or its index or id
 * @returns {sap.ui.layout.BlockLayoutCell} The removed content or <code>null</code>
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.removeContent = function(vContent) { return new sap.ui.layout.BlockLayoutCell(); };

/**
 * Sets a new value for property <code>scrollable</code>.
 * 
 * Sets the rendering mode of the BlockLayoutRow to scrollable. In scrollable mode, the cells get
 * aligned side by side, with horizontal scroll bar for the row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bScrollable New value for property <code>scrollable</code>
 * @returns {sap.ui.layout.BlockLayoutRow} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.BlockLayoutRow.prototype.setScrollable = function(bScrollable) { return new sap.ui.layout.BlockLayoutRow(); };


// ---- sap.ui.layout.DynamicSideContent --------------------------------------------------------------------------

/**
 * Constructor for a new DynamicSideContent.
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
 * <li>{@link #getShowSideContent showSideContent} : boolean (default: true)</li>
 * <li>{@link #getShowMainContent showMainContent} : boolean (default: true)</li>
 * <li>{@link #getSideContentVisibility sideContentVisibility} : sap.ui.layout.SideContentVisibility (default: ShowAboveS)</li>
 * <li>{@link #getSideContentFallDown sideContentFallDown} : sap.ui.layout.SideContentFallDown (default: OnMinimumWidth)</li>
 * <li>{@link #getEqualSplit equalSplit} : boolean (default: false)</li>
 * <li>{@link #getContainerQuery containerQuery} : boolean (default: false)</li>
 * <li>{@link #getSideContentPosition sideContentPosition} : sap.ui.layout.SideContentPosition (default: End)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getMainContent mainContent} : sap.ui.core.Control[] (default)</li>
 * <li>{@link #getSideContent sideContent} : sap.ui.core.Control[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:breakpointChanged breakpointChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * The DynamicSideContent control allows additional (side) content to be displayed alongside or below the main
 * content, within the container the control is used in. There are different size ratios between the main and
 * the side content for the different breakpoints. The side content position (alongside/below the main content)
 * and visibility (visible/hidden) can be configured per breakpoint. There are 4 predefined breakpoints:
 * - Screen width > 1440 px (XL breakpoint)
 * - Screen width <= 1440 px (L breakpoint)
 * - Main content width <= 600 px (M breakpoint)
 * - Screen width <= 720 px (S breakpoint)
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.30
 * 
 */
sap.ui.layout.DynamicSideContent = function(sId,mSettings) {};
/**
 * Fires when the current breakpoint has been changed.
 * @event
 * @since 1.32
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.currentBreakpoint 
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.breakpointChanged = function(oControlEvent) {  };

/**
 * Adds a control to the main content area.
 * Only the main content part in the aggregation is re-rendered.
 * @param {object} oControl Object to be added in the aggregation
 * @returns {sap.m.DynamicSideContent} this pointer for chaining
 * @override
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.addMainContent = function(oControl) { return new sap.m.DynamicSideContent(); };

/**
 * Adds a control to the side content area.
 * Only the side content part in the aggregation is re-rendered.
 * @param {object} oControl Object to be added in the aggregation
 * @returns {sap.m.DynamicSideContent} this pointer for chaining
 * @override
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.addSideContent = function(oControl) { return new sap.m.DynamicSideContent(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>breakpointChanged</code> event of this <code>sap.ui.layout.DynamicSideContent</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.layout.DynamicSideContent</code> itself.
 * 
 * Fires when the current breakpoint has been changed.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.layout.DynamicSideContent</code> itself
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * @since 1.32
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.attachBreakpointChanged = function(oData,fnFunction,oListener) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Destroys all the mainContent in the aggregation <code>mainContent</code>.
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.destroyMainContent = function() { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Destroys all the sideContent in the aggregation <code>sideContent</code>.
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.destroySideContent = function() { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>breakpointChanged</code> event of this <code>sap.ui.layout.DynamicSideContent</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.detachBreakpointChanged = function(fnFunction,oListener) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Creates a new subclass of class sap.ui.layout.DynamicSideContent with name <code>sClassName</code>
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
sap.ui.layout.DynamicSideContent.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>breakpointChanged</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>currentBreakpoint</code> of type <code>string</code></li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * @since 1.32
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.fireBreakpointChanged = function(mArguments) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Gets current value of property <code>containerQuery</code>.
 * 
 * If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding the control, defines the current range.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>containerQuery</code>
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getContainerQuery = function() { return false; };

/**
 * Returns the breakpoint for the current state of the control.
 * @returns {String} currentBreakpoint
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getCurrentBreakpoint = function() { return null; };

/**
 * Gets current value of property <code>equalSplit</code>.
 * 
 * Defines whether the control is in equal split mode. In this mode, the side and the main content
 * take 50:50 percent of the container on all screen sizes except for phone, where the main and
 * side contents are switching visibility using the toggle method.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>equalSplit</code>
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getEqualSplit = function() { return false; };

/**
 * Gets content of aggregation <code>mainContent</code>.
 * 
 * Main content controls.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getMainContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.layout.DynamicSideContent.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.DynamicSideContent.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets the value of showMainContent property.
 * @returns {boolean} Side content visibility state
 * @override
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getShowMainContent = function() { return false; };

/**
 * Gets the value of showSideContent property.
 * @returns {boolean} Side content visibility state
 * @override
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getShowSideContent = function() { return false; };

/**
 * Gets content of aggregation <code>sideContent</code>.
 * 
 * Side content controls.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getSideContent = function() { return new Array(); };

/**
 * Gets current value of property <code>sideContentFallDown</code>.
 * 
 * Determines on which breakpoints the side content falls down below the main content.
 * 
 * Default value is <code>OnMinimumWidth</code>.
 * @returns {sap.ui.layout.SideContentFallDown} Value of property <code>sideContentFallDown</code>
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getSideContentFallDown = function() { return new sap.ui.layout.SideContentFallDown(); };

/**
 * Gets current value of property <code>sideContentPosition</code>.
 * 
 * Determines whether the side content is on the left or on the right side of the main content.
 * 
 * Default value is <code>End</code>.
 * @returns {sap.ui.layout.SideContentPosition} Value of property <code>sideContentPosition</code>
 * @since 1.36
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getSideContentPosition = function() { return new sap.ui.layout.SideContentPosition(); };

/**
 * Gets current value of property <code>sideContentVisibility</code>.
 * 
 * Determines on which breakpoints the side content is visible.
 * 
 * Default value is <code>ShowAboveS</code>.
 * @returns {sap.ui.layout.SideContentVisibility} Value of property <code>sideContentVisibility</code>
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.getSideContentVisibility = function() { return new sap.ui.layout.SideContentVisibility(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>mainContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oMainContent The mainContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.indexOfMainContent = function(oMainContent) { return 0; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>sideContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oSideContent The sideContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.indexOfSideContent = function(oSideContent) { return 0; };

/**
 * Inserts a mainContent into the aggregation <code>mainContent</code>.
 * @param {sap.ui.core.Control}
 *            oMainContent the mainContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the mainContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the mainContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the mainContent is inserted at
 *              the last position
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.insertMainContent = function(oMainContent,iIndex) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Inserts a sideContent into the aggregation <code>sideContent</code>.
 * @param {sap.ui.core.Control}
 *            oSideContent the sideContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the sideContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the sideContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the sideContent is inserted at
 *              the last position
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.insertSideContent = function(oSideContent,iIndex) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Removes all the controls from the aggregation <code>mainContent</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.removeAllMainContent = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>sideContent</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.removeAllSideContent = function() { return new Array(); };

/**
 * Removes a mainContent from the aggregation <code>mainContent</code>.
 * @param {int | string | sap.ui.core.Control} vMainContent The mainContentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed mainContent or <code>null</code>
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.removeMainContent = function(vMainContent) { return new sap.ui.core.Control(); };

/**
 * Removes a sideContent from the aggregation <code>sideContent</code>.
 * @param {int | string | sap.ui.core.Control} vSideContent The sideContentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed sideContent or <code>null</code>
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.removeSideContent = function(vSideContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>containerQuery</code>.
 * 
 * If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding the control, defines the current range.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bContainerQuery New value for property <code>containerQuery</code>
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.setContainerQuery = function(bContainerQuery) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Sets or unsets the page in equalSplit mode.
 * @param {boolean}[bState] Determines if the page is set to equalSplit mode
 * @returns {sap.m.DynamicSideContent} this pointer for chaining
 * @override
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.setEqualSplit = function(bState) { return new sap.m.DynamicSideContent(); };

/**
 * Sets the showMainContent property.
 * @param {boolean} bVisible Determines if the main content part is visible
 * @param {boolean} bSuppressVisualUpdate Determines if the visual state is updated
 * @returns {sap.m.DynamicSideContent} this pointer for chaining
 * @override
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.setShowMainContent = function(bVisible,bSuppressVisualUpdate) { return new sap.m.DynamicSideContent(); };

/**
 * Sets the showSideContent property.
 * @param {boolean} bVisible Determines if the side content part is visible
 * @param {boolean} bSuppressVisualUpdate Determines if the visual state is updated
 * @returns {sap.m.DynamicSideContent} this pointer for chaining
 * @override
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.setShowSideContent = function(bVisible,bSuppressVisualUpdate) { return new sap.m.DynamicSideContent(); };

/**
 * Sets a new value for property <code>sideContentFallDown</code>.
 * 
 * Determines on which breakpoints the side content falls down below the main content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>OnMinimumWidth</code>.
 * @param {sap.ui.layout.SideContentFallDown} sSideContentFallDown New value for property <code>sideContentFallDown</code>
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.setSideContentFallDown = function(sSideContentFallDown) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Sets a new value for property <code>sideContentPosition</code>.
 * 
 * Determines whether the side content is on the left or on the right side of the main content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>End</code>.
 * @param {sap.ui.layout.SideContentPosition} sSideContentPosition New value for property <code>sideContentPosition</code>
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.setSideContentPosition = function(sSideContentPosition) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Sets a new value for property <code>sideContentVisibility</code>.
 * 
 * Determines on which breakpoints the side content is visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>ShowAboveS</code>.
 * @param {sap.ui.layout.SideContentVisibility} sSideContentVisibility New value for property <code>sideContentVisibility</code>
 * @returns {sap.ui.layout.DynamicSideContent} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.setSideContentVisibility = function(sSideContentVisibility) { return new sap.ui.layout.DynamicSideContent(); };

/**
 * Used for the toggle button functionality.
 * When the control is on a phone screen size only, one control area is visible.
 * This helper method is used to implement a button/switch for changing
 * between the main and side content areas.
 * Only works if the current breakpoint is "S".
 * @returns {sap.m.DynamicSideContent} this pointer for chaining
 * @public
 * 
 */
sap.ui.layout.DynamicSideContent.prototype.toggle = function() { return new sap.m.DynamicSideContent(); };


// ---- sap.ui.layout.FixFlex --------------------------------------------------------------------------

/**
 * Constructor for a new FixFlex.
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
 * <li>{@link #getVertical vertical} : boolean (default: true)</li>
 * <li>{@link #getFixFirst fixFirst} : boolean (default: true)</li>
 * <li>{@link #getFixContentSize fixContentSize} : sap.ui.core.CSSSize (default: auto)</li>
 * <li>{@link #getMinFlexSize minFlexSize} : int (default: 0)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFixContent fixContent} : sap.ui.core.Control[]</li>
 * <li>{@link #getFlexContent flexContent} : sap.ui.core.Control</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The FixFlex control builds the container for a layout with a fixed and a flexible part. The flexible container adapts its size to the fix container. The fix container can hold any number of controls, while the flexible container can hold only one.
 * 
 * In order for the FixFlex to stretch properly, the parent element, in which the control is placed, needs to have a specified height or needs to have an absolute position.
 * 
 * Warning: Avoid nesting FixFlex in other flexbox based layout controls (FixFlex, FlexBox, Hbox, Vbox). Otherwise contents may be not accessible or multiple scrollbars can appear.
 * 
 * Note: If the child control of the flex or the fix container has width/height bigger than the container itself, the child control will be cropped in the view. If minFlexSize is set, then a scrollbar is shown in the flexible part, depending on the vertical property.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.25.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.FixFlex = function(sId,mSettings) {};
/**
 * Adds some fixContent to the aggregation <code>fixContent</code>.
 * @param {sap.ui.core.Control}
 *            oFixContent the fixContent to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.addFixContent = function(oFixContent) { return new sap.ui.layout.FixFlex(); };

/**
 * Destroys all the fixContent in the aggregation <code>fixContent</code>.
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.destroyFixContent = function() { return new sap.ui.layout.FixFlex(); };

/**
 * Destroys the flexContent in the aggregation <code>flexContent</code>.
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.destroyFlexContent = function() { return new sap.ui.layout.FixFlex(); };

/**
 * Creates a new subclass of class sap.ui.layout.FixFlex with name <code>sClassName</code>
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
sap.ui.layout.FixFlex.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>fixContent</code>.
 * 
 * Controls in the fixed part of the layout.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.getFixContent = function() { return new Array(); };

/**
 * Gets current value of property <code>fixContentSize</code>.
 * 
 * Determines the height (if the vertical property is "true") or the width (if the vertical property is "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large as its content. In this case the content cannot use percentage sizes.
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>fixContentSize</code>
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.getFixContentSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property <code>fixFirst</code>.
 * 
 * Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or beginning/bottom ( if the value is "false").
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>fixFirst</code>
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.getFixFirst = function() { return false; };

/**
 * Gets content of aggregation <code>flexContent</code>.
 * 
 * Control in the stretching part of the layout.
 * @returns {sap.ui.core.Control}
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.getFlexContent = function() { return new sap.ui.core.Control(); };

/**
 * Returns a metadata object for class sap.ui.layout.FixFlex.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.FixFlex.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>minFlexSize</code>.
 * 
 * Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control in the flexible part is larger then the available flexible size on the screen and if the available size for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire FixFlex control.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>minFlexSize</code>
 * @since 1.29
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.getMinFlexSize = function() { return 0; };

/**
 * Gets current value of property <code>vertical</code>.
 * 
 * Determines the direction of the layout of child elements. True for vertical and false for horizontal layout.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>vertical</code>
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.getVertical = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>fixContent</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oFixContent The fixContent whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.indexOfFixContent = function(oFixContent) { return 0; };

/**
 * Inserts a fixContent into the aggregation <code>fixContent</code>.
 * @param {sap.ui.core.Control}
 *            oFixContent the fixContent to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the fixContent should be inserted at; for
 *              a negative value of <code>iIndex</code>, the fixContent is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the fixContent is inserted at
 *              the last position
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.insertFixContent = function(oFixContent,iIndex) { return new sap.ui.layout.FixFlex(); };

/**
 * Removes all the controls from the aggregation <code>fixContent</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.removeAllFixContent = function() { return new Array(); };

/**
 * Removes a fixContent from the aggregation <code>fixContent</code>.
 * @param {int | string | sap.ui.core.Control} vFixContent The fixContentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed fixContent or <code>null</code>
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.removeFixContent = function(vFixContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>fixContentSize</code>.
 * 
 * Determines the height (if the vertical property is "true") or the width (if the vertical property is "false") of the fixed area. If left at the default value "auto", the fixed-size area will be as large as its content. In this case the content cannot use percentage sizes.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.core.CSSSize} sFixContentSize New value for property <code>fixContentSize</code>
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.setFixContentSize = function(sFixContentSize) { return new sap.ui.layout.FixFlex(); };

/**
 * Sets a new value for property <code>fixFirst</code>.
 * 
 * Determines whether the fixed-size area should be on the beginning/top ( if the value is "true") or beginning/bottom ( if the value is "false").
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bFixFirst New value for property <code>fixFirst</code>
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.setFixFirst = function(bFixFirst) { return new sap.ui.layout.FixFlex(); };

/**
 * Sets the aggregated <code>flexContent</code>.
 * @param {sap.ui.core.Control} oFlexContent The flexContent to set
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.setFlexContent = function(oFlexContent) { return new sap.ui.layout.FixFlex(); };

/**
 * Sets a new value for property <code>minFlexSize</code>.
 * 
 * Enables scrolling inside the flexible part. The given size is calculated in "px". If the child control in the flexible part is larger then the available flexible size on the screen and if the available size for the flexible part is smaller or equal to the minFlexSize value, the scroll will be for the entire FixFlex control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMinFlexSize New value for property <code>minFlexSize</code>
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * @since 1.29
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.setMinFlexSize = function(iMinFlexSize) { return new sap.ui.layout.FixFlex(); };

/**
 * Sets a new value for property <code>vertical</code>.
 * 
 * Determines the direction of the layout of child elements. True for vertical and false for horizontal layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVertical New value for property <code>vertical</code>
 * @returns {sap.ui.layout.FixFlex} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.FixFlex.prototype.setVertical = function(bVertical) { return new sap.ui.layout.FixFlex(); };


// ---- sap.ui.layout.form.Form --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.Form.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEditable editable} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFormContainers formContainers} : sap.ui.layout.form.FormContainer[] (default)</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title</li>
 * <li>{@link #getToolbar toolbar} : sap.ui.core.Toolbar</li>
 * <li>{@link #getLayout layout} : sap.ui.layout.form.FormLayout</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Form control.
 * A <code>Form</code> is structured into <code>FormContainers</code>. Each <code>FormContainer</code> consists of <code>FormElements</code>.
 * The <code>FormElements</code> consists of a label and the form fields.
 * A <code>Form</code> doesn't render its content by itself. The rendering is done by the assigned <code>FormLayout</code>.
 * This is so that the rendering can be adopted to new UI requirements without changing the Form itself.
 * 
 * For the content of a <code>Form</code>, <code>VariantLayoutData</code> are supported to allow simple switching of the <code>FormLayout</code>.
 * <code>LayoutData</code> on the content can be used to overwrite the default layout of the code>Form</code>.
 * 
 * <b>Note:</b> Do not put any layout controls into the <code>FormElements</code>. This could destroy the visual layout,
 * keyboard support and screen-reader support.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.Form = function(sId,mSettings) {};
/**
 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.layout.form.Form(); };

/**
 * Adds some formContainer to the aggregation <code>formContainers</code>.
 * @param {sap.ui.layout.form.FormContainer}
 *            oFormContainer the formContainer to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.addFormContainer = function(oFormContainer) { return new sap.ui.layout.form.Form(); };

/**
 * Destroys all the formContainers in the aggregation <code>formContainers</code>.
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.destroyFormContainers = function() { return new sap.ui.layout.form.Form(); };

/**
 * Destroys the layout in the aggregation <code>layout</code>.
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.destroyLayout = function() { return new sap.ui.layout.form.Form(); };

/**
 * Destroys the title in the aggregation <code>title</code>.
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.destroyTitle = function() { return new sap.ui.layout.form.Form(); };

/**
 * Destroys the toolbar in the aggregation <code>toolbar</code>.
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.destroyToolbar = function() { return new sap.ui.layout.form.Form(); };

/**
 * Creates a new subclass of class sap.ui.layout.form.Form with name <code>sClassName</code>
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
sap.ui.layout.form.Form.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns array of IDs of the elements which are the current targets of the association <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]}
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property <code>editable</code>.
 * 
 * Applies a device and theme specific line-height to the form rows if the form has editable content.
 * If set, all (not only the editable) rows of the form will get the line height of editable fields.
 * The accessibility aria-readonly attribute is set according to this property.
 * <b>Note:</b> The setting of the property has no influence on the editable functionality of the form's content.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>editable</code>
 * @since 1.20.0
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getEditable = function() { return false; };

/**
 * Gets content of aggregation <code>formContainers</code>.
 * 
 * Containers with the content of the form. A <code>FormContainer</code> represents a group inside the <code>Form</code>.
 * @returns {sap.ui.layout.form.FormContainer[]}
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getFormContainers = function() { return new Array(); };

/**
 * Gets content of aggregation <code>layout</code>.
 * 
 * Layout of the <code>Form</code>. The assigned <code>Layout</code> renders the <code>Form</code>.
 * We suggest using the <code>ResponsiveGridLayout</code> for rendering a <code>Form</code>, as its responsiveness allows the available space to be used in the best way possible.
 * @returns {sap.ui.layout.form.FormLayout}
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getLayout = function() { return new sap.ui.layout.form.FormLayout(); };

/**
 * Returns a metadata object for class sap.ui.layout.form.Form.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.Form.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>title</code>.
 * 
 * Title of the <code>Form</code>. Can either be a <code>Title</code> object, or a string.
 * If a <code>Title</code> object it used, the style of the title can be set.
 * 
 * <b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.
 * @returns {sap.ui.core.Title}
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getTitle = function() { return new sap.ui.core.Title(); };

/**
 * Gets content of aggregation <code>toolbar</code>.
 * 
 * Toolbar of the <code>Form</code>.
 * 
 * <b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.
 * If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>.
 * In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association.
 * @returns {sap.ui.core.Toolbar}
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getToolbar = function() { return new sap.ui.core.Toolbar(); };

/**
 * Gets current value of property <code>width</code>.
 * 
 * Width of the <code>Form</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.layout.form.FormContainer</code> in the aggregation <code>formContainers</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.layout.form.FormContainer}
 *           oFormContainer The formContainer whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.indexOfFormContainer = function(oFormContainer) { return 0; };

/**
 * Inserts a formContainer into the aggregation <code>formContainers</code>.
 * @param {sap.ui.layout.form.FormContainer}
 *            oFormContainer the formContainer to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the formContainer should be inserted at; for
 *              a negative value of <code>iIndex</code>, the formContainer is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the formContainer is inserted at
 *              the last position
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.insertFormContainer = function(oFormContainer,iIndex) { return new sap.ui.layout.form.Form(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>formContainers</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.layout.form.FormContainer[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.removeAllFormContainers = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledByto be removed or its index or ID
 * @returns {sap.ui.core.Control} the removed ariaLabelledBy or <code>null</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes a formContainer from the aggregation <code>formContainers</code>.
 * @param {int | string | sap.ui.layout.form.FormContainer} vFormContainer The formContainerto remove or its index or id
 * @returns {sap.ui.layout.form.FormContainer} The removed formContainer or <code>null</code>
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.removeFormContainer = function(vFormContainer) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Sets a new value for property <code>editable</code>.
 * 
 * Applies a device and theme specific line-height to the form rows if the form has editable content.
 * If set, all (not only the editable) rows of the form will get the line height of editable fields.
 * The accessibility aria-readonly attribute is set according to this property.
 * <b>Note:</b> The setting of the property has no influence on the editable functionality of the form's content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bEditable New value for property <code>editable</code>
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @since 1.20.0
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.setEditable = function(bEditable) { return new sap.ui.layout.form.Form(); };

/**
 * Sets the aggregated <code>layout</code>.
 * @param {sap.ui.layout.form.FormLayout} oLayout The layout to set
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.setLayout = function(oLayout) { return new sap.ui.layout.form.Form(); };

/**
 * Sets the aggregated <code>title</code>.
 * @param {sap.ui.core.Title} oTitle The title to set
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.setTitle = function(oTitle) { return new sap.ui.layout.form.Form(); };

/**
 * Sets the aggregated <code>toolbar</code>.
 * @param {sap.ui.core.Toolbar} oToolbar The toolbar to set
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.setToolbar = function(oToolbar) { return new sap.ui.layout.form.Form(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * Width of the <code>Form</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.layout.form.Form} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.Form.prototype.setWidth = function(sWidth) { return new sap.ui.layout.form.Form(); };


// ---- sap.ui.layout.form.FormContainer --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.FormContainer.
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
 * <li>{@link #getExpanded expanded} : boolean (default: true)</li>
 * <li>{@link #getExpandable expandable} : boolean (default: false)</li>
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getFormElements formElements} : sap.ui.layout.form.FormElement[] (default)</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title</li>
 * <li>{@link #getToolbar toolbar} : sap.ui.core.Toolbar</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] Id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A <code>FormContainer</code> represents a group inside a <code>Form</code>. It consists of <code>FormElements</code>.
 * The rendering of the <code>FormContainer</code> is done by the <code>FormLayout</code> assigned to the <code>Form</code>.
 * @extends sap.ui.core.Element
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.FormContainer = function(sId,mSettings) {};
/**
 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Adds some formElement to the aggregation <code>formElements</code>.
 * @param {sap.ui.layout.form.FormElement}
 *            oFormElement the formElement to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.addFormElement = function(oFormElement) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Destroys all the formElements in the aggregation <code>formElements</code>.
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.destroyFormElements = function() { return new sap.ui.layout.form.FormContainer(); };

/**
 * Destroys the title in the aggregation <code>title</code>.
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.destroyTitle = function() { return new sap.ui.layout.form.FormContainer(); };

/**
 * Destroys the toolbar in the aggregation <code>toolbar</code>.
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.destroyToolbar = function() { return new sap.ui.layout.form.FormContainer(); };

/**
 * Creates a new subclass of class sap.ui.layout.form.FormContainer with name <code>sClassName</code>
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
sap.ui.layout.form.FormContainer.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns array of IDs of the elements which are the current targets of the association <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]}
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property <code>expandable</code>.
 * 
 * Defines if the <code>FormContainer</code> is expandable.
 * <b>Note:</b> The expander icon will only be shown if a <code>title</code> is set for the <code>FormContainer</code>.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>expandable</code>
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getExpandable = function() { return false; };

/**
 * Gets current value of property <code>expanded</code>.
 * 
 * Container is expanded.
 * <b>Note:</b> This property only works if <code>expandable</code> is set to <code>true</code>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>expanded</code>
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getExpanded = function() { return false; };

/**
 * Gets content of aggregation <code>formElements</code>.
 * 
 * The <code>FormElements</code> contain the content (labels and fields) of the <code>FormContainers</code>.
 * @returns {sap.ui.layout.form.FormElement[]}
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getFormElements = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.layout.form.FormContainer.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.FormContainer.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>title</code>.
 * 
 * Title of the <code>FormContainer</code>. Can either be a <code>Title</code> object, or a string.
 * If a <code>Title</code> object is used, the style of the title can be set.
 * 
 * <b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.
 * @returns {sap.ui.core.Title}
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getTitle = function() { return new sap.ui.core.Title(); };

/**
 * Gets content of aggregation <code>toolbar</code>.
 * 
 * Toolbar of the <code>FormContainer</code>.
 * 
 * <b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.
 * If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>.
 * In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association.
 * @returns {sap.ui.core.Toolbar}
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getToolbar = function() { return new sap.ui.core.Toolbar(); };

/**
 * Gets current value of property <code>visible</code>.
 * 
 * If set to <code>false</code>, the <code>FormContainer</code> is not rendered.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.getVisible = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.layout.form.FormElement</code> in the aggregation <code>formElements</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.layout.form.FormElement}
 *           oFormElement The formElement whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.indexOfFormElement = function(oFormElement) { return 0; };

/**
 * Inserts a formElement into the aggregation <code>formElements</code>.
 * @param {sap.ui.layout.form.FormElement}
 *            oFormElement the formElement to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the formElement should be inserted at; for
 *              a negative value of <code>iIndex</code>, the formElement is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the formElement is inserted at
 *              the last position
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.insertFormElement = function(oFormElement,iIndex) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>formElements</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.layout.form.FormElement[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.removeAllFormElements = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledByto be removed or its index or ID
 * @returns {sap.ui.core.Control} the removed ariaLabelledBy or <code>null</code>
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes a formElement from the aggregation <code>formElements</code>.
 * @param {int | string | sap.ui.layout.form.FormElement} vFormElement The formElementto remove or its index or id
 * @returns {sap.ui.layout.form.FormElement} The removed formElement or <code>null</code>
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.removeFormElement = function(vFormElement) { return new sap.ui.layout.form.FormElement(); };

/**
 * Sets a new value for property <code>expandable</code>.
 * 
 * Defines if the <code>FormContainer</code> is expandable.
 * <b>Note:</b> The expander icon will only be shown if a <code>title</code> is set for the <code>FormContainer</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bExpandable New value for property <code>expandable</code>
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.setExpandable = function(bExpandable) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Sets a new value for property <code>expanded</code>.
 * 
 * Container is expanded.
 * <b>Note:</b> This property only works if <code>expandable</code> is set to <code>true</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bExpanded New value for property <code>expanded</code>
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.setExpanded = function(bExpanded) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Sets the aggregated <code>title</code>.
 * @param {sap.ui.core.Title} oTitle The title to set
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.setTitle = function(oTitle) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Sets the aggregated <code>toolbar</code>.
 * @param {sap.ui.core.Toolbar} oToolbar The toolbar to set
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.setToolbar = function(oToolbar) { return new sap.ui.layout.form.FormContainer(); };

/**
 * Sets a new value for property <code>visible</code>.
 * 
 * If set to <code>false</code>, the <code>FormContainer</code> is not rendered.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.ui.layout.form.FormContainer} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormContainer.prototype.setVisible = function(bVisible) { return new sap.ui.layout.form.FormContainer(); };


// ---- sap.ui.layout.form.FormElement --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.FormElement.
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
 * <li>{@link #getVisible visible} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getLabel label} : sap.ui.core.Label</li>
 * <li>{@link #getFields fields} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] Id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A <code>FormElement</code> represents a row in a <code>FormContainer</code>.
 * A <code>FormElement</code> is a combination of one label and different controls associated to this label.
 * @extends sap.ui.core.Element
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.FormElement = function(sId,mSettings) {};
/**
 * Adds some field to the aggregation <code>fields</code>.
 * @param {sap.ui.core.Control}
 *            oField the field to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.form.FormElement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.addField = function(oField) { return new sap.ui.layout.form.FormElement(); };

/**
 * Destroys all the fields in the aggregation <code>fields</code>.
 * @returns {sap.ui.layout.form.FormElement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.destroyFields = function() { return new sap.ui.layout.form.FormElement(); };

/**
 * Destroys the label in the aggregation <code>label</code>.
 * @returns {sap.ui.layout.form.FormElement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.destroyLabel = function() { return new sap.ui.layout.form.FormElement(); };

/**
 * Creates a new subclass of class sap.ui.layout.form.FormElement with name <code>sClassName</code>
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
sap.ui.layout.form.FormElement.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>fields</code>.
 * 
 * Formular controls that belong together to be displayed in one row of a <code>Form</code>.
 * 
 * <b>Note:</b> Do not put any layout controls in here. This could destroy the visual layout,
 * keyboard support and screen-reader support.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.getFields = function() { return new Array(); };

/**
 * Gets content of aggregation <code>label</code>.
 * 
 * Label of the fields. Can either be a <code>Label</code> object, or a string.
 * If a <code>Label</code> object is used, the properties of the <code>Label</code> can be set.
 * If no assignment between <code>Label</code> and the fields is set, it will be done automatically by the
 * <code>FormElement</code>. In this case the <code>Label</code> is assigned to the fields of the <code>FormElement</code>.
 * @returns {sap.ui.core.Label}
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.getLabel = function() { return new sap.ui.core.Label(); };

/**
 * Returns the <code>Label</code> of the <code>FormElement</code>, even if the <code>Label</code> is assigned as string.
 * The <code>FormLayout</code> needs the information of the label to render the <code>Form</code>.
 * @returns {sap.ui.core.Label} <code>Label</code> control used to render the label
 * @public
 * @ui5-metamodel This method also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.FormElement.prototype.getLabelControl = function() { return new sap.ui.core.Label(); };

/**
 * Returns a metadata object for class sap.ui.layout.form.FormElement.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.FormElement.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>visible</code>.
 * 
 * If set to <code>false</code>, the <code>FormElement</code> is not rendered.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visible</code>
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.getVisible = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>fields</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oField The field whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.indexOfField = function(oField) { return 0; };

/**
 * Inserts a field into the aggregation <code>fields</code>.
 * @param {sap.ui.core.Control}
 *            oField the field to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the field should be inserted at; for
 *              a negative value of <code>iIndex</code>, the field is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the field is inserted at
 *              the last position
 * @returns {sap.ui.layout.form.FormElement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.insertField = function(oField,iIndex) { return new sap.ui.layout.form.FormElement(); };

/**
 * Removes all the controls from the aggregation <code>fields</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.removeAllFields = function() { return new Array(); };

/**
 * Removes a field from the aggregation <code>fields</code>.
 * @param {int | string | sap.ui.core.Control} vField The fieldto remove or its index or id
 * @returns {sap.ui.core.Control} The removed field or <code>null</code>
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.removeField = function(vField) { return new sap.ui.core.Control(); };

/**
 * Sets the aggregated <code>label</code>.
 * @param {sap.ui.core.Label} oLabel The label to set
 * @returns {sap.ui.layout.form.FormElement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.setLabel = function(oLabel) { return new sap.ui.layout.form.FormElement(); };

/**
 * Sets a new value for property <code>visible</code>.
 * 
 * If set to <code>false</code>, the <code>FormElement</code> is not rendered.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisible New value for property <code>visible</code>
 * @returns {sap.ui.layout.form.FormElement} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.FormElement.prototype.setVisible = function(bVisible) { return new sap.ui.layout.form.FormElement(); };


// ---- sap.ui.layout.form.FormLayout --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.FormLayout.
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
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.ui.layout.BackgroundDesign (default: Translucent)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] Id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Base layout to render a <code>Form</code>.
 * Other layouts to render a <code>Form</code> must inherit from this one.
 * <b>Note:</b> This control must not be used to render a <code>Form</code> in productive applications as it does not fulfill any
 * design guidelines and usability standards.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.FormLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.FormLayout with name <code>sClassName</code>
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
sap.ui.layout.form.FormLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>backgroundDesign</code>.
 * 
 * Specifies the background color of the <code>Form</code> content.
 * 
 * The visualization of the different options depends on the used theme.
 * 
 * Default value is <code>Translucent</code>.
 * @returns {sap.ui.layout.BackgroundDesign} Value of property <code>backgroundDesign</code>
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.FormLayout.prototype.getBackgroundDesign = function() { return new sap.ui.layout.BackgroundDesign(); };

/**
 * Returns a metadata object for class sap.ui.layout.form.FormLayout.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.FormLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property <code>backgroundDesign</code>.
 * 
 * Specifies the background color of the <code>Form</code> content.
 * 
 * The visualization of the different options depends on the used theme.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Translucent</code>.
 * @param {sap.ui.layout.BackgroundDesign} sBackgroundDesign New value for property <code>backgroundDesign</code>
 * @returns {sap.ui.layout.form.FormLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.FormLayout.prototype.setBackgroundDesign = function(sBackgroundDesign) { return new sap.ui.layout.form.FormLayout(); };


// ---- sap.ui.layout.form.GridContainerData --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.GridContainerData.
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
 * <li>{@link #getHalfGrid halfGrid} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * @param {string} [sId] Id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * <code>GridLayout</code>-specific properties for <code>FormContainers</code>.
 * @extends sap.ui.core.LayoutData
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.GridContainerData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.GridContainerData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridContainerData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>halfGrid</code>.
 * 
 * If set, the container takes half the width of the <code>Form</code> (8 cells), if not it takes the full width (16 cells).
 * If the <code>GridLayout</code> is set to <code>singleColumn</code>, the full width of the grid is only 8 cells. So containers are rendered only once per row.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>halfGrid</code>
 * @public
 * 
 */
sap.ui.layout.form.GridContainerData.prototype.getHalfGrid = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.layout.form.GridContainerData.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridContainerData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property <code>halfGrid</code>.
 * 
 * If set, the container takes half the width of the <code>Form</code> (8 cells), if not it takes the full width (16 cells).
 * If the <code>GridLayout</code> is set to <code>singleColumn</code>, the full width of the grid is only 8 cells. So containers are rendered only once per row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bHalfGrid New value for property <code>halfGrid</code>
 * @returns {sap.ui.layout.form.GridContainerData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.GridContainerData.prototype.setHalfGrid = function(bHalfGrid) { return new sap.ui.layout.form.GridContainerData(); };


// ---- sap.ui.layout.form.GridElementCells --------------------------------------------------------------------------


// ---- sap.ui.layout.form.GridElementData --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.GridElementData.
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
 * <li>{@link #getHCells hCells} : sap.ui.layout.form.GridElementCells (default: auto)</li>
 * <li>{@link #getVCells vCells} : int (default: 1)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * @param {string} [sId] Id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The <code>GridLayout</code>-specific layout data for <code>FormElement</code> fields.
 * @extends sap.ui.core.LayoutData
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.GridElementData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.GridElementData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridElementData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>hCells</code>.
 * 
 * Number of cells in horizontal direction.
 * If set to "auto" the size is determined by the number of fields and the available cells. For labels the auto size is 3 cells.
 * If set to "full" only one field is allowed within the <code>FormElement</code>. It gets the full width of the row and the label is displayed above. <b>Note:</b> For labels full size has no effect.
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.ui.layout.form.GridElementCells} Value of property <code>hCells</code>
 * @public
 * 
 */
sap.ui.layout.form.GridElementData.prototype.getHCells = function() { return new sap.ui.layout.form.GridElementCells(); };

/**
 * Returns a metadata object for class sap.ui.layout.form.GridElementData.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridElementData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>vCells</code>.
 * 
 * Number of cells in vertical direction.
 * <b>Note:</b> This property has no effect for labels.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>vCells</code>
 * @public
 * 
 */
sap.ui.layout.form.GridElementData.prototype.getVCells = function() { return 0; };

/**
 * Sets a new value for property <code>hCells</code>.
 * 
 * Number of cells in horizontal direction.
 * If set to "auto" the size is determined by the number of fields and the available cells. For labels the auto size is 3 cells.
 * If set to "full" only one field is allowed within the <code>FormElement</code>. It gets the full width of the row and the label is displayed above. <b>Note:</b> For labels full size has no effect.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.layout.form.GridElementCells} sHCells New value for property <code>hCells</code>
 * @returns {sap.ui.layout.form.GridElementData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.GridElementData.prototype.setHCells = function(sHCells) { return new sap.ui.layout.form.GridElementData(); };

/**
 * Sets a new value for property <code>vCells</code>.
 * 
 * Number of cells in vertical direction.
 * <b>Note:</b> This property has no effect for labels.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iVCells New value for property <code>vCells</code>
 * @returns {sap.ui.layout.form.GridElementData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.GridElementData.prototype.setVCells = function(iVCells) { return new sap.ui.layout.form.GridElementData(); };


// ---- sap.ui.layout.form.GridLayout --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.GridLayout.
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
 * <li>{@link #getSingleColumn singleColumn} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.layout.form.FormLayout#constructor sap.ui.layout.form.FormLayout}
 * can be used as well.
 * @param {string} [sId] Id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * This <code>FormLayout</code> renders a <code>Form</code> using a HTML-table based grid.
 * This can be a 16 column grid or an 8 column grid. The grid is stable, so the alignment of the fields is the same for all screen sizes or widths of the <code>Form</code>.
 * Only the width of the single grid columns depends on the available width.
 * 
 * To adjust the appearance inside the <code>GridLayout</code>, you can use <code>GridContainerData</code> for <code>FormContainers</code>
 * and <code>GridElementData</code> for content fields.
 * 
 * <b>Note:</b> If content fields have a <code>width</code> property this will be ignored, as the width of the controls is set by the grid cells.
 * 
 * This control cannot be used stand alone, it only renders a <code>Form</code>, so it must be assigned to a <code>Form</code>.
 * @extends sap.ui.layout.form.FormLayout
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.GridLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.GridLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.layout.form.GridLayout.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.GridLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>singleColumn</code>.
 * 
 * If set, the grid renders only one <code>FormContainer</code> per column. That means one <code>FormContainer</code> is below the other. The whole grid has 8 cells per row.
 * 
 * If not set, <code>FormContainer</code> can use the full width of the grid or two <code>FormContainers</code> can be placed beside each other. In this case the whole grid has 16 cells per row.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>singleColumn</code>
 * @public
 * 
 */
sap.ui.layout.form.GridLayout.prototype.getSingleColumn = function() { return false; };

/**
 * Sets a new value for property <code>singleColumn</code>.
 * 
 * If set, the grid renders only one <code>FormContainer</code> per column. That means one <code>FormContainer</code> is below the other. The whole grid has 8 cells per row.
 * 
 * If not set, <code>FormContainer</code> can use the full width of the grid or two <code>FormContainers</code> can be placed beside each other. In this case the whole grid has 16 cells per row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSingleColumn New value for property <code>singleColumn</code>
 * @returns {sap.ui.layout.form.GridLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.GridLayout.prototype.setSingleColumn = function(bSingleColumn) { return new sap.ui.layout.form.GridLayout(); };


// ---- sap.ui.layout.form.ResponsiveGridLayout --------------------------------------------------------------------------

/**
 * Constructor for a new <code>sap.ui.layout.form.ResponsiveGridLayout</code>.
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
 * <li>{@link #getLabelSpanXL labelSpanXL} : int (default: -1)</li>
 * <li>{@link #getLabelSpanL labelSpanL} : int (default: 4)</li>
 * <li>{@link #getLabelSpanM labelSpanM} : int (default: 2)</li>
 * <li>{@link #getLabelSpanS labelSpanS} : int (default: 12)</li>
 * <li>{@link #getAdjustLabelSpan adjustLabelSpan} : boolean (default: true)</li>
 * <li>{@link #getEmptySpanXL emptySpanXL} : int (default: -1)</li>
 * <li>{@link #getEmptySpanL emptySpanL} : int (default: 0)</li>
 * <li>{@link #getEmptySpanM emptySpanM} : int (default: 0)</li>
 * <li>{@link #getEmptySpanS emptySpanS} : int (default: 0)</li>
 * <li>{@link #getColumnsXL columnsXL} : int (default: -1)</li>
 * <li>{@link #getColumnsL columnsL} : int (default: 2)</li>
 * <li>{@link #getColumnsM columnsM} : int (default: 1)</li>
 * <li>{@link #getSingleContainerFullSize singleContainerFullSize} : boolean (default: true)</li>
 * <li>{@link #getBreakpointXL breakpointXL} : int (default: 1440)</li>
 * <li>{@link #getBreakpointL breakpointL} : int (default: 1024)</li>
 * <li>{@link #getBreakpointM breakpointM} : int (default: 600)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.layout.form.FormLayout#constructor sap.ui.layout.form.FormLayout}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * Renders a <code>Form</code> using a responsive grid. Internally the <code>Grid</code> control is used for rendering.
 * Using this layout, the <code>Form</code> is rendered in a responsive way.
 * Depending on the available space, the <code>FormContainers</code> are rendered in one or different columns and the labels are rendered in the same row as the fields or above the fields.
 * This behavior can be influenced by the properties of this layout control.
 * 
 * On the <code>FormContainers</code>, labels and content fields, <code>GridData</code> can be used to change the default rendering.
 * <code>GridData</code> is not supported for <code>FormElements</code>.
 * 
 * <b>Note:</b> If <code>GridData</code> is used, this may result in a much more complex layout than the default one.
 * This means that in some cases, the calculation for the other content may not bring the expected result.
 * In such cases, <code>GridData</code> should be used for all content controls to disable the default behavior.
 * 
 * This control cannot be used standalone, it only renders a <code>Form</code>, so it must be assigned to a <code>Form</code>.
 * @extends sap.ui.layout.form.FormLayout
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.ResponsiveGridLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>adjustLabelSpan</code>.
 * 
 * If set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row.
 * If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label.
 * This is the same for medium and large <code>Forms</code>.
 * This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code>
 * (because every <code>FormContainer</code> has its own grid inside).
 * 
 * If not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size.
 * The number of <code>FormContainers</code> doesn't matter in this case.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>adjustLabelSpan</code>
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getAdjustLabelSpan = function() { return false; };

/**
 * Gets current value of property <code>breakpointL</code>.
 * 
 * Breakpoint (in pixel) between Medium size and Large size.
 * 
 * Default value is <code>1024</code>.
 * @returns {int} Value of property <code>breakpointL</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getBreakpointL = function() { return 0; };

/**
 * Gets current value of property <code>breakpointM</code>.
 * 
 * Breakpoint (in pixel) between Small size and Medium size.
 * 
 * Default value is <code>600</code>.
 * @returns {int} Value of property <code>breakpointM</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getBreakpointM = function() { return 0; };

/**
 * Gets current value of property <code>breakpointXL</code>.
 * 
 * Breakpoint (in pixel) between large size and extra large (XL) size.
 * 
 * Default value is <code>1440</code>.
 * @returns {int} Value of property <code>breakpointXL</code>
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getBreakpointXL = function() { return 0; };

/**
 * Gets current value of property <code>columnsL</code>.
 * 
 * Number of columns for large size.
 * 
 * The number of columns for large size must not be smaller than the number of columns for medium size.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>columnsL</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getColumnsL = function() { return 0; };

/**
 * Gets current value of property <code>columnsM</code>.
 * 
 * Number of columns for medium size.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>columnsM</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getColumnsM = function() { return 0; };

/**
 * Gets current value of property <code>columnsXL</code>.
 * 
 * Number of columns for extra large size.
 * 
 * The number of columns for extra large size must not be smaller than the number of columns for large size.
 * <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>columnsXL</code>
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getColumnsXL = function() { return 0; };

/**
 * Gets current value of property <code>emptySpanL</code>.
 * 
 * Number of grid cells that are empty at the end of each line on large size.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>emptySpanL</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getEmptySpanL = function() { return 0; };

/**
 * Gets current value of property <code>emptySpanM</code>.
 * 
 * Number of grid cells that are empty at the end of each line on medium size.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>emptySpanM</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getEmptySpanM = function() { return 0; };

/**
 * Gets current value of property <code>emptySpanS</code>.
 * 
 * Number of grid cells that are empty at the end of each line on small size.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>emptySpanS</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getEmptySpanS = function() { return 0; };

/**
 * Gets current value of property <code>emptySpanXL</code>.
 * 
 * Number of grid cells that are empty at the end of each line on extra large size.
 * 
 * <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used.
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>emptySpanXL</code>
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getEmptySpanXL = function() { return 0; };

/**
 * Gets current value of property <code>labelSpanL</code>.
 * 
 * Default span for labels in large size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpanThis</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.
 * 
 * Default value is <code>4</code>.
 * @returns {int} Value of property <code>labelSpanL</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getLabelSpanL = function() { return 0; };

/**
 * Gets current value of property <code>labelSpanM</code>.
 * 
 * Default span for labels in medium size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpanThis</code> is set this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>labelSpanM</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getLabelSpanM = function() { return 0; };

/**
 * Gets current value of property <code>labelSpanS</code>.
 * 
 * Default span for labels in small size.
 * 
 * Default value is <code>12</code>.
 * @returns {int} Value of property <code>labelSpanS</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getLabelSpanS = function() { return 0; };

/**
 * Gets current value of property <code>labelSpanXL</code>.
 * 
 * Default span for labels in extra large size.
 * 
 * <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used.
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>labelSpanXL</code>
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getLabelSpanXL = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.layout.form.ResponsiveGridLayout.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>singleContainerFullSize</code>.
 * 
 * If the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set,
 * the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>.
 * In this case the properties <code>columnsXL</code>, <code>columnsL</code> and <code>columnsM</code> are ignored.
 * 
 * In all other cases the <code>FormContainer</code> is displayed in the size of one column.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>singleContainerFullSize</code>
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.getSingleContainerFullSize = function() { return false; };

/**
 * Sets a new value for property <code>adjustLabelSpan</code>.
 * 
 * If set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row.
 * If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label.
 * This is the same for medium and large <code>Forms</code>.
 * This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code>
 * (because every <code>FormContainer</code> has its own grid inside).
 * 
 * If not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size.
 * The number of <code>FormContainers</code> doesn't matter in this case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bAdjustLabelSpan New value for property <code>adjustLabelSpan</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setAdjustLabelSpan = function(bAdjustLabelSpan) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>breakpointL</code>.
 * 
 * Breakpoint (in pixel) between Medium size and Large size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1024</code>.
 * @param {int} iBreakpointL New value for property <code>breakpointL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setBreakpointL = function(iBreakpointL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>breakpointM</code>.
 * 
 * Breakpoint (in pixel) between Small size and Medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>600</code>.
 * @param {int} iBreakpointM New value for property <code>breakpointM</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setBreakpointM = function(iBreakpointM) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>breakpointXL</code>.
 * 
 * Breakpoint (in pixel) between large size and extra large (XL) size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1440</code>.
 * @param {int} iBreakpointXL New value for property <code>breakpointXL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setBreakpointXL = function(iBreakpointXL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>columnsL</code>.
 * 
 * Number of columns for large size.
 * 
 * The number of columns for large size must not be smaller than the number of columns for medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iColumnsL New value for property <code>columnsL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setColumnsL = function(iColumnsL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>columnsM</code>.
 * 
 * Number of columns for medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iColumnsM New value for property <code>columnsM</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setColumnsM = function(iColumnsM) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>columnsXL</code>.
 * 
 * Number of columns for extra large size.
 * 
 * The number of columns for extra large size must not be smaller than the number of columns for large size.
 * <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iColumnsXL New value for property <code>columnsXL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setColumnsXL = function(iColumnsXL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>emptySpanL</code>.
 * 
 * Number of grid cells that are empty at the end of each line on large size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iEmptySpanL New value for property <code>emptySpanL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setEmptySpanL = function(iEmptySpanL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>emptySpanM</code>.
 * 
 * Number of grid cells that are empty at the end of each line on medium size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iEmptySpanM New value for property <code>emptySpanM</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setEmptySpanM = function(iEmptySpanM) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>emptySpanS</code>.
 * 
 * Number of grid cells that are empty at the end of each line on small size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iEmptySpanS New value for property <code>emptySpanS</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setEmptySpanS = function(iEmptySpanS) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>emptySpanXL</code>.
 * 
 * Number of grid cells that are empty at the end of each line on extra large size.
 * 
 * <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iEmptySpanXL New value for property <code>emptySpanXL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setEmptySpanXL = function(iEmptySpanXL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>labelSpanL</code>.
 * 
 * Default span for labels in large size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpanThis</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>4</code>.
 * @param {int} iLabelSpanL New value for property <code>labelSpanL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setLabelSpanL = function(iLabelSpanL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>labelSpanM</code>.
 * 
 * Default span for labels in medium size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpanThis</code> is set this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iLabelSpanM New value for property <code>labelSpanM</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setLabelSpanM = function(iLabelSpanM) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>labelSpanS</code>.
 * 
 * Default span for labels in small size.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12</code>.
 * @param {int} iLabelSpanS New value for property <code>labelSpanS</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setLabelSpanS = function(iLabelSpanS) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>labelSpanXL</code>.
 * 
 * Default span for labels in extra large size.
 * 
 * <b>Note:</b> If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iLabelSpanXL New value for property <code>labelSpanXL</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setLabelSpanXL = function(iLabelSpanXL) { return new sap.ui.layout.form.ResponsiveGridLayout(); };

/**
 * Sets a new value for property <code>singleContainerFullSize</code>.
 * 
 * If the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set,
 * the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>.
 * In this case the properties <code>columnsXL</code>, <code>columnsL</code> and <code>columnsM</code> are ignored.
 * 
 * In all other cases the <code>FormContainer</code> is displayed in the size of one column.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSingleContainerFullSize New value for property <code>singleContainerFullSize</code>
 * @returns {sap.ui.layout.form.ResponsiveGridLayout} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.ResponsiveGridLayout.prototype.setSingleContainerFullSize = function(bSingleContainerFullSize) { return new sap.ui.layout.form.ResponsiveGridLayout(); };


// ---- sap.ui.layout.form.ResponsiveLayout --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.ResponsiveLayout.
 * @param {string} [sId] Id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Renders a <code>Form</code> with a responsive layout. Internally the <code>ResponsiveFlowLayout</code> is used.
 * The responsiveness of this layout tries to best use the available space. This means that the order of the <code>FormContainers</code>, labels and fields depends on the available space.
 * 
 * On the <code>FormContainers</code>, <code>FormElements</code>, labels and content fields, <code>ResponsiveFlowLayoutData</code> can be used to change the default rendering.
 * 
 * We suggest using the <code>ResponsiveGridLayout</code> instead of this layout because this is easier to consume and brings more stable responsive output.
 * 
 * <b>Note:</b> If <code>ResponsiveFlowLayoutData</code> are used this may result in a much more complex layout than the default one. This means that in some cases, the calculation for the other content may not bring the expected result.
 * In such cases, <code>ResponsiveFlowLayoutData</code> should be used for all content controls to disable the default behavior.
 * 
 * This control cannot be used stand alone, it only renders a <code>Form</code>, so it must be assigned to a <code>Form</code>.
 * @extends sap.ui.layout.form.FormLayout
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.ResponsiveLayout = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.form.ResponsiveLayout with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.layout.form.FormLayout.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ResponsiveLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.layout.form.ResponsiveLayout.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.ResponsiveLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };


// ---- sap.ui.layout.form.SimpleForm --------------------------------------------------------------------------

/**
 * Constructor for a new sap.ui.layout.form.SimpleForm.
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
 * <li>{@link #getMaxContainerCols maxContainerCols} : int (default: 2)</li>
 * <li>{@link #getMinWidth minWidth} : int (default: -1)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEditable editable} : boolean</li>
 * <li>{@link #getLabelMinWidth labelMinWidth} : int (default: 192)</li>
 * <li>{@link #getLayout layout} : sap.ui.layout.form.SimpleFormLayout (default: ResponsiveLayout)</li>
 * <li>{@link #getLabelSpanXL labelSpanXL} : int (default: -1)</li>
 * <li>{@link #getLabelSpanL labelSpanL} : int (default: 4)</li>
 * <li>{@link #getLabelSpanM labelSpanM} : int (default: 2)</li>
 * <li>{@link #getLabelSpanS labelSpanS} : int (default: 12)</li>
 * <li>{@link #getAdjustLabelSpan adjustLabelSpan} : boolean (default: true)</li>
 * <li>{@link #getEmptySpanXL emptySpanXL} : int (default: -1)</li>
 * <li>{@link #getEmptySpanL emptySpanL} : int (default: 0)</li>
 * <li>{@link #getEmptySpanM emptySpanM} : int (default: 0)</li>
 * <li>{@link #getEmptySpanS emptySpanS} : int (default: 0)</li>
 * <li>{@link #getColumnsXL columnsXL} : int (default: -1)</li>
 * <li>{@link #getColumnsL columnsL} : int (default: 2)</li>
 * <li>{@link #getColumnsM columnsM} : int (default: 1)</li>
 * <li>{@link #getSingleContainerFullSize singleContainerFullSize} : boolean (default: true)</li>
 * <li>{@link #getBreakpointXL breakpointXL} : int (default: 1440)</li>
 * <li>{@link #getBreakpointL breakpointL} : int (default: 1024)</li>
 * <li>{@link #getBreakpointM breakpointM} : int (default: 600)</li>
 * <li>{@link #getBackgroundDesign backgroundDesign} : sap.ui.layout.BackgroundDesign (default: Translucent)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Element[] (default)</li>
 * <li>{@link #getTitle title} : sap.ui.core.Title</li>
 * <li>{@link #getToolbar toolbar} : sap.ui.core.Toolbar</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * The <code>SimpleForm</code> provides an easy-to-use API to create simple forms.
 * Inside a <code>SimpleForm</code>, a <code>Form</code> control is created along with its <code>FormContainers</code> and <code>FormElements</code>, but the complexity in the API is removed.
 * <ul>
 * <li>A new title starts a new group (<code>FormContainer</code>) in the form.</li>
 * <li>A new label starts a new row (<code>FormElement</code>) in the form.</li>
 * <li>All other controls will be assigned to the row (<code>FormElement</code>) started with the last label.</li>
 * </ul>
 * Use <code>LayoutData</code> to influence the layout for special cases in the Input/Display controls.
 * <b>Note:</b> If a more complex form is needed, use <code>Form</code> instead.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.form.SimpleForm = function(sId,mSettings) {};
/**
 * Adds some ariaLabelledBy into the association <code>ariaLabelledBy</code>.
 * @param {string | sap.ui.core.Control} vAriaLabelledBy the ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Adds some content to the aggregation <code>content</code>.
 * @param {sap.ui.core.Element}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.addContent = function(oContent) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Destroys all the content in the aggregation <code>content</code>.
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.destroyContent = function() { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Destroys the title in the aggregation <code>title</code>.
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.destroyTitle = function() { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Destroys the toolbar in the aggregation <code>toolbar</code>.
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.destroyToolbar = function() { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Creates a new subclass of class sap.ui.layout.form.SimpleForm with name <code>sClassName</code>
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
sap.ui.layout.form.SimpleForm.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>adjustLabelSpan</code>.
 * 
 * If set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row.
 * If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label.
 * This is the same for medium and large <code>Forms</code>.
 * This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code>
 * (because every <code>FormContainer</code> has its own grid inside).
 * 
 * If not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size.
 * The number of <code>FormContainers</code> doesn't matter in this case.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>adjustLabelSpan</code>
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getAdjustLabelSpan = function() { return false; };

/**
 * Returns array of IDs of the elements which are the current targets of the association <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]}
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property <code>backgroundDesign</code>.
 * 
 * Specifies the background color of the <code>SimpleForm</code> content.
 * 
 * The visualization of the different options depends on the used theme.
 * 
 * Default value is <code>Translucent</code>.
 * @returns {sap.ui.layout.BackgroundDesign} Value of property <code>backgroundDesign</code>
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getBackgroundDesign = function() { return new sap.ui.layout.BackgroundDesign(); };

/**
 * Gets current value of property <code>breakpointL</code>.
 * 
 * Breakpoint between Medium size and Large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>1024</code>.
 * @returns {int} Value of property <code>breakpointL</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getBreakpointL = function() { return 0; };

/**
 * Gets current value of property <code>breakpointM</code>.
 * 
 * Breakpoint between Small size and Medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>600</code>.
 * @returns {int} Value of property <code>breakpointM</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getBreakpointM = function() { return 0; };

/**
 * Gets current value of property <code>breakpointXL</code>.
 * 
 * Breakpoint between Medium size and Large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>1440</code>.
 * @returns {int} Value of property <code>breakpointXL</code>
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getBreakpointXL = function() { return 0; };

/**
 * Gets current value of property <code>columnsL</code>.
 * 
 * Form columns for large size.
 * The number of columns for large size must not be smaller than the number of columns for medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>columnsL</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getColumnsL = function() { return 0; };

/**
 * Gets current value of property <code>columnsM</code>.
 * 
 * Form columns for medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>columnsM</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getColumnsM = function() { return 0; };

/**
 * Gets current value of property <code>columnsXL</code>.
 * 
 * Form columns for extra large size.
 * The number of columns for extra large size must not be smaller than the number of columns for large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>columnsXL</code>
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getColumnsXL = function() { return 0; };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * The content of the form is structured in the following way:
 * <ul>
 * <li>Add a <code>Title</code> or <code>Toolbar</code> control to start a new group (<code>FormContainer</code>).</li>
 * <li>Add a <code>Label</code> control to start a new row (<code>FormElement</code>).</li>
 * <li>Add controls as input fields, text fields or other as needed.</li>
 * <li>Use <code>LayoutData</code> to influence the layout for special cases in the single controls.
 * For example, if a <code>ResponsiveLayout</code> is used as a layout, the form content is weighted using weight 3 for the labels and weight 5 for the fields part. By default the label column is 192 pixels wide.
 * If your input controls should influence their width, you can add <code>sap.ui.layout.ResponsiveFlowLayoutData</code> to them via <code>setLayoutData</code> method.
 * Ensure that the sum of the weights in the <code>ResponsiveFlowLayoutData</code> is not more than 5, as this is the total width of the input control part of each form row.</li>
 * </ul>
 * Example for a row where the <code>TextField</code> takes 4 and the <code>TextView</code> takes 1 weight (using <code>ResponsiveLayout</code>):
 * <pre>
 * new sap.ui.commons.Label({text:"Label"});
 * new sap.ui.commons.TextField({value:"Weight 4",
 * layoutData:new sap.ui.layout.ResponsiveFlowLayoutData({weight:4})}),
 * new sap.ui.commons.TextView({text:"Weight 1",
 * layoutData: new sap.ui.layout.ResponsiveFlowLayoutData({weight:1})}),
 * </pre>
 * 
 * <b>Note:</b> Do not put any layout controls in here. This could destroy the visual layout,
 * keyboard support and screen-reader support.
 * @returns {sap.ui.core.Element[]}
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getContent = function() { return new Array(); };

/**
 * Gets current value of property <code>editable</code>.
 * 
 * Applies a device-specific and theme-specific line-height to the form rows if the form has editable content.
 * If set, all (not only the editable) rows of the form will get the line height of editable fields.
 * The accessibility aria-readonly attribute is set according to this property.
 * <b>Note:</b> The setting of the property has no influence on the editable functionality of the form's content.
 * @returns {boolean} Value of property <code>editable</code>
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getEditable = function() { return false; };

/**
 * Gets current value of property <code>emptySpanL</code>.
 * 
 * Number of grid cells that are empty at the end of each line on large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>emptySpanL</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getEmptySpanL = function() { return 0; };

/**
 * Gets current value of property <code>emptySpanM</code>.
 * 
 * Number of grid cells that are empty at the end of each line on medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>emptySpanM</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getEmptySpanM = function() { return 0; };

/**
 * Gets current value of property <code>emptySpanS</code>.
 * 
 * Number of grid cells that are empty at the end of each line on small size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>emptySpanS</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getEmptySpanS = function() { return 0; };

/**
 * Gets current value of property <code>emptySpanXL</code>.
 * 
 * Number of grid cells that are empty at the end of each line on extra large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used (from the backward compatibility reasons).
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>emptySpanXL</code>
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getEmptySpanXL = function() { return 0; };

/**
 * Gets current value of property <code>labelMinWidth</code>.
 * 
 * Specifies the min-width in pixels of the label in all form containers.
 * <b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.
 * 
 * Default value is <code>192</code>.
 * @returns {int} Value of property <code>labelMinWidth</code>
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLabelMinWidth = function() { return 0; };

/**
 * Gets current value of property <code>labelSpanL</code>.
 * 
 * Default span for labels in large size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpanThis</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>4</code>.
 * @returns {int} Value of property <code>labelSpanL</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLabelSpanL = function() { return 0; };

/**
 * Gets current value of property <code>labelSpanM</code>.
 * 
 * Default span for labels in medium size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpanThis</code> is set, this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>labelSpanM</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLabelSpanM = function() { return 0; };

/**
 * Gets current value of property <code>labelSpanS</code>.
 * 
 * Default span for labels in small size.
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>12</code>.
 * @returns {int} Value of property <code>labelSpanS</code>
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLabelSpanS = function() { return 0; };

/**
 * Gets current value of property <code>labelSpanXL</code>.
 * 
 * Default span for labels in extra large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used (from the backward compatibility reasons).
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>labelSpanXL</code>
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLabelSpanXL = function() { return 0; };

/**
 * Gets current value of property <code>layout</code>.
 * 
 * The <code>FormLayout</code> that is used to render the <code>SimpleForm</code>.
 * We suggest using the <code>ResponsiveGridLayout</code> for rendering a <code>SimpleForm</code>, as its responsiveness uses the space available in the best way possible.
 * 
 * Default value is <code>ResponsiveLayout</code>.
 * @returns {sap.ui.layout.form.SimpleFormLayout} Value of property <code>layout</code>
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getLayout = function() { return new sap.ui.layout.form.SimpleFormLayout(); };

/**
 * Gets current value of property <code>maxContainerCols</code>.
 * 
 * The maximum amount of groups (<code>FormContainers</code>) per row that is used before a new row is started.
 * <b>Note:</b> If a <code>ResponsiveGridLayout</code> is used as a layout, this property is not used. Please use the properties <code>ColumnsL</code> and <code>ColumnsM</code> in this case.
 * 
 * Default value is <code>2</code>.
 * @returns {int} Value of property <code>maxContainerCols</code>
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getMaxContainerCols = function() { return 0; };

/**
 * Returns a metadata object for class sap.ui.layout.form.SimpleForm.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.form.SimpleForm.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>minWidth</code>.
 * 
 * The overall minimum width in pixels that is used for the <code>SimpleForm</code>. If the available width is below the given minWidth the SimpleForm will create a new row for the next group (<code>FormContainer</code>).
 * The default value is -1, meaning that inner groups (<code>FormContainers</code>) will be stacked until maxCols is reached, irrespective of whether a maxWidth is reached or the available parents width is reached.
 * <b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.
 * 
 * Default value is <code>-1</code>.
 * @returns {int} Value of property <code>minWidth</code>
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getMinWidth = function() { return 0; };

/**
 * Gets current value of property <code>singleContainerFullSize</code>.
 * 
 * If the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set,
 * the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>.
 * In this case the properties <code>columnsL</code> and <code>columnsM</code> are ignored.
 * 
 * In all other cases the <code>FormContainer</code> is displayed in the size of one column.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>singleContainerFullSize</code>
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getSingleContainerFullSize = function() { return false; };

/**
 * Gets content of aggregation <code>title</code>.
 * 
 * Title element of the <code>SimpleForm</code>. Can either be a <code>Title</code> control, or a string.
 * @returns {sap.ui.core.Title}
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getTitle = function() { return new sap.ui.core.Title(); };

/**
 * Gets content of aggregation <code>toolbar</code>.
 * 
 * Toolbar of the <code>SimpleForm</code>.
 * 
 * <b>Note:</b> If a <code>Toolbar</code> is used, the <code>Title</code> is ignored.
 * If a title is needed inside the <code>Toolbar</code> it must be added at content to the <code>Toolbar</code>.
 * In this case add the <code>Title</code> to the <code>ariaLabelledBy</code> association.
 * @returns {sap.ui.core.Toolbar}
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getToolbar = function() { return new sap.ui.core.Toolbar(); };

/**
 * Gets current value of property <code>width</code>.
 * 
 * Width of the form.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Element</code> in the aggregation <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Element}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation <code>content</code>.
 * @param {sap.ui.core.Element}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Removes all the controls in the association named <code>ariaLabelledBy</code>.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation <code>content</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Element[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named <code>ariaLabelledBy</code>.
 * @param {int | string | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledByto be removed or its index or ID
 * @returns {sap.ui.core.Control} the removed ariaLabelledBy or <code>null</code>
 * @since 1.32.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.Control(); };

/**
 * Removes a content from the aggregation <code>content</code>.
 * @param {int | string | sap.ui.core.Element} vContent The contentto remove or its index or id
 * @returns {sap.ui.core.Element} The removed content or <code>null</code>
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.removeContent = function(vContent) { return new sap.ui.core.Element(); };

/**
 * Sets a new value for property <code>adjustLabelSpan</code>.
 * 
 * If set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the number of <code>FormContainers</code> in one row.
 * If only one <code>FormContainer</code> is displayed in one row, <code>labelSpanM</code> is used to define the size of the label.
 * This is the same for medium and large <code>Forms</code>.
 * This is done to align the labels on forms where full-size <code>FormContainers</code> and multiple-column rows are used in the same <code>Form</code>
 * (because every <code>FormContainer</code> has its own grid inside).
 * 
 * If not set, the usage of <code>labelSpanL</code> and <code>labelSpanM</code> are dependent on the <code>Form</code> size.
 * The number of <code>FormContainers</code> doesn't matter in this case.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bAdjustLabelSpan New value for property <code>adjustLabelSpan</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setAdjustLabelSpan = function(bAdjustLabelSpan) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>backgroundDesign</code>.
 * 
 * Specifies the background color of the <code>SimpleForm</code> content.
 * 
 * The visualization of the different options depends on the used theme.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Translucent</code>.
 * @param {sap.ui.layout.BackgroundDesign} sBackgroundDesign New value for property <code>backgroundDesign</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setBackgroundDesign = function(sBackgroundDesign) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>breakpointL</code>.
 * 
 * Breakpoint between Medium size and Large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1024</code>.
 * @param {int} iBreakpointL New value for property <code>breakpointL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setBreakpointL = function(iBreakpointL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>breakpointM</code>.
 * 
 * Breakpoint between Small size and Medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>600</code>.
 * @param {int} iBreakpointM New value for property <code>breakpointM</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setBreakpointM = function(iBreakpointM) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>breakpointXL</code>.
 * 
 * Breakpoint between Medium size and Large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1440</code>.
 * @param {int} iBreakpointXL New value for property <code>breakpointXL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setBreakpointXL = function(iBreakpointXL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>columnsL</code>.
 * 
 * Form columns for large size.
 * The number of columns for large size must not be smaller than the number of columns for medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iColumnsL New value for property <code>columnsL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setColumnsL = function(iColumnsL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>columnsM</code>.
 * 
 * Form columns for medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iColumnsM New value for property <code>columnsM</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setColumnsM = function(iColumnsM) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>columnsXL</code>.
 * 
 * Form columns for extra large size.
 * The number of columns for extra large size must not be smaller than the number of columns for large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.If the default value -1 is not overwritten with the meaningful one then the <code>columnsL</code> value is used (from the backward compatibility reasons).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iColumnsXL New value for property <code>columnsXL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setColumnsXL = function(iColumnsXL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>editable</code>.
 * 
 * Applies a device-specific and theme-specific line-height to the form rows if the form has editable content.
 * If set, all (not only the editable) rows of the form will get the line height of editable fields.
 * The accessibility aria-readonly attribute is set according to this property.
 * <b>Note:</b> The setting of the property has no influence on the editable functionality of the form's content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {boolean} bEditable New value for property <code>editable</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setEditable = function(bEditable) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>emptySpanL</code>.
 * 
 * Number of grid cells that are empty at the end of each line on large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iEmptySpanL New value for property <code>emptySpanL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setEmptySpanL = function(iEmptySpanL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>emptySpanM</code>.
 * 
 * Number of grid cells that are empty at the end of each line on medium size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iEmptySpanM New value for property <code>emptySpanM</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setEmptySpanM = function(iEmptySpanM) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>emptySpanS</code>.
 * 
 * Number of grid cells that are empty at the end of each line on small size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iEmptySpanS New value for property <code>emptySpanS</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setEmptySpanS = function(iEmptySpanS) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>emptySpanXL</code>.
 * 
 * Number of grid cells that are empty at the end of each line on extra large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>emptySpanL</code> value is used (from the backward compatibility reasons).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iEmptySpanXL New value for property <code>emptySpanXL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setEmptySpanXL = function(iEmptySpanXL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>labelMinWidth</code>.
 * 
 * Specifies the min-width in pixels of the label in all form containers.
 * <b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>192</code>.
 * @param {int} iLabelMinWidth New value for property <code>labelMinWidth</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLabelMinWidth = function(iLabelMinWidth) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>labelSpanL</code>.
 * 
 * Default span for labels in large size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpanThis</code> is set, this property is only used if more than 1 <code>FormContainer</code> is in one line. If only 1 <code>FormContainer</code> is in the line, then the <code>labelSpanM</code> value is used.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>4</code>.
 * @param {int} iLabelSpanL New value for property <code>labelSpanL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLabelSpanL = function(iLabelSpanL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>labelSpanM</code>.
 * 
 * Default span for labels in medium size.
 * 
 * <b>Note:</b> If <code>adjustLabelSpanThis</code> is set, this property is used for full-size <code>FormContainers</code>. If more than one <code>FormContainer</code> is in one line, <code>labelSpanL</code> is used.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iLabelSpanM New value for property <code>labelSpanM</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLabelSpanM = function(iLabelSpanM) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>labelSpanS</code>.
 * 
 * Default span for labels in small size.
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>12</code>.
 * @param {int} iLabelSpanS New value for property <code>labelSpanS</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLabelSpanS = function(iLabelSpanS) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>labelSpanXL</code>.
 * 
 * Default span for labels in extra large size.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout. If the default value -1 is not overwritten with the meaningful one then the <code>labelSpanL</code> value is used (from the backward compatibility reasons).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iLabelSpanXL New value for property <code>labelSpanXL</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLabelSpanXL = function(iLabelSpanXL) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>layout</code>.
 * 
 * The <code>FormLayout</code> that is used to render the <code>SimpleForm</code>.
 * We suggest using the <code>ResponsiveGridLayout</code> for rendering a <code>SimpleForm</code>, as its responsiveness uses the space available in the best way possible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>ResponsiveLayout</code>.
 * @param {sap.ui.layout.form.SimpleFormLayout} sLayout New value for property <code>layout</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setLayout = function(sLayout) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>maxContainerCols</code>.
 * 
 * The maximum amount of groups (<code>FormContainers</code>) per row that is used before a new row is started.
 * <b>Note:</b> If a <code>ResponsiveGridLayout</code> is used as a layout, this property is not used. Please use the properties <code>ColumnsL</code> and <code>ColumnsM</code> in this case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>2</code>.
 * @param {int} iMaxContainerCols New value for property <code>maxContainerCols</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setMaxContainerCols = function(iMaxContainerCols) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>minWidth</code>.
 * 
 * The overall minimum width in pixels that is used for the <code>SimpleForm</code>. If the available width is below the given minWidth the SimpleForm will create a new row for the next group (<code>FormContainer</code>).
 * The default value is -1, meaning that inner groups (<code>FormContainers</code>) will be stacked until maxCols is reached, irrespective of whether a maxWidth is reached or the available parents width is reached.
 * <b>Note:</b> This property is only used if a <code>ResponsiveLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>-1</code>.
 * @param {int} iMinWidth New value for property <code>minWidth</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setMinWidth = function(iMinWidth) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>singleContainerFullSize</code>.
 * 
 * If the <code>Form</code> contains only one single <code>FormContainer</code> and this property is set,
 * the <code>FormContainer</code> is displayed using the full size of the <code>Form</code>.
 * In this case the properties <code>columnsL</code> and <code>columnsM</code> are ignored.
 * 
 * In all other cases the <code>FormContainer</code> is displayed in the size of one column.
 * 
 * <b>Note:</b> This property is only used if a <code>ResponsiveGridLayout</code> is used as a layout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSingleContainerFullSize New value for property <code>singleContainerFullSize</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.34.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setSingleContainerFullSize = function(bSingleContainerFullSize) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets the aggregated <code>title</code>.
 * @param {sap.ui.core.Title} oTitle The title to set
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.16.3
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setTitle = function(oTitle) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets the aggregated <code>toolbar</code>.
 * @param {sap.ui.core.Toolbar} oToolbar The toolbar to set
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.36.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setToolbar = function(oToolbar) { return new sap.ui.layout.form.SimpleForm(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * Width of the form.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.layout.form.SimpleForm} Reference to <code>this</code> in order to allow method chaining
 * @since 1.28.0
 * @public
 * 
 */
sap.ui.layout.form.SimpleForm.prototype.setWidth = function(sWidth) { return new sap.ui.layout.form.SimpleForm(); };


// ---- sap.ui.layout.form.SimpleFormLayout --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.form.SimpleFormLayout.toString = function() { return ""; };

// ---- sap.ui.layout.Grid --------------------------------------------------------------------------

/**
 * Constructor for a new Grid.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getVSpacing vSpacing} : float (default: 1)</li>
 * <li>{@link #getHSpacing hSpacing} : float (default: 1)</li>
 * <li>{@link #getPosition position} : sap.ui.layout.GridPosition (default: Left)</li>
 * <li>{@link #getDefaultSpan defaultSpan} : sap.ui.layout.GridSpan (default: XL3 L3 M6 S12)</li>
 * <li>{@link #getDefaultIndent defaultIndent} : sap.ui.layout.GridIndent (default: XL0 L0 M0 S0)</li>
 * <li>{@link #getContainerQuery containerQuery} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * The Grid control is a layout which positions its child controls in a 12 column flow layout. Its children can be specified to take on a variable amount of columns depending on available screen size. With this control it is possible to achieve flexible layouts and line-breaks for extra large-, large-, medium- and small-sized screens, such as large desktop, desktop, tablet, and mobile. The Grid control's width can be percentage- or pixel-based and the spacing between its columns can be set to various pre-defined values.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.15.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.Grid = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.addContent = function(oContent) { return new sap.ui.layout.Grid(); };

/**
 * Destroys all the content in the aggregation <code>content</code>.
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.destroyContent = function() { return new sap.ui.layout.Grid(); };

/**
 * Creates a new subclass of class sap.ui.layout.Grid with name <code>sClassName</code>
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
sap.ui.layout.Grid.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>containerQuery</code>.
 * 
 * If true then not the media Query ( device screen size), but the size of the container surrounding the grid defines the current range (large, medium or small).
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>containerQuery</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getContainerQuery = function() { return false; };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * Controls that are placed into Grid layout.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getContent = function() { return new Array(); };

/**
 * Gets current value of property <code>defaultIndent</code>.
 * 
 * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 0 to 11 that the container has to take, for example: "L2 M4 S6", "M11", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 * 
 * Default value is <code>XL0 L0 M0 S0</code>.
 * @returns {sap.ui.layout.GridIndent} Value of property <code>defaultIndent</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getDefaultIndent = function() { return new sap.ui.layout.GridIndent(); };

/**
 * Gets current value of property <code>defaultSpan</code>.
 * 
 * Optional. A string type that represents Grid's default span values for large, medium and small screens for the whole Grid. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 * 
 * Default value is <code>XL3 L3 M6 S12</code>.
 * @returns {sap.ui.layout.GridSpan} Value of property <code>defaultSpan</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getDefaultSpan = function() { return new sap.ui.layout.GridSpan(); };

/**
 * Gets current value of property <code>hSpacing</code>.
 * 
 * Optional. Horizontal spacing between the content in the Grid. In rem, allowed values are 0, 0.5 , 1 or 2.
 * 
 * Default value is <code>1</code>.
 * @returns {float} Value of property <code>hSpacing</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getHSpacing = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.ui.layout.Grid.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.Grid.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>position</code>.
 * 
 * Optional. Position of the Grid in the window or surrounding container. Possible values are "Center", "Left" and "Right".
 * 
 * Default value is <code>Left</code>.
 * @returns {sap.ui.layout.GridPosition} Value of property <code>position</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getPosition = function() { return new sap.ui.layout.GridPosition(); };

/**
 * Gets current value of property <code>vSpacing</code>.
 * 
 * Optional. Vertical spacing between the rows in the Grid. In rem, allowed values are 0, 0.5, 1 and 2.
 * 
 * Default value is <code>1</code>.
 * @returns {float} Value of property <code>vSpacing</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getVSpacing = function() { return 0.0; };

/**
 * Gets current value of property <code>width</code>.
 * 
 * Optional. Width of the Grid. If not specified, then 100%.
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.Grid(); };

/**
 * Removes all the controls from the aggregation <code>content</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent The contentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>containerQuery</code>.
 * 
 * If true then not the media Query ( device screen size), but the size of the container surrounding the grid defines the current range (large, medium or small).
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bContainerQuery New value for property <code>containerQuery</code>
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setContainerQuery = function(bContainerQuery) { return new sap.ui.layout.Grid(); };

/**
 * Sets a new value for property <code>defaultIndent</code>.
 * 
 * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 0 to 11 that the container has to take, for example: "L2 M4 S6", "M11", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>XL0 L0 M0 S0</code>.
 * @param {sap.ui.layout.GridIndent} sDefaultIndent New value for property <code>defaultIndent</code>
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setDefaultIndent = function(sDefaultIndent) { return new sap.ui.layout.Grid(); };

/**
 * Sets a new value for property <code>defaultSpan</code>.
 * 
 * Optional. A string type that represents Grid's default span values for large, medium and small screens for the whole Grid. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>XL3 L3 M6 S12</code>.
 * @param {sap.ui.layout.GridSpan} sDefaultSpan New value for property <code>defaultSpan</code>
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setDefaultSpan = function(sDefaultSpan) { return new sap.ui.layout.Grid(); };

/**
 * Sets a new value for property <code>hSpacing</code>.
 * 
 * Optional. Horizontal spacing between the content in the Grid. In rem, allowed values are 0, 0.5 , 1 or 2.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {float} fHSpacing New value for property <code>hSpacing</code>
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setHSpacing = function(fHSpacing) { return new sap.ui.layout.Grid(); };

/**
 * Sets a new value for property <code>position</code>.
 * 
 * Optional. Position of the Grid in the window or surrounding container. Possible values are "Center", "Left" and "Right".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Left</code>.
 * @param {sap.ui.layout.GridPosition} sPosition New value for property <code>position</code>
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setPosition = function(sPosition) { return new sap.ui.layout.Grid(); };

/**
 * Sets a new value for property <code>vSpacing</code>.
 * 
 * Optional. Vertical spacing between the rows in the Grid. In rem, allowed values are 0, 0.5, 1 and 2.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {float} fVSpacing New value for property <code>vSpacing</code>
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setVSpacing = function(fVSpacing) { return new sap.ui.layout.Grid(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * Optional. Width of the Grid. If not specified, then 100%.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.layout.Grid} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Grid.prototype.setWidth = function(sWidth) { return new sap.ui.layout.Grid(); };


// ---- sap.ui.layout.GridData --------------------------------------------------------------------------

/**
 * Constructor for a new GridData.
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
 * <li>{@link #getSpan span} : sap.ui.layout.GridSpan</li>
 * <li>{@link #getSpanXL spanXL} : int</li>
 * <li>{@link #getSpanL spanL} : int</li>
 * <li>{@link #getSpanM spanM} : int</li>
 * <li>{@link #getSpanS spanS} : int</li>
 * <li>{@link #getIndent indent} : sap.ui.layout.GridIndent</li>
 * <li>{@link #getIndentXL indentXL} : int</li>
 * <li>{@link #getIndentL indentL} : int</li>
 * <li>{@link #getIndentM indentM} : int</li>
 * <li>{@link #getIndentS indentS} : int</li>
 * <li>{@link #getVisibleXL visibleXL} : boolean (default: true)</li>
 * <li>{@link #getVisibleL visibleL} : boolean (default: true)</li>
 * <li>{@link #getVisibleM visibleM} : boolean (default: true)</li>
 * <li>{@link #getVisibleS visibleS} : boolean (default: true)</li>
 * <li>{@link #getMoveBackwards moveBackwards} : sap.ui.layout.GridIndent</li>
 * <li>{@link #getMoveForward moveForward} : sap.ui.layout.GridIndent</li>
 * <li>{@link #getLinebreak linebreak} : boolean (default: false)</li>
 * <li>{@link #getLinebreakXL linebreakXL} : boolean (default: false)</li>
 * <li>{@link #getLinebreakL linebreakL} : boolean (default: false)</li>
 * <li>{@link #getLinebreakM linebreakM} : boolean (default: false)</li>
 * <li>{@link #getLinebreakS linebreakS} : boolean (default: false)</li>
 * <li>{@link #getSpanLarge spanLarge} : int</li>
 * <li>{@link #getSpanMedium spanMedium} : int</li>
 * <li>{@link #getSpanSmall spanSmall} : int</li>
 * <li>{@link #getIndentLarge indentLarge} : int</li>
 * <li>{@link #getIndentMedium indentMedium} : int</li>
 * <li>{@link #getIndentSmall indentSmall} : int</li>
 * <li>{@link #getVisibleOnLarge visibleOnLarge} : boolean (default: true)</li>
 * <li>{@link #getVisibleOnMedium visibleOnMedium} : boolean (default: true)</li>
 * <li>{@link #getVisibleOnSmall visibleOnSmall} : boolean (default: true)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Grid layout data
 * @extends sap.ui.core.LayoutData
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.15.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.GridData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.GridData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.GridData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>indent</code>.
 * 
 * A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 * @returns {sap.ui.layout.GridIndent} Value of property <code>indent</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndent = function() { return new sap.ui.layout.GridIndent(); };

/**
 * Gets current value of property <code>indentL</code>.
 * 
 * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "indent".
 * @returns {int} Value of property <code>indentL</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentL = function() { return 0; };

/**
 * Gets current value of property <code>indentLarge</code>.
 * 
 * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "indent".
 * @returns {int} Value of property <code>indentLarge</code>
 * @deprecated Since version 1.17.1.
 * Use indentL instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentLarge = function() { return 0; };

/**
 * Gets current value of property <code>indentM</code>.
 * 
 * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "indent".
 * @returns {int} Value of property <code>indentM</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentM = function() { return 0; };

/**
 * Gets current value of property <code>indentMedium</code>.
 * 
 * Deprecated. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "indent".
 * @returns {int} Value of property <code>indentMedium</code>
 * @deprecated Since version 1.17.1.
 * Use indentM instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentMedium = function() { return 0; };

/**
 * Gets current value of property <code>indentS</code>.
 * 
 * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "indent".
 * @returns {int} Value of property <code>indentS</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentS = function() { return 0; };

/**
 * Gets current value of property <code>indentSmall</code>.
 * 
 * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "indent".
 * @returns {int} Value of property <code>indentSmall</code>
 * @deprecated Since version 1.17.1.
 * Use indentS instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentSmall = function() { return 0; };

/**
 * Gets current value of property <code>indentXL</code>.
 * 
 * Optional. Defines a span value for extra large screens. This value overwrites the value for extra large screens defined in the parameter "indent".
 * @returns {int} Value of property <code>indentXL</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getIndentXL = function() { return 0; };

/**
 * Gets current value of property <code>linebreak</code>.
 * 
 * Optional. If this property is set to true, the control on all-size screens causes a line break within the Grid and becomes the first within the next line.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>linebreak</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getLinebreak = function() { return false; };

/**
 * Gets current value of property <code>linebreakL</code>.
 * 
 * Optional. If this property is set to true, the control on large screens causes a line break within the Grid and becomes the first within the next line.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>linebreakL</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getLinebreakL = function() { return false; };

/**
 * Gets current value of property <code>linebreakM</code>.
 * 
 * Optional. If this property is set to true, the control on medium sized screens causes a line break within the Grid and becomes the first within the next line.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>linebreakM</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getLinebreakM = function() { return false; };

/**
 * Gets current value of property <code>linebreakS</code>.
 * 
 * Optional. If this property is set to true, the control on small screens causes a line break within the Grid and becomes the first within the next line.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>linebreakS</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getLinebreakS = function() { return false; };

/**
 * Gets current value of property <code>linebreakXL</code>.
 * 
 * Optional. If this property is set to true, the control on extra large screens causes a line break within the Grid and becomes the first within the next line.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>linebreakXL</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getLinebreakXL = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.layout.GridData.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.GridData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>moveBackwards</code>.
 * 
 * Optional. Moves a cell backwards so many columns as specified.
 * @returns {sap.ui.layout.GridIndent} Value of property <code>moveBackwards</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getMoveBackwards = function() { return new sap.ui.layout.GridIndent(); };

/**
 * Gets current value of property <code>moveForward</code>.
 * 
 * Optional. Moves a cell forwards so many columns as specified.
 * @returns {sap.ui.layout.GridIndent} Value of property <code>moveForward</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getMoveForward = function() { return new sap.ui.layout.GridIndent(); };

/**
 * Gets current value of property <code>span</code>.
 * 
 * A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 * @returns {sap.ui.layout.GridSpan} Value of property <code>span</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpan = function() { return new sap.ui.layout.GridSpan(); };

/**
 * Gets current value of property <code>spanL</code>.
 * 
 * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "span".
 * @returns {int} Value of property <code>spanL</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanL = function() { return 0; };

/**
 * Gets current value of property <code>spanLarge</code>.
 * 
 * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "span".
 * @returns {int} Value of property <code>spanLarge</code>
 * @deprecated Since version 1.17.1.
 * Use spanL instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanLarge = function() { return 0; };

/**
 * Gets current value of property <code>spanM</code>.
 * 
 * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "span".
 * @returns {int} Value of property <code>spanM</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanM = function() { return 0; };

/**
 * Gets current value of property <code>spanMedium</code>.
 * 
 * Deprecated. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "span".
 * @returns {int} Value of property <code>spanMedium</code>
 * @deprecated Since version 1.17.1.
 * Use spanM instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanMedium = function() { return 0; };

/**
 * Gets current value of property <code>spanS</code>.
 * 
 * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "span".
 * @returns {int} Value of property <code>spanS</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanS = function() { return 0; };

/**
 * Gets current value of property <code>spanSmall</code>.
 * 
 * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "span".
 * @returns {int} Value of property <code>spanSmall</code>
 * @deprecated Since version 1.17.1.
 * Use spanS instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanSmall = function() { return 0; };

/**
 * Gets current value of property <code>spanXL</code>.
 * 
 * Optional. Defines a span value for extra large screens. This value overwrites the value for extra large screens defined in the parameter "span".
 * @returns {int} Value of property <code>spanXL</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getSpanXL = function() { return 0; };

/**
 * Gets current value of property <code>visibleL</code>.
 * 
 * Defines if this Control is visible on Large screens.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleL</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleL = function() { return false; };

/**
 * Gets current value of property <code>visibleM</code>.
 * 
 * Defines if this Control is visible on Medium size screens.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleM</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleM = function() { return false; };

/**
 * Gets current value of property <code>visibleOnLarge</code>.
 * 
 * Deprecated. Defines if this Control is visible on Large screens.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleOnLarge</code>
 * @deprecated Since version 1.17.1.
 * Use visibleL instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleOnLarge = function() { return false; };

/**
 * Gets current value of property <code>visibleOnMedium</code>.
 * 
 * Deprecated. Defines if this Control is visible on Medium size screens.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleOnMedium</code>
 * @deprecated Since version 1.17.1.
 * Use visibleM instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleOnMedium = function() { return false; };

/**
 * Gets current value of property <code>visibleOnSmall</code>.
 * 
 * Deprecated. Defines if this Control is visible on small screens.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleOnSmall</code>
 * @deprecated Since version 1.17.1.
 * Use visibleS instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleOnSmall = function() { return false; };

/**
 * Gets current value of property <code>visibleS</code>.
 * 
 * Defines if this Control is visible on small screens.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleS</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleS = function() { return false; };

/**
 * Gets current value of property <code>visibleXL</code>.
 * 
 * Defines if this Control is visible on XL - extra Large screens.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>visibleXL</code>
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.getVisibleXL = function() { return false; };

/**
 * Sets a new value for property <code>indent</code>.
 * 
 * A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.layout.GridIndent} sIndent New value for property <code>indent</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndent = function(sIndent) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>indentL</code>.
 * 
 * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "indent".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iIndentL New value for property <code>indentL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentL = function(iIndentL) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>indentLarge</code>.
 * 
 * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "indent".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iIndentLarge New value for property <code>indentLarge</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.17.1.
 * Use indentL instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentLarge = function(iIndentLarge) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>indentM</code>.
 * 
 * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "indent".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iIndentM New value for property <code>indentM</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentM = function(iIndentM) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>indentMedium</code>.
 * 
 * Deprecated. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "indent".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iIndentMedium New value for property <code>indentMedium</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.17.1.
 * Use indentM instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentMedium = function(iIndentMedium) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>indentS</code>.
 * 
 * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "indent".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iIndentS New value for property <code>indentS</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentS = function(iIndentS) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>indentSmall</code>.
 * 
 * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "indent".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iIndentSmall New value for property <code>indentSmall</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.17.1.
 * Use indentS instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentSmall = function(iIndentSmall) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>indentXL</code>.
 * 
 * Optional. Defines a span value for extra large screens. This value overwrites the value for extra large screens defined in the parameter "indent".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iIndentXL New value for property <code>indentXL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setIndentXL = function(iIndentXL) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>linebreak</code>.
 * 
 * Optional. If this property is set to true, the control on all-size screens causes a line break within the Grid and becomes the first within the next line.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLinebreak New value for property <code>linebreak</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setLinebreak = function(bLinebreak) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>linebreakL</code>.
 * 
 * Optional. If this property is set to true, the control on large screens causes a line break within the Grid and becomes the first within the next line.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLinebreakL New value for property <code>linebreakL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setLinebreakL = function(bLinebreakL) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>linebreakM</code>.
 * 
 * Optional. If this property is set to true, the control on medium sized screens causes a line break within the Grid and becomes the first within the next line.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLinebreakM New value for property <code>linebreakM</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setLinebreakM = function(bLinebreakM) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>linebreakS</code>.
 * 
 * Optional. If this property is set to true, the control on small screens causes a line break within the Grid and becomes the first within the next line.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLinebreakS New value for property <code>linebreakS</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setLinebreakS = function(bLinebreakS) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>linebreakXL</code>.
 * 
 * Optional. If this property is set to true, the control on extra large screens causes a line break within the Grid and becomes the first within the next line.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLinebreakXL New value for property <code>linebreakXL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setLinebreakXL = function(bLinebreakXL) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>moveBackwards</code>.
 * 
 * Optional. Moves a cell backwards so many columns as specified.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.layout.GridIndent} sMoveBackwards New value for property <code>moveBackwards</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setMoveBackwards = function(sMoveBackwards) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>moveForward</code>.
 * 
 * Optional. Moves a cell forwards so many columns as specified.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.layout.GridIndent} sMoveForward New value for property <code>moveForward</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setMoveForward = function(sMoveForward) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>span</code>.
 * 
 * A string type that represents Grid's span values for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.layout.GridSpan} sSpan New value for property <code>span</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpan = function(sSpan) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>spanL</code>.
 * 
 * Optional. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "span".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iSpanL New value for property <code>spanL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanL = function(iSpanL) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>spanLarge</code>.
 * 
 * Deprecated. Defines a span value for large screens. This value overwrites the value for large screens defined in the parameter "span".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iSpanLarge New value for property <code>spanLarge</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.17.1.
 * Use spanL instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanLarge = function(iSpanLarge) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>spanM</code>.
 * 
 * Optional. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "span".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iSpanM New value for property <code>spanM</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanM = function(iSpanM) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>spanMedium</code>.
 * 
 * Deprecated. Defines a span value for medium size screens. This value overwrites the value for medium screens defined in the parameter "span".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iSpanMedium New value for property <code>spanMedium</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.17.1.
 * Use spanM instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanMedium = function(iSpanMedium) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>spanS</code>.
 * 
 * Optional. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "span".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iSpanS New value for property <code>spanS</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanS = function(iSpanS) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>spanSmall</code>.
 * 
 * Deprecated. Defines a span value for small screens. This value overwrites the value for small screens defined in the parameter "span".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iSpanSmall New value for property <code>spanSmall</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.17.1.
 * Use spanS instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanSmall = function(iSpanSmall) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>spanXL</code>.
 * 
 * Optional. Defines a span value for extra large screens. This value overwrites the value for extra large screens defined in the parameter "span".
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {int} iSpanXL New value for property <code>spanXL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setSpanXL = function(iSpanXL) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>visibleL</code>.
 * 
 * Defines if this Control is visible on Large screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleL New value for property <code>visibleL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleL = function(bVisibleL) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>visibleM</code>.
 * 
 * Defines if this Control is visible on Medium size screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleM New value for property <code>visibleM</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleM = function(bVisibleM) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>visibleOnLarge</code>.
 * 
 * Deprecated. Defines if this Control is visible on Large screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleOnLarge New value for property <code>visibleOnLarge</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.17.1.
 * Use visibleL instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleOnLarge = function(bVisibleOnLarge) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>visibleOnMedium</code>.
 * 
 * Deprecated. Defines if this Control is visible on Medium size screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleOnMedium New value for property <code>visibleOnMedium</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.17.1.
 * Use visibleM instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleOnMedium = function(bVisibleOnMedium) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>visibleOnSmall</code>.
 * 
 * Deprecated. Defines if this Control is visible on small screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleOnSmall New value for property <code>visibleOnSmall</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @deprecated Since version 1.17.1.
 * Use visibleS instead.
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleOnSmall = function(bVisibleOnSmall) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>visibleS</code>.
 * 
 * Defines if this Control is visible on small screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleS New value for property <code>visibleS</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleS = function(bVisibleS) { return new sap.ui.layout.GridData(); };

/**
 * Sets a new value for property <code>visibleXL</code>.
 * 
 * Defines if this Control is visible on XL - extra Large screens.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bVisibleXL New value for property <code>visibleXL</code>
 * @returns {sap.ui.layout.GridData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.GridData.prototype.setVisibleXL = function(bVisibleXL) { return new sap.ui.layout.GridData(); };


// ---- sap.ui.layout.GridIndent --------------------------------------------------------------------------


// ---- sap.ui.layout.GridPosition --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.GridPosition.toString = function() { return ""; };

// ---- sap.ui.layout.GridSpan --------------------------------------------------------------------------


// ---- sap.ui.layout.HorizontalLayout --------------------------------------------------------------------------

/**
 * Constructor for a new HorizontalLayout.
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
 * <li>{@link #getAllowWrapping allowWrapping} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * A layout that provides support for horizontal alignment of controls
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.HorizontalLayout = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.HorizontalLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.addContent = function(oContent) { return new sap.ui.layout.HorizontalLayout(); };

/**
 * Destroys all the content in the aggregation <code>content</code>.
 * @returns {sap.ui.layout.HorizontalLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.destroyContent = function() { return new sap.ui.layout.HorizontalLayout(); };

/**
 * Creates a new subclass of class sap.ui.layout.HorizontalLayout with name <code>sClassName</code>
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
sap.ui.layout.HorizontalLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>allowWrapping</code>.
 * 
 * Specifies whether the content inside the Layout shall be line-wrapped in the case that there is less horizontal space available than required.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>allowWrapping</code>
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.getAllowWrapping = function() { return false; };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * The controls inside this layout
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.layout.HorizontalLayout.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.HorizontalLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.layout.HorizontalLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.HorizontalLayout(); };

/**
 * Removes all the controls from the aggregation <code>content</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent The contentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>allowWrapping</code>.
 * 
 * Specifies whether the content inside the Layout shall be line-wrapped in the case that there is less horizontal space available than required.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAllowWrapping New value for property <code>allowWrapping</code>
 * @returns {sap.ui.layout.HorizontalLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.HorizontalLayout.prototype.setAllowWrapping = function(bAllowWrapping) { return new sap.ui.layout.HorizontalLayout(); };


// ---- sap.ui.layout.ResponsiveFlowLayout --------------------------------------------------------------------------

/**
 * Constructor for a new ResponsiveFlowLayout.
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
 * <li>{@link #getResponsive responsive} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * This is a layout where several controls can be added. These controls are blown up to fit in an entire row. If the window resizes, the controls are moved between the rows and resized again.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.ResponsiveFlowLayout = function(sId,mSettings) {};
/**
 * Adds content.
 * This function needs to be overridden to prevent any rendering while some
 * content is still being added.
 * @param {sap.ui.core.Control}
 *            oContent The content that should be added to the layout
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.addContent = function(oContent) {  };

/**
 * Destroys all the content in the aggregation <code>content</code>.
 * @returns {sap.ui.layout.ResponsiveFlowLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.destroyContent = function() { return new sap.ui.layout.ResponsiveFlowLayout(); };

/**
 * Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayout with name <code>sClassName</code>
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
sap.ui.layout.ResponsiveFlowLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * Added content that should be positioned. Every content item should have a ResponsiveFlowLayoutData attached, or otherwise, the default values are used.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.getContent = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.ui.layout.ResponsiveFlowLayout.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>responsive</code>.
 * 
 * If set to false, all added controls will keep their width, or otherwise, the controls will be stretched to the possible width of a row.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>responsive</code>
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.getResponsive = function() { return false; };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts content.
 * This function needs to be overridden to prevent any rendering while some
 * content is still being added.
 * @param {sap.ui.core.Control}
 *            oContent The content that should be inserted to the layout
 * @param {int}
 *            iIndex The index where the content should be inserted into
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.insertContent = function(oContent,iIndex) {  };

/**
 * Removes all the controls from the aggregation <code>content</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes content.
 * This function needs to be overridden to prevent any rendering while some
 * content is still being added.
 * @param {int|string|sap.ui.core.Control}
 *            oContent The content that should be removed from the layout
 * @returns {sap.ui.core.Control} The <code>this</code> pointer for chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.removeContent = function(oContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>responsive</code>.
 * 
 * If set to false, all added controls will keep their width, or otherwise, the controls will be stretched to the possible width of a row.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bResponsive New value for property <code>responsive</code>
 * @returns {sap.ui.layout.ResponsiveFlowLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayout.prototype.setResponsive = function(bResponsive) { return new sap.ui.layout.ResponsiveFlowLayout(); };


// ---- sap.ui.layout.ResponsiveFlowLayoutData --------------------------------------------------------------------------

/**
 * Constructor for a new ResponsiveFlowLayoutData.
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
 * <li>{@link #getMinWidth minWidth} : int (default: 100)</li>
 * <li>{@link #getWeight weight} : int (default: 1)</li>
 * <li>{@link #getLinebreak linebreak} : boolean (default: false)</li>
 * <li>{@link #getMargin margin} : boolean (default: true)</li>
 * <li>{@link #getLinebreakable linebreakable} : boolean (default: true)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * @class
 * This is a LayoutData element that can be added to a control if this control is used within a ResponsiveFlowLayout.
 * @extends sap.ui.core.LayoutData
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayoutData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>linebreak</code>.
 * 
 * If this property is set, the control in which the LayoutData is added, will always cause a line break within the ResponsiveFlowLayout.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>linebreak</code>
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getLinebreak = function() { return false; };

/**
 * Gets current value of property <code>linebreakable</code>.
 * 
 * Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the previous element.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>linebreakable</code>
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getLinebreakable = function() { return false; };

/**
 * Gets current value of property <code>margin</code>.
 * 
 * Prevents any margin of the element if set to false.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>margin</code>
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getMargin = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.layout.ResponsiveFlowLayoutData.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>minWidth</code>.
 * 
 * Defines the minimal size in px of an ResponsiveFlowLayout element. The element will be shrunk down to this value.
 * 
 * Default value is <code>100</code>.
 * @returns {int} Value of property <code>minWidth</code>
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getMinWidth = function() { return 0; };

/**
 * Gets current value of property <code>weight</code>.
 * 
 * Defines the weight of the element, that influences the resulting width. If there are several elements within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>weight</code>
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.getWeight = function() { return 0; };

/**
 * Sets a new value for property <code>linebreak</code>.
 * 
 * If this property is set, the control in which the LayoutData is added, will always cause a line break within the ResponsiveFlowLayout.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bLinebreak New value for property <code>linebreak</code>
 * @returns {sap.ui.layout.ResponsiveFlowLayoutData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setLinebreak = function(bLinebreak) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };

/**
 * Sets a new value for property <code>linebreakable</code>.
 * 
 * Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the previous element.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bLinebreakable New value for property <code>linebreakable</code>
 * @returns {sap.ui.layout.ResponsiveFlowLayoutData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setLinebreakable = function(bLinebreakable) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };

/**
 * Sets a new value for property <code>margin</code>.
 * 
 * Prevents any margin of the element if set to false.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bMargin New value for property <code>margin</code>
 * @returns {sap.ui.layout.ResponsiveFlowLayoutData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setMargin = function(bMargin) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };

/**
 * Sets a new value for property <code>minWidth</code>.
 * 
 * Defines the minimal size in px of an ResponsiveFlowLayout element. The element will be shrunk down to this value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100</code>.
 * @param {int} iMinWidth New value for property <code>minWidth</code>
 * @returns {sap.ui.layout.ResponsiveFlowLayoutData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setMinWidth = function(iMinWidth) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };

/**
 * Sets a new value for property <code>weight</code>.
 * 
 * Defines the weight of the element, that influences the resulting width. If there are several elements within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iWeight New value for property <code>weight</code>
 * @returns {sap.ui.layout.ResponsiveFlowLayoutData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.ResponsiveFlowLayoutData.prototype.setWeight = function(iWeight) { return new sap.ui.layout.ResponsiveFlowLayoutData(); };


// ---- sap.ui.layout.SideContentFallDown --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.SideContentFallDown.toString = function() { return ""; };

// ---- sap.ui.layout.SideContentPosition --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.SideContentPosition.toString = function() { return ""; };

// ---- sap.ui.layout.SideContentVisibility --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.ui.layout.SideContentVisibility.toString = function() { return ""; };

// ---- sap.ui.layout.Splitter --------------------------------------------------------------------------

/**
 * Constructor for a new Splitter.
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
 * <li>{@link #getOrientation orientation} : sap.ui.core.Orientation (default: Horizontal)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize (default: 100%)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize (default: 100%)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContentAreas contentAreas} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:resize resize} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * 
 * A layout that contains several content areas. The content that is added to the splitter should contain LayoutData of the type SplitterLayoutData that defines its size and size contraints.
 * 
 * By adding or changing SplitterLayoutData to the controls that make up the content areas, the size can be changed programatically. Additionally the contents can be made non-resizable individually and a minimal size (in px) can be set.
 * 
 * The orientation of the splitter can be set to horizontal (default) or vertical. All content areas of the splitter will be arranged in that way. In order to split vertically and horizontally at the same time, Splitters need to be nested.
 * 
 * The splitter bars can be focused to enable resizing of the content areas via keyboard. The contents size can be manipulated when the splitter bar is focused and Shift-Left/Down/Right/Up are pressed. When Shift-Home/End are pressed, the contents are set their minimum or maximum size (keep in mind though, that resizing an auto-size content-area next to another auto-size one might lead to the effect that the former does not take its maximum size but only the maximum size before recalculating auto sizes).
 * 
 * The splitter bars used for resizing the contents by the user can be set to different widths (or heights in vertical mode) and the splitter will automatically resize the other contents accordingly. In case the splitter bar is resized after the splitter has rendered, a manual resize has to be triggered by invoking triggerResize() on the Splitter.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.22.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.Splitter = function(sId,mSettings) {};
/**
 * Event is fired when contents are resized.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {string} oControlEvent.getParameters.id The ID of the splitter control. The splitter control can also be accessed by calling getSource() on the event.
 * @param {int[]} oControlEvent.getParameters.oldSizes An array of values representing the old (pixel-)sizes of the splitter contents
 * @param {int[]} oControlEvent.getParameters.newSizes An array of values representing the new (pixel-)sizes of the splitter contents
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.resize = function(oControlEvent) {  };

/**
 * Adds some contentArea to the aggregation <code>contentAreas</code>.
 * @param {sap.ui.core.Control}
 *            oContentArea the contentArea to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.addContentArea = function(oContentArea) { return new sap.ui.layout.Splitter(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>resize</code> event of this <code>sap.ui.layout.Splitter</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.ui.layout.Splitter</code> itself.
 * 
 * Event is fired when contents are resized.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.ui.layout.Splitter</code> itself
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.attachResize = function(oData,fnFunction,oListener) { return new sap.ui.layout.Splitter(); };

/**
 * Destroys all the contentAreas in the aggregation <code>contentAreas</code>.
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.destroyContentAreas = function() { return new sap.ui.layout.Splitter(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>resize</code> event of this <code>sap.ui.layout.Splitter</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.detachResize = function(fnFunction,oListener) { return new sap.ui.layout.Splitter(); };

/**
 * Disables the resize handler for this control, this leads to an automatic resize of
 * the contents whenever the control changes its size. The resize handler is enabled
 * in every control instance by default.
 * For performance reasons this behavior can be disabled by calling disableAutoResize()
 * @param {bool} [bTemporarily=false] Only disable autoResize temporarily (used for live resize), so that the previous status can be restored afterwards
 * @protected
 * @deprecated This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 * 
 */
sap.ui.layout.Splitter.prototype.disableAutoResize = function(bTemporarily) {  };

/**
 * Disables the resizing of the Splitter contents via keyboard. This changes the Splitter bars
 * to non-focussable elements.
 * @protected
 * 
 */
sap.ui.layout.Splitter.prototype.disableKeyboardSupport = function() {  };

/**
 * Disables recalculation and resize of the splitter contents while dragging the splitter bar.
 * This means that the contents are resized only once after moving the splitter bar.
 * @protected
 * @deprecated This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 * 
 */
sap.ui.layout.Splitter.prototype.disableLiveResize = function() {  };

/**
 * Enables the resize handler for this control, this leads to an automatic resize of
 * the contents whenever the control changes its size. The resize handler is enabled
 * in every control instance by default.
 * For performance reasons this behavior can be disabled by calling disableAutoResize()
 * @param {bool} [bTemporarily=false] Only enables autoResize if it was previously disabled temporarily (used for live resize)
 * @protected
 * @deprecated This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 * 
 */
sap.ui.layout.Splitter.prototype.enableAutoResize = function(bTemporarily) {  };

/**
 * Enables the resizing of the Splitter contents via keyboard. This makes the Splitter bars
 * focussable elements.
 * @protected
 * 
 */
sap.ui.layout.Splitter.prototype.enableKeyboardSupport = function() {  };

/**
 * Enables recalculation and resize of the splitter contents while dragging the splitter bar.
 * This means that the contents are resized several times per second when moving the splitter bar.
 * @protected
 * @deprecated This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 * 
 */
sap.ui.layout.Splitter.prototype.enableLiveResize = function() {  };

/**
 * Creates a new subclass of class sap.ui.layout.Splitter with name <code>sClassName</code>
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
sap.ui.layout.Splitter.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>resize</code> to attached listeners.
 * 
 * Expects the following event parameters:
 * <ul>
 * <li><code>id</code> of type <code>string</code>The ID of the splitter control. The splitter control can also be accessed by calling getSource() on the event.</li>
 * <li><code>oldSizes</code> of type <code>int[]</code>An array of values representing the old (pixel-)sizes of the splitter contents</li>
 * <li><code>newSizes</code> of type <code>int[]</code>An array of values representing the new (pixel-)sizes of the splitter contents</li>
 * </ul>
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.ui.layout.Splitter.prototype.fireResize = function(mArguments) { return new sap.ui.layout.Splitter(); };

/**
 * Returns the current actual content sizes as pixel value - these values can change with every
 * resize.
 * @returns {Number[]} Array of px values that correspond to the content area sizes
 * @protected
 * @deprecated This method is declared as protected in order to assess the need for this feature. It is declared as deprecated because the API might change in case the need for this is high enough to make it part of the official Splitter interface
 * 
 */
sap.ui.layout.Splitter.prototype.getCalculatedSizes = function() { return new Array(); };

/**
 * Gets content of aggregation <code>contentAreas</code>.
 * 
 * The content areas to be split. The control will show n-1 splitter bars between n controls in this aggregation.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.getContentAreas = function() { return new Array(); };

/**
 * Gets current value of property <code>height</code>.
 * 
 * The height of the control
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.ui.layout.Splitter.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.Splitter.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>orientation</code>.
 * 
 * Whether to split the contents horizontally (default) or vertically.
 * 
 * Default value is <code>Horizontal</code>.
 * @returns {sap.ui.core.Orientation} Value of property <code>orientation</code>
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.getOrientation = function() { return new sap.ui.core.Orientation(); };

/**
 * Gets current value of property <code>width</code>.
 * 
 * The width of the control
 * 
 * Default value is <code>100%</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>contentAreas</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContentArea The contentArea whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.indexOfContentArea = function(oContentArea) { return 0; };

/**
 * Inserts a contentArea into the aggregation <code>contentAreas</code>.
 * @param {sap.ui.core.Control}
 *            oContentArea the contentArea to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the contentArea should be inserted at; for
 *              a negative value of <code>iIndex</code>, the contentArea is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the contentArea is inserted at
 *              the last position
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.insertContentArea = function(oContentArea,iIndex) { return new sap.ui.layout.Splitter(); };

/**
 * Removes all the controls from the aggregation <code>contentAreas</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.removeAllContentAreas = function() { return new Array(); };

/**
 * Removes a contentArea from the aggregation <code>contentAreas</code>.
 * @param {int | string | sap.ui.core.Control} vContentArea The contentAreato remove or its index or id
 * @returns {sap.ui.core.Control} The removed contentArea or <code>null</code>
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.removeContentArea = function(vContentArea) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>height</code>.
 * 
 * The height of the control
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.setHeight = function(sHeight) { return new sap.ui.layout.Splitter(); };

/**
 * Sets a new value for property <code>orientation</code>.
 * 
 * Whether to split the contents horizontally (default) or vertically.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Horizontal</code>.
 * @param {sap.ui.core.Orientation} sOrientation New value for property <code>orientation</code>
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.setOrientation = function(sOrientation) { return new sap.ui.layout.Splitter(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * The width of the control
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>100%</code>.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.ui.layout.Splitter} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.setWidth = function(sWidth) { return new sap.ui.layout.Splitter(); };

/**
 * This method  triggers a resize on the Splitter - meaning it forces the Splitter to recalculate
 * all sizes.
 * This method should only be used in rare cases, for example when the CSS that defines the sizes
 * of the splitter bars changes without triggering a rerendering of the splitter.
 * @param {boolean} [forceDirectly=false] Do not delay the resize, trigger it right now.
 * @public
 * 
 */
sap.ui.layout.Splitter.prototype.triggerResize = function(forceDirectly) {  };


// ---- sap.ui.layout.SplitterLayoutData --------------------------------------------------------------------------

/**
 * Constructor for a new SplitterLayoutData.
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
 * <li>{@link #getResizable resizable} : boolean (default: true)</li>
 * <li>{@link #getSize size} : sap.ui.core.CSSSize (default: auto)</li>
 * <li>{@link #getMinSize minSize} : int (default: 0)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.LayoutData#constructor sap.ui.core.LayoutData}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Holds layout data for the splitter contents.
 * Allowed size values are numeric values ending in "px" and "%" and the
 * special case "auto".
 * (The CSS value "auto" is used internally to recalculate the size of the content
 * dynamically and is not directly set as style property.)
 * @extends sap.ui.core.LayoutData
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.22.0
 * @experimental Since version 1.22.0.
 * API is not yet finished and might change completely
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.SplitterLayoutData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.ui.layout.SplitterLayoutData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.ui.layout.SplitterLayoutData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.ui.layout.SplitterLayoutData.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.SplitterLayoutData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>minSize</code>.
 * 
 * Sets the minimum size of the splitter content in px.
 * 
 * Default value is <code>0</code>.
 * @returns {int} Value of property <code>minSize</code>
 * @public
 * 
 */
sap.ui.layout.SplitterLayoutData.prototype.getMinSize = function() { return 0; };

/**
 * Gets current value of property <code>resizable</code>.
 * 
 * Determines whether the control in the splitter can be resized or not.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>resizable</code>
 * @public
 * 
 */
sap.ui.layout.SplitterLayoutData.prototype.getResizable = function() { return false; };

/**
 * Gets current value of property <code>size</code>.
 * 
 * Sets the size of the splitter content.
 * 
 * Default value is <code>auto</code>.
 * @returns {sap.ui.core.CSSSize} Value of property <code>size</code>
 * @public
 * 
 */
sap.ui.layout.SplitterLayoutData.prototype.getSize = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets a new value for property <code>minSize</code>.
 * 
 * Sets the minimum size of the splitter content in px.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {int} iMinSize New value for property <code>minSize</code>
 * @returns {sap.ui.layout.SplitterLayoutData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.SplitterLayoutData.prototype.setMinSize = function(iMinSize) { return new sap.ui.layout.SplitterLayoutData(); };

/**
 * Sets a new value for property <code>resizable</code>.
 * 
 * Determines whether the control in the splitter can be resized or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bResizable New value for property <code>resizable</code>
 * @returns {sap.ui.layout.SplitterLayoutData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.SplitterLayoutData.prototype.setResizable = function(bResizable) { return new sap.ui.layout.SplitterLayoutData(); };

/**
 * Sets a new value for property <code>size</code>.
 * 
 * Sets the size of the splitter content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>auto</code>.
 * @param {sap.ui.core.CSSSize} sSize New value for property <code>size</code>
 * @returns {sap.ui.layout.SplitterLayoutData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.SplitterLayoutData.prototype.setSize = function(sSize) { return new sap.ui.layout.SplitterLayoutData(); };


// ---- sap.ui.layout.VerticalLayout --------------------------------------------------------------------------

/**
 * Constructor for a new VerticalLayout.
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
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getEnabled enabled} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getContent content} : sap.ui.core.Control[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] Id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * In this layout the content controls are rendered one below the other.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @constructor
 * @public
 * @since 1.16.0
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.ui.layout.VerticalLayout = function(sId,mSettings) {};
/**
 * Adds some content to the aggregation <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to add; to add; if empty, nothing is inserted
 * @returns {sap.ui.layout.VerticalLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.addContent = function(oContent) { return new sap.ui.layout.VerticalLayout(); };

/**
 * Destroys all the content in the aggregation <code>content</code>.
 * @returns {sap.ui.layout.VerticalLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.destroyContent = function() { return new sap.ui.layout.VerticalLayout(); };

/**
 * Creates a new subclass of class sap.ui.layout.VerticalLayout with name <code>sClassName</code>
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
sap.ui.layout.VerticalLayout.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets content of aggregation <code>content</code>.
 * 
 * Content controls within the layout.
 * @returns {sap.ui.core.Control[]}
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.getContent = function() { return new Array(); };

/**
 * Gets current value of property <code>enabled</code>.
 * 
 * If not enabled, all controls inside are not enabled automatically.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>enabled</code>
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.getEnabled = function() { return false; };

/**
 * Returns a metadata object for class sap.ui.layout.VerticalLayout.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.ui.layout.VerticalLayout.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>width</code>.
 * 
 * Width of the <code>VerticalLayout</code>. If no width is set, the width of the content is used.
 * If the content of the layout has a larger width than the layout, it is cut off.
 * There is no scrolling inside the layout.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.ui.core.Control</code> in the aggregation <code>content</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.ui.core.Control}
 *           oContent The content whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.indexOfContent = function(oContent) { return 0; };

/**
 * Inserts a content into the aggregation <code>content</code>.
 * @param {sap.ui.core.Control}
 *            oContent the content to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the content should be inserted at; for
 *              a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the content is inserted at
 *              the last position
 * @returns {sap.ui.layout.VerticalLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.insertContent = function(oContent,iIndex) { return new sap.ui.layout.VerticalLayout(); };

/**
 * Removes all the controls from the aggregation <code>content</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.ui.core.Control[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.removeAllContent = function() { return new Array(); };

/**
 * Removes a content from the aggregation <code>content</code>.
 * @param {int | string | sap.ui.core.Control} vContent The contentto remove or its index or id
 * @returns {sap.ui.core.Control} The removed content or <code>null</code>
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.removeContent = function(vContent) { return new sap.ui.core.Control(); };

/**
 * Sets a new value for property <code>enabled</code>.
 * 
 * If not enabled, all controls inside are not enabled automatically.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bEnabled New value for property <code>enabled</code>
 * @returns {sap.ui.layout.VerticalLayout} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.ui.layout.VerticalLayout.prototype.setEnabled = function(bEnabled) { return new sap.ui.layout.VerticalLayout(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.ui.layout.BackgroundDesign --------------------------------------------------------------------------

/**
 * A solid background color dependent on the theme.
 * @public
 * 
 */
sap.ui.layout.BackgroundDesign.Solid = "";

/**
 * A translucent background depending on the opacity value of the theme.
 * @public
 * 
 */
sap.ui.layout.BackgroundDesign.Translucent = "";

/**
 * Transparent background.
 * @public
 * 
 */
sap.ui.layout.BackgroundDesign.Transparent = "";


// ---- sap.ui.layout.BlockBackgroundType --------------------------------------------------------------------------

/**
 * Background is transparent
 * @public
 * 
 * @memberof sap.ui.layout.BlockBackgroundType
 */
sap.ui.layout.BlockBackgroundType.Default = undefined;

/**
 * Background is with predefined light colors
 * @public
 * 
 * @memberof sap.ui.layout.BlockBackgroundType
 */
sap.ui.layout.BlockBackgroundType.Light = undefined;


// ---- sap.ui.layout.form.SimpleFormLayout --------------------------------------------------------------------------

/**
 * Uses the <code>GridLayout</code> to render the <code>SimpleForm</code>
 * @public
 * 
 */
sap.ui.layout.form.SimpleFormLayout.GridLayout = "";

/**
 * Uses the <code>ResponsiveGridLayout</code> to render the <code>SimpleForm</code>
 * @public
 * @since 1.16.0
 * 
 */
sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout = "";

/**
 * Uses the <code>ResponsiveLayout</code> to render the <code>SimpleForm</code>
 * @public
 * 
 */
sap.ui.layout.form.SimpleFormLayout.ResponsiveLayout = "";


// ---- sap.ui.layout.GridPosition --------------------------------------------------------------------------

/**
 * Grid is centered on the screen.
 * @public
 * 
 */
sap.ui.layout.GridPosition.Center = "";

/**
 * Grid is aligned left.
 * @public
 * 
 */
sap.ui.layout.GridPosition.Left = "";

/**
 * Grid is aligned to the right.
 * @public
 * 
 */
sap.ui.layout.GridPosition.Right = "";


// ---- sap.ui.layout.SideContentFallDown --------------------------------------------------------------------------

/**
 * Side content falls down on breakpoints below L
 * @public
 * 
 */
sap.ui.layout.SideContentFallDown.BelowL = "";

/**
 * Side content falls down on breakpoints below M
 * @public
 * 
 */
sap.ui.layout.SideContentFallDown.BelowM = "";

/**
 * Side content falls down on breakpoints below XL
 * @public
 * 
 */
sap.ui.layout.SideContentFallDown.BelowXL = "";

/**
 * Side content falls down on breakpoint M and the minimum width for the side content
 * @public
 * 
 */
sap.ui.layout.SideContentFallDown.OnMinimumWidth = "";


// ---- sap.ui.layout.SideContentPosition --------------------------------------------------------------------------

/**
 * The side content is on the left side of the main container in left-to-right mode and on the right side in right-to-left mode.
 * @public
 * 
 */
sap.ui.layout.SideContentPosition.Begin = "";

/**
 * The side content is on the right side of the main container in left-to-right mode and on the left side in right-to-left mode.
 * @public
 * 
 */
sap.ui.layout.SideContentPosition.End = "";


// ---- sap.ui.layout.SideContentVisibility --------------------------------------------------------------------------

/**
 * Show the side content on any breakpoint
 * @public
 * 
 */
sap.ui.layout.SideContentVisibility.AlwaysShow = "";

/**
 * Don't show the side content on any breakpoints
 * @public
 * 
 */
sap.ui.layout.SideContentVisibility.NeverShow = "";

/**
 * Show the side content on XL breakpoint
 * @public
 * 
 */
sap.ui.layout.SideContentVisibility.ShowAboveL = "";

/**
 * Show the side content on L and XL breakpoints
 * @public
 * 
 */
sap.ui.layout.SideContentVisibility.ShowAboveM = "";

/**
 * Show the side content on M, L and XL breakpoints
 * @public
 * 
 */
sap.ui.layout.SideContentVisibility.ShowAboveS = "";

