page('/', Project.fetchAll, projectView.initIndexPage);
page('/portfolio', Project.fetchAll, projectView.portfolio);
page('/about', projectView.about);
page();
