package com.example.studentReact;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentDetailsRepository extends MongoRepository<StudentDetails,String> {
}
