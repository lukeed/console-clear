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

Note that, on Windows, this may be the *only* behavior available, as ANSI control sequences (such as the one used to clear the scrollback buffer) are [only handled by *very* recent versions of the native Windows console host][2016].

[2016]: http://www.nivot.org/blog/post/2016/02/04/Windows-10-TH2-(v1511)-Console-Host-Enhancements

## License

MIT © [Luke Edwards](https://lukeed.com)
