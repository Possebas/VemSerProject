package br.com.dbccompany.LandingPageDbc.Controller;
import br.com.dbccompany.LandingPageDbc.Entity.Neighborhood;
import br.com.dbccompany.LandingPageDbc.Service.NeighborhoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/api/neighborhood")
public class NeighborhoodController {
    @Autowired
    NeighborhoodService neighborhoodService = new NeighborhoodService();

    @GetMapping(value = "/")
    @ResponseBody
    public List<Neighborhood> everyNeighborhoods(){
        return neighborhoodService.everyNeighborhoods();
    }

    @PostMapping(value = "/new")
    @ResponseBody
    public Neighborhood newNeighborhood(@RequestBody Neighborhood neighborhood){
        return neighborhoodService.save(neighborhood);
    }

    @PutMapping(value = "/edit/{id}")
    @ResponseBody
    public Neighborhood editNeighborhood(@PathVariable Integer id, @RequestBody Neighborhood neighborhood){
        return neighborhoodService.edit(id, neighborhood);
    }
}