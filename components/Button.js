import Link from "next/link";

export default function Button({ text, url }) {
  return (
    <span className="button relative">
      <div className="button-background">{text}</div>
      <div className="button-text">{text}</div>
    </span>
  );
}
