import { useStoryblokApi } from "@storyblok/react";
import { useEffect, useState } from "react";

export const GoldRate = () => {
  const storyBlockApi = useStoryblokApi();
  const [goldRate, setGoldRate] = useState(0);
  const [date, setDate] = useState("");
  const [showOne, setShowOne] = useState(false);

  const fetchRates = async () => {
    try {
      const { data } = await storyBlockApi.get("cdn/stories/daily-rates");
      const content = data.story.content;

      setGoldRate(content.gold_rate);
    } catch (error) {
      console.error("Error fetching rates:", error);
    }
  };

  const fetchDate = () => {
    const now = new Date();
    const formatted = `${now.getDate()}/${
      now.getMonth() + 1
    }/${now.getFullYear()}`;
    setDate(formatted);
  };

  useEffect(() => {
    fetchDate();
    fetchRates();
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      const interval = setInterval(() => {
        setShowOne((prev) => !prev);
      }, 2500);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="w-full flex items-center justify-between h-[35px] bg-gradient-to-r from-[#765D03] to-[#CFB34C] ">
      <div className="flex justify-around md:justify-between w-full lg:w-4/5 xl:h-3/5">
        <p className="text-xs md:text-sm font-thin text-white md:pl-10">
          Today's Gold Rate : {date}
        </p>
        <ul className="hidden md:flex justify-between items-center gap-x-40 text-xs font-thin text-white pl-10">
          <li>1 Gram : ₹{(goldRate / 8).toFixed(2)}</li>
          <li>8 Grams : ₹{goldRate}</li>
        </ul>

        {/* Mobile View: toggle between 1g and 8g */}
        <div className="block md:hidden text-[10px] font-thin text-white">
          {showOne ? (
            <p>1 Gram : ₹{(goldRate / 8).toFixed(2)}</p>
          ) : (
            <p>8 Grams : ₹{goldRate}</p>
          )}
        </div>
      </div>
    </div>
  );
};
