import { List } from "@/components/list";

export default function Home({ params }: { params: { platform: string } }) {
  return (
    <>
      <h2>My Post: {params.platform}</h2>
      <List />
    </>
  );
}
