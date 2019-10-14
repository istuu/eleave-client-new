import { addLocaleData } from 'react-intl';
import enLang from './entries/en-US';
import idLang from './entries/id-ID';

const AppLocale = {
    en: enLang,
    id: idLang
};
addLocaleData(AppLocale.en.data);
addLocaleData(AppLocale.id.data);

export default AppLocale;
