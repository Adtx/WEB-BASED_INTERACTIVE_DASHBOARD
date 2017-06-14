import { MenuType, ItemInfo } from './sidebar.metadata';
import { TwitterComponent } from '../grid/twitter/twitter.component';
import { ClockComponent } from '../grid/clock/clock.component';
import { BarChartComponent } from '../grid/barChart/barChart.component';
import { LineChartComponent } from '../grid/LineChart/lineChart.component';
import { DoughnutChartComponent } from '../grid/DoughnutChart/doughnutChart.component';
import { PieChartComponent } from '../grid/PieChart/pieChart.component';
import { PolarAreaChartComponent } from '../grid/PolarAreaChart/polarAreaChart.component';
import { RadarChartComponent } from '../grid/RadarChart/radarChart.component';


import {  RouteInfo } from './sidebar.metadata';



export const ITEMS: any[] = [
    { path: '', title: 'Twitter', menuType: MenuType.LEFT, icon:'pe-7s-global', widgetType: TwitterComponent},
    { path: '', title: 'Clock', menuType: MenuType.LEFT, icon:'pe-7s-clock', widgetType: ClockComponent}
];

export const SUBITEMS: any[] = [
    { path: '', title: 'Line', menuType: MenuType.LEFT, icon:'pe-7s-plus', widgetType: LineChartComponent},
    { path: '', title: 'Bar', menuType: MenuType.LEFT, icon:'pe-7s-plus', widgetType: BarChartComponent},
    { path: '', title: 'Radar', menuType: MenuType.LEFT, icon:'pe-7s-plus', widgetType: RadarChartComponent},
    { path: '', title: 'Pie', menuType: MenuType.LEFT, icon:'pe-7s-plus', widgetType: PieChartComponent},
    { path: '', title: 'PolarArea', menuType: MenuType.LEFT, icon:'pe-7s-plus', widgetType: PolarAreaChartComponent},
    { path: '', title: 'Doughnut', menuType: MenuType.LEFT, icon:'pe-7s-plus', widgetType: DoughnutChartComponent}
];


export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon:'pe-7s-graph', class: '' },
    { path: 'typography', title: 'Tipografia',  icon:'pe-7s-pen', class: '' },
    { path: 'notifications', title: 'Alertas',  icon:'pe-7s-bell', class: '' },
    { path: 'login', title: 'Login',  icon:'pe-7s-user', class: '' },
    { path: 'home', title: 'Home',  icon:'pe-7s-home', class: '' },
];

