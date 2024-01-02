"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notifyOnUpdateCity = exports.notifyOnCreateCity = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.notifyOnCreateCity = functions.firestore
    .document('cities/{anyId}')
    .onCreate(async (snapshot, _context) => {
    const cityName = snapshot.data().name;
    const payload = {
        notification: {
            title: 'Nueva ciudad agregada',
            body: `Se ha creado una nueva ciudad: ${cityName}`,
        },
    };
    const tokens = await getDeviceTokens();
    try {
        const response = await admin.messaging().sendToDevice(tokens, payload);
        console.log('Notificación enviada:', response);
        // Verifica la respuesta para obtener detalles de entrega
        response.results.forEach((result, index) => {
            if (result.error) {
                console.error('Error en envío a', tokens[index], result.error);
            }
            else {
                console.log('Notificación enviada exitosamente a', tokens[index]);
            }
        });
        return response;
    }
    catch (error) {
        console.error('Error al enviar la notificación:', error);
        return null;
    }
});
exports.notifyOnUpdateCity = functions.firestore
    .document('cities/{anyId}')
    .onUpdate(async (change, _context) => {
    var _a, _b;
    try {
        const cityNameBefore = (_a = change.before.data()) === null || _a === void 0 ? void 0 : _a.name; // Nombre de la ciudad antes del cambio
        const cityNameAfter = (_b = change.after.data()) === null || _b === void 0 ? void 0 : _b.name; // Nombre de la ciudad después del cambio
        if (!cityNameBefore || !cityNameAfter) {
            console.log('Nombre de la ciudad no encontrado antes o después del cambio.');
            return null;
        }
        const payload = {
            notification: {
                title: 'Ciudad modificada',
                body: `La ciudad ${cityNameBefore} ha sido modificada a ${cityNameAfter}.`,
            },
        };
        const tokens = await getDeviceTokens();
        const response = await admin.messaging().sendToDevice(tokens, payload);
        console.log('Notificación enviada:', response);
        return response; // Devuelve el resultado del envío de notificación
    }
    catch (error) {
        console.error('Error al enviar la notificación:', error);
        return null; // Manejo del error, retorna null o un valor adecuado en caso de error
    }
});
// Implementa tu lógica para obtener los tokens de los dispositivos
async function getDeviceTokens() {
    const firestore = admin.firestore();
    const tokensSnapshot = await firestore.collection('tokens').get();
    const tokens = [];
    tokensSnapshot.forEach((doc) => {
        const token = doc.data().token;
        tokens.push(token);
    });
    return tokens;
}
//# sourceMappingURL=index.js.map