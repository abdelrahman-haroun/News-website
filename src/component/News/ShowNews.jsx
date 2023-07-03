import React, { useState } from "react";
import News from "./News";

export default function ShowNews() {
  const [userSearch, setUserSearch] = useState("");

  return (
    <>
      <div
        className="search-news"
        style={{
          margin: "0.5rem 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ border: "1px solid #333" }}>
          <input
            style={{ border: "none", outline: "none" }}
            type="text"
            name="search"
            placeholder="search"
            onChange={(e) => {
              setUserSearch(e.target.value);
            }}
          />
          <i className="fa-solid fa-magnifying-glass" />
        </div>
      </div>
      <div className="con-news" style={{ minHeight: "80vh" }}>
        <News search={userSearch} />
      </div>
    </>
  );
}
