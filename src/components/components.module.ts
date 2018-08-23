import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AlertsComponent } from './alerts/alerts';
import { ToastComponent } from './toast/toast';
import { LoadingComponent } from './loading/loading';
import { ActionsheetsComponent } from './actionsheets/actionsheets';
import { PopoverComponent } from './popover/popover';
@NgModule({
    declarations: [AlertsComponent,
        ToastComponent,
        LoadingComponent,
        ActionsheetsComponent,
        PopoverComponent],
    imports: [FormsModule,BrowserModule],
    exports: [AlertsComponent,
        ToastComponent,
        LoadingComponent,
        ActionsheetsComponent,
        PopoverComponent]
})
export class ComponentsModule { }
