import React, { Component } from 'react'
import Twitter from './twitter-icon.svg'
import Figma from './Vector.svg'
import Instagram from './Vector (1).svg'
import './Header.css'
import ThemeContext from '../../context/ThemeContext'

 class Header extends Component {
    static contextType = ThemeContext

  render() {
    return (
      <div className={`wrapper`}>
        <nav className={`${this.context.theme}`}>
            {/* left alligned */}
            <div className="leftAligned">
                <div className="navLogo">
                    Kevin Bennet
                </div>
                <ul>
                    <li><a href="#">Section two</a></li>
                    <li><a href="#">Section three</a></li>
                    <li><a href="#">Section four</a></li>
                </ul>
            </div>

            {/* right alligned */}
            <div className="rightAlligned">
                <div className="socialIcons">
                    <a href="#">
                        <img src={Twitter} alt="" />
                    </a>
                    <a href="#">
                        <img src={Figma} alt="" />
                    </a>
                    <a href="#">
                        <img src={Instagram} alt="" />
                    </a>
                </div>

                {/* Theme Mode */}
                <div className="themeMode">
                <span>{this.context.theme === 'dark' ? 'Dark' : 'Light'} Mode: </span>
                    <div className={`toggle ${this.context.theme === 'dark' ? 'darkBtn' : 'dark'}`}  onClick={this.context.toggleTheme}>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
export default Header