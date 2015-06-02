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
    },
    
    handleEvent: function(component, event, helper) {        
        //console.log("event: " + event.target.id + " " + event.type + " { x: " + event.pageX + ", y: " + event.pageY + " }");
              
        var extEvent = new Ext.event.Event(event);
        
       	Ext.event.publisher.Dom.instance.publish(event.type, event.target, extEvent);      
        Ext.event.publisher.Gesture.instance.publish(event.type, event.target, extEvent);
        
        event.stopPropagation();
    }
})