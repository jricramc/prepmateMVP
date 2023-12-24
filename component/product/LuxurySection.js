import React, { useState } from 'react'
import { Nav, Tab } from 'react-bootstrap'
import NewTabContent from './NewTabContent';
import BestSellerTabContent from './BestSellerTabContent';

const LuxurySection = () => {
    const [activeTab, setActiveTab] = useState('best-seller');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
  return (
    <section className="fz-luxury-section">
        <div className="container">
            <div className="fz-2-section-heading">
                <div className="row gy-4 align-items-center justify-content-between">
                    <div className="col-md-6">
                        <h2 className="fz-section-title">Most Luxury Jewelry</h2>
                    </div>
                    <div className="col-md-6">
                        <Nav 
                        activeKey={activeTab}
                        onSelect={handleTabChange}
                        className="luxury-nav justify-content-center justify-content-md-end fz-section-heading-nav" 
                        >
                            <Nav.Item className="fz-nav-item">
                                <Nav.Link role='button' eventKey='best-seller'>
                                    Best sellers
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="fz-nav-item">
                                <Nav.Link role='button' eventKey='new'>
                                    New arrivals
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </div>

            <Tab.Content>
                <Tab.Pane eventKey='best-seller' className={`tab-pane ${activeTab === 'best-seller' ? 'show active' : ''}`}>
                    <BestSellerTabContent/>
                </Tab.Pane>

                <Tab.Pane eventKey='new' className={`tab-pane ${activeTab === 'new' ? 'show active' : ''}`}>
                    <NewTabContent/>
                </Tab.Pane>
            </Tab.Content>
        </div>
    </section>
  )
}

export default LuxurySection