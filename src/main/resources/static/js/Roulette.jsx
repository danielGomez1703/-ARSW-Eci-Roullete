/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//import React from 'react';
//import PropTypes from 'prop-types';


const {Component} = React;
const {render} = ReactDOM;
//const { propTypes } = require('./prop-types');
//import './Roulette.css';


class Roulette extends React.Component {
  constructor(props) {
  
    super(props);
    this.state = {
      spinAngleStart: 0,
      startAngle: 0,
      spinTime: 0,
      arc: Math.PI / (props.options.length/2),
    }
    this.spinTimer = null;
    this.handleOnClick = this.handleOnClick.bind(this);
    this.spin = this.spin.bind(this);
    this.rotate = this.rotate.bind(this);
  }

  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    baseSize: PropTypes.number,
    spinAngleStart: PropTypes.number,
    spinTimeTotal: PropTypes.number,
    onComplete: PropTypes.func,
  };

  static defaultProps = {
    options:  [0, 2, 14, 35, 23, 4, 16, 33, 21, 6, 18, 
               31, 19, 8, 12, 29, 25, 10, 27, 1, 13, 
               36, 24, 3, 15, 34, 22, 5, 17, 
               32, 20, 7, 11, 30, 26, 9, 28],
           
    baseSize: 190,
    spinAngleStart: Math.random() * 20 + 20,
    spinTimeTotal: Math.random() * 3 + 4 * 1000,
   
  };
    
    
  componentDidMount() {
    this.drawRouletteWheel();
  }

  getColor(item) {
    const phase = 0;
    const center = 150;
    const width = 128;
   // const frequency = Math.PI*2/maxitem;

    if (this.props.options[item] === 0){
        return "green";
    }else{
        if (item%2 === 0){
            return "black";
        }else{
            return "red"
        }
    }
  //  const red   = Math.sin(frequency*item+2+phase) * width + center;
  //  const green = Math.sin(frequency*item+0+phase) * width + center;
  //  const blue  = Math.sin(frequency*item+4+phase) * width + center;

   // return this.RGB2Color(red,green,blue);
  }

  drawRouletteWheel() {
    const { options, baseSize } = this.props;
    let { startAngle, arc } = this.state;


    // const spinTimeout = null;
    // const spinTime = 0;
    // const spinTimeTotal = 0;

    let ctx;

    const canvas = this.refs.canvas;
    if (canvas.getContext) {
      const outsideRadius = baseSize - 25;
      const textRadius = baseSize - 45;
      const insideRadius = baseSize - 55;

      ctx = canvas.getContext('2d');
      ctx.clearRect(0,0,600,600);

      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;

      ctx.font = '14px Helvetica, Arial';

      for(let i = 0; i < options.length; i++) {
        const angle = startAngle + i * arc;

        ctx.fillStyle = this.getColor(i);

        ctx.beginPath();
        ctx.arc(baseSize, baseSize, outsideRadius, angle, angle + arc, false);
        ctx.arc(baseSize, baseSize, insideRadius, angle + arc, angle, true);
        ctx.fill();

        ctx.save();
        ctx.fillStyle = 'white';
        ctx.translate(baseSize + Math.cos(angle + arc / 2) * textRadius,
                      baseSize + Math.sin(angle + arc / 2) * textRadius);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        const text = options[i];
        ctx.fillText(text, -1*ctx.measureText(text).width / 2, 0);
        ctx.restore();
      }

      //Arrow
      ctx.fillStyle = 'green';
      ctx.beginPath();
      ctx.lineTo(baseSize + 10, baseSize - (outsideRadius + 20));
      ctx.lineTo(baseSize + 0, baseSize - (outsideRadius - 5));
      ctx.lineTo(baseSize - 10, baseSize - (outsideRadius + 20));
      ctx.fill();
      ctx.stroke();
    }
  }

  spin() {
    this.spinTimer = null;
    this.setState({ spinTime: 0}, () => this.rotate());
  }

  rotate(){
    const { spinAngleStart, spinTimeTotal } = this.props;
        
    if(this.state.spinTime > 2800) {
      clearTimeout(this.spinTimer);
      this.stopRotateWheel();
    } else {
      const spinAngle = spinAngleStart - this.easeOut(this.state.spinTime, 0, spinAngleStart, spinTimeTotal);
      this.setState({
        startAngle: this.state.startAngle + spinAngle * Math.PI / 180,
        spinTime: this.state.spinTime + 10,
      }, () => {
        this.drawRouletteWheel();
        clearTimeout(this.spinTimer);
        this.spinTimer = setTimeout(() => this.rotate(),10);
      })
    }
  }

  stopRotateWheel() {
    let { startAngle, arc } = this.state;
    const { options, baseSize } = this.props;

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const degrees = startAngle * 180 / Math.PI  + 90 ;
    const arcd = arc * 180 / Math.PI;
    const index = Math.floor((360 - degrees % 360) / arcd);
  
    ctx.save();
    ctx.font = 'bold 20px Helvetica, Arial';
    const text = options[index]
    ctx.fillText(text, baseSize - ctx.measureText(text).width / 2, baseSize / 3);
    ctx.restore();
    this.props.onComplete(text);
  }

  easeOut(t, b, c, d) {
    const ts = (t/=d)*t;
    const tc = ts*t;
    return b+c*(tc + -3*ts + 3*t);
  }

  handleOnClick() {
    this.spin();
  }

  render() {
    const { baseSize } = this.props;

    return (
            
      <div className="roulette"> 
        <div className="roulette-container">
          <canvas ref="canvas" width={baseSize * 2 } height={baseSize*2} className="roulette-canvas"></canvas>
        </div>
        <div className="roulette-container">
          <input type="button" value= "spin" onClick={this.handleOnClick} className="btn btn-outline-primary" id="spin" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Roulette />, document.getElementById("root"));

//export default Roulette;