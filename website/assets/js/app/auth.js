/// Javascript for login page
FZD.Auth = {
    status: "",
    authAPI: axios.create({
        baseURL: "http://127.0.0.1:5000/",
        timeout: 1000
    }),
    /// Call this function after Web3 account is acquired (Metamask is logged in)
    checkAccount: function(addr) {
        FZD.Auth.authAPI.get("/check?id=" + addr)
        .then(function (response) {
            FZD.log("Result: " + response.data.result);
            let result = response.data.result;
            if (result) {
                FZD.log("Hey you have an account already!");
                let data = response.data.data;
                if (data != null) {
                    FZD.log("You have data. Let's use it");
                    window.location = "/home";
                }
            } else {
                FZD.log("You don't have an account.");
                window.location = "/login/connect";
            }
        });
    },
    /// Call this function after Web3 account is acquired (Metamask is logged in)
    checkMetamask: function(addr) {
        window.location = "/login/metamask";
    },
    setup: function() {
        FZD.log("setup");
        // document.getElementById("authSubmitButton").onclick = FZD.Auth.submit();
        const provider = window.web3.currentProvider;
        const web3 = new Web3(provider);
        if (typeof (web3) === "undefined") {
            FZD.log("web3 is undefined");
            // Redirect to metamask
            window.location = "/login/metamask";
        }
        // const accounts = await web3.eth.getAccounts();
        web3.eth.getAccounts(function(err,res){
            if (!err) {
                var address = res;
                console.log(address);
                FZD.Auth.checkAccount(address);

            } else {
                FZD.log("No account. Redirect to connect");
                window.location = "/login/connect";
                // Redirect to web3
                // window.location = "/login/wallet";

            }
       });
        // FZD.log("accounts=" + accounts);
        // const account = accounts[0];
        // FZD.log(account);

    },
    submit: function() {
        var tz = new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1];
        FZD.log(tz);
        FZD.Auth.authAPI.get("/create?acct=888888888XXX")
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