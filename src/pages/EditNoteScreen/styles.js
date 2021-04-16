import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color:#DDD;
`;

export const TitleInput = styled.TextInput`
    font-size:20px;
    font-weight:bold;
    padding:15px;
    color:#000;
`;

export const BodyInput = styled.TextInput`
    flex:1;
    padding:15px;
    font-size:15px;
    color:#000;
`;
export const SaveButton = styled.TouchableHighlight`
    margin-right:15px;
    justify-content:center;
    align-items:center;
`;

export const SaveButtonImage = styled.Image`
    width:24px;
    height:24px;
`;
export const CloseButton = styled.TouchableHighlight`
    margin-left:15px;
    justify-content:center;
    align-items:center;
`;
export const CloseButtonImage = styled.Image`
    width:27px;
    height:27px;
`;
