if (typeof jQuery == 'undefined') {
    console.log("jQuery library is not found.");
} else {
    // TODO: Add general library information/comments
    // TODO: Add grunt/gulp to the project
    var al = {

        // Default values
        title: "ALERT_TITLE",
        description: "ALERT_DESCRIPTION",
        seconds: 5,
        timer: null,
        selector: "#alBox",
        // TODO: background color and color overrides
        // TODO: context colors

        initialize: function (alert) {

            // Set the module variables if present
            this.title = alert.title || this.title;
            this.description = alert.description || this.description;
            this.seconds = alert.seconds || this.seconds;
            this.selector = alert.selector || this.selector;

            // Open the alert box
            this.render();
        },

        render: function () {
            var self = this;

            // Replace the values
            $(this.selector).find(this.selector + "-title").html(this.title);
            $(this.selector).find(this.selector + "-description").html(this.description);

            // Fade in the alert box
            $(this.selector).fadeIn();

            // If seconds isn't "infinite" set a timer to clear the box
            if (this.seconds !== "infinite") {
                this.timer = setInterval(function () {
                    self.clear();
                }, this.seconds * 1000);
            }
        },

        clear: function () {
            this.cancelTimer();
            $(this.selector).fadeOut('slow');
        },

        cancelTimer: function () {
            clearInterval(this.timer);
            this.timer = null;
        }

    };
}

$(document).on("click", "#alBox-dismiss", function(e) {
    e.preventDefault();
    al.clear();
});

$(document).on("click", "#alBox", function(e) {
    e.preventDefault();
    if(!$(e.target).is('#alBox-panel')
        && !$(e.target).is('#alBox-title')
        && !$(e.target).is('#alBox-description')) {

        // Clear the alert box
        al.clear();
    }
});