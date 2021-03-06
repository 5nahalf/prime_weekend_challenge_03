
##RESTful Web Services
REST defines a set of architectural principles by which you can design Web services that focus on a system's resources, including how resource states are addressed and transferred over HTTP by a wide range of clients written in different languages.

There are many aspects to REST, but I want to explicitly cover the 4 verbs to Use HTTP methods explicitly:

To create a resource on the server, use POST.
To retrieve a resource, use GET.
To change the state of a resource or to update it, use PUT.
To remove or delete a resource, use DELETE.

##Ajax

Traditionally websites could only load data when a user refreshed a page, or made a new request such as submitting a form, or navigating to a new page.

This was slow and cumbersome because it required user input. It was also inefficient because ideally a web server should only have to send new data, not the entire page, css, scripts, etc. For example, just the search results for your games. 

By 2003, all the major browsers solved this issue by adopting the XMLHttpRequest (XHR) object, allowing browsers to communicate with the server without requiring a page reload.

The XMLHttpRequest object is part of a technology called Ajax (Asynchronous JavaScript and XML). 

Using Ajax, data could then be passed between the browser and the server, using the XMLHttpRequest API, without having to reload the web page.

Ajax along with RESTful services allow you to POST, GET, PUT and DELETE data asynchronously.  gThink of gmail which continuously loads new messages without you having to refresh, or google maps which loads new tiles as you scroll around.

##ASYNC

Asynchronous simply means “not at the same time”. 

But it’s a broader concept that describes a timing protocol in which a specific operation begins upon receipt of an indication that the preceding operation has been completed.

With the limited exposure to Ajax that you’ve had, when did you think this “signal” occurred?

Ajax requests are triggered by JavaScript code; your code sends a request to a URL, and when it receives a response, a callback function can be triggered to handle the response. 

Because the request is asynchronous, the rest of your code continues to execute while the request is being processed, so it's imperative that a callback be used to handle the response.

##BROWSERS & METHODS

Different browsers implement the Ajax API differently. 

Luckily we have jQuery Ajax support that abstracts away painful browser differences so we don’t have to worry about it.

It offers both a full-featured $.ajax() method, and simple convenience methods such as $.get(), $.getScript(), $.getJSON(), $.post(), and $.load().

##JSON and JSONP

Most jQuery applications don't in fact use XML, despite the name "Ajax"; instead, they transport data as plain HTML or JSON (JavaScript Object Notation).

In general, Ajax requests are limited to the same protocol (http or https), the same port, and the same domain as the page making the request. 

*Show example 1*

JavaScript Object Notation with Padding (JSONP in short) is a way of performing cross-domain requests by exploiting the fact that script tags in HTML pages can load code coming from a different origin. 

*Show example 2*

Before we go into detail, I would like to state that it has some major issues: 
JSONP can only be used to perform Cross-Domain GET requests. 
The server (who you’re calling) must explicitly support JSONP requests. t
You should have absolute trust in the server providing JSONP responses. 
Because: JSONP could expose your website to a plethora of security vulnerabilities if the server is compromised.

TECHNICALLY JSONP IS A HACK, but it’s become a “standard” now for Ajax requests that need to be cross-origin.

##Why is it a hack?

JSONP relies on the fact that <script> tags can have sources coming from different origins. 

When the browser parses a <script> tag, it will GET the script content (residing on any origin) and execute it in the current page’s context.

*Show How script tags load whatever you point them too*

This approach requires you to completely trust the server. Cross Origin Request blocking is good. For example: The server could be compromised and return arbitrary code that will be executing in the context of your page (thus allowing access to your site’s cookies, localStorage, etc.).

##CORS

The previous example IS a hack, and the JSONP method is a legit method that was created to solve a problem, but also might leave you feeling a little queezy.

Luckily, there exists a cleaner solution: Cross-Origin Resource Sharing (or CORS in short).

*Show Example 3*

When the browser receives the response it compares the requesting origin to the origin listed in the Access-Control-Allow-Origin header. Since they match, the browser allows the response to be interpreted by code residing in the origin.

The problem is that some older browsers block even CORS, and some firewalls will block it too. 

Also, the server needs to support CORS. 

##Ajax Function Breakdown

*Show Example 4*

##Ajax Convenience Methods

The convenience methods provided by jQuery are:
```$.get```
Perform a GET request to the provided URL.
```$.post```
Perform a POST request to the provided URL.
```$.getScript```
Add a script to the page.
```$.getJSON```
Perform a GET request, and expect JSON to be returned.
Each of them take in three parameters:
**URL** the url to be retrieved. 
**Data** data to be sent to the server. Optional. 		
**Success** callback A callback function to run if the request succeeds. The function receives the response data (converted to a JavaScript object if the data type was JSON), as well as the text status of the request and the raw request object. link data type The type of data you expect back from the server. Optional.

*Show example 5*
