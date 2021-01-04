# cypress-mutation-example
> Mutation testing example using Cypress

Mutation testing using [Stryker](https://stryker-mutator.io/)

## Install

After cloning this repo

```shell
npm install
```

## Run mutation tests

```shell
npm run test:mutations
```

## Troubleshooting

<details>
<summary>Stryker does not understand JSX</summary>
If the Stryker complains about JSX in the source files, create `.babelrc` file to transpile it

```json
{
  "presets": [
    "@babel/preset-react"
  ]
}
```
Issue [#2572](https://github.com/stryker-mutator/stryker/issues/2572)
</details>

<details>
<summary>ESLint fails after Stryker mutates the code</summary>
Sometimes Stryker can mutate the code causing the ESLint to trip. One example could be Stryker inserting its counters before the `import` statements in the source files. The solution is to disable ESLint while running the mutation tests. In your `.env` file set
```
EXTEND_ESLINT=true
```

and in your ESLint configuration (for example in the `package.json`) use
```json
{
  "eslintConfig": {
    "extends": "react-app",
    "rules": {
      "import/first": "warn"
    }
  }
}
```
</details>
