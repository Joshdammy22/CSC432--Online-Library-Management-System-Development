import { CardData } from './Data/CardData';
import { Card } from './components/Card';
export const CardContainer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center py-16 p-4">
        {CardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            ellipseColor={card.ellipseColor}
            linkTo={card.linkTo}
          />
        ))}
      </div>
      <footer className="text-center font-bold text-2xl">
        WE are LASU, we are Great!
      </footer>
    </div>
  );
};
