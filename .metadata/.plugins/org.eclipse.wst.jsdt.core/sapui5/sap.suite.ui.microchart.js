
// ---- sap.suite.ui.microchart --------------------------------------------------------------------------


// ---- sap.suite.ui.microchart.AreaMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new AreaMicroChart control.
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
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxXValue maxXValue} : float</li>
 * <li>{@link #getMinXValue minXValue} : float</li>
 * <li>{@link #getMaxYValue maxYValue} : float</li>
 * <li>{@link #getMinYValue minYValue} : float</li>
 * <li>{@link #getView view} : sap.suite.ui.microchart.AreaMicroChartViewType (default: Normal)</li>
 * <li>{@link #getColorPalette colorPalette} : string[] (default: [])</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getChart chart} : sap.suite.ui.microchart.AreaMicroChartItem</li>
 * <li>{@link #getMaxThreshold maxThreshold} : sap.suite.ui.microchart.AreaMicroChartItem</li>
 * <li>{@link #getInnerMaxThreshold innerMaxThreshold} : sap.suite.ui.microchart.AreaMicroChartItem</li>
 * <li>{@link #getInnerMinThreshold innerMinThreshold} : sap.suite.ui.microchart.AreaMicroChartItem</li>
 * <li>{@link #getMinThreshold minThreshold} : sap.suite.ui.microchart.AreaMicroChartItem</li>
 * <li>{@link #getTarget target} : sap.suite.ui.microchart.AreaMicroChartItem</li>
 * <li>{@link #getFirstXLabel firstXLabel} : sap.suite.ui.microchart.AreaMicroChartLabel</li>
 * <li>{@link #getFirstYLabel firstYLabel} : sap.suite.ui.microchart.AreaMicroChartLabel</li>
 * <li>{@link #getLastXLabel lastXLabel} : sap.suite.ui.microchart.AreaMicroChartLabel</li>
 * <li>{@link #getLastYLabel lastYLabel} : sap.suite.ui.microchart.AreaMicroChartLabel</li>
 * <li>{@link #getMaxLabel maxLabel} : sap.suite.ui.microchart.AreaMicroChartLabel</li>
 * <li>{@link #getMinLabel minLabel} : sap.suite.ui.microchart.AreaMicroChartLabel</li>
 * <li>{@link #getLines lines} : sap.suite.ui.microchart.AreaMicroChartItem[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Chart that displays the history of values and target values as segmented lines and shows thresholds as colored background. This control replaces the deprecated sap.suite.ui.commons.MicroAreaChart.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.AreaMicroChart = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the micro area chart.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Adds some line to the aggregation <code>lines</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem}
 *            oLine the line to add; to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.addLine = function(oLine) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this <code>sap.suite.ui.microchart.AreaMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.AreaMicroChart</code> itself.
 * 
 * The event is fired when the user chooses the micro area chart.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.AreaMicroChart</code> itself
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the chart in the aggregation <code>chart</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyChart = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the firstXLabel in the aggregation <code>firstXLabel</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyFirstXLabel = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the firstYLabel in the aggregation <code>firstYLabel</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyFirstYLabel = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the innerMaxThreshold in the aggregation <code>innerMaxThreshold</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyInnerMaxThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the innerMinThreshold in the aggregation <code>innerMinThreshold</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyInnerMinThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the lastXLabel in the aggregation <code>lastXLabel</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyLastXLabel = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the lastYLabel in the aggregation <code>lastYLabel</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyLastYLabel = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys all the lines in the aggregation <code>lines</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyLines = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the maxLabel in the aggregation <code>maxLabel</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyMaxLabel = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the maxThreshold in the aggregation <code>maxThreshold</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyMaxThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the minLabel in the aggregation <code>minLabel</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyMinLabel = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the minThreshold in the aggregation <code>minThreshold</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyMinThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the target in the aggregation <code>target</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyTarget = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this <code>sap.suite.ui.microchart.AreaMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.AreaMicroChart with name <code>sClassName</code>
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
sap.suite.ui.microchart.AreaMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>press</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.firePress = function(mArguments) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Gets content of aggregation <code>chart</code>.
 * 
 * The configuration of the actual values line.
 * The color property defines the color of the line.
 * Points are rendered in the same sequence as in this aggregation.
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getChart = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Gets current value of property <code>colorPalette</code>.
 * 
 * The color palette for the chart. If this property is set,
 * semantic colors defined in AreaMicroChartItem are ignored.
 * Colors from the palette are assigned to each line consequentially.
 * When all the palette colors are used, assignment of the colors begins
 * from the first palette color.
 * 
 * Default value is <code>[]</code>.
 * @returns {string[]} Value of property <code>colorPalette</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getColorPalette = function() { return new Array(); };

/**
 * Gets content of aggregation <code>firstXLabel</code>.
 * 
 * The label on X axis for the first point of the chart.
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getFirstXLabel = function() { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };

/**
 * Gets content of aggregation <code>firstYLabel</code>.
 * 
 * The label on Y axis for the first point of the chart.
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getFirstYLabel = function() { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };

/**
 * Gets current value of property <code>height</code>.
 * 
 * The height of the chart.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets content of aggregation <code>innerMaxThreshold</code>.
 * 
 * The configuration of the upper line of the inner threshold area. The color property defines the color of the area between inner thresholds. For rendering of the inner threshold area, both innerMaxThreshold and innerMinThreshold aggregations must be defined. Points are rendered in the same sequence as in this aggregation.
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getInnerMaxThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Gets content of aggregation <code>innerMinThreshold</code>.
 * 
 * The configuration of the bottom line of the inner threshold area. The color property is ignored. For rendering of the inner threshold area, both innerMaxThreshold and innerMinThreshold aggregations must be defined. Points are rendered in the same sequence as in this aggregation.
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getInnerMinThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Gets content of aggregation <code>lastXLabel</code>.
 * 
 * The label on X axis for the last point of the chart.
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getLastXLabel = function() { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };

/**
 * Gets content of aggregation <code>lastYLabel</code>.
 * 
 * The label on Y axis for the last point of the chart.
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getLastYLabel = function() { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };

/**
 * Gets content of aggregation <code>lines</code>.
 * 
 * The set of lines.
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem[]}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getLines = function() { return new Array(); };

/**
 * Gets content of aggregation <code>maxLabel</code>.
 * 
 * The label for the maximum point of the chart.
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMaxLabel = function() { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };

/**
 * Gets content of aggregation <code>maxThreshold</code>.
 * 
 * The configuration of the max threshold area. The color property defines the color of the area above the max threshold line. Points are rendered in the same sequence as in this aggregation.
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMaxThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Gets current value of property <code>maxXValue</code>.
 * 
 * If this property is set it indicates the value X axis ends with.
 * @returns {float} Value of property <code>maxXValue</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMaxXValue = function() { return 0.0; };

/**
 * Gets current value of property <code>maxYValue</code>.
 * 
 * If this property is set it indicates the value X axis ends with.
 * @returns {float} Value of property <code>maxYValue</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMaxYValue = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.AreaMicroChart.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>minLabel</code>.
 * 
 * The label for the minimum point of the chart.
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMinLabel = function() { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };

/**
 * Gets content of aggregation <code>minThreshold</code>.
 * 
 * The configuration of the min threshold area. The color property defines the color of the area below the min threshold line. Points are rendered in the same sequence as in this aggregation.
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMinThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Gets current value of property <code>minXValue</code>.
 * 
 * If this property is set it indicates the value X axis ends with.
 * @returns {float} Value of property <code>minXValue</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMinXValue = function() { return 0.0; };

/**
 * Gets current value of property <code>minYValue</code>.
 * 
 * If this property is set it indicates the value X axis ends with.
 * @returns {float} Value of property <code>minYValue</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMinYValue = function() { return 0.0; };

/**
 * Gets content of aggregation <code>target</code>.
 * 
 * The configuration of the target values line. The color property defines the color of the line. Points are rendered in the same sequence as in this aggregation.
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getTarget = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Gets current value of property <code>view</code>.
 * 
 * The view of the chart.
 * 
 * Default value is <code>Normal</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChartViewType} Value of property <code>view</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getView = function() { return new sap.suite.ui.microchart.AreaMicroChartViewType(); };

/**
 * Gets current value of property <code>width</code>.
 * 
 * The width of the chart.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.AreaMicroChartItem</code> in the aggregation <code>lines</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem}
 *           oLine The line whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.indexOfLine = function(oLine) { return 0; };

/**
 * Inserts a line into the aggregation <code>lines</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem}
 *            oLine the line to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the line should be inserted at; for
 *              a negative value of <code>iIndex</code>, the line is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the line is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.insertLine = function(oLine,iIndex) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Removes all the controls from the aggregation <code>lines</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.removeAllLines = function() { return new Array(); };

/**
 * Removes a line from the aggregation <code>lines</code>.
 * @param {int | string | sap.suite.ui.microchart.AreaMicroChartItem} vLine The lineto remove or its index or id
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem} The removed line or <code>null</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.removeLine = function(vLine) { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Sets the aggregated <code>chart</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem} oChart The chart to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setChart = function(oChart) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets a new value for property <code>colorPalette</code>.
 * 
 * The color palette for the chart. If this property is set,
 * semantic colors defined in AreaMicroChartItem are ignored.
 * Colors from the palette are assigned to each line consequentially.
 * When all the palette colors are used, assignment of the colors begins
 * from the first palette color.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {string[]} sColorPalette New value for property <code>colorPalette</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setColorPalette = function(sColorPalette) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated <code>firstXLabel</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartLabel} oFirstXLabel The firstXLabel to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setFirstXLabel = function(oFirstXLabel) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated <code>firstYLabel</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartLabel} oFirstYLabel The firstYLabel to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setFirstYLabel = function(oFirstYLabel) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets a new value for property <code>height</code>.
 * 
 * The height of the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setHeight = function(sHeight) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated <code>innerMaxThreshold</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem} oInnerMaxThreshold The innerMaxThreshold to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setInnerMaxThreshold = function(oInnerMaxThreshold) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated <code>innerMinThreshold</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem} oInnerMinThreshold The innerMinThreshold to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setInnerMinThreshold = function(oInnerMinThreshold) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated <code>lastXLabel</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartLabel} oLastXLabel The lastXLabel to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setLastXLabel = function(oLastXLabel) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated <code>lastYLabel</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartLabel} oLastYLabel The lastYLabel to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setLastYLabel = function(oLastYLabel) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated <code>maxLabel</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartLabel} oMaxLabel The maxLabel to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMaxLabel = function(oMaxLabel) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated <code>maxThreshold</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem} oMaxThreshold The maxThreshold to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMaxThreshold = function(oMaxThreshold) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Property setter for the Max X value
 * @param {int} value - new value Max X
 * @param {boolean} bSuppressInvalidate - Suppress in validate
 * @returns {void}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMaxXValue = function(value,bSuppressInvalidate) { return null; };

/**
 * Property setter for the Max Y valye
 * @param {string} value - new value Max Y
 * @param {boolean} bSuppressInvalidate - Suppress in validate
 * @returns {void}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMaxYValue = function(value,bSuppressInvalidate) { return null; };

/**
 * Sets the aggregated <code>minLabel</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartLabel} oMinLabel The minLabel to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMinLabel = function(oMinLabel) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated <code>minThreshold</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem} oMinThreshold The minThreshold to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMinThreshold = function(oMinThreshold) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Property setter for the Min X value
 * @param {int} value - new value Min X
 * @param {boolean} bSuppressInvalidate - Suppress in validate
 * @returns {void}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMinXValue = function(value,bSuppressInvalidate) { return null; };

/**
 * Property setter for the Min Y value
 * @param {value} value - new value Min Y
 * @param {boolean} bSuppressInvalidate - Suppress in validate
 * @returns {void}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMinYValue = function(value,bSuppressInvalidate) { return null; };

/**
 * Sets the aggregated <code>target</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem} oTarget The target to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setTarget = function(oTarget) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets a new value for property <code>view</code>.
 * 
 * The view of the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Normal</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartViewType} sView New value for property <code>view</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setView = function(sView) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * The width of the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.AreaMicroChart(); };


// ---- sap.suite.ui.microchart.AreaMicroChartItem --------------------------------------------------------------------------

/**
 * The configuration of the graphic element on the chart.
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
 * <li>{@link #getColor color} : sap.m.ValueColor (default: Neutral)</li>
 * <li>{@link #getTitle title} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPoints points} : sap.suite.ui.microchart.AreaMicroChartPoint[]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Graphical representation of the area micro chart regarding the value lines, the thresholds, and the target values.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem = function(sId,mSettings) {};
/**
 * Adds some point to the aggregation <code>points</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartPoint}
 *            oPoint the point to add; to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.addPoint = function(oPoint) { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Destroys all the points in the aggregation <code>points</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.destroyPoints = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.AreaMicroChartItem with name <code>sClassName</code>
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
sap.suite.ui.microchart.AreaMicroChartItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The graphic element color.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueColor} Value of property <code>color</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.getColor = function() { return new sap.m.ValueColor(); };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.AreaMicroChartItem.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>points</code>.
 * 
 * The set of points for this graphic element.
 * @returns {sap.suite.ui.microchart.AreaMicroChartPoint[]}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.getPoints = function() { return new Array(); };

/**
 * Gets current value of property <code>title</code>.
 * 
 * The line title.
 * @returns {string} Value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.getTitle = function() { return ""; };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.AreaMicroChartPoint</code> in the aggregation <code>points</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.AreaMicroChartPoint}
 *           oPoint The point whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.indexOfPoint = function(oPoint) { return 0; };

/**
 * Inserts a point into the aggregation <code>points</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartPoint}
 *            oPoint the point to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the point should be inserted at; for
 *              a negative value of <code>iIndex</code>, the point is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the point is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.insertPoint = function(oPoint,iIndex) { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Removes all the controls from the aggregation <code>points</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.AreaMicroChartPoint[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.removeAllPoints = function() { return new Array(); };

/**
 * Removes a point from the aggregation <code>points</code>.
 * @param {int | string | sap.suite.ui.microchart.AreaMicroChartPoint} vPoint The pointto remove or its index or id
 * @returns {sap.suite.ui.microchart.AreaMicroChartPoint} The removed point or <code>null</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.removePoint = function(vPoint) { return new sap.suite.ui.microchart.AreaMicroChartPoint(); };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The graphic element color.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Sets a new value for property <code>title</code>.
 * 
 * The line title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.setTitle = function(sTitle) { return new sap.suite.ui.microchart.AreaMicroChartItem(); };


// ---- sap.suite.ui.microchart.AreaMicroChartLabel --------------------------------------------------------------------------

/**
 * Constructor for a new AreaMicroChart control.
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
 * <li>{@link #getColor color} : sap.m.ValueColor (default: Neutral)</li>
 * <li>{@link #getLabel label} : string (default: )</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Displays or hides the labels for start and end dates, start and end values, and minimum and maximum values.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.AreaMicroChartLabel = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.AreaMicroChartLabel with name <code>sClassName</code>
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
sap.suite.ui.microchart.AreaMicroChartLabel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The graphic element color.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueColor} Value of property <code>color</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartLabel.prototype.getColor = function() { return new sap.m.ValueColor(); };

/**
 * Gets current value of property <code>label</code>.
 * 
 * The line title.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>label</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartLabel.prototype.getLabel = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.AreaMicroChartLabel.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.AreaMicroChartLabel.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The graphic element color.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartLabel.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };

/**
 * Sets a new value for property <code>label</code>.
 * 
 * The line title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sLabel New value for property <code>label</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartLabel.prototype.setLabel = function(sLabel) { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };


// ---- sap.suite.ui.microchart.AreaMicroChartPoint --------------------------------------------------------------------------

/**
 * This control contains data for the point.
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
 * <li>{@link #getX x} : float</li>
 * <li>{@link #getY y} : float</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Contains the data for the point.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.AreaMicroChartPoint with name <code>sClassName</code>
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
sap.suite.ui.microchart.AreaMicroChartPoint.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.AreaMicroChartPoint.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>x</code>.
 * 
 * X value for the given point.
 * @returns {float} Value of property <code>x</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.prototype.getX = function() { return 0.0; };

/**
 * Returns the x value. It returns 'undefined', if the x property was not set or an invalid number was set.
 * @public
 * @returns {string}
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.prototype.getXValue = function() { return ""; };

/**
 * Gets current value of property <code>y</code>.
 * 
 * Y value for the given point.
 * @returns {float} Value of property <code>y</code>
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.prototype.getY = function() { return 0.0; };

/**
 * Returns the y value. It returns 'undefined', if the y property was not set or an invalid number was set.
 * @public
 * @returns {float}	
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.prototype.getYValue = function() { return 0.0; };

/**
 * Sets a new value for property <code>x</code>.
 * 
 * X value for the given point.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {float} fX New value for property <code>x</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChartPoint} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.prototype.setX = function(fX) { return new sap.suite.ui.microchart.AreaMicroChartPoint(); };

/**
 * Sets a new value for property <code>y</code>.
 * 
 * Y value for the given point.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {float} fY New value for property <code>y</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChartPoint} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.prototype.setY = function(fY) { return new sap.suite.ui.microchart.AreaMicroChartPoint(); };


// ---- sap.suite.ui.microchart.AreaMicroChartViewType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.microchart.AreaMicroChartViewType.toString = function() { return ""; };

// ---- sap.suite.ui.microchart.BulletMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new BulletMicroChart control.
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
 * <li>{@link #getSize size} : sap.m.Size (default: Auto)</li>
 * <li>{@link #getMode mode} : sap.suite.ui.microchart.BulletMicroChartModeType (default: Actual)</li>
 * <li>{@link #getScale scale} : string (default: )</li>
 * <li>{@link #getForecastValue forecastValue} : float</li>
 * <li>{@link #getTargetValue targetValue} : float</li>
 * <li>{@link #getMinValue minValue} : float</li>
 * <li>{@link #getMaxValue maxValue} : float</li>
 * <li>{@link #getShowActualValue showActualValue} : boolean (default: true)</li>
 * <li>{@link #getShowDeltaValue showDeltaValue} : boolean (default: true)</li>
 * <li>{@link #getShowTargetValue showTargetValue} : boolean (default: true)</li>
 * <li>{@link #getShowValueMarker showValueMarker} : boolean (default: false)</li>
 * <li>{@link #getActualValueLabel actualValueLabel} : string (default: )</li>
 * <li>{@link #getDeltaValueLabel deltaValueLabel} : string (default: )</li>
 * <li>{@link #getTargetValueLabel targetValueLabel} : string (default: )</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getScaleColor scaleColor} : sap.suite.ui.microchart.CommonBackgroundType (default: MediumLight)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getActual actual} : sap.suite.ui.microchart.BulletMicroChartData</li>
 * <li>{@link #getThresholds thresholds} : sap.suite.ui.microchart.BulletMicroChartData[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Displays a colored horizontal bar representing a current value on top of a background bar representing the compared value. The vertical bars can represent the numeric values, the scaling factors, the thresholds, and the target values.  This control replaces the deprecated sap.suite.ui.commons.BulletChart.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.BulletMicroChart = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the bullet microchart.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Adds some threshold to the aggregation <code>thresholds</code>.
 * @param {sap.suite.ui.microchart.BulletMicroChartData}
 *            oThreshold the threshold to add; to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.addThreshold = function(oThreshold) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this <code>sap.suite.ui.microchart.BulletMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.BulletMicroChart</code> itself.
 * 
 * The event is fired when the user chooses the bullet microchart.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.BulletMicroChart</code> itself
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Destroys the actual in the aggregation <code>actual</code>.
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.destroyActual = function() { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Destroys all the thresholds in the aggregation <code>thresholds</code>.
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.destroyThresholds = function() { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this <code>sap.suite.ui.microchart.BulletMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.BulletMicroChart with name <code>sClassName</code>
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
sap.suite.ui.microchart.BulletMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>press</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.firePress = function(mArguments) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Gets content of aggregation <code>actual</code>.
 * 
 * The bullet chart actual data.
 * @returns {sap.suite.ui.microchart.BulletMicroChartData}
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getActual = function() { return new sap.suite.ui.microchart.BulletMicroChartData(); };

/**
 * Gets current value of property <code>actualValueLabel</code>.
 * 
 * If set, displays a specified label instead of the numeric actual value.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>actualValueLabel</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getActualValueLabel = function() { return ""; };

/**
 * Gets current value of property <code>deltaValueLabel</code>.
 * 
 * If set, displays a specified label instead of the calculated numeric delta value.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>deltaValueLabel</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getDeltaValueLabel = function() { return ""; };

/**
 * Gets current value of property <code>forecastValue</code>.
 * 
 * The forecast value that is displayed in Actual  mode only. If set, the forecast value bar appears in the background of the actual value bar.
 * @returns {float} Value of property <code>forecastValue</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getForecastValue = function() { return 0.0; };

/**
 * Gets current value of property <code>maxValue</code>.
 * 
 * The maximum scale value for the bar chart used for defining a fixed size of the scale in different instances of this control.
 * @returns {float} Value of property <code>maxValue</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getMaxValue = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.BulletMicroChart.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>minValue</code>.
 * 
 * The minimum scale value for the bar chart used for defining a fixed size of the scale in different instances of this control.
 * @returns {float} Value of property <code>minValue</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getMinValue = function() { return 0.0; };

/**
 * Gets current value of property <code>mode</code>.
 * 
 * The mode of displaying the actual value itself or the delta between the actual value and the target value. If not set, the actual value is displayed.
 * 
 * Default value is <code>Actual</code>.
 * @returns {sap.suite.ui.microchart.BulletMicroChartModeType} Value of property <code>mode</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getMode = function() { return new sap.suite.ui.microchart.BulletMicroChartModeType(); };

/**
 * Gets current value of property <code>scale</code>.
 * 
 * The scaling suffix that is added to the actual and target values.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>scale</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getScale = function() { return ""; };

/**
 * Gets current value of property <code>scaleColor</code>.
 * 
 * The background color of the scale.
 * 
 * Default value is <code>MediumLight</code>.
 * @returns {sap.suite.ui.microchart.CommonBackgroundType} Value of property <code>scaleColor</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getScaleColor = function() { return new sap.suite.ui.microchart.CommonBackgroundType(); };

/**
 * Gets current value of property <code>showActualValue</code>.
 * 
 * If set to true, shows the numeric actual value. This property works in Actual mode only.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showActualValue</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getShowActualValue = function() { return false; };

/**
 * Gets current value of property <code>showDeltaValue</code>.
 * 
 * If set to true, shows the calculated delta value instead of the numeric actual value regardless of the showActualValue setting. This property works in Delta mode only.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showDeltaValue</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getShowDeltaValue = function() { return false; };

/**
 * Gets current value of property <code>showTargetValue</code>.
 * 
 * If set to true, shows the numeric target value.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showTargetValue</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getShowTargetValue = function() { return false; };

/**
 * Gets current value of property <code>showValueMarker</code>.
 * 
 * If set to true, shows the value marker.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showValueMarker</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getShowValueMarker = function() { return false; };

/**
 * Gets current value of property <code>size</code>.
 * 
 * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.m.Size} Value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getSize = function() { return new sap.m.Size(); };

/**
 * Gets current value of property <code>targetValue</code>.
 * 
 * The target value that is displayed as a black vertical bar.
 * @returns {float} Value of property <code>targetValue</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getTargetValue = function() { return 0.0; };

/**
 * Gets current value of property <code>targetValueLabel</code>.
 * 
 * If set, displays a specified label instead of the numeric target value.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>targetValueLabel</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getTargetValueLabel = function() { return ""; };

/**
 * Gets content of aggregation <code>thresholds</code>.
 * 
 * The bullet chart thresholds data.
 * @returns {sap.suite.ui.microchart.BulletMicroChartData[]}
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getThresholds = function() { return new Array(); };

/**
 * Gets current value of property <code>width</code>.
 * 
 * The width of the chart. If it is not set, the size of the control is defined by the size property.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.BulletMicroChartData</code> in the aggregation <code>thresholds</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.BulletMicroChartData}
 *           oThreshold The threshold whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.indexOfThreshold = function(oThreshold) { return 0; };

/**
 * Inserts a threshold into the aggregation <code>thresholds</code>.
 * @param {sap.suite.ui.microchart.BulletMicroChartData}
 *            oThreshold the threshold to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the threshold should be inserted at; for
 *              a negative value of <code>iIndex</code>, the threshold is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the threshold is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.insertThreshold = function(oThreshold,iIndex) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Removes all the controls from the aggregation <code>thresholds</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.BulletMicroChartData[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.removeAllThresholds = function() { return new Array(); };

/**
 * Removes a threshold from the aggregation <code>thresholds</code>.
 * @param {int | string | sap.suite.ui.microchart.BulletMicroChartData} vThreshold The thresholdto remove or its index or id
 * @returns {sap.suite.ui.microchart.BulletMicroChartData} The removed threshold or <code>null</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.removeThreshold = function(vThreshold) { return new sap.suite.ui.microchart.BulletMicroChartData(); };

/**
 * Sets the aggregated <code>actual</code>.
 * @param {sap.suite.ui.microchart.BulletMicroChartData} oActual The actual to set
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setActual = function(oActual) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>actualValueLabel</code>.
 * 
 * If set, displays a specified label instead of the numeric actual value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sActualValueLabel New value for property <code>actualValueLabel</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setActualValueLabel = function(sActualValueLabel) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>deltaValueLabel</code>.
 * 
 * If set, displays a specified label instead of the calculated numeric delta value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sDeltaValueLabel New value for property <code>deltaValueLabel</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setDeltaValueLabel = function(sDeltaValueLabel) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>forecastValue</code>.
 * 
 * The forecast value that is displayed in Actual  mode only. If set, the forecast value bar appears in the background of the actual value bar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {float} fForecastValue New value for property <code>forecastValue</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setForecastValue = function(fForecastValue) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>maxValue</code>.
 * 
 * The maximum scale value for the bar chart used for defining a fixed size of the scale in different instances of this control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {float} fMaxValue New value for property <code>maxValue</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setMaxValue = function(fMaxValue) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>minValue</code>.
 * 
 * The minimum scale value for the bar chart used for defining a fixed size of the scale in different instances of this control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {float} fMinValue New value for property <code>minValue</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setMinValue = function(fMinValue) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>mode</code>.
 * 
 * The mode of displaying the actual value itself or the delta between the actual value and the target value. If not set, the actual value is displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Actual</code>.
 * @param {sap.suite.ui.microchart.BulletMicroChartModeType} sMode New value for property <code>mode</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setMode = function(sMode) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>scale</code>.
 * 
 * The scaling suffix that is added to the actual and target values.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sScale New value for property <code>scale</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setScale = function(sScale) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>scaleColor</code>.
 * 
 * The background color of the scale.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>MediumLight</code>.
 * @param {sap.suite.ui.microchart.CommonBackgroundType} sScaleColor New value for property <code>scaleColor</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setScaleColor = function(sScaleColor) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>showActualValue</code>.
 * 
 * If set to true, shows the numeric actual value. This property works in Actual mode only.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowActualValue New value for property <code>showActualValue</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setShowActualValue = function(bShowActualValue) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>showDeltaValue</code>.
 * 
 * If set to true, shows the calculated delta value instead of the numeric actual value regardless of the showActualValue setting. This property works in Delta mode only.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowDeltaValue New value for property <code>showDeltaValue</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setShowDeltaValue = function(bShowDeltaValue) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>showTargetValue</code>.
 * 
 * If set to true, shows the numeric target value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowTargetValue New value for property <code>showTargetValue</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setShowTargetValue = function(bShowTargetValue) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>showValueMarker</code>.
 * 
 * If set to true, shows the value marker.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowValueMarker New value for property <code>showValueMarker</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setShowValueMarker = function(bShowValueMarker) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>size</code>.
 * 
 * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.m.Size} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setSize = function(sSize) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>targetValue</code>.
 * 
 * The target value that is displayed as a black vertical bar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {float} fTargetValue New value for property <code>targetValue</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setTargetValue = function(fTargetValue) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>targetValueLabel</code>.
 * 
 * If set, displays a specified label instead of the numeric target value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sTargetValueLabel New value for property <code>targetValueLabel</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setTargetValueLabel = function(sTargetValueLabel) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * The width of the chart. If it is not set, the size of the control is defined by the size property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.BulletMicroChart(); };


// ---- sap.suite.ui.microchart.BulletMicroChartData --------------------------------------------------------------------------

/**
 * Constructor for a new BulletMicroChartData.
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
 * <li>{@link #getValue value} : float (default: 0)</li>
 * <li>{@link #getColor color} : sap.m.ValueColor (default: Neutral)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Contains the thresholds data.
 * @extends sap.ui.core.Element
 * @version 1.36.12
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.BulletMicroChartData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.BulletMicroChartData with name <code>sClassName</code>
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
sap.suite.ui.microchart.BulletMicroChartData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The semantic color of the actual value.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueColor} Value of property <code>color</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChartData.prototype.getColor = function() { return new sap.m.ValueColor(); };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.BulletMicroChartData.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.BulletMicroChartData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>value</code>.
 * 
 * The actual value.
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>value</code>
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChartData.prototype.getValue = function() { return 0.0; };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The semantic color of the actual value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChartData.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.BulletMicroChartData(); };

/**
 * Sets a new value for property <code>value</code>.
 * 
 * The actual value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fValue New value for property <code>value</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChartData.prototype.setValue = function(fValue) { return new sap.suite.ui.microchart.BulletMicroChartData(); };


// ---- sap.suite.ui.microchart.BulletMicroChartModeType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.microchart.BulletMicroChartModeType.toString = function() { return ""; };

// ---- sap.suite.ui.microchart.ColumnMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new ColumnMicroChart control.
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
 * <li>{@link #getSize size} : sap.m.Size (default: Auto)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getColumns columns} : sap.suite.ui.microchart.ColumnMicroChartData[]</li>
 * <li>{@link #getLeftTopLabel leftTopLabel} : sap.suite.ui.microchart.ColumnMicroChartLabel</li>
 * <li>{@link #getRightTopLabel rightTopLabel} : sap.suite.ui.microchart.ColumnMicroChartLabel</li>
 * <li>{@link #getLeftBottomLabel leftBottomLabel} : sap.suite.ui.microchart.ColumnMicroChartLabel</li>
 * <li>{@link #getRightBottomLabel rightBottomLabel} : sap.suite.ui.microchart.ColumnMicroChartLabel</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Compares different values which are represented as vertical bars. This control replaces the deprecated sap.suite.ui.commons.ColumnMicroChart.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the column chart.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Adds some column to the aggregation <code>columns</code>.
 * @param {sap.suite.ui.microchart.ColumnMicroChartData}
 *            oColumn the column to add; to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.addColumn = function(oColumn) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this <code>sap.suite.ui.microchart.ColumnMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.ColumnMicroChart</code> itself.
 * 
 * The event is fired when the user chooses the column chart.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.ColumnMicroChart</code> itself
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Destroys all the columns in the aggregation <code>columns</code>.
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.destroyColumns = function() { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Destroys the leftBottomLabel in the aggregation <code>leftBottomLabel</code>.
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.destroyLeftBottomLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Destroys the leftTopLabel in the aggregation <code>leftTopLabel</code>.
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.destroyLeftTopLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Destroys the rightBottomLabel in the aggregation <code>rightBottomLabel</code>.
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.destroyRightBottomLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Destroys the rightTopLabel in the aggregation <code>rightTopLabel</code>.
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.destroyRightTopLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this <code>sap.suite.ui.microchart.ColumnMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.ColumnMicroChart with name <code>sClassName</code>
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
sap.suite.ui.microchart.ColumnMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>press</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.firePress = function(mArguments) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Gets content of aggregation <code>columns</code>.
 * 
 * The column chart data.
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData[]}
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getColumns = function() { return new Array(); };

/**
 * Gets current value of property <code>height</code>.
 * 
 * The height of the chart. If it is not set, the height of the control is defined by the size property.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets content of aggregation <code>leftBottomLabel</code>.
 * 
 * The label on the left bottom corner of the chart.
 * @returns {sap.suite.ui.microchart.ColumnMicroChartLabel}
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getLeftBottomLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChartLabel(); };

/**
 * Gets content of aggregation <code>leftTopLabel</code>.
 * 
 * The label on the left top corner of the chart.
 * @returns {sap.suite.ui.microchart.ColumnMicroChartLabel}
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getLeftTopLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChartLabel(); };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.ColumnMicroChart.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation <code>rightBottomLabel</code>.
 * 
 * The label on the right bottom corner of the chart.
 * @returns {sap.suite.ui.microchart.ColumnMicroChartLabel}
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getRightBottomLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChartLabel(); };

/**
 * Gets content of aggregation <code>rightTopLabel</code>.
 * 
 * The label on the right top corner of the chart.
 * @returns {sap.suite.ui.microchart.ColumnMicroChartLabel}
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getRightTopLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChartLabel(); };

/**
 * Gets current value of property <code>size</code>.
 * 
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.m.Size} Value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getSize = function() { return new sap.m.Size(); };

/**
 * Gets current value of property <code>width</code>.
 * 
 * The width of the chart. If it is not set, the width of the control is defined by the size property.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.ColumnMicroChartData</code> in the aggregation <code>columns</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.ColumnMicroChartData}
 *           oColumn The column whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.indexOfColumn = function(oColumn) { return 0; };

/**
 * Inserts a column into the aggregation <code>columns</code>.
 * @param {sap.suite.ui.microchart.ColumnMicroChartData}
 *            oColumn the column to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the column should be inserted at; for
 *              a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the column is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.insertColumn = function(oColumn,iIndex) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Removes all the controls from the aggregation <code>columns</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.removeAllColumns = function() { return new Array(); };

/**
 * Removes a column from the aggregation <code>columns</code>.
 * @param {int | string | sap.suite.ui.microchart.ColumnMicroChartData} vColumn The columnto remove or its index or id
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} The removed column or <code>null</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.removeColumn = function(vColumn) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };

/**
 * Sets a new value for property <code>height</code>.
 * 
 * The height of the chart. If it is not set, the height of the control is defined by the size property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setHeight = function(sHeight) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets the aggregated <code>leftBottomLabel</code>.
 * @param {sap.suite.ui.microchart.ColumnMicroChartLabel} oLeftBottomLabel The leftBottomLabel to set
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setLeftBottomLabel = function(oLeftBottomLabel) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets the aggregated <code>leftTopLabel</code>.
 * @param {sap.suite.ui.microchart.ColumnMicroChartLabel} oLeftTopLabel The leftTopLabel to set
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setLeftTopLabel = function(oLeftTopLabel) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets the aggregated <code>rightBottomLabel</code>.
 * @param {sap.suite.ui.microchart.ColumnMicroChartLabel} oRightBottomLabel The rightBottomLabel to set
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setRightBottomLabel = function(oRightBottomLabel) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets the aggregated <code>rightTopLabel</code>.
 * @param {sap.suite.ui.microchart.ColumnMicroChartLabel} oRightTopLabel The rightTopLabel to set
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setRightTopLabel = function(oRightTopLabel) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets a new value for property <code>size</code>.
 * 
 * Updates the size of the chart. If not set then the default size is applied based on the device tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.m.Size} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setSize = function(sSize) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * The width of the chart. If it is not set, the width of the control is defined by the size property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.ColumnMicroChart(); };


// ---- sap.suite.ui.microchart.ColumnMicroChartData --------------------------------------------------------------------------

/**
 * Constructor for a new ColumnMicroChartData control.
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
 * <li>{@link #getColor color} : sap.m.ValueColor (default: Neutral)</li>
 * <li>{@link #getLabel label} : string (default: )</li>
 * <li>{@link #getValue value} : float</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Defines the column chart data.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the column data.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this <code>sap.suite.ui.microchart.ColumnMicroChartData</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.ColumnMicroChartData</code> itself.
 * 
 * The event is fired when the user chooses the column data.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.ColumnMicroChartData</code> itself
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this <code>sap.suite.ui.microchart.ColumnMicroChartData</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.ColumnMicroChartData with name <code>sClassName</code>
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
sap.suite.ui.microchart.ColumnMicroChartData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>press</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.firePress = function(mArguments) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The graphic element color.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueColor} Value of property <code>color</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.getColor = function() { return new sap.m.ValueColor(); };

/**
 * Gets current value of property <code>label</code>.
 * 
 * The line title.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>label</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.getLabel = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.ColumnMicroChartData.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>value</code>.
 * 
 * The actual value.
 * @returns {float} Value of property <code>value</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.getValue = function() { return 0.0; };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The graphic element color.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };

/**
 * Sets a new value for property <code>label</code>.
 * 
 * The line title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sLabel New value for property <code>label</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.setLabel = function(sLabel) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };

/**
 * Sets a new value for property <code>value</code>.
 * 
 * The actual value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {float} fValue New value for property <code>value</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.setValue = function(fValue) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };


// ---- sap.suite.ui.microchart.ColumnMicroChartLabel --------------------------------------------------------------------------

/**
 * Constructor for a new ColumnMicroChartLabel control.
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
 * <li>{@link #getColor color} : sap.m.ValueColor (default: Neutral)</li>
 * <li>{@link #getLabel label} : string (default: )</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Displays or hides the labels of a column micro chart.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartLabel = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.ColumnMicroChartLabel with name <code>sClassName</code>
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
sap.suite.ui.microchart.ColumnMicroChartLabel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The graphic element color.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueColor} Value of property <code>color</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartLabel.prototype.getColor = function() { return new sap.m.ValueColor(); };

/**
 * Gets current value of property <code>label</code>.
 * 
 * The line title.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>label</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartLabel.prototype.getLabel = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.ColumnMicroChartLabel.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartLabel.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The graphic element color.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChartLabel} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartLabel.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.ColumnMicroChartLabel(); };

/**
 * Sets a new value for property <code>label</code>.
 * 
 * The line title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sLabel New value for property <code>label</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChartLabel} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartLabel.prototype.setLabel = function(sLabel) { return new sap.suite.ui.microchart.ColumnMicroChartLabel(); };


// ---- sap.suite.ui.microchart.CommonBackgroundType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.microchart.CommonBackgroundType.toString = function() { return ""; };

// ---- sap.suite.ui.microchart.ComparisonMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new ComparisonMicroChart control.
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
 * <li>{@link #getSize size} : sap.m.Size (default: Auto)</li>
 * <li>{@link #getScale scale} : string (default: )</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getView view} : sap.suite.ui.microchart.ComparisonMicroChartViewType (default: Normal)</li>
 * <li>{@link #getColorPalette colorPalette} : string[] (default: [])</li>
 * <li>{@link #getShrinkable shrinkable} : boolean (default: false)</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getData data} : sap.suite.ui.microchart.ComparisonMicroChartData[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Illustrates values as colored bar charts with title, numeric value, and scaling factor in the content area. This control replaces the deprecated sap.suite.ui.commons.ComparisonChart.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the comparison microchart.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Adds some data to the aggregation <code>data</code>.
 * @param {sap.suite.ui.microchart.ComparisonMicroChartData}
 *            oData the data to add; to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.addData = function(oData) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this <code>sap.suite.ui.microchart.ComparisonMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.ComparisonMicroChart</code> itself.
 * 
 * The event is fired when the user chooses the comparison microchart.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.ComparisonMicroChart</code> itself
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Destroys all the data in the aggregation <code>data</code>.
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.destroyData = function() { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this <code>sap.suite.ui.microchart.ComparisonMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.ComparisonMicroChart with name <code>sClassName</code>
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
sap.suite.ui.microchart.ComparisonMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>press</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.firePress = function(mArguments) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Gets current value of property <code>colorPalette</code>.
 * 
 * The color palette for the chart. If this property is set, semantic colors defined in ComparisonData are ignored. Colors from the palette are assigned to each bar consequentially. When all the palette colors are used, assignment of the colors begins from the first palette color.
 * 
 * Default value is <code>[]</code>.
 * @returns {string[]} Value of property <code>colorPalette</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getColorPalette = function() { return new Array(); };

/**
 * Gets content of aggregation <code>data</code>.
 * 
 * The comparison chart bar data.
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData[]}
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getData = function() { return new Array(); };

/**
 * Gets current value of property <code>height</code>.
 * 
 * Height of the chart.
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.ComparisonMicroChart.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>scale</code>.
 * 
 * The scaling suffix that is added to the actual and target values.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>scale</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getScale = function() { return ""; };

/**
 * Gets current value of property <code>shrinkable</code>.
 * 
 * If it is set to true, the height of the control is defined by its content.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>shrinkable</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getShrinkable = function() { return false; };

/**
 * Gets current value of property <code>size</code>.
 * 
 * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.m.Size} Value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getSize = function() { return new sap.m.Size(); };

/**
 * Gets current value of property <code>view</code>.
 * 
 * The view of the chart. If not set, the Normal view is used by default.
 * 
 * Default value is <code>Normal</code>.
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartViewType} Value of property <code>view</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getView = function() { return new sap.suite.ui.microchart.ComparisonMicroChartViewType(); };

/**
 * Gets current value of property <code>width</code>.
 * 
 * The width of the chart. If it is not set, the size of the control is defined by the size property.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.ComparisonMicroChartData</code> in the aggregation <code>data</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.ComparisonMicroChartData}
 *           oData The data whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.indexOfData = function(oData) { return 0; };

/**
 * Inserts a data into the aggregation <code>data</code>.
 * @param {sap.suite.ui.microchart.ComparisonMicroChartData}
 *            oData the data to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the data should be inserted at; for
 *              a negative value of <code>iIndex</code>, the data is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the data is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.insertData = function(oData,iIndex) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Removes all the controls from the aggregation <code>data</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.removeAllData = function() { return new Array(); };

/**
 * Removes a data from the aggregation <code>data</code>.
 * @param {int | string | sap.suite.ui.microchart.ComparisonMicroChartData} vData The datato remove or its index or id
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} The removed data or <code>null</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.removeData = function(vData) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };

/**
 * Sets a new value for property <code>colorPalette</code>.
 * 
 * The color palette for the chart. If this property is set, semantic colors defined in ComparisonData are ignored. Colors from the palette are assigned to each bar consequentially. When all the palette colors are used, assignment of the colors begins from the first palette color.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {string[]} sColorPalette New value for property <code>colorPalette</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setColorPalette = function(sColorPalette) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property <code>height</code>.
 * 
 * Height of the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setHeight = function(sHeight) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property <code>scale</code>.
 * 
 * The scaling suffix that is added to the actual and target values.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sScale New value for property <code>scale</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setScale = function(sScale) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property <code>shrinkable</code>.
 * 
 * If it is set to true, the height of the control is defined by its content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShrinkable New value for property <code>shrinkable</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setShrinkable = function(bShrinkable) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property <code>size</code>.
 * 
 * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.m.Size} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setSize = function(sSize) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property <code>view</code>.
 * 
 * The view of the chart. If not set, the Normal view is used by default.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Normal</code>.
 * @param {sap.suite.ui.microchart.ComparisonMicroChartViewType} sView New value for property <code>view</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setView = function(sView) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * The width of the chart. If it is not set, the size of the control is defined by the size property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };


// ---- sap.suite.ui.microchart.ComparisonMicroChartData --------------------------------------------------------------------------

/**
 * Constructor for a new ComparisonMicroChartData.
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
 * <li>{@link #getValue value} : float (default: 0)</li>
 * <li>{@link #getColor color} : sap.m.ValueColor (default: Neutral)</li>
 * <li>{@link #getTitle title} : string (default: )</li>
 * <li>{@link #getDisplayValue displayValue} : string (default: )</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Contains the values of the comparison chart.
 * @extends sap.ui.core.Element
 * @version 1.36.12
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the comparison chart bar.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this <code>sap.suite.ui.microchart.ComparisonMicroChartData</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.ComparisonMicroChartData</code> itself.
 * 
 * The event is fired when the user chooses the comparison chart bar.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.ComparisonMicroChartData</code> itself
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this <code>sap.suite.ui.microchart.ComparisonMicroChartData</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.ComparisonMicroChartData with name <code>sClassName</code>
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
sap.suite.ui.microchart.ComparisonMicroChartData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>press</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.firePress = function(mArguments) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The semantic color of the value.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueColor} Value of property <code>color</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.getColor = function() { return new sap.m.ValueColor(); };

/**
 * Gets current value of property <code>displayValue</code>.
 * 
 * If this property is set then it will be displayed instead of value.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>displayValue</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.getDisplayValue = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.ComparisonMicroChartData.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>title</code>.
 * 
 * The comparison bar title.
 * 
 * Default value is <code></code>.
 * @returns {string} Value of property <code>title</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property <code>value</code>.
 * 
 * The value for comparison.
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>value</code>
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.getValue = function() { return 0.0; };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The semantic color of the value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };

/**
 * Sets a new value for property <code>displayValue</code>.
 * 
 * If this property is set then it will be displayed instead of value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sDisplayValue New value for property <code>displayValue</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.setDisplayValue = function(sDisplayValue) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };

/**
 * Sets a new value for property <code>title</code>.
 * 
 * The comparison bar title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code></code>.
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.setTitle = function(sTitle) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };

/**
 * Sets a new value for property <code>value</code>.
 * 
 * The value for comparison.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fValue New value for property <code>value</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.setValue = function(fValue) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };


// ---- sap.suite.ui.microchart.ComparisonMicroChartViewType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.microchart.ComparisonMicroChartViewType.toString = function() { return ""; };

// ---- sap.suite.ui.microchart.DeltaMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new DeltaMicroChart control.
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
 * <li>{@link #getValue1 value1} : float</li>
 * <li>{@link #getValue2 value2} : float</li>
 * <li>{@link #getTitle1 title1} : string</li>
 * <li>{@link #getTitle2 title2} : string</li>
 * <li>{@link #getDisplayValue1 displayValue1} : string</li>
 * <li>{@link #getDisplayValue2 displayValue2} : string</li>
 * <li>{@link #getDeltaDisplayValue deltaDisplayValue} : string</li>
 * <li>{@link #getColor color} : sap.m.ValueColor (default: Neutral)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getSize size} : sap.m.Size (default: Auto)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Represents the delta of two values as a chart. This control replaces the deprecated sap.suite.ui.commons.DeltaMicroChart.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the delta micro chart.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this <code>sap.suite.ui.microchart.DeltaMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.DeltaMicroChart</code> itself.
 * 
 * The event is fired when the user chooses the delta micro chart.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.DeltaMicroChart</code> itself
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this <code>sap.suite.ui.microchart.DeltaMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.DeltaMicroChart with name <code>sClassName</code>
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
sap.suite.ui.microchart.DeltaMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>press</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.firePress = function(mArguments) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The semantic color of the delta value.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueColor} Value of property <code>color</code>
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getColor = function() { return new sap.m.ValueColor(); };

/**
 * Gets current value of property <code>deltaDisplayValue</code>.
 * 
 * If this property is set, it is rendered instead of a calculated delta.
 * @returns {string} Value of property <code>deltaDisplayValue</code>
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getDeltaDisplayValue = function() { return ""; };

/**
 * Gets current value of property <code>displayValue1</code>.
 * 
 * If this property is set, it is rendered instead of value1.
 * @returns {string} Value of property <code>displayValue1</code>
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getDisplayValue1 = function() { return ""; };

/**
 * Gets current value of property <code>displayValue2</code>.
 * 
 * If this property is set, it is rendered instead of value2.
 * @returns {string} Value of property <code>displayValue2</code>
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getDisplayValue2 = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.DeltaMicroChart.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>size</code>.
 * 
 * The size of the chart. If is not set, the default size is applied based on the device type.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.m.Size} Value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getSize = function() { return new sap.m.Size(); };

/**
 * Gets current value of property <code>title1</code>.
 * 
 * The first value title.
 * @returns {string} Value of property <code>title1</code>
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getTitle1 = function() { return ""; };

/**
 * Gets current value of property <code>title2</code>.
 * 
 * The second value title.
 * @returns {string} Value of property <code>title2</code>
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getTitle2 = function() { return ""; };

/**
 * Gets current value of property <code>value1</code>.
 * 
 * The first value for delta calculation.
 * @returns {float} Value of property <code>value1</code>
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getValue1 = function() { return 0.0; };

/**
 * Gets current value of property <code>value2</code>.
 * 
 * The second value for delta calculation.
 * @returns {float} Value of property <code>value2</code>
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getValue2 = function() { return 0.0; };

/**
 * Gets current value of property <code>width</code>.
 * 
 * The width of the chart.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The semantic color of the delta value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property <code>deltaDisplayValue</code>.
 * 
 * If this property is set, it is rendered instead of a calculated delta.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sDeltaDisplayValue New value for property <code>deltaDisplayValue</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setDeltaDisplayValue = function(sDeltaDisplayValue) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property <code>displayValue1</code>.
 * 
 * If this property is set, it is rendered instead of value1.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sDisplayValue1 New value for property <code>displayValue1</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setDisplayValue1 = function(sDisplayValue1) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property <code>displayValue2</code>.
 * 
 * If this property is set, it is rendered instead of value2.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sDisplayValue2 New value for property <code>displayValue2</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setDisplayValue2 = function(sDisplayValue2) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property <code>size</code>.
 * 
 * The size of the chart. If is not set, the default size is applied based on the device type.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.m.Size} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setSize = function(sSize) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property <code>title1</code>.
 * 
 * The first value title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTitle1 New value for property <code>title1</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setTitle1 = function(sTitle1) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property <code>title2</code>.
 * 
 * The second value title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTitle2 New value for property <code>title2</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setTitle2 = function(sTitle2) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property <code>value1</code>.
 * 
 * The first value for delta calculation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {float} fValue1 New value for property <code>value1</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setValue1 = function(fValue1) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property <code>value2</code>.
 * 
 * The second value for delta calculation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {float} fValue2 New value for property <code>value2</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setValue2 = function(fValue2) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * The width of the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.DeltaMicroChart(); };


// ---- sap.suite.ui.microchart.HarveyBallMicroChart --------------------------------------------------------------------------

/**
 * The configuration of the graphic element on the chart.
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
 * <li>{@link #getTotal total} : float</li>
 * <li>{@link #getTotalLabel totalLabel} : string</li>
 * <li>{@link #getTotalScale totalScale} : string</li>
 * <li>{@link #getFormattedLabel formattedLabel} : boolean (default: false)</li>
 * <li>{@link #getShowTotal showTotal} : boolean (default: true)</li>
 * <li>{@link #getShowFractions showFractions} : boolean (default: true)</li>
 * <li>{@link #getSize size} : sap.m.Size (default: Auto)</li>
 * <li>{@link #getColorPalette colorPalette} : string[] (default: [])</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.suite.ui.microchart.HarveyBallMicroChartItem[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Displays parts of a whole as highlighted sectors in a pie chart.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the control.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Adds some item to the aggregation <code>items</code>.
 * @param {sap.suite.ui.microchart.HarveyBallMicroChartItem}
 *            oItem the item to add; to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.addItem = function(oItem) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this <code>sap.suite.ui.microchart.HarveyBallMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.HarveyBallMicroChart</code> itself.
 * 
 * The event is fired when the user chooses the control.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.HarveyBallMicroChart</code> itself
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Destroys all the items in the aggregation <code>items</code>.
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.destroyItems = function() { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this <code>sap.suite.ui.microchart.HarveyBallMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.HarveyBallMicroChart with name <code>sClassName</code>
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
sap.suite.ui.microchart.HarveyBallMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>press</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.firePress = function(mArguments) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Gets current value of property <code>colorPalette</code>.
 * 
 * The color palette for the chart. If this property is set, semantic colors defined in HarveyBallMicroChart are ignored. Colors from the palette are assigned to each slice consequentially. When all the palette colors are used, assignment of the colors begins from the first palette color.
 * 
 * Default value is <code>[]</code>.
 * @returns {string[]} Value of property <code>colorPalette</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getColorPalette = function() { return new Array(); };

/**
 * Gets current value of property <code>formattedLabel</code>.
 * 
 * If set to true, the totalLabel parameter is considered as the combination of the total value and its scaling factor. The default value is false. It means that the total value and the scaling factor are defined separately by the total and the totalScale properties accordingly.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>formattedLabel</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getFormattedLabel = function() { return false; };

/**
 * Gets content of aggregation <code>items</code>.
 * 
 * The set of points for this graphic element.
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem[]}
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.HarveyBallMicroChart.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>showFractions</code>.
 * 
 * If it is set to true, the fraction values are displayed next to the chart. The default setting is true.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showFractions</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getShowFractions = function() { return false; };

/**
 * Gets current value of property <code>showTotal</code>.
 * 
 * If it is set to true, the total value is displayed next to the chart. The default setting is true.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showTotal</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getShowTotal = function() { return false; };

/**
 * Gets current value of property <code>size</code>.
 * 
 * The size of the chart. If it is not set, the default size is applied based on the device type.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.m.Size} Value of property <code>size</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getSize = function() { return new sap.m.Size(); };

/**
 * Gets current value of property <code>total</code>.
 * 
 * The total value. This is taken as 360 degrees value on the chart.
 * @returns {float} Value of property <code>total</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getTotal = function() { return 0.0; };

/**
 * Gets current value of property <code>totalLabel</code>.
 * 
 * The total label. If specified, it is displayed instead of the total value.
 * @returns {string} Value of property <code>totalLabel</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getTotalLabel = function() { return ""; };

/**
 * Gets current value of property <code>totalScale</code>.
 * 
 * The scaling factor that is displayed next to the total value.
 * @returns {string} Value of property <code>totalScale</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getTotalScale = function() { return ""; };

/**
 * Gets current value of property <code>width</code>.
 * 
 * The width of the chart. If it is not set, the size of the control is defined by the size property.
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.HarveyBallMicroChartItem</code> in the aggregation <code>items</code>.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.HarveyBallMicroChartItem}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation <code>items</code>.
 * @param {sap.suite.ui.microchart.HarveyBallMicroChartItem}
 *            oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex the <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.insertItem = function(oItem,iIndex) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Removes all the controls from the aggregation <code>items</code>.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem[]} An array of the removed elements (might be empty)
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes a item from the aggregation <code>items</code>.
 * @param {int | string | sap.suite.ui.microchart.HarveyBallMicroChartItem} vItem The itemto remove or its index or id
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem} The removed item or <code>null</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.removeItem = function(vItem) { return new sap.suite.ui.microchart.HarveyBallMicroChartItem(); };

/**
 * Sets a new value for property <code>colorPalette</code>.
 * 
 * The color palette for the chart. If this property is set, semantic colors defined in HarveyBallMicroChart are ignored. Colors from the palette are assigned to each slice consequentially. When all the palette colors are used, assignment of the colors begins from the first palette color.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {string[]} sColorPalette New value for property <code>colorPalette</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setColorPalette = function(sColorPalette) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property <code>formattedLabel</code>.
 * 
 * If set to true, the totalLabel parameter is considered as the combination of the total value and its scaling factor. The default value is false. It means that the total value and the scaling factor are defined separately by the total and the totalScale properties accordingly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFormattedLabel New value for property <code>formattedLabel</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setFormattedLabel = function(bFormattedLabel) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property <code>showFractions</code>.
 * 
 * If it is set to true, the fraction values are displayed next to the chart. The default setting is true.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowFractions New value for property <code>showFractions</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setShowFractions = function(bShowFractions) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property <code>showTotal</code>.
 * 
 * If it is set to true, the total value is displayed next to the chart. The default setting is true.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowTotal New value for property <code>showTotal</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setShowTotal = function(bShowTotal) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property <code>size</code>.
 * 
 * The size of the chart. If it is not set, the default size is applied based on the device type.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.m.Size} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setSize = function(sSize) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property <code>total</code>.
 * 
 * The total value. This is taken as 360 degrees value on the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {float} fTotal New value for property <code>total</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setTotal = function(fTotal) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property <code>totalLabel</code>.
 * 
 * The total label. If specified, it is displayed instead of the total value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTotalLabel New value for property <code>totalLabel</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setTotalLabel = function(sTotalLabel) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property <code>totalScale</code>.
 * 
 * The scaling factor that is displayed next to the total value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sTotalScale New value for property <code>totalScale</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setTotalScale = function(sTotalScale) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property <code>width</code>.
 * 
 * The width of the chart. If it is not set, the size of the control is defined by the size property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };


// ---- sap.suite.ui.microchart.HarveyBallMicroChartItem --------------------------------------------------------------------------

/**
 * The configuration of the graphic element on the chart.
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
 * <li>{@link #getColor color} : sap.m.ValueColor (default: Neutral)</li>
 * <li>{@link #getFraction fraction} : float (default: 0)</li>
 * <li>{@link #getFractionLabel fractionLabel} : string</li>
 * <li>{@link #getFractionScale fractionScale} : string</li>
 * <li>{@link #getFormattedLabel formattedLabel} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Configures the slices of the pie chart.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.HarveyBallMicroChartItem with name <code>sClassName</code>
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
sap.suite.ui.microchart.HarveyBallMicroChartItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property <code>color</code>.
 * 
 * The slice color.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueColor} Value of property <code>color</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.getColor = function() { return new sap.m.ValueColor(); };

/**
 * Gets current value of property <code>formattedLabel</code>.
 * 
 * If set to true, the fractionLabel parameter is considered as the combination of the fraction value and scaling factor. The default value is false. It means that the fraction value and the scaling factor are defined separately by the fraction and the fractionScale properties accordingly.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>formattedLabel</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.getFormattedLabel = function() { return false; };

/**
 * Gets current value of property <code>fraction</code>.
 * 
 * The fraction value.
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>fraction</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.getFraction = function() { return 0.0; };

/**
 * Gets current value of property <code>fractionLabel</code>.
 * 
 * The fraction label. If specified, it is displayed instead of the fraction value.
 * @returns {string} Value of property <code>fractionLabel</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.getFractionLabel = function() { return ""; };

/**
 * Gets current value of property <code>fractionScale</code>.
 * 
 * The scaling factor that is displayed after the fraction value.
 * @returns {string} Value of property <code>fractionScale</code>
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.getFractionScale = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.HarveyBallMicroChartItem.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property <code>color</code>.
 * 
 * The slice color.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.HarveyBallMicroChartItem(); };

/**
 * Sets a new value for property <code>formattedLabel</code>.
 * 
 * If set to true, the fractionLabel parameter is considered as the combination of the fraction value and scaling factor. The default value is false. It means that the fraction value and the scaling factor are defined separately by the fraction and the fractionScale properties accordingly.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFormattedLabel New value for property <code>formattedLabel</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.setFormattedLabel = function(bFormattedLabel) { return new sap.suite.ui.microchart.HarveyBallMicroChartItem(); };

/**
 * Sets a new value for property <code>fraction</code>.
 * 
 * The fraction value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fFraction New value for property <code>fraction</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.setFraction = function(fFraction) { return new sap.suite.ui.microchart.HarveyBallMicroChartItem(); };

/**
 * Sets a new value for property <code>fractionLabel</code>.
 * 
 * The fraction label. If specified, it is displayed instead of the fraction value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sFractionLabel New value for property <code>fractionLabel</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.setFractionLabel = function(sFractionLabel) { return new sap.suite.ui.microchart.HarveyBallMicroChartItem(); };

/**
 * Sets a new value for property <code>fractionScale</code>.
 * 
 * The scaling factor that is displayed after the fraction value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {string} sFractionScale New value for property <code>fractionScale</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.setFractionScale = function(sFractionScale) { return new sap.suite.ui.microchart.HarveyBallMicroChartItem(); };


// ---- sap.suite.ui.microchart.RadialMicroChart --------------------------------------------------------------------------

/**
 * Describes the configuration of the graphic element on the chart.
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
 * <li>{@link #getTotal total} : float</li>
 * <li>{@link #getFraction fraction} : float</li>
 * <li>{@link #getPercentage percentage} : float</li>
 * <li>{@link #getValueColor valueColor} : sap.m.ValueCSSColor (default: Neutral)</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] initial settings for the new control
 * @class
 * Displays a ring chart highlighting a current status. The status is displayed with a semantically colored radial bar and a percentage value.
 * @extends sap.ui.core.Control
 * @version 1.36.12
 * @since 1.36.0
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.RadialMicroChart = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the control.
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the <code>press</code> event of this <code>sap.suite.ui.microchart.RadialMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.RadialMicroChart</code> itself.
 * 
 * The event is fired when the user chooses the control.
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.RadialMicroChart</code> itself
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the <code>press</code> event of this <code>sap.suite.ui.microchart.RadialMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            oListener Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.RadialMicroChart with name <code>sClassName</code>
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
sap.suite.ui.microchart.RadialMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event <code>press</code> to attached listeners.
 * @param {Map} [mArguments] The arguments to pass along with the event
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.firePress = function(mArguments) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Gets current value of property <code>fraction</code>.
 * 
 * The fraction of the total value that is displayed.
 * @returns {float} Value of property <code>fraction</code>
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.getFraction = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.RadialMicroChart.
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property <code>percentage</code>.
 * 
 * The percentage that is displayed.
 * When a percentage is set, properties total and fraction are not considered.
 * @returns {float} Value of property <code>percentage</code>
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.getPercentage = function() { return 0.0; };

/**
 * Gets current value of property <code>total</code>.
 * 
 * The total value. This is taken as 360 degrees value on the chart.
 * @returns {float} Value of property <code>total</code>
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.getTotal = function() { return 0.0; };

/**
 * Gets current value of property <code>valueColor</code>.
 * 
 * The color shown in the completed path.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueCSSColor} Value of property <code>valueColor</code>
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.getValueColor = function() { return new sap.m.ValueCSSColor(); };

/**
 * Sets a new value for property <code>fraction</code>.
 * 
 * The fraction of the total value that is displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {float} fFraction New value for property <code>fraction</code>
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.setFraction = function(fFraction) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Sets a new value for property <code>percentage</code>.
 * 
 * The percentage that is displayed.
 * When a percentage is set, properties total and fraction are not considered.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {float} fPercentage New value for property <code>percentage</code>
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.setPercentage = function(fPercentage) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Sets a new value for property <code>total</code>.
 * 
 * The total value. This is taken as 360 degrees value on the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * @param {float} fTotal New value for property <code>total</code>
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.setTotal = function(fTotal) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Sets a new value for property <code>valueColor</code>.
 * 
 * The color shown in the completed path.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueCSSColor} sValueColor New value for property <code>valueColor</code>
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.setValueColor = function(sValueColor) { return new sap.suite.ui.microchart.RadialMicroChart(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.suite.ui.microchart.AreaMicroChartViewType --------------------------------------------------------------------------

/**
 * The view with labels on the top and bottom.
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartViewType.Normal = "";

/**
 * The view with labels on the left and right.
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartViewType.Wide = "";


// ---- sap.suite.ui.microchart.BulletMicroChartModeType --------------------------------------------------------------------------

/**
 * Displays the Actual value.
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChartModeType.Actual = "";

/**
 * Displays delta between the Actual and Threshold values.
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChartModeType.Delta = "";


// ---- sap.suite.ui.microchart.CommonBackgroundType --------------------------------------------------------------------------

/**
 * Dark background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.Dark = "";

/**
 * The darkest background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.Darkest = "";

/**
 * Extra dark background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.ExtraDark = "";

/**
 * Extra light background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.ExtraLight = "";

/**
 * Light background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.Light = "";

/**
 * The lightest background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.Lightest = "";

/**
 * Medium background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.Medium = "";

/**
 * Medium light background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.MediumLight = "";

/**
 * The transparent background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.Transparent = "";


// ---- sap.suite.ui.microchart.ComparisonMicroChartViewType --------------------------------------------------------------------------

/**
 * Titles and values are displayed above the bars.
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartViewType.Normal = "";

/**
 * Titles and values are displayed in the same line with the bars.
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartViewType.Wide = "";

