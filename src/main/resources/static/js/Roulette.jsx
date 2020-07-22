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


function RouleteServiceURL() {
    var host = window.location.host;
    var sala = sessionStorage.getItem("sala");
    var url = 'wss://' + (host) + '/main/' + sala;
    console.log("URL Calculada para el core: " + url);
    return url;
}

class WSChannel {
    constructor(URL, callback) {
        this.URL = URL;
        this.wsocket = new WebSocket(URL);
        this.wsocket.onopen = (evt) => this.onOpen(evt);
        this.wsocket.onmessage = (evt) => this.onMessage(evt);
        this.wsocket.onerror = (evt) => this.onError(evt);
        this.receivef = callback;
    }
    onOpen(evt) {
        var sala = sessionStorage.getItem("sala");
        var mail = sessionStorage.getItem("email");
        let url = "main/func/" + sala + "/" + mail;
        ;
        fetch(url, {
            method: 'GET',
        }).then(function (response) {
            console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                alert("Ha ocurrido un error en el servidor");
                throw "Error en la llamada Ajax";
            }
        }).then(function (respuesta) {
            const message = respuesta.sala;
            var json = JSON.parse(message)
            //Roulette.AddPlayers(json);
        });
        console.log("In onOpen", evt);

    }
    onMessage(evt) {
        console.log("In onMessage", evt);
        // Este if permite que el primer mensaje del servidor no se tenga en cuenta.
        // El primer mensaje solo confirma que se estableció la conexión.
        // De ahí en adelante intercambiaremos solo puntos(x,y) con el servidor
        if (evt.data !== "Connection established.") {
            this.receivef(evt.data);
        }
    }
    onError(evt) {
        console.error("In onError", evt);
    }
    send(envio) {
        let msg = envio;
        //JSON.stringify({mensaje: envio});
        // console.log("sending: ", msg);
        this.wsocket.send(msg);
    }

}

class Jugador {

    constructor(email, apodo, saldo) {

        this.email = email;
        this.name = apodo;
        this.saldo = saldo;
    }
}


class Ficha extends React.Component {
    constructor(posx, posy) {
        super();
        this.posx = posx;
        this.posy = posy;
    }
}


class Roulette extends React.Component {
    constructor(props) {

        super(props);
        this.comunicationWS =
                new WSChannel(RouleteServiceURL(),
                        (msg) => {
                    var obj = JSON.parse(msg);
                    //          console.log("On func call back ", msg);
                    this.sendMessage(obj);
                });
        this.state = {
            spinAngleStart: 0,
            startAngle: 0,
            spinTime: 0,
            arc: Math.PI / (props.options.length / 2),
            bets: [],
            fichas: [],
            isSpinin:true,

        };
        this.spinTimer = null;
        this.handleOnClick = this.handleOnClick.bind(this);
        this.spin = this.spin.bind(this);
        this.rotate = this.rotate.bind(this);
        this.drawPoints  = this.drawPoints.bind(this);
        //this.makeBet = this.makeBet.bind(this);

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
        jugadores: [],
        options: [0, 2, 14, 35, 23, 4, 16, 33, 21, 6, 18,
            31, 19, 8, 12, 29, 25, 10, 27, 1, 13,
            36, 24, 3, 15, 34, 22, 5, 17,
            32, 20, 7, 11, 30, 26, 9, 28],

        baseSize: 190,
        spinAngleStart: 0.2 * 20 + 20,
        spinTimeTotal: 0.2 * 3 + 4 * 1000,

    };

    /*static AddPlayers(data) {
     let players = data.usuarios;
     console.log(players[0].apodo, players[0].saldo)
     var player = new Object()
     player.email = players[0].email
     player.apodo = players[0].apodo
     player.saldo = players[0].saldo;
     console.log(player + player.apodo);
     sessionStorage.setItem("jug",[player]);
     }*/
    sendMessage(estado) {
//        this.state.mensajesR.push(msg);
//        this.state.mensajesS.push(null);

        console.log(this.state);
        this.setState(estado);
        this.spinTimer = null;
        this.drawPoints();
        this.setState({spinTime: 0}, () => this.rotate());
        
        

    }

    drawPoints() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = "blue";
        ctx.globalCompositeOperation = 'destination-over';
        ctx.beginPath();
        let fbet = this.state.fichas;
        console.log(fbet[0].posx);
        for (var i=0 ;i<fbet.length;i++){
            console.log(fbet[i].posx )
            var posx = fbet[i].posx - 300;
            var posy = fbet[i].posy - 20;
            ctx.arc(posx, posy, 10, 0, Math.PI * 3);
            ctx.fill();
        }


    }

    componentDidMount() {
        this.drawRouletteWheel();

    }

    getColor(item) {
        const phase = 0;
        const center = 150;
        const width = 128;
        // const frequency = Math.PI*2/maxitem;

        if (this.props.options[item] === 0) {
            return "green";
        } else {
            if (item % 2 === 0) {
                return "black";
            } else {
                return "red";
            }
        }

    }

    drawRouletteWheel() {
        const {options, baseSize} = this.props;
        let {startAngle, arc} = this.state;


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
            ctx.clearRect(0, 0, 600, 600);

            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;

            ctx.font = '14px Helvetica, Arial';

            for (let i = 0; i < options.length; i++) {
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
                ctx.fillText(text, -1 * ctx.measureText(text).width / 2, 0);
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
        
        if(this.state.isSpinin){
           this.spinTimer = null;
           this.setState({spinTime: 0}, () => this.rotate()); 
        }
        

    }

    rotate() {
        const {spinAngleStart, spinTimeTotal} = this.props;

        if (this.state.spinTime > 2800) {
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
                this.spinTimer = setTimeout(() => this.rotate(), 10);
            })
        }
    }

    stopRotateWheel() {
        let {startAngle, arc} = this.state;
        const {options, baseSize} = this.props;

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        const degrees = startAngle * 180 / Math.PI + 90;
        const arcd = arc * 180 / Math.PI;
        const index = Math.floor((360 - degrees % 360) / arcd);

        ctx.save();
        ctx.font = 'bold 20px Helvetica, Arial';
        const text = options[index]
        ctx.fillStyle = "white";
        ctx.fillText(text, baseSize - ctx.measureText(text).width / 2, baseSize );
        ctx.restore();
        //this.props.onComplete(text);
    }

    easeOut(t, b, c, d) {
        const ts = (t /= d) * t;
        const tc = ts * t;
        return b + c * (tc + -3 * ts + 3 * t);
    }

    makeBet(x, y, betValue) {

        //let wsreference = this.comunicationWS;
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = "blue";
        ctx.globalCompositeOperation = 'destination-over';
        ctx.beginPath();
        var posx = x - 300;
        var posy = y - 20;
        ctx.arc(posx, posy, 10, 0, Math.PI * 3);
        ctx.fill();
        //this.state.fichas.push()
        var f = new Ficha(x, y);
        f.posx=x;
        f.posy=y;
        this.state.fichas.push(f);
        this.state.bets.push(betValue);
        console.log(this.state.bets + "\n\
                    " + this.state.fichas);
        this.comunicationWS.send(JSON.stringify(this.state));
    }

    handleOnClick(ev) {
        console.log(ev)
        console.log(ev.clientX + "clietn Y:" + ev.clientY)
        if (ev.target.value === "spin") {
           this.setState({isSpinin:true})
            this.comunicationWS.send(JSON.stringify(this.state));
            this.spin();
        } else {
            this.setState({isSpinin:false})
            this.makeBet(ev.clientX, ev.clientY, ev.target.value);

        }



    }

    render() {
        const {baseSize} = this.props;
        return (
                <div>
                
                    <div className="game-container">    
                
                        <div className="roulette"> 
                            <div className="roulette-container" ref = "frontRul">
                                <canvas ref="canvas" id ="canvastable" width={baseSize * 6 } height={baseSize * 2} className="roulette-canvas"></canvas>
                            </div>
                            <div className="roulette-container">
                                <input type="button" value= "spin" onClick={this.handleOnClick} className="btn btn-outline-primary" id="spin" />
                            </div>
                        </div>
                
                        <div>
                
                            <div className="table" id ="tablero"  ref="frontTable">
                
                                <div className ="zeroBlock">
                
                                    <input type="button" className="zeroButton" id ="0" value="0" onClick={this.handleOnClick}></input>
                                </div>
                                <div className="fstBlock">
                
                                    <input type="button" className="blockred" id ="3" value="3" onClick={this.handleOnClick} ></input>
                                    <input type="button" className="blockblack" id ="6" value="6"  onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockred" id ="9" value="9"  onClick={this.handleOnClick} ></input>
                                    <input type="button" className="blockred" id ="12" value="12" onClick={this.handleOnClick} ></input>
                
                                    <input type="button" className="blockblack" id ="2" value="2"  onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockred" id ="5" value="5"  onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockblack" id ="8" value="8"  onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockblack"  id ="11" value="11"  onClick={this.handleOnClick}></input>
                
                                    <input type="button" className="blockred" id ="1" value="1"  onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockblack" id ="4" value="4" onClick={this.handleOnClick} ></input>
                                    <input type="button" className="blockred" id ="7" value="7" onClick={this.handleOnClick} ></input>
                                    <input type="button" className="blockblack" id ="10" value="10" onClick={this.handleOnClick} ></input>
                                </div>
                                <div className="fstBlock">
                                    <input type="button" className="blockblack" id ="15" value="15" onClick={this.handleOnClick} ></input>
                                    <input type="button" className="blockred" id ="18" value="18"  onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockred" id ="21" value="21"  onClick={this.handleOnClick} ></input>
                                    <input type="button" className="blockblack" id ="24" value="124" onClick={this.handleOnClick}></input>
                
                                    <input type="button" className="blockred" id ="14" value="14" onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockblack" id ="17" value="17" onClick={this.handleOnClick} ></input>
                                    <input type="button" className="blockblack" id ="20" value="20" onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockred"  id ="23" value="23" onClick={this.handleOnClick}></input>
                
                                    <input type="button" className="blockblack" id ="13" value="13" onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockred" id ="16" value="16" onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockred" id ="19" value="19" onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockblack" id ="22" value="22" onClick={this.handleOnClick}></input>
                                </div>
                
                                <div className="fstBlock">
                
                                    <input type="button" className="blockred" id ="27" value="27" onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockred" id ="30" value="30" onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockblack" id ="33" value="33"  onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockred" id ="36" value="36" onClick={this.handleOnClick}></input>
                
                                    <input type="button" className="blockblack" id ="26" value="26" onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockblack" id ="29" value="29" onClick={this.handleOnClick} ></input>
                                    <input type="button" className="blockred" id ="32" value="32" onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockblack"  id ="35" value="35" onClick={this.handleOnClick}></input>
                
                                    <input type="button" className="blockred" id ="25" value="25" onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockblack" id ="28" value="28" onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockblack" id ="31" value="31" onClick={this.handleOnClick}></input>
                                    <input type="button" className="blockred" id ="34" value="34" onClick={this.handleOnClick}></input>
                                </div>
                
                
                                <div className="rightSect">
                                    <input type="button" className="rightBot" id ="11to2" value="11to2" onClick={this.handleOnClick}></input>
                                    <input type="button" className="rightBot" id ="21to2" value="21to2" onClick={this.handleOnClick} ></input>
                                    <input type="button" className="rightBot" id ="31to2" value="31to2" onClick={this.handleOnClick}></input>
                                </div>
                
                                <div className="downSect">
                                    <div className="downRange">
                                        <input type="button" className="downBot" id ="1st12" value="1st12" onClick={this.handleOnClick}></input>
                                        <input type="button" className="downBot" id ="2nd12" value="2nd12" onClick={this.handleOnClick}></input>
                                        <input type="button" className="downBot" id ="3rd12" value="3rd12" onClick={this.handleOnClick}></input> 
                                    </div>
                                    <div className="downRangeHalf">
                                        <input type="button" className="downBot" id ="1to18" value="1to18" onClick={this.handleOnClick}></input>
                                        <input type="button" className="downBot" id ="even" value="even" onClick={this.handleOnClick}></input>
                                        <input type="button" className="redB" id ="redB" value="red" onClick={this.handleOnClick}></input> 
                                        <input type="button" className="blackB" id ="black" value="black" onClick={this.handleOnClick}></input>
                                        <input type="button" className="downBot" id ="Odd" value="Odd" onClick={this.handleOnClick}></input>
                                    </div>
                
                                </div>
                
                            </div>           
                        </div>
                
                    </div>
                
                </div>
                );
    }
}

ReactDOM.render(<Roulette />, document.getElementById("root"));

//export default Roulette;