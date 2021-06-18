import React,{Component} from 'react'
// 如果直接使用css的话，要做样式模范化
import hello from './index.module.css'

export default class Hello extends Component{
	render(){
		return <h2 className={hello.title}>Hello,React!</h2>
	}
}