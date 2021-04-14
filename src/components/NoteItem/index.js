import React from 'react';
import  {
    Box,
    Title
} from './styles';

export default ({data, index, onPress}) => {
    return (
        <Box onPress={()=>onPress(index)} activeOpacity={0.5} underlayColor="transparent">
            <Title>{data.title}</Title>
        </Box>
    );
} 