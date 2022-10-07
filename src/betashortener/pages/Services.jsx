import React from "react";
import { CardData } from "../asset/data/config";
import Card from "../conponent/Card";
export default function Services() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex gap-7 justify-center flex-wrap  items-center py-8 lg:w-[900px]">
        {CardData.map((it) => {
          return (
            <div>
              <Card image={it.icon} title={it.title} para={it.para} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
