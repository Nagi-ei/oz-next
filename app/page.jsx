import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center gap-10 grow'>
      <h2 className='text-4xl font-extrabold'>골라보세요</h2>
      <div className='flex gap-10'>
        <Link
          href={'/dog'}
          className='bg-zinc-600 px-2 py-1 rounded-xl text-white'
        >
          강아지
        </Link>
        <Link
          href={'/cat'}
          className='bg-zinc-600 px-2 py-1 rounded-xl text-white'
        >
          고양이
        </Link>
      </div>
    </main>
  );
}
