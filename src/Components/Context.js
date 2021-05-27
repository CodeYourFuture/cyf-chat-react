import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [clicked, setClicked] = useState(false);
    const [url, setUrl] = useState(["https://yunus-chat-server.herokuapp.com", "https://enchanted-principal.glitch.me","https://clem-chat-server-vol2.glitch.me "]);
    const [value, setValue] = useState("");
    const [selectValue, setSelectValue] = useState([])
    const [messages, setMessages] = useState([]);
    const [data, setData] = useState([]);

    
    useEffect(() => {
        const second = `${selectValue[0]}/messages`
        console.log(second)
        fetch(second)
        .then(response => response.json())
        .then(data => setData(data));
    },[selectValue])

    useEffect(() => {
        const first = "https://yunus-chat-server.herokuapp.com/messages"
        fetch(first)
        .then(response => response.json())
        .then(data => setData(data))
    },[])

    const fetchurl = (e) => {
        setSelectValue(selectValue.concat(e.target.value).reverse())
    }

    const submit = () => {
        setUrl(url.concat(value).reverse())
        setSelectValue(selectValue.concat(value).reverse())
        setValue("")
    }

    const popup = () => {
        if (clicked) {
            setClicked(false)
        } else {
            setClicked(true)
        }
    }
   
    return (
        <AppContext.Provider value={{ popup, clicked, setUrl, url, fetchurl, submit, value, setValue, messages, setMessages, data }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };

