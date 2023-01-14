const Notification = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading"> Notifications </h1>
    <div>
      <img
        className="pic"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <p className="paragraph1"> Information Message </p>
      <img
        className="pic"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <p className="paragraph2"> Success Message </p>
      <img
        className="pic"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <p className="paragraph3"> Warning Message </p>
      <img
        className="pic"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
      <p className="paragraph4"> Danger Message </p>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
