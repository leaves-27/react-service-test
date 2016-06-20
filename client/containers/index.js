import React from 'react';
import ReactDOM from 'react-dom';
import SignIn from '../components/SignIn';

const rootEl = document.getElementById('root')


function render() {
  ReactDOM.render(
  	<SignIn 
  		value="6666"
  	/>,
    rootEl  
  )
}

render()