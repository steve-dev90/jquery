//For unobstrusive JS render the button in jquery.
//That way the button only appears if the user has js enabled

// The $ sign in front on button is just convention
$button = $('<button>Reveal Spoiler</button>')

$('.spoiler').append($button)

$('.spoiler span').hide()

$('.spoiler').on('click', 'button', function() {
    //Tranverse the DOM
    //the prev() method select the previous sibling element of event.target
    $(event.target).prev().show() 
    $(event.target).hide()
})