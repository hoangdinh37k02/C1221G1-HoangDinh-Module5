import { Injectable } from '@angular/core';
import {Facility} from '../model/facility';
import {Customer} from '../model/customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http: HttpClient) {
  //   this.facilities.push({facilityId: 'DV-1001', facilityName: 'Ocean Suite', area: '85', cost: '1500$',
  //     url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/9c/59/dc/the-baga-beach-resort.jpg?w=900&h=-1&s=1'});
  //   this.facilities.push({facilityId: 'DV-1002', facilityName: 'Ocean Suite', area: '85', cost: '600$',
  //     url: 'https://r1imghtlak.mmtcdn.com/640c8702557811ebaba10242ac110002.jpg?&output-quality=75&downsize=910:' +
  //       '612&crop=910:612;4,0&output-format=jpg'});
  //   this.facilities.push({facilityId: 'DV-1003', facilityName: 'Ocean Suite', area: '85', cost: '500$',
  //     url: 'https://cf.bstatic.com/xdata/images/hotel/max500/158485055.jpg?k=53cf752193cf' +
  //       'e01139e3ae869e3015a3eb6b711f199a54132b63df7cf5b6ba41&o=&hp=1'});
  //   this.facilities.push({facilityId: 'DV-1004', facilityName: 'Ocean Suite', area: '85', cost: '500$',
  //     url: 'http://reviewvilla.vn/wp-content/uploads/2022/03/Ancient-House-Resort-Hoi-An-8.jpg'});
  //   this.facilities.push({facilityId: 'DV-1005', facilityName: 'Ocean Suite', area: '85', cost: '500$',
  //     url: 'https://statics.vinpearl.com/hinh-anh-vinpearl-resort-spa-nha-trang-bay-3.jpg'});
  //   this.facilities.push({facilityId: 'DV-1006', facilityName: 'Ocean Suite', area: '85', cost: '500$',
  //     url: 'https://danangfantasticity.com/5-sao/hyatt-regency-danang-resort-and-spa.html/attachment/' +
  //       'hyatt-regency-danang-king-bed-with-club-access-room'});
  //   this.facilities.push({facilityId: 'DV-1007', facilityName: 'Ocean Suite', area: '85', cost: '500$',
  //     url: 'https://www.turtlebayresort.com/sites/default/files/2022-04/Standard_Ocean_View_King_web.jpg'});
  //   this.facilities.push({facilityId: 'DV-1008', facilityName: 'Ocean Suite', area: '85', cost: '500$',
  //     url: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/09/Anja-Beach-Resort-Spa-vntrip3.jpg'});
  //   this.facilities.push({facilityId: 'DV-1009', facilityName: 'Ocean Suite', area: '85', cost: '500$',
  //     url: 'https://pix10.agoda.net/property/3993328/77955196/2a2553cdc545fd54fe461c0bfd0a2956.jpg?ca=9&ce=1&s=1024x768'});
  }
  // getList() {
  //   return this.facilities;
  // }
  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(API_URL + '/facilities');
  }
  // addFacility(facility: Facility) {
  //   this.facilities.push(facility);
  // }
  addFacility(facility): Observable<Facility> {
    return this.http.post<Facility>(API_URL + '/facilities', facility);
  }
  // deleteFacility(id: string) {
  //   for (let i = 0; i < this.facilities.length ; i++) {
  //     if (id === this.facilities[i].id) {
  //       this.facilities.splice(i, 1);
  //     }
  //   }
  // }
  deleteFacility(id: string): Observable<Facility> {
    return this.http.delete<Facility>(`${API_URL}/facilities/${id}`);
  }
  // findById(id: string): Facility {
  //   for (let i = 0; i < this.facilities.length ; i++) {
  //     if (id === this.facilities[i].id) {
  //       return this.facilities[i];
  //     }
  //   }
  // }
  findById(id: string): Observable<Facility> {
    return this.http.get<Facility>(`${API_URL}/facilities/${id}`);
  }

  // updateFacility(facility) {
  //   for (let i = 0; i < this.facilities.length ; i++) {
  //     if (facility.facilityId === this.facilities[i].id) {
  //       this.facilities[i] = facility;
  //     }
  //   }
  // }
  updateFacility(id: string, facility: Facility): Observable<Facility> {
    return this.http.put<Facility>(`${API_URL}/facilities/${id}`, facility);
  }
}
