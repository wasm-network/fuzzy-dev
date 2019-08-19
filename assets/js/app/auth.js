/// Javascript for login page
FZD.Auth = {
    status: "",
    instance: axios.create({
        baseURL: "http://127.0.0.1:5000/",
        timeout: 1000
    }),
    setup: function() {
        console.log("setup");
        // document.getElementById("authSubmitButton").onclick = FZD.Auth.submit();
    },
    submit: function() {
        var tz = new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1];
        FZD.log(tz);
        FZD.Auth.instance.get("/create?acct=888888888XXX")
        .then(function (response) {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        });
        return false;
    }
};