import {
    Box,
    Button,
    Container,
    HStack,
    Select,
    Stack,
  } from "@chakra-ui/react";
  import React, { useRef, useState } from "react";
  import CodeEditor from "../components/CodeEditor";
  import Loading from "../components/Loading";
  import axios from "axios";
  import Markdown from "react-markdown";
  import GithubLink from "../components/GithubLink";
  import { parseGithubLink } from "../utils/utils";
  
  const Home = () => {
    const [code, setCode] = useState("Write your code here");
    const [language, setLanguage] = useState("JavaScript");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(
      "# Hi there, *Output will be here...*!"
    );
    const messageBoxRef = useRef();
  
    //handleCodeEditor
    const handleCodeChange = (newCode) => {
      setCode(newCode);
    };
  
    //handleCONVERT
    const handleConvert = async () => {
      messageBoxRef.current.focus();
      if (code && language) {
        let obj = {
          code: code,
          language: language,
        };
        setLoading(true);
        try {
          const response = await axios.post(
            "https://codeconverter-7z3j.onrender.com/convert",
            obj,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setLoading(false);
          setMessage(response?.data?.msg);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    };
  
    //handleDEBUG
    const handleDebug = async () => {
      messageBoxRef.current.focus();
      if (code) {
        let obj = {
          code: code,
        };
        setLoading(true);
        try {
          const response = await axios.post(
            "https://codeconverter-7z3j.onrender.com/debug",
            obj,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setLoading(false);
          setMessage(response?.data?.msg);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    };
  
    //handleQUALITYCHECK
    const handleQualityCheck = async () => {
      messageBoxRef.current.focus();
      if (code) {
        let obj = {
          code: code,
        };
        setLoading(true);
        try {
          const response = await axios.post(
            "https://codeconverter-7z3j.onrender.com/qualitycheck",
            obj,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          setLoading(false);
          setMessage(response?.data?.msg);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }
    };
  
    //handleGithubPaste
    const handleGithubPaste = async (link) => {
      const { repositoryName, repositoryOwner, filePath } = parseGithubLink(link);
      setLoading(true)
      try {
        const response = await axios.post("https://codeconverter-7z3j.onrender.com/github", {
          repositoryName,
          repositoryOwner,
          filePath,
        });
        setLoading(false)
        setCode(response?.data?.content)
      } catch (error) {
        setLoading(false)
        console.log(error);
      }
    };
  
    return (
      <Box bg={"#191259"} color={"white"}>
        <Stack
          direction={{ base: "column", md: "column", lg: "row" }}
          justifyContent={"space-around"}
          alignItems={"center"}
          bg={"#682aa1"}
          padding={"15px"}
        >
          <HStack>
            <Select
              bg="tomato"
              borderColor="tomato"
              color="black"
              width={"200px"}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              isDisabled={loading}
            >
              <option value="javaScript">JavaScript</option>
              <option value="python">Python</option>
              <option value="php">php</option>
              <option value="java">Java</option>
            </Select>
            <Button
              colorScheme="green"
              onClick={handleConvert}
              isDisabled={loading}
            >
              CONVERT
            </Button>
          </HStack>
          <Box>
            <GithubLink handleGithubPaste={handleGithubPaste} loading={loading} />
          </Box>
          <HStack justifyContent={"center"}>
            <Button colorScheme="red" onClick={handleDebug} isDisabled={loading}>
              DEBUG
            </Button>
            <Button
              colorScheme="telegram"
              onClick={handleQualityCheck}
              isDisabled={loading}
            >
              QUALITY CHECK
            </Button>
          </HStack>
        </Stack>
  
        <Container
          maxW={"100%"}
          style={{ minHeight: "calc(100vh - 195px)", overflow: "hidden" }}
          margin={"0px"}
          padding={"0px"}
        >
          <Stack
            direction={{ base: "column", md: "row", lg: "row" }}
            margin={"0px"}
            spacing={0}
            bg={"black"}
          >
            <Box width={{ base: "100%", md: "100%", lg: "50%" }}>
              <CodeEditor code={code} onChange={handleCodeChange} />
            </Box>
            <Box
              overflowY={"auto"}
              className="custom-scrollbar"
              width={{ base: "100%", md: "100%", lg: "50%" }}
              height={"calc(100vh - 195px)"}
              padding={"10px"}
            >
              {loading ? (
                <Stack
                  justifyContent={"center"}
                  height={"calc(100vh - 195px)"}
                  alignItems={"center"}
                >
                  <Loading />
                </Stack>
              ) : (
                <Box
                  style={{ paddingLeft: "20px" }}
                  ref={messageBoxRef}
                  tabIndex={0}
                >
                  <Markdown>{message}</Markdown>
                </Box>
              )}
            </Box>
          </Stack>
        </Container>
      </Box>
    );
  };
  
  export default Home;