import "./HomeResForm.css";

function HomeResForm() {
  return (
    <div className="home-res">
      <h1 className="home-res-title">Save time, save money!</h1>
      <p className="home-res-content">
        Sign up and we'll send the best deal for you
      </p>
      <form className="home-res-form">
        <input
          className="home-res-form__iput"
          type="email"
          placeholder="Your Email"
        ></input>
        <button className="home-res-form__btn" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default HomeResForm;
