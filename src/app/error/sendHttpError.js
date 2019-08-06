const generateHTML = error => {
  if (error) {
    return (
      "<div style='text-align: center;'>" +
      `<p>Status: ${error.status}</p>` +
      `<p>Name: ${error.name}</p>` +
      `<p>${error}</p>` +
      '</div>'
    );
  }

  return '';
};

export default function sendHttpErrorModule(req, res, next) {
  res.sendHttpError = error => {
    res.status(error.status);
    if (
      req.xhr ||
      req.is('json') ||
      (req.is('json') && req.get('Accept')) ||
      !(req.get('Accept') && req.get('Accept').indexOf('html') !== -1)
    ) {
      res.json({
        status: error.status,
        name: error.name,
        message: error.message,
      });
    } else {
      res.send(generateHTML(error));
    }
  };

  next();
}
