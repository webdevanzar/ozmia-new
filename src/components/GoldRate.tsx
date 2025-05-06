import { useStoryblokApi } from "@storyblok/react";
import { useEffect, useState } from "react";

export const GoldRate = () => {
  const storyBlockApi = useStoryblokApi();
  const [rates, setRates] = useState({ gold: null, silver: null });

  const fetchRates = async () => {
    try {
      const { data } = await storyBlockApi.get("cdn/stories/daily-rates");
      const content = data.story.content;

      setRates({
        gold: content.gold_rate,
        silver: content.silver_rate,
      });
    } catch (error) {
      console.error("Error fetching rates:", error);
    }
  };

  useEffect(() => {
    fetchRates();
  }, []);


   console.log(rates);
   
  return (
    <div className="w-full flex items-center h-[35px] bg-gradient-to-r from-primary via-[#008542] to-[#00CF67] ">
      
        <ul className="flex justify-between items-center gap-x-40 text-xs font-thin text-white pl-10">
          <li>Gold Rate 22 KT (916) : 8,709.00/g</li>
          <li>Gold Rate 24 KT (999) : 9,475.00/g</li>
          <li>Gold Rate 18 KT (750) : 7,109.00/g</li>
        </ul>
    
    </div>
  );
};
