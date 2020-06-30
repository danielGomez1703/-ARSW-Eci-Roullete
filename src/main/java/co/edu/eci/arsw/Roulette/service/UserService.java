/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.service;

import co.edu.eci.arsw.Roulette.model.Usuario;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author danip
 */

public interface UserService {
    public Boolean saveUser(Usuario user);
}
