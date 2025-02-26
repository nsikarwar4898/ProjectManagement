import CustomButton from '../atoms/Button/Button';
import CardImg from '../../assets/Card.svg';
import Avatar from '../../assets/Avatar.png';
type Product = {
  title: string;
  name: string;
  category: string;
  brand: string;
};

const ProductCard = ({ title, name }: Product) => {
  return (
    <div className="flex flex-col gap-8 p-4 rounded">
      <img src={CardImg} alt="img" />
      <div>
        <h4 className="mt-2 text-sm text-gray-600">{title}</h4>
        <h3 className="text-md font-semibold">{name}</h3>
        <div className="flex items-center gap-2">
          <img src={Avatar} alt="img" />
          <p className="text-xs font-normal">Company name</p>
        </div>
        <CustomButton
          name="View Product"
          variant="text"
          styles={{
            fontWeight: 500,
            fontSize: '14px',
            borderRadius: '50px',
            color: '#204C5B',
            backgroundColor: '#F7FAFB',
            paddingX: '65px',
            paddingY: '10px',
            textTransform: 'capitalize',
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
