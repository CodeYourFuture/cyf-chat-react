import React from "react";
import { useGlobalContext } from "./Context";


const Messages = () => {
    const { data, url } = useGlobalContext();

    const edit = () => {
        console.log("dsasd")
    }

    const remove = (e) => {
        fetch(`${url[0]}/messages/${e.target.value}`, {
        method: 'DELETE',
        })
        .then(res => res.text()) // or res.json()
        .then(res => console.log(res))
        console.log(`${url[0]}/${e.target.value}`)
    }
    return (
        <div>
            <section className="message-list">
                <ul>
                    {data.map((element, index) => {
                        const { from, text, timeSent,id } = element
                        return (
                            <>
                                <li key={index} className="message-li">{
                                    <>
                                        <div style={{ display: "flex" }}>
                                            <div className="index">{index}  --{">"} </div>
                                            <div className="from">{from}:</div>
                                        </div>

                                        <div className="message-row">
                                            <span className="message-text">{text}</span>
                                            <div className="controls">
                                                <button onClick={edit}>Edit</button>
                                                <div className="delete">
                                                    <button onClick={remove} value={id} className="btn btn-warning">X</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timestamp">{timeSent}</div>
                                    </>
                                }
                                </li>
                            </>
                        );
                    })}
                    <button className="refresh">Refresh Messages</button>
                </ul>
            </section>
        </div>
    )
}

export default Messages;