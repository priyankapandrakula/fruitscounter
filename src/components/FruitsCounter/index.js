/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {countmango: 0}

  state = {countbanana: 0}

  Incmango = () => {
    this.setState(prevState => ({countmango: prevState.countmango + 1}))
  }

  Incbanana = () => {
    this.setState(prevState => ({countbanana: prevState.countbanana + 1}))
  }

  render() {
    const {countmango} = this.state
    const {countbanana} = this.state
    return (
      <div className="container">
        <div className="con2">
          <h1 className="h1">
            Bob ate {countmango} mangoes {countbanana} bananas
          </h1>
          <div className="bg-container">
            <div className="d1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img1"
              />
              <div>
                <button className="b1" onClick={this.Incmango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img1"
              />
              <div>
                <button className="b1" onClick={this.Incbanana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
