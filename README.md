# Test Smartick fractions

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```


### Description of project

This project is an entrance test for a front-end developer position at SmarTick. This is a fractions video game for kids with which they can learn math in an interactive and fun way.
Developer project with Vue.js 3 that includes external libraries from different authors, mentioned in the final section.


### Semantic Commit Messages

This commit semantics is a personal implementation based on git flow:

- FEAT: (new feature for the user and build script)
- FIX: (bug fix for the user and build script)
- DOCS: (changes to the documentation readme)
- STYLE: (styles, create/change classes names, formatting, missing semicolons, spaces in blanc, etc...)
- REFACTOR: (refactoring production/develop code, for example; renaming a variable)
- TEST: (adding missing tests, refactoring tests; no production code change)
- RELEASE: version closure (component, section or project)


### Conclusion and points to consider

It has been quite an adventure to be able to develop this little interactive fraction game for children and I am very happy with the final result. It has been many hours of work, but I would certainly do it again.
The following points are worth noting:

    1) - Minimum accepted resolution:

        To ensure a smooth experience and to be able to view the project on most screens, it is recommended not to go below 380px resolution.

    2) - Componetization and atomic design:

        I built the game view in a more scalable way, taking full advantage of atomic design. 

    3) - Repetition error in sound effects when add of delete numerator or denominator:

        If we add consecutively and quickly either of these two elements, the sound suffers a delay because the pulsing is faster than the sounds load. 


### Technologies/methodologies used

- BEM
- SASS
- Bootstrap
- Vue-router
- Lazy Loading
- Desktop first
- Atomic design
- Composition API
- Options API


### Libraries and external docs

```
bootstrap
Author: Bootstrap
```

```
@popperjs/core
Author: Floating UI
```

```
vue-router
Author: Vuejs
```

```
sass and dart-sass
Author: Sass
```

```
sass-loader
Author: Webpack-contrib
```
