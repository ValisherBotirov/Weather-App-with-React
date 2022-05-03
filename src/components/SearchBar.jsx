import React, { useState } from "react";

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState("");

  const onChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    props.request(keyword);
  };

  return (
    <div className="search--component">
      <form
        onSubmit={onSubmitForm}
        className="ui category search container searchForm"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="ui icon input" style={{ width: "80%" }}>
          <input
            onChange={onChange}
            className="prompt "
            type="text"
            placeholder="Search animals..."
          />
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
      </form>
    </div>
  );
};

export default SearchBar;
