import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserCard from "./UserCard";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="container mx-auto">
      <div className="grid grid-cols-3">
        <UserCard
          age={23}
          userName="Himanshu Bari"
          gender="Male"
          teamMembers={["Rahul", "Deepali", "Aditya"]}
          image={{
            alt: "Himanshu",
            src: "https://picsum.photos/id/1/200",
          }}
          withHoverEffect
        />
        <UserCard
          age={23}
          userName="Rahul Sharma"
          gender="Male"
          teamMembers={["Rahul", "Deepali", "Aditya"]}
          image={{
            alt: "Himanshu",
            src: "https://picsum.photos/id/3/200",
          }}
        />
        <UserCard
          age={23}
          userName="Virj Kumar"
          gender="Male"
          teamMembers={["Rahul", "Deepali", "Aditya"]}
          image={{
            alt: "Himanshu",
            src: "https://picsum.photos/id/4/200",
          }}
        />
        <UserCard
          age={23}
          userName="Deepali Kahye"
          gender="Female"
          teamMembers={["Rahul", "Deepali", "Aditya"]}
          image={{
            alt: "Himanshu",
            src: "https://picsum.photos/id/5/200",
          }}
        />
        <UserCard
          age={23}
          userName="Harish Iyer"
          gender="LGBTQA+"
          teamMembers={["Rahul", "Deepali", "Aditya"]}
          image={{
            alt: "Himanshu",
            src: "https://picsum.photos/id/6/200",
          }}
        />
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
