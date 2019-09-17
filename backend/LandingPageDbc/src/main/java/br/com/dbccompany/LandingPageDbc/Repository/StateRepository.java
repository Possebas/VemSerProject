package br.com.dbccompany.LandingPageDbc.Repository;
import br.com.dbccompany.LandingPageDbc.Entity.State;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface StateRepository extends CrudRepository<State, Integer> {
    List<State> findAll();
}