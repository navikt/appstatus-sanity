import { defaultLocale } from '../schemas/locales';

export const getLocaleContent = (node) => {
    if (hasLocaleValue(node)) {
        return node[defaultLocale];
    }
    return undefined;
};

export const hasLocaleValue = (node) => {
    return node !== undefined && node[defaultLocale] !== undefined && node[defaultLocale] !== '';
};
