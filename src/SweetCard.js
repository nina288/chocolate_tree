import React from "react";

class SweetCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isImage: true,
      product: [
        {
          id: 1,
          image: <img src="/image/tree.png" alt="" />,
          brand: "Красный мак",
          manufacter: "Красный октябрь",
          country: "Россия",
          type_product: "Конфеты",
          kindOfsweet: "Глазированные",
          kind: "Молочный",
          price: "81 р",
          weight: "200 г",
          selling: true
        },
        {
          id: 2,
          image: <img src="/image/tree.png" alt="" />,
          brand: "Мишка косолапый",
          manufacter: "Красный Октябрь",
          country: "Россия",
          type_product: "Конфеты",
          kindOfsweet: "Батончики",
          kind: "Молочный",
          price: "140 р",
          weight: "1 кг",
          selling: true
        },
        {
          id: 3,
          image: <img src="/image/tree.png" alt="" />,
          brand: "Конти",
          manufacter: "ПО Конти АО",
          country: "Россия",
          type_product: "Конфеты",
          kindOfsweet: "Желейные",
          kind: "Фруктовые",
          price: "60 р",
          weight: "200 г",
          selling: true
        },
        {
          id: 4,
          image: <img src="/image/tree.png" alt="" />,
          brand: "Рот Фронт",
          manufacter: "Объединенные кондитеры ООО",
          country: "Россия",
          type_product: "Конфеты",
          kindOfsweet: "Шоколадные",
          kind: "Кремовые",
          price: "96 р",
          weight: "200 г",
          selling: true
        }
      ]
    };

    this.tooggleImage = this.tooggleImage.bind(this);
  }
  tooggleImage = () => {
    this.setState((prevImage) => ({
      isImage: !prevImage.isImage,

      product: [
        {
          id: 1,

          image:
            prevImage.isImage === true ? (
              <img src="/image/kr_mak2.jpg" alt="" />
            ) : (
              <img src="/image/kr_october.jpg" alt="" />
            ),
          brand: "Красный мак",
          price: "81 р",
          weight: "200 г"
        },
        {
          id: 2,
          image:
            prevImage.isImage === true ? (
              <img src="/image/kr_octob2.jpg" alt="" />
            ) : (
              <img src="/image/miska_kosolap.jpg" alt="" />
            ),
          brand: "Мишка косолапый",
          price: "140 р",
          weight: "1 кг"
        },
        {
          id: 3,
          image:
            prevImage.isImage === true ? (
              <img src="/image/rotfr2.jpg" alt="" />
            ) : (
              <img src="/image/rotfront.jpg" alt="" />
            ),
          brand: "Конти",
          price: "60 р",
          weight: "200 г"
        },
        {
          id: 4,
          image:
            prevImage.isImage === true ? (
              <img src="/image/rotfrbat2.jpg" alt="" />
            ) : (
              <img src="/image/geleinue.jpg" alt="" />
            ),
          brand: "РотФронт",
          price: "96 р",
          weight: "200 г"
        }
      ]
    }));
  };
  render() {
    return (
      <>
        <div onClick={this.tooggleImage}>
          <div>
            {this.state.product.map((item) => (
              <>
                <p key={item}></p>
                <p>{item.image}</p>
                <p>{item.brand}</p>
                <p> {item.manufacter}</p>
                <p> {item.kindOfsweet}</p>
                <p>Вес: {item.weight}</p>
                <p>Цена: {item.price}</p>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}
export default SweetCard;
