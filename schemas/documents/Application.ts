const Application = {
    title: 'Applikasjon',
    name: 'application',
    type: 'document',

    fields: [
        {
            title: 'Navn',
            name: 'name',
            type: 'string',
        },
        {
            title: 'ID',
            name: 'key',
            type: 'string',
        },
        {
            title: 'Team',
            name: 'team',
            type: 'reference',
            to: [{ type: 'team' }],
        },
        {
            title: 'Er tilgjengelig',
            name: 'available',
            type: 'boolean',
            options: {
                layout: 'checkbox',
            },
        },
    ],
    preview: {
        select: { title: 'name', available: 'available' },
        prepare(props) {
            return {
                title: props.title,
                subtitle: props.available === false ? 'Ikke tilgjengelig' : undefined,
            };
        },
    },
    orderings: [
        {
            title: 'navn',
            name: 'name',
            by: [{ field: 'name', direction: 'asc' }],
        },
        {
            title: 'tilgjengelig',
            name: 'available',
            by: [{ field: 'available', direction: 'asc' }],
        },
    ],
};

export default Application;
