import './Filter.css';
const Filter = () => {
  const details = [
    { id: 1, src: "https://www.fintechfutures.com/files/2020/02/State-Bank-of-India-Logo-2.png", 
      title: "State Bank of India (SBI)", },
      { id: 2, src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/u/k/m/small-spos8969-poster-bjp-logo-bhartiya-janta-party-sl-9477-wall-original-imaghs5nxqb3jkpf.jpeg?q=20&crop=false",
        title: "Bharatiya Janta Party", },
      
    { id: 3, src: "https://static.vecteezy.com/system/resources/previews/000/302/562/original/healthy-lifestyle-vector-illustration.jpg", 
     title: 'Healthy living' },
    { id: 4, src: "https://egwtgphxxkn.exactdn.com/wp-content/uploads/2022/02/best-career-advice-The-Mason-Group.jpg",
    title: 'Career Advice', }, 
   { id: 5, src: "https://th.bing.com/th/id/OIP.QdIrCNdF2ZVylABjjes1LAHaGq?rs=1&pid=ImgDetMain", 
    title: "React Community", },
  ];

  const handleClick = (id) => {
    console.log(`Space clicked: ${id}`);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6 md:p- lg:p-9" >
        <button className="w-full bg-gray-200 text-gray-500 py-2 px-4 rounded hover:bg-gray-300 z-0">+ Create Space</button>
        <div className="mt-5 space-y-3 md:space-y-4 lg:space-y-5">
          {details.map((detail) => (
            <div key={(detail.id)} className="flex items-center cursor-pointer hover:bg-gray-300 p-2 rounded-lg" onClick={() => handleClick((detail.id))}>
              <img src={detail.src} alt="Detail" style={{ width: '30px',height: '30px'}} className="rounded-sm" />
              <h1 className="ml-3 text-gray-500 text-xs md:text-sm">{detail.title}</h1>
            </div>
          ))}
        </div>
        <hr className="mt-5" />
        <div className="mt-5 text-xs md:text-sm text-gray-400">
          <h3>About . Careers.</h3>
          <h3>Terms . Policies.</h3>
          <h3>Acceptable use.</h3>
          <h3> Advertise . Press .</h3>
          <h3> Your Add Choises .</h3>
          <h3> Grievance Officer </h3>
        </div>
      </div>
    </div>
  );
};

export default Filter;