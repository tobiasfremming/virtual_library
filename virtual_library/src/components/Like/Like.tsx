import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) {
    return (
      <>
        <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />
      </>
    );
  } else {
    return (
      <>
        <AiOutlineHeart size={20} onClick={toggle} />
      </>
    );
  }
};

export default Like;
