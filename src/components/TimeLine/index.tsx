import Image from "next/image";
import React from "react";
import avatar from "../../assets/images/Rounded-rectangle.jpg";

interface TimeLine {
  nameUser: string;
  dateTimeLine: string;
  contentTimeLine: string;
}

interface TimeLineProps {
  timeLines: TimeLine[];
}

const TimeLine: React.FC<TimeLineProps> = ({ timeLines }) => {
  return (
    <>
      {timeLines.map((timeLine, index) => {
        return (
          <div key={index} className="box-time-line mb-6">
            <div className="info-user flex">
              <div className="info-user-left">
                <Image src={avatar} alt="" width={36} height={36} />
              </div>
              <div className="info-user-right ml-2 flex flex-col justify-between">
                <p className="title-tab font-bold">{timeLine.nameUser}</p>
                <p className="title-tab title-tab-grey">
                  {timeLine.dateTimeLine}
                </p>
              </div>
            </div>
            <div className="title-tab content-time-line mt-2">
              {timeLine.contentTimeLine}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TimeLine;
