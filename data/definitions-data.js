var _ = Npm.require('lodash');

var definitionsData = {};

definitionsData.data = [
  
    {"name":"reset","less":"lib/semantic-ui/src/definitions/globals/reset.import.less"},
  
    {"name":"site","less":"lib/semantic-ui/src/definitions/globals/site.import.less","js":"lib/semantic-ui/src/definitions/globals/site.js"},
  
    {"name":"api","js":"lib/semantic-ui/src/definitions/behaviors/api.js"},
  
    {"name":"colorize","js":"lib/semantic-ui/src/definitions/behaviors/colorize.js"},
  
    {"name":"form","js":"lib/semantic-ui/src/definitions/behaviors/form.js","less":"lib/semantic-ui/src/definitions/collections/form.import.less"},
  
    {"name":"state","js":"lib/semantic-ui/src/definitions/behaviors/state.js"},
  
    {"name":"visibility","js":"lib/semantic-ui/src/definitions/behaviors/visibility.js"},
  
    {"name":"visit","js":"lib/semantic-ui/src/definitions/behaviors/visit.js"},
  
    {"name":"breadcrumb","less":"lib/semantic-ui/src/definitions/collections/breadcrumb.import.less"},
  
    {"name":"grid","less":"lib/semantic-ui/src/definitions/collections/grid.import.less"},
  
    {"name":"menu","less":"lib/semantic-ui/src/definitions/collections/menu.import.less"},
  
    {"name":"message","less":"lib/semantic-ui/src/definitions/collections/message.import.less"},
  
    {"name":"table","less":"lib/semantic-ui/src/definitions/collections/table.import.less"},
  
    {"name":"button","less":"lib/semantic-ui/src/definitions/elements/button.import.less"},
  
    {"name":"container","less":"lib/semantic-ui/src/definitions/elements/container.import.less"},
  
    {"name":"divider","less":"lib/semantic-ui/src/definitions/elements/divider.import.less"},
  
    {"name":"flag","less":"lib/semantic-ui/src/definitions/elements/flag.import.less"},
  
    {"name":"header","less":"lib/semantic-ui/src/definitions/elements/header.import.less"},
  
    {"name":"icon","less":"lib/semantic-ui/src/definitions/elements/icon.import.less"},
  
    {"name":"image","less":"lib/semantic-ui/src/definitions/elements/image.import.less"},
  
    {"name":"input","less":"lib/semantic-ui/src/definitions/elements/input.import.less"},
  
    {"name":"label","less":"lib/semantic-ui/src/definitions/elements/label.import.less"},
  
    {"name":"list","less":"lib/semantic-ui/src/definitions/elements/list.import.less"},
  
    {"name":"loader","less":"lib/semantic-ui/src/definitions/elements/loader.import.less"},
  
    {"name":"rail","less":"lib/semantic-ui/src/definitions/elements/rail.import.less"},
  
    {"name":"reveal","less":"lib/semantic-ui/src/definitions/elements/reveal.import.less"},
  
    {"name":"segment","less":"lib/semantic-ui/src/definitions/elements/segment.import.less"},
  
    {"name":"step","less":"lib/semantic-ui/src/definitions/elements/step.import.less"},
  
    {"name":"accordion","less":"lib/semantic-ui/src/definitions/modules/accordion.import.less","js":"lib/semantic-ui/src/definitions/modules/accordion.js"},
  
    {"name":"checkbox","less":"lib/semantic-ui/src/definitions/modules/checkbox.import.less","js":"lib/semantic-ui/src/definitions/modules/checkbox.js"},
  
    {"name":"dimmer","less":"lib/semantic-ui/src/definitions/modules/dimmer.import.less","js":"lib/semantic-ui/src/definitions/modules/dimmer.js"},
  
    {"name":"dropdown","less":"lib/semantic-ui/src/definitions/modules/dropdown.import.less","js":"lib/semantic-ui/src/definitions/modules/dropdown.js"},
  
    {"name":"embed","less":"lib/semantic-ui/src/definitions/modules/embed.import.less","js":"lib/semantic-ui/src/definitions/modules/embed.js"},
  
    {"name":"modal","less":"lib/semantic-ui/src/definitions/modules/modal.import.less","js":"lib/semantic-ui/src/definitions/modules/modal.js"},
  
    {"name":"nag","less":"lib/semantic-ui/src/definitions/modules/nag.import.less","js":"lib/semantic-ui/src/definitions/modules/nag.js"},
  
    {"name":"popup","less":"lib/semantic-ui/src/definitions/modules/popup.import.less","js":"lib/semantic-ui/src/definitions/modules/popup.js"},
  
    {"name":"progress","less":"lib/semantic-ui/src/definitions/modules/progress.import.less","js":"lib/semantic-ui/src/definitions/modules/progress.js"},
  
    {"name":"rating","less":"lib/semantic-ui/src/definitions/modules/rating.import.less","js":"lib/semantic-ui/src/definitions/modules/rating.js"},
  
    {"name":"search","less":"lib/semantic-ui/src/definitions/modules/search.import.less","js":"lib/semantic-ui/src/definitions/modules/search.js"},
  
    {"name":"shape","less":"lib/semantic-ui/src/definitions/modules/shape.import.less","js":"lib/semantic-ui/src/definitions/modules/shape.js"},
  
    {"name":"sidebar","less":"lib/semantic-ui/src/definitions/modules/sidebar.import.less","js":"lib/semantic-ui/src/definitions/modules/sidebar.js"},
  
    {"name":"sticky","less":"lib/semantic-ui/src/definitions/modules/sticky.import.less","js":"lib/semantic-ui/src/definitions/modules/sticky.js"},
  
    {"name":"tab","less":"lib/semantic-ui/src/definitions/modules/tab.import.less","js":"lib/semantic-ui/src/definitions/modules/tab.js"},
  
    {"name":"transition","less":"lib/semantic-ui/src/definitions/modules/transition.import.less","js":"lib/semantic-ui/src/definitions/modules/transition.js"},
  
    {"name":"ad","less":"lib/semantic-ui/src/definitions/views/ad.import.less"},
  
    {"name":"card","less":"lib/semantic-ui/src/definitions/views/card.import.less"},
  
    {"name":"comment","less":"lib/semantic-ui/src/definitions/views/comment.import.less"},
  
    {"name":"feed","less":"lib/semantic-ui/src/definitions/views/feed.import.less"},
  
    {"name":"item","less":"lib/semantic-ui/src/definitions/views/item.import.less"},
  
    {"name":"statistic","less":"lib/semantic-ui/src/definitions/views/statistic.import.less"},
  
];

definitionsData.exists = function(name) {
  var sameName = function(definition) {
    return definition.name == name;
  };
  return _.isUndefined(_.find(this.data, sameName)) ? false : true;
};

definitionsData.lessFilePaths = function() {
  var definitionsWithLess = _.filter(this.data, function(d) {
    return d.less;
  });
  return _.map(definitionsWithLess, function(d) {
    return d.less;
  });
};

definitionsData.jsFilePaths = function() {
  var definitionsWithJs = _.filter(this.data, function(d) {
    return d.js;
  });
  return _.map(definitionsWithJs, function(d) {
    return d.js;
  });
};

definitionsData.semanticLessFile = 'lib/semantic-ui/src/semantic.less';

semanticUiPackage.definitionsData = definitionsData;
