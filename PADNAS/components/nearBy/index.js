'use strict';

app.nearByView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_nearByView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_nearByView
(function(parent) {
    var nearByViewModel = kendo.observable({
        fields: {
            heading: '',
        }
    });

    parent.set('nearByViewModel', nearByViewModel);
})(app.nearByView);

// START_CUSTOM_CODE_nearByViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_nearByViewModel