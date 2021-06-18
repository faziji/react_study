import React, { Component } from 'react'
import Search from '../../components/GithubSearch/Search'
import List from '../../components/GithubSearch/List'

export default class GithubSearch extends Component {
    state = { //初始化状态
		users:[], //users初始值为数组
		isFirst:true, //是否为第一次打开页面
		isLoading:false,//标识是否处于加载中
		err:'',//存储请求相关的错误信息
	} 

	//更新App的state
	updateAppState = (stateObj)=>{
		this.setState(stateObj)
	}


    render() {
        return (
            <div className="todo-container">
                <Search/>
                <List/>
            </div>
        )
    }
}