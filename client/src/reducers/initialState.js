const initialState = {
  auth: {
    isAuthenticated: false,
    error: null
  },
  user: {
    id: 1,
    username: 'Vlad',
    avatar: '"http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/b5/b5e1535a97051598fbe25906a052188ba88920e1_full.jpg',
    role: 'user'
  },
  rooms: {
    visibilityFilter: 'all',
    list: [],
    count: 0,
    done: false,
    isLoading: false,
    error: null
  },
  chatroom: {
    id: '',
    name: '',
    messages: [],
    users: [],
    done: false,
    isLoading: false,
    error: null,
    counter: ''
  },
};

export default initialState;
