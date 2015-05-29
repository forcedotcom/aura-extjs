({
    afterRender: function(component, helper) {
        var ret = this.superAfterRender();
        
        if (component._extLoaded) {
        	component.getEvent("configure").fire();
        }

        return ret;
    }
})