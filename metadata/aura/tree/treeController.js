({
	configure: function(component, event, helper) {
        var tree = component.find("tree").getElement();
        
        Ext.create('Ext.tree.Panel', {
            renderTo: tree,
            title: component.get("v.title"),
            width: 300,
            height: 250,
            root: {
                text: 'Root',
                expanded: true,
                children: [
                    {
                        text: 'Child 1',
                        leaf: true
                    },
                    {
                        text: 'Child 2',
                        leaf: true
                    },
                    {
                        text: 'Child 3',
                        expanded: true,
                        children: [
                            {
                                text: 'Grandchild',
                                leaf: true
                            }
                        ]
                    }
                ]
            }
        });
	}
})