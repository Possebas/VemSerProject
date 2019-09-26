package br.com.dbccompany.LandingPageDbc.Service;

import br.com.dbccompany.LandingPageDbc.Entity.Candidate;
import br.com.dbccompany.LandingPageDbc.Repository.CandidateRepository;
import br.com.dbccompany.LandingPageDbc.Security.AccountCredentials;
import br.com.dbccompany.LandingPageDbc.Utils.Cryptography;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CandidateService extends AbstractService<CandidateRepository, Candidate> {

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Candidate saveEntity(Candidate candidate) throws Exception {
        String password = Cryptography.md5(candidate.getPassword());
        if (password != null){
            candidate.setPassword(password);
            return super.saveEntity(candidate);
        }else {
            System.out.println("ERROR CRYPTOGRAPHY!!");
            return null;
        }
    }

    public Candidate getCandidate(AccountCredentials user) throws Exception{
        Candidate candidate = super.repository.findCandidateByEmail(user.getEmail());
        String passwordUser = Cryptography.md5(user.getPassword());
        if(candidate.getPassword().equals(passwordUser)){
            return candidate;
        }
        return null;
    }
}