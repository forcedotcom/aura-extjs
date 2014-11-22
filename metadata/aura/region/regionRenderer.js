({
    afterRender: function(component, helper) {
        helper.runWhenExtLoaded(function(){
            component.getEvent("configure").fire();
        });
    }
})