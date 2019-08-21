# Website Dev

## Running localhost

Note: These instructions have only been validated on MacOS and should work with Linux, with some changes. 

### Setup

Is this needed?
* Install webpack and CLI: (Guide)[https://webpack.js.org/guides/installation/]


### hugo-webpack

This directory is a copy of the original repo: [https://github.com/wiamsuri/hugo-webpack]. It provides webpack services to Hugo, which is a static site generator and does not use `npm` to host the site.

* npm install --save web3@1.2.0 web3-utils@1.2.0
* npm install --save-dev copy-webpack-plugin webpack webpack-cli webpack-dev-server

* Uncaught SyntaxError: Cannot use import statement outside a module

``` ./run.sh ```

### website directory

The website directory contains files for generating a static website using the Hugo framework. 


### mitmproxy

The website also requires access to remote web services via REST apis. When developing on localhost, the browser prevents those calls because they do not conform to the CORS security model. To get around this, we installed mitmproxy following (this guide)[https://medium.com/@iaincollins/calling-https-urls-from-http-localhost-8bd4e976edfe] along with other information. 

In the /scripts directory, you can run the `proxy.sh` script to start up mitmproxy using the `cors.py` and `pf.conf` file. Essentially, this forwards all requests on port 5000 to the specified Cloudflare server on workers.dev. This information is subject to change.



