/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.model;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author danip
 */

@Entity
@Table(name ="salas")

public class Sala implements Serializable{
    
    @Id
    private String idSala;
    @Column(name = "numsala")
    private String numSala;
    
    private String[] tablero = {"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12",
        "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
        "30", "31", "32", "33", "34", "35", "36", "1-18", "19-36", "even", "odd", "red", "black", "2to1-1",
        "2to1-2", "2to1-3", "1-12", "13-24", "25-36"};
    
    private int resultadoRuleta;
    private int minApuesta;
    
    private List<Usuario> jugadores;
    private List<String> historial;

    public Sala(String idSala, String numSala) {
        this.idSala = idSala;
        this.numSala = numSala;
    }
    
    
    

    public String[] getTablero() {
        return tablero;
    }

    public void setTablero(String[] tablero) {
        this.tablero = tablero;
    }

    public int getResultadoRuleta() {
        return resultadoRuleta;
    }

    public void setResultadoRuleta(int resultadoRuleta) {
        this.resultadoRuleta = resultadoRuleta;
    }

    public int getMinApuesta() {
        return minApuesta;
    }

    public void setMinApuesta(int minApuesta) {
        this.minApuesta = minApuesta;
    }

    public String getNumSala() {
        return numSala;
    }

    public void setNumSala(String numSala) {
        this.numSala = numSala;
    }

    public List<Usuario> getJugadores() {
        return jugadores;
    }

    public void setJugadores(List<Usuario> jugadores) {
        this.jugadores = jugadores;
    }

    public List<String> getHistorial() {
        return historial;
    }

    public void setHistorial(List<String> historial) {
        this.historial = historial;
    }

    public String getIdSala() {
        return idSala;
    }

    public void setIdSala(String idSala) {
        this.idSala = idSala;
    }
   
    
}
