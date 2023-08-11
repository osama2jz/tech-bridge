import { Avatar, Stack, Text } from "@mantine/core";
import React from "react";
import { useStyles } from "./styles";

const TeamCard = ({ obj }) => {
  const { classes } = useStyles();
  return (
    <Stack className={classes.teamCard} spacing={'xs'}>
      <Avatar size="120px" radius={"xl"} src={obj.img} />
      <Text fw="bold">{obj?.name}</Text>
      <Text color="gray">{obj?.role}</Text>
    </Stack>
  );
};

export default TeamCard;
