import product from './produc'
import './App.css'
import Card from 'react-bootstrap/Card';

function Cardss({item}) {
    return (
      <Card className='maincard'>
        <div className="cardimg">

        <Card.Img  style={{ width: '100%' }} variant="top" src={item.images} />
        </div>
        <Card.Body className='cardbody'>
          <Card.Title className='cardtitle'>{item.title}</Card.Title>
          
        </Card.Body>
      </Card>
    );
  }
export default Cardss