import { Input } from "@chakra-ui/react";
import { doc, setDoc } from "firebase/firestore";
import React, { useRef } from "react";
import { db } from "../firebase";
import { Box, Heading, Button, Text } from "@chakra-ui/react";

const AddNew = ({ path }) => {
  const name = useRef();
  async function handleSubmit(e) {
    e.preventDefault();
    const docRef = doc(db, path, name.current.value);
    await setDoc(docRef, { name: name.current.value });
    e.target.reset();
  }
  return (
    <Box>
      <form action="" onSubmit={handleSubmit}>
        <Input vtype="text" ref={name} width="40%" size="xs" />
        <Button type="submit" mx="5" size="sm">
          Add
        </Button>
      </form>
    </Box>
  );
};

export default AddNew;
