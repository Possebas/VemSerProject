package br.com.dbccompany.LandingPageDbc.Repository;

import br.com.dbccompany.LandingPageDbc.Entity.Profile;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface ProfileRepository extends CrudRepository<Profile, Integer> {
    
    List<Profile> findAll();

    Profile findByName(String name);

}