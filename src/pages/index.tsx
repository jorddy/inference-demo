import { useCreateKudo } from "@/hooks/use-create-kudo";
import { useKudos } from "@/hooks/use-kudos";
import { KudoSchema } from "@/shared/kudo-schema";
import { useQueryClient } from "react-query";

export default function Index() {
  const queryClient = useQueryClient();
  const kudos = useKudos();
  const createKudo = useCreateKudo(queryClient);

  return (
    <main>
      <h1>hi</h1>
      <ul>
        {kudos.isLoading
          ? "Loading..."
          : kudos.data?.map(kudo => <li key={kudo.id}>{kudo.name}</li>)}
      </ul>

      <form
        onSubmit={e => {
          e.preventDefault();
          const form = new FormData(e.target as HTMLFormElement);
          const data = Object.fromEntries(form.entries()) as KudoSchema;

          createKudo.mutate(data);
        }}
      >
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' id='name' />
        <p style={{ color: "red" }}>
          {createKudo.error?.formErrors.fieldErrors.name}
        </p>

        <label htmlFor='text'>Text:</label>
        <input type='text' name='text' id='text' />
        <p style={{ color: "red" }}>
          {createKudo.error?.formErrors.fieldErrors.text}
        </p>

        <button type='submit'>Create</button>
      </form>
    </main>
  );
}
