# totalVue
This is a combination of [total.js](https://www.totaljs.com/) and [vue.js](http://vuejs.org/), all of them are fantastic. Yes, nothing new.

# dependencies
- total.js 1.9.0
- Vue.js 0.12.9

# also with 
- vue-loader
- webpack
- gulp

# To run

    gulp

    node debug.js

# Known problem
As the source code of vue.js hardly has no ";" at end of each line, and there is a built-in JS compressor in total.js, so there'll be a problem when deploy your service after webpack it, the JS code in one line without semi-colon, and the browser will be blocked. To solve this, I avoid using the JS compressor in total.js by changing the source file(total.js/internal.js), you can use(clone/pull) this repository directly, or "npm install" your packages and change it yourself.

# License

MIT

# Contact

CCharlieli@live.com