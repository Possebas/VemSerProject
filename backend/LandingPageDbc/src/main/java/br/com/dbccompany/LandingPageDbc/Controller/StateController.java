package br.com.dbccompany.LandingPageDbc.Controller;

import br.com.dbccompany.LandingPageDbc.Entity.State;
import br.com.dbccompany.LandingPageDbc.Repository.StateRepository;
import br.com.dbccompany.LandingPageDbc.Service.StateService;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/state")
public class StateController extends AbstractController<State, StateRepository, StateService> {

}