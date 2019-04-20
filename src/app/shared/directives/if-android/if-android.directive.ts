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
  selector: '[ifAndroid]'
})
export class ifAndroidDirective {

  constructor(
    @Inject(DEVICE) private device: Device,
    private vcRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {
    if (this.device.os === platformNames.android) {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
  }
}
