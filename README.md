# M151_Projekt

## Installation von Docker & Docker Compose

Damit Sie den Container starten können, brauchen Sie [Docker](https://www.docker.com) sowie [Docker Compose](https://docs.docker.com/compose/). 

## Webserver und Datenbank starten

### Webserver:

1. Installieren Sie als erstes node.js auf ihrem lokalen Rechner. Dazu gehen Sie auf [nodejs.org](https://nodejs.org/en/) und laden die LTS Version herunter. Anschliessend installieren Sie diese. 

2. Als zweites brauchen Sie noch Visual Studio Code. Dazu gehen Sie auf [code.visualstudio.com](https://code.visualstudio.com/), laden es herunter und installieren Sie es.

3. Sobald Sie node.js und Visual Studio Code instaliert haben, clonen Sie das Repository. Wie das geht finden Sie [hier.](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

4. Öffnen Sie nun Ihr Visual Studio Code und navigieren Sie in Ihren Projektordner. Sobald Sie in Ihrem Ordner M151_PROJEKT sind, gehen Sie in das Terminal in Visual Studio Code (In der Menüleiste auf Terminal->New Terminal)
Dort geben Sie folgenden Code Snippet ein:

  ```
  npm i
  ```
  Nun werden alle nötigen Packages installiert welche für das Projekt benötigt werden. Wenn Sie alles installiert werden aber immernoch rote Zeilen im Code sind, schliessen Sie das Projekt und öffnen Sie es neu.
  
  5. Als nächstes geben Sie folgenden Code Snipped ein:
  ```
  tsc
  ```
  Nun werden alle typescript Dateien (datei.ts) in Javascript Dateien (datei.js) transkompiliert. Diese erscheinen dann im **build** Ordner
  
  6. Navigieren Sie nun in Ihrem Terminal welches Sie schon offen haben in den build Ordner.
  
  7. Wenn Sie in Ihrem Build Ordner angelangt sind, tippen Sie 
  
  ```
  node server.js
  ```
  um den Webserver zu starten.
  
  8. Sobald der Webserver gestartet ist, können Sie im Browser unter localhost:5000 den Webshop aufrufen.

  ### Datenbank

  Nun läuft der Server aber es können noch keine Daten von der Datenbank geholt bzw auf die Datenbank geschrieben werden. Dazu muss noch der Container mit der Datenbank gestartet werden. Öffnen Sie Ihre Kommandozeile und navigieren Sie in den **docker** Ordner.
  Tippen sie
  ```
  docker-compose -f docker-compose.yml up
  ```
  ein und drücken Sie enter.


  ## Datenbank und Webserver testen.

  Nun sollten Sie localhost:5000 aufrufen und nach Exhibitions oder Priests gehen. Wenn Sie dort Einträge finden wie zum Beispiel Gottesdienst oder Taufe sowie Priester welche aufgelistet wurden, konnten alle Daten geladen werden. Fals nicht müssen Sie folgende Schritte durchführen: 

  ### PGAdmin 4 herunterladen
  
  Da die Daten welche wir noch nicht benötigen noch nicht in der Datenbank sind, müssen wir diese noch einfügen. Installieren Sie sich deshalb [pgAdmin 4](https://www.pgadmin.org/download/pgadmin-4-windows/) und führen diesen aus.

  Anschliessend müssen Sie auf die Datenbank verbinden. Die Credentials sind folgende: 
  

| username:  michel  
| password:  mypassword       
| port:      5432      
| db:        churchappdb 
