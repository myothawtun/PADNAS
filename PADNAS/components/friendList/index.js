'use strict';

app.friendList = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_friendList
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_friendList
(function(parent) {
    var friendListModel = kendo.observable({
        fields: {
            hyperlink: '',
            txtPassword: '',
            textField: '',
            imageLogin: '',
        },
        submit: function() {}
    });

    parent.set('friendListModel', friendListModel);
})(app.friendList);

// START_CUSTOM_CODE_friendListModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_friendListModel