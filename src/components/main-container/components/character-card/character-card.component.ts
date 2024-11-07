import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { Character } from '../../../../models/character.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {
character : InputSignal<Character> = input.required<Character>();
}
