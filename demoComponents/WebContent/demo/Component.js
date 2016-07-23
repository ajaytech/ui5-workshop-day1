jQuery.sap.declare("demo.Component");

sap.ui.core.UIComponent.extend("demo.Component", {

	createContent : function() {

		// create root view
		var oView = new sap.ui.view({
			id : "first",
			viewName : "demo.democomponents.first",
			type : sap.ui.core.mvc.ViewType.JS
		});

		// set i18n model
		
        return oView;
	}
});