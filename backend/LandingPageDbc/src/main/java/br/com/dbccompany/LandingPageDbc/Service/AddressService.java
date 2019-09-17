package br.com.dbccompany.LandingPageDbc.Service;
import br.com.dbccompany.LandingPageDbc.Entity.Address;
import br.com.dbccompany.LandingPageDbc.Repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class AddressService {
    @Autowired
    private AddressRepository addressRepository;

    @Transactional( rollbackFor = Exception.class)
    public Address save(Address address) {
        return addressRepository.save(address);
    }

    @Transactional( rollbackFor = Exception.class)
    public Address edit(Integer id, Address address) {
        address.setId(id);
        return addressRepository.save(address);
    }

    public List<Address> everyAddresses(){
        return addressRepository.findAll();
    }
}