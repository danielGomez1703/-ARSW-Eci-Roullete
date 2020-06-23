/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.model;

/**
 *
 * @author danip
 */
public class Jugador {
    
    private int id;
    private String apodo;
    private int saldo;
    private int numJugador;

    public Jugador(String apodo, int saldo) {
        this.apodo = apodo;
        this.saldo = saldo;
    }

    public Jugador(int id, String apodo, int saldo, int numJugador) {
        this.id = id;
        this.apodo = apodo;
        this.saldo = saldo;
    }
    

    public String getApodo() {
        return apodo;
    }

    public void setApodo(String apodo) {
        this.apodo = apodo;
    }

    public int getSaldo() {
        return saldo;
    }

    public void setSaldo(int saldo) {
        this.saldo = saldo;
    }

    public int getNumJugador() {
        return numJugador;
    }

    public void setNumJugador(int numJugador) {
        this.numJugador = numJugador;
    }

    @Override
    public String toString() {
        return "Nombre : "+this.apodo
                + " saldo: " + this.saldo;//To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean equals(Object obj) {
       if (obj.getClass().equals(this.getClass())){
           Jugador jug = (Jugador) obj;
           if (jug.getApodo().equals(this.apodo)){
               return true;
           }
       }
       return false;//To change body of generated methods, choose Tools | Templates.
    }
        
}
