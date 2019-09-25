package br.com.dbccompany.LandingPageDbc;

import br.com.dbccompany.LandingPageDbc.Entity.Admin;
import br.com.dbccompany.LandingPageDbc.Property.FileStorageProperties;
import br.com.dbccompany.LandingPageDbc.Service.AdminService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableConfigurationProperties({
		FileStorageProperties.class
})
public class LandingPageDbcApplication {

	public static void main(String[] args) {
		SpringApplication.run(LandingPageDbcApplication.class, args);
	}

	@Bean
	public CommandLineRunner hml(AdminService adminService){
		Admin adm = new Admin();
		adm.setName("Admin");
		adm.setEmail("admin@dbccompany.com.br");
		adm.setPassword("admin");
		return args -> {
			adminService.saveEntity(adm);
		};
	}
}
