import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Instaclone</h1>
      <Link href="/explore">Explore</Link>
      <Link href="/reels">Reels</Link>
    </main>
  );
}
