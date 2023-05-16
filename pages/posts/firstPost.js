import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      {/* ホームに戻るボタン*/}
      <Link href="/">
        <p>Back to home</p>
      </Link>
    </>
  );
}
