import { QueryClient, useMutation } from "react-query";
import { KudoSchema, kudoSchema } from "@/shared/kudo-schema";
import { Kudo } from "@prisma/client";
import { ZodError } from "zod";

export function useCreateKudo(queryClient: QueryClient) {
  return useMutation<Kudo, ZodError, KudoSchema>(
    data => {
      const kudo = kudoSchema.parse(data);

      return fetch("/api/kudos", {
        method: "POST",
        body: JSON.stringify(kudo)
      }).then(r => r.json());
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["kudos"])
    }
  );
}
