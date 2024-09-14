import "./PaymentInfo.scss";

const PaymentInfo = () => {
  return (
    <div className="paymentInfo">
      <div className="container">
        <div className="info">
          <div className="img-box">
            <img src="/img/exchange_icon.png" alt="" />
          </div>
          <p className="section-title">Payment Information</p>
        </div>
        <div className="info">
          <div className="img-box">
            <img src="/img/quality_icon.png" alt="" />
          </div>
          <p className="section-title">Payment Information</p>
        </div>
        <div className="info">
          <div className="img-box">
            <img src="/img/support_img.png" alt="" />
          </div>
          <p className="section-title">Payment Information</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
