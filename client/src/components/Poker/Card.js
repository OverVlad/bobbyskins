import React from 'react'

export default class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pic: 'Back',
    }
  }

  componentWillMount() {
    const pic = this.props.value
    setTimeout(() => {
      this.setState({ pic })
    }, 500)
  }

  render() {
    return (
      <div className={this.props.value === 'Back' ? 'BackCard' : 'Card'}>
        <img
          src={`../img/minified/${this.state.pic}.png`}
          alt={this.props.value}
          className="cardImage"
          style={{ height: '180px' }}
        />
      </div>
    )
  }
}
