package br.com.dbccompany.LandingPageDbc.Repository;

import br.com.dbccompany.LandingPageDbc.Entity.Candidate;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface CandidateRepository extends CrudRepository<Candidate, Integer> {
    
    List<Candidate> findAll();

    Candidate findCandidateByName(String name);

    Candidate findCandidateByEmail(String email);
}