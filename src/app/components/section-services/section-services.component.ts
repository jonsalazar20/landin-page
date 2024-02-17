import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-section-services',
  standalone: false,

  templateUrl: `./section-services.component.html`,
  styleUrls: ['./section-services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionServicesComponent { }
