# Cloudflare

## Working with Cloudflare

Cloudflare is an odd beast to work with. The rationale for using Cloudflare was to experiment with a scalable, serverless infrastructure and avoid the need for complex devops. The downside is learning how to use the system. 

**Domains**

During account setup, Cloudflare will ask you to transfer your domain nameserver to their system. You can avoid it at first, but eventually you will need to do this if you want to use some of their servers. Specifically, this project requires a data store and Workers KV requires a managed domain. 

**Workers**

Cloudflare Workers is a so-called "serverless"* infrastructure environment provided by Cloudflare as part of its CDN network. A content delivery network is essentially a bunch of servers in datacenters throughout the world that are responsible for routing and making CDN content more available and performant. Workers adds the ability to write serverless functions in either Javascript or Rust, which can be accessed through URLs that you specify. 

For the Fuzzy Auth project, the QR code and 2FA verification features are handled by Cloudflare workers. The rationale in using Cloudflare Workers is to make the system highly-scalable. The alternative is to deploy a server and backend datastore and try to make it scalable. A modest number of users can easily overwhelm a single server. And scaling up from a single server to multiple servers is exponentially expensive in time and cost.

*Yes, I know that serverless is a misnomer and they really do run on some kind of server.

**Workers KV**

Workers KV is the key-value storage system of Cloudflare Workers. Data can be stored with a key and value and retrieved easily. 


### Account Setup

To start, you can create an account at https://www.cloudflare.com/. 



## auth2fa

The auth2fa codebase is a Cloudflare worker that handles creates 2FA secret keys for users and generates a QR code for the user to scan with Google Authenticator. After scanning the QR code, the user inputs the 6 digit code to complete the authentication process.

### URLs

* /create
* /login
* /generate


