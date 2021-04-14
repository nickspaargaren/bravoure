import { MdStar } from "react-icons/md";

interface RatingProps {
  rating: Number,
}

const Rating = (props: RatingProps) => (
  <div className="rating"><MdStar/><span><strong>{props.rating}</strong> / 10</span></div>
)

export default Rating