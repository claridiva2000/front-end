import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CanvasItem from './CanvasItem'

export default class Canvas extends Component {
  state = {
    drag: false,
    left: 0,
    top: 0,
    x: 0,
    y: 0,
    items: [],
    resizeX: null,
    resizeY: null
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this).getBoundingClientRect();

    this.setState({ 
      left: node.left, 
      top: node.top,
      items: this.props.items
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.items !== prevState.items) {
      return {
        items: nextProps.items
      }
    } else return;
  }

  onMouseMove = e => {
    e.stopPropagation();
    this.setState({ 
      resizeX: e.clientX,
      resizeY: e.clientY,
      x: e.clientX - this.state.left,
      y: e.clientY - this.state.top
    })
  }

  setResize = bool => {
    this.setState({ resize: bool })
  }

  render() {
    const { items } = this.props;

    if(items.length > 1) { 
      return items.map((item, i) => (
        <Box
          { ...this.props }
          onMouseMove = { this.onMouseMove }
          z = { i }
          onMouseUp = { () => this.setResize(false) }
        >
          <CanvasItem 
            key = { i }
            item = { item }
            id = { item.id }
            new_x = { this.state.x }
            new_y = { this.state.y }
            set = { this.props.set }
            resizeX = { this.state.resizeX }
            resizeY = { this.state.resizeY }
            resize = { this.state.resize }
            setResize = { this.setResize }
          />
        </Box>
      )) 
    } else if(items.length === 1) {
      return (
        <Box
          { ...this.props }
          onMouseMove = { event => this.onMouseMove(event) }
          z = { items[0].z }
        >
          <CanvasItem
            item = { items[0] }
            id = { items[0].id }
            style = { items[0].style }
            new_x = { this.state.x }
            new_y = { this.state.y }
            set = { this.props.set }
            resizeX = { this.state.resizeX }
            resizeY = { this.state.resizeY }
            setResize = { this.setResize }
          />
        </Box>
      )
    } else {
      return (
        <Box
          { ...this.props }
          onMouseMove = { event => this.onMouseMove(event) }
        ></Box>
      )
    }
  }
}

const Box = props => {
  const container = {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: props.z,
  }

  return (
    <div
        { ...props }
        style = { container }
        onMouseMove = { e => props.onMouseMove(e) }
    >
      { props.children }
    </div>
  )
}