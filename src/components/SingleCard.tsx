
import { Avatar, Card } from 'antd';
import {Link} from 'react-router-dom'
const { Meta } = Card;

const SingleCard = ({cardData} : any) => {

  return (
      <div className="col-lg-4 col-md-5 col-sm-10 gap-2">
      <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src={cardData?.links?.mission_patch
        }
      />
    }
  >
    <Meta
      title={cardData?.mission_name}
      description={cardData?.details && cardData?.details?.slice(0, 75)+'...'}
    />
    <Meta
      className='mt-2'
      title={'Launch Date : '+cardData?.launch_date_local.split('T')[0]}
    />
    <div className='d-flex justify-content-between mt-3'>
      <b>{cardData?.rocket?.rocket_name}</b>
      <Link to={`details/${cardData?.flight_number}`}><button className='btn btn-success'>Details</button></Link>
    </div>
  </Card>
      </div>
   
  )
}

export default SingleCard