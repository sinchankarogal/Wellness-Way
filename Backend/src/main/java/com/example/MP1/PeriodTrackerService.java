//package com.example.MP1;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.Date;
//
//@Service
//public class PeriodTrackerService {
//
//    @Autowired
//    private PeriodTrackerRepository periodTrackerRepository;
//
//    public PeriodTracker addPeriodTracker(String name, Date startDate, Date endDate) {
//        PeriodTracker periodTracker = new PeriodTracker(name, startDate, endDate);
//        return periodTrackerRepository.save(periodTracker);
//    }
//}
//

package com.example.MP1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class PeriodTrackerService {

    @Autowired
    private PeriodTrackerRepository periodTrackerRepository;

    public PeriodTracker addPeriodTracker(String userEmail, String name, Date startDate, Date endDate) {
        PeriodTracker periodTracker = new PeriodTracker(userEmail, name, startDate, endDate);
        return periodTrackerRepository.save(periodTracker);
    }

    public List<PeriodTracker> getPeriodTrackersByUserEmail(String userEmail) {
        return periodTrackerRepository.findByUserEmail(userEmail);
    }
}
