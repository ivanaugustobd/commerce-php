"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[2092],{59019:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return d}});var a,o=t(87462),r=t(63366),i=(t(15007),t(64983)),l=t(91515),p=["components"],c={},s=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),u={_frontmatter:c},m=l.Z;function d(e){var n=e.components,t=(0,r.Z)(e,p);return(0,i.mdx)(m,(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"public-interfaces-and-apis"},"Public interfaces and APIs"),(0,i.mdx)("p",null,"Learn about interaces and APIs."),(0,i.mdx)("h2",{id:"what-is-an-interface"},"What is an interface?"),(0,i.mdx)("p",null,"A ",(0,i.mdx)("em",{parentName:"p"},"public interface")," is a set of code that third-party developers can call, implement, or build as a ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/plug-in"},"plug-in"),". Adobe guarantees that this code will not change in subsequent releases without a major version change."),(0,i.mdx)("p",null,"Public interfaces for a ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," are marked with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@api")," annotation."),(0,i.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Third-party developers should use only these interfaces, that is, interfaces with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"@api")," annotation. You can use other interfaces but those may be modified or removed in subsequent Adobe Commerce and Magento Open Source releases. For more information, see ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/contributor/guides/code-contributions/backward-compatibility-policy/"},"Backward compatibility"),"."),(0,i.mdx)("h3",{id:"example-of-public-interface-annotation"},"Example of public interface annotation"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Magento\\CatalogRule\\Api;\n\n/**\n * Interface CatalogRuleRepositoryInterface\n * @api\n * @since 100.1.0\n */\ninterface CatalogRuleRepositoryInterface\n{\n...\n")),(0,i.mdx)("h2",{id:"what-is-an-api"},"What is an API?"),(0,i.mdx)("p",null,"An application programming interface (API) is a set of interfaces and their implementations that a module provides to other modules."),(0,i.mdx)("h3",{id:"example-of-an-api-interface-implementation"},"Example of an API interface implementation"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento_CatalogRule")," module."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\CatalogRule\\Api\\CatalogRuleRepositoryInterface")," interface"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Magento\\CatalogRule\\Api;\n\nuse Magento\\CatalogRule\\Api\\Data\\RuleInterface;\nuse Magento\\Framework\\Exception\\CouldNotDeleteException;\nuse Magento\\Framework\\Exception\\CouldNotSaveException;\nuse Magento\\Framework\\Exception\\NoSuchEntityException;\n\n/**\n * Interface CatalogRuleRepositoryInterface\n * @api\n * @since 100.1.0\n */\ninterface CatalogRuleRepositoryInterface\n{\n    /**\n     * @param RuleInterface $rule\n     * @return RuleInterface\n     * @throws CouldNotSaveException\n     * @since 100.1.0\n     */\n    public function save(RuleInterface $rule): RuleInterface;\n\n    /**\n     * @param int $ruleId\n     * @return RuleInterface\n     * @throws NoSuchEntityException\n     * @since 100.1.0\n     */\n    public function get(int $ruleId): RuleInterface;\n\n    /**\n     * @param RuleInterface $rule\n     * @return bool\n     * @throws CouldNotDeleteException\n     * @since 100.1.0\n     */\n    public function delete(RuleInterface $rule): bool;\n\n    /**\n     * @param int $ruleId\n     * @return bool\n     * @throws CouldNotDeleteException\n     * @since 100.1.0\n     */\n    public function deleteById(int $ruleId): bool;\n}\n")),(0,i.mdx)("p",null,"An interface implementation is declared in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"di.xml")," as ",(0,i.mdx)("inlineCode",{parentName:"p"},"<preference />")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n...\n    <preference for="Magento\\CatalogRule\\Api\\CatalogRuleRepositoryInterface" type="Magento\\CatalogRule\\Model\\CatalogRuleRepository"/>\n...\n</config>\n')),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"Magento\\CatalogRule\\Model\\CatalogRuleRepository")," implements the default methods of the",(0,i.mdx)("inlineCode",{parentName:"p"},"CatalogRuleRepositoryInterface"),":  ",(0,i.mdx)("inlineCode",{parentName:"p"},"save"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"get"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"delete"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"deleteById"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Magento\\CatalogRule\\Model;\n\nuse Magento\\CatalogRule\\Api\\Data;\nuse Magento\\Framework\\Exception\\CouldNotDeleteException;\nuse Magento\\Framework\\Exception\\CouldNotSaveException;\nuse Magento\\Framework\\Exception\\NoSuchEntityException;\nuse Magento\\Framework\\Exception\\ValidatorException;\nuse Magento\\CatalogRule\\Api\\CatalogRuleRepositoryInterface;\n\nclass CatalogRuleRepository implements CatalogRuleRepositoryInterface\n{\n    ...\n\n    /**\n     * @inheritdoc\n     */\n    public function save(Data\\RuleInterface $rule): Data\\RuleInterface\n    {\n        ...\n    }\n\n    /**\n     * @inheritdoc\n     */\n    public function get(int $ruleId): Data\\RuleInterface\n    {\n        ...\n    }\n\n    /**\n     * @inheritdoc\n     */\n    public function delete(Data\\RuleInterface $rule): bool\n    {\n        ...\n    }\n\n    /**\n     * @inheritdoc\n     */\n    public function deleteById(int $ruleId): bool\n    {\n        ...\n    }\n}\n")),(0,i.mdx)("h3",{id:"api-types"},"API types"),(0,i.mdx)("p",null,"The following items are considered types of APIs:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Directory structure"),(0,i.mdx)("li",{parentName:"ul"},"Configuration files structure"),(0,i.mdx)("li",{parentName:"ul"},"Events"),(0,i.mdx)("li",{parentName:"ul"},"Client API"),(0,i.mdx)("li",{parentName:"ul"},"Provider ",(0,i.mdx)("a",{parentName:"li",href:"https://glossary.magento.com/api"},"API")," (SPI)")),(0,i.mdx)("p",null,"Directory structure and configuration file structure are types of APIs because ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/extension"},"extension")," developers use them. Developers write configurations, and place their ",(0,i.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/static-files"},"static files")," in specified folders; so if the configuration file structure or directory structure changes in subsequent releases, modules and extensions may break."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-components-api-concepts-md-59e90ceb6657d3a4702e.js.map