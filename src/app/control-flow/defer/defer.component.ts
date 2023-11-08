import { Component, signal } from '@angular/core';
import { DummyComponent } from '../dummy/dummy.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [DummyComponent],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss',
})
export class DeferComponent {
  protected loadDeferedContent = signal(false);
}
