import { notification1 } from "../../assets";
import { notificationImages } from "../../constants";
import { NotificationProps } from "../../lib/types";

function Notification({ className, title }: NotificationProps) {
  // Returned JSX
  return (
    <div
    className={`${className || ""} flex items-center p-4 pr-6 bg-[#155EFC]/70 backdrop-blur-md border border-n-1/10 rounded-2xl gap-5`}
    >
      <img
        src={notification1}
        className="rounded-xl"
        width={62}
        height={62}
        alt="Image"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-white">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, i) => (
              <li
                key={i}
                className="flex w-6 h-6 border-1 border-white rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-white">1m ago</div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
