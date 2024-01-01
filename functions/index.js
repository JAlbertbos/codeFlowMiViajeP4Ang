const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const messaging = admin.messaging();
const db = admin.firestore();

exports.sendPushNotificationOnWrite = functions.firestore.document('cities/{anyId}')
  .onWrite(async (change, _context) => {
    // Obtener los tokens de dispositivo de Firestore
    const tokensSnapshot = await db.collection('devices').get();
    const tokens = tokensSnapshot.docs.map(doc => doc.data().token);

    const messageData = change.after.data();

    const payload = {
      notification: {
        title: 'Se ha añadido o eliminado una ciudad',
        body: `La ciudad ${messageData.name} ha sido añadida o modificada.`,
      },
    };

    // Enviar notificación a todos los dispositivos
    return messaging.send(tokens, payload)
      .then(response => {
        console.log('Notificación enviada con éxito:', response);
        return null;
      })
      .catch(error => {
        console.error('Ocurrió un error al enviar la notificación:', error);
      });
  });

  exports.sendPushNotificationOnUpdate = functions.firestore.document('cities/{anyId}')
  .onUpdate(async (change, _context) => {
    // Obtener los tokens de dispositivo de Firestore
    const tokensSnapshot = await db.collection('devices').get();
    const tokens = tokensSnapshot.docs.map(doc => doc.data().token);

    const messageData = change.after.data();

    const payload = {
      notification: {
        title: 'Se ha modificado una ciudad',
        body: `La ciudad ${messageData.name} ha sido actualizada.`,
      },
    };

    // Enviar notificación a todos los dispositivos
    return messaging.send(tokens, payload)
      .then(response => {
        console.log('Notificación enviada con éxito:', response);
        return null;
      })
      .catch(error => {
        console.error('Ocurrió un error al enviar la notificación:', error);
      });
  });

