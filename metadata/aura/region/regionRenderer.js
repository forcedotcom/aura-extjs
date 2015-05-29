({
    afterRender: function(component, helper) {
        var ret = this.superAfterRender();
        
        if (component._extLoaded) {
        	helper.configure(component);
        }

        return ret;
    }
})