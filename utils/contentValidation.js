import { defaultLocale } from '../schemas/locales';

export const validateLocaleString = (obj) => {
    if (obj === undefined || obj[defaultLocale] === undefined || obj[defaultLocale] === '') {
        return 'Påkrevd felt';
    }
    return true;
};

export const localeContentValidation = (Rule) =>
    Rule.custom((obj) => {
        return validateLocaleString(obj);
    });
