package br.com.dbccompany.LandingPageDbc.Controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import br.com.dbccompany.LandingPageDbc.Entity.Admin;
import br.com.dbccompany.LandingPageDbc.Repository.AdminRepository;
import br.com.dbccompany.LandingPageDbc.Service.AdminService;

@Controller
@RequestMapping("/api/admin")
public class AdminController extends AbstractController<Admin, AdminRepository, AdminService>{

}