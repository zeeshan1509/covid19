import React from 'react';

const Legend = ({legendItems}) => {
   
    return ( 
        <div style={{
            display: "flex",
            alignItems: "stretech"
        }}>
            {legendItems.map((item)=> (
                <div key={item.title}
                style={{
                    backgroundColor: item.color,
                    flex: 1,
                    display: "flex",
                    padding: 0,
                    margin: "auto",
                    overflow: "hidden",
                    textAlign: "center",
                    alignItems: "center", // vertical
                    justifyContent: "center", // horiztontal
                    color: item.textColor != null ? item.textColor : "black",
                    fontWeight: "bolder",
                    fontSize: "0.8em",
                    height: "20vh",
                  }}>
                    <span>{item.title}</span> 
                </div>
            ))}
        </div>
     );
}
 
export default Legend;