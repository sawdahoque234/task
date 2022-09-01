import React from "react";
import { collection, deleteDoc } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import AddNew from "./AddNew";
import NoteList from "./NoteList";
import { Box, Heading, Button, Text } from "@chakra-ui/react";

const TopicList = ({ path }) => {
  const query = collection(db, path);
  const [docs, loading] = useCollectionData(query);
  return (
    <Box>
      {loading && "Loading....."}
      <Heading size="md" color="green.500">
        Create New Topic:
      </Heading>{" "}
      <AddNew path={path} />
      <ul>
        {docs?.map((doc) => (
          <>
            <Text ml="10px" pt="20px" color="red.500">
              Topic Name:{doc.name}
              <Button
                color="black"
                backgroundColor="gray.300"
                mx="4"
                size="sm"
                type="submit"
                onClick={() => deleteDoc(db, "path", doc.id)}
              >
                Delete Topic
              </Button>
            </Text>
            <div>
              <NoteList path={`${path}/${doc.name}/notes`} />
            </div>
          </>
        ))}
        <br />
      </ul>
      <br />
    </Box>
  );
};

export default TopicList;
