import React, { useState } from 'react';
import './BoxConverter.css';
import Convert from '../Convert/Convert';
import Send from '../Send/Send';
import Graphics from '../Graphics/Graphics';
import Alerts from '../Alerts/Alerts';
import Tab from '../Tab/Tab';
import Results from '../Results/Results';


const BoxConverter = () => {
  const [ isResult, setIsResult ] = useState(false);

  const isResultFunc = (val) =>{
    setIsResult(val)
  }

  const tabsArray = [
    { title: "Convert", content: <Convert isResultFunc={isResultFunc}/> },
    { title: "Send", content: <Send/> },
    { title: "Graphics", content: <Graphics/> },
    { title: "Alerts", content: <Alerts/> },
  ];

  const [ allTabs, setAllTabs ] = useState(tabsArray);

  const [ currentTabIndex, setCurrentTabIndex ] = useState(0);


  return(
    <div className={isResult === false ?"BoxConverter": "BoxConverter cvrt"}>
       <Tab 
        allTabs={ allTabs } 
        currentTabIndex={ currentTabIndex }
        setCurrentTabIndex={ setCurrentTabIndex } 
      />
      <Results allTabs={ allTabs } currentTabIndex={ currentTabIndex } />
    </div>
  );
};


export default BoxConverter;
