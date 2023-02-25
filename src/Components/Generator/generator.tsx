import { useState } from "react";
import "./generator.scss";

const Generator = (props: {
  setBlur: any;
  setTransparency: any;
  blur: any;
  transparency: any;
}) => {
  const blurHandle = (e: any) => {
    props.setBlur(e.target.value);
  };
  const transHandle = (e: any) => {
    props.setTransparency(e.target.value);
  };
  return (
    <div className="g-background">
      <div className="control-panels">
        <div className="blur-control">
          <label htmlFor="blur">
            <span>Blur:</span>
            <span>{props.blur}</span>
          </label>
          <input
            type={"range"}
            id="blur"
            defaultValue="10"
            step={0.5}
            min="0"
            max="20"
            onChange={blurHandle}
          ></input>
        </div>
        <div className="blur-control">
          <label htmlFor="transparency">
            <span>Transparency:</span>
            <span>{props.transparency}%</span>
          </label>
          <input
            type={"range"}
            id="transparency"
            defaultValue="50"
            step={1}
            min="0"
            max="100"
            onChange={transHandle}
          ></input>
        </div>
      </div>
      <div className="output">
        <code className="code">
          background: rgba( 255, 255, 255, {props.transparency / 100} );
          <br />
          box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
          <br />
          backdrop-filter: blur( {props.blur} );
          <br />
          -webkit-backdrop-filter: blur( {props.blur} );
          <br />
          border-radius: 10px;
          <br />
          border: 1px solid rgba( 255, 255, 255, 0.18 );
          <br />
        </code>
      </div>
    </div>
  );
};
export default Generator;
