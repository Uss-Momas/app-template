$(function () {
    //Initialize form
    $('#signupForm').validate({
        focusInvalid: false,
        rules: {
            'validation-fullname': {
                required: true,
            },
            'validation-email': {
                required: true,
                email: true
            },
            'validation-password': {
                required: true,
                minlength: 6,
            },
            'validation-cpassword': {
                required: true,
                equalTo: "#password",
            }
        },
        errorPlacement: function errorPlacement(error, element) {
            $(element).siblings(".validation-error").removeClass("d-none");
            if (error[0].textContent === "Please enter the same value again.") {
                $(element).siblings(".validation-error").text("Password Mismatch")
            }
            return true
        },
        highlight: function (element) {
            var $el = $(element);
            var $parent = $el.parents('.form-group');
            $parent.addClass("invalid-field")
        },
        unhighlight: function (element) {
            var $el = $(element);
            var $parent = $el.parents('.form-group');
            $parent.removeClass("invalid-field");
            $(element).siblings(".validation-error").addClass("d-none")
        },
        submitHandler: function (form) {
            var formdata = $(form).serializeArray();
            var data = {};
            $(formdata).each(function (index, obj) {
                data[obj.name] = obj.value;
            });
            //   alert("Data has been submitted. Please see console log");
            console.log("form data ===>", data);
            const new_user = {
                name: data['validation-fullname'],
                email: data['validation-email'],
                password: data['validation-password'],
            }
            console.log(new_user);
            const userPromise = createUser(new_user);
            userPromise.then((resp) => {
                console.log(resp);
                window.location.href = "../../../auth-login-basic.html";
            });
            //   $(form)[0].reset();
            //   $(".floating-label").removeClass("enable-floating-label");
            //   setTimeout(function(){
            //     window.location.href = "auth-confirmation.html";
            //   }, 1000)
        }
    });
});

async function createUser(user_data) {
    const url = "http://127.0.0.1:8000/api/v1/auth/register";

    return await $.ajax({
        url: url,
        type: 'POST',
        headers: { 'Accept': "application/json" },
        data: user_data,
        success: (resp) => {
            return resp;
        },
        error: (resp) => {
            alert("Não é possível criar a conta, Verifique correctamente os dados!");
            console.log(err.responseJSON)
        }
    });
}