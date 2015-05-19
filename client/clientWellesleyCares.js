TasksList = new Mongo.Collection("tasks");
GenTasksList = new Mongo.Collection("genTasks");

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
               $('input:checkbox').attr('checked',false);
          } else if (this.category == "Social") {
              console.log("Social bonus task is selected");
              Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.socialPoints": 15}});
              TasksList.remove(this._id);
               $('input:checkbox').attr('checked',false);
              
          } else if (this.category == "Play") {
              console.log("Play bonus task is selected");
              Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.playPoints": 15}});
              TasksList.remove(this._id);
               $('input:checkbox').attr('checked',false);
    
          } else {
              console.log("Health bonus task is selected");
              Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.healthPoints": 15}});
              TasksList.remove(this._id);
              $('input:checkbox').attr('checked',false);
              //health
          }
         
        //TasksList.remove(this._id);
      },
      "click .delete": function () {
        TasksList.remove(this._id);
            if (this.category == "Study"){
              console.log("Study bonus task skipped");
              Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.studyPoints": -5}});
              TasksList.remove(this._id);
          } else if (this.category == "Social") {
              console.log("Social bonus task skipped");
              Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.socialPoints": -5}});
              TasksList.remove(this._id);
              
          } else if (this.category == "Play") {
              console.log("Play bonus task skipped");
              Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.playPoints": -5}});
              TasksList.remove(this._id);
    
          } else {
              //health
              console.log("Health bonus task skipped");
              Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.healthPoints": -5}});
              TasksList.remove(this._id);
              
          }
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

  Template.modals.helpers({

    socialTask: function() {
      return GenTasksList.find({"category": "Social"}).fetch();
    },

    playTask: function() {
      return GenTasksList.find({"category": "Play"}).fetch();
    },     

    studyTask: function() {
      return GenTasksList.find({"category": "Study"}).fetch();
    },      

    healthTask: function() {
      return GenTasksList.find({"category": "Health"}).fetch();
    },

  });
  
 Template.modals.events({
     "click #playSubmit": function(){
         var numberChecked = $("input:checkbox:checked").length;
         var pointsToAdd = 15*numberChecked;
        Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.playPoints": pointsToAdd}}); 
         $('input:checkbox').attr('checked',false);
     },
      "click #healthSubmit": function(){
         var numberChecked = $("input:checkbox:checked").length;
         var pointsToAdd = 15*numberChecked;
          Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.healthPoints": pointsToAdd}});
          $('input:checkbox').attr('checked',false);
     },
      "click #socialSubmit": function(){
         var numberChecked = $("input:checkbox:checked").length;
         var pointsToAdd = 15*numberChecked;
          Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.socialPoints": pointsToAdd}}); 
          $('input:checkbox').attr('checked',false);
     },
      "click #studySubmit": function(){
         var numberChecked = $("input:checkbox:checked").length;
         var pointsToAdd = 15*numberChecked;
          Meteor.users.update( { _id: Meteor.userId() }, {$inc:{ "profile.studyPoints": pointsToAdd}}); 
          $('input:checkbox').attr('checked',false);
     },
 });