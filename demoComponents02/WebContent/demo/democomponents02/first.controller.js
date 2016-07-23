sap.ui.controller("demo.democomponents02.first", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf democomponents02.first
*/
onInit: function() {
	//second method
	//var page = sap.ui.view({id:"idfirst2", viewName:"demo.democomponents02.second", type:sap.ui.core.mvc.ViewType.JS});
	
	//app.addPage(page);
	
	
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf democomponents02.first
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf democomponents02.first
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf democomponents02.first
*/
//	onExit: function() {
//
//	}

});