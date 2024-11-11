import Link from 'next/link';
import React from 'react';

const GalleryPostCard = ({ post }) => {
  console.log('Post:', post);  // Check the structure and content of the post
  const imageUrl = post.featuredImage?.url || '/blank.jpg';

  return (
    <Link href={`/post/${post.slug}`}>
      <a>
        <div className="relative w-full h-auto">
          <img
            className="w-72 h-72 rounded-lg shadow-md object-cover"
            src={imageUrl}
            alt={post.title || 'Gallery Image'}
          />
        </div>
      </a>
    </Link>
  );
};

export default GalleryPostCard;
