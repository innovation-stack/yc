import {
  Directive,
  Inject,
  ViewContainerRef,
  TemplateRef
} from '@angular/core';
import {
  Device,
  platformNames
} from 'platform';
import { DEVICE } from 'nativescript-angular/platform-providers';

@Directive({
  selector: '[ifIos]'
})
export class ifIosDirective {

  constructor(
    @Inject(DEVICE) private device: Device,
    private vcRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
    if (this.device.os === platformNames.ios) {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }
}
