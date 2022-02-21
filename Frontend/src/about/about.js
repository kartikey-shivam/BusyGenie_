import React from "react";
import About_img from "./../images/about.png";
import Genie13 from "./../images/genie13.png";
import Genie11 from "./../images/genie11.png";
import Genie12 from "./../images/genie12.png";

const About = () => {
  return (
    <div className="about">
      {/* <img src={About_img} alt="" className="about_img" /> */}
      <h2 className="about_heading">About</h2>
      <div className="about_con">
        <div className="about_con-info">
          <div className="about_con-info_img">
            <img src={Genie13} alt="" className="about_con-info_img-1" />
          </div>
          <p className="about_con-info_p">
            "The primary goal of BusyGenie is to keep track of your priorities
            so that you don't forget anything and can efficiently plan out your
            tasks so that they are all completed in the allotted time. A
            well-maintained to-do list will put your mind at ease because you'll
            always know what you need to accomplish. Work becomes a lot more
            visible when it's all in one place. To stay on track, break down
            activities into basic sections, assign due dates, and add reminders
            to your daily checklist."
          </p>
        </div>
        <div className="about_con-info">
          <div className="about_con-info_img">
            <img src={Genie11} alt="" className="about_con-info_img-1" />
          </div>
          <p className="about_con-info_p">
            "Let us handle the tasks you despise. Don't squander time on
            time-consuming manual procedures. Allow Automation to take care of
            it. Simplify workflows, cut down on errors, and save time. Nail your
            timing by viewing work on a calendar. Easily spot holes and overlaps
            in your schedule and quickly make adjustments. For starters, there's
            a Pomodoro timer built in, which allows you to set your work session
            for any of your activities . Second, it integrates with a variety of
            third-party calendars, allowing you to see all of your chores and
            appointments in one location, as well as time block."
          </p>
        </div>
        <div className="about_con-info">
          <div className="about_con-info_img">
            <img src={Genie12} alt="" className="about_con-info_img-1" />
          </div>
          <p className="about_con-info_p">
            "We also offers a few features that are above and beyond what other
            apps offer. Make it fast to add and organize tasks. Ideally, a task
            is added and categorized in a couple taps or keystrokes. Offer clean
            user interfaces. Well-designed to-do apps fit into your workflow so
            you can get back to what you're supposed to be doing. Focus on what
            matters now Your to-do list keeps track of your priorities and shows
            you the best task to focus on next. "
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
