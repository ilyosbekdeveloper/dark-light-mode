import React, { Component } from 'react'
import Header from './components/Header/Header'
import './App.css'
import MainSection from './components/MainSection/MainSection'
import ThemeContext from './context/ThemeContext'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      theme: 'dark'
    }
  } 

  toggleTheme = ()=>{
    this.setState((state) => {
      return {
        theme: state.theme === 'dark' ? 'light' : 'dark'
      }
    })
  }


  render() {
    return (
      <ThemeContext.Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
        <Header></Header>
        <MainSection/>
      </ThemeContext.Provider>
    )
  }
}
export default App