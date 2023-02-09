import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import categoryImage1 from "../../images/Rectangle 4.png";
import categoryImage2 from "../../images/Rectangle 4 (1).png";
import categoryImage3 from "../../images/Rectangle 4 (2).png";

const Category = () => {
  const categoryPhotos = [
    {
      categoryThumb: categoryImage1,
      categoryHeader: "জিমের সরঞ্জাম",
    },
    {
      categoryThumb: categoryImage2,
      categoryHeader: "জিমের পোশাক",
    },
    {
      categoryThumb: categoryImage3,
      categoryHeader: "সাপ্লিমেন্টস",
    },
  ];

  return (
    <div className="m-20">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl" style={{ color: "#3E084C" }}>
          ক্যাটেগোরি সমূহ
        </h1>
        <p className="font-bold flex items-center" style={{ color: "#3E084C" }}>
          <span className="mr-1">আরো দেখুন </span>{" "}
          <BsArrowUpRight></BsArrowUpRight>
        </p>
      </div>
      <div className="flex justify-between items-center mt-10">
        {categoryPhotos.map((category) => (
          <div className="card w-96 rounded-none bg-base-100 shadow">
            <figure>
              <img src={category.categoryThumb} alt="" />
            </figure>
            <div className="card-body">
              <h1
                style={{ color: "#3E084C" }}
                className="font-bold text-center"
              >
                {category.categoryHeader}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

//style={{ color: "#3E084C" }}
