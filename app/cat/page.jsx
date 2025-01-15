'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [cat, setCat] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/cat');
      const data = await response.json();
      setCat(data);
    };
    fetchData();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center grow gap-2'>
      <h2 className='text-4xl font-extrabold mb-4'>고양이</h2>
      <p>API 데이터:</p>
      <img src={cat.image} alt='고양이' className='w-40' />
      <p>{cat.message}</p>
      <Link href={'/'} className='hover:underline'>
        ← 홈으로 돌아가기
      </Link>
    </div>
  );
}
