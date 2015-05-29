({
	configure: function(component, event, helper) {
        var content = component.find("content").getElement();
                
        if (!Ext.ClassManager.isCreated('KitchenSink.view.form.SliderField')) {
            Ext.define('KitchenSink.view.form.SliderField', {
                extend: 'Ext.form.Panel',
                
                requires: [
                    'Ext.slider.Single'
                ],
                
                xtype: 'slider-field',
                
                width: 400,
                title: 'Sound Settings',
                bodyPadding: 10,
               
                initComponent: function(){
                    this.msgTpl = new Ext.Template(
                        'Sounds Effects: <b>{fx}%</b><br />',
                        'Ambient Sounds: <b>{ambient}%</b><br />',
                        'Interface Sounds: <b>{iface}%</b>'
                    );
                    
                    Ext.apply(this, {
                        defaults: {
                            labelWidth: 125,
                            anchor: '95%',
                            tipText: function(thumb){
                                return String(thumb.value) + '%';
                            } 
                        },

                        defaultType: 'slider',
                        
                        items: [{
                            fieldLabel: 'Sound Effects',
                            value: 50,
                            name: 'fx',

                            vertical: true,
                            height: 200
                        },{
                            fieldLabel: 'Ambient Sounds',
                            value: 80,
                            name: 'ambient'
                        },{
                            fieldLabel: 'Interface Sounds',
                            value: 25,
                            name: 'iface'
                        }],

                        bbar: [{
                            text: 'Max All',
                            scope: this,
                            handler: this.onMaxAllClick
                        }, '->', {
                            text: 'Save',
                            scope: this,
                            handler: this.onSaveClick
                        }, {
                            text: 'Reset',
                            scope: this,
                            handler: this.onResetClick
                        }]
                    });
                    this.callParent();
                },
                
                onMaxAllClick: function(){
                    Ext.suspendLayouts();
                    this.items.each(function(c){
                        c.setValue(100);
                    });
                    Ext.resumeLayouts(true);
                },
                
                onSaveClick: function(){
                    Ext.Msg.alert({
                        title: 'Settings Saved',
                        msg: this.msgTpl.apply(this.getForm().getValues()),
                        icon: Ext.Msg.INFO,
                        buttons: Ext.Msg.OK
                    }); 
                },
                
                onResetClick: function(){
                    this.getForm().reset();
                }
            });
        }
        
        var content = component.find("content").getElement();
        
        Ext.create('KitchenSink.view.form.SliderField', {
            renderTo: content
        });
	}
})