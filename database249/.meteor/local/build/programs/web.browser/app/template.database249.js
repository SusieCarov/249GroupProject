(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, "\n	", HTML.DIV({
    "class": "jumbotron"
  }, "\n	    ", HTML.Raw("<h1>Tasks</h1>"), "\n	    ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n	    ", Spacebars.include(view.lookupTemplate("allTasks")), "\n    "), "\n");
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("svgs");
Template["svgs"] = new Template("Template.svgs", (function() {
  var view = this;
  return HTML.SVG({
    height: "100",
    width: "100"
  }, "\n	  ", HTML.CIRCLE({
    cx: "50",
    cy: "50",
    r: "40",
    stroke: "black",
    "stroke-width": "1",
    fill: "red"
  }), "\n	");
}));

Template.__checkName("allTasks");
Template["allTasks"] = new Template("Template.allTasks", (function() {
  var view = this;
  return [ "Number of Study tasks: ", Blaze.View("lookup:counterStudy", function() {
    return Spacebars.mustache(view.lookup("counterStudy"));
  }), HTML.Raw("\n	<br>\n	Number of Health tasks: "), Blaze.View("lookup:counterHealth", function() {
    return Spacebars.mustache(view.lookup("counterHealth"));
  }), HTML.Raw("\n	<br>\n	Number of Play tasks: "), Blaze.View("lookup:counterPlay", function() {
    return Spacebars.mustache(view.lookup("counterPlay"));
  }), HTML.Raw("\n	<br>\n	Number of Social tasks: "), Blaze.View("lookup:counterSocial", function() {
    return Spacebars.mustache(view.lookup("counterSocial"));
  }), HTML.Raw("\n	<br>\n	Number of Sleep tasks: "), Blaze.View("lookup:counterSleep", function() {
    return Spacebars.mustache(view.lookup("counterSleep"));
  }), "\n\n	", HTML.UL({
    "class": "list-group"
  }, "\n	    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("task"));
  }, function() {
    return [ "\n			", HTML.LI({
      "class": "task list-group-item"
    }, Blaze.View("lookup:text", function() {
      return Spacebars.mustache(view.lookup("text"));
    }), ": ", Blaze.View("lookup:category", function() {
      return Spacebars.mustache(view.lookup("category"));
    }), " ", HTML.SPAN({
      "class": "badge"
    }, Blaze.View("lookup:points", function() {
      return Spacebars.mustache(view.lookup("points"));
    }))), "\n	    " ];
  }), "\n	") ];
}));

})();
