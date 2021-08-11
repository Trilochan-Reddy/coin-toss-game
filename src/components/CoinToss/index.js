// Write your code here

import {Component} from 'react'
import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossImage: headsUrl, total: 0, heads: 0, tails: 0}

  onClickAddCount = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState({tossImage: headsUrl})
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState({tossImage: tailsUrl})
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }

    this.setState(prevState => ({total: prevState.total + 1}))
  }

  render() {
    const {total, tails, heads, tossImage} = this.state
    return (
      <div className="coin-toss-app-container">
        <div className="coin-toss-content-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <div className="img-container">
            <img src={tossImage} alt="toss result" className="toss-image" />
            <button
              type="button"
              className="button"
              onClick={this.onClickAddCount}
            >
              Toss Coin
            </button>
          </div>
          <div className="counts-container">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
