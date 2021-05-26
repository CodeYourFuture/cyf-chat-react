import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [clicked, setClicked] = useState(false);
    const [loading, setLoading] = useState(false)
    const [url, setUrl] = useState(["https://yunus-chat-server.herokuapp.com"]);
    const [ value, setValue ] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch("https://yunus-chat-server.herokuapp.com/messages")
        .then(response => response.json())
        .then(data => console.log(data))
    },[])

    const fetchurl = () => {
      fetchMessages();
    }

    const submit = () => {
            setUrl(url.concat(value).reverse())
            setValue("");
            fetchMessages();
    }


    const fetchMessages =  async () => {
        const urljoin = url[0] + "/messages"
        console.log(url);
            setLoading(true);
            try {
                const response = await fetch(urljoin);
                const data = await response.json();
                if (data) {
                    setMessages(data)
                    console.log(data)
                }else {
                    return data;
                }
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }



const popup = () => {
    if (clicked) {
        setClicked(false)
    } else {
        setClicked(true)
    }
}
return (
    <AppContext.Provider value={{ popup, clicked, loading, setUrl, url, fetchurl, submit, value, setValue, messages, setMessages }}>
        {children}
    </AppContext.Provider>
);
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };

