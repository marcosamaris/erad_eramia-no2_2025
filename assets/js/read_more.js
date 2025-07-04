// Add click event to each element with class toggle-more
// This is dynamic, so will work on any new 'show more'

/*global $ */
$(document).ready(function(){  


$('#user-list').on('click', '.toggle-more', function(){

  // toggle 'more' class in the closest parent table cell
  $(this).closest("td").toggleClass("more");

  // Change text of link
  if ($(this).text() == "show more") {
    $(this).text("show less");
  } else {
    $(this).text("show more");
  }

});

});
