import HomepageCard from "./HomepageCard";

function CoursesCardList() {
  return (
    <div className="courses-card-list">
        <div>
            <h2 className="text-3xl font-semibold mt-4 m-6 lg:m-5">Popular Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-6 lg:m-5">
            <HomepageCard   imageUrl="https://infycletechnologies.com/wp-content/uploads/2023/07/Python-Data-Science.webp" title="Python for Data Science" subtitle="learn real world applications of python" price="1999" />        
            <HomepageCard   imageUrl="https://i.ytimg.com/vi/nH9E25nkk3I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCl3sb_TWHpMQQpW-JyNozE6S5pAQ" title="Node.js & Express API Mastery" subtitle="Master Node.JS & Express and write production grade APIs" price="2299" />
            <HomepageCard   imageUrl="https://i.ibb.co/QgLmvtH/3ddd43ff9ba0.jpg" title="JS to TS" subtitle="This Course will help you to switch to TypeScript" price="799" />
        </div>
    </div>
  );
}

export default CoursesCardList;