package br.com.dbccompany.LandingPageDbc.Entity;
import javax.persistence.*;

@Entity
public class City extends AbstractEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "ID_CITY")
    private Integer id;

    @Column(name= "NAME", nullable = false)
    private String name;

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
}