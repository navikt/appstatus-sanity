import { localeContentValidation } from '../../utils/contentValidation';
import { toPlainText, shortenText } from '../../utils/previewUtils';
import { getLocaleContent } from '../../utils/getLocaleContent';
import { defaultLocale } from '../locales';

const MESSAGE_TYPE = {
    info: 'info',
    alert: 'alert',
    unavailable: 'unavailable',
};

const Message = {
    title: 'Systemmelding',
    name: 'systemMessage',
    type: 'document',
    id: 'systemMessage',
    fieldsets: [
        {
            name: 'internal',
            title: 'Internt',
            options: {
                collapsible: false,
            },
        },
        {
            name: 'public',
            title: 'Innhold',
            options: {
                collapsible: false,
            },
        },
    ],
    fields: [
        {
            title: 'Navn',
            name: 'name',
            type: 'string',
            validation: (Rule) => Rule.required(),
            fieldset: 'internal',
        },
        {
            title: 'Meldingstype',
            name: 'messageType',
            type: 'string',
            fieldset: 'internal',
            options: {
                layout: 'radio',
                list: [
                    { title: 'Informasjon', value: MESSAGE_TYPE.info },
                    { title: 'Ustabilitet', value: MESSAGE_TYPE.alert },
                    { title: 'Utilgjengelig', value: MESSAGE_TYPE.unavailable },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Hvor skal meldingen vises?',
            name: 'application',
            type: 'array',
            fieldset: 'internal',
            of: [{ type: 'reference', to: [{ type: 'application' }] }],
        },
        {
            title: 'Vis melding i alle applikasjoner',
            name: 'isGlobal',
            type: 'boolean',
            fieldset: 'internal',
        },
        {
            title: 'Synlig fra',
            name: 'starts',
            type: 'datetime',
            fieldset: 'internal',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Synlig til',
            name: 'stops',
            type: 'datetime',
            fieldset: 'internal',
        },
        {
            title: 'Melding',
            name: 'content',
            type: 'localeRichText',
            validation: localeContentValidation,
        },
    ],
    preview: {
        select: {
            name: 'name',
            style: 'style',
            content: 'content',
        },
        prepare(props) {
            const title = `${props.name}`;
            const subtitle = toPlainText(getLocaleContent(props.content, defaultLocale));

            return {
                title,
                subtitle: `[${props.style}] ${shortenText(subtitle) || 'Uten tittel'}`,
            };
        },
    },
};
export default Message;
