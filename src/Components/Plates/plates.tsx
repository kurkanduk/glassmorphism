import "./plates.scss";
const Plates = (props: { blur: any; transparency: any }) => {
  console.table(props);
  return (
    <div className="plates-bg">
      <div
        className="plate"
        style={{
          background: "rgba(255,255,255," + props.transparency / 100 + ")",
          backdropFilter: "blur(" + props.blur + "px)",
        }}
      >
        ❤️‍🔥
        

      </div>
      <div
          className="plate-3"
          style={{
            background: "rgba(255,255,255," + props.transparency / 100 + ")",
            backdropFilter: "blur(" + props.blur + "px)",
          }}
        >
          🪐
        </div>
      <div
          className="plate-1"
          style={{
            background: "rgba(255,255,255," + props.transparency / 100 + ")",
            backdropFilter: "blur(" + props.blur + "px)",
          }}
        >
          🌚
        </div>
        <div
          className="plate-2"
          style={{
            background: "rgba(255,255,255," + props.transparency / 100 + ")",
            backdropFilter: "blur(" + props.blur + "px)",
          }}
        >
          ⭐️
        </div>
    </div>
  );
};
export default Plates;
