({
	afterScriptsLoaded: function(component, event, helper) {
        Ext.onReady(function() {
            if (!component.isRendered()) {
                // Defer Ext configurations until after the renderering lifecycle
                component._extLoaded = true;
            } else {
                helper.configure(component);
            }
        });
    }
})