import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DummyComponent } from '../dummy/dummy.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [DummyComponent, MatCardModule],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferComponent {
  protected loadDeferedContent = signal(false);
}
