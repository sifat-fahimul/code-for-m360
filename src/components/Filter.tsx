import {useState} from 'react'
import { Input } from 'antd';
import { Select } from 'antd';
import {useDispatch} from 'react-redux';
import { useGetAllFashionsQuery } from '../reducer/apiSlice';
import { getMonth, getWeek, getYear } from '../common/getDates';



function Filter({setFilterData}:any) {

    const [launchDate,setLaunchDate]=useState(null)
    const [launchStatus,setLaunchStatus]=useState(null)
    const [launchUpcoming,setLaunchUpcoming]=useState(null)

    const {data}=useGetAllFashionsQuery()

    const dispatch:any=useDispatch()

    const search=(event:string)=>{
        setLaunchDate(null)
        setLaunchStatus(null)
        setLaunchUpcoming(null)
    
       setFilterData(data.filter((e:any)=>e.rocket.rocket_name.toLowerCase().includes(event.toLowerCase())))
    }

    // const serc=(event:any)=>{
    //     console.log(data.filter((e:any)=>e.mission_name.toLowerCase().includes(event.toLowerCase())))
    //     dispatch(search(data.filter((e:any)=>e.mission_name.toLowerCase().includes(event.toLowerCase()))));
    // }

    const onChangeLaunchDate = (value:any,leb:object|any) => {
        setLaunchDate(value)
        setLaunchStatus(null)
        setLaunchUpcoming(null)
        if(leb.label==='NONE')setFilterData(data);
        if(leb.label==="LAST WEEK") setFilterData(data.filter((d:any) => {var time = d.launch_date_local.split("T")[0]
        return (value.split('to')[1] ) < time && time < (value.split('to')[0])
       }))
        if(leb.label==="LAST MONTH") setFilterData(data.filter((d:any) => {var time = d.launch_date_local.split("T")[0]
        return (value.split('to')[1] ) < time && time < (value.split('to')[0])
       }))
        if(leb.label==="LAST YEAR") setFilterData(data.filter((d:any) => {var time = d.launch_date_local.split("T")[0]
        return (value.split('to')[1] ) < time && time < (value.split('to')[0])
       }))
      
      };
      const onChangeLaunchStatus = (value:object|string|any) => {
        setLaunchStatus(value)
        setLaunchDate(null)
        setLaunchUpcoming(null)
        setFilterData(data.filter((e:any)=>e.launch_success===value))
      };
      
      const onChangeLaunchUpcoming = (value:object|string|any) => {
        setLaunchStatus(null)
        setLaunchDate(null)
        setLaunchUpcoming(value)
        setFilterData(data.filter((e:any)=>e.upcoming===value))
        
      };
 

  return (
    <div className='row mb-5'>
         <div className="col-lg-3 col-md-5 col-10">
                <p>Search</p>
                <Input onChange={(e)=>search(e.target.value)} placeholder="Search By Rocket Name" />
        </div>
        <div className="col-lg-3 col-md-5 col-10">
        <p>Filter By Launch Date</p>
        <Select
        className='w-100'
        showSearch
        placeholder="Search By Date"
        optionFilterProp="children"
        onChange={onChangeLaunchDate}
     
        value={launchDate}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
        {
            value: '',
            label: 'NONE',
          },
      {
        value: getWeek().startDate +"to"+ getWeek().endDate,
        label: 'LAST WEEK',
      },
      {
        value: getMonth().startDate +"to"+getMonth().endDate,
        label: 'LAST MONTH',
      },
      {
        value: getYear().startDate +"to"+getYear().endDate,
        label: 'LAST YEAR',
      },
    ]}
  />
    </div>
    <div className="col-lg-3 col-md-5 col-10">
        <p>Filter By Launch Status</p>
        <Select
        className='w-100'
        showSearch
        placeholder="Search By Launch Status"
        optionFilterProp="children"
        onChange={onChangeLaunchStatus}
        value={launchStatus}
     
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: false,
        label: 'Failure',
      },
      {
        value: true,
        label: 'Success',
      },
     
    ]}
  />
    </div>
    <div className="col-lg-3 col-md-5 col-10">
        <p>Filter By Upcoming</p>
        <Select
        className='w-100'
        showSearch
        placeholder="Search By Launch Status"
        optionFilterProp="children"
        onChange={onChangeLaunchUpcoming}
        value={launchUpcoming}
     
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: true,
        label: 'YES',
      },
      {
        value: false,
        label: "NO",
      },
     
    ]}
  />
    </div> 
    </div>
  )
}

export default Filter