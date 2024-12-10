import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBar from "./SearchBar";

const ContactList = () => {
  const [filteredList, setFilteredList] = useState([]);
  const { contactList, keyword } = useSelector((state) => state);

  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword]);
  return (
    <>
      <h6>Friends List</h6>
      <SearchBar />
      {filteredList.map((it, idx) => (
        <ContactItem key={idx} item={it} />
      ))}
    </>
  );
};

export default ContactList;
