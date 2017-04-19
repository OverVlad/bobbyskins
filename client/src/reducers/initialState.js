const initialState = {
  auth: {
    isAuthenticated: false,
    error: null
  },
  user: {
    id: '',
    username: '',
    avatar: '',
    role: ''
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
      bets: [],
      roll: '',
      totalBets: [],
      startTime: ''
    },
    historyRolls: []
  }
};

export default initialState;
