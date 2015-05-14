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
      }
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
  