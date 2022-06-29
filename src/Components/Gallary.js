import { useState } from "react";

const Gallary=() =>{
    const img1 = "https://i.ytimg.com/vi/ht_XkPS__K8/maxresdefault.jpg";
    const img2 =
      "https://i0.wp.com/ravemotionpictures.com/wp-content/uploads/2022/01/She-Hulk.jpg?fit=2149%2C1200&ssl=1";
    const img3 =
      "https://cdn2.unrealengine.com/fortnite-moon-knight-outfit-and-accessories-1920x1080-e401359b58b8.jpg";
    
      const img4 = "https://i.ytimg.com/vi/uO6Mq2Um8Zc/maxresdefault.jpg";
  const [mainImg , setMainImg]= useState(img1);
      return(
    <div className="container">
<img src={mainImg} className="img-fluid" alt="" />
        <div className="row mt-5">
            <div className="col md-3">
                <img src={img1} className="img-fluid" onMouseEnter={() => setMainImg(img1)}/>
            </div>
            <div className="col md-3">
                <img src={img2} className="img-fluid" onMouseEnter={() => setMainImg(img2)}/>
            </div>
            <div className="col md-3">
                <img src={img3} className="img-fluid" onMouseEnter={() => setMainImg(img3)}/>
            </div>
            <div className="col md-3">
                <img src={img4} className="img-fluid" onMouseEnter={() => setMainImg(img4)}/>
            </div>
        </div>
    </div>
)


};
export default Gallary;