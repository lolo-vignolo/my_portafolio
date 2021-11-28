import React from 'react';
import "./courses.scss";
import {courseHelper} from "../../helpers/coursesHelper";

export const Courses = () => {
    return (
        <div className = "courses" id="testimonio">

            <h1>My studies</h1>
            <div className="container">

                {courseHelper.map(course=>(
                    <div className={course.featured ? "card featured" : "card"}>
                    <div className="top">
                        
                        <img  src= {course.img} className = "user"  alt=""  />
                        

                    </div>
                    <div className="center">
                    <h2>{course.name}  <p>{course.desc}</p></h2>
                    </div>
                    <div className="bottom">
                    <h3>{course.prof}</h3>
                    <h4> Trabajo</h4>

                    </div>
                    
                 </div>
                
                 )  
                )}
                </div>
        </div>
    )
}
