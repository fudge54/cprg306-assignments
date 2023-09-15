import React from 'react'
import Image from 'next/image'
import StudentInfo from './StudentInfo'
import Link from 'next/link';


export default function Home() {
  return (
    <main>
      <h2>CPRG 306: Web Development 2 - Assignments</h2>
      <StudentInfo/>
      <div>
      <Link href= "/week2">Week 2</Link>
      </div>
    </main>
  );
};
