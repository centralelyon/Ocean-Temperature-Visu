from flask import Flask
from flask_socketio import SocketIO,send,emit
from flask_cors import CORS
import numpy as np
import h5py
import eventlet
import json
import argparse


parser = argparse.ArgumentParser()

parser.add_argument('-f', '--filename',
                    default='GMS_20210621.hdf5',
                    type=str)

args = parser.parse_args()


eventlet.monkey_patch()
app = Flask(__name__)
cors = CORS(app,resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app, cors_allowed_origins="*")




#fname = 'RUSNL_20210629.hdf5'
fname = args.filename
datasetname = 'temperature'
metafname = 'meta'+fname.split('.')[0]
try:
 with open(metafname+'.json', 'r', encoding='utf-8') as f:
    pass
except IOError:
 with open(metafname+'.json', 'w', encoding='utf-8') as f:
    pass


@app.route('/')
def hello_world():
    return 'tHello, World!'
### JSON TAG SAVE PART
@socketio.on('metawrite')
def metawrite(data):
    print('Saving.... ')
    print(data)
    l = data.split('_')
    t1 = float(l[0])
    t2 = float(l[1])
    zoom = l[2]
    zoom2 = l[3]
    datadict = {'name' : fname,'t1' : t1,'t2' : t2,'zoom' : zoom,'zoom2' : zoom2, 'title' : "",'Description' : ""}
    flag = False
    resu = [];
    with open(metafname+'.json', 'r', encoding='utf-8') as f:
        for line in f:
            resu.append(json.loads(line))
    
    for el in resu:
        if el['t1'] == t1 and el['t2'] == t2 and el['name'] == fname:
            flag = True;

    if flag == False:
        with open(metafname+'.json', 'a', encoding='utf-8') as f:
            json.dump(datadict, f)
            f.write('\n')
    print('Saved')
    
    
@socketio.on('metaread')
def metaread():
    resu = []
    with open(metafname+'.json', 'r', encoding='utf-8') as f:
        for line in f:
            resu.append(line)
    return resu

@socketio.on('metadelete')
def metawdelete(data):
    print('Deleting.... ')
    print(data)
    l = data.split('_')
    t1 = float(l[0])
    t2 = float(l[1])
    zoom = l[2]
    zoom2 = l[3]
    resu = []
    with open(metafname+'.json', 'r', encoding='utf-8') as f:
        for line in f:
            resu.append(json.loads(line))
    
    with open(metafname+'.json', 'w', encoding='utf-8') as f:
        for el in resu:
            if el['t1'] == t1 and el['t2'] == t2 and el['name'] == fname:
                pass
            else:
                json.dump(el, f)
                f.write('\n')

    print('Deleted')
    
@socketio.on('changeTitle')
def metachangetitle(idA,data):
    if(idA == -1):
        return
    print("ChangeTitle")
    resu = []
    with open(metafname+'.json', 'r', encoding='utf-8') as f:
        for line in f:
            resu.append(json.loads(line))
    
    resu[idA]['title'] = data;
    
    with open(metafname+'.json', 'w', encoding='utf-8') as f:
        for el in resu:
            json.dump(el, f)
            f.write('\n')

@socketio.on('changeDescription')
def metachangeDescription(idA,data):
    if(idA == -1):
        return
    print("ChangeDescription")
    resu = []
    with open(metafname+'.json', 'r', encoding='utf-8') as f:
        for line in f:
            resu.append(json.loads(line))
    
    resu[idA]['Description'] = data;
    
    with open(metafname+'.json', 'w', encoding='utf-8') as f:
        for el in resu:
            json.dump(el, f)
            f.write('\n')
    
###------------------


@socketio.on('connect')
def printco():
    print('Connected')
    
@socketio.on('disconnect')
def printdeco():
    print('Disconnected')
    
@socketio.on('message')
def handle_message(data):
    print(data)


@socketio.on('length')
def sendlen(strr):
    f = h5py.File(fname,'r')
    l = f[strr].size.item()
    f.close()
    return l

@socketio.on('extent')
def sendextent():
    f = h5py.File(fname,'r')
    temperature = f[datasetname][:,::int(f[datasetname].shape[1]/200)]
    response = np.array([temperature.min()/f['TintFactor'][0],temperature.max()/f['TintFactor'][0]],dtype=np.float32)
    response = response.tobytes()
    return response

@socketio.on('extentdyn')
def sendextentdyn(x,y):
    f = h5py.File(fname,'r')
    temperature = f[datasetname][:,x:y:int((y-x)/200)]
    response = np.array([temperature.min()/f['TintFactor'][0],temperature.max()/f['TintFactor'][0]],dtype=np.float32)
    response = response.tobytes()
    return response
    
    


@socketio.on('request')
def senddepth(strr):
    print('Requete lancée : ')
    print(strr)
    l = strr.split('_')
    name = l[0]
    f = h5py.File(fname,'r')
    x = int(l[1])
    y = int(l[2])
    delta = int(l[3])
    c = False
    if len(l) == 5:
        cx = int(l[4]);
        cy = int(l[4])+1;
        c = cx
    if len(l) == 6:
        cx = int(l[4]);
        cy = int(l[5]);
    ###
    if len(l) == 4 and name == datasetname:
        response = f[name][:,x:y:delta]
        response = response.astype(np.float32)/np.float32(f['TintFactor'][0])
    elif name == datasetname:
        response = f[name][cx:cy,x:y:delta]
        response = response.astype(np.float32)/np.float32(f['TintFactor'][0])
    else:
        response = f[name][x:y:delta]
    response = response.tobytes()
    f.close()
    print('Requete terminée')
    print('___')
    return response,c

@socketio.on('ping')
def pong():
    emit('pong')
    
if __name__=='__main__':
    print('Launched')
    socketio.run(app)
    
    
