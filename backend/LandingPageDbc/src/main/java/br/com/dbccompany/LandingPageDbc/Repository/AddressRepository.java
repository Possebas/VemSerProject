package br.com.dbccompany.LandingPageDbc.Repository;
import br.com.dbccompany.LandingPageDbc.Entity.Address;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface AddressRepository extends CrudRepository<Address, Integer> {
    
    List<Address> findAll();

    Address findByName(String name);
    
}