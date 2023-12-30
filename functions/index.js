// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const {logger} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const functions = require('firebase-functions');
const {getFirestore} = require("firebase-admin/firestore");

initializeApp();

exports.notifyOnCreateCity = functions.firestore
    .document('/cities/{cityId}')
    .onCreate((snapshot, context) => {
        const cityId = context.params.cityId;

        const payload = {
            notification: {
                title: 'Nueva ciudad agregada',
                body: `Se ha creado una nueva ciudad con ID: ${cityId}`,
            },
        };

        return admin.messaging().sendToTopic('new_cities', payload);
    });

exports.notifyOnUpdateCity = functions.firestore
    .document('/cities/{cityId}')
    .onUpdate((change, context) => {
        const newValue = change.after.data();
        const previousValue = change.before.data();
        const cityId = newValue.cityId;

        const payload = {
            notification: {
                title: 'Ciudad actualizada',
                body: `Se ha actualizado la ciudad con ID: ${cityId}`,
            },
        };

        return admin.messaging().sendToTopic('updated_cities', payload);
    });
