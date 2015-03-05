##What is this?
al is a simple jQuery plugin that acts as an alerting system for your application. Rely on al to populate, show/hide, and facilitate everything involved with alerting your users.

##How do I use this?

####Include jQuery
Since this plugin is dependent on jQuery, you'll need that in your project first. You can download from [jQuery](http://jquery.com).

####Download library files
Next, download al.js and al.css into your project, and including them in your page like this:

```
<script src="jquery.js"></script>
<link rel="stylesheet" href="al.css" />
<script src="al.js"></script>
```

*It's important to note that you need to include jQuery first, without it the plugin initialization will fail.*

####HTML Structure
In order to show the alert box, you'll need to place the HTML structure on the page somewhere. That structure looks like this:

```
<div id="alBox"></div>
```

*It doesn't really matter where you place it in your page because it will be hidden on page load as long as al.css is loaded too.*

####Pop up an alert
At this point, you're ready to pop an alert up. Just make sure you call the alert **after** the al.js plugin is loaded into the page. A call looks like this:

```
$("#alBox").al({
    title: "Success!",
    description: "This is an alert demo",
    seconds: 3
});
```
*All of the options are technically optional, but will give you a customized alert.*

##Options
Here are the current options you can pass the plugin:

| Option | Type |
| ------ | ----- |
| title | string |
| description | string |
| seconds | float value |


##What else?
If you want to contribute, please fork the project and submit pull requests.