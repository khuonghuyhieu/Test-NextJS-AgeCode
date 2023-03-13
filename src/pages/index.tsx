import Information from "@/components/Information";
import Items from "@/components/Items";
import BasicTabs from "@/components/TabPanel";
import React from "react";

export interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <Information />
      <div className="container-content px-4">
        <div className="tab pb-4">
          <BasicTabs />
        </div>

        <section className="audio">
          <div className="title-section pb-5">オーディオ</div>
          <Items type="audio" title="As it was" subTitle="Harry Styles" />
          <Items type="audio" title="As it was" subTitle="Harry Styles" />
        </section>

        <section className="video-youtube">
          <div className="title-section pb-5">ビデオ</div>
          <iframe
            width="100%"
            height="199"
            src="https://www.youtube.com/embed/k4WvNMMLFzI"
            title="【Goodnight Ghibli Piano 2023】ジブリメドレーピアノ4 時 間 💖 史 上 最 高 のピアノジブリコレクション 🌹  少なくとも1 回 は 聞くべ き 🍀 となりのトトロ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </section>

        <section className="more-link pt-5">
          <div className="wrapper flex">
            <div className="items-link mr-4">
              <Items type="link" title="Tickets on Sale Friday" />
              <Items
                type="link"
                title="Tickets on Sale Friday"
                subTitle="Limited availability!"
              />
            </div>
            <div className="items-link mr-4">
              <Items type="link" title="Tickets on Sale Friday" />
              <Items
                type="link"
                title="Tickets on Sale Friday"
                subTitle="Limited availability!"
              />
            </div>
            <div className="items-link mr-4">
              <Items type="link" title="Tickets on Sale Friday" />
              <Items
                type="link"
                title="Tickets on Sale Friday"
                subTitle="Limited availability!"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
