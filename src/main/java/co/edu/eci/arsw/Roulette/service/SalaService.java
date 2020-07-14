/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.service;

import co.edu.eci.arsw.Roulette.model.Sala;
import co.edu.eci.arsw.Roulette.model.Usuario;

/**
 *
 * @author danip
 */
public interface SalaService {
    public Boolean saveSala(Sala sala);

    public Sala findById(String id);

}
