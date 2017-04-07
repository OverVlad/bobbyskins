import React, { Component } from 'react';
import Layout from 'material-ui/Layout';

import ProgressBar from './ProgressBar.jsx'
import Wheel from './Wheel.jsx'
import Balance from './Balance.jsx'
import BetBlock from './BetBlock.jsx'

class Roulette extends Component {

  constructor(props) {
    super(props);

    this.probability ={};
    this.wheel = $('#wheel');

    this.state = {
      startAngle: Math.floor(360*Math.random()),
      balance: 1000000,
      bet: {
        count: 0,
        type: ''
      }
    };

    this.progressBar = this.progressBar.bind(this);
    this.handleBetClick = this.handleBetClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addBet = this.addBet.bind(this);
    this.roll = this.roll.bind(this);
  }

  progressBar(timeleft, timetotal) {
    const $elem = $('#progress-bar');
    let progressBarWidth = timeleft * 100 / timetotal;
    $elem.find('div').width(progressBarWidth + '%');
    $('#timer').html( timeleft );
    if(timeleft > 0.00) {
      setTimeout(() => {
        this.progressBar((timeleft - 0.01).toFixed(2), timetotal);
      }, 10);
    }
    if(timeleft <= 0.00) {
      $('.banner').html('Rolling!');
      this.roll();
    }
  }

  roll() {

    this.probability.Lot = new Array (

      [0, 'green', 'green'],
      [11, 'black', 'purple'],
      [5, 'red', 'purple'],
      [10, 'black', 'blue'],
      [6, 'red', 'blue'],
      [9, 'black', 'purple'],
      [7, 'red', 'purple'],
      [8, 'black', 'blue'],
      [1, 'red', 'purple'],
      [14, 'black', 'blue'],
      [2, 'red', 'blue'],
      [13, 'black', 'purple'],
      [3, 'red', 'purple'],
      [12, 'black', 'blue'],
      [4, 'red', 'blue']

    );
    this.probability.Arr =[];
    //Вероятности выпадения;
    this.probability.green	= 20; //Вероятность красного
    this.probability.red	= 40; //Вероятность зеленого
    this.probability.black	= 40; //Вероятность синего

    for(let i = 0; i < this.probability.Lot.length; i++) {
      this.probability_rationing(this.probability.Lot[i][1], [this.probability.Lot[i], i]);
    }

    const out = this.probability.Arr[this.Peremeshivalka(this.probability.Arr.length)][0];
    const parity  = out[2];
    const number  = out[0];
    const sector = out[1];

    console.log(number, parity, sector);

    const N = this.probability.Lot.length * 3; //Число секторов
    const stRad = 360/N;	//!!!Целое число градусов!!!;
    console.log('stRad', stRad);
    const delta_random = -14 + 28 * Math.random();
    const itogCorner = 6982 + Math.floor(delta_random) - stRad * number;
    console.log('itogCorner', itogCorner);

    $('#wheel').css('transform', `rotate(${itogCorner}deg)`);
  }

  Peremeshivalka(lng) {
    let a = {};
    let i;
    let out = [];
    let n = 0;

    for(i = 0; i < lng; i++)
    a[i] = i;

    while (n != lng) {
      i = Math.floor( lng * Math.random() );

      if(typeof(a[i]) != 'undefined') {
        out.push(a[i]);
        delete a[i];

        n++;
      }
    }

    return out[Math.floor( lng * Math.random() )];
  }

  probability_rationing(y, x) {
    for(let j = 0; j < this.probability[y]; j++) {
      this.probability.Arr.push(x);
    }
  }

  handleBetClick(event) {
    event.preventDefault();

    const action = event.target.dataset.action;
    let bet = this.state.bet.count;

    switch(action) {
      case 'reset':
      bet = 0;
      break;
      case 'half':
      bet /= 2;
      break;
      case 'double':
      bet *= 2;
      break;
      case 'max':
      bet = this.state.balance;
      break;
      default:
      bet += +action;
    }

    this.setState({
      bet: {
        count: bet,
        type: this.state.bet.type
      }
    });
  }

  addBet(event) {
    const type = event.target.dataset.bet;
    event.target.disabled = true;

    console.log(this.state.bet);

    this.setState({
      bet: {
        count: this.state.bet.count,
        type: type
      }
    });

    console.log(this.state.bet);
  }

  handleChange(event) {
    this.setState({
      bet: {
        count: event.target.value
      }
    });
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.progressBar(20.00, 20.00);
  }

  render() {
    return (
      <Layout container>
        <Layout item xs={12} className="roulette">
          <ProgressBar />
          <Wheel />
          <Balance
            balance={this.state.balance}
            bet={this.state.bet.count}
            handleClick={this.handleBetClick}
            handleChange={this.handleChange}
            />
        </Layout>

        <BetBlock bet={this.state.bet} addBet={this.addBet} />
      </Layout>
    );
  }
}

export default Roulette;
