import admin from 'firebase-admin'
import _ from 'lodash';

const admin_databaseURL = process.env.ASMIN_SDKURL;
const serviceAccount = JSON.parse(process.env.GOOGLE_CREDENTIALS as string);

admin.initializeApp({
  credential: admin.credential.cert(_.mapKeys(serviceAccount, (v, k) => _.camelCase(k))),
  databaseURL: admin_databaseURL,
});
