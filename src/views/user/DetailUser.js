import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import axios from 'axios'
import API from '../../API'
import { useParams } from 'react-router-dom'

const DetailUser = () => {
  const { id } = useParams()
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios({
      method: API.userdetail.method,
      // Replace {id} with id from url
      url: API.userdetail.url.replace('{id}', id),
    })
      .then((res) => {
        setData(res.data.data)
        setLoading(false)
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data)
        } else {
          console.log(err)
        }
      })
  }, [id])
  return (
    <>
      {data && (
        <CRow>
          <CCol xs="12">
            <CCard>
              <CCardHeader>
                <strong>Detail User</strong>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs="12">
                    <CTable>
                      <CTableBody>
                        <CTableRow>
                          <CTableHeaderCell>ID</CTableHeaderCell>
                          <CTableHeaderCell>Name</CTableHeaderCell>
                          <CTableHeaderCell>Age</CTableHeaderCell>
                          <CTableHeaderCell>Password</CTableHeaderCell>
                        </CTableRow>
                      </CTableBody>
                      <CTableBody>
                        <CTableRow>
                          <CTableDataCell>{data.id}</CTableDataCell>
                          <CTableDataCell>{data.name}</CTableDataCell>
                          <CTableDataCell>{data.age}</CTableDataCell>
                          <CTableDataCell>{data.password}</CTableDataCell>
                        </CTableRow>
                      </CTableBody>
                    </CTable>
                  </CCol>
                </CRow>
              </CCardBody>
              {/* <CCardHeader>
                <strong>Risk Profile</strong>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs="12">
                    <CTable>
                      <CTableBody>
                        <CTableRow>
                          <CTableHeaderCell>User ID</CTableHeaderCell>
                          <CTableHeaderCell>MM Percent</CTableHeaderCell>
                          <CTableHeaderCell>Bond Percent</CTableHeaderCell>
                          <CTableHeaderCell>Stock Percent</CTableHeaderCell>
                          <CTableHeaderCell>Total Percent</CTableHeaderCell>
                        </CTableRow>
                      </CTableBody>
                      <CTableBody>
                        <CTableRow></CTableRow>
                      </CTableBody>
                    </CTable>
                  </CCol>
                </CRow>
              </CCardBody> */}
            </CCard>
          </CCol>
        </CRow>
      )}
    </>
  )
}

export default DetailUser
