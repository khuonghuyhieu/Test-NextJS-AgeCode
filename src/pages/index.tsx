import Information from "@/components/Information";
import Items from "@/components/Items";
import MainHome from "@/components/MainHome";
import ItemRating from "@/components/Rating";
import Tabs from "@/components/Tabs/Tabs";
import TimeLine from "@/components/TimeLine";
import React from "react";

interface Tab {
  label: string;
  children: React.ReactNode;
}

interface ItemRating {
  yearAgo: number;
  dateTime: string;
  filled: number;
  comments: string[];
}
interface ItemTimeLine {
  nameUser: string;
  dateTimeLine: string;
  contentTimeLine: string;
}

export interface HomeProps {}

// fake data ratings
const ratings: ItemRating[] = [
  {
    yearAgo: 20,
    dateTime: "2022.12.08",
    filled: 4,
    comments: [
      "人生相談ありがとうございました！",
      "彼と仕事のことで話し合ってみようと思います。",
      "色々サービスしてくださってありがとうございました！",
      "また機会があったらよろしくお願いします！",
    ],
  },
  {
    yearAgo: 10,
    dateTime: "2022.12.08",
    filled: 5,
    comments: ["人生相談ありがとうございました！"],
  },
  {
    yearAgo: 50,
    dateTime: "2022.12.07",
    filled: 5,
    comments: ["彼と仕事のことで話し合ってみようと思います。"],
  },
  {
    yearAgo: 30,
    dateTime: "2022.12.08",
    filled: 5,
    comments: [
      "いつもありがとうございます！！感情的になってましたが、お話を聞いてくださり落ち着きました。",
      "アドバイスもありがとうございました(*^▽^*)",
      "またお伺いさせていただきます。",
    ],
  },
  {
    yearAgo: 20,
    dateTime: "2022.12.08",
    filled: 5,
    comments: [
      "人生相談ありがとうございました！",
      "彼と仕事のことで話し合ってみようと思います。",
      "色々サービスしてくださってありがとうございました！",
      "また機会があったらよろしくお願いします！",
    ],
  },
  {
    yearAgo: 10,
    dateTime: "2022.12.08",
    filled: 4,
    comments: ["人生相談ありがとうございました！"],
  },
  {
    yearAgo: 50,
    dateTime: "2022.12.08",
    filled: 3,
    comments: ["また機会があったらよろしくお願いします！"],
  },
];

// fake data time-lines
const timeLines: ItemTimeLine[] = [
  {
    nameUser: "梅村 さおり",
    dateTimeLine: "2022.12.08 15:15",
    contentTimeLine:
      "少しだけログインします(^^)ご都合の良い方はお声かけください",
  },
  {
    nameUser: "梅村 さおり",
    dateTimeLine: "2022.12.06 16:20",
    contentTimeLine:
      "電話リクエストを多くいただきありがとうございます！依頼後は必ず個別メッセージをご確認ください",
  },
  {
    nameUser: "梅村 さおり",
    dateTimeLine: "2022.12.01 22:32",
    contentTimeLine: "こんばんは！24時頃まで待機しております！",
  },
];

const Home: React.FC<HomeProps> = ({}) => {
  const tabs: Tab[] = [
    {
      label: "プロフィール",
      children: <MainHome />,
    },
    {
      label: "感謝の声",
      children: <ItemRating itemsRating={ratings} />,
    },
    {
      label: "タイムライン",
      children: <TimeLine timeLines={timeLines} />,
    },
  ];

  return (
    <>
      <Information />
      <div className="container-content px-4">
        <div className="tab pb-4">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </>
  );
};

export default Home;
