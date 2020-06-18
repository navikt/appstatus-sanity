const Application = {
    title: 'Applications',
    name: 'application',
    type: 'document',
    fieldsets: [
        {
            name: 'config',
            title: 'Name/Id/Team',
            options: {
                collapsible: true,
            },
        },
        {
            name: 'status',
            title: 'Overall status',
        },
        {
            name: 'schedule',
            title: 'Schedule',
        },
    ],
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            fieldset: 'config',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'ID',
            name: 'key',
            type: 'string',
            fieldset: 'config',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Team',
            name: 'team',
            type: 'reference',
            to: [{ type: 'team' }],
            fieldset: 'config',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Is available',
            name: 'available',
            type: 'boolean',
            fieldset: 'status',
        },
        {
            title: 'Schedule',
            name: 'schedule',
            type: 'array',
            of: [{ type: 'scheduleItem' }],
        },
    ],
    preview: {
        select: { title: 'name', available: 'available' },
        prepare(props) {
            return {
                title: props.title,
                subtitle: props.available === false ? 'Not available' : undefined,
            };
        },
    },
    orderings: [
        {
            title: 'name',
            name: 'name',
            by: [{ field: 'name', direction: 'asc' }],
        },
        {
            title: 'availability',
            name: 'available',
            by: [{ field: 'available', direction: 'asc' }],
        },
    ],
};

export default Application;
