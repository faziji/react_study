import React, { Component } from 'react'
import { Button,DatePicker } from 'antd';
import {WechatOutlined,WeiboOutlined,SearchOutlined} from '@ant-design/icons'
import axios from 'axios'
const { RangePicker } = DatePicker;

export default class App extends Component {

	// 发送请求并获取数据
	getStudentsData(){
		axios.get('？？？？？？').then(
			res => {console.log(res.data);},
			error =>{console.log(error);}
		)
	}
	render() {
		return (
			<div>
				App....
				<button>点我</button>
				<Button type="primary" onClick={this.getStudentsData}>按钮1</Button>
				<Button >按钮2</Button>
				<Button type="link">按钮3</Button>
				<Button type="primary" icon={<SearchOutlined />}>
					Search
				</Button>
				<WechatOutlined />
				<WeiboOutlined />
				<DatePicker/>
				<RangePicker/>
			</div>
		)
	}
}
