import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const Dummy = [
    {
      id: "m1",
      title: "HP ENVYx360",
      price: 35000,
      description: "suitable for both work and relaxation",
    },
    {
      id: "m2",
      title: "SAMSUNG A50",
      price: 130000,
      description: "High quality camera and high storage space",
    },
    {
      id: "m3",
      title: "SAMSUNG Tab a2016",
      price: 50000,
      description: "white color with a wide screen",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
