import React from 'react'
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

class Profile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: false,
    }
    const userdata = JSON.parse(localStorage.getItem('user'))
    console.log(userdata)
    axios({
      method: API.userdetail.method,
      url: API.userdetail.url.replace('{id}', userdata['id']),
    })
      .then((res) => {
        console.log(res.data)
        this.setState({
          data: res.data.data,
        })
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data)
        } else {
          console.log(err)
        }
      })
  }

  render() {
    const user = this.state.data
    return (
      <>
        {user && (
          <CCard style={{ width: '100%' }}>
            <CCardHeader>Profile</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12}>
                  <CTable striped>
                    <CTableBody>
                      <CTableRow>
                        <CTableHeaderCell scope="col" style={{ width: '100px' }}>
                          ID
                        </CTableHeaderCell>
                        <CTableDataCell scope="col" style={{ width: '1px' }}>
                          :
                        </CTableDataCell>
                        <CTableDataCell scope="col">{user.id}</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                        <CTableHeaderCell scope="col">:</CTableHeaderCell>
                        <CTableDataCell scope="col">{user.name}</CTableDataCell>
                      </CTableRow>
                      <CTableRow>
                        <CTableHeaderCell scope="col">Age</CTableHeaderCell>
                        <CTableHeaderCell scope="col">:</CTableHeaderCell>
                        <CTableDataCell scope="col">{user.age}</CTableDataCell>
                      </CTableRow>
                    </CTableBody>
                  </CTable>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        )}
      </>
    )
  }
}

export default Profile
