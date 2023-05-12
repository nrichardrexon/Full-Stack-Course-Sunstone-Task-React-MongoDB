import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">BLOG</span>
        <span className="headerTitleLg">SPOTTER</span>
      </div>
      <img
        className="headerImg"
        src="https://wallpaperaccess.com/full/6133760.jpg"
        alt=""
      />
    </div>
  );
}
