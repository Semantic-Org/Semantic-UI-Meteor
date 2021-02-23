Fomantic UI for Meteor
======================

This package integrates [Fomantic UI](https://fomantic-ui.com) into Meteor and lets you configure what parts you need.

Why Fomantic? Semantic as a project has a wonderful set of tools, however it is no longer directly maintained.  Fomantic is updating packages currently, and hopes to merge back to Semantic-ui at some point.  However as updates happen on Fomantic, it may eventually replace the Semantic-ui project. In the meantime, this provides a way to include up to date versions of Semantic-UI.

# INITIAL COMMIT! WIP! 
This is getting a makeover on the fomantic-conversion branch.  Master is still a basic fork. 
Updates will be merged here once a core set of conversions are made.

These packages can't currently be installed as directed, as the fomantic organization for atmosphere has to be created.

Once this has been completed, it shall be transferred to the Fomantic organization.

Installation
------------
### Meteor <1.3

    meteor add mrmowgli:fomantic-ui flemay:less-autoprefixer

Continue to the Usage section.

### Meteor 1.3+

    meteor remove standard-minifier-css

    meteor add mrmowgli:fomantic-ui juliancwirko:postcss less 

Add the following to `package.json`
```
{
  "devDependencies": {
    "autoprefixer": "^6.3.1",
    "postcss": "^6.0.22",
    "postcss-load-config": "^1.2.0"
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {"browsers": ["last 2 versions"]}
    }
  }
}
```

After saving the changes to `package.json`, run:

    meteor npm install

Usage
-----

1. Create an empty `custom.fomantic.json` inside a `/client/` folder somewhere in your project.  
Example: `/client/lib/fomantic-ui/custom.fomantic.json`.
2. Start meteor
3. Edit the file `custom.fomantic.json` to select only the definitions and themes you want  
Example: set `themes` `basic` to `true`, leave `default` as `true`
4. Save the file and it will generate Fomantic UI
5. Check the [generated-structure table](https://github.com/Fomantic-Org/Fomantic-UI-Meteor#generated-structure) below for editable files and folders.

> IMPORTANT: If you are happy with the default values you will NEED to remove `.custom.fomantic.json` to generate Fomantic UI. (see Generating Trigger)

> NOTE: Another way to use ONLY the default values is to use this package: https://atmospherejs.com/fomantic/ui-css
    meteor add fomantic:ui-css

Getting Started & Initializing Modules
-----
Fomantic UI requries some components to be initialized or they will not work (Dropdowns, Menus, Accordions, etc)
Refer to the Usage sections in a module on how to initialize each element eg: [Fomantic UI Accordion Usage](http://fomantic-ui.com/modules/accordion.html#/usage)

Example of initializing a dropdown using a template helper
```javascript
Template.myDropdown.rendered = function() {
  // be sure to use this.$ so it is scoped to the template instead of to the window
  this.$('.ui.dropdown').dropdown({on: 'hover'});
  // other SUI modules initialization
};
```

Abstracted version which you use on any template helper
```javascript
function initAccordions(template) {
  template.$('.ui.accordion').accordion();
}
function initDropdowns(template) {
  template.$('.ui.dropdown').dropdown({on: 'hover'});
}

Template.myDropdowns.onRendered({
  initDropdowns(this);
})
```

custom.fomantic.json
--------------------

`custom.fomantic.json` is the most important file. If it is empty, `fomantic:ui` will generate the content with all the definitions and themes. By default, it sets to true all definitions and the core-theme "default"(which should always be true).

```javascript
{
  "definitions": {
    "accordion": true,
    "ad": true,
    "api": true,
    ...
  },
  "themes": {
    "amazon": false,
    "basic": false,
    "bookish": false,
    "bootstrap3": false,
    "chubby": false,
    "classic": false,
    "default": true,
    ...
  }
}
```
Changing any value will trigger the package to regenerate the files/folders accordingly.

Be aware when you strip away definitions. The `site` definition is always needed and so is the `default` theme. Here an example of the most minimal `custom.fomantic.json` file.
```javascript
{
  "definitions": {
    "site": true // <- needs to be true
  },
  "themes": {
    "basic": true, // <- a theme
    "default": true // <- core "theme" needs to be true
  }
}
```

Generated Structure
-------------------

This package generates the following structure based on `custom.fomantic.json`

```
+- definitions/
+- site/
+- themes/
|- .custom.fomantic.json
|- custom.fomantic.json
|- fomantic.less
|- theme.config.import.less
|- theme.import.less
```

The following table explains the generated files/folders and if they are editable without losing any changes when generating.

File/Folder | Description | Generated | Editable
--- | --- | --- | ---
definitions/ | contains the `less` and `javascript` definitions for each component | always | no
site/ | contains your current site's theme | only if it does not exist | yes
themes/ | contains *pre-packaged themes* including Fomantic's default theme | always | no
.custom.fomantic.json | copy of custom.fomantic.json (see Generating Trigger) | always | no
custom.fomantic.json | contains definitions and themes to be included or not | only if the file is empty | yes
fomantic.less | imports the definitions | always | no
theme.config.import.less | defines which theme to use per components | only if the file does not exist | yes
theme.import.less | imports the right themes | always | no

### site/

This folder contains your current site's theme. It is generated only when it does not exist. Therefore if you change `custom.fomantic.json` to turn definitions/themes on/off, then it will not affect **site/**. You will either need to add/remove files in **site/** or remove the **site/** folder so it can be regenerated again.

Generating Trigger
------------------

Every time Meteor starts (or refreshes) it calls the package `fomantic:ui` to generate Fomantic UI.

The package has a simple mechanism based on the difference of `custom.fomantic.json` and `.custom.fomantic.json` to avoid generating all the Fomantic UI files and folders each time Meteor starts (or refreshes).

Therefore if the file `.custom.fomantic.json` does not exist or it is different from `custom.fomantic.json` then it will generate Fomantic UI.

Dependencies
------------
(Meteor <1.3) **[flemay:less-autoprefixer](https://atmospherejs.com/flemay/less-autoprefixer)**: Fomantic UI needs autoprefixer to be compiled.

> **Note 1:** You can choose any less-autoprefixer package.

> **Note 2:** Since the flemay:less-autoprefixer package compiles `LESS` files you don't need the `less` package.

(Meteor 1.3+) **[juliancwirko:postcss](https://atmospherejs.com/juliancwirko/postcss)**: Fomantic UI needs autoprefixer for adding vendor prefixes.

(Meteor 1.3+) **[less](https://atmospherejs.com/meteor/less)**: is needed to compile the `LESS` files to `CSS` when building.

**[fomantic:ui-data](https://atmospherejs.com/fomantic/ui-data)** is being used to get Fomantic UI files.

Contributing
-------------

Contributors are very welcome.

License
-------

MIT license

Credits and Acknowledgements
----------------------------
**[semantic:ui](https://github.com/Semantic-Org/Semantic-UI-Meteor)**: fomantic:ui has been forked from the official Semantic-Org/Semantic-UI-Meteor repository.
**[nemo64:bootstrap](https://atmospherejs.com/nemo64/bootstrap)**: semantic:ui has been inspired by nemo64:bootstrap. It uses a very similar approach.
