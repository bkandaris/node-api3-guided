// let's re-create the morgan middleware

// why use a HOF? So we can use the params
module.exports = format => {
  //   const ip = req.ip;
  //   const method = req.method;
  //   const url = req.url;
  return (req, res, next) => {
    const { ip, method, url } = req;
    const agent = req.get('User-Agent');
    // we can use params in our HOF to change functionality of our middleware
    if (format == 'short') {
      console.log(`${method} ${url}`);
    } else {
      console.log(`${ip} ${method} ${url} ${agent}`);
      // next signals that we are done after the console.log - move onto the next piece
      next();
    }
  };
};
