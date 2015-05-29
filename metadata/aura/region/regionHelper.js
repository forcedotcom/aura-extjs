({
    configure: function(component) {
        // Setup Ext.js event delegators
        var e = Ext.get(component.find("content").getElement());

        debugger
        
        e.on("click", function(e) {
            console.log("click", e);
        });

        component.getEvent("configure").fire();
    }
})