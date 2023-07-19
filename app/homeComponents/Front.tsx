import Link from 'next/link'
export default function FrontPage(){
  const linkClass = 'bg-red-800 grow  text-center '
  return <>
    <div className="mt-6">
      <div className="flex  flex-row gap-6 justify-around  items-center h-[6rem] bg-orange-500">
        <Link className={linkClass} href="/">Listen</Link >
        <Link className={linkClass}href="/hh">hh</Link >
        <Link className={linkClass}href="/">Listen</Link >
        <Link className={linkClass}href="/">Listen</Link >
      </div>
      <div className='flex flex-col p-6'>
        <h1>THOUGHT OF THE DAY</h1>
        <p>
I am a tree of divine life which produces blessed fruits.
          He, who gets associated with me, like a branch is to a tree, not only avoids harm to himself and others but also produces blessed fruits in his own life and in the life of others.
        </p>
        <audio controls  >
          <source src='https://www.w3schools.com/tags/horse.ogg' type='audio/ogg'/>
        </audio>

      </div>
    </div>
  </>
}
