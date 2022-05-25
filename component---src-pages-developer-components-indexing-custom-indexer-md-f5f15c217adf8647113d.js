"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[5004],{15837:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return p}});var a=t(87462),i=t(63366),d=(t(15007),t(64983)),r=t(91515),o=["components"],m={},l={_frontmatter:m},s=r.Z;function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,d.mdx)(s,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"create-a-custom-indexer"},"Create a custom indexer"),(0,d.mdx)("p",null,"This topic discusses how to create a custom indexer. We've recently made a performance improvement that enables you to declare one or more ",(0,d.mdx)("em",{parentName:"p"},"shared")," indexers; if one of the shared indexes is already up-to-date, it doesn't need to be reindexed."),(0,d.mdx)("p",null,"To implement your own indexer, add the following code in your module:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#custom-indexer-logic"},"Indexer logic")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#indexer-configuration"},"Indexer configuration")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"#mview-configuration"},"MView configuration"))),(0,d.mdx)("h3",{id:"custom-indexer-logic"},"Custom indexer logic"),(0,d.mdx)("p",null,"Your custom indexer class should implement ",(0,d.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Indexer/ActionInterface.php"},"\\Magento\\Framework\\Indexer\\ActionInterface"),", and the indexer should be able to perform three types of operations:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Row reindex: processing a single entry from a dictionary; responsibility of ",(0,d.mdx)("inlineCode",{parentName:"li"},"executeRow($id)")),(0,d.mdx)("li",{parentName:"ul"},"List reindex: processing a set of dictionary entries; responsibility of ",(0,d.mdx)("inlineCode",{parentName:"li"},"executeList($ids)"),", where ",(0,d.mdx)("inlineCode",{parentName:"li"},"$ids")," is an array of ",(0,d.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/entity"},"entity")," IDs"),(0,d.mdx)("li",{parentName:"ul"},"Full reindex: processing all entities from a specific dictionary; responsibility of ",(0,d.mdx)("inlineCode",{parentName:"li"},"executeFull()"))),(0,d.mdx)("h3",{id:"indexer-configuration"},"Indexer configuration"),(0,d.mdx)("p",null,"Declare a new indexer process in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"etc/indexer.xml")," file with the following attributes:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,d.mdx)("th",{parentName:"tr",align:null},"Required?"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"id")),(0,d.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,d.mdx)("td",{parentName:"tr",align:null},"A unique indexer ID")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"class")),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"The class that processes indexer methods (",(0,d.mdx)("inlineCode",{parentName:"td"},"executeFull"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"executeList"),", ",(0,d.mdx)("inlineCode",{parentName:"td"},"executeRow"),")")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"primary")),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"The source provider")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"shared_index")),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"Use this option to improve performance if your indexer is related to another indexer. In this ",(0,d.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogRule/etc/indexer.xml"},"example"),", if the Catalog Product Rule index needs to be reindexed, but other catalog product rule indexes are up-to-date, then only the Catalog Product Rule is reindexed.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"view_id")),(0,d.mdx)("td",{parentName:"tr",align:null},"No"),(0,d.mdx)("td",{parentName:"tr",align:null},"The ID of the view element that is defined in the ",(0,d.mdx)("inlineCode",{parentName:"td"},"mview.xml")," configuration file.")))),(0,d.mdx)("p",null,"For example,"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Indexer/etc/indexer.xsd">\n    <indexer id="design_config_grid" view_id="design_config_dummy" class="Magento\\Theme\\Model\\Indexer\\Design\\Config" primary="design_config">\n        ...\n    </indexer>\n</config>\n')),(0,d.mdx)("p",null,"An indexer process can also have the following optional parameters:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Parameter"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"description")),(0,d.mdx)("td",{parentName:"tr",align:null},"The description of indexer to be displayed on the ",(0,d.mdx)("inlineCode",{parentName:"td"},"System")," > ",(0,d.mdx)("inlineCode",{parentName:"td"},"Tools")," > ",(0,d.mdx)("inlineCode",{parentName:"td"},"Index Management")," page.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"fieldset")),(0,d.mdx)("td",{parentName:"tr",align:null},"Describes the fields, source, and data provider of the flat index table.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"saveHandler")),(0,d.mdx)("td",{parentName:"tr",align:null},"An extension point. The class for processing (deleting, saving, updating) items when indexing.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"structure")),(0,d.mdx)("td",{parentName:"tr",align:null},"The class that processes (creates, removes) flat index tables.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("inlineCode",{parentName:"td"},"title")),(0,d.mdx)("td",{parentName:"tr",align:null},"The title of indexer to be displayed on the ",(0,d.mdx)("inlineCode",{parentName:"td"},"System")," > ",(0,d.mdx)("inlineCode",{parentName:"td"},"Tools")," > ",(0,d.mdx)("inlineCode",{parentName:"td"},"Index Management")," page.")))),(0,d.mdx)("p",null,"For example:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Indexer/etc/indexer.xsd">\n    <indexer ...>\n        <title translate="true">Design Config Grid</title>\n        <description translate="true">Rebuild design config grid index</description>\n\n        <fieldset name="design_config" source="Magento\\Theme\\Model\\ResourceModel\\Design\\Config\\Scope\\Collection"\n                  provider="Magento\\Theme\\Model\\Indexer\\Design\\Config\\FieldsProvider">\n            <field name="store_website_id" xsi:type="filterable" dataType="int"/>\n            <field name="store_group_id" xsi:type="filterable" dataType="int"/>\n            <field name="store_id" xsi:type="filterable" dataType="int"/>\n        </fieldset>\n        <saveHandler class="Magento\\Framework\\Indexer\\SaveHandler\\Grid"/>\n        <structure class="Magento\\Framework\\Indexer\\GridStructure"/>\n    </indexer>\n</config>\n')),(0,d.mdx)("p",null,"All indexers related to a ",(0,d.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," should be declared in one file."),(0,d.mdx)("h3",{id:"mview-configuration"},"MView configuration"),(0,d.mdx)("p",null,"Add the ",(0,d.mdx)("inlineCode",{parentName:"p"},"mview.xml")," configuration file in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"etc")," module directory, where you declare the following:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"indexer view ID"),(0,d.mdx)("li",{parentName:"ul"},"indexer class"),(0,d.mdx)("li",{parentName:"ul"},"the database tables the indexer tracks"),(0,d.mdx)("li",{parentName:"ul"},"what column data is sent to the indexer")),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/etc/mview.xml"},"Example")),(0,d.mdx)("p",null,"All Mview declarations related to a module should be declared in one file."),(0,d.mdx)("h3",{id:"example-of-a-custom-indexer-implementation"},"Example of a custom indexer implementation"),(0,d.mdx)("p",null,"To push best-selling products to the top of a category listing, process statistics about sales to change the product position dynamically."),(0,d.mdx)("p",null,"Assuming your module is named ",(0,d.mdx)("inlineCode",{parentName:"p"},"<VendorName>_Merchandizing"),", you must write the appropriate code in the indexer class ",(0,d.mdx)("inlineCode",{parentName:"p"},"Merchandizing/Model/Indexer/Popular.php")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-php"},'<?php\nnamespace <VendorName>\\Merchandizing\\Model\\Indexer;\n\nclass Popular implements \\Magento\\Framework\\Indexer\\ActionInterface, \\Magento\\Framework\\Mview\\ActionInterface\n{\n    /*\n     * Used by mview, allows process indexer in the "Update on schedule" mode\n     */\n    public function execute($ids){\n        //Used by mview, allows you to process multiple placed orders in the "Update on schedule" mode\n    }\n\n    /*\n     * Will take all of the data and reindex\n     * Will run when reindex via command line\n     */\n    public function executeFull(){\n        //Should take into account all placed orders in the system\n    }\n\n    /*\n     * Works with a set of entity changed (may be massaction)\n     */\n    public function executeList(array $ids){\n        //Works with a set of placed orders (mass actions and so on)\n    }\n\n    /*\n     * Works in runtime for a single entity using plugins\n     */\n    public function executeRow($id){\n        //Works in runtime for a single order using plugins\n    }\n}\n')),(0,d.mdx)("p",null,"Next, declare the indexer in ",(0,d.mdx)("inlineCode",{parentName:"p"},"Merchandizing/etc/indexer.xml"),":"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Indexer/etc/indexer.xsd">\n    <indexer id="merchandizing_popular" view_id="merchandizing_popular_order" class="Vendor\\Merchandizing\\Model\\Indexer\\Popular">\n        <title translate="true">Popular Products</title>\n        <description translate="true">Sort products in a category by popularity</description>\n    </indexer>\n</config>\n')),(0,d.mdx)("p",null,"In this file, declare a new indexer process with the attribute:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"id")," - To identify this indexer. Check status, mode or reindex this indexer by command line."),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"view_id")," - Id of view element which will be defined in the ",(0,d.mdx)("inlineCode",{parentName:"li"},"mview")," configuration file."),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"class")," -  The name to the class which we process indexer method.")),(0,d.mdx)("p",null,"Finally, declare the indexer view (",(0,d.mdx)("inlineCode",{parentName:"p"},"merchandizing_popular_order"),") that tracks sales (",(0,d.mdx)("inlineCode",{parentName:"p"},"Merchandizing/etc/mview.xml"),"):"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Mview/etc/mview.xsd">\n    <view id="merchandizing_popular_order" class="Vendor\\Merchandizing\\Model\\Indexer\\Popular" group="indexer">\n        <subscriptions>\n            <table name="sales_order" entity_column="entity_id" />\n        </subscriptions>\n    </view>\n</config>\n')),(0,d.mdx)("p",null,"These settings start ",(0,d.mdx)("inlineCode",{parentName:"p"},"<VendorName>\\Merchandizing\\Model\\Indexer\\Popular::execute")," method every time an order is changed."),(0,d.mdx)("p",null,"After this, please refresh the cache and go to ",(0,d.mdx)("strong",{parentName:"p"},"System")," > Tools > ",(0,d.mdx)("a",{parentName:"p",href:"https://docs.magento.com/m2/ce/user_guide/system/index-management.html"},(0,d.mdx)("strong",{parentName:"a"},"Index Management"))," through the Admin to verify the custom indexer result."),(0,d.mdx)("p",null,(0,d.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"914px"}},"\n      ",(0,d.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.5625%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,d.mdx)("picture",{parentName:"span"},"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/e5f33cfcc82cbf15f4e758d7885d963d/cb523/custom-indexer-magento2.webp 320w","/commerce-php/static/e5f33cfcc82cbf15f4e758d7885d963d/797b9/custom-indexer-magento2.webp 640w","/commerce-php/static/e5f33cfcc82cbf15f4e758d7885d963d/11904/custom-indexer-magento2.webp 914w"],sizes:"(max-width: 914px) 100vw, 914px",type:"image/webp"}),"\n          ",(0,d.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/e5f33cfcc82cbf15f4e758d7885d963d/cb69c/custom-indexer-magento2.jpg 320w","/commerce-php/static/e5f33cfcc82cbf15f4e758d7885d963d/c08c5/custom-indexer-magento2.jpg 640w","/commerce-php/static/e5f33cfcc82cbf15f4e758d7885d963d/7ba59/custom-indexer-magento2.jpg 914w"],sizes:"(max-width: 914px) 100vw, 914px",type:"image/jpeg"}),"\n          ",(0,d.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/e5f33cfcc82cbf15f4e758d7885d963d/7ba59/custom-indexer-magento2.jpg",alt:"Custom indexer modes",title:"Custom indexer modes",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,d.mdx)("p",null,"Now when an order is placed, the Popular Products indexer calculates the sorting order of the products by popularity and stores this data in the index table, so that it can be used in product displaying logic."),(0,d.mdx)("p",null,"Use the following command to reindex the custom indexer:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento indexer:reindex merchandizing_popular\n")),(0,d.mdx)("p",null,"Use the following command to invalidate the custom indexer:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento indexer:reset merchandizing_popular\n")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-components-indexing-custom-indexer-md-f5f15c217adf8647113d.js.map