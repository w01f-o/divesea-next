"use client";

import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Shared/UI/Input/Input";
import SearchIcon from "@/components/Shared/Icons/Search";

const Search: FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = new URLSearchParams();
    url.set("nft", inputValue);

    router.push(`/search?${url}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        type={"text"}
        placeholder={"Search Art Work / Creator"}
        icon={{ element: <SearchIcon />, position: "left" }}
        value={inputValue}
        onChange={changeHandler}
      />
    </form>
  );
};

export default Search;
