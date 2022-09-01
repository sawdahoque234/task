import React from "react";
import { collection, deleteDoc } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import AddNew from "./AddNew";
import { Button, Text } from "@chakra-ui/react";

const NoteList = ({ path }) => {
  const query = collection(db, path);
  const [docs, loading] = useCollectionData(query);
  return (
    <div>
      {loading && "Loading....."}

      <ul>
        {docs?.map((doc) => (
          <>
            <Text ml="10px" w="40%" m="auto" text-align="start">
              Note: {doc.name}
              <Button
                color="black"
                backgroundColor="red.400"
                mx="4"
                size="sm"
                onClick={() => deleteDoc(db, "path", doc.id)}
              >
                Delete Note
              </Button>
            </Text>
          </>
        ))}
        <br />
        Add New Note: <AddNew path={path} />
      </ul>
      <br />
    </div>
  );
};

export default NoteList;
