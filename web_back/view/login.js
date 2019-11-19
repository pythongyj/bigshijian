var baseURL = "http://localhost:8000/";
$("#login").click(function () {
    var text = $('[type=text]').val();
    var password = $('[type=password]').val();
    console.log(text);

    $.post(`${baseURL}admin/login`, {
            user_name: text,
            password: password
        },
        function (res) {
            if (res.code === 200) {
                location.href = './index.html';
            } else {
                $('#msgInfo').text(res.msg)
                $('#myModal').modal('show')
                // alert(res.msg)

            }

        }
    );
});