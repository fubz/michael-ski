import axios from 'axios'
axios.defaults.baseURL = 'https://site-api.datocms.com'
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.API_TOKEN}`;
axios.defaults.headers.post['Accept'] = 'application/json';

const postsUrl = `/items?filter[type]=17345`

export default {
  siteRoot: 'https://michael.ski', // Optional, but necessary for the sitemap.xml

  getSiteProps: () => ({
    title: 'Michael Ski',
  }),

  getRoutes: async () => {
    const response = await axios.get(postsUrl)
    console.log('posts response', response.data)
    const posts = response.data.data
    console.log('what is', Object.keys(posts))
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getProps: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getProps: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },

  // webpack: [(config, {defaultLoaders}) => {
  //   // console.log('current webpack config:', JSON.stringify(config))
  //   // config.devServer = {...config.devServer, inline: false}
  //   // config.devtool = 'cheap-module-source-map'
  //
  //
  //   config.module.rules = [{
  //     oneOf: [
  //       { test: /\.(js|jsx)$/,
  //         loader: 'babel-loader',
  //         exclude: /node_modules/
  //       },
  //       defaultLoaders.cssLoader,
  //       defaultLoaders.fileLoader,
  //     ]
  //   }]
  //
  //   return config
  // },
  //   config => {
  //     console.log('webpack config:', JSON.stringify(config.module)) // Log out the final set of rules
  //   }
  // ]
}
