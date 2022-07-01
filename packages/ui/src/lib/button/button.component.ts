import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'anyflight-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements AfterViewInit {
  @Input() public type: 'button' | 'reset' | 'submit' | 'link' = 'button';

  @Input() public variant: 'primary' | 'secondary' | 'success' | 'error' = 'primary';

  @Input() public name?: 'string';

  @Input() public href?: 'string';

  @Input() public disabled?: boolean;

  @Input() public autofocus?: boolean;

  @ViewChild('button', { static: false })
  protected elementRef!: ElementRef<HTMLAnchorElement | HTMLButtonElement>;

  public ngAfterViewInit(): void {
    if (this.autofocus) {
      this.focus();
    }
  }

  public focus(): void {
    return this.elementRef.nativeElement.focus();
  }
}
