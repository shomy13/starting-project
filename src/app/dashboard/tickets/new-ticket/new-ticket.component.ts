import {
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  add = output<{ title: string; request: string }>();

  private form = viewChild<ElementRef<HTMLFormElement>>('form');

  onSubmit(title: string, request: string) {
    
    this.add.emit({ title, request });

    this.form()?.nativeElement.reset();
  }
}
