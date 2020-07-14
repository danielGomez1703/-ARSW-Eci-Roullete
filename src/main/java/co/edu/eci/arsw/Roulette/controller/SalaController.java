/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.controller;

import co.edu.eci.arsw.Roulette.model.Sala;
import co.edu.eci.arsw.Roulette.model.Usuario;
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
@RestController
@RequestMapping(value = "/salas")
public class SalaController {

    @Autowired
    SalaService salaService;

   // @PostMapping("/addSala/{idSala}")
    @RequestMapping(value ="/addSala/{numSala}", method = POST)
    @ResponseBody
    public void addSala(@PathVariable(value = "numSala") String idSala) {
        System.out.println("llega al back de salas");
        Sala sala = new Sala(idSala, idSala);
        System.out.println(salaService.saveSala(sala));
        return;

    }

    @GetMapping("/disp/{id}")
    @ResponseBody
    public boolean JoinSala(@PathVariable(value = "id") String id) {
        System.out.println("debe unirse a la sala : " + id);
        try {
            Sala sala = salaService.findById(id);
            System.out.println(sala);
            if (sala != null) {
                ObjectMapper obj = new ObjectMapper();
                String jsonStr = obj.writeValueAsString(sala);
              //  System.out.println(jsonStr);
                return true;
            }

        } catch (Exception e) {
            e.printStackTrace();

        }
        return false;
    }

}
