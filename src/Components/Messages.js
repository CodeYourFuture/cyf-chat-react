import React from "react";
import { useGlobalContext } from "./Context";


const Messages = () => {
    const { data } = useGlobalContext();
    
    const edit = () => {
        console.log("dsasd")
    }

    const remove = () => {
        console.log("gellsad")
    }
    return (
        <div>
            <section className="message-list">
                <ul>
            {data.map((element,index) => {
                const { from, text } = element
                return (
                    <>
                    <li key={index} className="message-li">{
                        <>
                        <div style={{ display:"flex" }}>
                        <div className="index">{index}  --{">"} </div>
                        <div className="from">{from}:</div>
                        </div>

                        <div className="message-row">
                            <span className="message-text">{text}</span>
                            <div className="controls">
                                <button onClick={edit}>Edit</button>
                            <div className="delete">
                                <button onClick={remove} className="btn btn-warning">X</button>
                            </div>
                            </div>
                        </div>
                        <div className="timestamp"> 0 seconds ago</div>
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