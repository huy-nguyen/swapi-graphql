SWAPI GraphQL Wrapper Schema
=====================

[![npm](https://img.shields.io/npm/v/swapi-graphql-schema.svg?style=flat-square)](https://www.npmjs.com/package/swapi-graphql-schema)

This is a fork of the official [Star Wars GraphQL API repo](https://github.com/graphql/swapi-graphql).
This fork is necessary because of the following problems with that repo's npm package ([`swapi-graphql`](https://www.npmjs.com/package/swapi-graphql)):
- The published package has not been updated in a long time and does not track the repo's current code.
- The schema it exports is unusable because it has a direct dependency on `graphql`, which leads to "multiple instances of GraphQL found" error messages.
- Its `postinstall` hook causes installation with Yarn v2 to fail, probably because of Plug-n-Play.

This fork publishes a package called [`swapi-graphql-schema`](https://www.npmjs.com/package/swapi-graphql-schema) whose `default` export is the GraphQL schema.

## Installation

`npm install swapi-graphql-schema` or `yarn install swapi-graphql-schema`.

## Usage

This is typical usage with `express-graphql`:

```js
import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "swapi-graphql-schema";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
  })
);

app.listen(5000);
```

## Publish

This repo uses [go-task](https://taskfile.dev) as the task runner.

- Run `task npm-auth` to log in to npm.
This only needs to be run once and your npm credentials will be stored in a local Docker volume.
- Run `task publish` to publish the package.
