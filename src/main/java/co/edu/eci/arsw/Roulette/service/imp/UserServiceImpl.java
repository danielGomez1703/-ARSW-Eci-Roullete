/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.service.imp;

import co.edu.eci.arsw.Roulette.model.Usuario;
import co.edu.eci.arsw.Roulette.repository.UserRepository;

import co.edu.eci.arsw.Roulette.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

/**
 *
 * @author danip
 */

//@Configuration
@Component
public class UserServiceImpl implements UserService{
    
     @Autowired
     private UserRepository userRepository;
     
     @Override
     public Boolean saveUser(Usuario user) {
          try {
               userRepository.save(user);
               return true;
          } catch (Exception e) {
               return false;
          }
     }
     
      
     @Override
     public Usuario findByEmail(String mail) {
         Usuario usr = null;
          try {
               usr =  userRepository.findByEmail(mail);
          } catch (Exception e) {
              System.out.println( "error al  encontrar el usuario");
          }
          return usr;
     }
     
     
}
    

