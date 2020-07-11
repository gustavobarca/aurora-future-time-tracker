import React, { useState } from 'react';
import './styles.css';
import TitleBar from '../../components/TitleBar';
import NavBar from '../../components/NavBar';
import Screen from '../../components/Screen';
import Layout from '../../components/Layout';
import MyAccount from '../MyAccount';
import ScrollContainer from 'react-indiana-drag-scroll';

export default function Settings () {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
  { name: 'Account' },
  { name: 'Appearence' },
  ];

  return(    
    <Screen>  
      <Layout>        
        <div className="background">
          <TitleBar />               
          <NavBar
            tabs={tabs}
            activeTab={activeTab}
            onChange={index => setActiveTab(index)}
          />               
          <MyAccount/> 
        </div>                            
      </Layout>      
    </Screen>
  )
}