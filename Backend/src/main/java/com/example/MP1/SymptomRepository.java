//package com.example.MP1;
//
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.stereotype.Repository;
//
//@Repository
//public interface SymptomRepository extends MongoRepository<Symptom, String> {
//}

//package com.example.MP1;
//
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//
//@Repository
//public interface SymptomRepository extends MongoRepository<Symptom, String> {
//    List<Symptom> findAllByName(String name);
//}

//package com.example.MP1;
//
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.stereotype.Repository;
//import java.util.List;
//
//@Repository
//public interface SymptomRepository extends MongoRepository<Symptom, String> {
//    List<Symptom> findByUserEmail(String userEmail);
//}

package com.example.MP1;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SymptomRepository extends MongoRepository<Symptom, String> {
    List<Symptom> findByUserEmail(String userEmail);
}
