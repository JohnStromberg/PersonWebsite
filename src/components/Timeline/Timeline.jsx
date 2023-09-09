import "./timeline.css";
import React, {useContext} from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {AiFillLinkedin} from "react-icons/ai"
import {FaBirthdayCake, FaGraduationCap, FaChalkboardTeacher} from "react-icons/fa"
import {MdFastfood} from "react-icons/md"

function Timeline() {
    return (
        <div className="tl">
            <hr className="tl-div"/>
            <h1>Education and Work History</h1>
        <VerticalTimeline lineColor="#0077b6">
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'aliceblue', color: '#0' }}
                contentArrowStyle={{ borderRight: '7px solid  #f0f8ff' }}
                date="2003"
                iconStyle={{ background: '#0077b6', color: '#fff' }}
                icon={<FaBirthdayCake />}
            >
                <h3 className="vertical-timeline-element-title">I was Born</h3>
                <h4 className="vertical-timeline-element-subtitle">Fridley, MN</h4>
                <p>
                    I was brought into this world
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018-2023"
                contentStyle={{ background: 'aliceblue', color: '#0' }}
                contentArrowStyle={{ borderRight: '7px solid  #f0f8ff' }}
                iconStyle={{ background: '#0077b6', color: '#fff' }}
                icon={<MdFastfood />}
            >
                <h3 className="vertical-timeline-element-title">Various Retail Jobs</h3>
                <h4 className="vertical-timeline-element-subtitle">St. Paul, MN</h4>
                <p>
                    Various different retail and non retail jobs around the Twin Cities.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2021"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                contentStyle={{ background: 'aliceblue', color: '#0' }}
                contentArrowStyle={{ borderRight: '7px solid  #f0f8ff' }}
                icon={<FaGraduationCap />}
            >
                <h3 className="vertical-timeline-element-title">Graduated High School</h3>
                <h4 className="vertical-timeline-element-subtitle">Irondale High School</h4>
                <p>
                    Graduated high school with highest honors and 36 college credits.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Fall 2022 - Present"
                iconStyle={{ background: '#0077b6', color: '#fff' }}
                contentStyle={{ background: 'aliceblue', color: '#0' }}
                contentArrowStyle={{ borderRight: '7px solid  #f0f8ff' }}
                icon={<FaChalkboardTeacher />}
            >
                <h3 className="vertical-timeline-element-title">Tutor</h3>
                <h4 className="vertical-timeline-element-subtitle">Bethel University</h4>
                <p>
                    Tutored all of the 100 and 200 level computer science classes at Bethel Unviersity.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="December 2024"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                contentStyle={{ background: 'aliceblue', color: '#0' }}
                contentArrowStyle={{ borderRight: '7px solid  #f0f8ff' }}
                icon={<FaGraduationCap />}
            >
                <h3 className="vertical-timeline-element-title">Graduating College</h3>
                <h4 className="vertical-timeline-element-subtitle">Bethel University</h4>
                <p>
                    Expected to graduate with a computer science degree.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
    )
}

export default Timeline;