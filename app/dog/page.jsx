'use client';

import React, { useEffect, useState } from 'react';
import { useFetch } from '../hook/useFetch';
import Link from 'next/link';

export default function Page() {
  const [dog, setDog] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch('/api/dog');
      const data = await response.json();
      setDog(data);
    };
    fetchAPI();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center grow gap-2'>
      <h2 className='text-4xl font-extrabold mb-4'>강아지</h2>
      <p>API 데이터:</p>
      <img src={dog.image} alt='강아지' className='w-40' />
      <p>{dog.message}</p>
      <Link href={'/'} className='hover:underline'>
        ← 홈으로 돌아가기
      </Link>
    </div>
  );
}
