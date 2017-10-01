(function ($) {
    $.fn.serializeFormJSON = function () {

        var obj = {};
        var formInput = this.serializeArray();
        $.each(formInput, function () {
            if (obj[this.name]) {
                if (!obj[this.name].push) {
                    obj[this.name] = [obj[this.name]];
                }
                obj[this.name].push(this.value || '');
            } else {
                obj[this.name] = this.value || '';
            }
        });
        return obj;

    };
})(jQuery);

//
function validateURL(url) {
    var vu = /^(http[s]?:\/\/){0,1}(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,5}[]?/;
    return vu.test(url);
}

function validateEmail(email) {
    var ve = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return ve.test(email);
}

function validatePhone(phone) {
    var vp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return vp.test(phone);
}

function validateForm() {
    // Validate URL's
    var url1 = $("#git-hub").val();
    if (validateURL(url1)) {
        console.log("success");
    } else {
        console.log("Please enter a valid URL, remember including http://");
    }
    var url2 = $("#link-in").val();
    if (validateURL(url2)) {
        console.log("success");
    } else {
        console.log("Please enter a valid URL, remember including http://");
    }
    var url3 = $("#twitter").val();
    if (validateURL(url3)) {
        console.log("success");
    } else {
        console.log("Please enter a valid URL, remember including http://");
    }
    var url4 = $("#repo").val();
    if (validateURL(url4)) {
        console.log("success");
    } else {
        console.log("Please enter a valid URL, remember including http://");
    }
    // Validate Email
    var email = $("#email").val();
    if (validateEmail(email)) {
        console.log("success");
    } else {
        console.log("Please enter a valid email");
    }
    //Validate Phone
    var phone = $("#phone").val();
    if (validatePhone(phone)) {
        console.log("success");
    } else {
        console.log("Please enter a valid phone number");
    }
    return false;
}

$('form').submit(function (e) {
    e.preventDefault();
    validateForm();
    var data = $(this).serializeFormJSON();
    console.log(data);
    /* Object
        fname: "value"
        lname: "value"
        bio: "value"
        email: "value"
        phone: "value"
        company: "value"
        github: "value"
        linkin: "value"
        twitter: "value"
        year: "value"
        name: "value"
        description: "value"
        focus: "value"
        length: "value"
        repo: "value"
     */
    $("form").trigger("reset");
});

