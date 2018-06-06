import {tousPubs} from './services/pubs.services.js';
import {pubsOuverts} from './services/pubs.services.js';

export function getListPub() {
    console.log(pubService.tousPubs());
}

export function getListPubOpen() {
    console.log(pubService.pubsOuverts());
};

export function afficherListe(){
    let ul = document.getElementById('list_pubs');
    tousPubs().forEach(pub => {
        let sentence = 'Le pub ' + pub['name'] + ' appartient à ' + pub['owner']['firstName'] + ' ' + pub['owner']['lastName'];
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(sentence));
        ul.appendChild(li);
    });
}

export function afficherListeOuverts(){
    let ul = document.getElementById('list_pubs');
    pubsOuverts().forEach(pub => {
        let sentence = 'Le pub ' + pub['name'] + ' appartient à ' + pub['owner']['firstName'] + ' ' + pub['owner']['lastName'];
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(sentence));
        ul.appendChild(li);
    });
}

afficherListeOuverts();