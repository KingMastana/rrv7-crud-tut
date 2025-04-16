import { Form, redirect, type ActionFunctionArgs } from "react-router";
import { supabase } from "~/supabase-client";

export function meta() {
  return [
    { title: "New Item | RRV7" },
    {
      name: "description",
      content: "Create a new item using our Supabase CRUD app",
    },
  ];
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

  if (!title || !description) {
    return { error: "Title and content are request" };
  }

  const { error } = await supabase.from("items").insert({ title, description });
  if (error) {
    return { error: error.message };
  }

  return redirect("/");
}

export default function NewItem() {
  return (
    <div>
      <h2>Create New Item</h2>
      <Form method="post" className="space-y-4 bg-white p-4 rounded shadow">
        <div>
          <label className="block text-gray-700"> Title </label>
          <input type="text" name="title" className="input" required />
        </div>

        <div>
          <label className="block text-gray-700"> Content </label>
          <textarea name="description" className="input" required />
        </div>

        <button
          type="submit"
          className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
        >
          {" "}
          Create Item{" "}
        </button>
      </Form>
    </div>
  );
}
