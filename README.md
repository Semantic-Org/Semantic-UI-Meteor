Semantic UI for Meteor
======================

This package integrates [Semantic UI](http://semantic-ui.com) into Meteor and lets you configure what parts you need.

Installation
------------
### Meteor <1.3

    meteor add semantic:ui flemay:less-autoprefixer jquery

Continue to the Usage section.

### Meteor 1.3+

    meteor remove standard-minifier-css

    meteor add semantic:ui juliancwirko:postcss less jquery

Add the following to `package.json`
```
{
  "devDependencies": {
    "autoprefixer": "^6.3.1"
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

1. Create an empty `custom.semantic.json` inside a `/client/` folder somewhere in your project.  
Example: `/client/lib/semantic-ui/custom.semantic.json`.
2. Start meteor
3. Edit the file `custom.semantic.json` to select only the definitions and themes you want  
Example: set `themes` `basic` to `true`, leave `default` as `true`
4. Save the file and it will generate Semantic UI
5. Check the [generated-structure table](https://github.com/Semantic-Org/Semantic-UI-Meteor#generated-structure) below for editable files and folders.

> IMPORTANT: If you are happy with the default values you will NEED to remove `.custom.semantic.json` to generate Semantic UI. (see Generating Trigger)

> NOTE: Another way to use ONLY the default values is to use this package: https://atmospherejs.com/semantic/ui-css
    meteor add semantic:ui-css

Getting Started & Initializing Modules
-----
Semantic UI requries some components to be initialized or they will not work (Dropdowns, Menus, Accordions, etc)
Refer to the Usage sections in a module on how to initialize each element eg: [Semantic UI Accordion Usage](http://semantic-ui.com/modules/accordion.html#/usage)

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
initAccordions(templ) {
  template.$('.ui.accordion').accordion();
}
initDropdowns(template) {
  template.$('.ui.dropdown').dropdown({on: 'hover'});
}

Template.myDropdown.rendered = function() {
  initDropdowns(this);
}
```

custom.semantic.json
--------------------

`custom.semantic.json` is the most important file. If it is empty, `semantic:ui` will generate the content with all the definitions and themes. By default, it sets to true all definitions and the theme "default".

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

Generated Structure
-------------------

This package generates the following structure based on `custom.semantic.json`

```
+- definitions/
+- site/
+- themes/
|- .custom.semantic.json
|- custom.semantic.json
|- semantic.less
|- theme.config.import.less
|- theme.import.less
```

The following table explains the generated files/folders and if they are editable without losing any changes when generating.

File/Folder | Description | Generated | Editable
--- | --- | --- | ---
definitions/ | contains the `less` and `javascript` definitions for each component | always | no
site/ | contains your current site's theme | only if it does not exist | yes
themes/ | contains *pre-packaged themes* including Semantic's default theme | always | no
.custom.semantic.json | copy of custom.semantic.json (see Generating Trigger) | always | no
custom.semantic.json | contains definitions and themes to be included or not | only if the file is empty | yes
semantic.less | imports the definitions | always | no
theme.config.import.less | defines which theme to use per components | only if the file does not exist | yes
theme.import.less | imports the right themes | always | no

### site/

This folder contains your current site's theme. It is generated only when it does not exist. Therefore if you change `custom.semantic.json` to turn definitions/themes on/off, then it will not affect **site/**. You will either need to add/remove files in **site/** or remove the **site/** folder so it can be regenerated again.

Generating Trigger
------------------

Every time Meteor starts (or refreshes) it calls the package `semantic:ui` to generate Semantic UI.

The package has a simple mechanism based on the difference of `custom.semantic.json` and `.custom.semantic.json` to avoid generating all the Semantic UI files and folders each time Meteor starts (or refreshes).

Therefore if the file `.custom.semantic.json` does not exist or it is different from `custom.semantic.json` then it will generate Semantic UI.

Dependencies
------------
(Meteor <1.3) **[flemay:less-autoprefixer](https://atmospherejs.com/flemay/less-autoprefixer)**: Semantic UI needs autoprefixer to be compiled.

> **Note 1:** You can choose any less-autoprefixer package.

> **Note 2:** Since the flemay:less-autoprefixer package compiles `LESS` files you don't need the `less` package.

(Meteor 1.3+) **[juliancwirko:postcss](https://atmospherejs.com/juliancwirko/postcss)**: Semantic UI needs autoprefixer for adding vendor prefixes.

(Meteor 1.3+) **[less](https://atmospherejs.com/meteor/less)**: is needed to compile the `LESS` files to `CSS` when building.

**[semantic:ui-data](https://atmospherejs.com/semantic/ui-data)** is being used to get Semantic UI files.

Contributing
-------------

Contributors are very welcome.

License
-------

MIT license

Credits and Acknowledgements
----------------------------

**[nemo64:bootstrap](https://atmospherejs.com/nemo64/bootstrap)**: semantic:ui has been inspired by nemo64:bootstrap. It uses a very similar approach.
