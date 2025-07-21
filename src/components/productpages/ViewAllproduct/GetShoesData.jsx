import db from '../../../API/ShoesData.json';

export const GetShoesData = ({ params }) => {
  const shoesDetails = db.find((item) => item.id.toString() === params.id);
  return shoesDetails;
};
