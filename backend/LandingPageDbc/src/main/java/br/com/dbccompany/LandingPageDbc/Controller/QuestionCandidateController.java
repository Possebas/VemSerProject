package br.com.dbccompany.LandingPageDbc.Controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import br.com.dbccompany.LandingPageDbc.Entity.QuestionCandidate;
import br.com.dbccompany.LandingPageDbc.Repository.QuestionCandidateRepository;
import br.com.dbccompany.LandingPageDbc.Service.QuestionCandidateService;

@Controller
@RequestMapping("/api/question")
public class QuestionCandidateController extends AbstractController<QuestionCandidate, QuestionCandidateRepository, QuestionCandidateService>{

}