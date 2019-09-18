package br.com.dbccompany.LandingPageDbc.Repository;
import br.com.dbccompany.LandingPageDbc.Entity.Neighborhood;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface NeighborhoodRepository extends CrudRepository<Neighborhood, Integer> {
   
    List<Neighborhood> findAll();

    Neighborhood findByName(String name);
    
}