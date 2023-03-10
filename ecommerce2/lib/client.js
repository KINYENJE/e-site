import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'; 

export const client = sanityClient({
    projectId: '5p8mwfun',
    dataset:'production',
    apiVersion: '2023-01-26',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN

})
    
const builder = imageUrlBuilder(client);

// export const urlFor = (source) => builder.image(source);

export const urlFor = (source) => {
    if (!source) {
      return 'https://via.placeholder.com/300x300';
    }
    return builder.image(source);
  };
  