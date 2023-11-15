import { Component } from '@angular/core';
import { DummyComponent } from '../control-flow/dummy/dummy.component';

@Component({
  selector: 'app-required-inputs',
  standalone: true,
  imports: [DummyComponent],
  templateUrl: './required-inputs.component.html',
  styleUrl: './required-inputs.component.scss',
})
export class RequiredInputsComponent {}
