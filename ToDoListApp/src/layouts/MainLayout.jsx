import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const MainLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
            <View style={styles.footer}>
                <Text>Copyright © tianabautista 2024</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    footer: {
        flex: 1,
        padding: 20,
    },
});

export default MainLayout;