import Image from "next/image";
import Link from "next/link";
export default function BookCard() {
  return (
    <>
      <Link
        className="flex my-4 border-red-800 border  flex-col items-start justify-center"
        href='/a'
      >
        <div className="h-[16.875rem] w-[15.375rem] overflow-hidden bg-gray-900">
          <img
            className="h-full"
            alt="error"
            width={320}
            height={180}
            src='https://dsmlibrary.com/wp-content/uploads/2014/01/aboutus-1024x734.jpg'
          />
        </div>
        <h2>ahahh</h2>
        <h3>ahha</h3>
      </Link>
    </>
  );
}
