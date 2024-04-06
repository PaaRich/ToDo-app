import document from "../assets/document-outline.svg";
import briefcase from "../assets/briefcase-outline.svg";
import music from "../assets/headset-outline.svg";
import airplane from "../assets/airplane-outline.svg";
import book from "../assets/book-outline.svg";
import home from "../assets/home-outline.svg";
import food from "../assets/pizza-outline.svg";
import shop from "../assets/basket-outline.svg";
import TaskCard from "../components/TaskCard/TaskCard";

const taskData = [
  {
    icon: document,
    task: "All",
    color: "blue",
  },
  {
    icon: briefcase,
    task: "Work",
    color: "yellow",
  },
  {
    icon: music,
    task: "Music",
    color: "orange",
  },
  {
    icon: airplane,
    task: "Travel",
    color: "green",
  },
  {
    icon: book,
    task: "Study",
    color: "blue",
  },
  {
    icon: home,
    task: "Home",
    color: "orange",
  },
  {
    icon: food,
    task: "Food",
    color: "red",
  },
  {
    icon: shop,
    task: "Shopping",
    color: "green",
  },
];

export const propFromTaskCard = TaskCard.prop;
export default taskData;
