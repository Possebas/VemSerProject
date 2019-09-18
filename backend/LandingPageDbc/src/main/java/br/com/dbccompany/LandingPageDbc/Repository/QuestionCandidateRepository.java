package br.com.dbccompany.LandingPageDbc.Repository;

import br.com.dbccompany.LandingPageDbc.Entity.QuestionCandidate;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface QuestionCandidateRepository extends CrudRepository<QuestionCandidate, Integer> {
    
    List<QuestionCandidate> findAll();

    QuestionCandidate findQuestionCandidateById(Integer id);
}