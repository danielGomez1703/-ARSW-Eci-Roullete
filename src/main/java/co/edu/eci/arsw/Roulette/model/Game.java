/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.eci.arsw.Roulette.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 *
 * @author danip
 */
public class Game {

    private final String[] reds = {"1", "3", "5", "7", "9", "12", "14", "16", "18", "19", "21", "23", "25", "27", "29", "30", "32", "34", "36"};
    private final int[] horizontal1 = {1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34};
    private final int[] horizontal12 = {2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35};
    private final int[] horizontal13 = {3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36};

    private int RandomNumber;

    public Game() {
    }
    
    
    

    private Float WinNumber(int number, int mult) {
        if (RandomNumber == number) {
            return 3.6f * mult;
        } else {
            return 0f;
        }

    }

    private Float WinColor(int number, int mult, String color) {
        Integer num = number;
        List listred = Arrays.asList(reds);
        System.out.println(listred.toString());
        if (listred.contains(num.toString()) && color.equals("red")) {
            return 2f * mult;
        } if (!listred.contains(num.toString()) && color.equals("black")) {
            return 2f * mult;
        } else {
            return 0f;
        }

    }
    
    private Float WinDownSector(int number,int mult,int sector){
        List sec1 = Arrays.asList(horizontal1);
        List sec2 = Arrays.asList(horizontal12);
        List sec3 = Arrays.asList(horizontal13);
        if (sector == 1 && sec1.contains((number))){
            return 2f*mult;
        }if (sector == 2 && sec2.contains((number))){
            return 2f*mult;
        }if (sector == 3 && sec3.contains((number))){
            return 2f*mult;
        }else{
          return 0F;
        }
    }

}
