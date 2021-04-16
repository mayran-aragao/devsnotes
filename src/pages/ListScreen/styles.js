import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color: #DDD;
    justify-content:flex-end;
    align-items:center;
`;

export const AddButton = styled.TouchableHighlight`
    margin:15px;
    width:80px;
    height:80px;
    border-radius:40px;
    background-color: #98FB98;
    justify-content:center;
    align-items:center;
    align-self:flex-end;
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
    margin-bottom:260px;
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

