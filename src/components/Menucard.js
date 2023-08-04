import "../style/style.css";
const Menucard=({menuData})=>{
    return<>
      <section className="main-card--cointainer">
       {menuData.map((element)=>{
        const{id, name,category,description,image}=element;
          return<>
            <div className="card-container" 
        // key={id}
        >
                <div className="card " key={id}>
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title">{name.substring(0,10)}</h2>
                    <span className="card-description subtle">{description}</span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" width="100%" />
                  <span className="card-tag  subtle">Order Now</span>
                </div>
              </div>
          </>
       })}

    </section>    
    </>
}
export default Menucard;