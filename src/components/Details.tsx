import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { Card } from 'antd';
import { useGetFashionByIdQuery } from '../reducer/apiSlice';

const { Meta } = Card;

function Details() {

const id =useParams()

    const {data,error,isLoading}=useGetFashionByIdQuery(id.flight_number);

    if(isLoading)return <h2>Loading...</h2>

    if(error)return <>
    <h2>{error.status}</h2>
    <h3>{error.error}</h3></>

  return (
    <div>
       <div>
       <Card
            hoverable
            cover={<img className='w-25 mt-2' alt="mission_patch" src={data?.links?.mission_patch} />}
            style={{width:500}}
         >
            <h2>Flight Number : {data?.flight_number}</h2>
          <Meta title={'Mission Name : '+ data?.mission_name} description={"Details : "+data?.details} />    <hr />
          <Meta
      className='mt-2'
      title={'Launch Failure Reason : '+data?.launch_failure_details?.reason}
    />
          <Meta
      className='mt-2'
      title={'Launch Failure Time : '+data?.launch_failure_details?.time}
    />
    <hr />
          <Meta
      className='mt-2'
      title={'Launch Date : '+data?.launch_date_local?.split('T')[0]}
    />
     </Card>
       </div>
      <div className="mt-4">
      <Link to='/'> <button className='btn btn-info'>Go Home</button></Link>
      </div>
    </div>
  )
}

export default Details