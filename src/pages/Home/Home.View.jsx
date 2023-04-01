import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Endpoints } from '../../ApiServices/apiEndPoints';
import { getDELETECall } from '../../ApiServices/ApiServices';
import { pagetitle } from '../../helper/CommonFunction';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUser, UpdateData, setData } from '../../store/userSlice';
import CustomPageLoader from '../../Components/CustomPageLoader/Index';
import "../Home/Home.scss"
import ModalExample from './Modal.view';
import { Button } from 'react-bootstrap';
import useHomeLogics from './Home.presenter';


const Home = (props) => {
    const [pageLoader,setPageLoader] = useState(true);
    const reduxData = useSelector(state => state.userSlice).value;
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [editItem,setEditItem] = useState({});
    const { handleClose, handleChage, handleShow, handleSubmit, Delete, getItem } = useHomeLogics();

    useEffect(()=>{
        getItem({ title:props.pageTitle, reduxData, setPageLoader, dispatch, setData });
    },[])
    
    return (
        <div className='container Home'>
            {
                <CustomPageLoader pageLoader={pageLoader}/>
            }
            <h3 className='d-flex justify-content-between'>
                USERS 
                <span 
                    className=' pointer text-success fw-bold'
                    onClick={()=>{
                        setEditItem({id:Math.floor(Math.random()*1000)+10,create:true})
                        setShow(true);
                    }}
                >
                    Create User
                </span>
            </h3>
            {(pageLoader===false && reduxData?.length===0)?<h6 className='text-danger'>No data exist</h6>:null}
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {reduxData.map((item) => (
                    <div className='col home-div card p-2' key={item.email}>
                        <p className='d-flex justify-content-between'>
                            user id: {item.id}
                            <span 
                                onClick={()=>{handleShow(item,setShow,setEditItem)}} className='pointer text-warning fw-bold'
                            >
                                Edit
                            </span>
                            <span 
                                onClick={()=>Delete(item.id,{dispatch,DeleteUser,toast})} 
                                className='pointer text-danger fw-bold'
                            >
                                Delete
                            </span>
                        </p>
                        <p>Name: {item.name}</p>
                        <p>Email: {item.email}</p>
                        <p>Phone: {item.phone}</p>
                    </div>
                ))}
            </div>
            {
                show && <ModalExample
                    show={show}
                    handleClose={()=>handleClose(setShow)}
                    title={editItem.create?"Create User":"Edit User"}
                >
                    <form 
                        onSubmit={(e) => handleSubmit(e,{ editItem, dispatch, UpdateData, setEditItem, setShow, toast })}
                    >
                        <h6>User Name:</h6>
                        <input 
                            onChange={(e)=>handleChage(e,{editItem,setEditItem})}
                            name='name' 
                            type='text' 
                            required 
                            value={editItem.name} 
                        />
                        <h6>User Email:</h6>
                        <input 
                            onChange={(e)=>handleChage(e,{editItem,setEditItem})}
                            name='email'
                            type='email' 
                            required 
                            value={editItem.email}
                        />
                        <h6>User Phone:</h6>
                        <input 
                            onChange={(e)=>handleChage(e,{editItem,setEditItem})}
                            name='phone'
                            type='tel' 
                            required 
                            value={editItem.phone}
                        />
                        <hr/>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit'>
                            Save Changes
                        </Button>
                    </form>
                </ModalExample>
            }
        </div>
    );
};

export default Home;