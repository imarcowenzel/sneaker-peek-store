import { topics } from "@/config";
import React from "react";

const Topics = () => {
  return (
    <div className="bg-[#efefef] flex flex-col gap-y-4">
      {topics.map((topic) => (
        <>
          <h1 className="text-xl text-gray-600 font-bold">{topic.title}</h1>
          <p className="text-sm text-gray-600">{topic.description}</p>
        </>
      ))}
    </div>
  );
};

export default Topics;
