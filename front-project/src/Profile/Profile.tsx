import Axios from 'axios';
import React, { ReactElement, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Lot from '../LotsList/Lot';
import ErrorBoundary from '../ErrorBoundary';
import "./Profile.css"
import Modal from './Modal';
import Button from 'react-bootstrap/esm/Button';
import { GridList } from '@material-ui/core';

export default function Profile(): ReactElement {
    const account = JSON.parse(localStorage.getItem('account')||'{}');
    const [isOpen, setIsOpen] = useState(false);
    const [productList, setProductList] = useState<any[]>([])

    useEffect(()=>{
        Axios.post('http://localhost:8080/api/getUserProducts', {
            owner_id: account.id
        }).then((response)=>{
          setProductList(response.data)
      })
    },[]);
    
    const lotList = productList.map(lot=><Link to={`lots/${lot.id}`}><Lot key={lot.id} lot={lot} userId={account.id}></Lot></Link>)

    return (
        <>
            <div className="info" style={{zIndex: 1}}>
                <div className="profile-side">
                    <img src="https://www.jetphotos.com/assets/img/user.png"/>
                    <h3 className="profile">Profile info:</h3>
                    <h5 className="email"> Your email:{account.email}</h5>
                    <p className="id">Account id:{account.id}</p>
                    <hr/>
                    <Button variant="primary" size="lg" block onClick={()=>setIsOpen(true)}>delete account</Button>
                    <Modal open={isOpen} onClose={()=>setIsOpen(false)}>Changed</Modal>
                </div>

                <div className="lots-side">
                    <h3 className="lots">Your products:</h3>
                    { 
                    productList.length > 0 ? 
                    <div>
                    <ErrorBoundary>
                    <GridList cols={2} cellHeight={'auto'} style={{marginTop: '10px'}}>
                        {lotList}
                    </GridList>
                    </ErrorBoundary>
                    </div>
                    :
                    <>
                    <h5>It's empty</h5>
                    <Link to="/add-product">Want to start selling?</Link>
                    </>
                    }
                </div>
            </div>
        </>
    )
}
