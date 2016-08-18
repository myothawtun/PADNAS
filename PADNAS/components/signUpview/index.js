'use strict';

app.signUpview = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_signUpview
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_signUpview
(function(parent) {
    var signUpviewModel = kendo.observable({
        fields: {
            txtPwd: '',
            txtLastName: '',
            txtName: '',
        },
        submit: function() {}
    });

    parent.set('signUpviewModel', signUpviewModel);
})(app.signUpview);

// START_CUSTOM_CODE_signUpviewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_signUpviewModel