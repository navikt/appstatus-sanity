/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import StatusIcon from '../../components/status-icon/StatusIcon';
import {
    getStatusIconStatusFromApplicationStatus,
    getStatusSubTitleFromApplicationStatus,
} from '../../utils/previewUtils';
import { APPLICATION_STATUS } from '../../types';

const Application = {
    title: 'Applications',
    name: 'application',
    type: 'document',
    fieldsets: [
        {
            name: 'config',
            title: 'Name/Id/Team',
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
            validation: (Rule: { required: () => any }) => Rule.required(),
        },
        {
            title: 'ID',
            name: 'key',
            type: 'string',
            fieldset: 'config',
            validation: (Rule: { required: () => any }) => Rule.required(),
        },
        {
            title: 'Team',
            name: 'team',
            type: 'reference',
            to: [{ type: 'team' }],
            fieldset: 'config',
            validation: (Rule: { required: () => any }) => Rule.required(),
        },
        {
            title: 'Application status',
            name: 'applicationStatus',
            type: 'applicationStatus',
            validation: (Rule: { required: () => any }) => Rule.required(),
        },
        {
            title: 'Schedule',
            name: 'schedule',
            type: 'array',
            of: [{ type: 'scheduleItem' }],
        },
    ],
    preview: {
        select: {
            title: 'name',
            available: 'available',
            team: 'team.name',
            teamAppStatus: 'team.teamApplicationStatus',
            applicationStatus: 'applicationStatus',
        },
        prepare(props: any) {
            const useTeamAppStatus = props.applicationStatus.status === APPLICATION_STATUS.team;
            const { status = APPLICATION_STATUS.normal } = useTeamAppStatus
                ? props.teamAppStatus
                : props.applicationStatus;

            console.log(props, useTeamAppStatus, status);

            return {
                title: props.title,
                subtitle: `${getStatusSubTitleFromApplicationStatus(status)}${
                    useTeamAppStatus ? ' (inherited)' : ''
                } - ${props.team}`,
                media: <StatusIcon status={getStatusIconStatusFromApplicationStatus(status)} />,
            };
        },
    },
    initialValue: {
        applicationStatus: APPLICATION_STATUS.team,
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
        {
            title: 'team asc',
            name: 'team',
            by: [{ field: 'team.name', direction: 'asc' }],
        },
        {
            title: 'team desc',
            name: 'team',
            by: [{ field: 'team.name', direction: 'desc' }],
        },
    ],
};

export default Application;
