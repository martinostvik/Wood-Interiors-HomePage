const sanityClient = require('@sanity/client')
const client = sanityClient({
projectId: '4wmx0ti8',
dataset: 'production',
useCdn: true // `false` if you want to ensure fresh data
})

export default client;