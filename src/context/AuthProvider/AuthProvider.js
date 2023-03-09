import React, { createContext } from 'react';
import useAuthHooks from '../../hooks/useAuthHooks';

export const AuthContext=createContext();
const AuthProvider = ({children}) => {

        
    const authInfo=useAuthHooks();
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;