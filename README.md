# cypress-mutation-example
> Mutation testing example using Cypress

Mutation testing using [Stryker](https://stryker-mutator.io/)

Currently blocked by [#2572](https://github.com/stryker-mutator/stryker/issues/2572): JSX parsing

```
$ npm run test:mutations

> cypress-mutation-example@1.0.0 test:mutations /Users/gleb/git/cypress-mutation-example
> stryker run

18:40:47 (22628) INFO ConfigReader Using stryker.conf.js
18:40:47 (22628) INFO InputFileResolver Found 1 of 21 file(s) to be mutated.
18:40:47 (22628) ERROR Stryker SyntaxError: /Users/gleb/git/cypress-mutation-example/src/index.js: Support for the experimental syntax 'jsx' isn't currently enabled (5:17):

  3 | import App from './App.jsx'
  4 |
> 5 | ReactDOM.render(<App />, document.getElementById('root'))
    |                 ^
  6 |
```
