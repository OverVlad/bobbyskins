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
    balance: 10000
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
  poker: {
    betAmount: 0,
    hand: [],
    rankWon: 0,
  },
  roulette: {
    isRoll: false,
    done: false,
    round: {
      id: '',
      roll: '',
      winTypes: '',
      startTime: '',
      totalBets: {
        'odd': {
          people: 0,
          amount: 0,
          bets: []
        },
        '1-7': {
          people: 0,
          amount: 0,
          bets: []
        },
        '0': {
          people: 0,
          amount: 0,
          bets: []
        },
        '8-14': {
          people: 0,
          amount: 0,
          bets: []
        },
        'even': {
          people: 0,
          amount: 0,
          bets: []
        }
      },
      ownBets: {
        'odd': 0,
        '1-7': 0,
        '0': 0,
        '8-14': 0,
        'even': 0
      }
    },
    historyRolls: []
  }
};

export default initialState;
