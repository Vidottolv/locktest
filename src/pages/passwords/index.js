import { useState, useEffect } from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import { PasswordItem } from './components/passwordItem'

export function Passwords(){
    const[listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused();
    const {getItem, removeItem} = useStorage();

    useEffect(() => {
        async function loadPasswords(){
            const passwords = await getItem("@pass")
            setListPasswords(passwords);
        }
        loadPasswords();
    }, [focused])

    async function handleDeletePassword(item){
        const passwords = await removeItem("@pass", item)
        setListPasswords(passwords)
    }

    return(
        <SafeAreaView style={{ flex:1, }}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList 
                style ={styles.flatStyle}
                data={listPasswords}
                keyExtractor={(item) => String(item)}
                renderItem={({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)}/>}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#329de9",
        padding:34
    },
    title:{
        fontSize:18,
        color:'#FFF',
        fontWeight:'bold'
    },
    content:{
        flex:1,
        paddingLeft:14,
        paddingRight:14,
    },
    flatStyle:{
        flex:1,
        paddingTop:14,
    }
})