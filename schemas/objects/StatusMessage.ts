import { MESSAGE_TYPE } from '../../types';
import { toPlainText, shortenText } from '../../utils/previewUtils';

const Message = {
    title: 'Status message',
    name: 'statusMessage',
    type: 'object',
    fields: [
        {
            title: 'Message content',
            name: 'message',
            type: 'localeRichText',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Message type',
            name: 'messageType',
            type: 'string',
            options: {
                layout: 'radio',
                list: [
                    { title: 'Information (default)', value: MESSAGE_TYPE.info },
                    { title: 'Instability', value: MESSAGE_TYPE.alert },
                    { title: 'Unavailable', value: MESSAGE_TYPE.unavailable },
                ],
            },
        },
    ],
    preview: {
        select: {
            title: 'message',
            starts: 'messageType',
        },
        prepare(props) {
            const title = shortenText(toPlainText(props.message));
            const subtitle = props.messageType;
            return {
                title,
                subtitle,
            };
        },
    },
};

export default Message;
