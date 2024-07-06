//package com.example.MP1;
//
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public interface PeriodTrackerRepository extends MongoRepository<PeriodTracker, String> {
//}

package com.example.MP1;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PeriodTrackerRepository extends MongoRepository<PeriodTracker, String> {
    List<PeriodTracker> findByUserEmail(String userEmail);
}
