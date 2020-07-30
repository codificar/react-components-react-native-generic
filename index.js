import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

class GenericComponent extends Component {
    static propTypes = {
        route: PropTypes.string.isRequired,
        providerId: PropTypes.number.isRequired,
        token: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
    }
    static defaultProps = {
        color: 'blue',
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Entered the screen")
    }

    render() {
        const { color, route, providerId, token } = this.props;
        return (
            <View style={styles.body}>
                <Text style={{ color: color }}>
                    {route}
                </Text>
                <Text>{providerId}</Text>
                <Text>{token}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default GenericComponent;