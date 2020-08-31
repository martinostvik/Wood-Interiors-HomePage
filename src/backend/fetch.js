import client from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)


export async function fetchLogo() {
    const query = '*[_type == "siteSettings"]'
    const result = await client.fetch(query)
    return builder.image(result[0].logo).url();
}

export async function fetchNav() {
    const query = '*[_type == "navigation"]'
    const result = await client.fetch(query)
    return result[0];
}
