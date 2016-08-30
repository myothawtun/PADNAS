// 'use strict';
// var everliveApiKey  = new Everlive({
//     appId: 'l2qsxezv534jf65p',
//     scheme: 'https'
// 	});
// var everliveScheme = 'https' 
'use strict';
var OAUTHIO_PUBLIC_API_KEY = "Io3eJ-XX3-Y6eIK3Vy7wSU9HMgY"; // TODO replace with your own key

document.addEventListener("deviceready", function () {
	OAuth.initialize(OAUTHIO_PUBLIC_API_KEY);
});
app.signUp = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
     loginWithTwitter: function () {
          this.loginWithProvider("twitter");
        },

        loginWithFacebook: function () {
          // note that you need to whitelist graph.facebook.com in config.xml
          this.loginWithProvider("facebook");
        },

        loginWithGitHub: function () {
          this.loginWithProvider("github");
        },
        
        loginwithLinkedIn:function()
        {
            this.loginWithProvider("linkedin");
        },

      	loginWithProvider: function (provider) {
          if (!this.checkSimulator()) {
            OAuth.popup(provider, {
              // use this to not ask permission every time the user uses our app
              cache: true
            })
            .done(function(result) {
              alert("Success: " + JSON.stringify(result));
            })
            .fail(function (err) {
              alert(err);
            });
          }
        },

        dataFromTwitter: function () {
          this.dataFromProvider("twitter", "1.1/statuses/user_timeline.json?count=1");
        },

      	dataFromFacebook: function () {
          this.dataFromProvider("facebook", "/me");
        },
      
      	dataFromGitHub: function () {
          this.dataFromProvider("github", "/events");
        },
	      dataFromProvider: function(provider, what) {    
          if (!this.checkSimulator()) {
            // note that you need to whitelist api.twitter.com in config.xml
            OAuth.popup(provider, {
              // use this to not ask permission every time the user uses our app
              cache: true
            })
            .done(function(result) {
	            result.get(what)
              .done(function (response) {
              	alert("Response for " + what + ":\n\n" + JSON.stringify(response));
					  	})
            	.fail(function (err) {
	              alert(JSON.stringify(err));
    					});
            })
           	.fail(function (err) {
	            alert(JSON.stringify(err));
   					});
          }
        },	checkSimulator: function() {
            if (window.navigator.simulator === true) {
                alert('This plugin is not available in the simulator.');
                return true;
            } else if (window.screen === undefined) {
                alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
                return true;
            } else {
                return false;
            }
        }
     // initialize:function()
     // {
     //   this.bindEvents();
     // },
     // bindEvents:function()
     // {  
     // document.addEventListener('deviceready', this.onDeviceReady, false);
     // },
     // onDeviceReady: function() {
     // app.signUp.initializeEverlive();
     // app.signUp.initializeFacebookAuthentication();
     // navigator.splashscreen.hide();
     // },
     // initializeEverlive:function() {
     // Everlive.init({
     // apiKey: everliveApiKey,
     //        scheme: everliveScheme
     // });
     // },
     // initializeFacebookAuthentication: function() {
     // var facebookConfig = {
     // name: "Facebook",
     // loginMethodName: "loginWithFacebook",
     // endpoint: "https://www.facebook.com/dialog/oauth",
     // response_type:"token",
     // client_id: '1755726881334128',
     // redirect_uri: 'http://localhost',
     // access_type:"online",
     // scope:"email",
     // display: "touch"
     // };
     // var facebook = new IdentityProvider(facebookConfig); 
     // var loginFbBtn = document.getElementById("fbBtn");
     // loginFbBtn.addEventListener('click', function() {
     // facebook.getAccessToken(function(token) {
     // Everlive.$.Users.loginWithFacebook(token)
     // .then(function(res) {
     // console.log(res);
     // var message = "Welcome to Everlive!";
     // navigator.notification.alert(message, function() {
     // }, "Everlive")
     // }, function(err) {
     // console.log(err);
     // navigator.notification.alert(err.message, function() {
     // }, "Everlive")
     // })
     // })
     // });
     // }
  
});

// START_CUSTOM_CODE_signUp
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_signUp
(function(parent) {
    var signUpModel = kendo.observable({
        fields: {
            txtPwd: '',
            txtLastName: '',
            txtName: '',
        },
        submit: function() {}
    });

    parent.set('signUpModel', signUpModel);
})(app.signUp);

// START_CUSTOM_CODE_signUpModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_signUpModel