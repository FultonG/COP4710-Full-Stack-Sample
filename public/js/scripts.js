$(function () {
    $.get("/exampleSql").then(res => {
        res.forEach(author => {
            $("#content").append(`<div class="col-sm-3"><div class="card"><div class="card-body"> ${author.authorFirst} ${author.authorLast}</div></div></div>`)
        });
    })

    $("#searchForm").on("submit", function (event) {
        event.preventDefault();
        var searchVal = $("#name").val();
        $.get('/author', { author: searchVal }).then(res => {
            console.log(res)
            res.forEach(author => {
                console.log(author)
                $("#result").append(`<div class="col-sm-3"><div class="card"><div class="card-body"> Found: ${author.authorFirst} ${author.authorLast}</div></div></div>`)
            });
        });
    })
});