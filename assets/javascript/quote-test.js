$(document).ready(function () {
    console.log('ready')
    var subjects = ['motivation', 'inspiration', 'success']
    var queryURL = 'http://quotes.rest/quote/categories.json?category='+ search +'&api_key=_fL6rv9zmtRHXacNHMTESweF'
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function (response) {
        // var results = response.data
        console.log(response)

        });   

function renderButtons() {
    $("#viewSubjects").empty()
    subjects.forEach(element => {
        $("#viewSubjects").append('<button type="button" class="btn btn-elegant waves-effect" id="' + element + '">"' + element + '"</button>')

    });
}   

renderButtons();
})