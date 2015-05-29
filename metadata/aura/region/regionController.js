({
	afterScriptsLoaded: function(component, event, helper) {
        if (!component.isRendered()) {
            // Defer Ext configurations until after the renderering lifecycle
        	component._extLoaded = true;
        } else {
            component.getEvent("configure").fire();
        }
    }
})