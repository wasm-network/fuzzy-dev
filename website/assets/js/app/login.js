/// Javascript for login page
FZD.Auth = {
    status: "",
    eth_address: "",
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
    /// Called when connect page is loaded
    connect_page: function() {
        const provider = window.web3.currentProvider;
        const web3 = new Web3(provider);
        if (typeof (web3) === "undefined") {
            FZD.log("web3 is undefined. Metamask not installed?");
            return;
        }
        document.getElementById("connect-btn1").classList.add("d-none");
        document.getElementById("connect-btn1-ok").classList.remove("d-none");

        // const accounts = await web3.eth.getAccounts();
        web3.eth.getAccounts(function(err,res){
            if (!err) {
                var address = res;
                FZD.log("ETH address: " + res);
                FZD.Auth.eth_address = address;
                if (address.length == 0) {
                    // Metamask installed but not logged in.
                    document.getElementById("connect-btn2").classList.remove("d-none");
                    document.getElementById("connect-btn3-ok").classList.remove("d-none");
                } else {
                    document.getElementById("connect-btn2-ok").classList.remove("d-none");
                    document.getElementById("connect-btn3").classList.remove("btn-secondary");
                    // document.getElementById("connect-btn3").classList.add("btn-secondary");
                }
                FZD.Auth.authAPI.get("/check?id=" + addr)
                .then(function (response) {
                    FZD.log("Result: " + response.data.result);
                    let result = response.data.result;
                    if (result) {
                        FZD.log("Hey you have an account already!");
                        let data = response.data.data;
                        if (data != null) {
                            document.getElementById("connect-btn3-ok").classList.remove("d-none");
                            FZD.log("You have data. Let's use it");
                            // Redirect to /home
                        }
                    } else {
                        FZD.log("You don't have an account.");
                        document.getElementById("connect-btn3").classList.remove("d-none");
                        // document.getElementById("connect-btn3-ok").classList.remove("d-none");

                    }
                });

            } else {
                FZD.log("No account. Redirect to connect");

            }
       });
    },
    /// Called when metamask page is loaded
    metamask_page: function(addr) {
        window.location = "/login/metamask";
    },
    /// Called when scan page is loaded.
    /// User eth_address must be acquired already
    scan_page: function() {
        if (FZD.Auth.eth_address.length == 0) {
            FZD.log("Eth address not set. Redirect to connect page");
            document.getElementById("scan-panel").style.display = "none";
            document.getElementById("no-scan").style.display = "block";
            // window.location = "/login/connect";
        } else {
            FZD.Auth.authAPI.get("/generate?id=" + FZD.Auth.eth_address)
            .then(function (response) {
                // FZD.log("Result: " + response.data.result);
                // let result = response.data.result;
                // if (result) {
                //     FZD.log("Hey you have an account already!");
                //     let data = response.data.data;
                //     if (data != null) {
                //         FZD.log("You have data. Let's use it");
                //         window.location = "/home";
                //     }
                // } else {
                //     FZD.log("You don't have an account.");
                //     window.location = "/login/connect";
                // }
            });
        }
    },
    setup: function() {
        FZD.log("setup");
        // document.getElementById("authSubmitButton").onclick = FZD.Auth.submit();
        const provider = window.web3.currentProvider;
        const web3 = new Web3(provider);
        if (typeof (web3) === "undefined") {
            FZD.log("web3 is undefined");
            // Redirect to metamask
            window.location = "/login/connect";
        }
        // const accounts = await web3.eth.getAccounts();
        web3.eth.getAccounts(function(err,res){
            if (err) {
                FZD.log("No account. Redirect to connect");
                window.location = "/login/connect";
            } else {
                var address = res;
                FZD.log(address);

                // Allow user to continue

                // FZD.Auth.checkAccount(address);
                // Redirect to web3
                // window.location = "/login/wallet";

            }
       });
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