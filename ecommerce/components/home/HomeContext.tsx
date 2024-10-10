import React, { createContext, useState, useContext, ReactNode } from "react";


interface HomeContextType {
    isFocused: boolean;
    setFocus: (focused: boolean) => void;
}
interface HomeProviderProps {
    children: ReactNode;
}

const HomeContext = createContext<HomeContextType>({
    isFocused: false,
    setFocus: () => {}
})


export const HomeProvider: React.FC<HomeProviderProps> = ({ children })=>{
    const [isFocused, setIsFocused] = useState(false);
    const setFocus = (focused: boolean) => {
        setIsFocused(focused);
    };
    return (
        <HomeContext.Provider value={{ isFocused, setFocus }}>
            {children}
        </HomeContext.Provider>
    );
}

export const useHome = (): HomeContextType => {
    return useContext(HomeContext);
};