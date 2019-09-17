package br.com.dbccompany.LandingPageDbc.Entity;
import javax.persistence.*;
import java.util.*;

@Entity
public class Country extends AbstractEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "ID_COUNTRY")
    private Integer id;

    @Column(name= "NAME", nullable = false, length = 5000)
    private String name;

    @OneToMany(mappedBy = "country", cascade = CascadeType.ALL)
    private List<State> states = new ArrayList<>();

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

    public List<State> getStates() {
        return states;
    }

    public void setStates(List<State> states) {
        this.states = states;
    }
}
