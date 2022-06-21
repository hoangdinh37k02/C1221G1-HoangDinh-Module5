package com.codegym.controller;

import com.codegym.model.Company;
import com.codegym.model.Vehicle;
import com.codegym.service.ICompanyService;
import com.codegym.service.IVehicleService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RequestMapping(value = "/vehicle")
@RestController
public class VehicleRestController {
    @Autowired
    private IVehicleService iVehicleService;
    @Autowired
    private ICompanyService iCompanyService;
    @GetMapping("/list")
    public ResponseEntity<Page<Vehicle>> getList(@RequestParam Optional<String> loaiXe,
                                                 @RequestParam Optional<String> soDienThoai,
                                                 @PageableDefault(value = 10) Pageable pageable){
        String nameVal1 = loaiXe.orElse("");
        String nameVal2 = soDienThoai.orElse("");
        Page<Vehicle> vehiclePage = this.iVehicleService.getVehicleByName(nameVal1,nameVal2, pageable);
        if (!vehiclePage.hasContent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(vehiclePage, HttpStatus.OK);
    }
//    @GetMapping("/list")
//    public ResponseEntity<List<Vehicle>> getList(){
//        List<Vehicle> vehicleList = this.iVehicleService.getList();
//        if (vehicleList.isEmpty()){
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        return new ResponseEntity<>(vehicleList, HttpStatus.OK);
//    }
    @GetMapping("/list/{id}")
    public ResponseEntity<Vehicle> getVehicle(@PathVariable Integer id){
        Vehicle vehicle = this.iVehicleService.findById(id);
        return new ResponseEntity<>(vehicle, HttpStatus.OK);
    }

    @GetMapping("/company-list")
    public ResponseEntity<List<Company>> getCompanyList(){
        List<Company> companyList = this.iCompanyService.getList();
        if (companyList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(companyList, HttpStatus.OK);
    }

    @PostMapping(value = "/create")
    public ResponseEntity<List<FieldError>> createBlog(@Validated @RequestBody Vehicle vehicle,
                                                       BindingResult bindingResult){
        if (bindingResult.hasFieldErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(), HttpStatus.BAD_REQUEST);
        }
//        Blog blog = new Blog();
//        BlogType blogType = new BlogType();
//        blogType.setId(blogDto.getBlogType().getId());
//
//        blog.setBlogType(blogType);
//        BeanUtils.copyProperties(blogDto, blog);
        this.iVehicleService.save(vehicle);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping(value = "/delete/{id}")
    public ResponseEntity<Vehicle> deleteVehicle(@PathVariable Integer id){
        Optional<Vehicle> blogOptional = Optional.ofNullable(this.iVehicleService.findById(id));
        if (!blogOptional.isPresent()){
            return  new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        this.iVehicleService.deleteById(id);
        return new ResponseEntity<>(blogOptional.get(),HttpStatus.OK);
    }
    @PutMapping(value = "/update/{id}")
    public ResponseEntity<List<FieldError>> updateVehicle(@PathVariable Integer id,@Validated  @RequestBody Vehicle vehicle,
                                                       BindingResult bindingResult){
        if (bindingResult.hasFieldErrors()){
            return new ResponseEntity<>(bindingResult.getFieldErrors(),HttpStatus.BAD_REQUEST);
        }
        Optional<Vehicle> blogOptional = Optional.ofNullable(iVehicleService.findById(id));
        if (!blogOptional.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
//        blogDto.setBlogId(blogOptional.get().getBlogId());
//        Blog blog = new Blog();
//        BeanUtils.copyProperties(blogDto, blog);
        iVehicleService.save(vehicle);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
