import React, { useState } from 'react';
import teaVarieties from '../../../data/tea_varieties/teaVarieties';
import teaVarietiesInfo from '../../../data/tea_varieties/teaVarietiesInfo';

const TeaVarieties = () => {
  const [hoverFlip, setHoverFlip] = useState(null);
  const [teaInfoFlip, setTeaInfoFlip] = useState(null);

  const handleFlip = (id, index) => {
    setHoverFlip(index);
    let teaFlip = teaVarietiesInfo.find(item => {
      return item._id === id
    })
    setTeaInfoFlip(teaFlip);
  };

  return (
    <div className='teaVarieties'>
      <div className='container-fluid'>
        <div className='teaVarieties_container'>
          {teaVarieties?.map((teaVariety, index) => {

            let teaVarietyHide = teaVarietiesInfo.find(item => {
              return item._id ===  teaVariety._id;
            })

            console.log(teaVarietyHide);

            if (teaVarietyHide) {
              return null;
            }

            return (
              <>
                <div
                  className='teaVariety_container'
                  onMouseOver={() => handleFlip(teaVariety._id, index)}
                >
                  <div className='teaVariety_img'>
                    <img src={teaVariety.teaImg} alt={teaVariety.teaName} className='teaVariety_img_src' />
                  </div>
                  <div className='teaVariety_name'>
                    <center className='teaVariety_name_src' style={{ color: `${teaVariety.teaColor}` }}>
                      {teaVariety.teaName}
                    </center>
                  </div>
                </div>
              </>
            )
          })}
          <div
            className='onFlip'
          >
            {teaInfoFlip?.teaInfo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeaVarieties;