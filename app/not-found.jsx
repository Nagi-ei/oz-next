import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center grow gap-2'>
      <h2 className='text-3xl font-extrabold'>
        404 - 페이지를 찾을 수 없습니다.
      </h2>
      <p>죄송합니다. 요청하신 페이지는 존재하지 않습니다. 😅</p>
      <Link href={'/'} className='hover:underline'>
        ← 홈으로 돌아가기
      </Link>
    </div>
  );
}
