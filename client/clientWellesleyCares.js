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
    
  