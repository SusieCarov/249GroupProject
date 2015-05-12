
  Meteor.publish("TasksList", function() {
    if (TasksList.find().count() == 0) {
      Meteor.call('insertTaskData');
    }
    return TasksList.find({});
  });
  
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


