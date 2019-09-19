package br.com.dbccompany.LandingPageDbc.Entity;

import br.com.dbccompany.LandingPageDbc.Enum.StatusProcess;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import org.hibernate.validator.constraints.br.CPF;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.util.Date;

@Entity
@JsonIdentityInfo( generator = ObjectIdGenerators.PropertyGenerator.class, property = "id", scope = Candidate.class)
public class Candidate extends AbstractEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CANDIDATE")
    private Integer id;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "EMAIL", nullable = false, unique = true)
    @Email
    private String email;

    @Column(name = "PASSWORD", nullable = false)
    private String password;

    @Column(name = "CPF", unique = true, nullable = false)
    @CPF
    private String cpf;

    @Column(name = "BIRTH_DATE", nullable = false)
    @DateTimeFormat( iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date birthDate;

    @Column(name = "STATUS_PROCESS", nullable = false)
    @Enumerated(EnumType.STRING)
    private StatusProcess statusProcess;

    @Column(name = "DATE_OF_REGISTRATION", nullable = false)
    @DateTimeFormat( iso = DateTimeFormat.ISO.DATE)
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date dateOfRegistration;

    @Column(name = "EDUCATION_INSTITUTION")
    private String educationalInstitution;

    @Column(name = "BEEN_CONFIRMED")
    private boolean beenConfirmed;

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

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public StatusProcess getStatusProcess() {
        return statusProcess;
    }

    public void setStatusProcess(StatusProcess statusProcess) {
        this.statusProcess = statusProcess;
    }

    public Date getDateOfRegistration() {
        return dateOfRegistration;
    }

    public void setDateOfRegistration(Date dateOfRegistration) {
        this.dateOfRegistration = dateOfRegistration;
    }

    public String getEducationalInstitution() {
        return educationalInstitution;
    }

    public void setEducationalInstitution(String educationalInstitution) {
        this.educationalInstitution = educationalInstitution;
    }

    public boolean isBeenConfirmed() {
        return beenConfirmed;
    }

    public void setBeenConfirmed(boolean beenConfirmed) {
        this.beenConfirmed = beenConfirmed;
    }

    @Override
    public Integer getId() {
        return id;
    }

    @Override
    public void setId(Integer id) {
        this.id = id;
}

}
