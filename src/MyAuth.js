import React from "react";

class MyAuth extends React.Component {
  state = {
    FirstName: "Nina",
    LastName: "Chekalina",
    adress: "Astrakhan",
    Occupation: "programming",
    Hobby: "walking",
    Dating: "04.07.2022",
    Timing: "20:55",
    isIcon: false
  };
  tooggleImage = () => {
    this.setState((prevImage) => ({
      isIcon: !prevImage.isIcon
    }));
  };

  render() {
    let heartIcon = this.state.isIcon ? "heart1.png" : "sun.png";
    let adress = this.state.isIcon ? "Astrakhan" : "Volgograd";
    let Occupation = this.state.isIcon ? "programming" : "development";
    let Hobby = this.state.isIcon ? "walking" : "swimming";

    return (
      <nav>
        <aside className="card-info">
          <div>
            <div className="card-contact">
              <span>
                {" "}
                Адрес: {adress}
                <img
                  className="card-favorite"
                  src={`./image/${heartIcon}`}
                  onClick={this.tooggleImage}
                  alt=""
                />
              </span>
              <span>
                {" "}
                Деятельность: {Occupation}
                <img
                  className="card-favorite"
                  src={`./image/${heartIcon}`}
                  onClick={this.tooggleImage}
                  alt=""
                />
              </span>
              <span>
                {" "}
                Хобби: {Hobby}
                <img
                  className="card-favorite"
                  src={`./image/${heartIcon}`}
                  onClick={this.tooggleImage}
                  alt=""
                />
              </span>
            </div>

            <p></p>
          </div>
        </aside>
      </nav>
    );
  }
}

export default MyAuth;
