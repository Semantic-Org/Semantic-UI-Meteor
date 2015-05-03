var _ = Npm.require('lodash');

var definitionsData = {};

definitionsData.data = [
  
    {"name":"api","js":"lib/semantic-ui/src/definitions/behaviors/api.js"},
  
    {"name":"colorize","js":"lib/semantic-ui/src/definitions/behaviors/colorize.js"},
  
    {"name":"form","js":"lib/semantic-ui/src/definitions/behaviors/form.js","less":"lib/semantic-ui/src/definitions/collections/form.less"},
  
    {"name":"state","js":"lib/semantic-ui/src/definitions/behaviors/state.js"},
  
    {"name":"visibility","js":"lib/semantic-ui/src/definitions/behaviors/visibility.js"},
  
    {"name":"visit","js":"lib/semantic-ui/src/definitions/behaviors/visit.js"},
  
    {"name":"reset","less":"lib/semantic-ui/src/definitions/globals/reset.less"},
  
    {"name":"site","js":"lib/semantic-ui/src/definitions/globals/site.js","less":"lib/semantic-ui/src/definitions/globals/site.less"},
  
    {"name":"breadcrumb","less":"lib/semantic-ui/src/definitions/collections/breadcrumb.less"},
  
    {"name":"grid","less":"lib/semantic-ui/src/definitions/collections/grid.less"},
  
    {"name":"menu","less":"lib/semantic-ui/src/definitions/collections/menu.less"},
  
    {"name":"message","less":"lib/semantic-ui/src/definitions/collections/message.less"},
  
    {"name":"table","less":"lib/semantic-ui/src/definitions/collections/table.less"},
  
    {"name":"accordion","js":"lib/semantic-ui/src/definitions/modules/accordion.js","less":"lib/semantic-ui/src/definitions/modules/accordion.less"},
  
    {"name":"checkbox","js":"lib/semantic-ui/src/definitions/modules/checkbox.js","less":"lib/semantic-ui/src/definitions/modules/checkbox.less"},
  
    {"name":"dimmer","js":"lib/semantic-ui/src/definitions/modules/dimmer.js","less":"lib/semantic-ui/src/definitions/modules/dimmer.less"},
  
    {"name":"dropdown","js":"lib/semantic-ui/src/definitions/modules/dropdown.js","less":"lib/semantic-ui/src/definitions/modules/dropdown.less"},
  
    {"name":"modal","js":"lib/semantic-ui/src/definitions/modules/modal.js","less":"lib/semantic-ui/src/definitions/modules/modal.less"},
  
    {"name":"nag","js":"lib/semantic-ui/src/definitions/modules/nag.js","less":"lib/semantic-ui/src/definitions/modules/nag.less"},
  
    {"name":"popup","js":"lib/semantic-ui/src/definitions/modules/popup.js","less":"lib/semantic-ui/src/definitions/modules/popup.less"},
  
    {"name":"progress","js":"lib/semantic-ui/src/definitions/modules/progress.js","less":"lib/semantic-ui/src/definitions/modules/progress.less"},
  
    {"name":"rating","js":"lib/semantic-ui/src/definitions/modules/rating.js","less":"lib/semantic-ui/src/definitions/modules/rating.less"},
  
    {"name":"search","js":"lib/semantic-ui/src/definitions/modules/search.js","less":"lib/semantic-ui/src/definitions/modules/search.less"},
  
    {"name":"shape","js":"lib/semantic-ui/src/definitions/modules/shape.js","less":"lib/semantic-ui/src/definitions/modules/shape.less"},
  
    {"name":"sidebar","js":"lib/semantic-ui/src/definitions/modules/sidebar.js","less":"lib/semantic-ui/src/definitions/modules/sidebar.less"},
  
    {"name":"sticky","js":"lib/semantic-ui/src/definitions/modules/sticky.js","less":"lib/semantic-ui/src/definitions/modules/sticky.less"},
  
    {"name":"tab","js":"lib/semantic-ui/src/definitions/modules/tab.js","less":"lib/semantic-ui/src/definitions/modules/tab.less"},
  
    {"name":"transition","js":"lib/semantic-ui/src/definitions/modules/transition.js","less":"lib/semantic-ui/src/definitions/modules/transition.less"},
  
    {"name":"video","js":"lib/semantic-ui/src/definitions/modules/video.js","less":"lib/semantic-ui/src/definitions/modules/video.less"},
  
    {"name":"ad","less":"lib/semantic-ui/src/definitions/views/ad.less"},
  
    {"name":"card","less":"lib/semantic-ui/src/definitions/views/card.less"},
  
    {"name":"comment","less":"lib/semantic-ui/src/definitions/views/comment.less"},
  
    {"name":"feed","less":"lib/semantic-ui/src/definitions/views/feed.less"},
  
    {"name":"item","less":"lib/semantic-ui/src/definitions/views/item.less"},
  
    {"name":"statistic","less":"lib/semantic-ui/src/definitions/views/statistic.less"},
  
    {"name":"button","less":"lib/semantic-ui/src/definitions/elements/button.less"},
  
    {"name":"divider","less":"lib/semantic-ui/src/definitions/elements/divider.less"},
  
    {"name":"flag","less":"lib/semantic-ui/src/definitions/elements/flag.less"},
  
    {"name":"header","less":"lib/semantic-ui/src/definitions/elements/header.less"},
  
    {"name":"icon","less":"lib/semantic-ui/src/definitions/elements/icon.less"},
  
    {"name":"image","less":"lib/semantic-ui/src/definitions/elements/image.less"},
  
    {"name":"input","less":"lib/semantic-ui/src/definitions/elements/input.less"},
  
    {"name":"label","less":"lib/semantic-ui/src/definitions/elements/label.less"},
  
    {"name":"list","less":"lib/semantic-ui/src/definitions/elements/list.less"},
  
    {"name":"loader","less":"lib/semantic-ui/src/definitions/elements/loader.less"},
  
    {"name":"rail","less":"lib/semantic-ui/src/definitions/elements/rail.less"},
  
    {"name":"reveal","less":"lib/semantic-ui/src/definitions/elements/reveal.less"},
  
    {"name":"segment","less":"lib/semantic-ui/src/definitions/elements/segment.less"},
  
    {"name":"step","less":"lib/semantic-ui/src/definitions/elements/step.less"},
  
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
