md = require('markdown-it-embed-mathjax');
md.options.html = false;

var str = "<p>Esacpe html in this example: A embeded video. ![test](./test/test.mp4) Some mathjax $1 *2* 3$";
str+="\n\nPara with a blue class{blue}";
console.log(md.render(str));
