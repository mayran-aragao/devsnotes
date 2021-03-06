import React, { useLayoutEffect } from 'react';
import { useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';

import NoteItem from '../../components/NoteItem';

import  {
    Container,
    AddButton,
    AddButtonImage,
    NotesList,
    NoNotes,
    NoNotesImage,
    NoNotesText
} from './styles';

export default () => {
    const navigation = useNavigation();
    const list = useSelector(state=> state.notes.list);
    //const list=[];

    useLayoutEffect(() =>{
        navigation.setOptions({
            title:'Suas Notas',
           /* headerRight: () => (
                <AddButton underlayColor="transparent" activeOpacity={1} onPress={()=>navigation.navigate('EditNote')}>
                    <AddButtonImage source={require('../../assets/more.png')}/>
                </AddButton>
            )*/
        });
    },[]);

    const handleNotePress = (index) =>{
        navigation.navigate('EditNote',{
            key:index
        });
    }
    
    return(
        <Container>
            
            {list.length > 0 &&
                <NotesList
                    data={list}
                    numColumns={2}
                    renderItem={({item,index})=>(
                        <NoteItem
                            data={item}
                            index={index}
                            onPress={handleNotePress}
                            
                        />
                    )}
                    keyExtractor={(item,index)=>index.toString()}
                />
            }
            {list.length == 0 &&
                <NoNotes>
                    <NoNotesImage source={require('../../assets/note.png')} />
                    <NoNotesText>Nenhuma anotação</NoNotesText>
                </NoNotes>
            
            }
            <AddButton  underlayColor="#8FBC8F" activeOpacity={0.85} onPress={()=>navigation.navigate('EditNote')}>
                <AddButtonImage source={require('../../assets/more.png')}/>
            </AddButton>
            
        </Container>
    );
}