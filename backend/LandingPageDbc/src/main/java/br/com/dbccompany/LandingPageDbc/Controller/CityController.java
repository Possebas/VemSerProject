package br.com.dbccompany.LandingPageDbc.Controller;
import br.com.dbccompany.LandingPageDbc.Entity.City;
import br.com.dbccompany.LandingPageDbc.Service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Controller
@RequestMapping("/api/city")
public class CityController {
    @Autowired
    CityService cityService = new CityService();

    @GetMapping(value = "/")
    @ResponseBody
    public List<City> everyCities(){
        return cityService.everyCities();
    }

    @PostMapping(value = "/new")
    @ResponseBody
    public City newCity(@RequestBody City city){
        return cityService.save(city);
    }

    @PutMapping(value = "/edit/{id}")
    @ResponseBody
    public City editCity(@PathVariable Integer id, @RequestBody City city){
        return cityService.edit(id, city);
    }
}