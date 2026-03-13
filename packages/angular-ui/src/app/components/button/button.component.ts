import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() variant: 'primary' | 'secondary' = 'primary';

  @Output() action = new EventEmitter<any>();

  onClick(event: any) {
    this.action.emit(event);
  }

}