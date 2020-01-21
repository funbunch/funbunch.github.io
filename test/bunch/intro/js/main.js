/*================================================================*/
/* DOM READY
/*================================================================*/
$(document).ready(function(){



    // binds form submission and fields to the validation engine
    $('#frm_signup').validationEngine({
        promptPosition : "topLeft",
        scroll: false,
        autoHidePrompt: true,
        showArrow: false,
        autoPositionUpdate: true
   });

});