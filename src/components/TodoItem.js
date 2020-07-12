import React, { Component } from 'react'
import PropTypes from 'prop-types';
        
export class Todoitem extends Component {
    getStyle = () => {
        return {
            textDecoration:this.props.todo.completed ?
            'line-through':'none'
        }
    }
    
    render() {
        return (
            <div style={ this.getStyle() }>
                <p>{ this.props.todo.id }</p>
                <p>{ this.props.todo.completed }</p>
                <p>{ this.props.todo.title }</p>
                
            </div>
        )
    }
}
Todoitem.propTypes = {
    todo:PropTypes.object.isRequired
}

const itemStyle ={
    backgroundColor:"#bfa"
}
export default Todoitem


