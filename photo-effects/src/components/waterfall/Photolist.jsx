import React, { Component } from 'react';
import './waterfall.css';
import {Route, Link} from 'react-router-dom';
import Cardview from './Cardview';
import Fade from 'react-reveal/Fade';
export class Photolist extends Component {
  render(props) {

    
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent:'center',
          margin: 'auto',
          background: '#364f6b',
          width: '96%',
          borderRadius: '10px',
          paddingTop: '15px'
         
        }}
      >
        {this.props.pics.map((pic, index) => (
          <Fade bottom cascade>
            <div className='cards' style={{ fontSize: '1rem', background:'#f0f0f0', padding:'10px', width:'300px', height:'350px', margin:'18px', borderRadius:'8px', boxShadow: '2px 2px 4px 2px rgba(67,221,230,1)', cursor:'pointer' 
            // marginTop: index %2 === 0 ? '-140px': '0px', 
                  
                   }}>
              <div style={{height:'100px'}}>
              <h4 style={{color:'#fc5185', fontSize:'2rem', marginBottom:'20px'}}>{pic.title}</h4>
              </div>
              <img
                src={pic.url}
                alt="pic"
                style={{
                  height: '200px',
                  minWidth: '200px',
                  maxWidth:'300px', 
                  position:'relative',
                  bottom:'10px'
                  
                }}
              />
              <p style={{color:'#364f6b', TextShadow:'-2px 3px 3px rgba(150, 150, 150, 1)', fontSize:'2.2rem', fontWeight:'bold'}}>Tags: </p>
              
                {/* <Link to={`/photolist/${props.match.params.id}`}/>
                <Route path={`/photolist/${props.match.params.id}`}  render={ props =>  <Cardview {...this.props} /> */}
                }/>
              </div>
              
          
          </Fade>
        ))}
      </div>
    );
  }
}
export default Photolist;