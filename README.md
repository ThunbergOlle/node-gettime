# Node-Get-Time
This is an easy module that gets the current date or time of the day and outputs it in a simple way!

**Install**
```js
npm install node-get-time --save

```
**Import**
```js
    const time = require('node-get-time');
```

## Methods

```js
const time = require('node-get-time');
time.gettime(function(callback){});
```

## Examples
**You can copy and paste these!**

### Display all information
```js
const time = require('node-get-time');

time.gettime(function(time){
    console.log(time)
});
```
**Output**
```json
    {
        "dateTime": "2018/06/02 18:49:42",
        "date": "2018/06/02",
        "time": "18:49:42"
    }
```

### Make information into variables
```js
const time = require('node-get-time');

time.gettime(function(time){
    var dateandtime = time.dateTime;
    var date = time.date;
    var time = time.time;
    console.log(dateandtime);
    console.log(date);
    console.log(time);
});
```
**Output**
```
2018/06/02 19:02:22
2018/06/02
19:02:22
```

## License

Copyright (c) 2018 Olle Thunberg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE