var _ = Npm.require('lodash');

var themesData = {};

themesData.data = [
  
    {"name":"amazon","overrides":["lib/semantic-ui/src/themes/amazon/elements/button.overrides"],"variables":["lib/semantic-ui/src/themes/amazon/elements/button.variables"],"assets":[]},
  
    {"name":"basic","overrides":["lib/semantic-ui/src/themes/basic/collections/table.overrides","lib/semantic-ui/src/themes/basic/elements/button.overrides","lib/semantic-ui/src/themes/basic/elements/icon.overrides","lib/semantic-ui/src/themes/basic/elements/step.overrides","lib/semantic-ui/src/themes/basic/globals/reset.overrides","lib/semantic-ui/src/themes/basic/modules/progress.overrides","lib/semantic-ui/src/themes/basic/views/card.overrides"],"variables":["lib/semantic-ui/src/themes/basic/collections/table.variables","lib/semantic-ui/src/themes/basic/elements/button.variables","lib/semantic-ui/src/themes/basic/elements/icon.variables","lib/semantic-ui/src/themes/basic/elements/step.variables","lib/semantic-ui/src/themes/basic/globals/reset.variables","lib/semantic-ui/src/themes/basic/modules/progress.variables","lib/semantic-ui/src/themes/basic/views/card.variables"],"assets":["lib/semantic-ui/src/themes/basic/assets/fonts/icons.eot","lib/semantic-ui/src/themes/basic/assets/fonts/icons.svg","lib/semantic-ui/src/themes/basic/assets/fonts/icons.ttf","lib/semantic-ui/src/themes/basic/assets/fonts/icons.woff"]},
  
    {"name":"bookish","overrides":["lib/semantic-ui/src/themes/bookish/elements/header.overrides"],"variables":["lib/semantic-ui/src/themes/bookish/elements/header.variables"],"assets":[]},
  
    {"name":"chubby","overrides":["lib/semantic-ui/src/themes/chubby/collections/form.overrides","lib/semantic-ui/src/themes/chubby/collections/menu.overrides","lib/semantic-ui/src/themes/chubby/elements/button.overrides","lib/semantic-ui/src/themes/chubby/elements/header.overrides","lib/semantic-ui/src/themes/chubby/modules/accordion.overrides","lib/semantic-ui/src/themes/chubby/views/comment.overrides"],"variables":["lib/semantic-ui/src/themes/chubby/collections/form.variables","lib/semantic-ui/src/themes/chubby/collections/menu.variables","lib/semantic-ui/src/themes/chubby/elements/button.variables","lib/semantic-ui/src/themes/chubby/elements/header.variables","lib/semantic-ui/src/themes/chubby/modules/accordion.variables","lib/semantic-ui/src/themes/chubby/views/comment.variables"],"assets":[]},
  
    {"name":"bootstrap3","overrides":["lib/semantic-ui/src/themes/bootstrap3/elements/button.overrides"],"variables":["lib/semantic-ui/src/themes/bootstrap3/elements/button.variables"],"assets":[]},
  
    {"name":"classic","overrides":["lib/semantic-ui/src/themes/classic/collections/table.overrides","lib/semantic-ui/src/themes/classic/elements/button.overrides","lib/semantic-ui/src/themes/classic/elements/header.overrides","lib/semantic-ui/src/themes/classic/modules/progress.overrides","lib/semantic-ui/src/themes/classic/views/card.overrides"],"variables":["lib/semantic-ui/src/themes/classic/collections/table.variables","lib/semantic-ui/src/themes/classic/elements/button.variables","lib/semantic-ui/src/themes/classic/elements/header.variables","lib/semantic-ui/src/themes/classic/modules/progress.variables","lib/semantic-ui/src/themes/classic/views/card.variables"],"assets":[]},
  
    {"name":"colored","overrides":["lib/semantic-ui/src/themes/colored/modules/checkbox.overrides"],"variables":["lib/semantic-ui/src/themes/colored/modules/checkbox.variables"],"assets":[]},
  
    {"name":"default","overrides":["lib/semantic-ui/src/themes/default/collections/breadcrumb.overrides","lib/semantic-ui/src/themes/default/collections/form.overrides","lib/semantic-ui/src/themes/default/collections/grid.overrides","lib/semantic-ui/src/themes/default/collections/menu.overrides","lib/semantic-ui/src/themes/default/collections/message.overrides","lib/semantic-ui/src/themes/default/collections/table.overrides","lib/semantic-ui/src/themes/default/globals/reset.overrides","lib/semantic-ui/src/themes/default/globals/site.overrides","lib/semantic-ui/src/themes/default/elements/button.overrides","lib/semantic-ui/src/themes/default/elements/container.overrides","lib/semantic-ui/src/themes/default/elements/divider.overrides","lib/semantic-ui/src/themes/default/elements/flag.overrides","lib/semantic-ui/src/themes/default/elements/header.overrides","lib/semantic-ui/src/themes/default/elements/icon.overrides","lib/semantic-ui/src/themes/default/elements/image.overrides","lib/semantic-ui/src/themes/default/elements/input.overrides","lib/semantic-ui/src/themes/default/elements/label.overrides","lib/semantic-ui/src/themes/default/elements/list.overrides","lib/semantic-ui/src/themes/default/elements/loader.overrides","lib/semantic-ui/src/themes/default/elements/rail.overrides","lib/semantic-ui/src/themes/default/elements/reveal.overrides","lib/semantic-ui/src/themes/default/elements/segment.overrides","lib/semantic-ui/src/themes/default/elements/step.overrides","lib/semantic-ui/src/themes/default/views/ad.overrides","lib/semantic-ui/src/themes/default/views/card.overrides","lib/semantic-ui/src/themes/default/views/comment.overrides","lib/semantic-ui/src/themes/default/views/feed.overrides","lib/semantic-ui/src/themes/default/views/item.overrides","lib/semantic-ui/src/themes/default/views/statistic.overrides","lib/semantic-ui/src/themes/default/modules/accordion.overrides","lib/semantic-ui/src/themes/default/modules/chatroom.overrides","lib/semantic-ui/src/themes/default/modules/checkbox.overrides","lib/semantic-ui/src/themes/default/modules/dimmer.overrides","lib/semantic-ui/src/themes/default/modules/dropdown.overrides","lib/semantic-ui/src/themes/default/modules/embed.overrides","lib/semantic-ui/src/themes/default/modules/modal.overrides","lib/semantic-ui/src/themes/default/modules/nag.overrides","lib/semantic-ui/src/themes/default/modules/popup.overrides","lib/semantic-ui/src/themes/default/modules/progress.overrides","lib/semantic-ui/src/themes/default/modules/rating.overrides","lib/semantic-ui/src/themes/default/modules/search.overrides","lib/semantic-ui/src/themes/default/modules/shape.overrides","lib/semantic-ui/src/themes/default/modules/sidebar.overrides","lib/semantic-ui/src/themes/default/modules/sticky.overrides","lib/semantic-ui/src/themes/default/modules/tab.overrides","lib/semantic-ui/src/themes/default/modules/transition.overrides"],"variables":["lib/semantic-ui/src/themes/default/collections/breadcrumb.variables","lib/semantic-ui/src/themes/default/collections/form.variables","lib/semantic-ui/src/themes/default/collections/grid.variables","lib/semantic-ui/src/themes/default/collections/menu.variables","lib/semantic-ui/src/themes/default/collections/message.variables","lib/semantic-ui/src/themes/default/collections/table.variables","lib/semantic-ui/src/themes/default/globals/reset.variables","lib/semantic-ui/src/themes/default/globals/site.variables","lib/semantic-ui/src/themes/default/elements/button.variables","lib/semantic-ui/src/themes/default/elements/container.variables","lib/semantic-ui/src/themes/default/elements/divider.variables","lib/semantic-ui/src/themes/default/elements/flag.variables","lib/semantic-ui/src/themes/default/elements/header.variables","lib/semantic-ui/src/themes/default/elements/icon.variables","lib/semantic-ui/src/themes/default/elements/image.variables","lib/semantic-ui/src/themes/default/elements/input.variables","lib/semantic-ui/src/themes/default/elements/label.variables","lib/semantic-ui/src/themes/default/elements/list.variables","lib/semantic-ui/src/themes/default/elements/loader.variables","lib/semantic-ui/src/themes/default/elements/rail.variables","lib/semantic-ui/src/themes/default/elements/reveal.variables","lib/semantic-ui/src/themes/default/elements/segment.variables","lib/semantic-ui/src/themes/default/elements/step.variables","lib/semantic-ui/src/themes/default/views/ad.variables","lib/semantic-ui/src/themes/default/views/card.variables","lib/semantic-ui/src/themes/default/views/comment.variables","lib/semantic-ui/src/themes/default/views/feed.variables","lib/semantic-ui/src/themes/default/views/item.variables","lib/semantic-ui/src/themes/default/views/statistic.variables","lib/semantic-ui/src/themes/default/modules/accordion.variables","lib/semantic-ui/src/themes/default/modules/chatroom.variables","lib/semantic-ui/src/themes/default/modules/checkbox.variables","lib/semantic-ui/src/themes/default/modules/dimmer.variables","lib/semantic-ui/src/themes/default/modules/dropdown.variables","lib/semantic-ui/src/themes/default/modules/embed.variables","lib/semantic-ui/src/themes/default/modules/modal.variables","lib/semantic-ui/src/themes/default/modules/nag.variables","lib/semantic-ui/src/themes/default/modules/popup.variables","lib/semantic-ui/src/themes/default/modules/progress.variables","lib/semantic-ui/src/themes/default/modules/rating.variables","lib/semantic-ui/src/themes/default/modules/search.variables","lib/semantic-ui/src/themes/default/modules/shape.variables","lib/semantic-ui/src/themes/default/modules/sidebar.variables","lib/semantic-ui/src/themes/default/modules/sticky.variables","lib/semantic-ui/src/themes/default/modules/tab.variables","lib/semantic-ui/src/themes/default/modules/transition.variables"],"assets":["lib/semantic-ui/src/themes/default/assets/images/flags.png","lib/semantic-ui/src/themes/default/assets/fonts/icons.eot","lib/semantic-ui/src/themes/default/assets/fonts/icons.svg","lib/semantic-ui/src/themes/default/assets/fonts/icons.ttf","lib/semantic-ui/src/themes/default/assets/fonts/icons.woff","lib/semantic-ui/src/themes/default/assets/fonts/icons.woff2"]},
  
    {"name":"duo","overrides":["lib/semantic-ui/src/themes/duo/elements/loader.overrides"],"variables":["lib/semantic-ui/src/themes/duo/elements/loader.variables"],"assets":[]},
  
    {"name":"fixed","overrides":["lib/semantic-ui/src/themes/fixed-width/collections/grid.overrides","lib/semantic-ui/src/themes/fixed-width/modules/modal.overrides"],"variables":["lib/semantic-ui/src/themes/fixed-width/collections/grid.variables","lib/semantic-ui/src/themes/fixed-width/modules/modal.variables"],"assets":[]},
  
    {"name":"flat","overrides":["lib/semantic-ui/src/themes/flat/collections/form.overrides","lib/semantic-ui/src/themes/flat/globals/site.overrides"],"variables":["lib/semantic-ui/src/themes/flat/collections/form.variables","lib/semantic-ui/src/themes/flat/globals/site.variables"],"assets":[]},
  
    {"name":"github","overrides":["lib/semantic-ui/src/themes/github/collections/form.overrides","lib/semantic-ui/src/themes/github/collections/menu.overrides","lib/semantic-ui/src/themes/github/collections/message.overrides","lib/semantic-ui/src/themes/github/elements/button.overrides","lib/semantic-ui/src/themes/github/elements/segment.overrides","lib/semantic-ui/src/themes/github/elements/step.overrides"],"variables":["lib/semantic-ui/src/themes/github/collections/form.variables","lib/semantic-ui/src/themes/github/collections/menu.variables","lib/semantic-ui/src/themes/github/collections/message.variables","lib/semantic-ui/src/themes/github/elements/button.variables","lib/semantic-ui/src/themes/github/elements/segment.variables","lib/semantic-ui/src/themes/github/elements/step.variables"],"assets":[]},
  
    {"name":"instagram","overrides":["lib/semantic-ui/src/themes/instagram/views/card.overrides"],"variables":["lib/semantic-ui/src/themes/instagram/views/card.variables"],"assets":[]},
  
    {"name":"gmail","overrides":["lib/semantic-ui/src/themes/gmail/collections/message.overrides"],"variables":["lib/semantic-ui/src/themes/gmail/collections/message.variables"],"assets":[]},
  
    {"name":"material","overrides":["lib/semantic-ui/src/themes/material/collections/menu.overrides","lib/semantic-ui/src/themes/material/elements/button.overrides","lib/semantic-ui/src/themes/material/elements/header.overrides","lib/semantic-ui/src/themes/material/globals/site.overrides","lib/semantic-ui/src/themes/material/modules/dropdown.overrides","lib/semantic-ui/src/themes/material/modules/modal.overrides"],"variables":["lib/semantic-ui/src/themes/material/collections/menu.variables","lib/semantic-ui/src/themes/material/elements/button.variables","lib/semantic-ui/src/themes/material/elements/header.variables","lib/semantic-ui/src/themes/material/globals/site.variables","lib/semantic-ui/src/themes/material/modules/dropdown.variables","lib/semantic-ui/src/themes/material/modules/modal.variables"],"assets":[]},
  
    {"name":"pulsar","overrides":["lib/semantic-ui/src/themes/pulsar/elements/loader.overrides"],"variables":["lib/semantic-ui/src/themes/pulsar/elements/loader.variables"],"assets":[]},
  
    {"name":"raised","overrides":["lib/semantic-ui/src/themes/raised/elements/button.overrides"],"variables":["lib/semantic-ui/src/themes/raised/elements/button.variables"],"assets":[]},
  
    {"name":"resetcss","overrides":["lib/semantic-ui/src/themes/resetcss/globals/reset.overrides"],"variables":["lib/semantic-ui/src/themes/resetcss/globals/reset.variables"],"assets":[]},
  
    {"name":"round","overrides":["lib/semantic-ui/src/themes/round/elements/button.overrides"],"variables":["lib/semantic-ui/src/themes/round/elements/button.variables"],"assets":[]},
  
    {"name":"rtl","overrides":["lib/semantic-ui/src/themes/rtl/globals/site.overrides"],"variables":["lib/semantic-ui/src/themes/rtl/globals/site.variables"],"assets":[]},
  
    {"name":"striped","overrides":["lib/semantic-ui/src/themes/striped/modules/progress.overrides"],"variables":["lib/semantic-ui/src/themes/striped/modules/progress.variables"],"assets":[]},
  
    {"name":"timeline","overrides":["lib/semantic-ui/src/themes/timeline/views/feed.overrides"],"variables":["lib/semantic-ui/src/themes/timeline/views/feed.variables"],"assets":[]},
  
    {"name":"twitter","overrides":["lib/semantic-ui/src/themes/twitter/elements/button.overrides"],"variables":["lib/semantic-ui/src/themes/twitter/elements/button.variables"],"assets":[]},
  
];

themesData.exists = function(name) {
  var sameName = function(theme) {
    return theme.name == name;
  };
  return _.isUndefined(_.find(this.data, sameName)) ? false : true;
};

themesData.overridesFilePaths = function() {
  return filePaths(this.data, 'overrides');
};

themesData.variablesFilePaths = function() {
  return filePaths(this.data, 'variables');
};

themesData.assetsFilePaths = function() {
  return filePaths(this.data, 'assets');
};

var filePaths = function(themes, property) {
  var themeWithProperty = _.filter(themes, function(theme) {
    return theme[property];
  });
  return _.reduce(themeWithProperty, function(result, theme) {
    return result.concat(theme[property]);
  }, []);
};

themesData.themeConfigFile = 'lib/semantic-ui/src/theme.config.import.less';
themesData.themeLessFile = 'lib/semantic-ui/src/theme.import.less';

semanticUiPackage.themesData = themesData;
