import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    {
    id: 1,
    title: "Mini rhinestone clutches ⋆౨ৎ˚⟡",
    imageUrl: "https://i.pinimg.com/736x/92/42/1c/92421caacff82c3fae4504be9d388c18.jpg",
    link: "Mini rhinestone clutches"
  },
  {
    id: 2,
    title: "Mini canvases ✧˖°.",
    imageUrl: "https://i.pinimg.com/1200x/bf/08/0b/bf080b592dd90fd3d70007a6c9405e0b.jpg",
      link: "Mini canvases",
  },


  //   {
  //   id: 4,
  //   title: "Bookmarks",
  //   imageUrl: "https://scontent.flhe7-2.fna.fbcdn.net/v/t1.15752-9/520429125_1334742338219253_2531984894124566733_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=j7XYMWWmVY8Q7kNvwFYLOQX&_nc_oc=Adkef7qEPDIiflArvyMlAj0FTg2JoPnp6bRd6DV5GSZcJB7m97b8m8ZRWL8id8lVe1k&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.flhe7-2.fna&oh=03_Q7cD2wF-rY8Fqy79pbeR3ML53F8zqAW-4GruhgPAjdrVNB5Twg&oe=68AC16BF"
  // },
      {
    id: 3,
    title: "Resin coasters ⋆˚꩜｡",
    imageUrl: "https://i.pinimg.com/736x/7b/fb/95/7bfb95cd20cc9bfbaa8a6e03ae0f4e4f.jpg",
      link: "Resin coasters"
  },
      {
    id: 4,
    title: "Resin pencil holder ｡°✩",
    imageUrl:"https://i.pinimg.com/736x/1b/69/6f/1b696f568acb8681e33ae35b8546b92e.jpg",
     link: "Resin pencil holder"
  },
 
        {
    id: 5,
    title: "Resin jar 𝜗ৎ",
    imageUrl:"https://i.pinimg.com/736x/a5/06/06/a5060670bedbe08a9b73da153fc87905.jpg",
     link: "Resin jar"
  },
          {
    id: 5,
    title: "Resin keychains 𝜗ৎ",
    imageUrl:"https://i.pinimg.com/736x/2b/56/74/2b5674e792911ecf9de9a5c1961fa766.jpg",
     link: "Resin keychains"
  },
            {
    id: 5,
    title: "Resin bookmarks 𝜗ৎ",
    imageUrl:"https://i.pinimg.com/736x/b5/d3/02/b5d3022fb758b1afe9a28a21f60a580b.jpg",
     link: "Resin bookmarks"
  },

];

function FeaturedCategories() {
  return (
<div>
  <h2 className="text-[#141414] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
    Featured Categories
  </h2>

  <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-3">
    {categories.map(category => (
      <Link
        to={`/products?category=${encodeURIComponent(category.link)}`}
        key={category.id}
        className="flex flex-col gap-2 group bg-white rounded-lg overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-[1.03]"
      >
        <div
          className="w-full aspect-[1/1] bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        ></div>
        <p className="text-[#141414] text-base font-medium leading-normal text-center px-2 pb-3">
          {category.title}
        </p>
      </Link>
    ))}
  </div>
</div>

  );
}

export default FeaturedCategories;
