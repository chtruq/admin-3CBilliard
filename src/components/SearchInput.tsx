// "use client";
// import React, { useState } from "react";
// import { Input } from "./ui/input";

// function SearchInput({ placeholder }: { placeholder: string }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   //take this searchTerm to the search
//   const params = new URLSearchParams();
//   params.append("search", searchTerm);
//   const queryString = params.toString();
//   const currentPath = window.location.pathname;
//   const currentUrl = `${currentPath}?${queryString}`;
//   console.log(currentUrl);
//   window.history.pushState({ path: currentUrl }, "", currentUrl);

//   return (
//     <div className="bg-white items-center my-auto ml-2">
//       <Input
//         value={searchTerm}
//         onChange={handleInputChange}
//         onMouseLeave={() => console.log("Mouse leave")}
//         placeholder={placeholder}
//       />
//     </div>
//   );
// }

// export default SearchInput;
