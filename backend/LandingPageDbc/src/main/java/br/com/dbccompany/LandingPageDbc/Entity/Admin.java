package br.com.dbccompany.LandingPageDbc.Entity;

import javax.persistence.*;

@Entity
@Table(name = "ADMIN")
public class Admin extends AbstractEntity {

    @Id
    @Column(name = "ID_ADMIN")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "FK_ID_PROFILE")
    private Profile profileAdmin;

    @Override
    public Integer getId() {
        return id;
    }

    @Override
    public void setId(Integer id) {
        this.id = id;
    }

    public Profile getProfile() {
        return profileAdmin;
    }

    public void setProfile(Profile profile) {
        this.profileAdmin = profile;
    }
}
