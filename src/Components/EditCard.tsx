import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cards, { CardInterface } from "../data/cards";
import AddEditLayout from ".//AddEditLayout";

interface EditCardProps {}

const EditCard: React.FC<EditCardProps> = ({}) => {
  const { id } = useParams<{ id: string }>();
  const [data] = useState<CardInterface | undefined>(cards!.searchCard(id));

  return (
    <>
      <h1>Edit Card</h1>

      <AddEditLayout data={data!} />
    </>
  );
};

export default EditCard;
