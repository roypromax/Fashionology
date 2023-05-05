import { Image } from "@chakra-ui/react";
import "swiper/css/navigation";

// import "swiper/css/pagination";
// import '../style.scss';

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Keyboard, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";

const Carousel = () => {
  return (
    <div style={{ margin: "auto", width: "92%" }}>
      <h3>You May Also Like</h3>
      <br />
      <hr />
      <br />
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/4130095140047_091_b2?$an-category$&fit=constrain&fmt=webp&hei=523&qlt=80&wid=349"
            w="100%"
            mt="10px"
            mb=""
          />
          <a href="Pilcro RecerBack Tank">
            <h2>Pilcro RecerBack Tank</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/83364729_030_b2?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Pilcro RecerBack Tank">
            <h2>Ottoline Sporty Stripes</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/70782776_007_b?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Pilcro RecerBack Tank">
            <h2>Pilcro Tank</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/81957797_001_b2?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Pilcro RecerBack Tank">
            <h2>RecerBack Tank</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/79311007_266_b2?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Pilcro RecerBack Tank">
            <h2>Stripes</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/4142952480002_090_b2?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Pilcro RecerBack Tank">
            <h2>Dazzling Dress</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/81197956_011_b2?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Pilcro RecerBack Tank">
            <h2>Dazzling Tank</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/4110944440001_009_b?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Pilcro RecerBack Tank">
            <h2>Belted Dress</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/82271289_070_b2?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Pilcro RecerBack Tank">
            <h2>Dazzling Belted Dress</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/4139929840021_266_b2?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Pilcro RecerBack Tank">
            <h2>Essentiel Antwerp Dazzling Belted Dress</h2>
          </a>
        </SwiperSlide>
      </Swiper>
      <br />
      <br />
      <br />
      <hr />
      <br />
      {/* 2nd carousel */}

      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/80254543_066_b?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Pilcro RecerBack Tank">
            <h2>Pilcro RecerBack Tank</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/78936119_040_b2?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Essentiel Antwerp Dazzling Belted Dress">
            <h2>Essentiel Antwerp Dazzling Belted Dress</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/81110561_085_b2?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Antwerp Dazzling Dress">
            <h2>Antwerp Dazzling Dress</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/80200777_030_b?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Ottoline Sporty Stripes">
            <h2>Ottoline Sporty Stripes</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/4545Z506AA_040_b3?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Sporty Stripes">
            <h2>Sporty Stripes</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/4540Z557AA_095_b2?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Stripes Tulle Dress">
            <h2>Stripes Tulle Dress</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/80643257_010_b2?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="Ottoline Sporty Stripes">
            <h2>Ottoline Sporty Stripes</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/80560345_000_b2?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="RecerBack Tank">
            <h2>RecerBack Tank</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/4540H031AD_066_b2?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <a href="High Shine Tank">
            <h2>High Shine Tank</h2>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.urbndata.com/is/image/Anthropologie/80254600_066_b2?$an-category$&qlt=80&fit=constrain"
            w="100%"
            mt="10px"
          />
          <h2>Pilcro RecerBack Tank</h2>
        </SwiperSlide>
      </Swiper>
      <br />
      <br />
      <br />
      <hr />
      <br />
    </div>
  );
};

export default Carousel;
