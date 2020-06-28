package co.edu.eci.arsw.Roulette;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class RouletteApplication {

	public static void main(String[] args) {
		SpringApplication.run(RouletteApplication.class, args);
	}
        @PostMapping("/addUser")
        public void addUser(@RequestParam (value="correo") String correo,@RequestParam (value="password") String passwd,@RequestParam(value="apodo") String apodo){
            System.out.println("llega al back");
            System.out.println(correo+ " " + passwd + " " + apodo);
            
        }

}
