import { Component, signal } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

type Mode = 'FORWARD' | 'NEUTRAL' | 'BACKWARD' | 'PARKING';

@Component({
  selector: 'app-ng-switch',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.scss',
})
export class NgSwitchComponent {
  protected mode = signal<Mode>('NEUTRAL');

  public setForward(): void {
    this.mode.update(() => 'FORWARD');
  }
  public setNeutral(): void {
    this.mode.update(() => 'NEUTRAL');
  }
  public setBackward(): void {
    this.mode.update(() => 'BACKWARD');
  }
  public setParking(): void {
    this.mode.update(() => 'PARKING');
  }
}
