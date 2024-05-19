import { Box, Button, Input, TextField } from "@mui/joy";
import React, { useState } from "react";

function BuildIndex() {
  const [mainLink, setMainLink] = useState({
    value: localStorage.getItem("mainLink"),
    disabled: localStorage.getItem("mainLink") || false,
  });
  const [fileLink, setFileLink] = useState({
    quality480: "480p",
    quality720: "720p",
    quality1080: "1080p",
    link480: "",
    link720: "",
    link1080: "",
  });
  console.log(fileLink);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="build">
      <div className="container">
        <h1 className="build-title">Build</h1>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Input
            onChange={(e) => {
              setMainLink({ value: e.target.value });
              localStorage.setItem("mainLink", e.target.value);
            }}
            disabled={mainLink.disabled}
            value={mainLink.value}
            endDecorator={
              <Button
                disabled={mainLink.disabled}
                onClick={(e) => {
                  e.preventDefault();
                  setMainLink({ disabled: true });
                }}
              >
                Continue
              </Button>
            }
            size="lg"
            placeholder="Type the main link"
          />
          {mainLink.disabled && (
            <Button onClick={() => setMainLink({ disabled: false })}>
              Edit
            </Button>
          )}
        </Box>
        <Box
          sx={{
            mt: 7,
            display: "flex",
            justifyContent: "start",
            gap: "10px",
          }}
        >
          <Button>+ File</Button>
          <Button>+ Folder</Button>
        </Box>
        <Box
          sx={{
            mt: 7,
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <Input
            disabled
            onChange={(e) => {
              setFileLink({ ...fileLink, quality480: e.target.value });
            }}
            value={fileLink.quality480}
            sx={{
              width: 100,
            }}
            placeholder="Quality"
          />
          <Input
            onChange={(e) => {
              setFileLink({ ...fileLink, link480: e.target.value });
            }}
            value={fileLink.link480}
            placeholder="Link"
          />
          <Button onClick={(e) => handleSubmit(e)}>Add</Button>
        </Box>
        <Box
          sx={{
            mt: 7,
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          <Input
            disabled
            onChange={(e) => {
              setFileLink({...fileLink, quality720: e.target.value });
            }}
            value={fileLink.quality720}
            sx={{
              width: 100,
            }}
            placeholder="Quality"
          />
          <Input
            onChange={(e) => {
              setFileLink({...fileLink, link720: e.target.value });
            }}
            value={fileLink.link720}
            placeholder="Link"
          />
          <Button onClick={(e) => handleSubmit(e)}>Add</Button>
        </Box>
        <Box
          sx={{
            mt: 7,
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
          onClick={(e) => handleSubmit(e)}
          type="submit"
        >
          <Input
            disabled
            onChange={(e) => {
              setFileLink({...fileLink, quality1080: e.target.value });
            }}
            value={fileLink.quality1080}
            sx={{
              width: 100,
            }}
            placeholder="Quality"
          />
          <Input
            onChange={(e) => {
              setFileLink({...fileLink, link1080: e.target.value });
            }}
            value={fileLink.link1080}
            placeholder="Link"
          />
          <Button onClick={(e) => handleSubmit(e)}>Add</Button>
        </Box>
        <h1 className="build-title">{mainLink.value}/playerjs.html?file=</h1>
      </div>
    </div>
  );
}

export default BuildIndex;
