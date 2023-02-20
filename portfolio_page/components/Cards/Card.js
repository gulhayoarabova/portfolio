import Image from "next/image";
import classes from "./Card.module.scss";
import btn from "../../assets/images/btn.png";
import image1 from "../../assets/images/vagina.png";
import image2 from "../../assets/images/Group.png";
import image3 from "../../assets/images/pregnancy.png";


const Card = () => {
  return (
    <div className={classes.card_container}>
      <h4 className={classes.card_title}>
        Какие сервисы предоставляет Ladycare?
      </h4>
      <div className={classes.card_wrapper}>
        <div className={classes.card_item}>
          <p>Отслеживание цикла</p>
          <p>Поймите свой цикл и почувствуйте себя лучшей</p>
          <div className={classes.btn_img_wrap}>
            <button>
              <Image src={btn} alt="this is the button image" />
            </button>
            <div>
            <Image src={image1} alt="this is the button image" />
            </div>
          </div>
        </div>

        <div className={classes.card_item}>
          <p>Отслеживание цикла</p>
          <p>Поймите свой цикл и почувствуйте себя лучшей</p>
          <div className={classes.btn_img_wrap}>
            <button>
              <Image src={btn} alt="this is the button image" />
            </button>
            <Image src={image2} alt="this is the button image" />
          </div>
        </div>

        <div className={classes.card_item}>
          <p>Отслеживание цикла</p>
          <p>Поймите свой цикл и почувствуйте себя лучшей</p>
          <div className={classes.btn_img_wrap}>
            <button>
              <Image src={btn} alt="this is the button image" />
            </button>
            <Image src={image3} alt="this is the button image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
