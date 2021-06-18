import React, { Component } from 'react'
import './App.css';
// 使用的子组件一定要是大写字母开头
// import TodoList from './views/TodoList'
import GithubSearch from './views/GithubSearch'



export default class App extends Component {

  
  render() {
    return (
			<div className="todo-container">
				{/* <TodoList/> */}
        <GithubSearch/>
			</div>
		)
  }
}

