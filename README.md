
frontend-nanodegree-arcade-game
===============================

Description
-----------

This is a project from the Udacity Front-End Web Developer nanodegree.  This project focused on optimizing an existing web site. The overall goals were two-fold:
1. Optimize PageSpeed Insights score for index.html - this involves making improvements with the Critical Rendering Path (CRP).
2. Optimize Frames Per Second in pizza.html - this involves stabilizing the Frames Per Second (FPS) to 60 fps in pizza.html, as well as improving the time to scroll the pizzas to below 5ms.

How to Load the website
-----------------------
You can load the website in two ways:
1. From this GitHub repo - Click [here](https://bschwarz.github.io/frontend-nanodegree-mobile-portfolio/) to open the website.
2. Download repo locally - You can either download a zip file from the repo (Link from #1) or you can clone the repo onto your local machine. Once downloaded on your local machine, you can do one of two things to view:
-- Open the *index.html* file that is in the root directory of the repo, with a browser (i.e. Chrome, Firefox).
-- Host the files through a local web server, and use your browser to navigate to the local web server. For example, if you have python installed, you can run this command in the root of the repo directory to serve the files: 

      ```
      python -m SimpleHTTPServer 8080 # assuming port 8080 is not used
      ```

   Then you can navigate your browser to *localhost:8080*


Part 1
-------------
### Optimizations
-   Minified CSS with ```csso``` to reduce file size
-   Minified JS with ```uglify-js``` to reduce file size
-   Inlined css to avoid another round trip
-   Added ```async``` to *analytics.js* to stop blocking
-   Moved javascript to end of body to stop blocking
-   Reduced size of all images using ```convert``` on the command line to reduce file size
-   removed Google web fonts
-   Added ```media=“print”``` to *print.css* link

### Page Speed Insights Results:


| Page        | Mobile           | Desktop  |
|------------- |:-------------:| -----:|
|[index.html]( https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fbschwarz.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F) <sup>1</sup>     | 99 | 90 |
| [pizza.html](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fbschwarz.github.io%2Ffrontend-nanodegree-mobile-portfolio%2Fviews%2Fpizza.html)       | 89      |   96 |
    
<sup>1</sup>pizza wasn't required, but I optimized CRP for pizza.html as well


Part 2
--------

License
-------
This project is licensed under the terms of the MIT license. (See LICENSE.md)

Copyright (c) 2018 Brett Schwarz