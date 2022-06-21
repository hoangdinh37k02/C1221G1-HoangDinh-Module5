package com.codegym.controller;

import com.codegym.model.Company;
import com.codegym.model.Vehicle;
import com.codegym.repository.ICompanyRepository;
import com.codegym.service.ICompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RequestMapping(value = "/company")
@RestController
public class CompanyRestController {
    @Autowired
    private ICompanyService iCompanyService;
//    @GetMapping("/list")
//    public ResponseEntity<List<Company>> getList(){
//        List<Company> companyList = this.iCompanyService.getList();
//        if (companyList.isEmpty()){
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        return new ResponseEntity<>(companyList, HttpStatus.OK);
//    }
}
