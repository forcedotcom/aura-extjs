aura-extjs
==========
Aura-ExtJS is a Force.com component library that provides integration between Aura (technology that powers Force.com Lightning Components) and Sencha's ExtJS javascript library. This project is very much in a nascent state, but there is enough functionality to provide you with a view into where we plan to take this. Here are some of the current capabilities:

- automatic once and only once loading and initialization semantics for ExtJS library
- easy to use configuration event that allows you to wire in your angular code after all initialization of both aura and angular has been negotiated for you

Here are some of the things to look forward to:

- generic fix for touch events misbehaving when Ext.js content included in Salesforce1 Mobile
- multi-version support to allow a specific version of angular.JS to be specified at the region level
- automatic surfacing of aura components as ext components for use within Ext.js config objects

Installation into your Force.com org
====================================
The library is available as an installable force.com namespaced managed package [here](https://login.salesforce.com/packaging/installPackage.apexp?p0=04tj0000001eam6). The code in this repository is for informational purposes only currently and is a direct copy of the package made by using the force.com command line interface. Your Salesforce.com organization will need to have the Enable Lightning Components preference enabled in Setup In order for you to be able to try out aurang:region in your own components.

After successfully installing the package into your org, you can try out the included demo application at /auraextjs/demo.app. The package also includes a prebuilt Lightning tab that you can add to your Mobile Tabs in setup to see this working in Salesforce1 Mobile.

Getting Started
===============
Aura-ExtJS consists of a single Aura component called auraextjs:region. You simply add an instance of `<aurextjs:region configure="{!c.configure}"/>` and then write your ExtJS specific JavaScript inside of a standard aura client-side controller method.

This repository contains a fully functioning sample application [demo.app](https://github.com/forcedotcom/aura-extjs/blob/master/metadata/aura/demo/demoApplication.app) and component [tree.cmp](https://github.com/forcedotcom/aura-extjs/tree/master/metadata/aura/tree) that demonstrate a usage of the region component.

Here is a snippet taken directly from the samples:

auraextjs:tree.cmp
```
<aura:component access="GLOBAL">
    <aura:attribute name="title" type="String" required="true" access="GLOBAL"/>

    <auraextjs:region configure="{!c.configure}">
        <div aura:id="tree"/>
    </auraextjs:region>

</aura:component>
```

auraextjs:tree.Controller.js
```
({
	configure : function(component, event, helper) {
        Ext.create('Ext.tree.Panel', {
            renderTo: component.find("tree").getElement(),
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
```
