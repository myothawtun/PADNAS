'use strict';

app.signUp = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
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