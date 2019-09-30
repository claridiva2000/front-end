import React, { Component } from "react";

import Box from "../../components/CanvasArea/Box";

class CanvasArea extends Component {
  state = {
    // set the items from Cavnas.jsx into app-level state in the canvas area.
    items: []
  };



  // this method sets the items from props onto state if they're different than the ones on state previously. Ensures no uneccessary re-renders happen.
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.items !== prevState.items) {
      return {
        items: nextProps.items
      };
    }
  }

  render() {
    const { items } = this.state;

    return (
      <div 
        style={ container }
        // dom-to-image. try to do this organically
        id="canvasTarget"
      >
        {// this checks the amount of items in state. since you can't map over an array of 0 or 1 values, we have to set different code blocks for each of these conditions

        // if there's more than 1 item
        items.length > 1 ? (
          // map over the items
          this.state.items.map((item, i) => (
            // place each item within a 'Box'. This box provides an overlay container that allows each element to maintain size and position within the context of the box, but when the item isn't being manipulated, the box snaps to the height and width of the item, and the box's position matches the item's position within it when manipulated (100% the size of the box's parent container when hovered.)
            <Box
              key={i}
              // full element with x, y, height, width, zIndex etc properties
              item={item}
              // allows relayering when a box is moved or resized.
              bringToTop={this.props.bringToTop}
              // sets the coordinates and size of the element in Canvas-level state so their values are maintained when new items are added
              setItem={this.props.setItem}
              // temp
              getJsonData={this.props.getJsonData}
              removeImage={this.props.removeImage}
              handle={this.handle}
            />
          ))
        ) : // if only 1 item is present, we can't map over the array. so we just take the element at position 0 (the only element) and do the same as above
        items.length === 1 ? (
          <Box
            item={items[0]}
            bringToTop={this.props.bringToTop}
            setItem={this.props.setItem}
            getJsonData={this.props.getJsonData}
            removeImage={this.props.removeImage}
            handle={this.handle}
          />
        ) : (
          // if no elements are present
          // prevents content reflow
          <div></div>
        )}
        <div style={ flexBox }>
          <div style={ flexBox2 }>
            {/* <div style={{backgroundImage: `url('${this.props.image}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%', height: 'auto', border: '1px solid yellow'}}>  */}
        <img style={ imgSize } src={this.props.image} />
        {/* </div> */}
        </div>
        </div>
      </div>
    );
  }
}

// simple styles. height is 72px less than the full height of the app to account for the toolbar, which has a height of 72px
const container = {
  width: "75%",
  height: "calc(100% - 72px)",
  position: "absolute",
  bottom: 0,
  right: 0,
  border: '1px solid black'
};

const flexBox = {
 display: 'flex',
 justifyContent: 'center',
 alignItems: 'center',
 border: '1px solid red',
 width: '100%',
 height: '100%'
}

const flexBox2 = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  border: '1px solid green',
  margin: '0 auto',
  overflow: 'hidden',
  maxWidth: '600px'
}


const imgSize = { 
  display: 'flex',
  alignContent: 'center',
  alignSelf: 'center',
  border: '1px solid yellow',
  height: '600px',
  width: '100%',
}



export default CanvasArea;
