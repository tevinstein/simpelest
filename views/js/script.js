$(document).ready(function() {
    getAllItems()
})

//load all items
function getAllItems() {
    $.ajax({
        url: "http://localhost:8080/item/",
        type: 'GET',
        dataType: 'json',
        success: function(results) {
            listItems(results)
        }
    })
}
//
function listItems(response) {
    $("#uncheckedsectionul").empty()
    for (var i = response.length - 1; i >= 0; i--) {
        var starValue = ''
        if (response[i].starred == true) {
            starValue = 'gold'
        }

        $("#uncheckedsectionul").append("<li class='well well-sm' id='" + response[i]._id + "'>" + "<div class='row'><div class='col-xs-6' style='padding-top:12px; padding-left:30px;'>" + "<p>" + response[i].title + "</p>" + "</div><div class='col-xs-6 text-right'><div class='btn-group'><a class='btn' onclick='deleteItem(this)'><i class='fa fa-check fa-2x'></i></a><a class='btn' onclick='editItem(this)'><i class='fa fa-star fa-2x " + starValue + "'></i></a></div></div></div></li>")
    }

    $('.fa-check').mouseover(function() {
        $(this).addClass("green")
    })
    $('.fa-check').mouseleave(function() {
        $(this).removeClass("green")
    })

    $('.fa-star').mouseover(function() {
        $(this).toggleClass("gold")
    })

    $('.fa-star').mouseleave(function() {
        $(this).toggleClass("gold")
    })

    $("#uncheckedsectionul").sortable()
}

//add item
function addItem() {
    $.ajax({
        url: "http://localhost:8080/item/",
        type: 'POST',
        data: { title: $("input[name=title]").val(), starred: false }
    })
}

//delete item
function deleteItem(pointer) {
    var id = $(pointer).closest('li').attr('id')
    $.ajax({
        url: "http://localhost:8080/item/" + id,
        type: 'DELETE',
        success: function() {
            $(pointer).closest('li').toggle('explode')
        }
    })
}
//
//edit item
function editItem(pointer) {
    var id = $(pointer).closest('li').attr('id')
    var starredValue

    if ($(pointer).find('i').hasClass("gold")) {
        starredValue = true
    } else {
        starredValue = false
    }

    $.ajax({
        url: "http://localhost:8080/item/" + id,
        type: 'PUT',
        data: { title: $(pointer).closest('li').text(), starred: starredValue },
        success: function() {
            getAllItems()
        }
    })
}
