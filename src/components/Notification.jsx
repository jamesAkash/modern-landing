import React from "react";
import { notificationImages } from "../constants";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, i) => {
              return (
                <li
                  key={i}
                  className="flex w-6 h-6 bottom-2 border-n-12 rounded-full overflow-hidden"
                >
                  <img
                    src={item}
                    className="w-full"
                    width={20}
                    height={20}
                    alt={item}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
