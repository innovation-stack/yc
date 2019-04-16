import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  declarations: [

  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
