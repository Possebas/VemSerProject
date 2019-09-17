package br.com.dbccompany.LandingPageDbc.Entity;

import br.com.dbccompany.LandingPageDbc.Enum.StatusProcess;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Candidate extends Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CANDIDATE")
    private Integer id;

    @Column(name = "CPF", unique = true, nullable = false)
    @CPF
    private String cpf;

    @Column(name = "BIRTH_DATE", nullable = false)
    private String birthDate;

    @Column(name = "STATUS_PROCESS", nullable = false)
    @Enumerated(EnumType.STRING)
    private StatusProcess statusProcess;

    @Column(name = "DATE_OF_REGISTRATION", nullable = false)
    private Date dateOfRegistration;

    @Column(name = "EDUCATION_INSTITUTION")
    private String educationalInstitution;

    @Column(name = "BEEN_CONFIRMED")
    private boolean beenConfirmed;

    public String getCpf() {
        return cpf;
    }

    public StatusProcess getStatusProcess() {
        return statusProcess;
    }

    public void setStatusProcess(StatusProcess statusProcess) {
        this.statusProcess = statusProcess;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
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
