SWAPI GraphQL Wrapper Schema
=====================

This is a fork of the official [Star Wars GraphQL API repo](https://github.com/graphql/swapi-graphql).
This fork is necessary because of the following problems with that repo's npm package ([`swapi-graphql`](https://www.npmjs.com/package/swapi-graphql)):
- The published package has not been updated in a long time and does not track the repo's current code.
- The schema it exports is unusable because it has a direct dependency on `graphql`, which leads to "multiple instances of GraphQL found" error messages.
- Its `postinstall` hook causes installation with Yarn v2 to fail, probably because of Plug-n-Play.

This fork publishes a package called [`swapi-graphql-schema`](https://www.npmjs.com/package/swapi-graphql-schema) whose `default` export is the GraphQL schema.
