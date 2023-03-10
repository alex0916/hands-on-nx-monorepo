# Hands on Nx monorepo :hand:

Explore [Nx](https://nx.dev/) with GraphQL Nexus, Next.js, Tailwind CSS, Storybook and Cypress.

Bonus: It also has [github actions](./.github/workflows/ci.yml) and [git hooks](./.husky/pre-commit) configured.

[DEMO](https://posts-app-seven.vercel.app/) available thanks to the [Vercel](https://vercel.com) hobby plan :heart:

# Table of Contents

1. [Get started](#get-started)
2. [UI](#ui)
3. [GraphQL Service](#graphql-service)
4. [Cypress e2e](#cypress-e2e)

## Get started

Clone this repo and run `npm install && npm start posts-app`.

## UI

The UI was built using:

- [Next.js](https://nextjs.org/) with [Tailwind CSS](https://tailwindcss.com/)
- Components library with [Storybook](https://storybook.js.org/) included.
- [Apollo client](https://www.apollographql.com/docs/react/) to handle graphql requests.

### Paths

- [App](./apps/posts-app/src/)
- [Components library](./libs/ui-components/)

### Scripts

#### `npm run start posts-app`

Starts the app

#### `npm run generate`

Generates the types of the `.graphql` files in the UI.

#### `npm run start:storybook`

Starts Storybook

#### `npm run test:all`

Runs the tests

## GraphQL Service

The service uses:

- [GraphQL Nexus](https://nexusjs.org/)
- The one and only https://jsonplaceholder.typicode.com/ (Free fake API for testing)

### Paths

- [Service](./apps/posts-app/src/graphql)

### Scripts

#### `npm run start posts-app`

Starts the app

#### `npm run test:all`

Runs the tests

**Note:**
Nexus types are generated locally when you visit the playground.
E.g.

- Start the app.
- Visit `api/graphql`

## Cypress e2e

The are a few e2e tests using [Cypress](https://www.cypress.io/)

### Paths

- [e2e app](./apps/posts-app-e2e/)

### Scripts

#### `npm start posts-app-e2e:e2e`

Runs the tests
