package com.example.studentReact;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="studentDetails")
public class StudentDetails {
    @Id
    private String id;
    private String name;
    private String dateofbirth;
    private String class_name;
    private String division;
    private String gender;

    public StudentDetails(String name, String dateofbirth, String class_name, String division, String gender) {
        this.name = name;
        this.dateofbirth = dateofbirth;
        this.class_name = class_name;
        this.division = division;
        this.gender = gender;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDateofbirth() {
        return dateofbirth;
    }

    public void setDateofbirth(String dateofbirth) {
        this.dateofbirth = dateofbirth;
    }

    public String getClass_name() {
        return class_name;
    }

    public void setClass_name(String class_name) {
        this.class_name = class_name;
    }

    public String getDivision() {
        return division;
    }

    public void setDivision(String division) {
        this.division = division;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
