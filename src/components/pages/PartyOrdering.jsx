import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { GiShoppingBag } from 'react-icons/gi';
import AOS from 'aos';
import "aos/dist/aos.css";

const PartyOrdering = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    })


    return (
        <>
            <div className='partyOrdering'>
                <div className='partyOrdering_banner'>
                    <Container>
                        <center>
                            <div data-aos="fade-right" className='anime_head'>Party Ordering!!</div>
                            <div data-aos="fade-left" className='anime_quotes'>We are waiting for your orders!!</div>
                            <button data-aos="fade-right" className='anime_ordernow_btn'><GiShoppingBag style={{ marginRight: '5px', position: 'relative', bottom: '3', color: '#923b1f', fontSize: '20px' }} />Order Now</button>
                        </center>
                    </Container>
                </div>
                <div className='container'>
                    <div className='partyOrdering_container'>
                        <div className='partyOrdering_detail_container'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A et impedit, incidunt iure quibusdam debitis assumenda reiciendis blanditiis vel sint omnis pariatur cumque, soluta ipsa illum in cum! Ipsum, officiis.

                        </div>
                        <div className='partyOrdering_form_container container'>
                            <form className='partyOrdering_form'>
                                <label className='contact_name_label'>
                                    Contact Name:
                                </label>
                                <input className='contact_name_input' placeholder='Enter a Contact Name' type='text' />
                                <label className='address_label'>
                                    Address for Delivery:
                                </label>
                                <input className='address_input' placeholder='Enter your Address' type='text' />
                                <label className='mobile_label'>
                                    Mobile No:
                                </label>
                                <input className='mobile_input' placeholder='Enter a Mobile Number' type='text' />
                                <label className='email_label'>
                                    Email Id:
                                </label>
                                <input className='email_input' placeholder='Enter a Email' type='text' />
                                <div className='no_of_people_container'>
                                    <label className='no_of_people_label'>
                                        No of People:
                                    </label>
                                    <input className='no_of_people_input' placeholder='Select No of People' type='text' />
                                </div>
                                <div className='d_o_e_container'>
                                    <label className='d_o_e_label'>
                                        Date of Event:
                                    </label>
                                    <input className='d_o_e_input' placeholder='Select Date of Event' type='text' />
                                </div>
                                <div className='t_o_e_container'>
                                    <label className='t_o_e_label'>
                                        Time of Event:
                                    </label>
                                    <input className='t_o_e_input' placeholder='Select Time of Event' type='text' />
                                </div>
                                <div className='budget_container'>
                                    <label className='budget_label'>
                                        Budget per Head:
                                    </label>
                                    <input className='budget_input' placeholder='Select Budget per head' type='text' />
                                </div>
                                <label className='service_label'>
                                    How did you come to know about our party order service?
                                </label>
                                <input className='service_input' placeholder='Enter...' type='text' />
                                <button className='submit_btn_po'>Submit Form</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartyOrdering;