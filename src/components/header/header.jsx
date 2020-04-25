import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cartIcon/cartIncon";
import CartDropDown from "../cartDropDown/cartDropDown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as LogoImg } from "../../assets/crown.svg";

import {
  HeaderContainer,
  Logo,
  OptionDiv,
  OptionLink,
  Options,
} from "./styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <Logo to="/">
        <LogoImg className="logo" />
      </Logo>

      <Options>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="/sign">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </Options>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
