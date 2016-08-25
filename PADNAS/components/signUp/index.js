'use strict';
var everliveApiKey  = new Everlive({
    appId: 'l2qsxezv534jf65p',
    scheme: 'https'
	});

var everliveScheme = 'https' 
app.signUp = kendo.observable({
    onShow: function() {},
    afterShow: function() {},
   initialize:function()
    {
       this.bindEvents();
    },
    bindEvents:function()
    {
      
        var name="Nan";
         alert("Binding");
    document.addEventListener('deviceready', this.onDeviceReady, false);
	},
   	onDeviceReady: function() {
        alert("hey I'm ready");
    	app.signUp.initializeEverlive();
   app.signUp.initializeFacebookAuthentication();
    navigator.splashscreen.hide();
     },
    initializeEverlive:function() {
 	Everlive.init({
			apiKey: everliveApiKey,
            scheme: everliveScheme
		});
    },
    initializeFacebookAuthentication: function() {
        alert("Configuring facebook")
    var facebookConfig = {
    name: "Facebook",
    loginMethodName: "loginWithFacebook",
    endpoint: "https://www.facebook.com/dialog/oauth",
    response_type:"token",
    client_id: '1755726881334128',
    redirect_uri: 'http://localhost/',
    access_type:"online",
    scope:"email",
    display: "touch"
    };
    var facebook = new IdentityProvider(facebookConfig); 
    var loginFbBtn = document.getElementById("fbButton");
    loginFbBtn.addEventListener('click', function() {
    facebook.getAccessToken(function(token) {
    Everlive.$.Users.loginWithFacebook(token)
    .then(function(res) {
    console.log(res);
    var message = "Welcome to Everlive!";
    navigator.notification.alert(message, function() {
    }, "Everlive")
    }, function(err) {
    console.log(err);
    navigator.notification.alert(err.message, function() {
    }, "Everlive")
    })
    })
    });
    }
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