# Web-based Interactive Dashboard

Esta Dashboard, desenvolvida em Angular 2, tem como principal objetivo permitir a cada utilizador configurar o seu próprio painel/dashboard através da instânciação de diversos tipos de widgets, definição da sua posição na grelha e suas dimensões e configuração dos mesmos.
Entre os vários tipos de widgets, incluem-se diversos tipos de gráficos que permitem a monitorização de dados em tempo real.
De modo a gerar os dados para os gráficos, desenvolveu-se um servidor (mock-server referido abaixo) que comunica com o Dashboard através do protocolo Websockets para lhe fornecer os dados em tempo real.
Foi também feita a integração do Dashboard com uma API REST fornecida por um servidor alojado com o Microsoft Azure, de modo a manter, para cada utilizador, a sua configuração da dashboard(tipo,posicionamento,dimensões e configuração das widgets instanciadas).

## To run
1. Clone or download this repository
2. Run `npm install`
3. Run `npm run mock-server` to start the mock server
4. Run `npm start` to start the development server
