import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color:#DDD;
    justify-content:flex-end;
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
    font-size:17px;
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
export const DeleteButton = styled.TouchableHighlight`
    width:70px;
    height:70px;
    border-radius:35px;
    background-color: #FF4444;
    justify-content:center;
    align-items:center;
    align-self:flex-end;
    position:absolute;
`;
export const DeleteButtonImage = styled.Image`
    width:27px;
    height:27px;
`;