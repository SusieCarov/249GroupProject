
TasksList = new Mongo.Collection("tasks");
GenTasksList = new Mongo.Collection("genTasks");

var tasksArray = [
  {text: "Tried a dining hall I don’t normally go to", category: "Eat" }, {text: "Walk around lake", category: "Health" },
  {text: "Swing on swing", category: "Play" }, {text: "Go to pub night", category: "Health" },
  {text: "See movie at Collins Cinema!", category: "Health" }, {text: "Nachos @ Hoop", category: "Eat" },
  {text: "Sandwich @ El Table", category: "Eat" }, {text: "Go to professor’s office hours", category: "Study" },
  {text: "Find 5th floor bathroom in Science Center", category: "Study" }, {text: "Go to open observatory hours", category: "Play" },
  {text: "Go to cultural event", category: "Play",}, {text: "Go to Galen Stone Tower", category: "" },
  {text: "Study in Schneider", category: "Study" }, {text: "Study in a new part of Clapp", category: "Study" }, 
  {text: "Study in the Lulu", category: "Study"},
  {text: "Play billiards on Lulu 3rd floor", category: "Play"},  {text: "Check out a projector and have a movie night!", category: "Social" },
  {text: "Check out a book for fun from library", category: "Play" }, {text: "Study in Billings", category: "Study" },
  {text: "Go to Bingo night!", category: "Play" }, {text: "Go canoeing/kayaking on lake", category: "Play" },
  {text: "Watch a Varsity game - Have some Wellesley Blue spirit!", category: "Play"},  {text: "Watch a club sport game ", category: "Play"},  
  {text: "Watch an acapella performance", category: "Play"}, {text: "Go to an org’s open meeting", category: "Play"},  
  {text: "Look at student art in Jewett", category: "Play"}, 
  {text: "Go to Davis Museum", category: "Play"}, {text: "Try out sauna at KSC!", category: "Health"},  
  {text: "Intramural sport game!", category: "Health"}, 
  {text: "Go to special collections in Clapp", category: "Play"},  {text: "Go rock climbing at KSC", category: "Health"}, 
  {text: "Find out for yourself whether there's a sauna at KSC", category: "Health"},  {text: "Go to a Wellesley Theatre performance", category: "Play"}, 
  {text: "Go to a Shakes performance", category: "Play"},  {text: "Go to Natick Mall", category: "Play"}, 
  {text: "Watch a movie at the super cool furniture Store iMAX in Natick!!?", category: "Play"},  {text: "Go to an off-campus event!", category: "Play"}, 
  {text: "Take advantage of Avocado Friday at Lulu", category: "Eat"},  
  {text: "Look for woodland creatures during your walk through campus", category: "Play"}, 
  {text: "Check something off one of the 50 things to do before you graduate", category: "Play"},  {text: "Study in Shafer living room", category: "Study"}, 
  {text: "Study in Pom living room", category: "Study"},  {text: "Study in Beebe living room", category: "Study"}, 
  {text: "Study in Caz living room", category: "Study"},  {text: "Invite friends over to dorm room", category: "Social"}, 
  {text: "Host a baking party", category: "Social"},  {text: "Use your dorm kitchen", category: "Eat"}, 
  {text: "Book a Stone Center appointment", category: "Health"},  {text: "Get your flu shot at Health Center", category: "Health"}, 
  {text: "Talk to your APT", category: "Social"},  {text: "Take your big or little sib out for ice cream", category: "Social"}, 
  {text: "Get checked for STDs if you’re sexually active", category: "Health"},  {text: "Talk to a SHE", category: "Health"}, 
  {text: "For a change of scenery study in Tower living room!", category: "Study"},  {text: "Study in Claflin", category: "Study"}, 
  {text: "Study in Severance", category: "Study"},  {text: "Study in Bates", category: "Study"}, 
  {text: "Study in Freeman", category: "Study"},  {text: "Study in McAfee", category: "Study"}, 
  {text: "Study in Dower", category: "Study"},  {text: "Talk to a BHE", category: "Health"}, 
  {text: "Talk to an MHE", category: "Health"},  {text: "Visit your major advisor!", category: "Social"}, 
  {text: "Visit your dean", category: "Social"},  {text: "Check out the taxidermy in Science Center", category: "Play"}, 
  {text: "Look at the glow in the dark rocks by geos", category: "Play"},  {text: "Visit student lounge of your major", category: "Play"}, 
  {text: "Visit your dean", category: "Study"},  {text: "Play with the water table", category: "Play"}, 
  {text: "Get some Peet's coffe at the Leaky Beaker", category: "Eat"},  {text: "Puzzle table in Sci Library", category: "Play"}, 
  {text: "Study in Art Library", category: "Study"},  {text: "Study in Music Library", category: "Study"}, 
  {text: "Go to a floor/hall program", category: "Social"},  {text: "Watch Mona Lisa Smile", category: "Play"}, 
  {text: "Host a Prospie", category: "Social"},  {text: "Buy something on Free and For Sale", category: "Play"}, 
  {text: "Post something on Free and For Sale", category: "Play"},  {text: "Therapy Dogs!", category: "Health"}, 
  {text: "Study in Sage Lounge Science Center", category: "Study"}];

var genArray = [
  {text: "Took a nap", category: "Sleep", points: 3}, {text: "Hung out with friends", category: "Social", points: 5},
  {text: "Called home, whatever that may be to you", category: "Social", points: 6}, {text: "Left campus!", category: "Social", points: 10},
  {text: "Finished homework before midnight", category: "Study", points: 3}, {text: "Studied for Test", category: "Study", points: 3},
  {text: "Participated in class", category: "Study", points: 2}, {text: "Went to class", category: "Study", points: 1},
  {text: "Ate all 3 meals!", category: "Health", points: 8},
  {text: "Exercised", category: "Health", points: 10}, {text: "Took a shower", category: "Health", points: 1},
  {text: "Took medication (if needed)", category: "Health", points: 1}, {text: "Brushed teeth twice today", category: "Health", points: 2},
  {text: "Read a book for fun", category: "Play", points: 5}, {text: "Listened to music", category: "Play", points: 2},
  {text: "Went outside!", category: "Play", points: 5}];

if(Meteor.isClient) {

    //helper functions
    Template.allTasks.helpers({

      'userPoints': function() {
        return 5;
      },

      'task': function() {
        return TasksList.find();
      },

      'counterStudy': function() {
        return TasksList.find({category: "Study"}).count()
      },

      'counterHealth': function() {
        return TasksList.find({category: "Health"}).count()
      },

      'counterPlay': function() {
        return TasksList.find({category: "Play"}).count()
      },

      'counterSocial': function() {
        return TasksList.find({category: "Social"}).count()
      },

      'counterSleep': function() {
        return TasksList.find({category: "Sleep"}).count()
      },

      'counterGenTasks': function() {
        return GenTasksList.find().count()
      },

      'genTask': function() {
        return GenTasksList.find();
      },

      'randomTasks': function() {
        var i = Math.floor(Math.random() * TasksList.find().count());
        var j = Math.floor(Math.random() * TasksList.find().count());
        var k = Math.floor(Math.random() * TasksList.find().count());
        var first = TasksList.find({text: tasksArray[i].text}).fetch()[0].text;
        var second = TasksList.find({text: tasksArray[j].text}).fetch()[0].text;
        var third = TasksList.find({text: tasksArray[k].text}).fetch()[0].text;
        return [first, " " + second, " " + third];
      }


    });
}

if(Meteor.isServer){

  if (TasksList.find().count() > 0) {
    TasksList.remove({});
  }
  for (i in tasksArray) {
    TasksList.insert({
      text: tasksArray[i].text,
      points: 15,
      category: tasksArray[i].category
    });
  }

  if (GenTasksList.find().count() > 0) {
    GenTasksList.remove({});
  }      
  for (i in genArray) {
    GenTasksList.insert({
      content: genArray[i].text,
      points: genArray[i].points,
      category: genArray[i].category
    });
  }

  Meteor.methods({
    //method
    'insertTaskData': function(){
      for (i in tasksArray) {
        TasksList.insert({
          text: tasksArray[i].text,
          points: 15,
          category: tasksArray[i].category
        });
      }
    },

    'insertGenericData': function(){
      for (i in genArray) {
        GenTasksList.insert({
          content: genArray[i].text,
          points: genArray[i].points,
          category: genArray[i].category
        });
      }
    },

    //another method
    'removeAllTasks': function() {
      return TasksList.remove({});
    },

    'removeAllGenTasks': function() {
      return GenTasksList.remove({});
    }

  });

}


