package br.com.dbccompany.LandingPageDbc.Repository;

import br.com.dbccompany.LandingPageDbc.Entity.Admin;

import br.com.dbccompany.LandingPageDbc.Entity.Candidate;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface AdminRepository extends CrudRepository<Admin, Integer> {
    
    List<Admin> findAll();

    Admin findAdminByName(String name);

    Admin findAdminByEmail(String email);
}