jQuery.sap.declare("demo.Component");

sap.ui.core.UIComponent.extend("demo.Component",{
	
	
	//1st view and controller
	createContent : function(){
		
		var oView = new sap.ui.view({
			id:"idfirst1",
			viewName:"demo.democomponents02.first",
			type:sap.ui.core.mvc.ViewType.JS
		});
		
		return oView;
	}
	
})