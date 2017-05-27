var pattern = {
    mobile: /^1[3-9]\d{9}$/,
    email: /^\w+@[A-z0-9][A-z0-9\-]*[A-z0-9]*(\.[A-z]{1,10}){1,2}$/
}

var v = {
    rules: {
        'username': {
            required: true,
            minlength: 2,
            maxlength: 20
        },
        '#mobile': {
            required: true
        },
        '.mobile': {

        }
    }
}

var validate = function(){
    $.each(v.rules, function(rule){
        var obj;
        if( /^[#\.]/.test(rule) ){
            obj = $(rule);
        }
        else obj = $('[name=' + rule + ']');

        obj.each(function(){
            $(this).data('rules', v.rules);
            $(this).data('rule', rule);
            $(this).blur(function(){
                $(this).valid();
            });
        });

    })
}



var valid = function(){
    var target = $(this);
    var rules = $(this).data('rules');
    var rule = $(this).data('rule');
    if( rules[rule].required ){
        target.css('border', '1px solid red');
        target.attr('aria-required', true).attr('aria-invalid', true);
        if(target.val().length<1){
            target.val('必填');
        }
    }
}


$.fn.extend({
    validate: validate,
    valid: valid
})
