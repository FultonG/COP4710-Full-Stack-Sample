$(function () {
    $.get("/authors").then(res => {
        res.forEach(author => {
            $("#content").append(`<div class="col-sm-3"><div class="card"><div class="card-body"><img class="img-fluid" src="/assets/writer.svg"/> ${author.authorFirst} ${author.authorLast}</div></div></div>`)
        });
    })

    $("#loadBooks").click(function(){
        $.get('/books').then(res => {
            res.forEach(book => {
                $("#books").append(`<div class="col-sm-3"><div class="card"><div class="card-body"><img class="img-fluid" src="/assets/book.svg"/> ${book.title} only ${book.price}</div></div></div>`)
            });
        })
    });

    $("#searchForm").on("submit", function (event) {
        event.preventDefault();
        var searchVal = $("#name").val();
        $.get('/author', { author: searchVal }).then(res => {
            $('#jumbo').show();
            res.forEach(author => {
                $("#result").append(`<div class="col-sm-3"><div class="card"><div class="card-body"><img class="img-fluid" src="/assets/found.svg"/>  Found: ${author.authorFirst} ${author.authorLast}</div></div></div>`)
            });
        });
    })
});