import { MenuType, ItemInfo } from './sidebar.metadata';
//import { ChartComponent } from '../dashboard/chart/chart.component';
import { TwitterComponent } from '../dashboard/twitter/twitter.component';
import { BarChartComponent } from '../dashboard/barChart/barChart.component';
import { LineChartComponent } from '../dashboard/LineChart/lineChart.component';
import { DoughnutChartComponent } from '../dashboard/DoughnutChart/doughnutChart.component';
import { PieChartComponent } from '../dashboard/PieChart/pieChart.component';
import { PolarAreaChartComponent } from '../dashboard/PolarAreaChart/polarAreaChart.component';
import { RadarChartComponent } from '../dashboard/RadarChart/radarChart.component';

export const ITEMS: any[] = [
    //{ path: 'dashboard', title: 'Gráfico', menuType: MenuType.LEFT, icon: 'pe-7s-graph3', widgetType: ChartComponent },
    //{ path: 'notifications', title: 'Notificações', menuType: MenuType.LEFT, icon:'pe-7s-bell' },
    { path: '', title: 'Twitter', menuType: MenuType.LEFT, icon:'pe-7s-angle-left-circle', widgetType: TwitterComponent}
    /*{ path: 'user', title: 'User profile', menuType: MenuType.LEFT, icon:'pe-7s-user' },
    { path: 'table', title: 'Table List', menuType: MenuType.LEFT, icon:'pe-7s-note2' },
    { path: 'typography', title: 'Typography', menuType: MenuType.LEFT, icon:'pe-7s-news-paper' },
    { path: 'icons', title: 'Icons', menuType: MenuType.LEFT, icon:'pe-7s-science' },
    { path: 'maps', title: 'Maps', menuType: MenuType.LEFT, icon:'pe-7s-map-marker' },
    { path: 'upgrade', title: 'Upgrade to PRO', menuType: MenuType.LEFT, icon:'pe-7s-rocket' }*/
];

export const SUBITEMS: any[] = [
    { path: '', title: 'Line', menuType: MenuType.LEFT, icon:'pe-7s-angle-left-circle', widgetType: LineChartComponent},
    { path: '', title: 'Bar', menuType: MenuType.LEFT, icon:'pe-7s-angle-left-circle', widgetType: BarChartComponent},
    { path: '', title: 'Radar', menuType: MenuType.LEFT, icon:'pe-7s-angle-left-circle', widgetType: RadarChartComponent},
    { path: '', title: 'Pie', menuType: MenuType.LEFT, icon:'pe-7s-angle-left-circle', widgetType: PieChartComponent},
    { path: '', title: 'PolarArea', menuType: MenuType.LEFT, icon:'pe-7s-angle-left-circle', widgetType: PolarAreaChartComponent},
    { path: '', title: 'Doughnut', menuType: MenuType.LEFT, icon:'pe-7s-angle-left-circle', widgetType: DoughnutChartComponent}
];
