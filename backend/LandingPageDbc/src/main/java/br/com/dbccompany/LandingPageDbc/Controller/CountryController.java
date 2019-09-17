package br.com.dbccompany.LandingPageDbc.Controller;
import br.com.dbccompany.LandingPageDbc.Entity.Country;
import br.com.dbccompany.LandingPageDbc.Service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Controller
@RequestMapping("/api/country")
public class CountryController {
    @Autowired
    CountryService countryService = new CountryService();

    @GetMapping(value = "/")
    @ResponseBody
    public List<Country> everyCountries(){
        return countryService.everyCountries();
    }

    @PostMapping(value = "/new")
    @ResponseBody
    public Country newCountry(@RequestBody Country country){
        return countryService.save(country);
    }

    @PutMapping(value = "/edit/{id}")
    @ResponseBody
    public Country editCountry(@PathVariable Integer id, @RequestBody Country country){
        return countryService.edit(id, country);
    }
}