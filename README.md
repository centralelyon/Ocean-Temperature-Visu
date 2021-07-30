# OceanTVisu
**Prérequis** :  
- Python : https://www.python.org/downloads/
- Plusieurs modules pythons à installer (Flask,Flask-socketio,eventlet,...)
- Npm : https://nodejs.org/en/download/
- Le fichier de données 

**Installation** :  
**Windows** :  
- Mettre le fichier de données dans le même répertoire que le script python "owniosocket.py" et exécuter le script  
- Lancer un terminal de commande cmd (win + R et écrire cmd puis entrée) et aller dans le dossier à l'aide de la commande "cd path"  
- Exécuter la commande "npm run notebookwin && npm install && npm install http-server"  
L'installation est maintenant terminée et pour lancer la visualisation, il suffit d'exécuter la commande "npm run servewin" et d'aller à l'adresse "http://127.0.0.1:8080/" sur son naviguateur préféré. Il faut alors cliquer dans le coin supérieur-droit et cliquer sur "StartCo". Si tout est bon, la visualisation devrait apparaître après un peu de temps.  
Par la suite, la commande "npm run notebookwin" permettra de mettre à jour le notebook.  

**Linux** :  
- Mettre le fichier de données dans le même répertoire que le script python "owniosocket.py" et exécuter le script  
- Lancer un terminal de commande et aller dans le dossier à l'aide de la commande "cd path"  
- Exécuter la commande "npm run notebook && npm install  && npm install http-server"  
L'installation est maintenant terminée et pour lancer la visualisation, il suffit d'exécuter la commande "npm run serve" et d'aller à l'adresse "http://127.0.0.1:8080/" sur son naviguateur préféré. Il faut alors cliquer dans le coin supérieur-droit et cliquer sur "StartCo". Si tout est bon, la visualisation devrait apparaître après un peu de temps.  
Par la suite, la commande "npm run notebook" permettra de mettre à jour le notebook.  

**Fonctionnalités** :  
Présentation des boutons et fonctionnalités :  
*Color Scale* : permet de choisir l'échelle de couleur parmis ceux fournit par la librairie d3.  
*Reverse* : Inverse l'échelle de couleur  
*Dynamic Scale* : Active l'échelle de couleur dynamique pour les vues zoomés  
*Width* : Modifie la largeur des canvas  
*Période Zoom* :  permet de choisir la période de temps à visualiser   
*HeightMultiplier* : permet de multiplier la hauteur des canvas par le facteur inscrit (étire le canvas donc une grosse multiplication entraîne la pixellisation des vues)  
*Bouton Change* : Permet d’appliquer les changements de taille  

**Utilisation** :  
- Cliquer dans le coin supérieur-droit pour ouvrir le menu des paramètres  
- Cliquer dans le coin inférieu-droit pour ouvrir le menu des descriptions des points d'intêret  
- "S" pour sauvegarder une position, "D" pour en supprimer une  
- "Y" et "U" pour déplacer la zone de brushing de la vue du milieu  
- "H" et "J" pour déplacer la zone de brushing de la vue du bas  
- "I" pour forcer un rafraichissement des vues 2 et 3  
