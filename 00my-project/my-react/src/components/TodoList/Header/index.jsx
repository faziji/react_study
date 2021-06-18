import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'


export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    // 键盘的回调事件
    handleKeyUp = (event) => {
        const { keyCode, target } = event;
        // 判断是否是回车事件
        if (keyCode !== 13) return
        if (target.value.trim() === '') {
            alert('输入值不能为空')
            return;
        }
        // 准备好一个TODO对象
        const todoObj = {
            id: nanoid(),
            name: target.value,
            done: false
        }
        this.props.addTodo(todoObj)
        target.value = ''

    }
    render() {
        return (
            <div className='todo-header'>
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
