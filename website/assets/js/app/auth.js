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
        const provider = window.web3.currentProvider;
        const web3 = new Web3(provider);
        if (typeof (web3) !== "undefined") {
            FZD.log("web3 is defined");
        }
        // const accounts = await web3.eth.getAccounts();
        web3.eth.getAccounts(function(err,res){
            if(!err)
            {
               myAccount = res;
               console.log(myAccount);
            }
       });
        // FZD.log("accounts=" + accounts);
        // const account = accounts[0];
        // FZD.log(account);

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