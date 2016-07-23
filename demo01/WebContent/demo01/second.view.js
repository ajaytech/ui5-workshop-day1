sap.ui.jsview("demo01.second", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demo01.second
	*/ 
	getControllerName : function() {
		return "demo01.second";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demo01.second
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Second",
			content: [
			
			]
		});
	}

});