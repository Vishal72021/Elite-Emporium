function logger(req, res, next) {
  console.log(`${req.method} request received for ${req.url}`);
  next();
}

export default logger;
