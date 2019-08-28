/// Javascript for login page
FZD.Auth = {
    status: "",
    eth_address: "",
    authAPI: axios.create({
        baseURL: "http://127.0.0.1:5000/",
        timeout: 1000
    }),
    checkWeb3: function (callback) {
        const provider = window.web3.currentProvider;
        const web3 = new Web3(provider);
        // export const web3 = new Web3(window.web3.currentProvider);
        // FZD.log(provider);
        // var web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
        // web3.setProvider('ws://localhost:7545');
        var ok1 = false;
        var ok2 = false;
        var ok3 = false;

        if (typeof (web3) === "undefined") {
            FZD.log("web3 is undefined. Metamask not installed?");
            callback(ok1, ok2, ok3);
            return;
        }
        ok1 = true;
        if (ok1) {
            // web3.eth.getAccounts().then(console.log);
            web3.eth.getAccounts(console.log);
            web3.eth.getAccounts(function (res) {
                FZD.log("ETH address: " + res);
                if (res != null) {
                    var address = res;
                    FZD.Auth.eth_address = address;
                    ok2 = true;
                    FZD.Auth.authAPI.get("/check?id=" + FZD.Auth.eth_address)
                        .then(function (response) {
                            FZD.log("Result: " + response.data.result);
                            let result = response.data.result;
                            if (result) {
                                FZD.log("Hey you have an account already!");
                                ok3 = true;
                                callback(ok1, ok2, ok3);
                            } else {
                                FZD.log("You don't have an account.");
                            }
                        });
                } else {
                    FZD.log("Address not found");
                    callback(ok1, ok2, ok3);
                }
            });
        }
    },
    /// Called when connect page is loaded
    connect_page: function () {
        this.checkWeb3(function (ok1, ok2, ok3) {
            FZD.log("ok1={0} / ok2={1} / ok3={2}".format(ok1, ok2, ok3));
            FZD.Auth.handleButtonState("connect-btn1", ok1);
            FZD.Auth.handleButtonState("connect-btn2", ok2);
            FZD.Auth.handleButtonState("connect-btn3", ok3);
        });

        // const accounts = await web3.eth.getAccounts();
    },
    handleButtonState: function (baseId, isOk) {
        okId = baseId + "-ok";
        if (isOk) {
            document.getElementById(baseId).style.display = "none";
            document.getElementById(okId).style.display = "block";
        } else {
            document.getElementById(baseId).style.display = "block";
            document.getElementById(okId).style.display = "none";
        }
    },
    /// Called when metamask page is loaded
    metamask_page: function (addr) {
        window.location = "/login/metamask";
    },
    /// Called when scan page is loaded.
    /// User eth_address must be acquired already
    scan_page: function () {
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
    setup: function () {
        FZD.log("setup");
        // document.getElementById("authSubmitButton").onclick = FZD.Auth.submit();
        const provider = window.web3.currentProvider;
        const web3 = new Web3(provider);
        if (typeof (web3) === "undefined") {
            FZD.log("web3 is undefined");
            // Redirect to metamask
            window.location = "/login/connect";
        }
        web3.eth.getAccounts(console.log);
        // const accounts = await web3.eth.getAccounts();
        //     web3.eth.getAccounts(function(err,res){
        //         if (err) {
        //             FZD.log("No account. Redirect to connect");
        //             window.location = "/login/connect";
        //         } else {
        //             var address = res;
        //             FZD.log(address);

        //             // Allow user to continue

        //             // FZD.Auth.checkAccount(address);
        //             // Redirect to web3
        //             // window.location = "/login/wallet";

        //         }
        //    });
    },
    submit: function () {
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