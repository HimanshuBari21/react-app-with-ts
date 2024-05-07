import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

// type for UserCardProps
// here I have also extended it with attributes of div element so userCardProps will also have all the attributes of div element
export type UserCardProps = HTMLAttributes<HTMLDivElement> & {
  userName: string;
  age: number;
  teamMembers?: string[];
  gender: "Male" | "Female" | "LGBTQA+";
  image: {
    alt: string;
    src: string;
  };
  withHoverEffect?: boolean;
};

// here FC means Functional Components this defines that UserCard is Functional component with types defined in UserCardProps
const UserCard: FC<UserCardProps> = (props) => {
  // destructuring the props to use them
  const {
    age,
    gender,
    image,
    userName,
    teamMembers,
    withHoverEffect,
    ...rest
  } = props;

  // above ...rest means all the other props which are inherited from div Element which are not destructed
  return (
    // all the props that are not destructured will be attributes of this div
    <div
      className={clsx(
        "p-6",
        withHoverEffect && "hover:scale-105 transition-all delay-300"
      )}
      {...rest}
    >
      <div className="border p-6">
        <div className="flex gap-6">
          <div className="w-1/3">
            <img src={image.src} alt={image.alt} className="rounded-full" />
          </div>
          <div>
            <h2 className="font-bold text-3xl">{userName}</h2>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
          </div>
        </div>
        {teamMembers?.length && (
          <div className="mt-5">
            <p className="font-bold">Team Members</p>
            <ul>{teamMembers.join(", ")}</ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
