/**
The /generate request takes the acct parameter and then
– creates a secret key
– stores in the Cloudflare KV database
–
Docs:
https://github.com/speakeasyjs/speakeasy
https://www.npmjs.com/package/qr-image

 */
const qr = require('qr-image')
const Speakeasy = require("speakeasy");

export default async request => {
    try {
        let url = new URL(request.url);
        let params = url.searchParams;
        let addr = params.get('id').trim();
        var options = {length: 32, name: 'Fuzzy Dice'};
        var secret = Speakeasy.generateSecret(options);

        await FZData.put(addr, secret.base32);
        const headers = { 'Content-Type': 'image/png' };
        const qr_png = qr.imageSync( secret.base32 );
        return new Response(qr_png, { headers });
    } catch (err) {
        return new Response(err)
    }
}
