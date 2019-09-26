package br.com.dbccompany.LandingPageDbc.Repository;
import br.com.dbccompany.LandingPageDbc.Entity.City;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface CityRepository extends CrudRepository<City, Integer> {

    List<City> findAll();

    City findCityByName(String name);
}