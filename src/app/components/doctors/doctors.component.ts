import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-doctors',
  standalone: false,
  templateUrl: '../doctors/doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoctorsComponent { }
