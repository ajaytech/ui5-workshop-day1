sap.ui.jsview("demo.democomponents02.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf democomponents02.first
	*/ 
	getControllerName : function() {
		return "demo.democomponents02.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf democomponents02.first
	*/ 
	createContent : function(oController) {
 		
		this.app = new sap.m.App();
		var oView = sap.ui.jsview("second","demo.democomponents02.second");
		oView.getController().nav = this.getController();
		this.app.addPage(oView,true);
		
		var thatApp = this.app;
		
		return thatApp;
		
		
	}

});