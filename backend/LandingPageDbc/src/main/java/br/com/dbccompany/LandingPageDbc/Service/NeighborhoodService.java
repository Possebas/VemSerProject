package br.com.dbccompany.LandingPageDbc.Service;
import br.com.dbccompany.LandingPageDbc.Entity.Neighborhood;
import br.com.dbccompany.LandingPageDbc.Repository.NeighborhoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class NeighborhoodService {
    @Autowired
    private NeighborhoodRepository neighborhoodRepository;

    @Transactional( rollbackFor = Exception.class)
    public Neighborhood save(Neighborhood neighborhood) {
        return neighborhoodRepository.save(neighborhood);
    }

    @Transactional( rollbackFor = Exception.class)
    public Neighborhood edit(Integer id, Neighborhood neighborhood) {
        neighborhood.setId(id);
        return neighborhoodRepository.save(neighborhood);
    }

    public List<Neighborhood> everyNeighborhoods(){
        return neighborhoodRepository.findAll();
    }
}