import React, { useState,useLayoutEffect, useEffect } from 'react';
import { useNavigation,useRoute} from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';


import  {
    Container,
    TitleInput,
    BodyInput,
    SaveButton,
    SaveButtonImage,
    CloseButton,
    CloseButtonImage
} from './styles';

export default () => {

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const list = useSelector(state=>state.notes.list);

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [status,setStatus] = useState('new');


    useEffect(()=>{
        if(route.params?.key != undefined && list[route.params.key]){
            setStatus('edit');
            setTitle(list[route.params.key].title);
            setBody(list[route.params.key].body);

        }

    },[]);

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: status == 'new' ? 'Nova Anotação' : 'Editar Anotação',
            
            headerRight: () =>(
                <SaveButton underlayColor="#DDD" activeOpacity={0.2} onPress={hanadleSaveButton}>
                    <SaveButtonImage source={require('../../assets/check.png')}/>
                </SaveButton>
            ),
            headerLeft: ()=> (
                <CloseButton underlayColor="#DDD" activeOpacity={0.2} onPress={hanadleSaveButton}>
                    <CloseButtonImage source={require('../../assets/cancel.png')}/>
                </CloseButton>
            )
        });

    },[status,title, body]);

    const hanadleSaveButton = ()=> {

    }
    

    return(
        <Container>
            <TitleInput 
                value={title}
                onChangeText={t=>setTitle(t)}
                placeholder="Title"
                placeholderTextColor="#999"
                autoFocus={true}
            />
            <BodyInput
                value={body}
                onChangeText={t=>setBody(t)}
                multiline={true} 
                textAlignVertical="top"
                />
        </Container>
    );
}