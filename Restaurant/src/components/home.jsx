import React, { useEffect, useState } from "react";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";
import home from "../styles/home.module.css";
import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";
import logo3 from "../images/logo3.png";
import burger from "../images/burger.jpg";
import steamedFood from "../images/steamedFood.jpg";
import exclusiveFood from "../images/exclusiveFood.jpg";
import { useInView } from "react-intersection-observer";
import wine from "../images/wineCellar.jpg";
import dessert from "../images/dessert2.jpg";
import chef from "../images/chef.jpg";
import foodPhilo from "../images/foodPhil.jpg";
import clock from "../images/clock.jpg";
import bell from "../images/bell.jpg";
import reception from "../images/reception.jpg";
import location from "../images/map.png";
import phone from "../images/phone-call.png";
import mail from "../images/mail.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveReserved } from "../slices/bookingSlice";

const Home = () => {
  const [image, setImage] = useState(food1);
  const [count, setCount] = useState(0);

  const images = [food1, food2, food3];

  // I dont understand this
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  // Code for late loading image on home page
  const [checkTime, setCheckTime] = useState(0);

  const { ref: imageRef, inView: imageView } = useInView({
    threshold: 0.1,
    delay: 500,
  });

  useEffect(() => {
    if (imageView === true) {
      setCheckTime(checkTime + 1);
    }
  }, [imageView]);
  // it ends here

  // Code fo late loading of menu items

  const [menuScroll, setMenuScroll] = useState(0);

  const { ref: menu1, inView: menuInView } = useInView({
    threshold: 0.1,
    delay: 1000,
  });

  useEffect(() => {
    if (menuInView === true) {
      setMenuScroll(menuScroll + 1);
    }
  }, [menuInView]);

  // Code for menu options

  const [browseOption, setBrowseOption] = useState(0);

  const { ref: browse1, inView: browseView } = useInView({
    threshold: 0.1,
    delay: 1000,
    // rootMargin: "3000px",
    // triggerOnce: true,
  });

  useEffect(() => {
    if (browseView === true) {
      setBrowseOption(browseOption + 1);
    }
  }, [browseView]);

  var tablePersons = [];

  for (let i = 1; i < 21; i++) {
    tablePersons.push(i);
  }

  const navigate = useNavigate();

  const handleOptionChange = () => {
    navigate("/menu");
  };

  const [reservedSeat, setReservedSeat] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");

  const handleTime = (e) => {
    setTime(e.target.value);
  };

  const handlePeople = (e) => {
    setPeople(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleBooking = () => {
    setReservedSeat({
      peeps: people,
      dates: date,
      times: time,
    });

    alert(reservedSeat);
    console.log(reservedSeat);
  };

  const dispatch = useDispatch();

  dispatch(saveReserved(reservedSeat));
  return (
    <div>
      <div
        className={home.containerDiv}
        style={{
          backgroundImage: `url(${images[count]})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          position: "absolute",
          left: "0px",
          top: "0px",
          minWidth: "100vw",
          zIndex: -10,
        }}
      ></div>

      <figure>
        <img
          src={logo}
          style={{ width: "350px", position: "absolute", top: "5vh" }}
        ></img>
      </figure>

      <ul className={home.menuList}>
        <li>Home</li>
        <li>
          <select>
            <option onClick={handleOptionChange} value="menu">
              Menu
            </option>

            <option>info</option>
          </select>
        </li>
        <Link style={{ textDecoration: "none", color: "black" }} to="/about">
          <li>About</li>
        </Link>
        <li>Contact</li>
        <li>Find a table</li>
      </ul>

      <div className={home.welcomeAddress}>
        Welcome to <br /> Chateau Nourriture
      </div>

      <div className={home.informationPage}>
        <div className={home.welcomeText}>
          <div className={home.miniAlert}>
            Enhance your Taste <div> </div>
          </div>

          <h1>
            Enjoy An Exceptional <br /> Journey of Taste
          </h1>

          <div className={home.welcomeContent}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s, when an unknown printer took a galley of type
            <br />
            and scrambled it to make a type specimen book. It has survived not
            <br />
            only five centuries, but also the leap into electronic typesetting
          </div>
        </div>
        <button> Learn more </button>

        <img
          ref={imageRef}
          style={{ opacity: checkTime }}
          className={`${home.exclusiveImage} ${
            checkTime == 1 && imageView ? home.imageIntersection : ""
          } `}
          src={exclusiveFood}
        ></img>

        <img className={home.steamedImage} src={steamedFood}></img>
      </div>
      <div className={home.foodMenu}>
        <ul className={home.menuTable}>
          <li
            ref={menu1}
            style={{ opacity: menuScroll }}
            className={` ${home.menu1Static} ${
              menuScroll == 1 && menuInView ? home.menu1Movement : ""
            }`}
          >
            <table>
              <thead> Salads and Soups </thead>
              <tbody>
                <tr>
                  <td>
                    Spinnach salad <br />
                    <span> Apple, goat cheese , apple cider dressing </span>
                  </td>
                  <td>$9.50 </td>
                </tr>
                <tr>
                  <td>
                    Caprese Salad <br />
                    <span> Ripe tomato with fresh mozzarella and basil </span>
                  </td>
                  <td> $7.50 </td>
                </tr>
                <tr>
                  <td> French Onion Soup </td> <td> $5.00 </td>
                </tr>
                <tr>
                  <td> Lobster Bisque </td> <td> $8.00 </td>
                </tr>
              </tbody>
            </table>
          </li>

          <li
            ref={menu1}
            style={{ opacity: menuScroll }}
            className={` ${home.menu1Static} ${
              menuScroll == 1 && menuInView ? home.menu2Movement : ""
            }`}
          >
            <table>
              <thead> Appetizers </thead>
              <tbody>
                <tr>
                  <td> Shrimp Remoulade/Shrimp Cocktail </td> <td> $16.00 </td>
                </tr>
                <tr>
                  <td> Spicy Lobster </td> <td> $19.00 </td>
                </tr>
                <tr>
                  <td> Baked Escargot </td> <td> $16.00 </td>
                </tr>
                <tr>
                  <td> Seared Ahi Tuna </td> <td> $17.00 </td>
                </tr>
                <tr>
                  <td> Proscuitto Wrapped Mozzarella </td> <td> $14.00 </td>
                </tr>
              </tbody>
            </table>
          </li>

          <li
            ref={menu1}
            style={{ opacity: menuScroll }}
            className={` ${home.menu1Static} ${
              menuScroll == 1 && menuInView ? home.menu3Movement : ""
            }`}
          >
            <table>
              <thead> Sea Foods</thead>
              <tbody>
                <tr>
                  <td>
                    Stuffed Lobster Tail <br />
                    <span>
                      With lump crabmeat and topped with imperial sauce.
                    </span>
                  </td>
                  <td> Market Price </td>
                </tr>
                <tr>
                  <td>
                    Maryland Crab Cake Dinner <br />
                    <span>
                      Two thickm broiled Maryland Style Crabs cakes with <br />
                      coleslaw and red remoulade sauce.
                    </span>
                  </td>
                  <td> $15.00</td>
                </tr>
                <tr>
                  <td>
                    Whole Lobster <br />
                    <span>
                      2 - 5lbs. <br /> -Stuffed with Crab Imperialm add $5
                    </span>
                  </td>
                  <td> Not Fixed </td>
                </tr>
                <tr>
                  <td> Maryland Crab cakes </td> <td> $22.00 </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>

        <div
          ref={browse1}
          style={{ opacity: browseOption }}
          className={` ${home.menuButtons} ${
            browseOption == 1 && browseView ? home.menuButtonsMovement : ""
          }`}
        >
          <button>BROWSE BRUNCH MENU</button>
          <button>BROWSE MAIN MENU</button>
        </div>

        <ul className={home.menuInfoPics}>
          <li>
            <img src={wine} />

            <figcaption>
              <span>
                WINE LIST <br />
              </span>
              <span>
                HAVE A DRINK <br />
              </span>
              <span> LEARN MORE </span>
            </figcaption>
          </li>
          <li>
            <img src={dessert} />
            <figcaption>
              <span>
                Savory Choices <br />
              </span>
              <span>
                Incredible Desserts <br />
              </span>
              <span> DESSERT MENU </span>
            </figcaption>
          </li>
        </ul>

        <div className={home.philosophyContainer}>
          <div>
            <img src={chef} />
            <img src={foodPhilo} />
          </div>
          <div>
            <span> Community & Balance </span> <br />
            <h1>
              OUR FOOD <br /> PHILOSOPHY
            </h1>
            <br />
            <p>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
            <br />
            <ol>
              <li>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
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

        <div className={home.footer}>
          <img src={clock} />
          <img src={bell} />
        </div>

        <div className={home.bookATable}>
          <span>
            Online Reservation <br />
          </span>
          <span> BOOK A TABLE </span>
          <select value={people} onChange={handlePeople}>
            {tablePersons.map((data, index) => (
              <option
                value={index + 1 == 1 ? ` ${data} Person` : ` ${data} People`}
              >
                {data} {data == 1 ? "Person" : "People"}
              </option>
            ))}
            <option value="Large Party"> Large Party</option>
          </select>
          <input value={date} onChange={handleDate} type="date" />
          <input value={time} onChange={handleTime} type="time" />
          <button type="button" onClick={handleBooking}>
            {" "}
            BOOK NOW{" "}
          </button>
        </div>

        <footer style={{ marginTop: "-340vh" }}>
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

          <ul className={home.address}>
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

export default Home;

// TRASH CODE

/*
  // setInterval(() => {
  //   if (count == 1) {
  //     setCount(2);
  //   } else if (count == 2) {
  //     setCount(3);
  //   } else if (count == 3) {
  //     setCount(1);
  //   }
  // }, 10000);

  // setInterval(() => {
  //   if (count == 2) {
  //     setImage(food2);
  //   } else if (count == 3) {
  //     setImage(food3);
  //   } else if (count == 1) {
  //     setImage(food1);
  //   }
  // }, 10000); */
