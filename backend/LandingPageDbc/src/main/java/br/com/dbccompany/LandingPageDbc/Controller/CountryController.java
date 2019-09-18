package br.com.dbccompany.LandingPageDbc.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import br.com.dbccompany.LandingPageDbc.Entity.Country;
import br.com.dbccompany.LandingPageDbc.Repository.CountryRepository;
import br.com.dbccompany.LandingPageDbc.Service.CountryService;

@Controller
@RequestMapping("/api/country")
public class CountryController extends AbstractController<Country, CountryRepository, CountryService> {

}