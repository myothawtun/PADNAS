'use strict';

app.myPadnas = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_myPadnas
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_myPadnas
(function(parent) {
    var myPadnasModel = kendo.observable({
        fields: {
            heading2: '',
        }
    });

    parent.set('myPadnasModel', myPadnasModel);
})(app.myPadnas);

// START_CUSTOM_CODE_myPadnasModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_myPadnasModel