import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './List.jsx';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      number: '',
      term: ''
    }
    this.search = this.search.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  search () {
    var postObj = {'styleId': this.state.number};
    $.ajax({
      type: 'POST',
      url: '/items/import',
      data: postObj,
      success: (data => {
        console.log('success! here is the data', data);
      }),
      error: (err) => {
        console.log('error is ', err)
      }
    })
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/items', 
      contentType: 'application/json',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err)
      }
    });
    this.render()
  }

  handleChange(e) {
    this.setState({
      number: e.target.value
    })
  }

  

  render () {
    return (
      <div>  
        <div className="landing-page">
          <div className="btns">
            <Button bsStyle="" style={btn} bsClass="btn" bsSize="small">About Me</Button>
            <Button bsStyle="" style={btn} bsClass="btn" bsSize="small">Academics</Button>
            <Button bsStyle="" style={btn} bsClass="btn" bsSize="small">Technical Skills and Projects</Button>
            <Button bsStyle="" style={btn} bsClass="btn" bsSize="small">Other Interests</Button>
            <Button bsStyle="" style={btn} bsClass="btn" bsSize="small">Resume</Button>
          </div>
          <div className="lander">
            <div>
              <div className="signature">
                <img src="CKSig3.png" className="container-fluid header" />
              </div>
              <div className="subbios">
                <div className="bio">A Student at Yale, a Double-major in Economics and Psychology, a Division One All-American athlete, and a software engineer with experience in several business environments.</div>
                <div className="bio">But these titles aren’t what define me. I expect more out of myself in all aspects of my life than anyone else. I have high expectations and I’m able to achieve those levels with my effort and drive. Commitment is binary: all in or all out. And that is what people come to expect from me: a true and complete commitment to everything that I am a part of.</div>
              </div>
              <img className="portrait" src="Linkedinphoto.jpg" />
              
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

const btn ={backgroundColor: '#000000', color: '#fff', borderStyle: 'solid', borderWidth: '0 1px 1px 1px',  borderColor: '#fff', marginLeft: '1%'};

export default App;

        // console.log(this.state.items)
        // this.state.items.push(JSON.parse(data))
        // 