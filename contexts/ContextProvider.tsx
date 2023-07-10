import React, {
    useState,
    createContext,
    useContext,
    FC,
    ReactNode,
    useEffect,
  } from "react";
  
  //We're setting up our reusable states accross the application
  interface IStateContext {
    isMenuOpen: boolean; 
    setIsMenuOpen: (value: boolean) => void; 
    activeMenu: boolean;
    setActiveMenu: (value: boolean) => void; 
    screenSize?: any;
    setScreenSize: (value: any) => void;
    userData: any | null;
    setUserData: (userData: any) => void;
  }
  
  const StateContext = createContext<IStateContext>({} as IStateContext);
   
  
  export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [screenSize, setScreenSize] = useState(null);
    const [activeMenu, setActiveMenu] = useState(true);
    const [userData, setUserData] = useState<any | null>(null);

    //We're setting our userData into localstorage so that when a user refresh the page the data doesnt disappear  
    useEffect(() => {
      if (userData) {
        localStorage.setItem('userData', JSON.stringify(userData));
      }
    }, [userData]);
    
    //We're getting the user data from localstorage
    useEffect(() => {
      const storedUSerData = localStorage.getItem('userData');
      if (storedUSerData) {
          setUserData(JSON.parse(storedUSerData));
      }
    }, []);
  
    return (
      <StateContext.Provider
        value={{
          isMenuOpen, 
          setIsMenuOpen ,
          activeMenu,
          setActiveMenu,
          screenSize,
          setScreenSize,
          userData,
          setUserData
        }}
      >
        {children}
      </StateContext.Provider>
    );
  };
  
  export const useStateContext = (): IStateContext =>
    useContext<IStateContext>(StateContext);