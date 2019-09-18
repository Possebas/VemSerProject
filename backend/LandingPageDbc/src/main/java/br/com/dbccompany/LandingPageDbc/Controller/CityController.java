package br.com.dbccompany.LandingPageDbc.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import br.com.dbccompany.LandingPageDbc.Entity.City;
import br.com.dbccompany.LandingPageDbc.Repository.CityRepository;
import br.com.dbccompany.LandingPageDbc.Service.CityService;

@Controller
@RequestMapping("/api/city")
public class CityController extends AbstractController <City, CityRepository, CityService>{

}