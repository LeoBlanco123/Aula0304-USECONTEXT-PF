import React from "react";
import { Avatar, ListItem, Text } from "@rneui/base";
import {FlatList, View}from 'react-native';
import dadosUsuario from "./dados/dadosUsuario";

function getUsuarios({item}){
    return(
        <ListItem>
            <Avatar/>
        </ListItem>
    )
}

export default props =>{

    return (
        <View>
            <Text>Tela Listagem</Text>
            <FlatList
                data={dadosUsuario}                
                renderItem={getUsuarios}
            />
        </View>
    );
}