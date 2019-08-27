import React from 'react';

function Tab(props) {
   let className = 'tab-list-item';

   if (props.activeTab === props.label) {
   className = className + ' tab-list-active';
   }

   return (
      <li className={className} onClick={() => props.toggleTab(props.label)}>
         {props.label}
      </li>
   );
}


export default Tab;