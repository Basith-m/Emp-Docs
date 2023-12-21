import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { SERVER_URL } from '../Services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editEmployeeAPI } from '../Services/allAPI';
import { editEmployeeResponseContext } from '../Context/ContextShare';

function EditEmp({ employee }) {

  const {editEmployeeResponse, setEditEmployeeResponse} = useContext(editEmployeeResponseContext)

  const [show, setShow] = useState(false);;
  const [empDetails, setEmpDetails] = useState({
    id: employee._id,
    name: employee.name,
    employeeID: employee.employeeID,
    position: employee.position,
    DOB: employee.DOB,
    gender: employee.gender,
    address: employee.address,
    joinDate: employee.joinDate,
    salary: employee.salary,
    empImage: ""
  })

//  console.log(employee);

  // state for holding converted uploading image url
  const [preview, setPreview] = useState("")

  // modal open
  const handleShow = () => setShow(true);
  //  modal close
  const handleClose = () => {
    setShow(false);
    setEmpDetails({
      id: employee._id,
      name: employee.name,
      employeeID: employee.employeeID,
      position: employee.position,
      DOB: employee.DOB,
      gender: employee.gender,
      address: employee.address,
      joinDate: employee.joinDate,
      salary: employee.salary,
      empImage: ""
    })
    setPreview("")
  }

  const handleUpdate = async ()=>{
    const {id,name,employeeID,position,DOB,gender,address,joinDate,salary,empImage} = empDetails
    if (!name || !employeeID || !position || !DOB || !gender || !address || !joinDate || !salary) {
      toast.info("Please fill the form completely!!!")
    }else{
      // api call
      const reqBody = new FormData()
      reqBody.append("name", name)
      reqBody.append("employeeID", employeeID)
      reqBody.append("position", position)
      reqBody.append("DOB", DOB)
      reqBody.append("gender", gender)
      reqBody.append("address", address)
      reqBody.append("joinDate", joinDate)
      reqBody.append("salary", salary)
      preview?reqBody.append("empImage",empImage):reqBody.append("empImage",employee.empImage)
      const token = sessionStorage.getItem("token")
      if(preview){
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        // api call
        const result = await editEmployeeAPI(id,reqBody,reqHeader)
        if(result.status === 200){
          handleClose()
          // pass response to view employee
          setEditEmployeeResponse(result.data)
        }else{
          console.log(result);
          toast.err(result.response.data)
        }
      }else{
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        // api call
        const result = await editEmployeeAPI(id,reqBody,reqHeader)
        if(result.status === 200){
          handleClose()
          // pass response to view employee
          setEditEmployeeResponse(result.data)
        }else{
          console.log(result);
          toast.error(result.response.data)
        }
      }
    }
  }

  useEffect(() => {
    if (empDetails.empImage) {
      // converting into url format
      setPreview(URL.createObjectURL(empDetails.empImage))
    }
  }, [empDetails.empImage])

  return (
    <>
      <button style={{ fontSize: '1.2rem', width: '120px' }} className='btn btn-outline-success text-capitalize mx-2 py-2' onClick={handleShow}>
        <i className="fa-solid fa-pen me-3"></i>
        Edit
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
          <Modal.Title>Edit Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <label className='d-flex justify-content-center'>
                <input style={{ display: "none" }} type="file" onChange={e => setEmpDetails({ ...empDetails, empImage: e.target.files[0] })} />
                <img
                  width={'300px'}
                  className="img-fluid rounded"
                  alt="EmployeeImage"
                  src={preview ? preview : `${SERVER_URL}/uploads/${employee.empImage}`}
                />
              </label>
            </div>

            <div className="col-lg-6 p-3">
              <div className="mb-3 ">
                <input
                  onChange={e => setEmpDetails({ ...empDetails, name: e.target.value })}
                  value={empDetails.name}
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={e => setEmpDetails({ ...empDetails, employeeID: e.target.value })}
                  value={empDetails.employeeID}
                  type="text"
                  className="form-control"
                  placeholder="Employee ID"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={e => setEmpDetails({ ...empDetails, position: e.target.value })}
                  value={empDetails.position}
                  type="text"
                  className="form-control"
                  placeholder="Department/Position"
                />
              </div>
              <div className="mb-3">
                <label className='text-secondary' htmlFor="dob">Date of Birth:</label>
                <input
                  onChange={e => setEmpDetails({ ...empDetails, DOB: e.target.value })}
                  value={empDetails.DOB}
                  id='dob'
                  type="date"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={e => setEmpDetails({ ...empDetails, gender: e.target.value })}
                  value={empDetails.gender}
                  type="text"
                  className="form-control"
                  placeholder="Gender"
                />
              </div>
              <div className="mb-3">
                <textarea
                  onChange={e => setEmpDetails({ ...empDetails, address: e.target.value })}
                  value={empDetails.address}
                  type="text"
                  className="form-control"
                  placeholder="Address"
                />
              </div>
              <div className="mb-3">
                <label className='text-secondary' htmlFor="joinDate">Joined Date:</label>
                <input
                  onChange={e => setEmpDetails({ ...empDetails, joinDate: e.target.value })}
                  value={empDetails.joinDate}
                  id='joinDate'
                  type="date"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  onChange={e => setEmpDetails({ ...empDetails, salary: e.target.value })}
                  value={empDetails.salary}
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
          <Button style={{ width: '80px' }} variant="success" onClick={handleUpdate}>Update</Button>
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

export default EditEmp