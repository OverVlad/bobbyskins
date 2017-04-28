import React from 'react'
import TransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Card from './Card'

export default class Deck extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hand: ['Back'],
      rank: 0,
    }
    this.addCard = this.addCard.bind(this)
  }

  addCard() {
    this.setState((state, props) => {
      const hand = state.hand
      if (hand.length < props.hand.length + 1) {
        hand.push(props.hand[hand.length - 1])
      }
      return { hand }
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({ hand: ['Back'], rank: nextProps.rank }))
  }

  render() {
    const cards = this.state.hand.map((card, index) => (
      <Card key={index} value={card} />
    ))

    return (
      <div className="Deck" onClick={() => { this.addCard() }} style={{
        width: '80%',
        height: '400px',
        minWidth: '500px',
        border: '1px solid black',
      }}>
        <TransitionGroup
          transitionName="card"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {cards}
        </TransitionGroup>
      </div>
    )
  }
}
