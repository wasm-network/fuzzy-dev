/// Javascript for login page
FZD.Auth = {
    status: "",
    setup: function() {
        console.log("setup");

    },
    submit: function() {
		var tz = new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1];
        console.log("submit");
    }
};