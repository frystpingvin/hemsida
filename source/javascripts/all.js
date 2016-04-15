//= require_tree .

// Add margin-top to first project that is equivalent to half height
function projectMargin() {
  var projectContainer = $('.projects');
  var firstProject = $('.project:nth-child(2)');
  var margin = firstProject.height()/2;

  var windowWidth = $(window).width();

  // only run marginscript on large phones and upwards
  if (windowWidth >= 600) {
    projectContainer.attr('style', 'margin-top: -' + margin + 'px');
    firstProject.attr('style', 'margin-top:' + margin + 'px');
  }
  else {
    projectContainer.removeAttr('style');
    firstProject.removeAttr('style');
  }
}

function loaded() {
  Zepto(projectMargin);
  $(window).resize(projectMargin);
}
