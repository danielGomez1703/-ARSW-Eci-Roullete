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

public class Usuario implements Serializable {
    @Id
    @GeneratedValue
    private String email;
   // @Column(name = "APODO")
    private String apodo;
   // @Column(name = "saldo")
    private String saldo;
  //  @Column (name="clave")
    private String clave;
       
    public Usuario() {}

    public Usuario(String apodo, String saldo) {
        this.apodo = apodo;
        this.saldo = saldo;
    }

    public Usuario(String email, String apodo, String clave, String saldo) {
        this.email=email;
        this.apodo = apodo;
        this.clave=clave;
        this.saldo = saldo;
    }

   
    

  /*  @Override
    public String toString() {
        return "Nombre : "+this.apodo
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
     public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    
    public String getCorreo() {
        return email;
    }

    public void setCorreo(String email) {
        this.email = email;
    }

    public String getApodo() {
        return apodo;
    }

    public void setApodo(String apodo) {
        this.apodo = apodo;
    }

    public String getSaldo() {
        return saldo;
    }

    public void setSaldo(String saldo) {
        this.saldo = saldo;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }
         
}
