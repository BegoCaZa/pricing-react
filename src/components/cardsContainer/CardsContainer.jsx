import { PRICING_INFO } from '../../constants/PRICING_INFO';

const CardsContainer = () => {
  return (
    <div>
      {PRICING_INFO.map((info, index) => (
        <div key={index}>
          <h2>{info.plan}</h2>
          <p>{info.storage}</p>
          <p>{info.users}</p>
          <p>{info.send}</p>
          <p>${info.monthly}/mo</p>
          <p>${info.annually}/yr</p>
        </div>
      ))}
    </div>
  );
};
export default CardsContainer;
