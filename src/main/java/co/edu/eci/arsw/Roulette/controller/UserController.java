/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.controller;

import co.edu.eci.arsw.Roulette.model.Usuario;
import co.edu.eci.arsw.Roulette.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author danip
 */
@Controller
//@RequestMapping(path="/user")
public class UserController {
    
      @Autowired    
      UserService userService;
     
        @PostMapping("/addUser")
        public void addUser(@RequestParam (value="correo") String correo,@RequestParam (value="password") String passwd,@RequestParam(value="apodo") String apodo){
            System.out.println("llega al back");
            System.out.println(correo+ " " + passwd + " " + apodo);
            Usuario usr  = new Usuario(correo,passwd,apodo,5000);
            System.out.println(userService.saveUser(usr));
            
        }


}
