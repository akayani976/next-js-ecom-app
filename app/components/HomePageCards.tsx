import { IconType } from "react-icons";

export default function HomePageCards({icon: Icon, title, description}: {icon: IconType, title: string, description: string}) {
    return (
        <div className="flex flex-col items-center justify-center bg-white dark:bg-white w-80 gap-2">
              <div className="flex flex-col items-center justify-center bg-white dark:bg-blue-200 rounded-full w-20 h-20">
                <Icon className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-black text-xl font-bold">{title}</h3>
              <p className="text-gray-500 text-base text-center">{description}</p>
            </div>
    )
}