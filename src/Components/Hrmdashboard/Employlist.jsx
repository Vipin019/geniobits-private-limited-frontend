import React,{useEffect,useState} from 'react'


const Employlist = () => {

  const [datas, setData] = useState([
    {
      name: "",
      email: "",
    },
  ]);

  useEffect(() => {
    fetch("https://geniobits.herokuapp.com/api/address")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setData(jsonRes));
  },[]);

  return (
    <div>{
      datas.map(data =>
        <div>
          <p>Employee Adress:{data.address}</p>
          <p>Employee PhoneNo:{data.phoneno}</p>
          <p>Employee Email:{data.email}</p>
        </div>
      )
    }
    </div>
  )
}

export default Employlist
