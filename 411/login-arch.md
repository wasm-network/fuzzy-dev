# Login Architecture


## Files

**Relevant Files**

* /content/login/_index.md (and other markdown files)
* /layouts/login/login.html
* /layouts/login/baseof.html
* /layouts/login/single.html
* /assets/js/app/login.js
* /assets/scss/pages/all/_login.scss

### Markdown files

The /content/login contains several markdown files that each correspond to URL paths in the browser. The base page is defined in _index.md, which maps to the /login url path. This is a Hugo convention for defining the "index page" of a section. The other files automatically generate static html pages for the same names. That is, "/login/connect.md" defines a url at /login/connect. 

### login.html

The login.html file is an html file found in /layouts/login. Hugo will use this file for the /login url path to present the so-called index page, which uses metadata in the \_index.md file noted above. The existence of this file overrides any section.html or list.html template found in /layouts/_default. In the case of the Fuzzy site, this file serves as a landing page for anything related to Login functionality. 

### single.html

The file /layouts/login/single.html is the template used for any other page in the /login path. Each markdown file in the /content/login directory is generated using this template. In this file, you will see a large section of if-elseif code that uses Hugo's scripting language. Each condition in this script maps to a url path starting with /login. Hence, the html for each section is what is used for each login page. 

	{{ if eq .RelPermalink "/login/connect/" }}
	
	
### baseof.html

This is also another template file that is generically used for every page in the /login section. Near the end of the file, there is a block of javascript that runs when the page loads. Each page in the /login section needs its own javascript logic, so it checks the url path and determines the javascript to load. 

Also note that there is bracketed code that tells Hugo to load javascript.html from /layouts/partials, which contains the javascript includes for app.js and login.js. The login.js file contains all of the functions that start with FZD.Auth

## Javascript functions

This section describes some of the important javascript functions that are used in each /login page.

### login 

> FZD.Auth.setup()

This is the generic 

> FZD.Auth.fetchQR()





### login/connect



	