package com.codegym.service.impl;

import com.codegym.model.Vehicle;
import com.codegym.repository.IVehicleRepository;
import com.codegym.service.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService implements IVehicleService {
    @Autowired
    private IVehicleRepository iVehicleRepository;

//    @Override
//    public Page<Vehicle> getVehicleByName(String nameVal, Pageable pageable) {
//        return this.iVehicleRepository.findAllByLoaiXeContaining(nameVal,pageable);
//    }

    @Override
    public Page<Vehicle> getVehicleByName(String nameVal1, String nameVal2, Pageable pageable) {
        return this.iVehicleRepository.findAllByLoaiXeContainingAndSoDienThoaiContaining(nameVal1, nameVal2,pageable);
    }

    @Override
    public List<Vehicle> getList() {
        return this.iVehicleRepository.findAll();
    }

    @Override
    public void save(Vehicle vehicle) {
        this.iVehicleRepository.save(vehicle);
    }

    @Override
    public Vehicle findById(Integer id) {
        return this.iVehicleRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteById(Integer id) {
        this.iVehicleRepository.deleteById(id);
    }
}
