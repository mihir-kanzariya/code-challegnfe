import * as React from "react";
import Navbar from "Components/Common/Navbar";
// Styles
import { Wrapper, Container } from "./style";
// Images
import PaperImage from "Assets/Images/paper.png";
import PlaneImage from "Assets/Images/plane.svg";
import ReferImage from "Assets/Images/refer-earn.png";
// Form Library
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  name: string;
  phNumber : string;
  gender : string;
  address : string;
  other : string
};

function Home() {
  const { register, setValue, handleSubmit, errors } = useForm<FormData>();

  const onSubmit = handleSubmit(({ email, name, phNumber, gender, address, other }) => {
    console.log(email, name, phNumber);
    return email;
  }); // firstName and lastName will have correct type

  return (
    <Wrapper>
      <Navbar />
      <Container>
        <section className="home__top--section">
          <div className="home__section--greetings">
            <h3>
              Hello <span className="home__section--name">Jimmy,</span>
            </h3>
          </div>
          <div className="home__section--title">
            What do you want to do today?
          </div>
        </section>
        <section className="home__bottom--section">
          {/* Card Steps */}
          <div className="home__section--cards">
            <div className="home__cards--items">
              <img src={PaperImage} alt="paper" />
              <div className="home__cards--information">
                <span className="home__cards--title">Fill up the form</span>
                <span className="home__cards--description">
                  Fill in your basic information to join the Gym Club.
                </span>
              </div>
            </div>
            <div className="home__cards--items">
              <img src={PaperImage} alt="paper" />
              <div className="home__cards--information">
                <span className="home__cards--title">
                  Find your perfect gym
                </span>
                <span className="home__cards--description">
                  Easily find your perfect gym club and join the club instantly.
                </span>
              </div>
            </div>
            <div className="home__cards--items">
              <img src={PaperImage} alt="paper" />
              <div className="home__cards--information">
                <span className="home__cards--title">Track your progress</span>
                <span className="home__cards--description">
                  Analyze and plan for your tasks and progress.
                </span>
              </div>
            </div>
          </div>
          {/* Tour Packages */}
          <div className="home__section--title">
            <h3>Recommended Tour Packages</h3>
          </div>
          <div className="home__section--description">
            These recommendations are based on your profile information
          </div>
          <div className="home__packages--cards">
            {/* Item 1 */}
            <div className="home__packages--items">
              <img src={PlaneImage} alt="paper" />
              <div className="home__packages--information">
                <span className="home__packages--title">Pilates</span>
                <span className="home__packages--description">
                  Developed first by Joseph Pilates, after whom the technique is
                  name…
                </span>
              </div>
              <div className="home__packages--prices">
                <div className="home__packages--title">Estimated Price</div>
                <div className="home__packages--amt">$ 4,220/6 mo.</div>
              </div>
              <div className="home__packages--order">
                <button className="active">Order now</button>
              </div>
            </div>
            {/* Item 2 */}
            <div className="home__packages--items">
              <img src={PlaneImage} alt="paper" />
              <div className="home__packages--information">
                <span className="home__packages--title">Pilates</span>
                <span className="home__packages--description">
                  Developed first by Joseph Pilates, after whom the technique is
                  name…
                </span>
              </div>
              <div className="home__packages--prices">
                <div className="home__packages--title">Estimated Price</div>
                <div className="home__packages--amt">$ 4,220/6 mo.</div>
              </div>
              <div className="home__packages--order">
                <button>Order now</button>
              </div>
            </div>
            {/* Item 3 */}
            <div className="home__packages--items">
              <img src={PlaneImage} alt="paper" />
              <div className="home__packages--information">
                <span className="home__packages--title">Pilates</span>
                <span className="home__packages--description">
                  Developed first by Joseph Pilates, after whom the technique is
                  name…
                </span>
              </div>
              <div className="home__packages--prices">
                <div className="home__packages--title">Estimated Price</div>
                <div className="home__packages--amt">$ 4,220/6 mo.</div>
              </div>
              <div className="home__packages--order">
                <button>Order now</button>
              </div>
            </div>
          </div>
          {/* Refer & Eard Form */}
          <div className="home__refer--wrapper">
            <h3 className="home__refer--title">Refer and Earn</h3>
            <div className="home__refer--description">
              Add your refferel and earn 5$ after they sign up.
            </div>
            <div className="home__refer--information">
              <h4>Basic Information</h4>
              <div className="home__referform--wrapper">
                <form className="home__refer--form" onSubmit={onSubmit}>
                  <div className="column">
                  <div className="home__refer--formitem">
                  <input
                      placeholder="Name"
                      name="name"
                      ref={register({ required: true })}
                    />
                    {errors.name && (
                      <div className="validation__error--msg">
                        Name required.
                      </div>
                    )}
                    </div>
                    <div className="home__refer--formitem">
                    <input
                      placeholder="Email"
                      name="email"
                      ref={register({ required: true })}
                    />
                    {errors.email && (
                      <div className="validation__error--msg">
                        Email required.
                      </div>
                    )}                    
                    </div>
                  </div>
                  <div className="column">
                  <div className="home__refer--formitem">

                  <input
                      placeholder="Phone Number"
                      name="phNumber"
                      ref={register({ required: true })}
                    />
                    {errors.phNumber && (
                      <div className="validation__error--msg">
                        Phone number required.
                      </div>
                    )}
                  </div>
                  <div className="home__refer--formitem">

                    <input
                      placeholder="Gender"
                      name="gender"
                      ref={register({ required: true })}
                    />
                    {errors.gender && (
                      <div className="validation__error--msg">
                        Gender required.
                      </div>
                    )}  
                  </div>
                  </div>
                  <div className="column">
                    <div className="home__refer--formitem">
                    <input
                      placeholder="Address"
                      name="address"
                      ref={register({ required: true })}
                    />
                    {errors.address && (
                      <div className="validation__error--msg">
                        Address required.
                      </div>
                    )}  
                    </div>
                    <div className="home__refer--formitem">

                     <input
                      placeholder="Apt/Suite/Other"
                      name="other"
                      ref={register({ required: true })}
                    />
                    {errors.other && (
                      <div className="validation__error--msg">
                        Apt/Suite/Other required.
                      </div>
                    )}  
                    </div>
                  </div>
                  <hr />
                  <div className="home__refer--footer">
                    <p>Lorem Ipsum dolor sit amet & Lorem Ipsum</p>
                    <button type="submit">Refer</button>
                  </div>
                </form>
                <div className="home__refer--box">
                  <img src={ReferImage} alt="refer and earn" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Wrapper>
  );
}

export default Home;
