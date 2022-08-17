# Web-based Interactive Dashboard

This Dashboard, developed in Angular 2, has as main objective to allow each user to configure their own panel/dashboard through the instantiation of different types of widgets, defining their position in the grid and their dimensions and their configuration. Among the various types of widgets, there are several types of graphs that allow the monitoring of data in real time. In order to generate the data for the graphs, a server (mock-server referred to below) was developed that communicates with the Dashboard through the Websockets protocol to provide the data in real time. The Dashboard was also integrated with a REST API provided by a server hosted with Microsoft Azure, in order to maintain, for each user, their dashboard configuration (type, positioning, dimensions and configuration of the instantiated widgets).

## To run
1. Clone or download this repository
2. Run `npm install`
3. Run `npm run mock-server` to start the mock server
4. Run `npm start` to start the development server
