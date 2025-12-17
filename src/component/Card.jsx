import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
const Card = ({ title, price, imgUrl, brands }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (
      brands?.toLowerCase() === "tomec" ||
      location.pathname.startsWith("/b")
    ) {
      navigate(`/p/${title}`);
    } else {
      navigate(`/b/${brands}`);
    }
  };
  return (
    <>
      {brands === "tomec" || location.pathname.endsWith("/") ? (
        <div
          className="relative w-full h-[60vh] border-[0.5px] bg-cover bg-center cursor-pointer"
          style={{ backgroundImage: `url(${imgUrl})` }}
          onClick={handleClick}
        >
          {/* Bottom gradient for readability */}
          <div className="absolute bottom-2 left-0 w-full p-4 flex justify-between items-center">
            {brands !== "tomec" ? (
              <span className="text-black text-center mx-auto font-bold">
                {brands}
              </span>
            ) : (
              <>
                <span className="text-black">{title}</span>
                <span className="text-black">₹{price}</span>
              </>
            )}
          </div>
          <div></div>
        </div>
      ) : (
        <>
          {/* Image Container */}
          <div>
            <div
              className="relative w-full h-[40vh] border border-gray-200 bg-cover bg-center rounded-2xl cursor-pointer overflow-hidden"
              style={{ backgroundImage: `url(${imgUrl})` }}
              onClick={handleClick}
            ></div>
            {/* Product Info */}
            <div className="mx-auto ml-2 mt-2">
              <p className="text-black font-medium text-sm truncate">{title}</p>

              {/* Divider */}
              <div className="w-full h-px bg-gray-300 my-1"></div>

              <p className="text-black font-semibold text-sm">₹{price}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Card;
