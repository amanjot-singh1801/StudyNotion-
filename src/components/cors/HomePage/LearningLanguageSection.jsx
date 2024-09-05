import React from 'react'
import HighLightText from './HighLightText'
import Know_your_progress from "../../../assets/Images/Know_your_progress.png"

import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from './CTAButton'

const LearningLanguageSection = () => {
  return (
    <div className='mt-[140px] mb-32'>
      <div className='flex flex-col gap-5 '>
        <div className='text-4xl font-semibold text-center'>
            You Swiss knife for <HighLightText text={"learning any language"}/> 
        </div>
        <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className='flex flex-row items-center justify-center mt-5'>
            <img src={Know_your_progress} 
             alt = "KnowYourProgress"
             className='object-contain -mr-32'></img>
            <img src={compare_with_others} 
             alt = "compareWithOthers"
             className='object-contain'></img>
            <img src={plan_your_lesson} 
             alt = "planYouLesson"
             className='object-contain -ml-36'></img>
        </div>

        <div  className='w-fit mx-auto'>
            <CTAButton active={true} linkto={"/signup"}>
                <div>
                    Learn More
                </div>
            </CTAButton>
        </div>
      </div>
    </div>
  )
}

export default LearningLanguageSection
