TasksList = new Mongo.Collection("tasks");

  Meteor.subscribe("TasksList");
  
    Template.todayTasks.helpers({
      'studyTask': function() {
        return TasksList.findOne({category: "Study"});
      },
      'sleepTask': function() {
        return TasksList.findOne({category: "Sleep"});
      },
      'socialTask': function() {
        return TasksList.findOne({category: "Social"});
      },
      'playTask': function() {
        return TasksList.findOne({category: "Play"});
      },
      'healthTask': function() {
        return TasksList.findOne({category: "Health"});
      },
    });

  
  
     Template.bonus.events({
      "click .toggle-checked": function () {
        // Set the checked property to the opposite of its current value
        TasksList.update(this._id, {$set: {checked: ! this.checked}});
          if (this.category == "Study"){
              console.log("Study bonus task is selected");
              Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.studyPoints": 15}});
              TasksList.remove(this._id);
              console.log(this._id);
          } else if (this.category == "Social") {
              console.log("Social bonus task is selected");
              Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.socialPoints": 15}});
              TasksList.remove(this._id);
              TasksList.update(this._id, {$set: {checked: false}});
          } else if (this.category == "Play") {
              console.log("Play bonus task is selected");
              Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.playPoints": 15}});
              TasksList.remove(this._id);
              TasksList.update(this._id, {$set: {checked: false}});
          } else {
              console.log("Health bonus task is selected");
              Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.healthPoints": 15}});
              TasksList.remove(this._id);
              TasksList.update(this._id, {$set: {checked: false}});
              //health
          }
        //TasksList.remove(this._id);
      },
      "click .delete": function () {
        TasksList.remove(this._id);
       // TasksList.update(this._id, {$set: {skipped: true}});
      }
    });

    Template.body.helpers({
        
        firstName: function(){
            var user = Meteor.user(); 
            if (user) {
                return user.services.google.given_name;    
            } 
        },
   
        profileURL: function() {
            var user = Meteor.user(); 
            if (user) {
                return user.services.google.picture; 
            } 
        },
        
        initializePoints: function(){
            console.log("first time user, updating fields")
            Meteor.users.update({_id:Meteor.user()._id}, {$set:{profile: {playPoints: 0, studyPoints: 0, socialPoints: 0, sleepPoints:0,            healthPoints:0}}});
        },
        
        pointsImplemented: function(){
            console.log("You have already initialized the points");
        },
        
        userhaspoints: function(){
            var you = Meteor.user().profile;
            console.log(you);
            if (you.hasOwnProperty("playPoints")){
                return true;
                } else{
                return false;
                }
        },
        
         myPoints: function() {
            return Meteor.user().profile;
        }
        
});

    Template.points.helpers({
        pointInfo: function() {
            return Meteor.users.find({}, {sort:{profile: {playPoints: -1, studyPoints: -1, socialPoints: -1, sleepPoints: -1, healthPoints: -1, name: 1}}});
        },
        users: function(){
            
            return Meteor.users.find({}, {"services.google.name": 1, 
                             "services.google.picture": 1,
                             "services.google.email" : 1});
        },
    
        username: function(){
            return this.services.google.name;
        },
    
        photoURL: function(){
            return this.services.google.picture;
        }

        
                                      
    });
    
  Template.flower.events({
    'click #petal1': function(){
        console.log("You clicked petal1");
    },
    'click #petal2': function(){
        console.log("You clicked petal2");
    },
    'click #petal3': function(){
        console.log("You clicked petal3");
    },
    'click #petal4': function(){
        console.log("You clicked petal4");
    },
    'click #petal5': function(){
        console.log("You clicked petal5");
    }
  });
  