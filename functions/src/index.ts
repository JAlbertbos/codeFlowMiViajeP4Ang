import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const notifyOnCreateCity = functions.firestore
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
        } else {
          console.log('Notificación enviada exitosamente a', tokens[index]);
        }
      });

      return response;
    } catch (error) {
      console.error('Error al enviar la notificación:', error);
      return null;
    }
  });



  export const notifyOnUpdateCity = functions.firestore
  .document('cities/{anyId}')
  .onUpdate(async (change, _context) => {
    try {
      const cityNameBefore = change.before.data()?.name; // Nombre de la ciudad antes del cambio
      const cityNameAfter = change.after.data()?.name; // Nombre de la ciudad después del cambio

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
    } catch (error) {
      console.error('Error al enviar la notificación:', error);
      return null; // Manejo del error, retorna null o un valor adecuado en caso de error
    }
  });


// Implementa tu lógica para obtener los tokens de los dispositivos
async function getDeviceTokens() {
  
  const tokens = ['e6kZnCiGPNeprsx3QsUIpn:APA91bFfhM1JyPg-n26y2yaCB86i2T4vTbMntvtqOSSxOiw82CdzSXCu5NcPMu6_jMDe3WsS3Rrr4sbQtte9T2yR_XAqT0JoolCq5fz6rxLzA2oX47cl0guHbIK9gFn_qUmpaGUSbuv9'];
  return tokens;
}


