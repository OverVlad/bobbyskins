const initialState = {
  auth: {
    isAuthenticated: false,
    error: null
  },
  user: {
    id: '',
    username: '',
    avatar: '',
    role: '',
    balance: 1000000
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
  roulette: {
    isRoll: false,
    done: false,
    round: {
      id: '',
      roll: '',
      totalBets: {
        'odd': {
          people: 0,
          count: 0,
          bets: []
        },
        '1-7': {
          people: 0,
          count: 0,
          bets: []
        },
        '0': {
          people: 0,
          count: 0,
          bets: []
        },
        '8-14': {
          people: 0,
          count: 0,
          bets: []
        },
        'even': {
          people: 0,
          count: 0,
          bets: []
        }
      },
      ownBets: {
        'odd': 0,
        '1-7': 0,
        '0': 0,
        '8-14': 0,
        'even': 0
      },

      startTime: ''
    },
    historyRolls: []
  }
};

export default initialState;
