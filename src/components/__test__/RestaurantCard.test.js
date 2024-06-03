import { render, screen } from "@testing-library/react";
import RestaurantCard, { withBestSellerLabel } from "..//RestaurantCard";
import resCardMock from "../mocks//resCardMock.json";
import "@testing-library/jest-dom";

it("should render the restuarant card component with props data ", () => {
  render(<RestaurantCard resData={resCardMock} />);

  const name = screen.getByText("Burger King");
  expect(name).toBeInTheDocument();

  const cuisines = screen.getByText("Burgers, American");
  expect(cuisines).toBeInTheDocument();

  const avgRating = screen.getByText("4.3 stars");
  expect(avgRating).toBeInTheDocument();

  const deliveryTime = screen.getByText("30-35 mins");
  expect(deliveryTime).toBeInTheDocument();
});

it("should render the restuarant card component with promoted label ", () => {
  const MockRestaurantCard = withBestSellerLabel(RestaurantCard);
  render(<MockRestaurantCard resData={resCardMock} />);

  const bestLabel = screen.getByText("Best");
  expect(bestLabel).toBeInTheDocument();
});
