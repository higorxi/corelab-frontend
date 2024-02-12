import { IoIosStarOutline, IoIosStar } from 'react-icons/io'

export default function Estrela({ favoritada, onClick, size }) {
  return (
    <div onClick={onClick}>
      {favoritada ? (
        <IoIosStar className="star" color="gold" size={size ? size : 24} />
      ) : (
        <IoIosStarOutline size={size ? size : 24} className="star" />
      )}
    </div>
  )
}
