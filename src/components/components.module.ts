import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertsComponent } from './alerts/alerts';
import { ToastComponent } from './toast/toast';
import { LoadingComponent } from './loading/loading';
import { ActionsheetsComponent } from './actionsheets/actionsheets';
@NgModule({
	declarations: [AlertsComponent,
    ToastComponent,
    LoadingComponent,
    ActionsheetsComponent],
	imports: [BrowserModule],
	exports: [AlertsComponent,
    ToastComponent,
    LoadingComponent,
    ActionsheetsComponent]
})
export class ComponentsModule {}
