package br.com.dbccompany.LandingPageDbc.Service;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.dbccompany.LandingPageDbc.Entity.QuestionCandidate;
import br.com.dbccompany.LandingPageDbc.Repository.QuestionCandidateRepository;

import java.io.FileNotFoundException;
import java.io.IOException;

@Service
public class QuestionCandidateService extends AbstractService<QuestionCandidateRepository, QuestionCandidate> {

    @Autowired
    QuestionCandidateService selfRepository;

    public boolean saveQuestion( String json ) throws Exception {

        if(json == null) return false;

        QuestionCandidate quiz = new QuestionCandidate();

        JSONObject jsonObject;

        JSONParser parser = new JSONParser();

        //Atributes of question
        boolean isCollege;
        String course;
        String educationalInstitution;
        String dayShifys;
        boolean isParticipated;
        String reasonsForInterest;
        String otherReason;
        boolean isLogicalKnowledge;
        boolean hasAvailability;
        boolean availabilityAfterTraining;
        String whatMotivates;
        String referencesThatInspire;

        try {
            //Salva no objeto JSONObject o que o parse tratou do arquivo
            jsonObject = (JSONObject) parser.parse(json);

            //Salva nas variaveis os dados retirados do arquivo
            isCollege = (boolean) jsonObject.get("isCollege");
            course = (String) jsonObject.get("course");
            educationalInstitution = (String) jsonObject.get("educationalInstitution");
            dayShifys = (String) jsonObject.get("dayShifys");
            isParticipated = (boolean) jsonObject.get("isParticipated");
            reasonsForInterest = (String) jsonObject.get("reasonsForInterest");
            otherReason = (String) jsonObject.get("otherReason");
            isLogicalKnowledge = (boolean) jsonObject.get("isLogicalKnowledge");
            hasAvailability = (boolean) jsonObject.get("hasAvailability");
            availabilityAfterTraining = (boolean) jsonObject.get("availabilityAfterTraining");
            whatMotivates = (String) jsonObject.get("whatMotivates");
            referencesThatInspire = (String) jsonObject.get("referencesThatInspire");

            //Set on atributes quiz
            quiz.setCollege(isCollege);
            quiz.setCourse(course);
            quiz.setEducationalInstitution(educationalInstitution);
            quiz.setDayShifys(dayShifys);
            quiz.setParticipated(isParticipated);
            quiz.setReasonsForInterest(reasonsForInterest);
            quiz.setOtherReason(otherReason);
            quiz.setLogicalKnowledge(isLogicalKnowledge);
            quiz.setHasAvailability(hasAvailability);
            quiz.setAvailabilityAfterTraining(availabilityAfterTraining);
            quiz.setWhatMotivates(whatMotivates);
            quiz.setReferencesThatInspire(referencesThatInspire);
        }
        catch (ParseException e) {
            e.printStackTrace();
        }
        
        selfRepository.saveEntity(quiz);

        return true;
    }

}

