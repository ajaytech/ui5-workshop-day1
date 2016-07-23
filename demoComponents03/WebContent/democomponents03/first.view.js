sap.ui.jsview("democomponents03.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf democomponents03.first
	*/ 
	getControllerName : function() {
		return "democomponents03.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf democomponents03.first
	*/ 
	createContent : function(oController) {
 		
		var oCtn = new sap.ui.core.ComponentContainer("idCont",{
			
			name:"demo.mybtn",
			settings:{
				text:"Hello from custom btn"
			}
		});
		
		return new sap.m.Page({
			title: "Hello",
			content: [
			          	oCtn
			]
		});
	}

});