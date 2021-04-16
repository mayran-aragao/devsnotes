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
    CloseButtonImage,
    DeleteButton,
    DeleteButtonImage
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
                <SaveButton underlayColor="#DDD" activeOpacity={0.2} onPress={handleSaveButton}>
                    <SaveButtonImage source={require('../../assets/check.png')}/>
                </SaveButton>
            ),
            headerLeft: ()=> (
                <CloseButton underlayColor="#DDD" activeOpacity={0.2} onPress={handleCloseButton}>
                    <CloseButtonImage source={require('../../assets/cancel.png')}/>
                </CloseButton>
            )
        });

    },[status,title, body]);

    const handleSaveButton = ()=> {
        if (title != '' || body != ''){
            if(status == 'edit') {
                dispatch({
                    type: 'EDIT_NOTE',
                    payload:{
                        key:route.params.key,
                        title,
                        body
                    }
                });
            }else{
                dispatch({
                    type: 'ADD_NOTE',
                    payload:{title,body}
                });
            }
            navigation.goBack();    
        }else {
            alert("Preencha Algum campo")
        }
    }

    const handleCloseButton = () => {
        navigation.goBack();
    }

    const handleDeleteNote = () => {
        dispatch({
            type:'DEL_NOTE',
            payload:{
                key: route.params.key
            }
        });
        navigation.goBack();
    }
    

    return(
        <Container>
            <TitleInput 
                value={title}
                onChangeText={t=>setTitle(t)}
                placeholder="Title"
                placeholderTextColor="#999"
                
            />
            <BodyInput
                value={body}
                autoFocus={true}
                onChangeText={t=>setBody(t)}
                multiline={true} 
                textAlignVertical="top"
            />
            {status =='edit' &&
                <DeleteButton underlayColor="#FF2222" onPress={handleDeleteNote}>
                    <DeleteButtonImage source={require('../../assets/delete.png')}/>
                </DeleteButton>
            }
        </Container>
    );
}