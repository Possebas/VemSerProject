package br.com.dbccompany.LandingPageDbc.Controller;
import br.com.dbccompany.LandingPageDbc.Entity.Address;
import br.com.dbccompany.LandingPageDbc.Service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Controller
@RequestMapping("/api/address")
public class AddressController {
    @Autowired
    AddressService addressService = new AddressService();

    @GetMapping(value = "/")
    @ResponseBody
    public List<Address> everyAddresses(){
        return addressService.everyAddresses();
    }

    @PostMapping(value = "/new")
    @ResponseBody
    public Address newAddress(@RequestBody Address address){
        return addressService.save(address);
    }

    @PutMapping(value = "/edit/{id}")
    @ResponseBody
    public Address editAddress(@PathVariable Integer id, @RequestBody Address address){
        return addressService.edit(id, address);
    }
}