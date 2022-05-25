"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[444],{72192:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return h}});var a,o=t(87462),i=t(63366),p=(t(15007),t(64983)),l=t(91515),r=["components"],s={},d=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,p.mdx)("div",e)}),c={_frontmatter:s},m=l.Z;function h(e){var n=e.components,t=(0,i.Z)(e,r);return(0,p.mdx)(m,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.mdx)("h1",{id:"develop-data-and-schema-patches"},"Develop data and schema patches"),(0,p.mdx)("p",null,"A data patch is a class that contains data modification instructions. It is defined in a ",(0,p.mdx)("inlineCode",{parentName:"p"},"<Vendor>/<Module_Name>/Setup/Patch/Data/<Patch_Name>.php")," file and implements ",(0,p.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\Setup\\Patch\\DataPatchInterface"),"."),(0,p.mdx)("p",null,"A schema patch contains custom schema modification instructions. These modifications can be complex. It is defined in a ",(0,p.mdx)("inlineCode",{parentName:"p"},"<Vendor>/<Module_Name>/Setup/Patch/Schema/<Patch_Name>.php")," file and implements ",(0,p.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\Setup\\Patch\\SchemaPatchInterface"),"."),(0,p.mdx)("p",null,"Unlike the declarative schema approach, patches will only be applied once. A list of applied patches is stored in the ",(0,p.mdx)("inlineCode",{parentName:"p"},"patch_list")," database table. An unapplied patch will be applied when running the ",(0,p.mdx)("inlineCode",{parentName:"p"},"setup:upgrade")," from the Magento CLI."),(0,p.mdx)("p",null,"Optionally, if you plan to enable rollback for your patch during module uninstallation, then you must implement ",(0,p.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\Setup\\Patch\\PatchRevertableInterface"),"."),(0,p.mdx)("p",null,"The declarative schema approach removes the version from the ",(0,p.mdx)("inlineCode",{parentName:"p"},"setup_module")," table (in a backward compatible way), leaving only the Composer version. Therefore, you can create all new patches and modules without specifying a ",(0,p.mdx)("inlineCode",{parentName:"p"},"setup_module")," version."),(0,p.mdx)("p",null,"The sequence of installing patches is handled through a dependency-based approach. Patches can either be independent or dependent on other patches. Independent patches can be installed in any sequence. A dependent patch requires a minimal number of patches so that it can be installed successfully."),(0,p.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,p.mdx)("p",null,"Adobe Commerce and Magento Open Source prioritize the declarative schema approach and executes updates from the ",(0,p.mdx)("a",{parentName:"p",href:"configuration.md"},"db_schema.xml")," before the data and schema patches."),(0,p.mdx)("p",null,"To define a dependency in a patch, add the method ",(0,p.mdx)("inlineCode",{parentName:"p"},"public static function getDependencies()"),"\nto the patch class and return the class names of the patches this patch depends on. The dependency can be in any module."),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-php"},"public static function getDependencies()\n{\n    return [\n        \\SomeVendor\\SomeModule\\Setup\\Patch\\Data\\SomePatch::class\n    ];\n}\n")),(0,p.mdx)("p",null,"The following code sample defines a data patch class that has a dependency."),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Magento\\DummyModule\\Setup\\Patch\\Data;\n\nuse Magento\\Framework\\Setup\\ModuleDataSetupInterface;\nuse Magento\\Framework\\Setup\\Patch\\DataPatchInterface;\nuse Magento\\Framework\\Setup\\Patch\\PatchRevertableInterface;\n\nclass DummyPatch\n    implements DataPatchInterface,\n    PatchRevertableInterface\n{\n    /**\n     * @var ModuleDataSetupInterface\n     */\n    private $moduleDataSetup;\n\n    /**\n     * @param ModuleDataSetupInterface $moduleDataSetup\n     */\n    public function __construct(\n        ModuleDataSetupInterface $moduleDataSetup\n    ) {\n        /**\n         * If before, we pass $setup as argument in install/upgrade function, from now we start\n         * inject it with DI. If you want to use setup, you can inject it, with the same way as here\n         */\n        $this->moduleDataSetup = $moduleDataSetup;\n    }\n\n    /**\n     * @inheritdoc\n     */\n    public function apply()\n    {\n        $this->moduleDataSetup->getConnection()->startSetup();\n        //The code that you want apply in the patch\n        //Please note, that one patch is responsible only for one setup version\n        //So one UpgradeData can consist of few data patches\n        $this->moduleDataSetup->getConnection()->endSetup();\n    }\n\n    /**\n     * @inheritdoc\n     */\n    public static function getDependencies()\n    {\n        /**\n         * This is dependency to another patch. Dependency should be applied first\n         * One patch can have few dependencies\n         * Patches do not have versions, so if in old approach with Install/Ugrade data scripts you used\n         * versions, right now you need to point from patch with higher version to patch with lower version\n         * But please, note, that some of your patches can be independent and can be installed in any sequence\n         * So use dependencies only if this important for you\n         */\n        return [\n            SomeDependency::class\n        ];\n    }\n\n    public function revert()\n    {\n        $this->moduleDataSetup->getConnection()->startSetup();\n        //Here should go code that will revert all operations from `apply` method\n        //Please note, that some operations, like removing data from column, that is in role of foreign key reference\n        //is dangerous, because it can trigger ON DELETE statement\n        $this->moduleDataSetup->getConnection()->endSetup();\n    }\n\n    /**\n     * @inheritdoc\n     */\n    public function getAliases()\n    {\n        /**\n         * This internal method, that means that some patches with time can change their names,\n         * but changing name should not affect installation process, that's why if we will change name of the patch\n         * we will add alias here\n         */\n        return [];\n    }\n}\n")),(0,p.mdx)("h2",{id:"reverting-data-patches"},"Reverting data patches"),(0,p.mdx)("p",null,"Adobe Commerce and Magento Open Source do not allow you to revert a particular module data patch. However, you can revert all ",(0,p.mdx)("inlineCode",{parentName:"p"},"composer")," installed or ",(0,p.mdx)("inlineCode",{parentName:"p"},"non-composer")," installed data patches using the ",(0,p.mdx)("inlineCode",{parentName:"p"},"module:uninstall")," command."),(0,p.mdx)("p",null,"Run the following command to revert all ",(0,p.mdx)("inlineCode",{parentName:"p"},"composer")," installed data patches:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento module:uninstall Vendor_ModuleName\n")),(0,p.mdx)("p",null,"Run the following command to revert all ",(0,p.mdx)("inlineCode",{parentName:"p"},"non-composer")," installed data patches:"),(0,p.mdx)("pre",null,(0,p.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento module:uninstall --non-composer Vendor_ModuleName\n")),(0,p.mdx)("h2",{id:"will-old-scripts-work-in-newer-versions"},"Will old scripts work in newer versions?"),(0,p.mdx)("p",null,"Old scripts will work with new versions of Magento. However, if you want to convert your old scripts to the new format,\nimplement ",(0,p.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\Setup\\Patch\\PatchVersionInterface"),". This interface allows you to specify the setup version of the module in your database. If the version of the module is higher than or equal to the version specified in your patch, then the patch is skipped. If the version in the database is lower, then the patch installs."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-components-declarative-schema-patches-md-03c6938f58e0ec77c025.js.map