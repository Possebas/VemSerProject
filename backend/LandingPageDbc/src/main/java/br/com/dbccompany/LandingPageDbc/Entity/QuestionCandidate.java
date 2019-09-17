package br.com.dbccompany.LandingPageDbc.Entity;

import javax.persistence.*;

@Entity
@Table(name = "QUESTION_CANDIDATE")
public class QuestionCandidate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "ID_QUESTION_CANDIDATE")
    private Integer id;

    @Column(name = "IS_COLLEGE")
    private boolean  isCollege;

    @Column(name = "COURSE")
    private String course;

    @Column(name = "EDUCATIONAL_INSTITUTION")
    private String educationalInstitution;

    @Column(name = "DAY_SHIFTS")
    private String dayShifys;

    @Column(name = "IS_PARTICIPATED")
    private boolean isParticipated;

    @Column(name = "REASONS_FOR_INTEREST")
    private String reasonsForInterest;

    @Column(name = "OTHER_REASON")
    private String otherReason;

    @Column(name = "IS_LOGICAL_KNOWLEDGE")
    private boolean isLogicalKnowledge;

    @Column(name = "HAS_AVAILABILITY")
    private boolean hasAvailability;

    @Column(name = "AVAILABLE_AFTER_TRAINING")
    private boolean availabilityAfterTraining;

    @Column(name = "WHAT_MOTIVATES")
    private String whatMotivates;

    @Column(name = "REFERENCES_THAT_INSPIRE")
    private String referencesThatInspire;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public boolean isCollege() {
        return isCollege;
    }

    public void setCollege(boolean college) {
        isCollege = college;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getEducationalInstitution() {
        return educationalInstitution;
    }

    public void setEducationalInstitution(String educationalInstitution) {
        this.educationalInstitution = educationalInstitution;
    }

    public String getDayShifys() {
        return dayShifys;
    }

    public void setDayShifys(String dayShifys) {
        this.dayShifys = dayShifys;
    }

    public boolean isParticipated() {
        return isParticipated;
    }

    public void setParticipated(boolean participated) {
        isParticipated = participated;
    }

    public String getReasonsForInterest() {
        return reasonsForInterest;
    }

    public void setReasonsForInterest(String reasonsForInterest) {
        this.reasonsForInterest = reasonsForInterest;
    }

    public String getOtherReason() {
        return otherReason;
    }

    public void setOtherReason(String otherReason) {
        this.otherReason = otherReason;
    }

    public boolean isLogicalKnowledge() {
        return isLogicalKnowledge;
    }

    public void setLogicalKnowledge(boolean logicalKnowledge) {
        isLogicalKnowledge = logicalKnowledge;
    }

    public boolean isHasAvailability() {
        return hasAvailability;
    }

    public void setHasAvailability(boolean hasAvailability) {
        this.hasAvailability = hasAvailability;
    }

    public boolean isAvailabilityAfterTraining() {
        return availabilityAfterTraining;
    }

    public void setAvailabilityAfterTraining(boolean availabilityAfterTraining) {
        this.availabilityAfterTraining = availabilityAfterTraining;
    }

    public String getWhatMotivates() {
        return whatMotivates;
    }

    public void setWhatMotivates(String whatMotivates) {
        this.whatMotivates = whatMotivates;
    }

    public String getReferencesThatInspire() {
        return referencesThatInspire;
    }

    public void setReferencesThatInspire(String referencesThatInspire) {
        this.referencesThatInspire = referencesThatInspire;
    }
}
