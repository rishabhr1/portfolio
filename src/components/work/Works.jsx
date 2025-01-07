import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';

const Works = () => {
  return (

      <div className="work__container container grid">
        {projectsData.map((item) => {
          return <WorkItems item={item} key={item.id} />
        })}
      </div>
  )
}

export default Works