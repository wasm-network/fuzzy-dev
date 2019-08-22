# Fuzzy Dev

This is a monorepo for various code projects that are part of the IDEO Hackathon. More documentation can be found in the
/411 directory.

## Repo contents

* 411 – This contains various markdown files with documentation
* docs – Ironically, this is not the docs directory. It is the generated html that gets served by Netlify or Github Pages
* fuzzy-web
    * website: Code for a Hugo-based website that is statically generated with webpack build integration to import Web3
    * scripts: Includes a script for running mitmproxy for localhost development to get around cross-domain security
      rules
* cloudflare
    * auth2fa: A cloudflare workers project using javascript/webpack to deploy to Cloudflare
    * sims: Coming soon


### Other docs:

* Tech diagrams: https://hackmd.io/U_D0ZzpFQPKl7FrD-bGneQ
