if (typeof jQuery == 'undefined') {
    console.log("jQuery library is not found.");
} else {

    // TODO: Add general library information/comments
    // TODO: Add grunt/gulp to the project
    (function($) {

        var timer = null;

        $.fn.al = function(options) {

            // Define defaults
            var defaults = {
                title: "ALERT_TITLE",
                description: "ALERT_DESCRIPTION",
                seconds: 5
            };

            // Build settings, merging defaults and options
            var settings = $.extend( {}, defaults, options );

            // Build the alBoxPanel
            var html  = '<div id="alBox-panel">';
                html += '<span id="alBox-title"></span>';
                html += '<span id="alBox-description"></span>';
                html += '<hr />';
                html += '<button id="alBox-dismiss">Dismiss</button>';
                html += '</div>';

            // Place into DOM
            this.html(html);

            // Add the click handler for the dismiss button
            $("#alBox-dismiss").click(clearAl);

            $("#alBox").click(dismiss);

            // Replace the values
            this.find("#alBox-title").html(settings.title);
            this.find("#alBox-description").html(settings.description);

            // Fade in the alert box
            this.fadeIn();

            // If seconds isn't "infinite" set a timer to clear the box
            if (settings.seconds !== "infinite") {
                timer = setInterval(function () {
                    clearTimeout(timer);
                    clearAl();
                    timer = null;
                }, settings.seconds * 1000);
            }

            // Preserve chaining
            return this;
        };

        /**
         * Dismiss only if the panel, title, description not part of the click event
         * @param e: event
         */
        function dismiss(e) {
            e.preventDefault();
            if(!$(e.target).is('#alBox-panel')
                && !$(e.target).is('#alBox-title')
                && !$(e.target).is('#alBox-description')) {

                // Clear the alert box
                clearAl();
            }
        }

        /**
         * Function that will fade the alert out and remove the HTML structure from the container
         */
        function clearAl() {
            clearInterval(timer);
            $("#alBox").fadeOut();
            $("#alBox").html('');
        }

    }(jQuery));
}