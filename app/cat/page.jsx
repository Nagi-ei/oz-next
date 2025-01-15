'use client';

import Link from 'next/link';
import React from 'react';
import { useFetch } from '../hook/useFetch';

export default function Page() {
  const { data, isLoading, error } = useFetch('/api/cat');

  if (isLoading) {
    return (
      <div className='flex flex-col justify-center items-center grow gap-2'>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex flex-col justify-center items-center grow gap-2'>
        <p>에러가 발생했습니다. 😅</p>
        {error}
      </div>
    );
  }
  return (
    <div className='flex flex-col justify-center items-center grow gap-2'>
      <h2 className='text-4xl font-extrabold mb-4'>고양이</h2>
      <p>API 데이터:</p>
      <img src={data.image} alt='고양이' className='w-40' />
      <p>{data.message}</p>
      <Link href={'/'} className='font-bold hover:underline'>
        ← 홈으로 돌아가기
      </Link>
    </div>
  );
}
