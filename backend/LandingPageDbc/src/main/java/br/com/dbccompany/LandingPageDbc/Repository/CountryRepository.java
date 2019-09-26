package br.com.dbccompany.LandingPageDbc.Repository;
import br.com.dbccompany.LandingPageDbc.Entity.Country;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface CountryRepository extends CrudRepository<Country, Integer> {

    List<Country> findAll();

    Country findCountryByName(String name);
}