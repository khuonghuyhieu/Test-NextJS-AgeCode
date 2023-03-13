import Image from "next/image";
import React from "react";
import img from "../../assets/images/Image.png";
import play from "../../assets/images/Play.png";

export interface ItemsProps {
  type: string;
  title: string;
  subTitle?: string;
}

const Items: React.FC<ItemsProps> = ({ type, title, subTitle }) => {
  return (
    <>
      {type === "link" ? (
        <a
          target="_blank"
          href="https://agecodehr.com/"
          rel="noopener noreferrer"
        >
          <div className="item width-full flex mb-5">
            <div className="right mr-3.5">
              <Image
                className="image-audio h-full"
                src={img}
                width={84}
                alt=""
              />
            </div>
            <div className="left pt-2 pb-1 flex items-center">
              <div className="content">
                <p className="title-item block">{title}</p>
                <p className="des-item des-item-grey">{subTitle}</p>
              </div>
            </div>
          </div>
        </a>
      ) : (
        <div className="item width-full flex mb-5">
          <div className="right mr-3.5">
            <Image className="image-audio h-full" src={img} width={84} alt="" />
          </div>
          <div className="left pt-2 pb-1">
            <div className="content pb-3">
              <p className="title-item block">{title}</p>
              <p className="des-item des-item-grey">{subTitle}</p>
            </div>
            <div className="button-stream des-item des-item-black flex justify-center items-center">
              Streaming option
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Items;
