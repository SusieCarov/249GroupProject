(function(){
Template.body.addContent((function() {
  var view = this;
  return Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n       ", HTML.DIV({
      "class": "loginB"
    }, "\n         ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n           \n        ", HTML.DIV({
      id: "profile"
    }, "  \n    \n    \n            ", HTML.A({
      href: "#",
      "data-reveal-id": "myModal"
    }, "My Points"), "\n            \n           ", HTML.DIV({
      id: "myModal",
      "class": "reveal-modal",
      "data-reveal": "",
      "aria-labelledby": "modalTitle",
      "aria-hidden": "true",
      role: "dialog"
    }, "\n              ", HTML.H2({
      id: "modalTitle"
    }, HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("profileURL"));
      },
      width: "30"
    }), " \n              Hi ", Blaze.View("lookup:firstName", function() {
      return Spacebars.mustache(view.lookup("firstName"));
    }), "!"), "\n               \n               ", HTML.P({
      "class": "lead"
    }, " See how you are doing! "), " \n               \n               ", HTML.P(" Play Points: ", Blaze.View("lookup:myPoints.playPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("myPoints"), "playPoints"));
    }), " "), "\n               ", HTML.P(" Social Points: ", Blaze.View("lookup:myPoints.socialPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("myPoints"), "socialPoints"));
    })), "\n               ", HTML.P(" Sleep Points: ", Blaze.View("lookup:myPoints.sleepPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("myPoints"), "sleepPoints"));
    })), "\n               ", HTML.P(" Study Points: ", Blaze.View("lookup:myPoints.studyPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("myPoints"), "studyPoints"));
    })), "\n               ", HTML.P(" Health Points: ", Blaze.View("lookup:myPoints.healthPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("myPoints"), "healthPoints"));
    }), " "), "\n               \n               ", HTML.A({
      "class": "close-reveal-modal",
      "aria-label": "Close"
    }, HTML.CharRef({
      html: "&#215;",
      str: "×"
    })), "\n            "), "\n            \n         "), "  \n        "), "\n    \n    ", Spacebars.include(view.lookupTemplate("points")), "\n         ", HTML.DIV({
      "class": "container"
    }, "\n	       ", HTML.DIV({
      "class": "jumbotron"
    }, "\n		      ", Spacebars.include(view.lookupTemplate("dialogBox")), "\n		          ", HTML.BR(), HTML.BR(), "\n	               ", HTML.BR(), HTML.BR(), "\n	         ", Spacebars.include(view.lookupTemplate("allTasks")), "\n             "), "\n        "), "\n\n    \n        ", Blaze.If(function() {
      return Spacebars.call(view.lookup("userhaspoints"));
    }, function() {
      return [ "\n            ", Blaze.View("lookup:pointsImplemented", function() {
        return Spacebars.mustache(view.lookup("pointsImplemented"));
      }), "\n            \n        " ];
    }, function() {
      return [ "\n            ", Blaze.View("lookup:initializePoints", function() {
        return Spacebars.mustache(view.lookup("initializePoints"));
      }), "\n            \n        " ];
    }), "\n    \n    \n    " ];
  }, function() {
    return [ "\n      ", HTML.DIV({
      "class": "loginB"
    }, "\n        ", Blaze._TemplateWith(function() {
      return {
        align: Spacebars.call("right")
      };
    }, function() {
      return Spacebars.include(view.lookupTemplate("loginButtons"));
    }), "\n    "), "\n    " ];
  });
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("pointBox");
Template["pointBox"] = new Template("Template.pointBox", (function() {
  var view = this;
  return Blaze.View("lookup:userPoints", function() {
    return Spacebars.mustache(view.lookup("userPoints"));
  });
}));

Template.__checkName("dialogBox");
Template["dialogBox"] = new Template("Template.dialogBox", (function() {
  var view = this;
  return HTML.Raw('<form class="form-group">\n    <p><label>Amount of sleep: \n          <input id="ex1" data-slider-id="ex1Slider" type="text" data-slider-min="0" data-slider-max="24" data-slider-step="1" data-slider-value="14">\n  	</label></p>\n<!--     <p><label>Nap? \n      <input type="text" class="form-control" name="meetingLocation" required value="some location"> </label>\n    </p>\n -->  </form>');
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
  }), HTML.Raw("\n	<br>\n	Number of Generic Tasks: "), Blaze.View("lookup:counterGenTasks", function() {
    return Spacebars.mustache(view.lookup("counterGenTasks"));
  }), HTML.Raw('\n	<br>\n<!-- 	Random tasks: {{randomTasks}}\n -->\n<!-- 	<ul class="list-group">\n	    {{#each task}}\n			<li class="task list-group-item">{{text}}: {{category}} <span class="badge">{{points}}</span></li>\n	    {{/each}}\n	</ul>\n\n	<br><br>\n	<h1>Generic Tasks</h1>\n\n	<ul class="list-group">\n	    {{#each genTask}}\n			<li class="task list-group-item">{{content}}: {{category}} <span class="badge">{{points}}</span></li>\n	    {{/each}}\n	</ul> -->') ];
}));

Template.__checkName("points");
Template["points"] = new Template("Template.points", (function() {
  var view = this;
  return HTML.DIV({
    "class": "leaderboard"
  }, HTML.Raw("\n        <h3>Leaderboard</h3>\n   \n    "), HTML.DL({
    "class": "accordion",
    "data-accordion": ""
  }, "  \n        \n        ", HTML.DD({
    "class": "accordion-navigation"
  }, "\n    ", HTML.Raw('<a href="#panel1a"> Play Point Ranking </a>'), "\n    ", HTML.DIV({
    id: "panel1a",
    "class": "content active"
  }, "\n                \n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("pointInfo"));
  }, function() {
    return [ "\n                        ", HTML.P("\n                            ", HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("photoURL"));
      },
      width: "50"
    }), " ", HTML.SPAN(Blaze.View("lookup:username", function() {
      return Spacebars.mustache(view.lookup("username"));
    })), ": ", Blaze.View("lookup:profile.playPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "playPoints"));
    })), "\n                    " ];
  }), "\n            \n        "), "\n        "), "\n        \n        ", HTML.DD({
    "class": "accordion-navigation"
  }, "\n    ", HTML.Raw('<a href="#panel2a"> Social Point Ranking </a>'), "\n    ", HTML.DIV({
    id: "panel2a",
    "class": "content"
  }, "\n        \n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("pointInfo"));
  }, function() {
    return [ "\n                        ", HTML.P(HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("photoURL"));
      },
      width: "50"
    }), " ", HTML.SPAN(Blaze.View("lookup:username", function() {
      return Spacebars.mustache(view.lookup("username"));
    })), ": ", Blaze.View("lookup:profile.socialPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "socialPoints"));
    }), " "), "\n                    " ];
  }), "\n                \n        "), "\n        "), "\n        \n         \n        ", HTML.DD({
    "class": "accordion-navigation"
  }, "\n    ", HTML.Raw('<a href="#panel3a"> Study Point Ranking </a>'), "\n    ", HTML.DIV({
    id: "panel3a",
    "class": "content"
  }, "\n            \n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("pointInfo"));
  }, function() {
    return [ "\n                        ", HTML.P(HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("photoURL"));
      },
      width: "50"
    }), " ", HTML.SPAN(Blaze.View("lookup:username", function() {
      return Spacebars.mustache(view.lookup("username"));
    })), ": ", Blaze.View("lookup:profile.studyPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "studyPoints"));
    }), " "), "\n                    " ];
  }), "\n    \n           "), "\n        "), "\n    \n        ", HTML.DD({
    "class": "accordion-navigation"
  }, "\n    ", HTML.Raw('<a href="#panel4a"> Sleep Point Ranking </a>'), "\n    ", HTML.DIV({
    id: "panel4a",
    "class": "content"
  }, "\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("pointInfo"));
  }, function() {
    return [ "\n                        ", HTML.P(HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("photoURL"));
      },
      width: "50"
    }), " ", HTML.SPAN(Blaze.View("lookup:username", function() {
      return Spacebars.mustache(view.lookup("username"));
    })), ": ", Blaze.View("lookup:profile.sleepPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "sleepPoints"));
    }), " "), "\n                    " ];
  }), "\n            \n         "), "\n        "), "\n           \n        ", HTML.DD({
    "class": "accordion-navigation"
  }, "\n    ", HTML.Raw('<a href="#panel5a"> Healht Point Ranking </a>'), "\n    ", HTML.DIV({
    id: "panel5a",
    "class": "content"
  }, "\n        \n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("pointInfo"));
  }, function() {
    return [ "\n                        ", HTML.P(HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("photoURL"));
      },
      width: "50"
    }), " ", HTML.SPAN(Blaze.View("lookup:username", function() {
      return Spacebars.mustache(view.lookup("username"));
    })), ": ", Blaze.View("lookup:profile.healthPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "healthPoints"));
    }), " "), "\n                    " ];
  }), "\n      "), "\n        "), "\n    \n        "), "\n ");
}));

})();
