package br.com.dbccompany.LandingPageDbc.Entity;
import javax.persistence.*;

@Entity
public class Neighborhood extends AbstractEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "ID_NEIGHBORHOOD")
    private Integer Id;

    @Column(name= "NAME", nullable = false)
    private String name;

    @Override
    public Integer getId() {
        return Id;
    }

    @Override
    public void setId(Integer id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}