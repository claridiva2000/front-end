import React, { Component } from "react";
// import './waterfall.css';
// import { Route, Link } from 'react-router-dom';
// import Cardview from './Cardview';
import Fade from "react-reveal/Fade";

export class Photolist extends Component {
  state = {
    modal: false,
    modalPic: null
  };

  modalOn = pic => {
    this.setState({ modal: !this.state.modal, modalPic: pic });
    console.log("this was clicked");
    console.log(this.state.modal);
    console.log(this.props.pics);
  };

  render(props) {
    return !this.state.modal ? (
      <div style={cardContainer}>
        {this.props.pics.map((pic, i) => (
          <Fade key={i} bottom cascade>
            <div
              className="cards"
              onClick={() => this.modalOn(pic)}
              style={cardstyle}
              key={pic.id}
            >
              <div style={{ height: "50px" }}>
                <h4 style={cardTitle}>{pic.title}</h4>
              </div>
              <img
                src={pic.secure_url}
                alt="pic"
                style={{
                  // height: "200px",
                  minWidth: "200px",
                  maxWidth: "250px",
                  // position: "relative",
                  // bottom: "10px"
                  height: "200px"
                }}
              />
              {/* <span
                style={{
                  color: '#364f6b',
                  TextShadow: '-2px 3px 3px rgba(150, 150, 150, 1)',
                  fontSize: '2.2rem',
                  fontWeight: 'bold'
                }}
              >
                <h3> Tags: {pic.tags}</h3>
              </span> */}
            </div>
          </Fade>
        ))}
      </div>
    ) : (
      <div style={cardContainer}>
        {this.props.pics.map(pic => (
          <Fade bottom cascade>
            <div style={cardstyle} key={pic.id}>
              <img
                src={pic.secure_url}
                alt="Project"
                style={
                  {
                    // height: "200px",
                    // minWidth: "200px",
                    // maxWidth: "250px",
                    // position: "relative",
                    // bottom: "10px"
                  }
                }
              />
              {/* <p
                style={{
                  color: '#364f6b',
                  TextShadow: '-2px 3px 3px rgba(150, 150, 150, 1)',
                  fontSize: '2.2rem',
                  fontWeight: 'bold'
                }}
              >
                <h3> Tags: {pic.tags}</h3>
              </p> */}
              {/* <Link to={`/photolist/${props.match.params.id}`}/>
                <Route path={`/photolist/${props.match.params.id}`}  render={ props =>  <Cardview {...this.props} /> */}
            </div>
          </Fade>
        ))}
        <div style={cardContainerModal}>
          <div className="cards" style={modalstyle}>
            <i
              onClick={this.modalOn}
              style={{
                color: "#FC5185",
                position: "relative",
                left: "363px",
                top: "-38px"
              }}
              className="far fa-times-circle"
            ></i>

            <h4 style={cardTitle}>{this.state.modalPic.title}</h4>

            <img
              src={this.state.modalPic.secure_url}
              alt="pic"
              style={{
                maxHeight: "550px",
                width: "600px",
                position: "relative",
                bottom: "10px"
              }}
            />
            {/* <p
                style={{
                  color: '#364f6b',
                  TextShadow: '-2px 3px 3px rgba(150, 150, 150, 1)',
                  fontSize: '2.2rem',
                  fontWeight: 'bold'
                }}
              >
                <h3> Tags: {this.state.modalPic.tags}</h3>
              </p> */}
          </div>
          <div style={cardstyleModal}></div>
        </div>
        <div />
      </div>
    );
  }
}
export default Photolist;

const cardContainerModal = {
  // display: 'flex',
  // flexDirection: 'column',
  // flexWrap: 'wrap',
  // justifyContent: 'center',
  margin: "auto",
  background: "blue",
  width: "100%",
  borderRadius: "10px"
  // paddingTop: "15px"

  // opacity: '.9'
};

const cardstyleModal = {
  //display: 'none',
  position: "fixed",
  zIndex: "1",
  left: "0",
  top: "0",
  width: "100%",
  height: "100%",
  overflow: "auto",
  backgroundColor: "rgba(0,0,0,.87)" //lower opacity background
  //backgroundColor: 'rgb(0,0,0)'
};

const modalstyle = {
  backgroundColor: "#fefefe",
  marginTop: "7.5%",
  marginBottom: "10px",
  padding: "50px",
  border: "1px solid #888",
  minWidth: "800px",
  maxWidth: "45%",
  maxHeight: "85%",
  position: "fixed",

  /* center the div */
  right: "0",
  left: "0",
  top: "20px",
  marginRight: "auto",
  marginLeft: "auto",
  borderRadius: "10px",
  zIndex: "5",
  opacity: "1",
  overflow: "auto"
};

const cardstyle = {
  fontSize: "1rem",
  background: "#eaeaea",
  padding: "0px 20px 0px 20px",
  width: "auto",
  height: "300px",
  maxWidth: "300px",
  maxHeight: "300px",
  margin: "18px",
  borderRadius: "8px",
  boxShadow: "2px 2px 4px 2px rgba(59,63,66, 0.8)",
  cursor: "pointer"
  // marginTop: index %2 === 0 ? '-140px': '0px',
};

const cardTitle = {
  color: "#fc5185",
  fontSize: "2rem",
  marginBottom: "20px"
};
const cardContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  // background: '#364f6b',
  backgroundImage:
    "linear-gradient(to bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa4e9, #7aaeef, #6bb7f1, #56c2f4, #44cbf3, #3bd5ee, #43dde6)",
  width: "96%",
  borderRadius: "10px",
  boxShadow: "2px 2px 4px 2px rgba(59,63,66, 0.8)",
  paddingTop: "15px"
};
