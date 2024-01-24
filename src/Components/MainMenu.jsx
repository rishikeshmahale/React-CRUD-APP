import React from "react";
import { Box, Typography, styled } from '@mui/material';


const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const MainMenu = () => {

    return (
        <Header>
            <Typography variant="h4">CRUD</Typography>
        </Header>
    )
}

export default MainMenu;