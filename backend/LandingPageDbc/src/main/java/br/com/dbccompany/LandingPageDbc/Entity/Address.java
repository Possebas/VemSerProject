package br.com.dbccompany.LandingPageDbc.Entity;
import javax.persistence.*;

@Entity
public class Address extends AbstractEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "ID_ADDRESS")
    private Integer id;

    @Column(name= "STREET", nullable = false)
    private String street;

    @Column(name= "NUMBER", nullable = false)
    private Integer number;

    @Column(name= "COMPLEMENT", nullable = true)
    private String complement;

    @Column(name= "ZIP_CODE", nullable = false)
    private String zipCode;

    @ManyToOne
    @JoinColumn(name = "FK_ID_NEIGHBORHOOD")
    private Neighborhood neighborhood;
    
    @Override
    public Integer getId() {
        return id;
    }

    @Override
    public void setId(Integer id) {
        this.id = id;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public String getComplement() {
        return complement;
    }

    public void setComplement(String complement) {
        this.complement = complement;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public Neighborhood getNeighborhood() {
        return neighborhood;
    }

    public void setNeighborhood(Neighborhood neighborhood) {
        this.neighborhood = neighborhood;
    }
}