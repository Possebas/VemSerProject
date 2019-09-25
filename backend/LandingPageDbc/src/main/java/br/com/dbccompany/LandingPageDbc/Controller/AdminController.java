package br.com.dbccompany.LandingPageDbc.Controller;
import br.com.dbccompany.LandingPageDbc.Security.AccountCredentials;
import oracle.jdbc.proxy.annotation.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import br.com.dbccompany.LandingPageDbc.Entity.Admin;
import br.com.dbccompany.LandingPageDbc.Repository.AdminRepository;
import br.com.dbccompany.LandingPageDbc.Service.AdminService;

@Controller
@RequestMapping("/api/admin")
public class AdminController extends AbstractController<Admin, AdminRepository, AdminService>{

    @Autowired
    AdminService service;

    @PostMapping(value = "/login")
    @ResponseBody
    public Admin getEmailAdmin(@RequestBody AccountCredentials user) throws Exception{
        return service.getAdmin(user);
    }

}