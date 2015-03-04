// Check if jQuery exists. If not, you're kinda up a creek. :)
if (typeof jQuery != 'undefined') {

    var al = {

        // Default values
        title: "ALERT_TITLE",
        description: "ALERT_DESCRIPTION",
        seconds: 5,
        selector: "#alBox",

        initialize : function (alert) {

            // Set the module variables if present
            this.title = alert.title || this.title;
            this.description = alert.description || this.description;
            this.seconds = alert.seconds || this.seconds;
            this.selector = alert.selector || this.selector;

            // Open the alert box
            this.open();
        },

        open : function () {
            $(this.selector).fadeIn();
        },

        close : function () {

        }

    };
}
else {
	console.log("jQuery library is not found.");
}