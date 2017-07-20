# console-clear

> Clear the console, cross-platform


## Install

```
$ npm install --save console-clear
```


## Usage

```js
const clear = require('console-clear');

clear(true);
//=> allow scrollback

clear();
//=> no scrollback, if supported
```


## API

### clear(keepHistory)

#### keepHistory

Type: `boolean`<br>
Default: `false`

Clears the console, but keeps the scrollback history intact.

> **For Windows:** This is the default & _only_ behavior.


## License

MIT © [Luke Edwards](https://lukeed.com)
