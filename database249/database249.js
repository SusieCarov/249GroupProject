
TasksList = new Mongo.Collection("tasks");

var tasksArray = [
  {text: "Tried a dining hall I don’t normally go to", category: "Eat" }, {text: "Walk around lake", category: "Health" },
  {text: "Swing on swing", category: "Play" }, {text: "Go to pub night", category: "Health" },
  {text: "See movie at Collins Cinema!", category: "Health" }, {text: "Nachos @ Hoop", category: "Eat" },
  {text: "Sandwich @ El Table", category: "Eat" }, {text: "Go to professor’s office hours", category: "Study" },
  {text: "Find 5th floor bathroom in Science Center", category: "Study" }, {text: "Go to open observatory hours", category: "Play" },
  {text: "Go to cultural event", category: "Play",}, {text: "Go to Galen Stone Tower", category: "" },
  {text: "Study in Schneider", category: "Study" }, {text: "Study in a new part of Clapp", category: "Study" }, {text: "Study in the Lulu", category: "Study"},
  {text: "Play billiards on Lulu 3rd floor", category: "Play"},  {text: "Check out a projector and have a movie night!", category: "Social" },
  {text: "Check out a book for fun from library", category: "Play" }, {text: "Study in Billings", category: "Study" },
  {text: "Go to Bingo night!", category: "Play" }, {text: "Go canoeing/kayaking on lake", category: "Play" },
  {text: "Watch a Varsity game - Have some Wellesley Blue spirit!", category: "Play"},  {text: "Watch a club sport game ", category: "Play"},  {text: "Watch an acapella performance", category: "Play"}, 
  {text: "Go to an org’s open meeting", category: "Play"},  {text: "Look at student art in Jewett", category: "Play"}, 
  {text: "Go to Davis Museum", category: "Play"}, {text: "Try out sauna at KSC!", category: "Health"},  {text: "Intramural sport game!", category: "Health"}, 
  {text: "Go to special collections in Clapp", category: "Play"},  {text: "Go rock climbing at KSC", category: "Health"}, 
  {text: "Check something fun out at KSC", category: "Health"},  {text: "Go to a Wellesley Theatre performance", category: "Play"}, 
  {text: "Go to a Shakes performance", category: "Play"},  {text: "Go to Natick Mall", category: "Play"}, 
  {text: "Furniture Store iMAX in Natick!!?", category: "Play"},  {text: "Go to an off-campus event!", category: "Play"}, 
  {text: "Get a sandwich from Lulu - get the avocado on Fridays!", category: "Eat"},  {text: "Look for woodland creatures during your walk through campus", category: "Play"}, 
  {text: "Check something off one of the 50 things", category: "Play"},  {text: "Study in Shafer living room", category: "Study"}, 
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
  {text: "Talk to APT", category: "Study"},  {text: "Talk to HP", category: "Health"}, 
  {text: "Talk to MHE", category: "Health"},  {text: "Visit your major advisor!", category: "Social"}, 
  {text: "Visit your dean", category: "Social"},  {text: "Check out the taxidermy in Science Center", category: "Play"}, 
  {text: "Look at the glow in the dark rocks by geos", category: "Play"},  {text: "Visit student lounge of your major", category: "Play"}, 
  {text: "Visit your dean", category: "Study"},  {text: "Play with the water table", category: "Play"}, 
  {text: "Go to Leaky Beaker", category: "Eat"},  {text: "Puzzle table in Sci Library", category: "Play"}, 
  {text: "Study in Art Library", category: "Study"},  {text: "Study in Music Library", category: "Study"}, 
  {text: "Go to a floor/hall program", category: "Social"},  {text: "Watch Mona Lisa Smile", category: "Play"}, 
  {text: "Host a Prospie", category: "Social"},  {text: "Buy something on Free and For Sale", category: "Play"}, 
  {text: "Sell something on Free and For Sale", category: "Play"},  {text: "Therapy Dogs!", category: "Health"}, 
  {text: "Study in Sage Lounge Science Center", category: "Study"}];

if(Meteor.isClient) {

    //helper functions
    Template.allTasks.helpers({

      'userPoints': function() {
        //points as property in user collection object
        //return this.points;
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


    });
}

if(Meteor.isServer){

  if (TasksList.find().count() == 0) {
    Meteor.call('insertTaskData');
  }

  Meteor.methods({

    //method
    'insertTaskData': function(){
      for (i in tasksArray) {
        console.log("inside for loop");
          TasksList.insert({
            text: tasksArray[i].text,
            points: 15,
            category: tasksArray[i].category
          });
      }
    },

    //another method
    'removeAllTasks': function() {
        return TasksList.remove({});
    },

    //another method
  });

}


