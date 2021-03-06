'use strict';

app.notification = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_notification
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_notification
(function(parent) {
    var notificationModel = kendo.observable({
        fields: {
            heading: '',
        }
    });

    parent.set('notificationModel', notificationModel);
})(app.notification);

// START_CUSTOM_CODE_notificationModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_notificationModel