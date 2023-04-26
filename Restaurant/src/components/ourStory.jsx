import React, { useRef } from "react";
import food2 from "../images/food2.jpg";
import home from "../styles/home.module.css";
import mainMenu from "../styles/mainMenu.module.css";
import story from "../styles/ourStory.module.css";
import chef from "../images/chef.jpg";
import foodPhilo from "../images/foodPhil.jpg";
import chicken from "../images/chicken.jpg";
import steak from "../images/steak.jpg";
import restaurant from "../images/restaurant.jpg";
import * as yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import location from "../images/map.png";
import phone from "../images/phone-call.png";
import mail from "../images/mail.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import emailjs from "@emailjs/browser";

const OurStory = () => {
  const navigate = useNavigate();

  const handleOptionChange = () => {
    navigate("/menu");
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  var array = [1, 2, 3, 4, 5, 6, 7];
  const form = useRef();

  return (
    <div style={{ minHeight: "400vh" }}>
      <div
        className={mainMenu.containerDiv}
        style={{
          backgroundImage: `url(${food2})`,
          backgroundSize: "cover",
          height: "100vh",
          position: "absolute",
          left: "0px",
          top: "0px",
          minWidth: "100vw",
        }}
      >
        <ul className={home.menuList}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <li>Home</li>
          </Link>
          <li>
            <select>
              <option onClick={handleOptionChange} value="menu">
                Menu
              </option>
              <option>info</option>
            </select>
          </li>
          <li>About</li>
          <li>Contact</li>
          <li>Find a table</li>
        </ul>

        <div className={mainMenu.welcomeAddress}>
          OUR STORY <br />
        </div>

        <div className={story.successMessage}>
          <h6> THE SECRET OF OUR SUCCESS </h6>
          <p>
            A smile warm welcome and a good mean is what you <br /> would expect
            when eating at Chateau Nourriture. We continue <br /> our matriachs
            tradition by welcoming you to our home.
          </p>
          <br />
          <span> Come early and stay late with Chateau Nourriture. </span>

          <div className={home.philosophyContainer}>
            <div>
              <img src={chef} />
              <img src={foodPhilo} />
            </div>
            <div>
              <span style={{ position: "relative", left: "0vw" }}>
                Community & Balance
              </span>
              <br />
              <h1>
                OUR FOOD <br /> PHILOSOPHY
              </h1>
              <br />
              <p>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <br />
              <ol>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </li>
                <li>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </li>
              </ol>
            </div>
          </div>

          <div className={story.interludeImage}>
            <img src={chicken} />
            <img src={steak} />
          </div>

          <div className={story.testimonial}>
            <p>
              <h1> WHAT PEOPLE ARE SAYING </h1>
            </p>

            <p>
              Browse through our testimonial to get a glimpse of what sets apart
              and why our <br /> our customers keep coming back for more!
            </p>
          </div>

          <div className={story.carousel}>
            <Carousel responsive={responsive} className={story.container}>
              <div>
                <article>
                  <p> " " </p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </article>
                <figure
                  style={{
                    backgroundImage: `url(${steak})`,
                    backgroundSize: "contain",
                  }}
                ></figure>
                <section> Mercy </section>
              </div>
              <div>
                <article>
                  {" "}
                  <p> " " </p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.{" "}
                </article>
                <figure
                  style={{
                    backgroundImage: `url(${steak})`,
                    backgroundSize: "contain",
                  }}
                ></figure>
                <section> Miriam </section>
              </div>
              <div>
                {" "}
                <article>
                  {" "}
                  <p> " " </p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.{" "}
                </article>
                <figure
                  style={{
                    backgroundImage: `url(${steak})`,
                    backgroundSize: "contain",
                  }}
                ></figure>
                <section> Mabel </section>
              </div>
              <div>
                {" "}
                <article>
                  {" "}
                  <p> " " </p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.{" "}
                </article>
                <figure
                  style={{
                    backgroundImage: `url(${steak})`,
                    backgroundSize: "contain",
                  }}
                ></figure>
                <section> Maxwell </section>
              </div>
              <div>
                {" "}
                <article>
                  <p> " " </p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.{" "}
                </article>
                <figure
                  style={{
                    backgroundImage: `url(${steak})`,
                    backgroundSize: "contain",
                  }}
                ></figure>
                <section> Michael </section>
              </div>
              <div>
                {" "}
                <article>
                  {" "}
                  <p> " " </p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.{" "}
                </article>
                <figure
                  style={{
                    backgroundImage: `url(${steak})`,
                    backgroundSize: "contain",
                  }}
                ></figure>
                <section> Martin </section>
              </div>
            </Carousel>
          </div>

          <div className={story.findUs}>
            <div>
              <h4>OUR LOCATION </h4> <h1> WHERE TO FIND US </h1>
              <span>
                If you're trying to reach Chateau Nourriture we are always here
                to assist <br /> you with any questions or concerns you may
                have. Whether you're <br /> looking to make a reservation, plan
                an event, or simply want to <br /> share your thoughts on your
                recent dining experience, we are <br /> here to help. <br />
                <br />
              </span>
              <span>
                To get in touvh with us, simply fill out the form on this page
                with <br /> your contact information and a brief description of
                your inquiry. A <br /> member of our team will get back to you
                as soon as possible.
              </span>
            </div>
            <div>
              <img src={restaurant} />
            </div>
          </div>

          <div className={story.contactUs}>
            <div>
              <h4>GET IN TOUCH</h4> <h1> CONTACT US </h1>
              <ul>
                <li> Opening hours : </li>
                <li> Monday : Closed </li>
                <li>
                  {" "}
                  Tuesday - Sunday : 10 AM - 10 PM <br />{" "}
                </li>
                <li> Brunch hours: </li>
                <li> Tuesday - Sunday: 3pm - Closing </li>
                <li> Street </li>
                <li> Phone </li>
                <li> email </li>
              </ul>
            </div>

            <div>
              <Formik
                ref={form}
                initialValues={{
                  Email: "",
                  Name: "",
                  Phone: "",
                  Comments: "",
                }}
                validationSchema={yup.object({
                  Email: yup
                    .string()
                    .email("Invalid email address")
                    .required("email cannot be left blank"),
                  Name: yup.string().required("Name cannot be left blank"),
                  Phone: yup
                    .number("please input numbers only")
                    .required("phone number cannot be blank"),
                })}
                onSubmit={(values, event) => {
                  // alert(JSON.stringify(values));
                  //// DIDNT WORK SENDING EMAIL VIA EMAILJS PACKAGE
                  // emailjs
                  //   .sendForm(
                  //     "service_bv4yvq6",
                  //     "template_4hazy9a",
                  //     form.target,
                  //     "q0A8YiMmT27fE1syl"
                  //   )
                  //   .then(
                  //     (result) => {
                  //       console.log(result.text);
                  //     },
                  //     (error) => {
                  //       console.log(error.text);
                  //     }
                  //   );
                }}
              >
                {(props) => (
                  <div>
                    <Form style={{ height: "90vh" }} className={story.allform}>
                      <h6> Contact Us Form </h6>
                      <ul>
                        <li>
                          <span className={story.emailLabel}> Name </span>
                          <Field
                            className={story.nameField}
                            name="Name"
                            type="text"
                          ></Field>
                          <label className={story.emailError}>
                            <ErrorMessage name="Name"></ErrorMessage>
                          </label>
                        </li>

                        <li>
                          <span className={story.emailLabel}> Email </span>
                          <Field
                            className={story.emailField}
                            name="Email"
                            type="text"
                          ></Field>
                          <label className={story.emailError}>
                            <ErrorMessage name="Email"></ErrorMessage>
                          </label>
                        </li>

                        <li>
                          <span className={story.phoneLabel}> Phone</span>
                          <Field
                            className={story.phoneField}
                            name="Phone"
                            type="telephone"
                            maxLength={15}
                          ></Field>
                          <label className={story.phoneError}>
                            {" "}
                            <ErrorMessage name="Phone"></ErrorMessage>{" "}
                          </label>
                        </li>

                        <li>
                          <span className={story.commentsLabel}>Comments</span>
                          <Field
                            className={story.commentsField}
                            name="Comments"
                            type="text"
                            as="textarea"
                            maxLength={200}
                          ></Field>
                        </li>
                      </ul>
                      <button
                        type="submit"
                        disabled={!props.isValid}
                        className={story.submit}
                      >
                        Submit
                      </button>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>

        <footer style={{ marginTop: "-170vh" }}>
          <img src={logo} />

          <table>
            <thead>
              <tr> WORKING HOURS </tr>
            </thead>
            <tbody>
              <tr>
                <td> Monday </td> <td> Closed </td>
              </tr>
              <tr>
                <td> Tuesday - Sunday </td> <td> 10 AM - 10 PM</td>
              </tr>
              <tr>
                <td> *Brunch Menu </td> <td> 10 AM - 3 PM</td>
              </tr>
            </tbody>
          </table>

          <ul className={story.address}>
            <li> OUR ADDRESS </li>
            <li>
              <img
                src={location}
                style={{ position: "relative", top: "1vh" }}
              />
              Street
            </li>
            <li>
              <img src={phone} style={{ position: "relative", top: "1vh" }} />
              Phone number
            </li>
            <li>
              <img src={mail} style={{ position: "relative", top: "1vh" }} />
              Mail
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default OurStory;
