import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * @see: https://netbasal.com/binding-router-information-to-routed-component-inputs-in-angular-78ee92f63e64
 */
@Component({
  selector: 'app-route-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './route-data-binding.component.html',
  styleUrl: './route-data-binding.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteDataBindingComponent {
  @Input() configData?: string; // I am fixed
  @Input() id?: string; // 666
  @Input() searchTerm?: string; // guess-what
}
