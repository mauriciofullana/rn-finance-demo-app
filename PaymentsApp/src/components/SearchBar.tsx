import React, { FunctionComponent } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../styles';

export interface SearchBarProps {
    term: string,
    onTermChange: any
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ term, onTermChange }) => {

    const clearTerm = () => {
        onTermChange('');
    }

    return <View style={styles.backgroundView}>
        <Feather style={styles.searchIcon}
            name="search"
        />
        <TextInput
            style={styles.input}
            placeholder="Buscar"
            placeholderTextColor={Colors.mediumGray}
            autoCapitalize="none"
            autoCorrect={false}
            value={term}
            onChangeText={onTermChange}
        />
        {!!term && <TouchableOpacity style={styles.clearIconContainer} onPress={clearTerm}>
                <Feather style={styles.searchIcon}
                    name="x-circle"
                />
            </TouchableOpacity>
        }
    </View>
}

const styles = StyleSheet.create({
    backgroundView: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        height: 40,
        borderColor: Colors.mediumGray,
        borderWidth: 0.5,
        borderRadius: 5
    },
    searchIcon: {
        color: Colors.mediumGray,
        marginHorizontal: 15,
        fontSize: 24,
        alignSelf: "center"
    },
    clearIconContainer: {
        alignSelf: "center"
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: Colors.lightGray
    }
});

export default SearchBar;
