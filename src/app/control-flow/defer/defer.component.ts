import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DummyComponent } from '../dummy/dummy.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [DummyComponent, MatCardModule],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss',
})
export class DeferComponent {
  protected loadDeferedContent = signal(false);
}
