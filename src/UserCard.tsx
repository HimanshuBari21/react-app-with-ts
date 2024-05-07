import { FC, HTMLAttributes } from "react";
import "./UserCard.css";
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
      className={clsx("card-wrapper", withHoverEffect && "hover-effect")}
      {...rest}
    >
      <div className="user-wrapper">
        <div className="user-img">
          <img src={image.src} alt={image.alt} />
        </div>
        <div>
          <h2>{userName}</h2>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
        </div>
      </div>
      {teamMembers?.length && (
        <div>
          <p>Team Members</p>
          <ul>
            {teamMembers?.map((member, i) => {
              return <li key={i}>{member}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserCard;
