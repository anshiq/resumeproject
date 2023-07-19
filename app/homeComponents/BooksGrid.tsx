import BookCard from "../components/BookCard"

export default function BooksGrid(){
  const books = [1,2,3,4,5,6]
  return <>
    <div className="grid mt-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1 items-center justify-center mx-auto ">
      {books.map((key)=>{
      return  <BookCard/>
      })}
    </div>
  </>
}
