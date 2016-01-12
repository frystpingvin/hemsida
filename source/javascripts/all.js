//= require_tree .

// Add margin-top to first project that is equivalent to half height
function projectMargin(firstProject, marginHeight) {
  var firstProject = $('.project:nth-child(2)');
  var marginHeight = firstProject.height()/2;

  var windowWidth = $(window).width();

  // only run marginscript on large phones and upwards
  if (windowWidth >= 600) {
    firstProject.attr('style', 'margin-top:' + marginHeight + 'px');
  }
  else {
    firstProject.removeAttr('style');
  }
}

$(document).ready(projectMargin);
$(window).resize(projectMargin);
