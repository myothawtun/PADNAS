'use strict';

app.recentworkview = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_recentworkview
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_recentworkview
(function(parent) {
    var recentworkviewModel = kendo.observable({
        fields: {
            heading1: '',
        }
    });

    parent.set('recentworkviewModel', recentworkviewModel);
})(app.recentworkview);

// START_CUSTOM_CODE_recentworkviewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_recentworkviewModel