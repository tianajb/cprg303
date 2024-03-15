
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({ navigation }) {
    return (
        <MainLayout>
            <SafeAreaView>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
                <Text>About:</Text>
                <Text>To Do List App</Text>
                <Text>Name: Tiana Bautista</Text>
                <Text>Date: March 15, 2024</Text>
            </SafeAreaView>
        </MainLayout>
    );
}

