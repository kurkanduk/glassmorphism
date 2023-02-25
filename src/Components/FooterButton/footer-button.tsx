const FooterButton = () => {
  const clickHandler = (e: any) => {
    e.target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button className="footer-button" onClick={clickHandler}>
      ▲
    </button>
  );
};

export default FooterButton;
