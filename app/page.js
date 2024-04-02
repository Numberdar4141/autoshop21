//import Home_1 from "./(home)/home-1/page";
import Wrapper from "./layout/wrapper";
import Home_1 from "./(home)/home-1/page";

export const metadata = {
  title: " Auto Shop - Automotive & Car Dealer ",
  description: `Automotive & Car Dealer. `,
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_1 />
    </Wrapper>
  );
}
