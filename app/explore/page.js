"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSearch() {
    if (search !== "") {
      router.push("/profile/" + search);
    }
  }
  return (
    <main>
      <h1>Explore</h1>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a user"
      />
      <button onClick={handleSearch}>Search</button>
    </main>
  );
}
