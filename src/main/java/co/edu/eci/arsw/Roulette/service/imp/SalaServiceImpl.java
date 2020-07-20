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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

/**
 *
 * @author danip
 */
@Component
public class SalaServiceImpl implements SalaService{
    
     @Autowired
     private SalaRepository salaRepository;
     
     @Override
     public Boolean saveSala(Sala sala) {
          try {
               salaRepository.insert(sala);
               return true;
          } catch (Exception e) {
               return false;
          }
     }

    @Override
    public Sala findById(String id) {
        try {
            return salaRepository.findByNumsala(id);
        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }


}
    
