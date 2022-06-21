package com.codegym.service.impl;

import com.codegym.model.Company;
import com.codegym.repository.ICompanyRepository;
import com.codegym.service.ICompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService implements ICompanyService {
    @Autowired
    private ICompanyRepository iCompanyRepository;

    @Override
    public List<Company> getList() {
        return this.iCompanyRepository.findAll();
    }
}
