import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'z5ucfdgg',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-05-03', 
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source);
