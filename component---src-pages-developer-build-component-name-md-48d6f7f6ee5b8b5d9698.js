"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[2306],{81258:function(e,n,o){o.r(n),o.d(n,{_frontmatter:function(){return d},default:function(){return c}});var t,a=o(87462),m=o(63366),i=(o(15007),o(64983)),l=o(91515),r=["components"],d={},p=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),s={_frontmatter:d},u=l.Z;function c(e){var n=e.components,o=(0,m.Z)(e,r);return(0,i.mdx)(u,(0,a.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"name-a-component"},"Name a component"),(0,i.mdx)("p",null,"You give a name to your component in its ",(0,i.mdx)("inlineCode",{parentName:"p"},"composer.json")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"module.xml")," files. These files also contain other required configuration parameters, such as the module's schema version."),(0,i.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.mdx)("p",null,"Before you continue, make sure you have completed all of the following tasks:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Create a ",(0,i.mdx)("a",{parentName:"li",href:"component-file-structure.md"},"file structure"),"."),(0,i.mdx)("li",{parentName:"ul"},"Create the ",(0,i.mdx)("a",{parentName:"li",href:"required-configuration-files.md"},"configuration files")," you'll need."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"component-registration.md"},"Register")," your component.")),(0,i.mdx)("h2",{id:"add-a-modulexml-file"},"Add a ",(0,i.mdx)("inlineCode",{parentName:"h2"},"module.xml")," file"),(0,i.mdx)("p",null,"Declare the component itself by adding a ",(0,i.mdx)("inlineCode",{parentName:"p"},"module.xml")," file in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"/etc")," folder of your component."),(0,i.mdx)("p",null,"A component declares itself (that is, defines its name and existence) in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"module.xml")," file, located in the install directory at ",(0,i.mdx)("inlineCode",{parentName:"p"},"<ComponentName>/etc/"),"."),(0,i.mdx)("p",null,"The smallest working ",(0,i.mdx)("inlineCode",{parentName:"p"},"module.xml")," file would look something like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">\n        <module name="Vendor_ComponentName"/>\n</config>\n')),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," parameter defines the name of your component. It is required for all components. If you do not use ",(0,i.mdx)("a",{parentName:"p",href:"../components/declarative-schema/index.md"},"Declarative Schema")," to help manage the installation and upgrade processes for your component, then you must also add the  ",(0,i.mdx)("inlineCode",{parentName:"p"},"setup_version")," parameter to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"module")," line. Set the ",(0,i.mdx)("inlineCode",{parentName:"p"},"setup_version")," value to your module's ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/database-schema"},"database schema")," version. Omit the ",(0,i.mdx)("inlineCode",{parentName:"p"},"setup_version")," parameter if you use ",(0,i.mdx)("a",{parentName:"p",href:"../components/declarative-schema/index.md"},"Declarative Schema"),"."),(0,i.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,'Avoid using "Ui" for your custom module name, because the ',(0,i.mdx)("inlineCode",{parentName:"p"},"%Vendor%_Ui")," notation, required when specifying paths, might cause issues."),(0,i.mdx)("h2",{id:"add-a-composerjson-file"},"Add a ",(0,i.mdx)("inlineCode",{parentName:"h2"},"composer.json")," file"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"composer.json")," provides a component name and also specifies component dependencies."),(0,i.mdx)("p",null,"Refer to ",(0,i.mdx)("a",{parentName:"p",href:"../versioning/dependencies.md"},"Module version dependencies")," to determine versioning requirements."),(0,i.mdx)("h3",{id:"example"},"Example"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "your-name/module-Acme",\n    "description": "Test component",\n    "require": {\n        "php": "~7.3.0||~7.4.0",\n        "magento/module-store": "102.1",\n        "magento/module-catalog": "102.1",\n        "magento/module-catalog-inventory": "102.1",\n        "magento/module-ui": "self.version",\n        "magento/magento-composer-installer": "*"\n    },\n    "suggest": {\n      "magento/module-webapi": "102.1"\n    },\n    "type": "magento2-module",\n    "version": "102.1",\n    "license": [\n        "OSL-3.0",\n        "AFL-3.0"\n    ],\n    "autoload": {\n        "files": [ "registration.php" ],\n        "psr-4": {\n            "Magento\\\\CatalogImportExport\\\\": ""\n        }\n    }\n}\n')),(0,i.mdx)("p",null,"In this example:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"name")," is the name of your component."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"description")," is a concise explanation of your component's purpose."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"require")," lists any components your component depends on."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"suggest")," lists soft dependencies. The component can operate without them, but if the components are active, this component might impact their functionality. ",(0,i.mdx)("inlineCode",{parentName:"li"},"Suggest")," does not affect component load order."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"type")," determines what the ",(0,i.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/magento-component"},"component")," type. Choose from ",(0,i.mdx)("em",{parentName:"li"},"magento2-theme"),", ",(0,i.mdx)("em",{parentName:"li"},"magento2-language"),", or ",(0,i.mdx)("em",{parentName:"li"},"magento2-module"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"version")," lists the version of the component."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"license")," lists applicable licenses that apply to your component."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"autoload")," instructs Composer to load the specified files.")),(0,i.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Adobe Commerce and Magento Open Source do not currently support the ",(0,i.mdx)("a",{parentName:"p",href:"https://getcomposer.org/doc/05-repositories.md#path"},(0,i.mdx)("inlineCode",{parentName:"a"},"path"))," repository."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-build-component-name-md-48d6f7f6ee5b8b5d9698.js.map