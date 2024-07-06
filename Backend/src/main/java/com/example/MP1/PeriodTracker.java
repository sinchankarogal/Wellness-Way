//package com.example.MP1;
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//import org.springframework.data.annotation.Id;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//import java.util.Date;
//
//@Document(collection = "PeriodTracker")
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//public class PeriodTracker {
//    @Id
//    private String id;
//    private String name;
//    private Date startDate;
//    private Date endDate;
//
//    public PeriodTracker(String name, Date startDate, Date endDate) {
//        this.name = name;
//        this.startDate = startDate;
//        this.endDate = endDate;
//    }
//}
//

package com.example.MP1;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "PeriodTracker")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PeriodTracker {
    @Id
    private String id;
    private String userEmail; // Add user email field
    private String name;
    private Date startDate;
    private Date endDate;

    // Constructor without ID for convenience
    public PeriodTracker(String userEmail, String name, Date startDate, Date endDate) {
        this.userEmail = userEmail;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
