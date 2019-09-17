package br.com.dbccompany.LandingPageDbc.Service;
import br.com.dbccompany.LandingPageDbc.Entity.City;
import br.com.dbccompany.LandingPageDbc.Repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class CityService {
    @Autowired
    private CityRepository cityRepository;

    @Transactional( rollbackFor = Exception.class)
    public City save(City city) {
        return cityRepository.save(city);
    }

    @Transactional( rollbackFor = Exception.class)
    public City edit(Integer id, City city) {
        city.setId(id);
        return cityRepository.save(city);
    }

    public List<City> everyCities(){
        return cityRepository.findAll();
    }
}