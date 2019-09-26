package br.com.dbccompany.LandingPageDbc.Service;

import br.com.dbccompany.LandingPageDbc.Entity.Admin;
import br.com.dbccompany.LandingPageDbc.Repository.AdminRepository;
import br.com.dbccompany.LandingPageDbc.Security.AccountCredentials;
import br.com.dbccompany.LandingPageDbc.Utils.Cryptography;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AdminService extends AbstractService<AdminRepository, Admin> {

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Admin saveEntity(Admin admin) throws Exception {
        String password = Cryptography.md5(admin.getPassword());
        if (password != null){
            admin.setPassword(password);
            return super.saveEntity(admin);
        }else {
            System.out.println("ERROR CRYPTOGRAPHY!!");
            return null;
        }
    }

    public Admin getAdmin(AccountCredentials user){
        Admin admin = super.repository.findAdminByEmail(user.getEmail());
        String passwordUser = Cryptography.md5(user.getPassword());
        if(admin.getPassword().equals(passwordUser)) {
            AccountCredentials nvUser = new AccountCredentials();
            nvUser.setEmail(admin.getEmail());
            nvUser.setPassword(admin.getPassword());
            return admin;
        }
        return null;
    }

}