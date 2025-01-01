import { Loader } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { type Ishow } from "tvmaze-api-ts";
import { ShowHeader } from "../components/ShowHeader";
import { Seasons } from "../components/Seasons";
import { Cast } from "../components/Cast";

export const ShowPage = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery<Ishow>({
    queryKey: [`shows/${id}`],
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    throw "something went wrong";
  }

  return (
    <>
      <ShowHeader show={data} />
      <Seasons showId={data.id} />
      <Cast showId={data.id} />
    </>
  );
};
