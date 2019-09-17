package br.com.dbccompany.LandingPageDbc.Entity;

import javax.persistence.*;

@Entity
@Table(name = "ADMIN")
public class Admin extends Profile {

    @Id
    @Column(name = "ID_ADMIN")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Override
    public Integer getId() {
        return id;
    }

    @Override
    public void setId(Integer id) {
        this.id = id;
    }
}
