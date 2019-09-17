package br.com.dbccompany.LandingPageDbc.Entity;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Neighborhood extends AbstractEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "ID_NEIGHBORHOOD")
    private Integer id;

    @Column(name= "NAME", nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "FK_ID_CITY")
    private City city;

    @OneToMany(mappedBy = "neighborhood", cascade = CascadeType.ALL)
    private List<Address> addresses = new ArrayList<>();

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

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public List<Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(List<Address> addresses) {
        this.addresses = addresses;
    }
}