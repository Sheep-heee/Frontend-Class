"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./searchber.module.css";
import Loading from "@/app/loading";

const Searchber = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const q = searchParams.get("q");

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <form className={style.container} onSubmit={onSubmit}>
          <input type="text" onChange={onChangeSearch} />
          <input type="submit" value={"검색"} />
        </form>
      </div>
    </Suspense>
  );
};

export default Searchber;
