package br.com.dbccompany.LandingPageDbc.Controller;

import br.com.dbccompany.LandingPageDbc.Entity.Candidate;
import br.com.dbccompany.LandingPageDbc.Repository.CandidateRepository;
import br.com.dbccompany.LandingPageDbc.Service.CandidateService;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/candidate")
public class CandidateController extends AbstractController<Candidate, CandidateRepository, CandidateService> {

}