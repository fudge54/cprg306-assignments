import React from 'react'
import Image from 'next/image'
import StudentInfo from './StudentInfo'
import Link from 'next/link';


export default function Home() {
  return (
    <main>
      <h2 title="text-3xl font-bold underline">CPRG 306: Web Development 2 - Assignments</h2>
      <StudentInfo/>
      <div>
      <Link href= "/week2">Week 2</Link>
      </div>
      <div>
      <Link href= "/week3">Week 3</Link>
      </div>
      <div>
      <Link href= "/week4">Week 4</Link>
      </div>
    </main>
  );
};
