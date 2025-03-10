import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 my-8">
    <div className="relative overflow-hidden shadow-md pb-80 mb-6">
      <img
        src={post.featuredImage?.url}
        alt=""
        className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
      />
    </div>

    <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-green-700 text-3xl font-semibold p-5">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>

    <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
      <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 px-5">
        {post.author?.photo?.url ? (
          <Image
            unoptimized
            loader={grpahCMSImageLoader}
            alt={post.author.name}
            height={30}
            width={30}
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
        ) : (
          <Image
            src="/blank.jpg"
            height={30}
            width={30}
            className="rounded-full"
          />
        )}
        <p className="inline align-middle text-gray-700 ml-2 font-medium text-base">
          {post.author?.name || 'Unknown Author'}
        </p>
      </div>
      <div className="font-medium text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline mr-2 text-green-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="align-middle">
          {moment(post.createdAt).format('MMM DD, YYYY')}
        </span>
      </div>
    </div>

    <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
      {post.excerpt}
    </p>

    <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <div
          className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-green-700 to-green-600 hover:bg-gradient-to-b dark:shadow-green-900 shadow-green-200 hover:shadow-2xl hover:shadow-green-400 hover:-tranneutral-y-px cursor-pointer"
        >
          Lanjut Baca
        </div>
      </Link>
    </div>
  </div>
);

export default PostCard;
