(function(module) {

  var projectView = {};

  //hanldebars template
  projectView.getTemplate = function(data, callback){
    getTemplate('portfolio', data, callback);
  };

  // create tab views of content in #projects and #about
  projectView.portfolio = function() {
    $('.jumbotron').fadeTo(5000, 1);
    $('.page-content').hide();
    $('#projects').fadeIn(5000);
    projectView.scroll('#projects');
    projectView.createTeaser();
  };

  projectView.about = function() {
    $('.jumbotron').fadeTo(5000, 1);
    $('.page-content').hide();
    // $('#hbAnagram').remove();
    // anagram.create();
    $('#about').fadeIn(5000);
    projectView.scroll('#about');
  };


  // more and shrink function
  projectView.createTeaser = function() {
    $('.projDescription *:nth-child(n)').hide();
    $('.projDescription *:nth-child(1)').show();
    $('.read-on').show();
    $('.shrink').hide();
    $('.read-on').on('click', function(event) {
      event.preventDefault();
      $(this).prev().find('*:nth-child(n)').slideDown(1500);
      $(this).hide();
      $(this).next().show();
    });
  };


  projectView.scroll = function(tease) {
    $('html, body').animate({
      scrollTop: parseInt($(tease).offset().top)
    }, 2000);
  };

  projectView.setPage = function(){
    $('.page-content').hide();
    $('.jumbotron').fadeTo(5000, 0.5);
    projectView.createTeaser();
  };

  //call the functions
  projectView.initIndexPage = function(ctx, next){
    console.log('init');
    Project.all.forEach(function(project){
      projectView.getTemplate(project, function(a){
        $('#projects').append(a);
      });
    });
    projectView.setPage();
    next();
  };

  module.projectView = projectView;

})(window);
