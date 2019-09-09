import { createClient } from 'contentful';

export default createClient ({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
});

// const contentful = require("contentful");
// const client = contentful.createClient({
//   // This is the space ID. A space is like a project folder in Contentful terms
//   space: "example",
//   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//   accessToken: ""
// });