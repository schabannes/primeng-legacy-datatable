import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', redirectTo: '/datatable', pathMatch: 'full'},
            {path: 'datatable', loadChildren: './components/datatable/datatabledemo.module#DataTableDemoModule'}
        ], {scrollPositionRestoration: 'enabled'})    
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}