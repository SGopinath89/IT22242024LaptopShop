import axios from 'axios';
import { useState, useEffect, useContext, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        const data = localStorage.getItem('auth');
        if (data) {
            const parsedData = JSON.parse(data);
            return {
                user: parsedData.user,
                token: parsedData.token,
            };
        }
        return {
            user: null,
            token: "",
        };
    });

    // Set default axios headers
    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = auth?.token;
    }, [auth?.token]);

    useEffect(() => {
        const data = localStorage.getItem('auth');
        if (data) {
            const parsedData = JSON.parse(data);
            setAuth((prevAuth) => ({
                ...prevAuth,
                user: parsedData.user,
                token: parsedData.token,
            }));
        }
    }, []);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
