import React from "react";
import blogImage1 from "../../images/Image (1).png";
import blogImage2 from "../../images/Image (2).png";
import blogImage3 from "../../images/Image (3).png";
import avatar1 from "../../images/Avatar.png";
import avatar2 from "../../images/Avatar (1).png";
import avatar3 from "../../images/Avatar (2).png";

const Blog = () => {
  const blogsInfo = [
    {
      blogThumb: blogImage1,
      blogHeader: "জেনে নিন, ডাম্বেল নিয়ে সহজে ব্যায়ামের নিয়ম!",
      subHeader: "লাইফস্টাইল",
      blogDes:
        "ডাম্বেল নিয়ে ব্যায়ামের সঙ্গে আগেই পরিচিত হয়েছেন আপনি আজ ডাম্বেল নিয়ে আরো কিছু ব্যায়ামের সঙ্গে...",
      avatar: {
        img: avatar1,
        name: "ইফতেখার আহমেদ",
        date: "২০ শে জুলাই, ২০২২",
      },
    },
    {
      blogThumb: blogImage2,
      blogHeader: "ফিট থাকতে শরীরচর্চা ও ডায়েট কেন জরুরী?",
      subHeader: "সুস্থতা",
      blogDes:
        "মহামারী করোনা ভাইরাসের আতঙ্কে দীর্ঘদিন সবকিছু বন্ধ থাকার পর স্বল্প পরিসরে কাজগুলো শুরু হচ্ছে...",
      avatar: {
        img: avatar2,
        name: "তাওসিফ হক",
        date: "২১ শে জুলাই, ২০২২",
      },
    },
    {
      blogThumb: blogImage3,
      blogHeader: "সুস্থ থাকতে নিত্যদিনের অভ্যাসে আনুন ৬ বদল",
      subHeader: "স্বাস্থ্য টিপস",
      blogDes:
        "অস্বাস্থ্যকর খাদ্যাভ্যাস ও জীবনযাপনের কারণে আজকাল ডায়াবেটিস, হাইপার টেনশন, স্থূলতা ও হার্টের রোগের মতো...",
      avatar: {
        img: avatar3,
        name: "সাকিব রহমান",
        date: "২৩ শে জুলাই, ২০২২",
      },
    },
  ];

  return (
    <div className="m-20">
      <div className="flex justify-between items-center">
        <div className="text-left">
          <h1 className="font-bold text-2xl mb-4" style={{ color: "#3E084C" }}>
            আমাদের ব্লগ সমূহ
          </h1>
          <p>
            সুস্থ থাকতে আমাদের ব্লগ সমূহ পড়ুন, সর্বশেষ স্বাস্থ্য পরামর্শ নিন
          </p>
        </div>
        <p className="font-bold btn" style={{ backgroundColor: "#3E084C" }}>
          ব্লগগুলো দেখুন
        </p>
      </div>
      <div className="flex justify-between items-center mt-10">
        {blogsInfo.map((blog) => (
          <div className="card rounded-none text-left w-96 bg-base-100 shadow">
            <figure>
              <img src={blog.blogThumb} alt="Shoes" />
            </figure>
            <div className="card-body">
              <span style={{ color: "#3E084C" }}>{blog.subHeader}</span>
              <h1 className="card-title">{blog.blogHeader}</h1>
              <p className="text-gray-500">{blog.blogDes}</p>
              <div className="flex text-left">
                <div className="rounded-full mr-2">
                  <img alt="" src={blog.avatar.img} />
                </div>
                <div>
                  <p>{blog.avatar.name}</p>
                  <p className="text-gray-500">{blog.avatar.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
//style={{ color: "#3E084C" }}
