$(function () {
    //Initialize form
    $('#loginForm').validate({
        focusInvalid: false,
        rules: {
            'validation-email': {
                required: true,
                email: true
            },
            'validation-password': {
                required: true,
            }
        },
        errorPlacement: function errorPlacement(error, element) {
            $(element).siblings(".validation-error").removeClass("d-none")
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
            const userLogin = {
                email: data["validation-email"],
                password: data["validation-password"],
            }
            const loginPromise = loginUser(userLogin);
            loginPromise.then((resp) => {
                const token = resp.authorization.token
                window.localStorage.setItem("jwt-token", `Bearer ${token}`);
                window.location.href = "../../../ecommerce-product.html";
            });
            // alert("Data has been submitted. Please see console log");
            console.log("form data ===>", data);
            // $(form)[0].reset();
            // $(".floating-label").removeClass("enable-floating-label");
        }
    });
});


async function loginUser(user_data) {
    const url = "http://127.0.0.1:8000/api/v1/auth/login";
    return await $.ajax({
        url: url,
        type: 'POST',
        headers: { 'Accept': "application/json" },
        data: user_data,
        success: (resp) => {
            return resp;
        },
        error: (resp) => {
            alert("Não é possível fazer Login, Verifique correctamente os dados!");
            console.log(err.responseJSON)
        }
    });
}