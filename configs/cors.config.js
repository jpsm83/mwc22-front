// cross origin resurce sharing - CORS is a W3C standard that allows you to get
// away from the same origin policy adopted by the browsers to restrict access
// from one domain to resources belonging to another domain

const cors = require("cors");
require("dotenv").config();

module.exports = (app) => {
  app.use(
    cors({
      // credentials=true recive a cookie from the front (client) to know with user is in session
      credentials: true,
      origin: [
        process.env.PUBLIC_DOMAIN,
        // must setup coors to alow your production webpage to acess information
        "https://my-recipes-library-app.herokuapp.com",
      ],
    })
  );
};
