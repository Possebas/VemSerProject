package br.com.dbccompany.LandingPageDbc;

import br.com.dbccompany.LandingPageDbc.Property.FileStorageProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties({
		FileStorageProperties.class
})
public class LandingPageDbcApplication {

	public static void main(String[] args) {
		SpringApplication.run(LandingPageDbcApplication.class, args);
	}



}
