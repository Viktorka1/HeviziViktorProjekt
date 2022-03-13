$(document).on('submit', '#reservationform', function () {
    var a = $(this).attr("action");
    $("#reserv-message").slideUp(750, function () {
        $("#reserv-message").hide();
        $.post(a, {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            numperson: $("#persons").val(),
            resdate: $("#res_date").val(),
            restime: $("#resrv-time").val(),
            comments: $("#comments").val()
        }, function (a) {
            document.getElementById("reserv-message").innerHTML = a;
            $("#reserv-message").slideDown("slow");

            if (null != a.match("success")) {
                $("#reserv-message").slideDown("slow");
            }
        });
    });
    return false;
});
$("#reservationform input, #reservationform textarea ").keyup(function () {
    $("#reserv-message").slideUp(1500);
});