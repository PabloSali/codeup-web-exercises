(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
            return Math.PI * (circle.radius * circle.radius);
        },

        logInfo: function (doRounding) {
            if(doRounding === true){
                console.log(Math.round(this.getArea()))
            } else{
                console.log(this.getArea());
            }
            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
        circle.radius = 5
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
