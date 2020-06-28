package co.edu.eci.arsw.Roulette;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class RouletteApplication {

	public static void main(String[] args) {
		SpringApplication.run(RouletteApplication.class, args);
	}

}
