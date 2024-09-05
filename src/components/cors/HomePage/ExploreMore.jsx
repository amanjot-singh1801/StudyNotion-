import React, { useState } from 'react'
import { HomePageExplore } from '../../../data/homepage-explore';
import HighLightText from './HighLightText';
import CourseCard from './CourseCard';

const tabsName = [
   "Free",
   "New to coding",
   "Most popular",
   "Skills paths",
   "Career paths",
];
const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses,setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading)

  const setMyCards = (value)=>{
    setCurrentTab(value);
    const result = HomePageExplore.filter((course)=> course.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
    console.log("Current Card is : ",currentCard);
  }

  return (
    <div className='w-full justify-center mb-56' >
       <div className='text-4xl font-semibold text-center '>
         Unlock the <HighLightText text={"Power of Code"}/>
       </div>

       <p className='text-center text-richblack-300 text-[16px] mt-3'>Learn to biuld anything you can imagine</p>

       <div className=' hidden md:flex  bg-richblack-800 rounded-full px-1 py-1 gap-5 w-max justify-center items-center mx-auto mt-4 shadow-sm shadow-richblack-100'>
         {
            tabsName.map( (Element,index)=>{
                return (
                    <div 
                    className={`text-[16px] flex flex-row items-center ${currentTab === Element ? "bg-richblack-900 text-richblack-5 font-medium" 
                    :"text-richblack-200" } rounded-full tranistion-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`} key={index}
                    onClick={()=> setMyCards(Element)}>
                      {Element}
                    </div>
                )
            })
         }
            


       </div>
       {/* <div className='h-[100px] '></div> */}

       {/* course card  */}
       <div className='md:absolute flex flex-col lg:flex-row md:flex-row gap-10 w-full items-center justify-center mx-auto'  >
         {
            courses.map( (element,index)=>{
                return (
                    <div>
                        <CourseCard
                        key={index}
                        cardData = {element}
                        currentCard = {currentCard}
                        setCurrentCard = {setCurrentCard} 
                        />
                    </div>
                )
            })
         }
       </div>
    
    </div>


  )
}

export default ExploreMore
