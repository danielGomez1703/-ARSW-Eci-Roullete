/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.endpoint;

import co.edu.eci.arsw.Roulette.model.Sala;
import java.io.IOException;
import java.util.Queue;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 *
 * @author danip
 */
@Component
@ServerEndpoint("/game/{room}")

public class WebSocketEndPoint {

    //   @Autowired
    //   private SalaRepository salaService;
    private static final Logger logger = Logger.getLogger(WebSocketEndPoint.class.getName());
    //Queue for all open WebSocket sessions 
    static Queue<Session> queue = new ConcurrentLinkedQueue<>();
    static CopyOnWriteArrayList <Sala>  salas = new CopyOnWriteArrayList<>();
    
    Session ownSession = null;

    //Call this method to send a message to all clients
    public void send(String msg, final String room) {
        System.out.println("estoy enviando un mensaje en la sala: " + room);
        try {
            /* Send updates to all open WebSocket sessions */
            for (Session session : queue) {
                if ((!session.equals(this.ownSession) && (session.getUserProperties().get("room").equals(room)))) {
                    session.getBasicRemote().sendText(msg);
                }
                logger.log(Level.INFO, "Sent: {0}", msg);
            }
        } catch (IOException e) {
            logger.log(Level.INFO, e.toString() + "in send method");
        }
    }

    @OnMessage
    public void processPoint(String message, Session session, @PathParam("room") String room) {
        logger.log(Level.INFO, "Point received:" + message + ". From session: "
                + session);
        this.send(message, room);
    }
    

    @OnOpen
    public void openConnection(Session session, @PathParam("room") final String room) {
        /* crea la sala y guarda el numero en la session*/
        session.getUserProperties().put("room", room);
        queue.add(session);
        ownSession = session;
        logger.log(Level.INFO, "Connection opened.");
        try {
            session.getBasicRemote().sendText("Connection established.");
        } catch (IOException ex) {
            logger.log(Level.SEVERE, null, ex);
        }
    }

    @OnClose
    public void closedConnection(Session session) {
        /* Remove this connection from the queue */
        queue.remove(session);
        logger.log(Level.INFO, "Connection closed.");
    }

    @OnError
    public void error(Session session, Throwable t) {
        /* Remove this connection from the queue */
        queue.remove(session);
        logger.log(Level.INFO, t.toString());
        logger.log(Level.INFO, "Connection error.");
    }

}
