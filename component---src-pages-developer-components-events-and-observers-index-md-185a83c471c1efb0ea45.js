"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[1585],{13241:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return u}});var a,r=t(87462),o=t(63366),i=(t(15007),t(64983)),d=t(91515),m=["components"],s={},l=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),p={_frontmatter:s},c=d.Z;function u(e){var n=e.components,t=(0,o.Z)(e,m);return(0,i.mdx)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"events-and-observers"},"Events and observers"),(0,i.mdx)("p",null,"Working with events and observers is one of the main ways to extend Adobe Commerce and Magento Open Source functionality. The events and observers implementation in Adobe Commerce and Magento Open Source are based on the ",(0,i.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern"},"publish-subscribe pattern"),". Using events and observers, you can run your custom code in response to a specific ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/event"},"event")," or even a custom event."),(0,i.mdx)("h2",{id:"events"},"Events"),(0,i.mdx)("p",null,"Events are dispatched by modules when certain actions are triggered. In addition to its own events, the application allows you to create your own events that can be dispatched in your code. When an event is dispatched, it can pass data to any observers configured to watch that event."),(0,i.mdx)("h3",{id:"dispatching-events"},"Dispatching events"),(0,i.mdx)("p",null,"Events can be dispatched using the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Event/ManagerInterface.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"Magento\\Framework\\Event\\ManagerInterface"))," class. This class can be obtained through ",(0,i.mdx)("a",{parentName:"p",href:"../dependency-injection.md"},"dependency injection")," by defining the dependency in your constructor."),(0,i.mdx)("p",null,"To dispatch an event, call the ",(0,i.mdx)("inlineCode",{parentName:"p"},"dispatch")," function of the event manager class and provide it with the name of the event you want to dispatch along with an array of data you wish to provide to observers."),(0,i.mdx)("p",null,"The following example shows you how to dispatch an event with and without an array of data."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace MyCompany\\MyModule;\n\nuse Magento\\Framework\\Event\\ManagerInterface as EventManager;\n\nclass MyClass\n{\n    /**\n     * @var EventManager\n     */\n    private $eventManager;\n\n    /*\n     * @param EventManager $eventManager\n     */\n    public function __construct(EventManager $eventManager)\n    {\n        $this->eventManager = $eventManager;\n    }\n\n    public function something()\n    {\n        $eventData = null;\n        // Code...\n        $this->eventManager->dispatch('my_module_event_before');\n        // More code that sets $eventData...\n        $this->eventManager->dispatch('my_module_event_after', ['myEventData' => $eventData]);\n    }\n}\n\n")),(0,i.mdx)("h3",{id:"creating-new-events"},"Creating new events"),(0,i.mdx)("p",null,"Custom events can be dispatched by simply passing in a unique event name to the event manager when you call the ",(0,i.mdx)("inlineCode",{parentName:"p"},"dispatch")," function. Your unique event name is referenced in your module's ",(0,i.mdx)("inlineCode",{parentName:"p"},"events.xml")," file where you specify which observers will react to that event."),(0,i.mdx)("p",null,"You can make the custom event ",(0,i.mdx)("inlineCode",{parentName:"p"},"my_module_event_after")," subscribable by declaring the ",(0,i.mdx)("inlineCode",{parentName:"p"},"MyCompany/MyModule/etc/events.xml")," file as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">\n    <event name="my_module_event_after">\n        <observer name="my_module_event_after_observer" instance="MyCompany\\MyModule\\Observer\\MyEvent"/>\n    </event>\n</config>\n')),(0,i.mdx)("h3",{id:"event-areas"},"Event areas"),(0,i.mdx)("p",null,"Generally, the location of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"events.xml")," file will be under the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<module-root>/etc")," directory. Observers that are associated with events here will watch for these events globally. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"events.xml")," file can also be defined under the ",(0,i.mdx)("inlineCode",{parentName:"p"},"<module-root>/etc/frontend")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"<module-root>/etc/adminhtml")," directories to configure observers to only watch for events in those specific areas."),(0,i.mdx)("p",null,"Declare the observer in the appropriate area. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"global")," area allows the observer to run in all areas (",(0,i.mdx)("inlineCode",{parentName:"p"},"adminhtml"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"crontab"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"frontend"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"graphql"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"webapi_rest"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"webapi_soap"),")."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Area"),(0,i.mdx)("th",{parentName:"tr",align:null},"File location"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"global")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"<module-dir>/etc/events.xml"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"adminhtml")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"<module-dir>/etc/adminhtml/events.xml"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"crontab")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"<module-dir>/etc/crontab/events.xml"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"frontend")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"<module-dir>/etc/frontend/events.xml"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"graphql")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"<module-dir>/etc/graphql/events.xml"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"webapi_rest")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"<module-dir>/etc/webapi_rest/events.xml"))),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"webapi_soap")),(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("inlineCode",{parentName:"td"},"<module-dir>/etc/webapi_soap/events.xml"))))),(0,i.mdx)("h2",{id:"observers"},"Observers"),(0,i.mdx)("p",null,"Observers are a certain type of class that can influence general behavior, performance, or change business logic. Observers are executed whenever the event they are configured to watch is dispatched by the event manager."),(0,i.mdx)("h3",{id:"creating-an-observer"},"Creating an observer"),(0,i.mdx)("p",null,"To create an observer, you must place your class file under your ",(0,i.mdx)("inlineCode",{parentName:"p"},"<module-root>/Observer")," directory. Your observer class should implement ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Event/ObserverInterface.php"},(0,i.mdx)("inlineCode",{parentName:"a"},"Magento\\Framework\\Event\\ObserverInterface"))," and define its ",(0,i.mdx)("inlineCode",{parentName:"p"},"execute")," function."),(0,i.mdx)("p",null,"Below is an example of the basic observer class structure:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace MyCompany\\MyModule\\Observer;\n\nuse Magento\\Framework\\Event\\Observer;\nuse Magento\\Framework\\Event\\ObserverInterface;\n\nclass MyObserver implements ObserverInterface\n{\n    public function __construct()\n    {\n        // Observer initialization code...\n        // You can use dependency injection to get any class this observer may need.\n    }\n\n    public function execute(Observer $observer)\n    {\n        // Observer execution code...\n    }\n}\n")),(0,i.mdx)("p",null,"One of the more powerful feature of observers is that they are able to use parameters passed into the event when it was dispatched. Below is an example of an observer obtaining data passed in when the event was dispatched."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace MyCompany\\MyModule\\Observer;\n\nuse Magento\\Framework\\Event\\Observer;\nuse Magento\\Framework\\Event\\ObserverInterface;\n\nclass AnotherObserver implements ObserverInterface\n{\n    public function __construct()\n    {\n        // Observer initialization code...\n        // You can use dependency injection to get any class this observer may need.\n    }\n\n    public function execute(Observer $observer)\n    {\n        $myEventData = $observer->getData('myEventData');\n        // Additional observer execution code...\n    }\n}\n")),(0,i.mdx)("h3",{id:"subscribing-to-events"},"Subscribing to events"),(0,i.mdx)("p",null,"Observers can be configured to watch certain events in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"events.xml")," file."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"observer")," ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/xml"},"xml")," element has the following properties:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"name")," (required) - The name of the observer for the event definition."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"instance")," (required) - The fully qualified class name of the observer."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"disabled")," - Determines whether this observer is active or not. Default value is false."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"shared")," - Determines the ",(0,i.mdx)("a",{parentName:"li",href:"../../build/dependency-injection-file.md#object-lifestyle-configuration"},"lifestyle")," of the class. Default is ",(0,i.mdx)("inlineCode",{parentName:"li"},"true"),".")),(0,i.mdx)(l,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"The observer name must be unique, or an override will occur."),(0,i.mdx)("p",null,"Below is an example of how to assign observers to watch certain events:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">\n    <event name="my_module_event_before">\n        <observer name="myObserverName" instance="MyCompany\\MyModule\\Observer\\MyObserver" />\n    </event>\n    <event name="my_module_event_after">\n        <observer name="myObserverName" instance="MyCompany\\MyModule\\Observer\\AnotherObserver" />\n    </event>\n</config>\n')),(0,i.mdx)("p",null,"In the preceding example, we assign the observer ",(0,i.mdx)("inlineCode",{parentName:"p"},"MyObserver")," to the custom event ",(0,i.mdx)("inlineCode",{parentName:"p"},"my_module_event_before")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"AnotherObserver")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"my_module_event_after"),"."),(0,i.mdx)("p",null,"Observer names must be unique per event definition. This means that you cannot have two observers with the same name in the same event definition. In the example, both observers have the name ",(0,i.mdx)("inlineCode",{parentName:"p"},"myObserverName"),". This is acceptable because each of those observers belong to different event definitions."),(0,i.mdx)("p",null,"If you declare an observer with a name that is already in use within the same event, the application merges these declaration nodes into a single observer declaration, respecting the module load order as defined in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"app/etc/config.php")," file. This is useful when disabling an observer declared in another module."),(0,i.mdx)("h3",{id:"disabling-an-observer"},"Disabling an observer"),(0,i.mdx)("p",null,"Existing observers can be disabled, if you do not want to have them running. It is a good practice to disable the obsever if you want to change its logic rather than override it.\nBelow is an example of how to disable the previously created observer."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Event/etc/events.xsd">\n    <event name="my_module_event_before">\n        <observer name="myObserverName" disabled="true" />\n    </event>\n</config>\n')),(0,i.mdx)("h2",{id:"recommended-reading"},"Recommended Reading"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://devdocs.magento.com/guides/v2.4/ext-best-practices/extension-coding/observers-bp.html"},"Observers best practices"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-components-events-and-observers-index-md-185a83c471c1efb0ea45.js.map