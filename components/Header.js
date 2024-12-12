import React from 'react';
import { AppBar } from "@react-native-material/core";

const Header = () => {
    return (
        <AppBar
            title="Task List"
            centerTitle={true}
        />
    );
};

export default Header;