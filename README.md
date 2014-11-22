aura-extjs
==========
Aura-ExtJS is a Force.com component library that provides integration between Aura (technology that powers Force.com Lightning Components) and Sencha's ExtJS javascript library. This project is very much in a nascent state, but there is enough functionality to provide you with a view into where we plan to take this. Here are some of the current capabilities:

- automatic once and only once loading and initialization semantics for ExtJS library
- easy to use configuration event that allows you to wire in your angular code after all initialization of both aura and angular has been negotiated for you

Installation into your Force.com org
====================================
The library is available as an installable force.com namespaced managed package [here](https://login.salesforce.com/packaging/installPackage.apexp?p0=04to0000000JiGn). The code in this repository is for informational purposes only currently and is a direct copy of the package made by using the force.com command line interface. Your Salesforce.com organization will need to have the Enable Lightning Components preference enabled in Setup In order for you to be able to try out aurang:region in your own components.

After successfully installing the package into your org, you can try out the included demo application at /aurang/regionDemoApp.app.

Getting Started
===============
Aura-ExtJS consists of a single Aura component called auraextjs:region. You simply add an instance of `<aurextjs:region configure="{!c.configure}"/>` and then write your ExtJS specific JavaScript inside of a standard aura client-side controller method.

This repository contains a fully functioning sample application [demo.app](https://github.com/forcedotcom/aura-extjs/blob/master/metadata/aura/demo/demoApplication.app) and component [tree.cmp](https://github.com/forcedotcom/aura-extjs/tree/master/metadata/aura/tree) that demonstrate a usage of the region component.

Here is a snippet taken directly from the samples:

```
<aura:component access="GLOBAL">
  <aura:attribute name="someAttribute" type="string" required="true"/>
  <aura:attribute name="someOtherAttribute" type="string[]"/>
  <aurang:region aura:id="inner">
    This content came from aurang:demoComponent: {{v.someAttribute}}
    <div data-ng-repeat="item in v.someOtherAttribute">{{item}}</div>
  </aurang:region>
</aura:component>
```

