import Image from "next/image";
import Link from "next/link";
export default function BookCard() {
  return (
    <>
      <Link
        className="flex my-4 flex-col items-start justify-center"
        href='/a'
      >
        <div className="sm:h-52 h-48 overflow-hidden bg-gray-900">
          <img
            className="h-full"
            alt="error"
            width={320}
            height={180}
            src='d'
          />
        </div>
        <h2>ahahh</h2>
        <h3>ahha</h3>
      </Link>
    </>
  );
}
