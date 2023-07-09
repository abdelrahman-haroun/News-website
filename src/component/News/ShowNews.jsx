import React, { useState } from "react";
import News from "./News";

export default function ShowNews() {
  const [userSearch, setUserSearch] = useState("");
  const [press, setPress] = useState(false);

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
        <form id="demo-2">
          <input
            type="search"
            placeholder="search"
            onChange={(e) => {
              setUserSearch(e.target.value);
            }}
          />
        </form>
      </div>

      <News search={userSearch} />
    </>
  );
}
