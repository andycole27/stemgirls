exports.get404 = (req, res, next) => {
  res.status(404).render('404', {
    viewTitle: 'Page Not Found',
    path: '/404',
    isAuthenticated: req.session.isLoggedIn
  });
};

exports.get500 = (req, res, next) => {
  res.status(500).render('500', {
   viewTitle: 'Error!',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  });
};