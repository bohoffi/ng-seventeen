import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DummyComponent {
  @Input({ required: true })
  public dummyName: string = 'Dummy';
}
