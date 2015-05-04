PointList = new Mongo.Collection('userPoints');

//create a session variable is new user, set default to false after created 
//if find userData is null insert  in the client side

//if current user display leaderboard template,

if (Meteor.isClient) {
    console.log("Hi Client");
    /*Template.points.events({
    }) */


}



if (Meteor.isServer) {
    console.log("Hi Server");
   /* Meteor.startUp(function() {
        
    }
    Meteor.publish('thePoints', function(){
        var currentUserId = this.userId;
        return PointList.find({user: currentUserId})
    });
    
    Meteor.methods({
        'InitiallizePoints': function(){
            var currentUserId = Meteor.userId();
           PointList.insert({
                //study, play, social, health, and sleep;
                user: currentUserId,
                studyPoints:0,
                playPoints: 0, 
                socialPoints: 0, 
                healthPoints: 0,
                sleepPoints: 0
               
            });
            //console.log("Hello World")
        },
            
            
        } */

}
