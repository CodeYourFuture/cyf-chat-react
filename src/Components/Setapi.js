import React from "react";
import { useGlobalContext } from "./Context";


const SetApi = () => {
    const { popup, clicked, url, fetchurl, submit, setValue, value }= useGlobalContext();
    const newendpoint = (e) => {
        setValue(e.target.value)
    }
    
    return (
        <div>
            <section className="client">
                <button onClick={popup}>{clicked ? " Set Api" : "Hide API" }</button>
            </section>
            <div className={clicked ? "display" : "api-selector"}>
            <select onChange={fetchurl}>
                {url.map((element,index) => {
                    return (
                        <option key={index} value={element}>{element}</option>
                    )
                })}
            </select>
            <input value={value} onChange={newendpoint} type="text" placeholder="new end point..."></input>
            <button className="btn btn-secondary" onClick={submit}>change</button>
            </div>
        </div>
    );
}

export default SetApi;