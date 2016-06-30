page('/', Project.fetchAll, projectView.initIndexPage);
page('/portfolio', Project.fetchAll, projectView.initIndexPage, projectView.portfolio);
page('/portfolio/*', '/portfolio');
page('/about', projectView.about);
page();
