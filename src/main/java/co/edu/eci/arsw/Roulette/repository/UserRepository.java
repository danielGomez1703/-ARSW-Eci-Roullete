/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.repository;



import co.edu.eci.arsw.Roulette.model.Usuario;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

/**
 *
 * @author danip
 */

@Component
public interface UserRepository extends MongoRepository<Usuario, String>{

    public Usuario findByEmail(String email);

    //public Usuario findByUsername(String username);


}