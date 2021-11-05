# OceanTVisu
**Description**:  
This tool is an interactive visualization tool for large volumes of temporal data of temperature measured in deep waters around the world in order to analyze them on a computer or on a wall screen. 
The visualization is composed of 3 different views representing the dataset at different scales of temporal zoom. One view presents the data as a surface with x-axis as time, y-axis as depth and intensity as temperatures. The intensity colors follow a color scale that can be changed in the application.  

**Prerequisite**:  
- Python : https://www.python.org/downloads/
- Several python modules to install (Flask,Flask-socketio,eventlet,...)
- Npm : https://nodejs.org/en/download/
- The data file : GMS_20210621.hdf5

**Installation**:  
**Windows** :  
- Put the data file in the same directory as the python script "owniosocket.py" and run the script  
- Launch a cmd command terminal (win + R and write cmd then enter) and go to the folder with the "cd path" command  
- Execute the command "npm run notebookwin && npm install && npm install http-server"  
The installation is now complete and to launch the visualization, simply execute the command "npm run servewin" and go to the address "http://127.0.0.1:8080/" on your favorite browser. Then you have to click in the upper right corner and click on "StartCo". If everything is good, the visualization should appear after a little moment.  
Afterwards, the command "npm run notebookwin" will allow you to update the notebook.  

**Linux**:  
- Put the data file in the same directory as the python script "owniosocket.py" and run the script  
- Launch a command terminal and go to the folder with the command "cd path".  
- Execute the command "npm run notebook && npm install && npm install http-server"  
The installation is now complete and to start the visualization, just execute the command "npm run serve" and go to the address "http://127.0.0.1:8080/" on your favorite browser. Then you have to click in the upper right corner and click on "StartCo". If everything is good, the visualization should appear after a little moment.  
Afterwards, the command "npm run notebook" will allow you to update the notebook.  

**Features** :  
Presentation of the buttons and functionalities:  
*Color Scale* : allows to choose the color scale among those provided by the d3 library.  
*Reverse* : Reverse the color scale  
*Dynamic Scale* : Activate the dynamic color scale for zoomed views  
*Width* : Modify the width of the canvas  
*ZoomPeriod*: Allows you to choose the period of time to view   
*HeightMultiplier* : allows to multiply the height of the canvas by the factor entered (stretches the canvas so a big multiplication leads to the pixelization of the views)  
*ChangeButton*: Allows you to apply size changes  

**Use**:  
- Click in the upper right corner to open the settings menu  
- Click in the lower right corner to open the menu of descriptions of points of interest  
- S" to save a position, "D" to delete a position  
- Y" and "U" to move the brushing area of the middle view  
- "H" and "J" to move the bottom view brushing area  
- "I" to force a refresh of view 2 and 3  
