import { useState } from "react";
import Input from "./Input";

function SearchNote({ onSearch }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  }

  return (
    <div className="relative">
      <img
        className="absolute top-0 translate-x-[10px] translate-y-[58%]"
        src="/svgs/search.svg"
        alt=""
      />
      <Input
        value={query}
        onChange={handleChange}
        className="w-[600px] pl-8"
        placeholder="Search by title, content, or tags..."
      />
    </div>
  );
}

export default SearchNote;
