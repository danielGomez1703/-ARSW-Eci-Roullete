/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.service.imp;


import co.edu.eci.arsw.Roulette.model.Sala;
import co.edu.eci.arsw.Roulette.model.Usuario;
import co.edu.eci.arsw.Roulette.repository.SalaRepository;
import co.edu.eci.arsw.Roulette.repository.UserRepository;
import co.edu.eci.arsw.Roulette.service.SalaService;
import co.edu.eci.arsw.Roulette.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author danip
 */



public class GameService {

    @Autowired
      SalaRepository salaRepository;
    @Autowired
    UserRepository salaService;
    
    public GameService(){
    }
    

}
