/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 *
 * @author danip
 */

@Entity()
@Table(name = "usuario")
public class Usuario implements Serializable {
    @Id
    private String email;
    @Column(name = "name")
    private String name;
    @Column(name = "saldo")
    private int saldo;
    @Column (name="clave")
    private String clave;
    
    public Usuario() {}

    public Usuario(String name, int saldo) {
        this.name = name;
        this.saldo = saldo;
    }

    public Usuario(String email, String name, String clave, int saldo) {
        this.email=email;
        this.name = name;
        this.clave=clave;
        this.saldo = saldo;
    }

   
    

  /*  @Override
    public String toString() {
        return "Nombre : "+this.name
                + " saldo: " + this.saldo;//To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public boolean equals(Object obj) {
       if (obj.getClass().equals(this.getClass())){
           User jug = (User) obj;
           if (jug.getCorreo().equals(this.email)){
               return true;
           }
       }
       return false;//To change body of generated methods, choose Tools | Templates.
    }*/

    public String getCorreo() {
        return email;
    }

    public void setCorreo(String email) {
        this.email = email;
    }

    public String getApodo() {
        return name;
    }

    public void setApodo(String name) {
        this.name = name;
    }

    public int getSaldo() {
        return saldo;
    }

    public void setSaldo(int saldo) {
        this.saldo = saldo;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }
        
}
