var fs = require("fs");

fs.mkdir("lib", function() {
    
    if(err) {
        console.log(err);
    } else {
        console.log("Directory Created");
    }
});