import Link from "next/link";

export default function Button({ text, url }) {
  return (
    <Link className="button relative" href={url}>
      <div className="button-background">{text}</div>
      <div className="button-text">{text}</div>
    </Link>
  );
}
