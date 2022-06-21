package com.codegym.dto;

import com.codegym.model.Company;

import javax.persistence.Column;

public class VehicleDto {
    private int id;
    private String loaiXe;
    private String diemDi;
    private String diemDen;
    private String soDienThoai;
    private String email;
    private String gioDi;
    private String gioDen;
    private Company nhaXe;

    public VehicleDto() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLoaiXe() {
        return loaiXe;
    }

    public void setLoaiXe(String loaiXe) {
        this.loaiXe = loaiXe;
    }

    public String getDiemDi() {
        return diemDi;
    }

    public void setDiemDi(String diemDi) {
        this.diemDi = diemDi;
    }

    public String getDiemDen() {
        return diemDen;
    }

    public void setDiemDen(String diemDen) {
        this.diemDen = diemDen;
    }

    public String getSoDienThoai() {
        return soDienThoai;
    }

    public void setSoDienThoai(String soDienThoai) {
        this.soDienThoai = soDienThoai;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGioDi() {
        return gioDi;
    }

    public void setGioDi(String gioDi) {
        this.gioDi = gioDi;
    }

    public String getGioDen() {
        return gioDen;
    }

    public void setGioDen(String gioDen) {
        this.gioDen = gioDen;
    }

    public Company getNhaXe() {
        return nhaXe;
    }

    public void setNhaXe(Company nhaXe) {
        this.nhaXe = nhaXe;
    }
}
