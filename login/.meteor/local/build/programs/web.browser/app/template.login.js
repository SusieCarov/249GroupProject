(function(){
Template.body.addContent((function() {
  var view = this;
  return [ HTML.Raw("<h1>Wellesley Cares</h1>\n\n   "), Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n         ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n    ", HTML.P(HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("profileURL"));
      },
      width: "30"
    }), " \n            Hello, ", Blaze.View("lookup:firstName", function() {
      return Spacebars.mustache(view.lookup("firstName"));
    }), "!"), "\n         ", Spacebars.include(view.lookupTemplate("points")), "\n    \n    \n        ", Blaze.If(function() {
      return Spacebars.call(view.lookup("userhaspoints"));
    }, function() {
      return [ "\n            ", Blaze.View("lookup:pointsImplemented", function() {
        return Spacebars.mustache(view.lookup("pointsImplemented"));
      }), "\n            You visited again!\n        " ];
    }, function() {
      return [ "\n            ", Blaze.View("lookup:initializePoints", function() {
        return Spacebars.mustache(view.lookup("initializePoints"));
      }), "\n            Welcome!\n        " ];
    }), "\n    \n    \n    " ];
  }, function() {
    return [ "\n        ", Spacebars.include(view.lookupTemplate("loginButtons")), "\n    " ];
  }) ];
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("points");
Template["points"] = new Template("Template.points", (function() {
  var view = this;
  return HTML.DIV({
    "class": "leaderboard"
  }, HTML.Raw("\n        <h1>Leaderboard</h1>\n        "), HTML.UL({
    "class": "inline-list"
  }, "\n            ", HTML.LI({
    "class": "header",
    id: "play"
  }, " Play Point Ranking\n                ", HTML.OL("\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("users"));
  }, function() {
    return [ "\n                        ", HTML.LI(HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("photoURL"));
      },
      width: "50"
    }), " ", HTML.SPAN(Blaze.View("lookup:username", function() {
      return Spacebars.mustache(view.lookup("username"));
    })), ": ", Blaze.View("lookup:profile.playPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "playPoints"));
    })), "\n                    " ];
  }), "\n                "), "\n            "), "\n        \n            ", HTML.LI({
    "class": "header",
    id: "social"
  }, " Social Point Ranking\n                ", HTML.OL("\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("pointInfo"));
  }, function() {
    return [ "\n                        ", HTML.LI(HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("photoURL"));
      },
      width: "50"
    }), " ", HTML.SPAN(Blaze.View("lookup:username", function() {
      return Spacebars.mustache(view.lookup("username"));
    })), ": ", Blaze.View("lookup:profile.socialPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "socialPoints"));
    }), " "), "\n                    " ];
  }), "\n                "), "\n            "), "\n            ", HTML.LI({
    "class": "header",
    id: "study"
  }, " Study Point Ranking \n                ", HTML.OL("\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("pointInfo"));
  }, function() {
    return [ "\n                        ", HTML.LI(HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("photoURL"));
      },
      width: "50"
    }), " ", HTML.SPAN(Blaze.View("lookup:username", function() {
      return Spacebars.mustache(view.lookup("username"));
    })), ": ", Blaze.View("lookup:profile.studyPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "studyPoints"));
    }), " "), "\n                    " ];
  }), "\n                "), "\n            "), "\n            ", HTML.LI({
    "class": "header",
    id: "sleep"
  }, " Sleep Point Ranking \n                ", HTML.OL("\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("pointInfo"));
  }, function() {
    return [ "\n                        ", HTML.LI(HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("photoURL"));
      },
      width: "50"
    }), " ", HTML.SPAN(Blaze.View("lookup:username", function() {
      return Spacebars.mustache(view.lookup("username"));
    })), ": ", Blaze.View("lookup:profile.sleepPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "sleepPoints"));
    }), " "), "\n                    " ];
  }), "\n                "), "\n            "), "\n            ", HTML.LI({
    "class": "header",
    id: "health"
  }, " Health Point Ranking\n                ", HTML.OL("\n                    ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("pointInfo"));
  }, function() {
    return [ "\n                        ", HTML.LI(HTML.IMG({
      src: function() {
        return Spacebars.mustache(view.lookup("photoURL"));
      },
      width: "50"
    }), " ", HTML.SPAN(Blaze.View("lookup:username", function() {
      return Spacebars.mustache(view.lookup("username"));
    })), ": ", Blaze.View("lookup:profile.healthPoints", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "healthPoints"));
    }), " "), "\n                    " ];
  }), "\n                "), "\n            "), "\n   \n    "), "\n\n    \n    \n");
}));

Template.__checkName("register");
Template["register"] = new Template("Template.register", (function() {
  var view = this;
  return HTML.Raw('<form>\n    <input type="email" id="register-email" placeholder="Email">\n    <input type="password" id="register-password" placeholder="Password">\n    <input type="text" id="signup-username" placeholder="Username">\n    <input type="text" id="signup-name" placeholder="Full Name">\n    <input type="submit" value="Register" id="registerform">\n</form>');
}));

Template.__checkName("login");
Template["login"] = new Template("Template.login", (function() {
  var view = this;
  return HTML.Raw('<form>\n    <input type="email" id="login-email" placeholder="Email">\n    <input type="password" id="login-password" placeholder="Password">\n    <input type="submit" value="Login" id="loginB">\n</form>');
}));

Template.__checkName("dashboard");
Template["dashboard"] = new Template("Template.dashboard", (function() {
  var view = this;
  return HTML.Raw('<p>You\'re logged in.</p>\n    <p><a href="#" class="logout">Logout</a></p>');
}));

})();
