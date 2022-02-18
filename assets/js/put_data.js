function select(num) {
    let name = $("#name_" + num).text()
    let job = $("#job_" + num).text()
    let phone1 = $("#phone1_" + num).text()
    let phone2 = $("#phone2_" + num).text()
    let email = $("#email_" + num).text()

    $('.down').removeClass('d-none');
    $('.up').addClass('d-none');

    $("#put_name").text(name)
    $("#put_job").text(job)
    $("#put_phone1").text("+"+phone1)
    $("#put_phone1_href").attr("href","00"+phone1)
    $("#put_phone2").text("+"+phone2)
    $("#put_phone2_href").attr("href","00"+phone2)
    $("#put_email").text(email)
}

function change() {
    $('.up').removeClass('d-none');
    $('.down').addClass('d-none');
}