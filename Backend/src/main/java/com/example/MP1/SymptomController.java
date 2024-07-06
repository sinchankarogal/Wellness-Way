//package com.example.MP1;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.Map;
//
//@RestController
//@RequestMapping("/PCOS")
//public class SymptomController {
//
//    @Autowired
//    private SymptomService symptomService;
//
//    @PostMapping("/Symptom/add")
//    public ResponseEntity<Symptom> addSymptom(@RequestBody Map<String, String> symptomRequest) {
//        String name = symptomRequest.get("name");
//        String symptomName = symptomRequest.get("symptomName");
//        String severity = symptomRequest.get("severity");
//        String notes = symptomRequest.get("notes");
//        Symptom symptom = symptomService.addSymptom(name, symptomName, severity, notes);
//        return ResponseEntity.ok(symptom);
//    }
//}
//
//package com.example.MP1;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/PCOS")
//public class SymptomController {
//
//    @Autowired
//    private SymptomService symptomService;
//
//    @PostMapping("/Symptom/add")
//    public ResponseEntity<Symptom> addSymptom(@RequestBody Map<String, String> symptomRequest) {
//        String name = symptomRequest.get("name");
//        String symptomName = symptomRequest.get("symptomName");
//        String severity = symptomRequest.get("severity");
//        String notes = symptomRequest.get("notes");
//        Symptom symptom = symptomService.addSymptom(name, symptomName, severity, notes);
//        return ResponseEntity.ok(symptom);
//    }
//
//    @GetMapping("/Symptom/{name}")
//    public ResponseEntity<List<Symptom>> getSymptomsByName(@PathVariable String name) {
//        List<Symptom> symptoms = symptomService.getSymptomsByName(name);
//        return ResponseEntity.ok(symptoms);
//    }
//}

//package com.example.MP1;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/PCOS")
//public class SymptomController {
//
//    @Autowired
//    private SymptomService symptomService;
//
//    @PostMapping("/Symptom/add")
//    public ResponseEntity<Symptom> addSymptom(@RequestBody Symptom symptom) {
//        Symptom savedSymptom = symptomService.addSymptom(symptom.getUserEmail(), symptom.getSymptomName(), symptom.getSeverity(), symptom.getNotes());
//        return ResponseEntity.ok(savedSymptom);
//    }
//
//    @GetMapping("/Symptom/{userEmail}")
//    public ResponseEntity<List<Symptom>> getSymptomsByUserEmail(@PathVariable String userEmail) {
//        List<Symptom> symptoms = symptomService.getSymptomsByUserEmail(userEmail);
//        return ResponseEntity.ok(symptoms);
//    }
//}


package com.example.MP1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/PCOS")
public class SymptomController {

    @Autowired
    private SymptomService symptomService;

    @PostMapping("/Symptom/add")
    public ResponseEntity<Symptom> addSymptom(@RequestBody Symptom symptom) {
        Symptom savedSymptom = symptomService.addSymptom(symptom.getUserEmail(), symptom.getSymptomName(), symptom.getSeverity(), symptom.getNotes());
        return ResponseEntity.ok(savedSymptom);
    }

    @GetMapping("/Symptom/{userEmail}")
    public ResponseEntity<List<Symptom>> getSymptomsByUserEmail(@PathVariable String userEmail) {
        List<Symptom> symptoms = symptomService.getSymptomsByUserEmail(userEmail);
        return ResponseEntity.ok(symptoms);
    }
}

