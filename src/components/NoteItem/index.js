import React from 'react';
import  {
    Box,
    Title,
    Body
} from './styles';

export default ({data, index, onPress}) => {
    return (
        <Box  onPress={()=>onPress(index)} activeOpacity={0.5} >
            <Title>{data.title}</Title>
            <Body>{data.body}</Body>
        </Box>
    );
} 