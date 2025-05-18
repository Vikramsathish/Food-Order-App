import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }){
    const [UserProgress, SetUserProgress] = useState('');

    function showCart(){
        SetUserProgress('cart');
    }
    function hideCart(){
        SetUserProgress('');
    }
    
    function showCheckout(){
        SetUserProgress('Checkout');
    }

    function hideCheckout(){
        SetUserProgress('');
    }

    const UserProgressCtx = {
        progress: UserProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
    };



    return (
        <UserProgressContext.Provider value={UserProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    );
}

export default UserProgressContext;