(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.DIV({
    "class": "container"
  }, "\n	", HTML.DIV({
    "class": "jumbotron"
  }, "\n		", HTML.Raw("<h1>POINTS</h1>"), "\n		", Spacebars.include(view.lookupTemplate("pointBox")), "\n	    ", HTML.Raw("<h3>Tasks</h3>"), "\n	    ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n	    ", Spacebars.include(view.lookupTemplate("svgs")), "\n	    ", HTML.Raw("<br>"), HTML.Raw("<br>"), "\n	    ", Spacebars.include(view.lookupTemplate("allTasks")), "\n  "), "\n  "), HTML.Raw("\n  \n  <h1>Wellesley Cares</h1>\n  "), HTML.DIV({
    "class": "row"
  }, "\n    ", HTML.Raw('<div class="col-xs-12 col-sm-6 col-md-7">\n      <img class="flower" src="flower.png" alt="flower">\n\n    </div>'), "\n    ", HTML.DIV({
    "class": "col-xs-6 col-md-5 taskmenu"
  }, " \n      ", HTML.Raw('<img class="clipboard" src="clipboard_transparent.png" alt="clipboard">'), " \n      ", Spacebars.include(view.lookupTemplate("todayTasks")), "\n    "), "\n  ") ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("pointBox");
Template["pointBox"] = new Template("Template.pointBox", (function() {
  var view = this;
  return HTML.H1(Blaze.View("lookup:userPoints", function() {
    return Spacebars.mustache(view.lookup("userPoints"));
  }));
}));

Template.__checkName("todayTasks");
Template["todayTasks"] = new Template("Template.todayTasks", (function() {
  var view = this;
  return HTML.DIV({
    "class": "tasks"
  }, HTML.Raw("\n    <h2>Bonus Tasks</h2>\n    \n    "), HTML.UL("\n      ", HTML.LI({
    id: "social"
  }, " \n        ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("socialTask"));
  }, function() {
    return [ "\n        ", Spacebars.include(view.lookupTemplate("bonus")), "\n        " ];
  }), "\n      "), "\n      ", HTML.LI({
    id: "study"
  }, " \n        ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("studyTask"));
  }, function() {
    return [ "\n          ", Spacebars.include(view.lookupTemplate("bonus")), "\n        " ];
  }), "\n      "), "\n      ", HTML.LI({
    id: "sleep"
  }, " \n        ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("sleepTask"));
  }, function() {
    return [ "\n          ", Spacebars.include(view.lookupTemplate("bonus")), "\n        " ];
  }), "\n      "), "\n      ", HTML.LI({
    id: "health"
  }, " \n        ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("healthTask"));
  }, function() {
    return [ "\n         ", Spacebars.include(view.lookupTemplate("bonus")), "\n        " ];
  }), "\n      "), "\n      ", HTML.LI({
    id: "play"
  }, " \n        ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("playTask"));
  }, function() {
    return [ "\n          ", Spacebars.include(view.lookupTemplate("bonus")), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");
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

Template.__checkName("bonus");
Template["bonus"] = new Template("Template.bonus", (function() {
  var view = this;
  return HTML.LI({
    "class": function() {
      return Blaze.If(function() {
        return Spacebars.call(view.lookup("checked"));
      }, function() {
        return "checked";
      });
    }
  }, HTML.Raw('\n    <button class="delete">&times;</button>\n\n    '), HTML.INPUT({
    type: "checkbox",
    checked: function() {
      return Spacebars.mustache(view.lookup("checked"));
    },
    "class": "toggle-checked"
  }), "\n\n    ", HTML.SPAN({
    "class": "text"
  }, Blaze.View("lookup:text", function() {
    return Spacebars.mustache(view.lookup("text"));
  })), "\n  ");
}));

})();
