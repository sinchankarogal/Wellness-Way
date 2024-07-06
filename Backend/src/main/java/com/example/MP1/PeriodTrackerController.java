//package com.example.MP1;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.Date;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/PCOS")
//public class PeriodTrackerController {
//
//    @Autowired
//    private PeriodTrackerService periodTrackerService;
//
//    @PostMapping("/PeriodTracker/add")
//    public ResponseEntity<PeriodTracker> addPeriodTracker(@RequestBody Map<String, Object> periodTrackerRequest) {
//        String name = (String) periodTrackerRequest.get("name");
//        Date startDate = new Date((Long) periodTrackerRequest.get("startDate"));
//        Date endDate = new Date((Long) periodTrackerRequest.get("endDate"));
//        PeriodTracker periodTracker = periodTrackerService.addPeriodTracker(name, startDate, endDate);
//        return ResponseEntity.ok(periodTracker);
//    }
//}

package com.example.MP1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/PCOS")
public class PeriodTrackerController {

    @Autowired
    private PeriodTrackerService periodTrackerService;

    @PostMapping("/PeriodTracker/add")
    public ResponseEntity<PeriodTracker> addPeriodTracker(@RequestBody PeriodTracker periodTracker) {
        PeriodTracker savedPeriodTracker = periodTrackerService.addPeriodTracker(
                periodTracker.getUserEmail(),
                periodTracker.getName(),
                periodTracker.getStartDate(),
                periodTracker.getEndDate());
        return ResponseEntity.ok(savedPeriodTracker);
    }

    @GetMapping("/PeriodTracker/{userEmail}")
    public ResponseEntity<List<PeriodTracker>> getPeriodTrackersByUserEmail(@PathVariable String userEmail) {
        List<PeriodTracker> periodTrackers = periodTrackerService.getPeriodTrackersByUserEmail(userEmail);
        return ResponseEntity.ok(periodTrackers);
    }
}

