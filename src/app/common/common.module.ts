import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ResApiService } from './restapi.service';

@NgModule({
  providers: [ResApiService],
  bootstrap: []
})
export class CommonModule { }