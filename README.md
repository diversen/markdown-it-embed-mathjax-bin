markdown-it-embed-mathjax-bin

Install:

    npm install -g markdown-it-embed-mathjax-bin

Translate a string to a markdown-it rendered string (with option for CSS classes, mp4 embedding and mathjax): 
Reads from stdin or file(s), and outputs to stdout. 

Example with stdin from a shell: 

    echo "A test with a auto link: http://github.com/diversen"  | markdown-it-embed-mathjax-bin --linkify

Example with file(s): 
     
    markdown-it-embed-mathjax-bin README.md --linkify --html --breaks

Options are the same as markdown-it options:

    opts.boolean = ['help', 'html', 'xhtmlOut', 'breaks', 'linkify', 'typographer'];
    opts.string = ['langPrefix', 'quotes'];

Beside you can set mode: --mode=commonmark (or zero or default)

Video (like images):

    ![video test](http://techslides.com/demos/sample-videos/small.mp4)

Mathjax: 

    $1 *2* 3$

Related (API for the module)

https://github.com/diversen/markdown-it-embed-mathjax.git

@ MIT
