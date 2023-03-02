import Form from "@/components/Form";

export default function Page() {
  return (
    <div className="grid min-h-screen place-content-center bg-[#d6d9e6] bg-opacity-80">
      <Form previousPageUrl="/" nextPageUrl="/add-ons">
        <div>Plan</div>
      </Form>
    </div>
  );
}
