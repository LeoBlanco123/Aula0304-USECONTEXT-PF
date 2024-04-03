import React from "react";
import { Avatar, Button, Icon, ListItem, Text } from "@rneui/base";
import {FlatList, View}from 'react-native';
import dadosUsuario from "./dados/dadosUsuario";

function getUsuarios({item}){
    return(
        <ListItem>
            <Avatar/>

            <ListItem.Content>
                <ListItem.Title>{item.nome}</ListItem.Title>
                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
            </ListItem.Content>

            <ListItem.Content right style={{flexDirection:'row'}}>
                <Button 
                    icon={<Icon name='edit' color='blue'/>}
                    type="clear"
                />
                <Button 
                    icon={<Icon name='delete' color='red'/>}
                    type="clear"
                />
            </ListItem.Content>

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