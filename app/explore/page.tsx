import Image from "next/image";
export default function ExploreMore() {
  return (
    <>
      <div>
        <div>
          <label>Books</label>
          <div className="flex flex-row gap-4">
            <div className="flex flex-col">
              <Image src={""} alt="error" width={300} height={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
