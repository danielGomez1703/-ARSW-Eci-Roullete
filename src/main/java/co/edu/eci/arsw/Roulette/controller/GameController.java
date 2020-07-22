/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.controller;

/**
 *
 * @author danip
 */
import co.edu.eci.arsw.Roulette.model.Sala;
import co.edu.eci.arsw.Roulette.model.Usuario;
import co.edu.eci.arsw.Roulette.service.SalaService;
import co.edu.eci.arsw.Roulette.service.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.json.Json;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author danip
 */
@RestController
@RequestMapping(value = "/main/func")
public class GameController {
    @Autowired
    SalaService salaService;
    
    @Autowired
    UserService userService;
    
    @RequestMapping(value ="/{room}/{user}", method = GET)
    @ResponseBody
    public String addSala(@PathVariable(value = "user") String email,@PathVariable(value = "room") String room) {
        System.out.println("usuario :" + email);
        Sala exRoom = salaService.findById(room);
        Usuario usr = userService.findByEmail(email);
        
        System.out.println("" + exRoom + usr );
        String resp = "{\"isvalid\":"+ false + "\"}";
        if (exRoom!=null && usr!=null){
            try {
                exRoom.addUser(usr);
                ObjectMapper obj = new ObjectMapper();
                String jsonSala = obj.writeValueAsString(exRoom);
                resp = Json.createObjectBuilder()
                        .add("sala", jsonSala)
                        .add("isvalid",true)
                        .build().toString();
                System.out.println(resp);
                return resp;
                
            } catch (JsonProcessingException ex) {
                Logger.getLogger(GameController.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        
        return resp;

    }

    
  
    
}
