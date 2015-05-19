TasksList = new Mongo.Collection("tasks");
GenTasksList = new Mongo.Collection("genTasks");

var tasksArray = [
  {text: "Try a dining hall you don’t normally go to", category: "Eat" }, {text: "Walk around Lake Waban", category: "Health" },
  {text: "Swing on the chapel swing", category: "Play" }, {text: "Go to pub night", category: "Health" },
  {text: "See a movie at Collins Cinema!", category: "Health" }, {text: "Nachos @ Hoop", category: "Eat" },
  {text: "Sandwich @ El Table", category: "Eat" }, {text: "Go to your professor’s office hours", category: "Study" },
  {text: "Find 5th floor bathroom in Science Center", category: "Study" }, {text: "Go to open observatory hours", category: "Play" },
  {text: "Go to a cultural event - ever been to a Yanvalou performance?", category: "Play",}, {text: "Go to Galen Stone Tower", category: "" },
  {text: "Study in Schneider", category: "Study" }, {text: "Study in a new part of Clapp", category: "Study" }, {text: "Study in the Lulu", category: "Study"},
  {text: "Play billiards on Lulu 3rd floor", category: "Play"},  {text: "Check out a projector and have a movie night!", category: "Social" },
  {text: "Check out a book for fun from library", category: "Play" }, {text: "Study in Billings", category: "Study" },
  {text: "Go to Bingo night!", category: "Play" }, {text: "Go canoeing/kayaking on lake", category: "Play" },
  {text: "Have some Wellesley Blue spirit and watch a varsity sport game!", category: "Play"},  {text: "Watch a club sport game ", category: "Play"},  {text: "Watch an acapella performance", category: "Play"}, 
  {text: "Go to an org’s open meeting", category: "Play"},  {text: "Look at student art in Jewett", category: "Play"}, 
  {text: "Go to Davis Museum", category: "Play"}, {text: "Try out sauna at KSC!", category: "Health"},  {text: "Intramural sport game!", category: "Health"}, 
  {text: "Go to special collections in Clapp", category: "Play"},  {text: "Go rock climbing at KSC", category: "Health"}, 
  {text: "Check something fun out at KSC", category: "Health"},  {text: "Go to a Wellesley Theatre performance", category: "Play"}, 
  {text: "Go to a Shakes performance", category: "Play"},  {text: "Go to Natick Mall", category: "Play"}, 
  {text: "Watch a movie at the cool furniture Store iMAX in Natick", category: "Play"},  {text: "Go to an off-campus event!", category: "Play"}, 
  {text: "Get a sandwich from Lulu - get the avocado on Fridays!", category: "Eat"},  {text: "Look for woodland creatures during your walk through campus", category: "Play"}, 
  {text: "Check something off one of the 50 things to do before you graduate", category: "Play"},  {text: "Study in Shafer living room", category: "Study"}, 
  {text: "Study in Pom living room", category: "Study"},  {text: "Study in Beebe living room", category: "Study"}, 
  {text: "Study in Caz living room", category: "Study"},  {text: "Invite friends over to dorm room", category: "Social"}, 
  {text: "Host a baking party", category: "Social"},  {text: "Use your dorm kitchen", category: "Eat"}, 
  {text: "Book a Stone Center appointment", category: "Health"},  {text: "Get your flu shot at Health Center", category: "Health"}, 
  {text: "Talk to your APT", category: "Social"},  {text: "Take your big or little sib out for ice cream", category: "Social"}, 
  {text: "Get checked for STDs at the Health Center if you’re sexually active", category: "Health"},  {text: "Talk to a SHE", category: "Health"}, 
  {text: "For a change of scenery study in Tower living room!", category: "Study"},  {text: "Study in Claflin", category: "Study"}, 
  {text: "Study in Severance", category: "Study"},  {text: "Study in Bates", category: "Study"}, 
  {text: "Study in Freeman", category: "Study"},  {text: "Study in McAfee", category: "Study"}, 
  {text: "Study in Dower", category: "Study"},  {text: "Talk to a BHE", category: "Health"}, 
  {text: "Talk to your APT", category: "Study"},  {text: "Talk to your HP", category: "Health"}, 
  {text: "Talk to your MHE", category: "Health"},  {text: "Visit your major advisor!", category: "Social"}, 
  {text: "Visit your dean", category: "Social"},  {text: "Check out the taxidermy in Science Center", category: "Play"}, 
  {text: "Look at the glow in the dark rocks by geos", category: "Play"},  {text: "Visit student lounge of your major", category: "Play"}, 
  {text: "Visit your dean", category: "Study"},  {text: "Play with the water table", category: "Play"}, 
  {text: "Go to Leaky Beaker", category: "Eat"},  {text: "Check out the puzzle table in Sci Library", category: "Play"}, 
  {text: "Study in Art Library", category: "Study"},  {text: "Study in the Music Library - check out the sound lab!", category: "Study"}, 
  {text: "Go to a floor/hall program", category: "Social"},  {text: "Watch Mona Lisa Smile", category: "Play"}, 
  {text: "Give back and host a Prospie", category: "Social"},  {text: "Buy something on Free and For Sale", category: "Play"}, 
  {text: "Sell something on Free and For Sale", category: "Play"},  {text: "Therapy Dogs!", category: "Health"}, 
  {text: "Study in Sage Lounge Science Center", category: "Study"}];


var genArray = [
  {text: "I took a nap", category: "Sleep", points: 3}, {text: "I hung out with friends", category: "Social", points: 5},
  {text: "I called home", category: "Social", points: 6}, {text: "I left campus!", category: "Social", points: 10},
  {text: "I finished homework before midnight", category: "Study", points: 3}, {text: "I studied for Test", category: "Study", points: 3},
  {text: "I participated in class", category: "Study", points: 2}, {text: "I went to class", category: "Study", points: 1},
  {text: "I ate all 3 meals!", category: "Health", points: 8},
  {text: "I exercised", category: "Health", points: 10}, {text: "I took a shower", category: "Health", points: 1},
  {text: "I took medication (if needed)", category: "Health", points: 1}, {text: "I brushed my teeth twice today", category: "Health", points: 2},
  {text: "I read a book for fun", category: "Play", points: 5}, {text: "I listened to some new music", category: "Play", points: 2},
  {text: "I enjoyed the outdoors", category: "Play", points: 5}];

//      Meteor.call('insertTaskData');
if (TasksList.find().count() == 0) {
  for (i in tasksArray) {
    console.log("inside for loop");
      TasksList.insert({
        text: tasksArray[i].text,
        points: 15,
        category: tasksArray[i].category
      });
  }  
}

Meteor.publish("TasksList", function() {
  Meteor.call("insertTaskData");
  return TasksList.find().fetch();
})

if (GenTasksList.find().count() == 0) {
  for (i in genArray) {
    GenTasksList.insert({
      content: genArray[i].text,
      points: genArray[i].points,
      category: genArray[i].category,
      checked: false
    });
  }
}

Meteor.publish("GenTasksList", function() {
  Meteor.call("insertGenericData");
  return GenTasksList.find().fetch();
}) 

Meteor.methods({
  'insertTaskData': function(){
    if (TasksList.find().count() == 0) {
      for (i in tasksArray) {
        console.log("inside for loop");
          TasksList.insert({
            text: tasksArray[i].text,
            points: 15,
            category: tasksArray[i].category
          });
      }
    }
  },

  'insertGenericData': function(){
    if (GenTasksList.find().count() == 0) {
      for (i in genArray) {
        GenTasksList.insert({
          content: genArray[i].text,
          points: genArray[i].points,
          category: genArray[i].category,
          checked: false
        });
      }
    }
  },

  'removeAllTasks': function() {
      return TasksList.remove({});
  },

  'removeAllGenTasks': function() {
    return GenTasksList.remove({});
  }

});