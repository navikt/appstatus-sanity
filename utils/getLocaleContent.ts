/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { defaultLocale } from '../schemas/locales';

export const getLocaleContent = (node: any) => {
    if (hasLocaleValue(node)) {
        return node[defaultLocale];
    }
    return undefined;
};

export const hasLocaleValue = (node: any) => {
    return node !== undefined && node[defaultLocale] !== undefined && node[defaultLocale] !== '';
};
