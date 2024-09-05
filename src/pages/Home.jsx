import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighLightText from "../components/cors/HomePage/HighLightText";
import CTAButton from "../components/cors/HomePage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/cors/HomePage/CodeBlocks";
import TimeLineSection from "../components/cors/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/cors/HomePage/LearningLanguageSection";
import InstructorSection from "../components/cors/HomePage/InstructorSection";
import ExploreMore from "../components/cors/HomePage/ExploreMore";
import Footer from "../components/common/Footer";
import ReviewSlider from "../components/common/ReviewSlider";

const Home = () => {
  return (
    <div>
      {/* section 1  */}
      <div className="relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent">
        <Link to={"/signup"}>
          {/* add shadow  */}
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95   ">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 ">
              <p>Become an Instructor </p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future with
          <HighLightText text={"Coding Skills"} />
        </div>

        <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300 ">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8 ">
          <CTAButton linkto={"/signup"} active={true}>
            Learn More
          </CTAButton>

          <CTAButton linkto={"/login"} active={false}>
            Book A Demo
          </CTAButton>
        </div>

        <div className="shadow-blue-200 mx-3 my-14 h-[100%] w-[100%] relative">
          <video muted loop autoPlay className="relative z-10 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
            <source src={Banner} type="video/mp4"></source>
          </video>
          <div className="h-[100%] w-[100%] bg-white absolute top-3 left-3"></div>
        </div>

        {/* code section 1 */}
        <div className="relative">
          <div className="absolute"></div>
          <CodeBlocks
            position={"lg:flex-row flex flex-col"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your <HighLightText text={"coding potential"} /> with our
                online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you"
            }
            ctabtn1={{
              btntext: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btntext: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* code section 2  */}
        <div className="relative">
          <div className="absolute"></div>
          <CodeBlocks
            position={"lg:flex-row-reverse flex flex-col"}
            heading={
              <div className="text-4xl font-semibold">
                Start <HighLightText text={`coding `} />
                <br /> <HighLightText text={` in seconds`} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btntext: "try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btntext: "Learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n/nav>`}
            codeColor={"text-richblack-100"}
          />
        </div>
        <ExploreMore/>
      </div>

      {/* section 2  */}

      <div className="bg-pure-greys-5 text-richblack-700 ">
        <div className="homepage_bg h-[310px] ">
            <div className="w-11/12 max-w-maxContent flex flex-col items-center gap-5 justify-center mx-auto">
                <div className="h-[150px]"></div>
                <div className="flex gap-7 text-white ">
                    <CTAButton active={true} linkto={"/signup"}> 
                        <div className="flex items-center gap-3" >
                            Explore Full Catalog 
                            <FaArrowRight/>
                        </div>
                    </CTAButton>

                    <CTAButton active={false} linkto={"/signup"}> 
                        <div className="flex items-center gap-3" >
                            Learn More 
                        </div>
                    </CTAButton>
                </div>
            </div>
        </div>


        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5">

            <div className="flex flex-row gap-14 mt-[95px] mb-10">
                <div className="text-4xl font-semibold w-[45%]">Get the skills you need for a <HighLightText text={"Job that is in demand"}/></div>

                <div className="flex flex-col gap-10 w-[40%] items-start ">
                <div className="text-[16px]">
                    The modern StudyNotion is the dictates its own terms.Today, to be a competitive specialist requires more than professional skills.
                </div>
                <CTAButton active={true} linkto={"/signup"}>
                    <div>
                        Learn More
                    </div>
                </CTAButton>
            </div>
            </div>

            
            <TimeLineSection/>

            <LearningLanguageSection/>


        </div>


      </div>

      {/* section 3  */}
        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8 bg-richblack-900 text-white ">

            <InstructorSection/>

            <h2 className="text-center text-4xl font-semibold mt-10 mb-10">Review From Other Learners</h2>

            {/* review slider  */}
            <ReviewSlider/>
        </div>
      {/* footer  */}
      <Footer/>
    </div>
  );
};

export default Home;
