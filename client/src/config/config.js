const config = {
  baseUrl: '/api',
  localStorageKeys: ['user'],
  routes: ['/', '/auth', '/scenesList', '/scene/:id'],
  components: [],
  auth: {
    routes: ['auth'],
    onSuccessRoute: '',
  },
  resources: [
    {
      name: 'users',
      fields: [
        { name: 'name', type: 'string' },
        { name: 'id', type: 'string' },
      ],
    },
    {
      name: 'scenes',
      fields: [{ name: 'title', type: 'string' }],
    },
  ],
  states: {},
}

export default config
