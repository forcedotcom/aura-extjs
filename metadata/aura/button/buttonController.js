({
	configure: function(component, event, helper) {
        var button = component.find("button").getElement();
        var debugInfo = " [" + component.getGlobalId() + "]";
        
        Ext.create('Ext.Button', {
            text: component.get("v.text") + debugInfo,
            renderTo: button,
            listeners: {
                click: function() {
                    Ext.Msg.alert(component.get("v.message") + debugInfo);
                }
            }
        });
	}
})