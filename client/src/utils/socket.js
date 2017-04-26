import io from 'socket.io-client';
import { sendMessage, joinChatroom, leaveChatroom, updateUsersCounter } from '../actions/chatroomActions';
import { addBet, finishRound, refreshHistory, joinRoulette, startRoll, startRound, refreshTotalBets } from '../actions/rouletteActions';
import store from '../store';

class Socket {
  constructor(url = window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://chatretube.herokuapp.com' ) {
    this._url = url;
    this.socket = null;
  }

  connect() {
    if (!this.socket) {
      this.socket = io.connect(this._url);

      this.socket.on('connect', () => {

      });

      this.socket.on('reconnect', () => {

      });

      this.applyCustomEvents();

    } else if (this.socket && !this.socket.connected) {
      this.socket = this.socket.io.connect(this._url);
    }
  }

  applyCustomEvents() {
    this.socket.on('message', function (message) {
      store.dispatch(sendMessage(message));
    });

    this.socket.on('history rolls', function (historyRolls) {
      store.dispatch(refreshHistory(historyRolls));
    });

    this.socket.on('join chatroom', function (data) {
      store.dispatch(joinChatroom(data.user));
      store.dispatch(updateUsersCounter(data.counter));
    });

    this.socket.on('leave chatroom', function (data) {
      store.dispatch(leaveChatroom(data.user._id));
      store.dispatch(updateUsersCounter(data.counter));
    });



    this.socket.on('join roulette', function (round) {
      store.dispatch(joinRoulette(round));
    });

    this.socket.on('start round', function (round) {
      store.dispatch(startRound(round));
    });

    this.socket.on('start roll', function (number) {
      store.dispatch(startRoll(number));
    });

    this.socket.on('add bet', function (data) {
      console.log('socket clietn: ', data.bet);
      store.dispatch(addBet(data.bet));
      // store.dispatch(refreshTotalBets(data.totalBets));
      // store.dispatch(refreshBalance(data.balance));
    });
  }

  emit(...params) {
    if (this.socket) this.socket.emit.apply(this.socket, params);
  }
}

const socket = new Socket();

export default socket;
