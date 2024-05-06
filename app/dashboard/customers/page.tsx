import { Metadata } from 'next';
import React, { useEffect, useState } from 'react';
// import { getAllPosts } from './api/posts';
// import PostPreview from './components/PostPreview';
// import Header from './layout/Header';
// import Main from './layout/Main';


export const metadata: Metadata = {
  title: 'Customers',
};
export default function Page() {
  return (<div><p><h1>Customers Page</h1></p></div>
  );
  
}
// const Home: React.FC<{ posts: any[] }> = ({ posts }) => (
//   <div className="flex flex-col items-center justify-start flex-1 h-full">
//     <Header />
//     <Main>
//       <div className="w-full mt-20">
//         <h2 className="text-4xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl sm:leading-1"></h2>
//         </div>
//     </Main>
//   </div>

// );

