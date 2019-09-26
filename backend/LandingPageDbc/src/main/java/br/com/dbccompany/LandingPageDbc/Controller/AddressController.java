package br.com.dbccompany.LandingPageDbc.Controller;
import br.com.dbccompany.LandingPageDbc.Entity.Address;
import br.com.dbccompany.LandingPageDbc.Repository.AddressRepository;
import br.com.dbccompany.LandingPageDbc.Service.AddressService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/address")
public class AddressController extends AbstractController<Address, AddressRepository, AddressService>{

}