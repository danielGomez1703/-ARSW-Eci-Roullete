/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.repository;

import co.edu.eci.arsw.Roulette.model.Sala;
import co.edu.eci.arsw.Roulette.model.Usuario;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

/**
 *
 * @author danip
 */

@Component
public interface SalaRepository extends MongoRepository< Sala, String>{

    public Sala findByNumsala(String id);

}
