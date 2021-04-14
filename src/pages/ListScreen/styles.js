import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color: #DDD;
    justify-content:center;
    align-items:center;
`;

export const AddButton = styled.TouchableHighlight`
    margin-right: 15px;
    width:40px;
    height:40px;
    border-radius:20px;
    background-color: #000;
    justify-content:center;
    align-items:center;
`;

export const AddButtonImage = styled.Image`
    width:25px;
    height:25px;
`;

export const NotesList = styled.FlatList`
    flex:1;
    width:100%;

`;