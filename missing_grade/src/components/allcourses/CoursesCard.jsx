import React from 'react'

const CoursesCard = () => {
  return (
    <>
    <section className="courseCard">
      <div className="container grid2">
        {CoursesCard.map((val) => {
          return(
          <div className="items">
            <div className="content flex">
              <div className="left">
                <div className="img">
                  <img src="{val.cover}" alt="" />
                </div>
              </div>
              <div className="text">
                <h1>{val.courseName}</h1>
                <div className="rate">
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <label htmlFor="">(5.0)</label>
                </div>
                <div className="details">
                  {(val.courTeacher.map((details) => (
                    <>
                    <div className="box">
                      <div className="dimg">
                        <img src={details.cover} alt="" />
                      </div>
                      <div className="para">
                        <h4>{details.name}</h4>
                      </div>
                    </div>
                    <span>{details.totalTime}</span>
                    </>
                  )))}
                </div>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </section>
    </>
  )
}

export default CoursesCard