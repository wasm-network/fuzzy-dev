import Router from './router';
import generate from './src/handlers/generate';
import secret from './src/handlers/create';

const speakeasy = require("speakeasy");
// const qr = require('qr-image')

/**
 * Fetch and log a request
 * @param {Request} request
 */
async function handleRequest(request) {
  const r = new Router()
  r.get('/create', secret)
  r.get('/generate', generate)

  let response = await r.route(request)

  if (!response) {
    response = new Response('Not found', { status: 404 })
  }

  return response
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

// ---------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------

// Generate
function setupSecret(user, done) {
  const options = {
    issuer: `Pony Foo`,
    name: `Pony Foo (${ user.email })`,
    length: 64
  }
  const { base32, otpauth_url } = speakeasy.generateSecret(options)
  // …
}
