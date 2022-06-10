import { Kudo } from "@prisma/client";
import { useQuery } from "react-query";

export function useKudos() {
  return useQuery<Kudo[]>(["kudos"], async () =>
    fetch("/api/kudos").then(r => r.json())
  );
}
