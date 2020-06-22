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
            title: 'Message',
            name: 'message',
            type: 'statusMessage',
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
