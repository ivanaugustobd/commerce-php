"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[3519],{51394:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return i},default:function(){return c}});var n=t(87462),d=t(63366),r=(t(15007),t(64983)),m=t(91515),l=["components"],i={},o={_frontmatter:i},p=m.Z;function c(e){var a=e.components,t=(0,d.Z)(e,l);return(0,r.mdx)(p,(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"directory-and-cache-clearing"},"Directory and cache clearing"),(0,r.mdx)("p",null,"While you're developing components (modules, themes, and language packages), your rapidly changing environment requires you to periodically clear certain directories and caches. Otherwise, your code runs with exceptions and won't function properly."),(0,r.mdx)("p",null,"This topic provides guidelines on what directories to clear and when to clear them.\nAll directories discussed in this topic are default locations. It's possible to customize these locations but doing so is beyond the scope of this topic."),(0,r.mdx)("p",null,"When you're developing components (modules, themes, and language packages), the following directories contain temporary or generated files you can clear periodically:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Directory"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"generated/code")),(0,r.mdx)("td",{parentName:"tr",align:null},"Contains ",(0,r.mdx)("a",{parentName:"td",href:"code-generation.md"},"generated code"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"generated/metadata")),(0,r.mdx)("td",{parentName:"tr",align:null},"Contains the compiled dependency injection configuration for all modules.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pub/static")),(0,r.mdx)("td",{parentName:"tr",align:null},"Contains ",(0,r.mdx)("inlineCode",{parentName:"td"},"js")," and ",(0,r.mdx)("inlineCode",{parentName:"td"},"html")," files for each store view.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"var/cache")),(0,r.mdx)("td",{parentName:"tr",align:null},"All cacheable objects ",(0,r.mdx)("em",{parentName:"td"},"except the page cache"),". This directory is empty if you use a third-party cache storage such as Redis.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"var/composer_home")),(0,r.mdx)("td",{parentName:"tr",align:null},"Home directory for Setup Wizard artifacts. Do not touch this directory unless you are an experienced developer familiar with the plug-in system.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"var/page_cache")),(0,r.mdx)("td",{parentName:"tr",align:null},"Cached pages from the full page cache mechanism. This directory is empty if you use a third-party HTTP accelerator such as Varnish.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"var/view_preprocessed")),(0,r.mdx)("td",{parentName:"tr",align:null},"Contains minified templates and compiled LESS (meaning LESS, CSS, and HTML).")))),(0,r.mdx)("h2",{id:"what-directories-to-clear"},"What directories to clear"),(0,r.mdx)("p",null,"The following table provides guidelines on what you should clear and when."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Action"),(0,r.mdx)("th",{parentName:"tr",align:null},"Directories to clear"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Change a class if there is a plugin related to it"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"generated/metadata"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"generated/code"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"A change that results in generated factories or proxies"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"generated/metadata"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"generated/code"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"A change in ",(0,r.mdx)("inlineCode",{parentName:"td"},"di.xml")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"generated/metadata"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"generated/code")," (also need to run the code compiler again)")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Add, remove, enable, or disable modules"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"generated/metadata"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"generated/code"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"var/cache"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"var/page_cache"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Add or edit a layout or theme"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"var/view_preprocessed"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"var/cache"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"var/page_cache"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Change LESS or templates"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"var/view_preprocessed"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"var/cache"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"var/page_cache"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"pub/static"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Change ",(0,r.mdx)("inlineCode",{parentName:"td"},"*.js")," or ",(0,r.mdx)("inlineCode",{parentName:"td"},"*.html")," files"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"pub/static"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Add or edit a CMS page, cacheable block, or use the Admin to change the configuration"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"var/cache"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"var/page_cache"))))),(0,r.mdx)("h2",{id:"how-to-clear-the-directories"},"How to clear the directories"),(0,r.mdx)("p",null,"To only clear directories and not perform other actions, log in to the application server as the ",(0,r.mdx)("a",{href:"https://devdocs.magento.com/guides/v2.4/install-gde/prereq/file-sys-perms-over.html"},"file system owner")," and clear directories using a command like the following:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"rm -r <magento_root>/generated/*/*\n")),(0,r.mdx)("p",null,"You can also use the following command-line tools clear some directories for you. These commands perform other tasks as well; consult the linked documentation for more details."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Tool name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Brief description"),(0,r.mdx)("th",{parentName:"tr",align:null},"What it clears"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://devdocs.magento.com/guides/v2.4/install-gde/install/cli/install-cli-subcommands-db-upgr.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"magento setup:upgrade"))),(0,r.mdx)("td",{parentName:"tr",align:null},"Update the database schema and data"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"generated/metadata")," and ",(0,r.mdx)("inlineCode",{parentName:"td"},"generated/code"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-compiler.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"magento setup:di:compile"))),(0,r.mdx)("td",{parentName:"tr",align:null},"Generates code"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"generated/code")," prior to compiling")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-mode.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"magento deploy:mode:set {mode}"))),(0,r.mdx)("td",{parentName:"tr",align:null},"Switch between ",(0,r.mdx)("inlineCode",{parentName:"td"},"developer")," and ",(0,r.mdx)("inlineCode",{parentName:"td"},"production")," mode"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"generated/metadata"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"generated/code"),", ",(0,r.mdx)("inlineCode",{parentName:"td"},"var/view_preprocessed"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-cache.html"},(0,r.mdx)("inlineCode",{parentName:"a"},"magento cache:clean {type}"))),(0,r.mdx)("td",{parentName:"tr",align:null},"Clears the cache"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"var/cache")," and ",(0,r.mdx)("inlineCode",{parentName:"td"},"var/page_cache"))))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-developer-components-clear-directories-md-16dd64afdde0c3c5a9b9.js.map