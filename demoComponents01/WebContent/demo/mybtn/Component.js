
jQuery.sap.declare("demo.mybtn.Component");


sap.ui.core.UIComponent.extend("demo.mybtn.Component", {


    metadata : {
        properties : {
            text: "string"
        }
    }

});

demo.mybtn.Component.prototype.createContent = function(){
	
	this.oButton = new sap.m.Button("idBtn");
	return this.oButton;
},	
demo.mybtn.Component.prototype.setText = function(sText){
	this.oButton.setText(sText);
    this.setProperty("text", sText);
    return this;
	
}
