import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'anyflight-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements AfterViewInit {
  @Input() public type: 'button' | 'reset' | 'submit' = 'button';

  @Input() public name?: 'string';

  @Input() public disabled?: boolean;

  @Input() public autofocus?: boolean;

  @ViewChild('button', { static: true })
  public element!: ElementRef<HTMLButtonElement>;

  public ngAfterViewInit(): void {
    if (this.autofocus) {
      this.focus();
    }
  }

  public focus(): void {
    return this.element.nativeElement.focus();
  }
}
