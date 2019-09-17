package br.com.dbccompany.LandingPageDbc.Service;
import br.com.dbccompany.LandingPageDbc.Entity.Country;
import br.com.dbccompany.LandingPageDbc.Repository.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class CountryService {
    @Autowired
    private CountryRepository countryRepository;

    @Transactional( rollbackFor = Exception.class)
    public Country save(Country country) {
        return countryRepository.save(country);
    }

    @Transactional( rollbackFor = Exception.class)
    public Country edit(Integer id, Country country) {
        country.setId(id);
        return countryRepository.save(country);
    }

    public List<Country> everyCountries(){
        return countryRepository.findAll();
    }
}