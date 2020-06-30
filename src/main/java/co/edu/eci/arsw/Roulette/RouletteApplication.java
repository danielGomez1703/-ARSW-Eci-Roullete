package co.edu.eci.arsw.Roulette;

import co.edu.eci.arsw.Roulette.model.Usuario;
import co.edu.eci.arsw.Roulette.service.UserService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class RouletteApplication {
	public static void main(String[] args) {
		SpringApplication.run(RouletteApplication.class, args);
	}
        

}
