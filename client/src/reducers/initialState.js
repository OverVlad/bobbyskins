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
    id: '1',
    name: 'English rooms',
    messages: [],
    users: [],
    done: false,
    isLoading: false,
    error: null,
    counter: ''
  },
  roulette: {
    isRoll: false,
    round: {
      id: '1',
      bets: [],
      roll: '',
      totalBets: [],
      startTime: ''
    },
    historyRolls: []
  }
};

export default initialState;
