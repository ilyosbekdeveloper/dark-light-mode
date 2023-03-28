import React, { Component } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './MainSection.css'

export default class MainSection extends Component {
  static contextType = ThemeContext
  render() {
    return (
      <div className={`main ${this.context.theme}`}>
        <section>
            <div className="avatar">
                <div className="line1"></div>
                <div className="line2"></div>
            </div>
            <div className="main-title">
                Hello <br />
                My name is Kevin
            </div>
            <div className="hr">
                <div className="hrShort"></div>
            </div>
            <div className="main-description">
                <p>
                I'm a Digital Product and UI Designer – creating digital experiences that are intuitive for real people and making complex processes easy to use.
                Right now, I'm Design Lead at Holiday Extras, covering all our digital platforms across a whole load of brands – leading a great team across <a href="#">design</a>, 
                UI engineering, accessibility and customer experience. I'm lucky to be part of a great team of designers, writers, engineers, PMs and data 
                specialists – amongst others – testing, iterating and optimising our platforms and products.
                I've got some <a href="#">work on Dribbble</a>, some previous work at Saga and you can find me over on twitter and sometimes on Medium too. I also take too many photos.
                </p>
            </div>
        </section>
      </div>
    )
  }
}
