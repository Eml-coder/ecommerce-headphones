//for the sanity client
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
export const client = sanityClient({
    projectId: 'xp7ented',
    dataset: 'production',
    apiVersion: '2022-03-10',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_TOKEN

})
//To access url's of stored images
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);