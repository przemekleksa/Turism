import React from 'react';
import './specs.scss';
import animal from './animal.jpg';
import top from './top.jpg';

const Specs = () => {
    return ( 
        <div className="specs">
            <div className="main">
                <h2>Tour du Mont Blanc</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc.
                <br /><br />
                Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida ipsum. Curabitur ut lacus vitae tellus lacinia pretium. Proin vestibulum sollicitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor. Donec blandit nisi ut congue rutrum. Vestibulum enim velit, semper hendrerit tristique non, malesuada auctor nulla.
                </p>
                <div className="pics">
                    <img src={animal} alt="animal" />
                    <img src={top} alt="top" />

                </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimentum egestas, libero dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretium est. Nullam ac justo efficitur, tristique ligula a, pellentesque ipsum. Quisque augue ipsum, vehicula et tellus nec, maximus viverra metus. Nullam elementum nibh nec pellentesque finibus. Suspendisse laoreet velit at eros eleifend, a pellentesque urna ornare. In sed viverra dui. Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit, ex odio volutpat sem, vel molestie ligula enim varius est. Pellentesque sodales ipsum nisi. Suspendisse ultrices nulla eu volutpat volutpat. Nunc vestibulum, tortor sollicitudin dapibus egestas, lorem eros vestibulum turpis, ac condimentum erat ipsum rutrum dolor.
                <br /><br />
                Duis dolor est, tincidunt vel enim sit amet, venenatis euismod neque. Duis eleifend ligula id tortor finibus faucibus. Donec et quam pulvinar, blandit tortor a, sollicitudin mauris. Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortor, vel vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie gravida.
                </p>
                <h2>Good to Know</h2>
                <hr />
                <div className="row">
                    <div className="info">
                    Country
                    </div>
                    <div classname="details">
                    Italy and France
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="info">
                    Country
                    </div>
                    <div classname="details">
                    Italy and France
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="info">
                    Country
                    </div>
                    <div classname="details">
                    Italy and France
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="info">
                    Country
                    </div>
                    <div classname="details">
                    Italy and France
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="info">
                    Country
                    </div>
                    <div classname="details">
                    Italy and France
                    </div>
                </div>
            </div>
            <div className="side">
            
            </div>
        </div>
        
     );
}
 
export default Specs;