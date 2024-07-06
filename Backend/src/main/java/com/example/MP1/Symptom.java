//package com.example.MP1;

//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//@Document(collection = "Symptom")
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//public class Symptom {
//    @Id
//    private String id;
//    private String name;
//    private String symptomName;
//    private String severity;
//    private String notes;
//
//    public Symptom(String name, String symptomName, String severity, String notes) {
//        this.name = name;
//        this.symptomName = symptomName;
//        this.severity = severity;
//        this.notes = notes;
//    }
//}

package com.example.MP1;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Symptom")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Symptom {
    @Id
    private String id;
    private String userEmail; // Add user email field
    private String symptomName;
    private String severity;
    private String notes;

    // Constructor without ID for convenience
    public Symptom(String userEmail, String symptomName, String severity, String notes) {
        this.userEmail = userEmail;
        this.symptomName = symptomName;
        this.severity = severity;
        this.notes = notes;
    }
}
