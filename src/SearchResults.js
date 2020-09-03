import React from "react";
import HeadingRow from "./HeadingRow";
import BodyRow from "./BodyRow";
//import MessageDetail from "./MessageDetail";

const SearchResults = ({ results,messages,setMessage}) => {
  //const [messageId, setMessageId] = useState(null);
  
  

  return (
    <div>
      <table className="table">
        <thead>
          <HeadingRow  />
        </thead>
        <tbody>
          {results.map((result, index) => (
            <BodyRow
              key={index}
              content={result}
              messages={messages}
              setMessage={setMessage}
              
            />
          ))}
        </tbody>
      </table>

      {/* {messageId ? <MessageDetail messageId={messageId} /> : null} */}
    </div>
  );
};

export default SearchResults;
