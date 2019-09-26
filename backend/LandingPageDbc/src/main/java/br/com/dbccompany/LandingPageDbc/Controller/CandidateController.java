package br.com.dbccompany.LandingPageDbc.Controller;

import br.com.dbccompany.LandingPageDbc.Entity.Candidate;
import br.com.dbccompany.LandingPageDbc.Enum.StatusProcess;
import br.com.dbccompany.LandingPageDbc.Repository.CandidateRepository;
import br.com.dbccompany.LandingPageDbc.Security.AccountCredentials;
import br.com.dbccompany.LandingPageDbc.Service.CandidateService;

import br.com.dbccompany.LandingPageDbc.Utils.Cryptography;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/candidate")
public class CandidateController extends AbstractController<Candidate, CandidateRepository, CandidateService> {

    @Autowired
    CandidateService candidateService;

    @PostMapping(value = "/login")
    @ResponseBody
    public Candidate getEmailCandidate(@RequestBody AccountCredentials user) throws Exception{
        return candidateService.getCandidate(user);
    }
}