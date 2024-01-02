import React, { useContext } from 'react'
import paymentImage from '../Assets/Images/payment-image.png'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { paymentRespopnseContext } from '../Context/ContextShare';

function Payment() {
    const navigate = useNavigate()
    const { isPyamentSuccess, setIsPayamentSuccess } = useContext(paymentRespopnseContext)
    const handlePay = () => {
        setIsPayamentSuccess(true)
        toast.success("Payment Successfull")
        setTimeout(() => {
            navigate('/employees');
        }, 2500);
    }

    return (
        <div style={{ minHeight: '89.8vh', backgroundColor: '#ad2b96', overflowX: 'hidden' }} className='d-flex align-items-center justify-content-center w-100'>
            <div className='row w-100 p-5'>
                <div className="col-md-6 d-flex justify-content-center flex-column p-5">
                    <Link to={'/employees'} style={{ textDecoration: 'none', width: '120px' }} className='fs-5 mb-5 text-light shadow p-2 rounded text-center'><i className="fa-solid fa-arrow-left fa-beat-fade me-3"></i>Back</Link>
                    <h1 className='text-light fw-bold mb-5'>You can gain this service after successfull payment</h1>
                    <h3 className='text-light'>Now Only <span style={{ color: 'gold' }}>$250</span></h3>
                    <button style={{ width: '140px' }} className='btn btn-light text-capitalize fs-5 p-2 mt-2' onClick={handlePay}>Pay Amont</button>
                </div>
                <div className="col"></div>
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img className='img-fluid' src={paymentImage} alt="paymentImage" />
                </div>
            </div>
            <ToastContainer
                position="top-right"
                closeOnClick
                theme="dark"
            ></ToastContainer>
        </div>
    )
}

export default Payment