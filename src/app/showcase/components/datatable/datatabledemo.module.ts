import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {DataTableDemo} from './datatabledemo';
import {DataTableCMDemo} from './datatablecmdemo';
import {DataTableColReorderDemo} from './datatablecolreorderdemo';
import {DataTableColResizeDemo} from './datatablecolresizedemo';
import {DataTableColTogglerDemo} from './datatablecoltogglerdemo';
import {DataTableCrudDemo} from './datatablecruddemo';
import {DataTableEditableDemo} from './datatableeditabledemo';
import {DataTableExportDemo} from './datatableexportdemo';
import {DataTableFacetsDemo} from './datatablefacetsdemo';
import {DataTableFilterDemo} from './datatablefilterdemo';
import {DataTableColGroupDemo} from './datatablecolgroupdemo';
import {DataTableRowGroupDemo} from './datatablerowgroupdemo';
import {DataTableLazyDemo} from './datatablelazydemo';
import {DataTablePaginatorDemo} from './datatablepaginatordemo';
import {DataTableResponsiveDemo} from './datatableresponsivedemo';
import {DataTableRowExpansionDemo} from './datatablerowexpansiondemo';
import {DataTableScrollDemo} from './datatablescrolldemo';
import {DataTableSelectionDemo} from './datatableselectiondemo';
import {DataTableSortDemo} from './datatablesortdemo';
import {DataTableTemplatingDemo} from './datatabletemplatingdemo';
import {DataTableSubmenu} from './datatablesubmenu';
import {DatatableDemoRoutingModule} from './datatabledemo-routing.module';
import {DataTableModule} from '../../../components/datatable/datatable';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {GrowlModule} from 'primeng/growl';
import {TabViewModule} from 'primeng/tabview';
import {CodeHighlighterModule} from 'primeng/codehighlighter';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		DatatableDemoRoutingModule,
        DataTableModule,
        CalendarModule,
        ButtonModule,
        InputTextModule,
        ContextMenuModule,
        DropdownModule,
        DialogModule,
        MultiSelectModule,
        SliderModule,
        GrowlModule,
        TabViewModule,
        CodeHighlighterModule
	],
	declarations: [
		DataTableDemo,
        DataTableCMDemo,
        DataTableColReorderDemo,
        DataTableColResizeDemo,
        DataTableColTogglerDemo,
        DataTableCrudDemo,
        DataTableEditableDemo,
        DataTableExportDemo,
        DataTableFacetsDemo,
        DataTableFilterDemo,
        DataTableColGroupDemo,
        DataTableRowGroupDemo,
        DataTableLazyDemo,
        DataTablePaginatorDemo,
        DataTableResponsiveDemo,
        DataTableRowExpansionDemo,
        DataTableScrollDemo,
        DataTableSelectionDemo,
        DataTableSortDemo,
        DataTableTemplatingDemo,
        DataTableSubmenu
	]
})
export class DataTableDemoModule {}
