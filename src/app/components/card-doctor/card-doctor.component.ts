import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {  DoctorsService  } from '../../services/doctors.service'
import { Doctors } from 'src/app/interfaces/doctors';

@Component({
  selector: 'app-card-doctor',
  templateUrl: `./card-doctor.component.html`,
  styleUrls: ['./card-doctor.component.scss'],
})
export class CardDoctorComponent implements OnInit {
  doctorInfo:Doctors[] = []
  currentIndex = 0;
  constructor (private doctorsService : DoctorsService ) {}

  ngOnInit(): void {
      this.doctorsService.getDoctors()
        .subscribe(res => this.doctorInfo = res.list)
  }


  onNext() {
    this.currentIndex += 4;
    if (this.currentIndex >= this.doctorInfo.length) {
      this.currentIndex = 0;
    }
  }

  onPrevious() {
    this.currentIndex -= 4;
    if (this.currentIndex < 0) {
      this.currentIndex = this.doctorInfo.length - 4;
    }
  }
 }
