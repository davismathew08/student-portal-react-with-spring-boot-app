package com.example.studentReact;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/student")
public class StudentDetailsController {

    private static final Logger logger = LoggerFactory.getLogger(StudentDetailsController.class);

    @Autowired
    private StudentDetailsRepository studentDetailsRepository;

    @GetMapping("/all")
    public List<StudentDetails> getAll(){
        logger.info("Getting all Student list.");
        List<StudentDetails> students=this.studentDetailsRepository.findAll();
        logger.info("test"+ new Gson().toJson(students));
        return students;
    }
    @PutMapping
    public String insert(@RequestBody StudentDetails studentDetails){
        System.out.println("insert");
        this.studentDetailsRepository.insert(studentDetails);
        logger.info("inside insert method:"+"inserted");
        return "inserted successfully";
    }

    @PostMapping
    public String update(@RequestBody StudentDetails studentDetails){
        System.out.println("update");
        this.studentDetailsRepository.save(studentDetails);
        logger.info("inside update method:"+"updated");
        return "updated successfully";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") String id){
        this.studentDetailsRepository.deleteById(id);
        logger.info("inside delete method:"+id+"is deleted");
        return id +"is deleted successfully";
    }
}
