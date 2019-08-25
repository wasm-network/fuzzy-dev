/**
The /check request requires an id parameter and performs a lookup in FZData
 */

export default async request => {
    try {
        let url = new URL(request.url);
        let params = url.searchParams;
        let addr = params.get('id').trim();

        // const value = await myNamespace.get(key)
        let data = await FZData.get(addr);
        var result = false;
        if (data != null) {
            result = true;
        }
        return new Response(
        JSON.stringify({
            result, data
        }),
        { headers: { 'Content-type': 'application/json' } },
        )
    } catch (err) {
        return new Response(err)
    }
}
