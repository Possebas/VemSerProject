package br.com.dbccompany.LandingPageDbc.Controller;
import br.com.dbccompany.LandingPageDbc.Entity.State;
import br.com.dbccompany.LandingPageDbc.Service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Controller
@RequestMapping("/api/state")
public class StateController {
    @Autowired
    StateService stateService = new StateService();

    @GetMapping(value = "/")
    @ResponseBody
    public List<State> everyStates(){
        return stateService.everyStates();
    }

    @PostMapping(value = "/new")
    @ResponseBody
    public State newState(@RequestBody State state){
        return stateService.save(state);
    }

    @PutMapping(value = "/edit/{id}")
    @ResponseBody
    public State editState(@PathVariable Integer id, @RequestBody State state){
        return stateService.edit(id, state);
    }
}