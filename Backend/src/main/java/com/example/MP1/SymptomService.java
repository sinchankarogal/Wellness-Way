//package com.example.MP1;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class SymptomService {
//
//    @Autowired
//    private SymptomRepository symptomRepository;
//
//    public Symptom addSymptom(String name, String symptomName, String severity, String notes) {
//        Symptom symptom = new Symptom(name, symptomName, severity, notes);
//        return symptomRepository.save(symptom);
//    }
//}

//package com.example.MP1;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class SymptomService {
//
//    @Autowired
//    private SymptomRepository symptomRepository;
//
//    public Symptom addSymptom(String name, String symptomName, String severity, String notes) {
//        Symptom symptom = new Symptom(name, symptomName, severity, notes);
//        return symptomRepository.save(symptom);
//    }
//
//    public List<Symptom> getSymptomsByName(String name) {
//        return symptomRepository.findAllByName(name);
//    }
//}
//
//package com.example.MP1;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class SymptomService {
//
//    @Autowired
//    private SymptomRepository symptomRepository;
//
//    public Symptom addSymptom(String userEmail, String symptomName, String severity, String notes) {
//        Symptom symptom = new Symptom(userEmail, symptomName, severity, notes);
//        return symptomRepository.save(symptom);
//    }
//
//    public List<Symptom> getSymptomsByUserEmail(String userEmail) {
//        return symptomRepository.findByUserEmail(userEmail);
//    }
//}

package com.example.MP1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SymptomService {

    @Autowired
    private SymptomRepository symptomRepository;

    public Symptom addSymptom(String userEmail, String symptomName, String severity, String notes) {
        Symptom symptom = new Symptom(userEmail, symptomName, severity, notes);
        return symptomRepository.save(symptom);
    }

    public List<Symptom> getSymptomsByUserEmail(String userEmail) {
        return symptomRepository.findByUserEmail(userEmail);
    }
}

