/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.repository;

import co.edu.eci.arsw.Roulette.model.Sala;
import co.edu.eci.arsw.Roulette.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

/**
 *
 * @author danip
 */
@Repository
@Component
public interface SalaRepository extends JpaRepository< Sala, String>{

}
