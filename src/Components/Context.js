import React, { useCallback, useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [clicked, setClicked] = useState(false);
    const [url, setUrl] = useState(["https://yunus-chat-server.herokuapp.com", "https://enchanted-principal.glitch.me","https://yunus-chat-server.herokuapp.com"]);
    const [value, setValue] = useState("");
    const [messages, setMessages] = useState([]);
console.log(messages);
console.log(value);
    const fetchMessages = useCallback(async () => {
        const urljoin = value + "/messages"
        console.log(urljoin)
           try {
               const response = await fetch(urljoin);
               const data = await response.json();
               if (data) {
                   setMessages(data)
                   setValue("")
               } else {
                   return data;
               }
           } catch (error) {
               console.log(error);
           }
    }, [value])
    const submit = () => {
        fetchMessages();
        setUrl(url.concat(value).reverse())
        setValue("");
    }
    const fetchurl = (e) => {
        setValue(e.target.value)
    }

    const popup = () => {
        if (clicked) {
            setClicked(false)
        } else {
            setClicked(true)
        }
    }
   
    return (
        <AppContext.Provider value={{ popup, clicked, setUrl, url, fetchurl, submit, value, setValue, messages, setMessages }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };

