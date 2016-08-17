'use strict';

app.startView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_startView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_startView
(function(parent) {
    var startViewModel = kendo.observable({
        fields: {
            imageLogo: '',
        },
        submit: function() {}
    });

    parent.set('startViewModel', startViewModel);
})(app.startView);

// START_CUSTOM_CODE_startViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_startViewModel