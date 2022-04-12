import sanityClient from '@sanity/client' 

export const client = sanityClient({
    projectId: 'gjudr7on',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skUtzbqwb8yw1yOpJXJsq8RFdvdKcCcWmjoQ5vTwJC4PXoDRgDUv4Zs5c5BkJ37isnY89RmeOuMpnEJebv9cgLUPD8Ev7wSCqZ22AJtjwbsFxAJHHijE008ofl4psw773AeUjCzVgjJEPNIpTzTbVqR2C2JfaserE98tfMM79clPmAFT58MS',
    useCdn: false,
})