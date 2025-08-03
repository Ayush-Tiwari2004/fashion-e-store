import AllProductsData from '../../../API/AllProductsData.json';
import ShirtsBrandsGamingTools from '../../../API/ShirtsBrandsGamingTools.json';

export const GetShoesData = ({ params }) => {
  const shoesDetails = AllProductsData.shoesData.find((item) => item.id.toString() === params.id);
  return shoesDetails;
};

export const GetTshirtData = ({params}) => {
  const tshirtDetails = AllProductsData.tshirtData.find((item) => item.id.toString() === params.id);
  return tshirtDetails;
}

export const GetShirtData = ({params}) => {
  const shirtsData = ShirtsBrandsGamingTools.shirtsData.find((item) => item.id.toString() === params.id);
  return shirtsData;
}

export const GetBrandsData = ({params}) => {
  const brandData = ShirtsBrandsGamingTools.brandsData.find((item) => item.id.toString() === params.id);
  return brandData;
}

export const GetGamingToolsData = ({params}) => {
  const gamingToolsData = ShirtsBrandsGamingTools.gamingToolsData.find((item) => item.id.toString() === params.id);
  return gamingToolsData;
}