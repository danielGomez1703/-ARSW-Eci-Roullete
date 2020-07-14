/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function RouleteServiceURL() {
    var host = window.location.host;
    var sala = sessionStorage.getItem("sala");
    var url = 'ws://' + (host) + '/game/'+sala;
    console.log("URL Calculada: " + url);
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

class Game extends React.Component {
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
            //idSala: sessionStorage.getItem("sala"),
            mensaje: "",
            mensajesR: [],
            mensajesS: []

        };

        this.publish = this.publish.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    componentDidMount() {
        this.timerID = setInterval(
                () => (this.render(),
                    1000)
        );
    }

    sendMessage(estado) {


//        this.state.mensajesR.push(msg);
//        this.state.mensajesS.push(null);
        //  console.log("--------Nuevo Estado----"+ estado);
        this.setState(estado);
        this.setState(
                [this.state.mensajesR, this.state.mensajesS] = [this.state.mensajesS, this.state.mensajesR]
                );

        //console.log(this.state);

    }

    publish() {

        this.state.mensajesS.push(this.state.mensaje);
        //this.state.mensajesR.push();
        this.comunicationWS.send(JSON.stringify(this.state));
        this.setState({mensaje: ""});
    }

    handleChange( { target }) {
        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        let listMensajeR = this.state.mensajesR;
        let listMensajeS = this.state.mensajesS;
        return (
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" name ="mensaje" placeholder="Enviar Mensaje ... " onChange={this.handleChange} />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary" type="submit" onClick= {this.publish}> Send </button>
                                </div>
                                <hr/>
                            </div>
                        </div>              
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-group">RECIBIDOS:
                                    { listMensajeR.map((cadena, index) => (
                                                                    <li key={index} className="list-group-item list-group-item-success">   {cadena}  </li>

                                                            ))}
                
                
                                </ul>
                            </div>               
                            <div className="col-md-6">
                                <ul>
                                    <div className="borderless">
                                        ENVIADOS:
                                        { listMensajeS.map((cadena, indice) => (
                                        <li key={indice} className="list-group-item list-group-item-dark"> {cadena} <br/> </li>

                                                        ))}
                                    </div>
                                </ul>
                            </div>
                
                        </div>
                    </div>
                </div>

                );
    }

}


ReactDOM.render(<Game />, document.getElementById("game"));

