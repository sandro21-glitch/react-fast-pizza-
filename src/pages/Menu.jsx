import { useEffect, useState } from "react";
import { getMenuItems } from "../features/menu/menuSlice";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../components/MenuItem";
import Loading from "../components/Loading";
const Menu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenuItems());
  }, []);
  const { menuItems, isLoading } = useSelector((store) => store.menu);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ul className="section">
      {menuItems.map((item) => {
        return (
          <MenuItem
            key={item.id}
            {...item}
          />
        );
      })}
    </ul>
  );
};

export default Menu;
