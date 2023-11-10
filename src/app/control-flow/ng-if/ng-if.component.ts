import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [NgIf, MatButtonModule, MatCardModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgIfComponent {
  protected value = signal(0);

  public increment(): void {
    this.value.update((v) => v + 1);
  }
  public decrement(): void {
    this.value.update((v) => v - 1);
  }
}
