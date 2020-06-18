import moment from 'moment';
import { MESSAGE_TYPE } from '../../types';

const formatTime = (dateString: string): string => moment(dateString).format('DD. MMM. yyyy hh:mm');

const ScheduleItem = {
    title: 'Schedule item',
    name: 'scheduleItem',
    type: 'object',
    fields: [
        {
            title: 'Internal name',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Starts at',
            name: 'starts',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Ends at',
            name: 'ends',
            type: 'datetime',
        },
        {
            title: 'Disable application',
            name: 'disableApplication',
            type: 'boolean',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Message (optional)',
            name: 'message',
            type: 'localeRichText',
        },
        {
            title: 'Message type',
            description: 'Relates to alertStripe from nav-frontend; info, warning, error',
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
            title: 'title',
            starts: 'starts',
            ends: 'ends',
        },
        prepare(props) {
            const subtitle = `${formatTime(props.starts)} - ${props.ends ? formatTime(props.ends) : 'No end-time set'}`;
            return {
                title: props.title,
                subtitle,
            };
        },
    },
};

export default ScheduleItem;
