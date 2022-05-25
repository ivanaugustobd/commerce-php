"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[3975],{49184:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return p}});var a=t(87462),i=t(63366),r=(t(15007),t(64983)),o=t(91515),m=["components"],l={},s={_frontmatter:l},d=o.Z;function p(e){var n=e.components,t=(0,i.Z)(e,m);return(0,r.mdx)(d,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"add-an-admin-grid"},"Add an Admin grid"),(0,r.mdx)("p",null,"Admin grids are used to represent, filter, and sort various data in the Adobe Commerce and Magento Open Source Admin application. They are also used to perform mass actions such as updates and deletes.\nThis tutorial will show you how to create a simple Admin grid."),(0,r.mdx)("h2",{id:"1-create-a-backbone-module"},"1. Create a backbone module"),(0,r.mdx)("p",null,"Everything starts with a module. ",(0,r.mdx)("inlineCode",{parentName:"p"},"Dev_Grid")," will be used as the namespace:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"mkdir -p app/code/Dev/Grid/etc\n")),(0,r.mdx)("p",null,"Here are the required files to get started:"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/etc/module.xml"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Module/etc/module.xsd">\n <module name="Dev_Grid">\n  <sequence>\n   <module name="Magento_Backend"/>\n   <module name="Magento_Ui"/>\n  </sequence>\n </module>\n</config>\n')),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/registration.php"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nuse Magento\\Framework\\Component\\ComponentRegistrar;\n\nComponentRegistrar::register(\n    ComponentRegistrar::MODULE,\n    'Dev_Grid',\n    __DIR__\n);\n")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/etc/adminhtml/routes.xml"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:App/etc/routes.xsd">\n    <router id="admin">\n        <route id="dev_grid" frontName="dev_grid">\n            <module name="Dev_Grid" before="Magento_Backend" />\n        </route>\n    </router>\n</config>\n')),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/etc/adminhtml/menu.xml"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Backend:etc/menu.xsd">\n    <menu>\n        <add id="Dev_Grid::home" title="Category Listing" module="Dev_Grid" sortOrder="1000" parent="Magento_Catalog::catalog_categories" resource="Magento_Catalog::categories" action="dev_grid/index/index"/>\n    </menu>\n</config>\n')),(0,r.mdx)("h2",{id:"2-define-the-admin-grid"},"2. Define the Admin grid"),(0,r.mdx)("p",null,"The grid displays a list of available categories that start with a letter ",(0,r.mdx)("inlineCode",{parentName:"p"},"b")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"B"),".\nThis grid has three columns: ",(0,r.mdx)("inlineCode",{parentName:"p"},"ID"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"category path")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"category name"),". ",(0,r.mdx)("inlineCode",{parentName:"p"},"ID")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"category path")," are from the ",(0,r.mdx)("inlineCode",{parentName:"p"},"catalog_category_entity")," table. For the ",(0,r.mdx)("inlineCode",{parentName:"p"},"name")," values, joins are used.\nThe page layout file is ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/view/adminhtml/layout/dev_grid_index_index.xml"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<page xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:View/Layout/etc/page_configuration.xsd">\n    <body>\n        <referenceContainer name="content">\n            <uiComponent name="dev_grid_category_listing"/>\n        </referenceContainer>\n    </body>\n</page>\n')),(0,r.mdx)("p",null,"The UI component ",(0,r.mdx)("inlineCode",{parentName:"p"},"dev_grid_category_listing")," must be defined separately in a file with the same name, ending with ",(0,r.mdx)("inlineCode",{parentName:"p"},".xml")," - ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/view/adminhtml/ui_component/dev_grid_category_listing.xml"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Ui:etc/ui_configuration.xsd">\n  <argument name="data" xsi:type="array">\n     <item name="js_config" xsi:type="array">\n        <item name="provider" xsi:type="string">dev_grid_category_listing.dev_grid_category_listing_data_source</item>\n        <item name="deps" xsi:type="string">dev_grid_category_listing.dev_grid_category_listing_data_source</item>\n     </item>\n     <item name="spinner" xsi:type="string">dev_grid_category_columns</item>\n     <item name="buttons" xsi:type="array">\n        <item name="add" xsi:type="array">\n           <item name="name" xsi:type="string">add</item>\n           <item name="label" xsi:type="string">View Category Tree</item>\n           <item name="class" xsi:type="string">primary</item>\n           <item name="url" xsi:type="string">catalog/category/index</item>\n        </item>\n     </item>\n  </argument>\n  <dataSource name="dev_grid_category_listing_data_source">\n   <argument name="dataProvider" xsi:type="configurableObject">\n       <argument name="class" xsi:type="string">Dev\\Grid\\Ui\\DataProvider\\Category\\ListingDataProvider</argument>\n       <argument name="name" xsi:type="string">dev_grid_category_listing_data_source</argument>\n       <argument name="primaryFieldName" xsi:type="string">entity_id</argument>\n       <argument name="requestFieldName" xsi:type="string">entity_id</argument>\n       <argument name="data" xsi:type="array">\n         <item name="config" xsi:type="array">\n           <item name="update_url" xsi:type="url" path="mui/index/render"/>\n           <item name="storageConfig" xsi:type="array">\n             <item name="indexField" xsi:type="string">entity_id</item>\n           </item>\n         </item>\n       </argument>\n   </argument>\n   <argument name="data" xsi:type="array">\n     <item name="js_config" xsi:type="array">\n        <item name="component" xsi:type="string">Magento_Ui/js/grid/provider</item>\n     </item>\n   </argument>\n  </dataSource>\n  <listingToolbar name="listing_top">\n    <bookmark name="bookmarks"/>\n    <columnsControls name="columns_controls"/>\n    <massaction name="listing_massaction">\n      <argument name="data" xsi:type="array">\n        <item name="data" xsi:type="array">\n           <item name="selectProvider" xsi:type="string">dev_grid_category_listing.dev_grid_category_listing.dev_grid_category_columns.ids</item>\n           <item name="displayArea" xsi:type="string">bottom</item>\n           <item name="component" xsi:type="string">Magento_Ui/js/grid/tree-massactions</item>\n           <item name="indexField" xsi:type="string">entity_id</item>\n        </item>\n      </argument>\n      <action name="delete">\n         <argument name="data" xsi:type="array">\n           <item name="config" xsi:type="array">\n               <item name="type" xsi:type="string">delete</item>\n               <item name="label" xsi:type="string" translate="true">Delete</item>\n               <item name="url" xsi:type="url" path="dev_grid/category/massDelete"/>\n               <item name="confirm" xsi:type="array">\n                  <item name="title" xsi:type="string" translate="true">Delete items</item>\n                  <item name="message" xsi:type="string" translate="true">Are you sure you want to delete selected items?</item>\n               </item>\n           </item>\n         </argument>\n      </action>\n    </massaction>\n    <filters name="listing_filters">\n            <argument name="data" xsi:type="array">\n                <item name="config" xsi:type="array">\n                    <item name="templates" xsi:type="array">\n                        <item name="filters" xsi:type="array">\n                            <item name="select" xsi:type="array">\n                                <item name="component" xsi:type="string">Magento_Ui/js/form/element/ui-select</item>\n                                <item name="template" xsi:type="string">ui/grid/filters/elements/ui-select</item>\n                            </item>\n                        </item>\n                    </item>\n                </item>\n            </argument>\n    </filters>\n    <paging name="listing_paging"/>\n  </listingToolbar>\n  <columns name="dev_grid_category_columns">\n    <selectionsColumn name="ids">\n       <argument name="data" xsi:type="array">\n           <item name="config" xsi:type="array">\n              <item name="indexField" xsi:type="string">entity_id</item>\n           </item>\n       </argument>\n    </selectionsColumn>\n    <column name="entity_id">\n      <settings>\n         <filter>textRange</filter>\n         <label translate="true">ID</label>\n         <resizeDefaultWidth>25</resizeDefaultWidth>\n      </settings>\n    </column>\n    <column name="path">\n      <settings>\n         <filter>text</filter>\n         <bodyTmpl>ui/grid/cells/text</bodyTmpl>\n         <label translate="true">Path</label>\n     </settings>\n    </column>\n    <column name="name">\n      <settings>\n         <filter>text</filter>\n         <bodyTmpl>ui/grid/cells/text</bodyTmpl>\n         <label translate="true">Name</label>\n      </settings>\n    </column>\n    <column name="created_at" class="Magento\\Ui\\Component\\Listing\\Columns\\Date" component="Magento_Ui/js/grid/columns/date">\n      <settings>\n        <filter>dateRange</filter>\n        <dataType>date</dataType>\n        <label translate="true">Created</label>\n      </settings>\n    </column>\n    <actionsColumn name="actions" class="Dev\\Grid\\Ui\\Component\\Category\\Listing\\Column\\Actions" sortOrder="200">\n       <argument name="data" xsi:type="array">\n          <item name="config" xsi:type="array">\n              <item name="resizeEnabled" xsi:type="boolean">false</item>\n              <item name="resizeDefaultWidth" xsi:type="string">107</item>\n              <item name="indexField" xsi:type="string">entity_id</item>\n          </item>\n       </argument>\n       <argument name="viewUrl" xsi:type="string">catalog/category/view</argument>\n    </actionsColumn>\n  </columns>\n</listing>\n')),(0,r.mdx)("p",null,"This file consists of several sections:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"dataSource")," - references the class that is responsible for getting the requested data."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"listingToolbar")," - where mass actions and filters are defined."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"columns")," - lists the columns to be displayed.")),(0,r.mdx)("h2",{id:"3-define-the-data-source-class"},"3. Define the data source class"),(0,r.mdx)("p",null,"The UI references ",(0,r.mdx)("inlineCode",{parentName:"p"},"Dev\\Grid\\Ui\\DataProvider\\Category\\ListingDataProvider")," as the data source class."),(0,r.mdx)("p",null,"The corresponding file is ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/Ui/DataProvider/Category/ListingDataProvider.php"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Dev\\Grid\\Ui\\DataProvider\\Category;\n\nuse Magento\\Framework\\View\\Element\\UiComponent\\DataProvider\\DataProvider;\n\nclass ListingDataProvider extends DataProvider\n{\n}\n")),(0,r.mdx)("p",null,"It has to extend ",(0,r.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\View\\Element\\UiComponent\\DataProvider\\DataProvider"),".\nThe plugin then gets a ",(0,r.mdx)("inlineCode",{parentName:"p"},"name")," attribute:"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/etc/di.xml"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0"?>\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n <type name="Dev\\Grid\\Ui\\DataProvider\\Category\\ListingDataProvider">\n   <plugin name="dev_grid_attributes" type="Dev\\Grid\\Plugin\\AddAttributesToUiDataProvider"/>\n </type>\n <type name="Magento\\Framework\\View\\Element\\UiComponent\\DataProvider\\CollectionFactory">\n  <arguments>\n   <argument name="collections" xsi:type="array">\n     <item name="dev_grid_category_listing_data_source" xsi:type="string">DevGridCategoryCollection</item>\n   </argument>\n  </arguments>\n </type>\n <virtualType name="DevGridCategoryCollection" type="Dev\\Grid\\Ui\\DataProvider\\Category\\Listing\\Collection">\n   <arguments>\n     <argument name="mainTable" xsi:type="string">catalog_category_entity</argument>\n     <argument name="resourceModel" xsi:type="string">Dev\\Grid\\Model\\ResourceModel\\Category</argument>\n   </arguments>\n </virtualType>\n</config>\n')),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/Plugin/AddAttributesToUiDataProvider.php"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Dev\\Grid\\Plugin;\n\nuse Dev\\Grid\\Ui\\DataProvider\\Category\\ListingDataProvider as CategoryDataProvider;\nuse Magento\\Eav\\Api\\AttributeRepositoryInterface;\nuse Magento\\Framework\\App\\ProductMetadataInterface;\nuse Magento\\Framework\\View\\Element\\UiComponent\\DataProvider\\SearchResult;\n\nclass AddAttributesToUiDataProvider\n{\n    /** @var AttributeRepositoryInterface */\n    private $attributeRepository;\n\n    /** @var ProductMetadataInterface */\n    private $productMetadata;\n\n    /**\n     * Constructor\n     *\n     * @param AttributeRepositoryInterface $attributeRepository\n     * @param ProductMetadataInterface $productMetadata\n     */\n    public function __construct(\n        AttributeRepositoryInterface $attributeRepository,\n        ProductMetadataInterface $productMetadata\n    ) {\n        $this->attributeRepository = $attributeRepository;\n        $this->productMetadata = $productMetadata;\n    }\n\n    /**\n     * Get Search Result after plugin\n     *\n     * @param CategoryDataProvider $subject\n     * @param SearchResult $result\n     * @return SearchResult\n     */\n    public function afterGetSearchResult(CategoryDataProvider $subject, SearchResult $result)\n    {\n        if ($result->isLoaded()) {\n            return $result;\n        }\n\n        $edition = $this->productMetadata->getEdition();\n\n        $column = 'entity_id';\n\n        if ($edition == 'Enterprise') {\n            $column = 'row_id';\n        }\n\n        $attribute = $this->attributeRepository->get('catalog_category', 'name');\n\n        $result->getSelect()->joinLeft(\n            ['devgridname' => $attribute->getBackendTable()],\n            'devgridname.' . $column . ' = main_table.' . $column . ' AND devgridname.attribute_id = '\n            . $attribute->getAttributeId(),\n            ['name' => 'devgridname.value']\n        );\n\n        $result->getSelect()->where('devgridname.value LIKE \"B%\"');\n\n        return $result;\n    }\n}\n")),(0,r.mdx)("p",null,"This works with both enterprise and community versions by linking on different fields.\nIn this case, ",(0,r.mdx)("inlineCode",{parentName:"p"},"LIKE")," is case insensitive."),(0,r.mdx)("h2",{id:"4-data-source-collection"},"4. Data source collection"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"dataSource")," name ",(0,r.mdx)("inlineCode",{parentName:"p"},"dev_grid_category_listing_data_source")," links to ",(0,r.mdx)("inlineCode",{parentName:"p"},"Dev\\Grid\\Ui\\DataProvider\\Category\\Listing\\Collection")," collection in ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/etc/di.xml"),"."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"di.xml")," also sets the main table and resource model:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},' <virtualType name="DevGridCategoryCollection" type="Dev\\Grid\\Ui\\DataProvider\\Category\\Listing\\Collection">\n   <arguments>\n     <argument name="mainTable" xsi:type="string">catalog_category_entity</argument>\n     <argument name="resourceModel" xsi:type="string">Dev\\Grid\\Model\\ResourceModel\\Category</argument>\n   </arguments>\n </virtualType>\n')),(0,r.mdx)("p",null,"The collection class translates to ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/Ui/DataProvider/Category/Listing/Collection.php"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Dev\\Grid\\Ui\\DataProvider\\Category\\Listing;\n\nuse Magento\\Framework\\View\\Element\\UiComponent\\DataProvider\\SearchResult;\n\nclass Collection extends SearchResult\n{\n    /**\n     * Override _initSelect to add custom columns\n     *\n     * @return void\n     */\n    protected function _initSelect()\n    {\n        $this->addFilterToMap('entity_id', 'main_table.entity_id');\n        $this->addFilterToMap('name', 'devgridname.value');\n        parent::_initSelect();\n    }\n}\n")),(0,r.mdx)("p",null,"It uses a custom collection file to add custom filters to map, and makes the grid filters work with the ID and name fields. Without ",(0,r.mdx)("inlineCode",{parentName:"p"},"addFilterToMap"),", you will not be able to search within the ",(0,r.mdx)("inlineCode",{parentName:"p"},"name")," column."),(0,r.mdx)("p",null,"The resource model class translates to ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/Model/ResourceModel/Category.php"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Dev\\Grid\\Model\\ResourceModel;\n\nuse Magento\\Catalog\\Model\\ResourceModel\\Category as BaseCategory;\n\nclass Category extends BaseCategory\n{\n}\n")),(0,r.mdx)("h2",{id:"5-column-actions-class"},"5. Column actions class"),(0,r.mdx)("p",null,"The UI grid file defines a column actions class ",(0,r.mdx)("inlineCode",{parentName:"p"},"Dev\\Grid\\Ui\\Component\\Category\\Listing\\Column\\Actions"),"."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/Ui/Component/Category/Listing/Column/Actions.php"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Dev\\Grid\\Ui\\Component\\Category\\Listing\\Column;\n\nuse Magento\\Framework\\View\\Element\\UiComponentFactory;\nuse Magento\\Framework\\View\\Element\\UiComponent\\ContextInterface;\nuse Magento\\Framework\\Url;\nuse Magento\\Ui\\Component\\Listing\\Columns\\Column;\n\nclass Actions extends Column\n{\n    /**\n     * @var UrlInterface\n     */\n    protected $_urlBuilder;\n\n    /**\n     * @var string\n     */\n    protected $_viewUrl;\n\n    /**\n     * Constructor\n     *\n     * @param ContextInterface $context\n     * @param UiComponentFactory $uiComponentFactory\n     * @param Url $urlBuilder\n     * @param string $viewUrl\n     * @param array $components\n     * @param array $data\n     */\n    public function __construct(\n        ContextInterface $context,\n        UiComponentFactory $uiComponentFactory,\n        Url $urlBuilder,\n        $viewUrl = '',\n        array $components = [],\n        array $data = []\n    ) {\n        $this->_urlBuilder = $urlBuilder;\n        $this->_viewUrl    = $viewUrl;\n        parent::__construct($context, $uiComponentFactory, $components, $data);\n    }\n\n    /**\n     * Prepare Data Source\n     *\n     * @param array $dataSource\n     * @return array\n     */\n    public function prepareDataSource(array $dataSource)\n    {\n        if (isset($dataSource['data']['items'])) {\n            foreach ($dataSource['data']['items'] as &$item) {\n                $name = $this->getData('name');\n                if (isset($item['entity_id'])) {\n                    $item[$name]['view']   = [\n                        'href'  => $this->_urlBuilder->getUrl($this->_viewUrl, ['id' => $item['entity_id']]),\n                        'target' => '_blank',\n                        'label' => __('View on Frontend')\n                    ];\n                }\n            }\n        }\n        return $dataSource;\n    }\n}\n")),(0,r.mdx)("p",null,"It gets a frontend URL for every category it lists."),(0,r.mdx)("h2",{id:"6-backend-controllers"},"6. Backend controllers"),(0,r.mdx)("p",null,"The main route defined in ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/etc/adminhtml/menu.xml")," as ",(0,r.mdx)("inlineCode",{parentName:"p"},"dev_grid/index/index")," translates to ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/Controller/Adminhtml/Index/Index.php"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Dev\\Grid\\Controller\\Adminhtml\\Index;\n\nuse Magento\\Backend\\App\\Action;\nuse Magento\\Backend\\App\\Action\\Context;\nuse Magento\\Framework\\View\\Result\\Page;\nuse Magento\\Framework\\View\\Result\\PageFactory;\nuse Magento\\Framework\\App\\Action\\HttpGetActionInterface;\n\nclass Index extends Action implements HttpGetActionInterface\n{\n    /**\n     * @var PageFactory\n     */\n    private $pageFactory;\n\n    /**\n     * Constructor\n     *\n     * @param Context $context\n     * @param PageFactory $rawFactory\n     */\n    public function __construct(\n        Context $context,\n        PageFactory $rawFactory\n    ) {\n        $this->pageFactory = $rawFactory;\n\n        parent::__construct($context);\n    }\n\n    /**\n     * Add the main Admin Grid page\n     *\n     * @return Page\n     */\n    public function execute(): Page\n    {\n        $resultPage = $this->pageFactory->create();\n        $resultPage->setActiveMenu('Magento_Catalog::catalog_products');\n        $resultPage->getConfig()->getTitle()->prepend(__('Admin Grid Tutorial Example'));\n\n        return $resultPage;\n    }\n}\n")),(0,r.mdx)("p",null,"The Ui grid file defines the custom route ",(0,r.mdx)("inlineCode",{parentName:"p"},"dev_grid/category/massDelete")," (mass delete) and translates to ",(0,r.mdx)("inlineCode",{parentName:"p"},"app/code/Dev/Grid/Controller/Adminhtml/Category/MassDelete.php"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Dev\\Grid\\Controller\\Adminhtml\\Category;\n\nuse Magento\\Backend\\App\\Action;\nuse Magento\\Backend\\App\\Action\\Context;\nuse Magento\\Backend\\Model\\View\\Result\\Redirect;\nuse Magento\\Catalog\\Model\\ResourceModel\\Category\\CollectionFactory;\nuse Magento\\Catalog\\Api\\CategoryRepositoryInterface;\nuse Magento\\Framework\\App\\Action\\HttpPostActionInterface;\nuse Magento\\Framework\\Controller\\ResultFactory;\nuse Magento\\Framework\\Exception\\NotFoundException;\nuse Magento\\Ui\\Component\\MassAction\\Filter;\n\nclass MassDelete extends Action implements HttpPostActionInterface\n{\n    /**\n     * Authorization level\n     */\n    const ADMIN_RESOURCE = 'Magento_Catalog::categories';\n\n    /**\n     * @var CollectionFactory\n     */\n    protected $collectionFactory;\n\n    /**\n     * @var CategoryRepositoryInterface\n     */\n    private $categoryRepository;\n\n    /**\n     * @var Filter\n     */\n    protected $filter;\n\n    /**\n     * Constructor\n     *\n     * @param Context $context\n     * @param Filter $filter\n     * @param CollectionFactory $collectionFactory\n     * @param CategoryRepositoryInterface $categoryRepository\n     */\n    public function __construct(\n        Context $context,\n        Filter $filter,\n        CollectionFactory $collectionFactory,\n        CategoryRepositoryInterface $categoryRepository\n    ) {\n        $this->filter = $filter;\n        $this->collectionFactory = $collectionFactory;\n        $this->categoryRepository = $categoryRepository;\n        parent::__construct($context);\n    }\n\n    /**\n     * Category delete action\n     *\n     * @return Redirect\n     */\n    public function execute(): Redirect\n    {\n        if (!$this->getRequest()->isPost()) {\n            throw new NotFoundException(__('Page not found'));\n        }\n        $collection = $this->filter->getCollection($this->collectionFactory->create());\n        $categoryDeleted = 0;\n        foreach ($collection->getItems() as $category) {\n            $this->categoryRepository->delete($category);\n            $categoryDeleted++;\n        }\n\n        if ($categoryDeleted) {\n            $this->messageManager->addSuccessMessage(\n                __('A total of %1 record(s) have been deleted.', $categoryDeleted)\n            );\n        }\n        return $this->resultFactory->create(ResultFactory::TYPE_REDIRECT)->setPath('dev_grid/index/index');\n    }\n}\n")),(0,r.mdx)("h2",{id:"completed-extension"},"Completed extension"),(0,r.mdx)("p",null,"The complete extension can be found on GitHub at ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/goivvy/admin-grid-tutorial"},"Admin Grid Example Extension"),".\nInstallation instructions:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Clone the repository"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/goivvy/admin-grid-tutorial.git\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Copy ",(0,r.mdx)("inlineCode",{parentName:"p"},"app")," folder"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"cp -r ~/admin-grid/tutorial/app /path/to/magento2/root/folder\n"))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("p",{parentName:"li"},"Install and recompile"),(0,r.mdx)("pre",{parentName:"li"},(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento setup:upgrade\nbin/magento deploy:mode:set production\n")))),(0,r.mdx)("p",null,"The grid can now be accessed at ",(0,r.mdx)("strong",{parentName:"p"},"Catalog")," > ",(0,r.mdx)("strong",{parentName:"p"},"Inventory")," > ",(0,r.mdx)("strong",{parentName:"p"},"Category Listing"),"."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-components-add-admin-grid-md-d95b33b7944fed40bc61.js.map