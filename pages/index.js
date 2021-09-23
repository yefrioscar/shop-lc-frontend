import gql from "graphql-tag";
import Head from "next/head";
import ProductsList from "../components/ProductsList";
import { getProducts } from "../utils/api";
import withApollo from "../lib/apollo";
import { useQuery } from "@apollo/client";
const QUERY = gql`
  {
    products {
      id
      title
      description
      image {
        url
        width
        height
        ext
      }
    }
  }
`;

const HomePage = (props) => {
  const { loading, error, data } = useQuery(QUERY);
  console.log(data);

  // eslint-disable-next-line react/no-unescaped-entities
  if (error) return <div>"Error loading restaurants"</div>;
  if (loading) return <h1>Fetching</h1>;

  if (data && data.products && data.products.length) {
    return (
      <div>
        <Head>
          <title>Laure Shop</title>
        </Head>
        <ProductsList products={data.products} />
      </div>
    );
  }
};

// HomePage.getStaticProps = async () => {
//   const products = await getProducts();
//   return { props: { products } };
// };

export default withApollo({ ssr: true })(HomePage);
