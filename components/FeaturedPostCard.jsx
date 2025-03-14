import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Import the image loader if needed (similar to grpahCMSImageLoader)
// import { grpahCMSImageLoader } from '../util';

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-72">
    {/* Handle missing featuredImage */}
    <div
      className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
      style={{ backgroundImage: `url('${post.featuredImage?.url || '/default-image.jpg'}')` }}
    />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
      {/* Format createdAt with fallback */}
      <p className="text-white mb-4 text-shadow font-semibold text-xs">
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </p>
      {/* Handle missing title */}
      <p className="text-white mb-4 text-shadow font-semibold text-lg text-center">
        {post.title || 'Untitled Post'}
      </p>
      <div className="flex items-center absolute bottom-5 w-full justify-center text-xs p-5">
        {/* Handle missing author and photo */}
        {post.author?.photo?.url ? (
          <Image
            unoptimized
            alt={post.author.name || 'Author'}
            height="30px"
            width="30px"
            className="align-middle drop-shadow-lg rounded-full"
            src={post.author.photo.url}
          />
        ) : (
          <Image
            src="/blank.jpg"
            height="30px"
            width="30px"
            className="rounded-full"
          />
        )}
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">
          {post.author?.name || 'Unknown Author'}
        </p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default FeaturedPostCard;

