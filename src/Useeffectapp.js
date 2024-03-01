import React, { useEffect, useState } from 'react'

function Useeffectapp() {

    const [user, setuser] = useState([])
    const getUser = async()=>{
        const response =await fetch('https://api.github.com/users')
        // const data = await response.json();
        // console.log(data);
        setuser(await response.json());
    }
    useEffect(()=>{
        getUser();
    },[]);
    
  return (
    <div>
        <h2 className='heading' >List of Github user</h2>
        <div className="container-fluid mt-4">
            <div className="row text-center">
            {
                user.map((currentEle)=>{
                    return(
                        <div className="col-10 col-md-4 mt-5">
                    <div className="card p-2">
                        <div className="d-flex align-item-center">
                            <div className="image"><img src={currentEle.avatar_url} alt="" className="rounded" width='155'/> </div>
                            <div className="ml-3 w-100">
                                <h4 className="mb-0 mt-0 textleft">{currentEle.login}</h4> <span className="textleft">Web Developer</span>
                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                    <div className="d-flex flex-column"><span className="articles">articles</span><span className="number1">25</span></div>
                                    <div className="d-flex flex-column"><span className="followers">followers</span><span className="number2">23</span></div>
                                    <div className="d-flex flex-column"><span className="rating">rating</span><span className="number3">2321</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    )
                })
            }
                
                
            </div>
        </div>
    </div>
  )
}

export default Useeffectapp