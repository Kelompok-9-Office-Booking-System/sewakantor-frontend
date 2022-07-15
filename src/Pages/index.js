import React from 'react'
import {Card} from 'react-bootstrap';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import StarIcon from '@mui/icons-material/Star';

  const Index = () => {
    const cardInfo = [
            {
              id: 1,
              thumbnail: "https://placeholder.pics/svg/280x175",
              towerName: "BCA Tower Lorem",
              ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
              address: "50/F, Menara BCA Grand Indonesia, Jakarta, 10310",
              price: 1700000,
              buid : 58,
            },
            {
              id: 2,
              thumbnail: "https://placeholder.pics/svg/280x175",
              towerName: "BCA Tower Ipsum",
              ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
              address: "50/F, Menara BCA Grand Indonesia, Bandung, 10310",
              price: 2700000,
              buid : 58,
            },
            {
              id: 3,
              thumbnail: "https://placeholder.pics/svg/280x175",
              towerName: "BCA Tower Dolor",
              ratings: [5, 4, 4, 4, 1, 5, 5, 5, 4],
              address: "50/F, Menara BCA Grand Indonesia, Tangerang, 10310",
              price: 3700000,
              buid : 58,
            },
          ];
  
    const renderCard = (cardInfo, index) => {
      return (
        <Card style={{ width: "18rem"}} key={index}>
          <Card.Img variant="top" src={cardInfo.thumbnail}></Card.Img>
          <Card.Body>
            <Card.Title>{cardInfo.towerName}</Card.Title>
            <MapsHomeWorkIcon/>{cardInfo.buid} <StarIcon/>{cardInfo.ratings}
            <Card.Text>{cardInfo.address}</Card.Text>
            <Card.Text>Start from {cardInfo.price}</Card.Text>
          </Card.Body>
        </Card>
      );
    };
  
    return <div className="card">{cardInfo.map(renderCard)}</div>;
  };


export default Index