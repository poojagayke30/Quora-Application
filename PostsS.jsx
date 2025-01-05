import  { useState } from "react";
import Avatar from "react-avatar";
import close from "../assets/close.png";
import share from "../assets/share.png";
import comment from "../assets/comment.png";
import './PostS.css'
const PostSection = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Posted by Proxagonist.",
      profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsi1EX1DP2glhnE50wuHgb8oZvV9jJvja2A&s", 
      title: "Data science is important for several key reasons:",
      content: 
      <div> 
        1.Informed Decision-Making: Data science enables organizations to make better decisions based on data analysis rather than intuition. By analyzing trends and patterns, businesses can identify opportunities and mitigate risks.<br />
        2.Predictive Analytics: Through techniques such as machine learning and statistical modeling, data science allows businesses to predict future outcomes. This is crucial for areas like sales forecasting, customer behavior prediction, and risk assessment.
        <br />
         3.Efficiency and Optimization: Data science helps organizations optimize their operations by identifying inefficiencies and suggesting improvements. This can lead to cost savings and enhanced productivity.
         <br/> 
         4.Personalization: In sectors like marketing and e-commerce, data science is used to analyze customer behavior and preferences, enabling personalized experiences that can increase customer satisfaction and loyalty. 
         <br /> 
         5.Innovation: Data science fosters innovation by uncovering new insights and opportunities. It can lead to the development of new products, services, or business models based on data-driven insights.
         <br />
          6.Competitive Advantage: Organizations that effectively leverage data science can gain a significant edge over competitors by being more responsive to market changes and customer needs.
          <br/> 
          7.Interdisciplinary Applications: Data science applies to various fields, including healthcare, finance, marketing, and social sciences, making it a versatile tool for solving complex problems across different domains.
          <br /> 
          8.Big Data Management: With the exponential growth of data, data science provides the tools and methodologies to process and analyze large datasets, transforming raw data into actionable insights.
          <br />
          In summary, data science is essential for harnessing the power of data to drive strategic initiatives, improve operational efficiency, and foster innovation across various sectors.
          </div>,
      upvotes: 3100,
      downvotes: 31,
      comments: 30,
      shares: 14,
      Qualifications: "Lives in Rural England",
      timeAgo: "5d",
      image:
        "https://www.analytixlabs.co.in/blog/wp-content/uploads/2021/01/image-2-2-1024x597.png" ,
        
       },
      {
      id: 2,
      name: "Dr. Balaji Viswanathan",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHsi1EX1DP2glhnE50wuHgb8oZvV9jJvja2A&s", 
      title: " What are real-life examples of the application of big data analytics?",
      content:
      <div>
      There are 1000s of applications. I will only mention those I’m personally aware.
      <br />
      1. A cousin of mine worked for a startup that analyzed weather data and soil data from satellites to notify farmers to plant the right seed at the right time.
      <br />
      2. I ran a startup to mine Twitter sentiments to identify the weighted value of people’s sentiments and who are the opinion leader in particular stocks.
      <br />
      3. In my current startup, we run a side project to identify demographic of the person walking in to a store and provide recommendations for that.
      <br />
      4. A friend of mine runs a startup to identify how you drive your rental car [how many times you brake, how fast you drive etc] and use that to increase/decrease rates next time you rent a car.
    </div>,       
      upvotes: 1200,
      downvotes: 52,
      comments: 451,
      shares: 897,
      Qualifications: "Ran a Big Data Startup.",
      timeAgo: "7y",
    },
    {
      id: 3,
      name: "Amazon Web Services (AWS)",
      profileImage:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/aws-icon.png",
      title: "Build Free Websites and Web Apps on AWS",
      content: "You can use whatever CMS you like, including WordPress, Drupal, and more. Get started for free.",
      upvotes: 4512,
      downvotes: 21,
      comments: 4541,
      shares: 1213,
      Qualifications: `Sponsored `,
      timeAgo: "Jan 30",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqwYeHFr10jb0QHqdbVoKkF0fCe_NTIKLkw&s",
    },
    {
      id: 4,
      name: "Robert Outsourcing Services",
      profileImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHQk21cVT4E8J4sVWQfTEIFfk79pYl9oD2sA&s", 
          title: " What are real-life examples of the application of big data analytics?",
      content:
      <div>
       <h3>Few tips as per my own experience when i faced while starting my call center business..</h3>
         <br/>
        1.Do not plan for low budget ideas. Internet is full of fake ideas in name of call center projects to loot new comers. You need minimum 15 to 20 Lakh INR budget to purchase only resources from market, to operate any genuine outbound project for clients requirements.
         <br/> 
         2.Do not plan for any kind of inbound, customer care, support, email, chat support, non voice projects , per seat fix income plans. All scams in those .Scammers too have GST , company registration , website, and lots of social media pages. This is not valid method to justify whether person is genuine or not. All scammers are well prepared with these things.
         </div>,
      upvotes: 448,
      downvotes: 24,
      comments: 452,
      shares: 2433,
      Qualifications: "Director Owner at Mohitguptainvestments (2022–present)",
      timeAgo: "Feb 22",
      image:
        "https://5.imimg.com/data5/PA/WH/YD/SELLER-1066161/corporate-services-500x500.png", 
    },
    {
      id: 4,
      name: "Perdeep Kumar",
      profileImage:
        "https://media.istockphoto.com/id/1443409611/photo/man-on-stone-on-the-hill-and-beautiful-mountains-in-haze-at-colorful-sunset-in-autumn.jpg?s=612x612&w=0&k=20&c=dcyDpPqlhCWMZYgqgHSrJZdoaH_ARrlgkpUcARp1_GU=",
      title:
        "How is Chandigarh University's CSE better than other private universities in India?",
      content:
        "This is really an interesting question. I will tell you this after introducing myself first. Last year, I was searching for Computer Science Engineering. And my research came to an end at Chandigarh University. There are not one but numerous reasons for pursuing Computer Science Engineering at Chandigarh University. I have been studying in CU since last year and my experience has been going really well.",
      upvotes: 448,
      downvotes: 24,
      comments: 452,
      shares: 2433,
      Qualifications: "Ph.D. in Management & Marketing",
      timeAgo: "Feb 22",
      image:
        "https://images.collegedunia.com/public/college_data/images/og_images/news/1689860121-CU.jpeg", 
    },
  ]);
  const handleUpvote = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              upvotes: post.upvoted ? post.upvotes - 1 : post.upvotes + 1,
              upvoted: !post.upvoted,
            }
          : post
      )
    );
  };

  const handleDownvote = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              downvotes: post.downvoted ? post.downvotes - 1 : post.downvotes + 1,
              downvoted: !post.downvoted,
            }
          : post
      )
    );
  };

  return (
    <div className="bg-gray-100 p-4 h-auto border-spacing-1 rounded-lg text-gray-600 text-sm z-0">
      {posts.map((post) => (
        <div
          key={post.id}
          className="card bg-white p-4 mb-3 border rounded-lg shadow-lg"
        >
          {/* Profile and Header */}
          <div className="relative flex items-center">
  <div className="flex items-center">
    <Avatar round size="40" src={post.profileImage} />
    <div className="ml-3">
      <h1 className="font-semibold text-sm">{post.name}</h1>
      <div className="text-xs text-gray-500 mt-1">
        {post.qualifications} · {post.timeAgo}
      </div>
    </div>
  </div>

  {/* Follow Button and Close Button */}
  <div className="relative ml-auto">
    {/* Close Button */}
    <button
      className="absolute top-0 right-0"
      style={{ width: "20px", height: "20px", background: "none", border: "none" }}
    >
      <img src={close} alt="Close" style={{ width: "20px", height: "20px" }} />
    </button>

    {/* Follow Button */}
    <button
      className=" text-sm"
      style={{
        display: "block",
        margin: "auto",
        color: "blue",
        border: "none",
      }}
    >
      Follow
    </button>
  </div>
</div>
   {/* Title and Content */}
          <h1 className="text-md font-bold mt-3">{post.title}</h1>
          <div className="text-sm mt-2 leading-6">{post.content}</div>
          {post.image && (
            <img
              src={post.image}
              alt="Post"
              className="mt-3 w-full h-auto rounded-lg"
            />
          )}

          {/* Footer (Actions) */}
          <div className="flex items-center text-gray-600 mt-3">
            <button
              onClick={() => handleUpvote(post.id)}
              className="flex items-center mr-4"
            >
              <span className="mr-1">
                {post.upvoted ? "▲" : "△"}
              </span>
              <span className={post.upvoted ? "text-blue-500" : "text-gray-500"}>
                {post.upvotes.toLocaleString()}
              </span>
            </button>
            <button
              onClick={() => handleDownvote(post.id)}
              className="flex items-center mr-4"
            >
              <span className="mr-1">
                {post.downvoted ? "▼" : "▽"}
              </span>
              <span className={post.downvoted ? "text-red-500" : "text-gray-500"}>
                {post.downvotes.toLocaleString()}
              </span>
            </button>
            <button className="flex items-center mr-4">
              <img src={comment} alt="Comment" className="h-5 w-5" />
              <span className="ml-1">{post.comments.toLocaleString()}</span>
            </button>
            <button className="flex items-center">
              <img src={share} alt="Share" className="h-5 w-5" />
              <span className="ml-1">{post.shares.toLocaleString()}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostSection;