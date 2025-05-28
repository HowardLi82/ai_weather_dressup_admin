import { getAuth } from 'firebase-admin/auth';
import './firebase';

(async () => {
    const configManger = getAuth().projectConfigManager()

    const updated= await configManger.updateProjectConfig(
    {
        emailPrivacyConfig: {
        enableImprovedEmailPrivacy: false,
        },
    }
    );

    console.log(updated);

})();
