import React from "react";
import classes from "./projectstatus.module.scss";
import Image from "next/image";
import { Text } from "@chakra-ui/react";

const ProjectStatus = ({ projectstatuses }) => {
  return (
    <>
      {" "}
      {projectstatuses.map((project, index) => (
        <div key={index} className={classes.folderItem}>
          <Image
            width={40}
            height={40}
            src={project.imageSrc}
            alt="folder-icon"
          />
          <div>
            <p className={classes.number}>{project.number}</p>
            <Text color="gray.600">{project.status}</Text>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectStatus;
