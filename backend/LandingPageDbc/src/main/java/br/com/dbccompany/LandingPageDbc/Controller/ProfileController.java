package br.com.dbccompany.LandingPageDbc.Controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import br.com.dbccompany.LandingPageDbc.Entity.Profile;
import br.com.dbccompany.LandingPageDbc.Repository.ProfileRepository;
import br.com.dbccompany.LandingPageDbc.Service.ProfileService;

@Controller
@RequestMapping("/api/admin")
public class ProfileController extends AbstractController<Profile, ProfileRepository, ProfileService>{

}