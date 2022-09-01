import { db } from "./firebase";
import { collection, deleteDoc, doc } from "@firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import TopicList from "./components/TopicList";
import AddNew from "./components/AddNew";
import { Box, Heading, Button, Text } from "@chakra-ui/react";

function App() {
  const query = collection(db, "subjects");
  const [docs, loading] = useCollectionData(query);

  return (
    <Box p="5">
      <Heading size="md" color="blue.500" pb="10">
        All Subject List
      </Heading>
      {loading && "Loading................."}
      <Box>
        <Heading size="md" color="orange.500">
          Add Subject:
        </Heading>
        <AddNew path="subjects" />
        <br />
        {docs?.map((doc) => (
          <Box>
            <li ml="10px">
              Subject Name:{doc.name}
              <Button
                color="black"
                backgroundColor="gray.300"
                mx="4"
                size="sm"
                onClick={() => deleteDoc(db, "subjects", doc.id)}
              >
                Delete Subject
              </Button>
            </li>
            <TopicList path={`subjects/${doc.name}/topics`} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default App;
