import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className="flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-green-50 px-4 py-2">
      <Image
        src="/assets/icons/search.svg"
        width={24}
        height={24}
        alt="search"
      />
    </div>
  );
};

export default Search;
