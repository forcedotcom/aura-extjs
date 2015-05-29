({
    render: function(component, helper) {
        var ret = this.superRender();
        
        if (component._extLoaded) {
        	component.getEvent("configure").fire();
        }

        return ret;
    }
})