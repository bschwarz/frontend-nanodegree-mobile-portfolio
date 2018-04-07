
frontend-nanodegree-mobile-portfolio
===============================
-----------
## Description

This is a project from the Udacity Front-End Web Developer nanodegree.  This project focused on optimizing an existing web site. The overall goals were two-fold:
1. Optimize PageSpeed Insights score for index.html - this involves making improvements with the Critical Rendering Path (CRP). Needs to be a PageSpeed score above 90.
2. Optimize Frames Per Second in pizza.html - this involves stabilizing the Frames Per Second (FPS) to 60 fps in pizza.html while scrolling, as well as improving the time to re-size the pizzas to below 5ms. Comments in views/js/main.js are present and effectively explain longer code procedures. 

-----------
## How to Load the website

You can load the website in two ways:
1. From this GitHub pages - open the [website](https://bschwarz.github.io/frontend-nanodegree-mobile-portfolio/).
2. Download the [repo](https://github.com/bschwarz/frontend-nanodegree-mobile-portfolio) locally - You can either download a zip file from the repo or you can clone the repo onto your local machine. Once downloaded on your local machine, you can do one of two things to view:
-- Open the *index.html* file that is in the root directory of the repo, with a browser (i.e. Chrome, Firefox).
-- Host the files through a local web server, and use your browser to navigate to the local web server. For example, if you have python installed, you can run this command in the root of the repo directory to serve the files: 

      ```
      python -m SimpleHTTPServer 8080 # assuming port 8080 is not used already.
      ```

   Then you can navigate your browser to *localhost:8080*

-------------
## Part 1

### Optimizations
-   Minified CSS with ```htmlmin``` to reduce file size
-   Minified JS with ```uglify-js``` to reduce file size
-   Inlined css to avoid another round trip with ```inline-css```
-   Added ```async``` to *analytics.js* to stop blocking
-   Moved javascript to end of body to stop blocking
-   Reduced size of all images using ```convert``` on the command line to reduce file size
-   removed Google web fonts
-   Added ```media=“print”``` to *print.css* link

### Page Speed Insights Results:

[index.html Page Speed Insight analysis]( https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fbschwarz.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F) 
<br/>
[pizza.html Page Speed Insight analysis](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fbschwarz.github.io%2Ffrontend-nanodegree-mobile-portfolio%2Fviews%2Fpizza.html)
    

<table>
	 <caption align="center"><b>Optimization Summary<b></caption>
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

### Optimizations
- Based on dev tools, saw that changePizzaSizes was taking a long time to resize all pizzas. The problem was that the size of each element was being calculated for each loop iteration, when the size is the same for all pizzas. So, took calculation out of loop, and the time to resize got reduced significantly.

	**Old Timing**
	```
	Time to resize pizzas: 108.80000004544854ms  main.js:465 
	Time to resize pizzas: 110.7999999076128ms   main.js:465 
	Time to resize pizzas: 82.00000005215406ms   main.js:465
	```

	**New Timing**
	```
	Time to resize pizzas: 2.800000016577542ms   main.js:470 
	Time to resize pizzas: 2.300000051036477ms   main.js:470
    Time to resize pizzas: 2.3999999975785613ms  main.js:470
    ```

- Based on dev tools, saw that the FPS were low. Since the scroll event triggered the function updatePositions, modified that function to perform better. 
	1. First took the scrollTop calculation out of loop, since only need once
	2. implemented requestAnimationFrame based on course discussion about allowing for smoother FPS

	The FPS went up from around ~20 FPS to about ~60 FPS

-------
## Build Automation
Used Gulp to automate the building and common tasks of the website. Includes the following:
- minification of javascript using ```uglify```
- minification of HTML and CSS using ```htmlmin```
- inlining CSS using ```inline source```
- Javascript linting using ```jshint```
- CSS linting using ```csslint```
- moves all assets under the ```dist/``` directory

Gulp dependencies are in the ```package.json``` file
To generate distribution, run the following in the root directory of the repo

Install Dependencies
```
npm install
```

Generate Distribution
```
gulp main
```
You can run individual tasks by replacing ```main``` with either ```html```, ```css```,```js``` or ```img```
The resulting files for distribution will be in the ```dist/``` directoy

-------
## Resources
+ [Google Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/) - tool to measure web page performance
+ [convert](https://www.imagemagick.org/script/convert.php) - CLI tool to resize and optimize images
+ [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks)
+ [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/)
+ [gulp](https://gulpjs.com/) - build/task tool to automate common tasks (i.e. minifications, inlining)
+ [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin) - tool to minimize the HTML and CSS
+ [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) - tool to minimize the Javascript files
+ [gulp-inline-source](https://www.npmjs.com/package/gulp-inline-source) - Tools to inline CSS into the HTML page from gulp
+ [gulp-csslint](https://www.npmjs.com/package/gulp-csslint) - tool to check syntax of CSS from Gulp
+ [gulp-jshint](https://www.npmjs.com/package/gulp-jshint) - tool to check syntax of javascript files from Gulp


-------
## License

This project is licensed under the terms of the MIT license. (See LICENSE.md)

Copyright (c) 2018 Brett Schwarz