import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import profileImage from '../Assets/Images/default-profile-2.png'
import { addEmployeeAPI } from '../Services/allAPI';
import { addEmployeeResponseContext, paymentRespopnseContext } from '../Context/ContextShare';
import { useNavigate } from 'react-router-dom';

function AddEmp() {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [empDetails, setEmpDetails] = useState({
    name: "", employeeID: "", firm: "", position: "", DOB: "", gender: "", address: "", joinDate: "", salary: "", empImage: ""
  })
  const { isPyamentSuccess, setIsPayamentSuccess } = useContext(paymentRespopnseContext)
  // state for holding converted uploading image url
  const [preview, setPreview] = useState("")
  const [token, setToken] = useState("")
  // console.log(empDetails);

  const { addEmpolyeeResponse, setAddEmployeeResponse } = useContext(addEmployeeResponseContext)
  // modal open
  const handleShow = () => {
    if (isPyamentSuccess) {
      setShow(true);
    } else {
      navigate('/payment')
    }
  }
  // modal close
  const handleClose = () => {
    setShow(false);
    setEmpDetails({
      name: "", employeeID: "", firm: "", position: "", DOB: "", gender: "", address: "", joinDate: "", salary: "", empImage: ""
    })
    setPreview("")
  }

  // function for add employee
  const handleAdd = async (e) => {
    e.preventDefault()
    const { name, employeeID, firm, position, DOB, gender, address, joinDate, salary, empImage } = empDetails
    if (!name || !employeeID || !firm || !position || !DOB || !gender || !address || !joinDate || !salary || !empImage) {
      toast.info("Please fill the form completely!!!")
    } else {
      // req Body
      const reqBody = new FormData()
      reqBody.append("name", name)
      reqBody.append("employeeID", employeeID)
      reqBody.append("firm", firm)
      reqBody.append("position", position)
      reqBody.append("DOB", DOB)
      reqBody.append("gender", gender)
      reqBody.append("address", address)
      reqBody.append("joinDate", joinDate)
      reqBody.append("salary", salary)
      reqBody.append("empImage", empImage)
      if (token) {
        // req Header
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        // api call
        const result = await addEmployeeAPI(reqBody, reqHeader)
        if (result.status === 200) {
          console.log(result.data);
          handleClose()
          toast.success("Added Successfully..")
          setAddEmployeeResponse(result.data)
        } else {
          console.log(result);
          toast.warning(result.response.data)
        }
      }
    }
  }

  useEffect(() => {
    if (empDetails.empImage) {
      // converting uploaded image into url format
      setPreview(URL.createObjectURL(empDetails.empImage))
    }
  }, [empDetails.empImage])
  // get token
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    } else {
      setToken("")
    }
  }, [])
  return (
    <>
      <button className='btn btn-outline-danger text-capitalize fs-5 mx-2 p-2' onClick={handleShow}>
        <i className="fa-solid fa-user-plus me-3"></i>
        Add Employee
      </button>

      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <label className='d-flex justify-content-center'>
                <input style={{ display: "none" }} type="file" onChange={e => setEmpDetails({ ...empDetails, empImage: e.target.files[0] })} />
                <img
                  width={'300px'}
                  className="img-fluid rounded"
                  src={preview ? preview : profileImage}
                  alt="EmployeeImage"
                />
              </label>
            </div>

            <div className="col-lg-6 p-3">
              <div className="mb-3 ">
                <input
                  value={empDetails.name}
                  onChange={e => setEmpDetails({ ...empDetails, name: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  value={empDetails.employeeID}
                  onChange={e => setEmpDetails({ ...empDetails, employeeID: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Employee ID"
                />
              </div>
              <div className="mb-3 ">
                <input
                  value={empDetails.firm}
                  onChange={e => setEmpDetails({ ...empDetails, firm: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Firm Name"
                />
              </div>
              <div className="mb-3">
                <input
                  value={empDetails.position}
                  onChange={e => setEmpDetails({ ...empDetails, position: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Department/Position"
                />
              </div>
              <div className="mb-3">
                <label className='text-secondary' htmlFor="dob">Date of Birth:</label>
                <input
                  id='dob'
                  value={empDetails.DOB}
                  onChange={e => setEmpDetails({ ...empDetails, DOB: e.target.value })}
                  type="date"
                  className="form-control"
                />
              </div>
              <div className="mb-3 d-flex justify-content-between pe-5">
                <label>
                  <input
                    value="Male"
                    onChange={e => setEmpDetails({ ...empDetails, gender: "Male" })}
                    type="radio"
                    name='radio'
                  />
                  <span className='ms-2'>Male</span>
                </label>
                <label>
                  <input
                    value="Female"
                    onChange={e => setEmpDetails({ ...empDetails, gender: "Femail" })}
                    type="radio"
                    name='radio'
                  />
                  <span className='ms-2'>Female</span>
                </label>
                <label>
                  <input
                    value="Other"
                    onChange={e => setEmpDetails({ ...empDetails, gender: "Other" })}
                    type="radio"
                    name='radio'
                  />
                  <span className='ms-2'>Other</span>
                </label>
              </div>
              <div className="mb-3">
                <textarea
                  value={empDetails.address}
                  onChange={e => setEmpDetails({ ...empDetails, address: e.target.value })}
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
              </div>
              <div className="mb-3">
                <label className='text-secondary' htmlFor="joinDate">Joined Date:</label>
                <input
                  id='joinDate'
                  value={empDetails.joinDate}
                  onChange={e => setEmpDetails({ ...empDetails, joinDate: e.target.value })}
                  type="date"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  value={empDetails.salary}
                  onChange={e => setEmpDetails({ ...empDetails, salary: e.target.value })}
                  type="number"
                  className="form-control"
                  placeholder="Salary"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ width: '80px' }} variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button style={{ width: '80px' }} variant="success" onClick={handleAdd}>ADD</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-right"
        closeOnClick
        theme="dark"
      ></ToastContainer>
    </>
  )
}

export default AddEmp