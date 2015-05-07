PointList = new Mongo.Collection('userPoints');

//create a session variable is new user, set default to false after created 
//if find userData is null insert  in the client side

//if current user display leaderboard template,


if (Meteor.isClient) {
    console.log("Hi Client");
    
    
    Template.points.events({
            "click li":function(event, template){
                template.$("ul").slideToggle(300);

  }
    });
    
    Handlebars.registerHelper("isNull", function(value) {
        return value === null;
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
            Meteor.users.update({_id:Meteor.user()._id}, {$set:{profile: {playPoints: 0, studyPoints: 0, socialPoints: 0, sleepPoints:0,            healthPoints:0}}});
        }
        
});

    Template.points.helpers({
        pointInfo: function() {
            console.log("Point Displayed");
            return Meteor.users.find();
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
    

    
    
    /* Custom Registration/Login Form Code that did not work
    Template.register.events({
        'submit #registerform': function(event, template){
            event.preventDefault();
            var emailVar = template.find('#register-email').value;
            var passwordVar = template.find('#register-password').value;
            var nameVar = template.find("#signup-name").value;
            var usernameVar = template.find("signup-username").value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar,
            profile: {
                username: usernameVar,
                name: nameVar,
                studyPoints: 0,
                socialPoints: 0,
                playPoints: 0,
                sleepPoints: 0, 
                healthPoints: 0,
            }
        });
        console.log("Registered! Welcome to Wellesley Cares");
        }
    });
    
    Template.login.events({
    'submit #loginB': function(event, template){
        event.preventDefault();
        var emailVar = template.find('#login-email').value;
        var passwordVar = template.find('#login-password').value;
       
        Meteor.loginWithPassword(emailVar, passwordVar);
         console.log("Loggin in");

    }
    });
    
    Template.dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        console.log("Bye!");
    }
    });*/

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
            var user = Meteor.user();
            if (user && user.emails)
                var usermail = user.emails[0].address;
           PointList.insert({
                //study, play, social, health, and sleep;
                user: usermail,
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
