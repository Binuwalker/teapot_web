import React from 'react';
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';

const Brand = () => {
  return (
    <div className='brand'>
      <div className='brand_border'></div>
      <div className='container'>
        <div className='brand_detail_container'>
          <div className='contact_container' style={{ paddingLeft: '10px' }}>
            <div style={{ marginTop: '20px', fontSize: '19px', fontWeight: 500 }}>CONTACT DETAILS</div>
            <div style={{ marginTop: '20px', fontSize: '17px', fontWeight: 600 }}>Contact No:
              <span style={{ marginTop: '20px', marginLeft: '10px', fontSize: '15px', fontWeight: 500 }}>+91 65874 98575</span>
            </div>
            <div style={{ marginTop: '5px', fontSize: '17px', fontWeight: 600 }}>Address:
              <span style={{ marginTop: '20px', marginLeft: '10px', fontSize: '15px', fontWeight: 500 }}>47519, Layla Haven Apt. 066, Lavernaside, New Jersey, United States - 75173</span>
            </div>
            <div style={{ marginTop: '5px', fontSize: '17px', fontWeight: 600 }}>Email:
              <span style={{ marginTop: '20px', marginLeft: '10px', fontSize: '15px', fontWeight: 500 }} F>teaspotsupport@teaspot.com</span>
            </div>
          </div>
          <div className='more_links_container' style={{ paddingLeft: '10px' }}>
            <div style={{ marginTop: '20px', fontSize: '19px', fontWeight: 500 }}>MORE LINKS</div>
            <div style={{ marginTop: '20px', fontSize: '15px', fontWeight: 500 }}>Shipping Policy</div>
            <div style={{ marginTop: '10px', fontSize: '15px', fontWeight: 500 }}>Terms & Conditions</div>
            <div style={{ marginTop: '10px', fontSize: '15px', fontWeight: 500 }}>Privacy Policy</div>
            <div style={{ marginTop: '10px', fontSize: '15px', fontWeight: 500 }}>Terms & Services</div>
            <div style={{ marginTop: '10px', fontSize: '15px', fontWeight: 500 }}>Refund Policy</div>
            <div style={{ marginTop: '10px', fontSize: '15px', fontWeight: 500 }}>Return Policy</div>
          </div>
          <div className='social_links_container' style={{ paddingLeft: '10px' }}>
            <div style={{ marginTop: '20px', fontSize: '19px', fontWeight: 500 }}>CONNECT US WITH</div>
            <div style={{ marginTop: '20px'}}><FaTwitterSquare style={{fontSize: '30', color: '#1DA1F2'}}/> <FaFacebookSquare style={{fontSize: '30', color: '#1877F2'}}/> <FaInstagramSquare style={{fontSize: '30', color: '#E4405F'}}/></div>
          </div>
        </div>
      </div>
      <div className='brand_border'></div>
      <div style={{marginTop: '20px', marginBottom: '20px', fontSize: '19px', fontWeight: 550}}><center>©️ 2023 Teapot all rights reserved</center></div>
    </div>
  )
}

export default Brand;