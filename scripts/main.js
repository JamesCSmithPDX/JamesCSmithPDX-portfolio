(function (module) {

// Contructor for new portfolio project
  function Project (post) {
    this.title = post.title; //name of project
    this.projectType = post.projectType; //project category
    this.contributor = post.contributor;
    this.contributorUrl = post.contributorUrl;
    this.postDate = post.postDate;
    this.imgSrc = post.imgSrc;
    this.imgAlt = post.imgAlt;
    this.projDescription = post.projDescription;
    this.daysAgo = parseInt((new Date() - new Date(this.postDate))/60/60/24/1000);
    this.publishStatus = this.postDate ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  };

  Project.all = [];


  //sort blog data, crereate array, append to page
  Project.loadAll = function(projectData){
    projectData.sort(function(a,b) {
      return (new Date(b.postDate)) - (new Date(a.postDate));
    });  //sort by date
    Project.all = projectData.map(function(el) {
      return new Project(el);
    });  //create array
  };

  //check etag json file
  Project.fetchAll = function(ctx, next) {
    $.ajax({
      method: 'GET',
      url: 'data/portfolioProjects.json',
      success: function(data, message, xhr) {
        var etagNew = xhr.getResponseHeader('ETag');
        var etagOld = localStorage.getItem('etag');
        if (!localStorage.rawData) {
          // no local storage get from server
          Project.fetchServer(next);
        } else if (etagNew === etagOld ) {
        //load from local
          Project.fetchLocal(next);
        } else {
        // load from server
          Project.fetchServer(next);
        }
        //set etag
        localStorage.setItem('etag', etagNew);
      }
    });
  };

// load json from local
  Project.fetchLocal = function(next) {
    Project.loadAll(JSON.parse(localStorage.getItem('rawData')));
    next();
  };


  //load json from server
  Project.fetchServer = function(next){
    $.getJSON('data/portfolioProjects.json', function(rawData) {
      Project.loadAll(rawData);
      localStorage.setItem('rawData', JSON.stringify(rawData));
      ctx.rawData = rawData;
      ctx.save();
      next();
    });
  };


  module.Project = Project;

})(window);
