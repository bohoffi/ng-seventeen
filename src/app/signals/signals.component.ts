import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject, Subject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent {
  public readonly $counter = signal(0);
  public readonly counter$ = new BehaviorSubject(0);

  public readonly $computedDoubled = computed(() => this.$counter() * 2);
  public readonly pipedDoubled$ = this.counter$.pipe(map((v) => v * 2));

  public readonly logs: string[] = [];
  public readonly obsLogs: string[] = [];

  private readonly destroyRef = inject(DestroyRef);
  private readonly onDestroy$ = new Subject<void>();

  private readonly $effect = effect(() => {
    this.logs.push(`counter() changed to ${this.$counter()}`);
  });

  constructor() {
    this.counter$
      .pipe(takeUntil(this.onDestroy$))
      // .pipe(takeUntilDestroyed())
      .subscribe(() =>
        this.obsLogs.push(`counter() changed to ${this.$counter()}`)
      );

    this.destroyRef.onDestroy(() => {
      this.onDestroy$.next();
      this.onDestroy$.complete();
    });
  }

  public increment(): void {
    this.$counter.update((v) => v + 1);
    this.counter$.next(this.counter$.value + 1);
  }
  public decrement(): void {
    this.$counter.update((v) => v - 1);
    this.counter$.next(this.counter$.value - 1);
  }
  public reset(): void {
    this.$counter.set(0);
    this.counter$.next(0);
  }
}
