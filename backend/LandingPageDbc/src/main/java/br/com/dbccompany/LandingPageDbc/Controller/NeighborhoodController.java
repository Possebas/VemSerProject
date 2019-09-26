package br.com.dbccompany.LandingPageDbc.Controller;
import br.com.dbccompany.LandingPageDbc.Entity.Neighborhood;
import br.com.dbccompany.LandingPageDbc.Repository.NeighborhoodRepository;
import br.com.dbccompany.LandingPageDbc.Service.NeighborhoodService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/neighborhood")
public class NeighborhoodController extends AbstractController<Neighborhood, NeighborhoodRepository , NeighborhoodService>{

}