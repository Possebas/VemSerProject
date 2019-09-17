package br.com.dbccompany.LandingPageDbc.Service;
import br.com.dbccompany.LandingPageDbc.Entity.State;
import br.com.dbccompany.LandingPageDbc.Repository.StateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
public class StateService {
    @Autowired
    private StateRepository stateRepository;

    @Transactional( rollbackFor = Exception.class)
    public State save(State state) {
        return stateRepository.save(state);
    }

    @Transactional( rollbackFor = Exception.class)
    public State edit(Integer id, State state) {
        state.setId(id);
        return stateRepository.save(state);
    }

    public List<State> everyStates(){
        return stateRepository.findAll();
    }
}