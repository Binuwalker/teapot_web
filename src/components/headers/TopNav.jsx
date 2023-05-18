import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <>
      <div className='topNav navbar-sticky'>
        <div className='navBar'>
          <Container fluid>
            <Row>
              <Col xl={2}>
                <div className='navLogo'>
                  <div className='navLogo_container'>
                    <img src='./img/logo/brand_logo.png' alt='brand_logo' className='navLogo_srcimg' />
                  </div>
                </div>
              </Col>
              <Col xl={10}>
                <div className='navLinks'>
                  <div className='navlinks_right'>
                    <ul className='ul'>
                      <li>
                        <Link to='/' className='navlink'>
                          <div className='navtext'>HOME</div>
                        </Link>
                      </li>
                      <li>
                        <Link to='/about' className='navlink'>
                          <div className='navtext'>ABOUT</div>
                        </Link>
                      </li>
                      <li>
                        <Link to='/teavarieties' className='navlink'>
                          <div className='navtext'>TEA VARIETIES</div>
                        </Link>
                      </li>
                      <li>
                        <Link to='/partyordering' className='navlink'>
                          <div className='navtext'>PARTY ORDERING</div>
                        </Link>
                      </li>
                      <li>
                        <Link to='/contactus' className='navlink'>
                          <div className='navtext'>CONTACT US</div>
                        </Link>
                      </li>
                      <li>
                        <Link to='/signin' className='navlink'>
                          <div className='navtext'>SIGNIN/SIGNUP</div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div >
    </>
  )
}

export default TopNav;