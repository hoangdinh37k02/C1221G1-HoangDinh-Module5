package com.codegym.repository;

import com.codegym.model.Vehicle;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IVehicleRepository extends JpaRepository<Vehicle, Integer> {
    Page<Vehicle> findAllByLoaiXeContaining(String name, Pageable pageable);
    Page<Vehicle> findAllByLoaiXeContainingAndSoDienThoaiContaining(String loaiXe, String soDienThoai, Pageable pageable);
}
