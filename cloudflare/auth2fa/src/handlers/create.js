/**
The /generate request takes the acct parameter and then
– creates a secret key
– stores in the Cloudflare KV database
–
 */
const Speakeasy = require("speakeasy");

export default async request => {
    try {
        let url = new URL(request.url)
        let params = url.searchParams;
        let account = params.get('acct').trim();
        // if (account == null) {
        //     return new Response("No acct provided")
        // }

        var secret = Speakeasy.generateSecret();
        // const value = await myNamespace.get(key)
        await FZData.put(account, secret.base32);
        return new Response(
        JSON.stringify({
            secret, account
        }),
        { headers: { 'Content-type': 'application/json' } },
        )
    } catch (err) {
        return new Response(err)
    }
}
