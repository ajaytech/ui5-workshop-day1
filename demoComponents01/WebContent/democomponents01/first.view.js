sap.ui.jsview("democomponents01.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf democomponents.first
	*/ 
	getControllerName : function() {
		return "democomponents01.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf democomponents.first
	*/ 
	createContent : function(oController) {
		
		var oCompCont2 = new sap.ui.core.ComponentContainer("CompCont2", {
		        name: "demo.mybtn",
		        settings: {text: "Hello World components"}
		    });

		return new sap.m.Page({
			title: "Hello Second",
			content: [
			          	oCompCont2
			          	]
        
				});
	}

});