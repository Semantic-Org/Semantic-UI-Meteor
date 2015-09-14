var _ = Npm.require('lodash');

var sitesData = {};

sitesData.data = [
  
    {"name":"breadcrumb","overrides":["lib/semantic-ui/src/site/collections/breadcrumb.overrides.import.less"],"variables":["lib/semantic-ui/src/site/collections/breadcrumb.variables.import.less"]},
  
    {"name":"form","overrides":["lib/semantic-ui/src/site/collections/form.overrides.import.less"],"variables":["lib/semantic-ui/src/site/collections/form.variables.import.less"]},
  
    {"name":"grid","overrides":["lib/semantic-ui/src/site/collections/grid.overrides.import.less"],"variables":["lib/semantic-ui/src/site/collections/grid.variables.import.less"]},
  
    {"name":"menu","overrides":["lib/semantic-ui/src/site/collections/menu.overrides.import.less"],"variables":["lib/semantic-ui/src/site/collections/menu.variables.import.less"]},
  
    {"name":"message","overrides":["lib/semantic-ui/src/site/collections/message.overrides.import.less"],"variables":["lib/semantic-ui/src/site/collections/message.variables.import.less"]},
  
    {"name":"table","overrides":["lib/semantic-ui/src/site/collections/table.overrides.import.less"],"variables":["lib/semantic-ui/src/site/collections/table.variables.import.less"]},
  
    {"name":"reset","overrides":["lib/semantic-ui/src/site/globals/reset.overrides.import.less"],"variables":["lib/semantic-ui/src/site/globals/reset.variables.import.less"]},
  
    {"name":"site","overrides":["lib/semantic-ui/src/site/globals/site.overrides.import.less"],"variables":["lib/semantic-ui/src/site/globals/site.variables.import.less"]},
  
    {"name":"button","overrides":["lib/semantic-ui/src/site/elements/button.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/button.variables.import.less"]},
  
    {"name":"container","overrides":["lib/semantic-ui/src/site/elements/container.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/container.variables.import.less"]},
  
    {"name":"divider","overrides":["lib/semantic-ui/src/site/elements/divider.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/divider.variables.import.less"]},
  
    {"name":"flag","overrides":["lib/semantic-ui/src/site/elements/flag.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/flag.variables.import.less"]},
  
    {"name":"header","overrides":["lib/semantic-ui/src/site/elements/header.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/header.variables.import.less"]},
  
    {"name":"icon","overrides":["lib/semantic-ui/src/site/elements/icon.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/icon.variables.import.less"]},
  
    {"name":"image","overrides":["lib/semantic-ui/src/site/elements/image.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/image.variables.import.less"]},
  
    {"name":"input","overrides":["lib/semantic-ui/src/site/elements/input.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/input.variables.import.less"]},
  
    {"name":"label","overrides":["lib/semantic-ui/src/site/elements/label.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/label.variables.import.less"]},
  
    {"name":"list","overrides":["lib/semantic-ui/src/site/elements/list.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/list.variables.import.less"]},
  
    {"name":"loader","overrides":["lib/semantic-ui/src/site/elements/loader.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/loader.variables.import.less"]},
  
    {"name":"rail","overrides":["lib/semantic-ui/src/site/elements/rail.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/rail.variables.import.less"]},
  
    {"name":"reveal","overrides":["lib/semantic-ui/src/site/elements/reveal.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/reveal.variables.import.less"]},
  
    {"name":"segment","overrides":["lib/semantic-ui/src/site/elements/segment.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/segment.variables.import.less"]},
  
    {"name":"step","overrides":["lib/semantic-ui/src/site/elements/step.overrides.import.less"],"variables":["lib/semantic-ui/src/site/elements/step.variables.import.less"]},
  
    {"name":"accordion","overrides":["lib/semantic-ui/src/site/modules/accordion.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/accordion.variables.import.less"]},
  
    {"name":"chatroom","overrides":["lib/semantic-ui/src/site/modules/chatroom.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/chatroom.variables.import.less"]},
  
    {"name":"checkbox","overrides":["lib/semantic-ui/src/site/modules/checkbox.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/checkbox.variables.import.less"]},
  
    {"name":"dimmer","overrides":["lib/semantic-ui/src/site/modules/dimmer.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/dimmer.variables.import.less"]},
  
    {"name":"dropdown","overrides":["lib/semantic-ui/src/site/modules/dropdown.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/dropdown.variables.import.less"]},
  
    {"name":"embed","overrides":["lib/semantic-ui/src/site/modules/embed.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/embed.variables.import.less"]},
  
    {"name":"modal","overrides":["lib/semantic-ui/src/site/modules/modal.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/modal.variables.import.less"]},
  
    {"name":"nag","overrides":["lib/semantic-ui/src/site/modules/nag.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/nag.variables.import.less"]},
  
    {"name":"popup","overrides":["lib/semantic-ui/src/site/modules/popup.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/popup.variables.import.less"]},
  
    {"name":"progress","overrides":["lib/semantic-ui/src/site/modules/progress.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/progress.variables.import.less"]},
  
    {"name":"rating","overrides":["lib/semantic-ui/src/site/modules/rating.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/rating.variables.import.less"]},
  
    {"name":"search","overrides":["lib/semantic-ui/src/site/modules/search.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/search.variables.import.less"]},
  
    {"name":"shape","overrides":["lib/semantic-ui/src/site/modules/shape.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/shape.variables.import.less"]},
  
    {"name":"sidebar","overrides":["lib/semantic-ui/src/site/modules/sidebar.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/sidebar.variables.import.less"]},
  
    {"name":"sticky","overrides":["lib/semantic-ui/src/site/modules/sticky.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/sticky.variables.import.less"]},
  
    {"name":"tab","overrides":["lib/semantic-ui/src/site/modules/tab.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/tab.variables.import.less"]},
  
    {"name":"transition","overrides":["lib/semantic-ui/src/site/modules/transition.overrides.import.less"],"variables":["lib/semantic-ui/src/site/modules/transition.variables.import.less"]},
  
    {"name":"ad","overrides":["lib/semantic-ui/src/site/views/ad.overrides.import.less"],"variables":["lib/semantic-ui/src/site/views/ad.variables.import.less"]},
  
    {"name":"card","overrides":["lib/semantic-ui/src/site/views/card.overrides.import.less"],"variables":["lib/semantic-ui/src/site/views/card.variables.import.less"]},
  
    {"name":"comment","overrides":["lib/semantic-ui/src/site/views/comment.overrides.import.less"],"variables":["lib/semantic-ui/src/site/views/comment.variables.import.less"]},
  
    {"name":"feed","overrides":["lib/semantic-ui/src/site/views/feed.overrides.import.less"],"variables":["lib/semantic-ui/src/site/views/feed.variables.import.less"]},
  
    {"name":"item","overrides":["lib/semantic-ui/src/site/views/item.overrides.import.less"],"variables":["lib/semantic-ui/src/site/views/item.variables.import.less"]},
  
    {"name":"statistic","overrides":["lib/semantic-ui/src/site/views/statistic.overrides.import.less"],"variables":["lib/semantic-ui/src/site/views/statistic.variables.import.less"]},
  
];

sitesData.get = function(name) {
  _.find(this.data, function(s) {
    return s.name === name;
  });
};

sitesData.overridesFilePaths = function() {
  return filePaths(this.data, 'overrides');
};

sitesData.variablesFilePaths = function() {
  return filePaths(this.data, 'variables');
};

var filePaths = function(themes, property) {
  var themeWithProperty = _.filter(themes, function(theme) {
    return theme[property];
  });
  return _.reduce(themeWithProperty, function(result, theme) {
    return result.concat(theme[property]);
  }, []);
};

semanticUiPackage.sitesData = sitesData;
