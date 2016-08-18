'use strict';

app.profile = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_profile
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
<script>
    var timer;

    function changeTabBadge() {
 
        tabstrip.badge("a:last", +tabstrip.badge("a:last") + 5);
    }

    function addTimer() {
        timer = setInterval(changeTabBadge, 1000);
    }

    function removeTimer() {
        clearInterval(timer);
    }
</script>


<script>
    var app = new kendo.mobile.Application(document.body, { skin: "nova" });
</script>
// END_CUSTOM_CODE_profile
(function(parent) {
    var profileModel = kendo.observable({
        fields: {
            photo1: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('profileModel', profileModel);
})(app.profile);

// START_CUSTOM_CODE_profileModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_profileModel