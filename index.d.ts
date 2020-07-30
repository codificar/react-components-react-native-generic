import * as React from 'react';

interface GenericComponentProps {
    /**
     * route for API request
     */
    route: string,

    /**
     * id for API request
     */
    providerId: number,

    /**
     * token for API request
     */
    token: string,

    /**
     * text color
     */
    color: string,
}

export default class GenericComponent extends React.Component<GenericComponentProps>{ }