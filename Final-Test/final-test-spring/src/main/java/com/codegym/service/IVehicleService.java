package com.codegym.service;

import com.codegym.model.Vehicle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IVehicleService {
    Page<Vehicle> getVehicleByName(String nameVal1, String nameVal2, Pageable pageable);

    List<Vehicle> getList();

    void save(Vehicle vehicle);

    Vehicle findById(Integer id);

    void deleteById(Integer id);
}
