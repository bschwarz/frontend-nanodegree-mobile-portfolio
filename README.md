
frontend-nanodegree-arcade-game
===============================
-----------
## Description

This is a project from the Udacity Front-End Web Developer nanodegree.  This project focused on optimizing an existing web site. The overall goals were two-fold:
1. Optimize PageSpeed Insights score for index.html - this involves making improvements with the Critical Rendering Path (CRP).
2. Optimize Frames Per Second in pizza.html - this involves stabilizing the Frames Per Second (FPS) to 60 fps in pizza.html, as well as improving the time to scroll the pizzas to below 5ms.

-----------
## How to Load the website

You can load the website in two ways:
1. From this GitHub pages - open the [website](https://bschwarz.github.io/frontend-nanodegree-mobile-portfolio/).
2. Download [repo](https://github.com/bschwarz/frontend-nanodegree-mobile-portfolio) locally - You can either download a zip file from the repo or you can clone the repo onto your local machine. Once downloaded on your local machine, you can do one of two things to view:
-- Open the *index.html* file that is in the root directory of the repo, with a browser (i.e. Chrome, Firefox).
-- Host the files through a local web server, and use your browser to navigate to the local web server. For example, if you have python installed, you can run this command in the root of the repo directory to serve the files: 

      ```
      python -m SimpleHTTPServer 8080 # assuming port 8080 is not used already.
      ```

   Then you can navigate your browser to *localhost:8080*

-------------
## Part 1

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

[index.html analysis]( https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fbschwarz.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F) 
<br/>
[pizza.html analysis](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fbschwarz.github.io%2Ffrontend-nanodegree-mobile-portfolio%2Fviews%2Fpizza.html)
    

<table>
	 <caption>Optimization Summary</caption>
  <tr>
    <th>Page</th>
    <th colspan="3">Mobile</th>
    <th colspan="3">Desktop</th>
  </tr>
  <tr>
    <td></td>
    <td>Original</td>
    <td>Optimized</td>
    <td>% Improvement</td>
    <td>Original</td>
    <td>Optimized</td>
    <td>% Improvement</td>
  </tr>
  <tr>
    <td>index.html</td>
    <td>82</td>
    <td>99</td>
    <td>21%</td>
    <td>30</td>
    <td>90</td>
    <td>200%</td>
  </tr>
  <tr>
    <td>pizza.html<sup>1</sup></td>
    <td>90</td>
    <td>89</td>
    <td>-1%</td>
    <td>30</td>
    <td>96</td>
    <td>220%</td>
  </tr>
</table>
<sup>1</sup>pizza wasn't required, but I optimized CRP for pizza.html as well



--------
## Part 2

-------
## Resources
+ [CSSO](https://github.com/css/csso-cli) - tool to minimize the CSS files
+ [uglify-js](https://github.com/mishoo/UglifyJS2) - tool to minimize the Javascript files


-------
License

This project is licensed under the terms of the MIT license. (See LICENSE.md)

Copyright (c) 2018 Brett Schwarz