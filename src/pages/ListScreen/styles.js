import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #DDD;
    justify-content:flex-end;
    align-items:center;
    
`;

export const AddButton = styled.TouchableHighlight`
    width:70px;
    height:70px;
    border-radius:35px;
    background-color: #98FB98;
    justify-content:center;
    align-items:center;
    align-self:flex-end;
    position:absolute;
    right:15px;
    bottom:15px;
`;

export const AddButtonImage = styled.Image`
    width:25px;
    height:25px;
`;

export const NotesList = styled.FlatList`
    flex:1;
    width:100%;
`;

export const NoNotes = styled.View`
    margin-bottom:100%;
    align-items:center;
`;
export const NoNotesImage = styled.Image`
    width:50px;
    height:50px;
    margin-bottom:10px;
`;
export const NoNotesText = styled.Text`
    font-size:17px;
`;

