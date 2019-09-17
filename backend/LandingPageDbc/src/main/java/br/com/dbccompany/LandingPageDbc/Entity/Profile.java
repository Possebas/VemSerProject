package br.com.dbccompany.LandingPageDbc.Entity;

import javax.persistence.*;
import javax.validation.constraints.Email;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public abstract class Profile extends AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PROFILE")
    private Integer id;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "EMAIL", nullable = false, unique = true)
    @Email
    private String email;

    @Column(name = "PASSWORD", nullable = false)
    private String password;

    @Override
    public Integer getId() {
        return id;
    }

    @Override
    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
